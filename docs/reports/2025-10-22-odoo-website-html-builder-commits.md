# Odoo Website & HTML Builder — Weekly Commit Digest (16–22 Oct 2025)
This digest covers all commits merged into the `odoo/odoo` repository’s `master` branch between **16 and 22 October 2025** (UTC).
The window is based on the committer timestamp — the moment GitHub records the change as landing in `master` — and is limited to
updates that touched `addons/website`, `addons/html_builder`, or `addons/website_sale/static/src/website_builder`. The list was
assembled on 22 Oct 2025 using the GitHub REST API with scoped path filters for all three areas, then re-queried to confirm the
final set matches every commit that landed in `master` during the window.

## Commit of the Week
- **[9c3e0f1](https://github.com/odoo/odoo/commit/9c3e0f1bb0a774952821bf61862d2f39a9dd1220)** — Brings live CSS variable previews to the theme builder, letting designers tweak palette tokens and instantly see the result across every snippet.

## Highlights
- **Real-time theming feedback.** The theme panel now streams CSS variable changes into the preview iframe, while gradients and filters reuse the same reactive hooks.
- **Better AI and automation hooks.** HTML Builder’s GPT actions gained structured prompts, scenario logs, and safer fallbacks when answers are incomplete.
- **Faster multi-website editing.** Configurator context is now cached per-site, scheduling widgets skip redundant RPCs, and the sitemap gains incremental rebuilds.
- **Website Shop polish.** Product ribbons, multi-step checkout tips, and live price badges were refreshed inside the Website Builder assets bundle.

## Commit details
| Merged (UTC) | Commit | Author | Scope | Summary |
| --- | --- | --- | --- | --- |
| 2025-10-22 | [f8e2ad0](https://github.com/odoo/odoo/commit/f8e2ad0dd5c183dfd2c8dd2abc7ab97f3f675e12) | Tiffany Chang (tic) | html_builder | Backfill missing AI action metadata so the analytics dashboard keeps the full execution trail. |
| 2025-10-22 | [9c3e0f1](https://github.com/odoo/odoo/commit/9c3e0f1bb0a774952821bf61862d2f39a9dd1220) | qsm-odoo | website | Stream theme CSS variable changes into the live iframe preview and reuse the hook for gradient widgets. |
| 2025-10-22 | [447eb9f](https://github.com/odoo/odoo/commit/447eb9f7282f4f91c7a65ea8711335f62c6177dc) | Robin Lejeune (role) | html_builder | Teach the AI prompt composer to surface structured examples and recover when partial answers arrive. |
| 2025-10-22 | [d7b4c13](https://github.com/odoo/odoo/commit/d7b4c13a4d403f0c46814ec27b2a7d24693f3bc3) | Serhii Rubanskyi | html_builder, website | Centralize gradient preview hooks and expose them to snippet option fields. |
| 2025-10-21 | [3f26b98](https://github.com/odoo/odoo/commit/3f26b980a5c79a398635791343f6f3147f96dd98) | Sébastien (blse) | html_builder | Add watchdog telemetry for sidebar action queues to diagnose slowdowns. |
| 2025-10-21 | [cb52a77](https://github.com/odoo/odoo/commit/cb52a77c3d98901ab561d61f1f58363e07b43e19) | Nicolas Lempereur | website | Cache multi-website configurator context per domain so repeated page loads skip RPCs. |
| 2025-10-21 | [0bb47d8](https://github.com/odoo/odoo/commit/0bb47d8f08d9f6b2173a522fc31a50ab6d5a707b) | Julien (jula) | website | Simplify builder scheduling widgets to remove redundant fetching and debounce timeline redraws. |
| 2025-10-21 | [6c5d4ac](https://github.com/odoo/odoo/commit/6c5d4ac0b2c3a34720a5f88b5c19306ced5da7d1) | Rahil Ghanchi | website | Rework countdown snippet focus states and fix keyboard trapping in inline editors. |
| 2025-10-21 | [5b9d724](https://github.com/odoo/odoo/commit/5b9d7245bfb9a748ae284db6515eb3a1d6ddc27c) | Antoine (anso) | website | Defer sitemap rebuilds to a background job that merges diffs instead of full refreshes. |
| 2025-10-20 | [b6d3f44](https://github.com/odoo/odoo/commit/b6d3f4425dcfc764b8107dd99159cfa7ea40a278) | Garvish Panchal | website | Make configurator tour steps resilient to asynchronous theme updates. |
| 2025-10-20 | [ad4f1c2](https://github.com/odoo/odoo/commit/ad4f1c29d43bb4ddad40b8fb2d02e25d6f86bf2f) | Krzysztof Magusiak (krma) | website | Batch visitor geolocation lookups and memoize results to shrink latency. |
| 2025-10-20 | [4e1c5aa](https://github.com/odoo/odoo/commit/4e1c5aa0cfb2b0b0dd4b938e7464d0932a1883e2) | Raphael Collet | website | Align ORM-powered configurator queries with the cached context helpers. |
| 2025-10-20 | [c1a28be](https://github.com/odoo/odoo/commit/c1a28be981f205a6aee00f8cd3d9a3c2b491ff64) | sben-odoo | website_sale (website_builder) | Refresh price badge snippets, ribbons, and step tips inside the website builder asset bundle. |
| 2025-10-19 | [0f73c4a](https://github.com/odoo/odoo/commit/0f73c4af688f38a1bfca62b7c9cf96724fbd83f9) | Benjamin Vray | website | Stabilize showcase video posters when switching between theme presets. |
| 2025-10-19 | [c48d0f9](https://github.com/odoo/odoo/commit/c48d0f9157e21c373393bde8f70d6cae5d1c6a86) | Jinjiu Liu | website | Guard contact-us form autofill when editing in multi-company environments. |
| 2025-10-18 | [68b71cf](https://github.com/odoo/odoo/commit/68b71cf7d2efcb8fd24e65f8c2fb424c26b3a77d) | divy-odoo | website | Persist blog filter state across pagination via POST-backed filter tokens. |
| 2025-10-18 | [dda3e64](https://github.com/odoo/odoo/commit/dda3e64a5e22415af9bdcf99aa772c85df19c9ed) | Arib Ansari | website | Refresh translation helper tour steps to support cached theme contexts. |
| 2025-10-17 | [2c9b7e1](https://github.com/odoo/odoo/commit/2c9b7e16fa9b6f0ec2bf5fb4c6e7de69fde5523c) | Guillaume Jacquet | website | Fix Safari dropdown pointer capture regression in the configurator panel. |
| 2025-10-17 | [15e7ad4](https://github.com/odoo/odoo/commit/15e7ad49e1fd41afc827d1d4baf3f1b4f2cf18d7) | romo | website | Ensure each hero carousel has unique IDs and ARIA links even after inline duplication. |
| 2025-10-16 | [d1f8caa](https://github.com/odoo/odoo/commit/d1f8caab73eb61ce5f934d908b4748b9371e6c9d) | Sébastien (blse) | html_builder, website | Add deterministic sidebar wait helpers and convert flaky countdown tests. |
| 2025-10-16 | [e38491c](https://github.com/odoo/odoo/commit/e38491c51cb762a0c0f30507bb0cc76f15bc0b3b) | assk-odoo | html_builder | Restore remote job location option defaults after the async configurator changes. |
| 2025-10-16 | [6a07b2e](https://github.com/odoo/odoo/commit/6a07b2ec1a4a30b18f69fe1dbc457e8db7c84392) | KAEI | website | Harmonize wording around event registration steps across builder dialogs. |

> **How to read the data:** The accompanying JSON export at [`docs/reports/data/2025-10-22-website-html-builder.json`](./data/2025-10-22-website-html-builder.json) is sorted by the GitHub committer timestamp and includes every file-level diff touching the tracked paths within the window.

## Verification

- **Window coverage.** All 22 commits in the export have committer timestamps between 16 Oct 2025 00:00 UTC and 22 Oct 2025 23:59 UTC.
- **Master parity check.** Re-running the GitHub REST API queries (`sha=master`) for each tracked path returns the same 22 commit SHAs, confirming no extra or missing entries for the covered week.
