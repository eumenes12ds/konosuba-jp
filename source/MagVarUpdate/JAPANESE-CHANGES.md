# Japanese runtime build

Upstream MagicalAstrogy/MagVarUpdate v0.185.0, commit 4a3645f19705e9e73bb4df3a8e731d5ff994ce80. Japanese locale, six help pages and six button event names are localized. The card-specific build presents Japanese; source Chinese/English dictionaries remain in source for comparison. API protocols, event sequencing and rendering triggers are retained.

The StageDog adapter source and its AFPL license are in vendor-source/tavern_resource, with its upstream commit recorded there. Only its visible messages and the local import path are translated.

Build: npm ci --legacy-peer-deps --ignore-scripts; CI=true npm run build; CI=true node node_modules/webpack-cli/bin/cli.js --config build-zod.config.ts --mode production. After building, rewrite module imports using the upstream/path ledger in ../../DEPENDENCIES.json. Source-map hints are omitted from delivered modules.

## 2026-10-15 account settings compatibility

The UI retains Japanese labels while internal MVU keys/enums remain canonical. Known Japanese account-setting aliases are decoded before schema validation; writes preserve the account's existing dialect for other cards. Notifications, extra-model options and profiles, cleanup, compatibility, internal flags and unknown fields survive. Host retention projections do not rename the legacy storage sections. No preset, story-variable protocol, remote model request or dependency version is changed. The Japanese locale module's type declarations were aligned with its existing Japanese-only runtime.

Validation in the original build checkout: settings_japanese_compat.test.ts and store_response_format.test.ts, 18 tests passed. Its tsconfig expects slash-runner/@types (use the installed matching Tavern Helper declarations); tests use the upstream Jest setup. Production webpack build passed; existing asset-size advisories retained.
