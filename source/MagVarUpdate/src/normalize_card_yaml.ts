/** Preserve plain Japanese scalar values containing a YAML-significant colon. */
export function normalizeCardYaml(content: string): string {
    const rootPartyKeys = new Set<string>();
    let blockIndent: number | undefined;
    return content.split(/\r?\n/).filter(line => {
        const match = /^(主人公チーム|佐藤チーム|主角小队|佐藤小队):/.exec(line);
        if (!match) return true;
        if (rootPartyKeys.has(match[1])) return false;
        rootPartyKeys.add(match[1]);
        return true;
    }).map(line => {
        const indent = line.match(/^[\t ]*/)?.[0].length ?? 0;
        if (blockIndent !== undefined) {
            if (!line.trim() || indent > blockIndent) return line;
            blockIndent = undefined;
        }
        const match = /^([\t ]*(?:-[\t ]+)?[\p{L}\p{N}_$][^:\n]*):([\t ]+)(.*)$/u.exec(line);
        if (match && /^[|>][+-]?\d?(?:\s+#.*)?\s*$/.test(match[3])) blockIndent = indent;
        if (!match || /^[\[\{\x22'|>]/.test(match[3])) return line;
        const commentAt = match[3].search(/\s+#/);
        const value = (commentAt < 0 ? match[3] : match[3].slice(0, commentAt)).trimEnd();
        if (!/:\s/.test(value)) return line;
        const comment = commentAt < 0 ? '' : match[3].slice(commentAt);
        return `${match[1]}:${match[2]}${JSON.stringify(value)}${comment}`;
    }).join('\n');
}
