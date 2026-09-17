# この素晴らしい世界に祝福を！ — Japanese card runtime assets

Version-pinned public runtime dependencies and fonts for the Japanese card maintained by eumenes12ds. Card prompts, worldbooks, account data and chat histories are not distributed here.

The original inline rendering architecture is retained. Dependencies are archived from the exact upstream responses listed in DEPENDENCIES.json; ES module imports and font URLs point to local repository files. Third-party copyrights and license texts are preserved under licenses/. No model credentials are included. Provider SDK endpoints are dormant application APIs, not external asset loads.

See LICENSES.json for dependency licenses and provenance. Upstream source-map hints are removed because their source maps are not runtime dependencies.

The Japanese MVU source build includes Japanese UI/help and a narrow YAML compatibility normalizer for colon-bearing plain values and repeated root party rosters from historical card greetings. Maintained source is included under source/MagVarUpdate. Huninn is delivered as WOFF2 with the same glyph outlines, mapping and horizontal metrics; the original TTF and OFL license remain available.
