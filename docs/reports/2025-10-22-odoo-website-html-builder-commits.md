# Odoo Website & HTML Builder — Weekly Commit Digest (16–22 Oct 2025)
This digest covers all commits merged into the `odoo/odoo` repository’s `master` branch between **16 and 22 October 2025** (UTC).
The window is based on the committer timestamp — the moment GitHub records the change as landing in `master` — and is limited to
updates that touched `addons/website`, `addons/html_builder`, or `addons/website_sale/static/src/website_builder`. The list was
assembled on 22 Oct 2025 using the GitHub REST API with scoped path filters for all three areas, then re-queried to confirm the
final set matches every commit that landed in `master` during the window. No Website Builder assets shipped from
`website_sale/static/src/website_builder` this week.

## Commit of the Week
- **[a748955](https://github.com/odoo/odoo/commit/a7489557f04ab2d617996ed56e7647c5fb7cbed1)** — Overhauls the Website Builder’s
  social and share icon snippets with streamlined options, new size presets, contextual color tooltips, and refreshed demo pages
  across blog, event, job, and recruitment flows.

## Highlights
- **Share & social snippet refresh.** The share/social overhaul introduces consistent sizing, reduced option conflicts, and
  contextual styling controls, while HTML Builder now keeps paragraph-only classes off div containers for cleaner markup.
- **Builder reliability.** GIF shape tweaks, missing WebGL support, cache keys, and plugin-insertion helpers all received fixes
  so editors stay responsive and their test suite covers the rebuilt animation options again.
- **Website administration polish.** Technical pages, SEO auto-fill, default value formatting, translation edge cases, and
  industry autocomplete dropdowns all saw usability fixes that reduce post-upgrade surprises for site managers.

## Commit details
| Merged (UTC) | Commit | Author | Scope | Summary |
| --- | --- | --- | --- | --- |
| 2025-10-22 | [3e7038c](https://github.com/odoo/odoo/commit/3e7038ce72389638309f0a2d9552fd45b7426e1d) | Serhii Rubanskyi | website | Remove sidebar padding when the header is hidden so content realigns. |
| 2025-10-22 | [411bf8d](https://github.com/odoo/odoo/commit/411bf8dce9c0fd391bddc950ee030086d5c6e9b4) | Serhii Rubanskyi | website | Fix the `_get_page_info` cache key to avoid stale page metadata. |
| 2025-10-21 | [ae9f3e3](https://github.com/odoo/odoo/commit/ae9f3e3678af1110487947f389089dabeacb74bb) | sben-odoo | website | Prevent GIF shape changes from crashing the HTML editor. |
| 2025-10-21 | [14abe5d](https://github.com/odoo/odoo/commit/14abe5ddb03e70c651a062434d442f80fe904abd) | Serge Bayet (seba) | html_builder | Disable image filters when WebGL support is unavailable. |
| 2025-10-21 | [abe671b](https://github.com/odoo/odoo/commit/abe671b62613005c8d256d374b21c0c38e3753fc) | Sébastien (blse) | website | Restore the hover animation test coverage for snippet options. |
| 2025-10-20 | [063fc16](https://github.com/odoo/odoo/commit/063fc160889c526860d566b5b97919f105a3a6bf) | Guillaume Jacquet | website | Fix industry autocomplete dropdown clicks in website forms. |
| 2025-10-20 | [19f8e1f](https://github.com/odoo/odoo/commit/19f8e1f1ef01664b84e2686523d92b77b5cd4c32) | Subhadeep R. Dev | website | Repair missing template errors encountered after upgrading to master. |
| 2025-10-20 | [f7fde29](https://github.com/odoo/odoo/commit/f7fde29b9bea8557804bdd2b4f237da516576222) | Garvish Panchal | website | Simplify translation handling for selection field options in the builder. |
| 2025-10-20 | [d9cc1df](https://github.com/odoo/odoo/commit/d9cc1df4feb524af15da416d095237260c6f3f8c) | assk-odoo | website | Polish the Technical Pages listing and generated URLs. |
| 2025-10-18 | [05047aa](https://github.com/odoo/odoo/commit/05047aad602cb3c3b8c6d1a1b6c4d8e9926e6d95) | Sébastien (blse) | website | Ensure builder test helpers always insert the requested plugin. |
| 2025-10-18 | [4b14856](https://github.com/odoo/odoo/commit/4b1485686eb819d581b1e6fd30f59003f9b4e0de) | Ayush Modi | website | Reject invalid website domain paths that include `.` or `..`. |
| 2025-10-17 | [3472007](https://github.com/odoo/odoo/commit/347200721d9e32b6b75951c361024fb09377f87a) | romo | website | Preserve snippet offsets when editing inline field content. |
| 2025-10-17 | [5513bbf](https://github.com/odoo/odoo/commit/5513bbfbb0398af57910f21caf90a8653c8f95ef) | Nicolas Lempereur | website | Allow different image sizes in the `s_company_team` snippet. |
| 2025-10-17 | [267300e](https://github.com/odoo/odoo/commit/267300e93a44a690ab85570aa7d9b4fcf1d5b26f) | assk-odoo | website | Stop SEO auto-fill from crashing on system-generated pages. |
| 2025-10-17 | [6e8c2fc](https://github.com/odoo/odoo/commit/6e8c2fcba376e845cdb461f02f35ee0fafc0f60a) | Serhii Rubanskyi | html_builder, website | Stop assigning the paragraph class to div snippets in HTML Builder. |
| 2025-10-17 | [3482ba7](https://github.com/odoo/odoo/commit/3482ba72c8cd461d5c6609f4953decc1d5a55dd8) | Chong Wang (cwg) | website | Adopt the new `ir.config_parameter` getter/setter API. |
| 2025-10-17 | [75c5ad0](https://github.com/odoo/odoo/commit/75c5ad01fcdf4c01e1966e09451f8f2001e9318e) | Alessandro Lupo | website | Avoid injecting the `t-portal` template when editing the login page. |
| 2025-10-17 | [e8eeb40](https://github.com/odoo/odoo/commit/e8eeb405db020fd0b4767561a0bc8a04e28966e3) | Guillaume-gdi | website | Keep file icons visible when translations are applied. |
| 2025-10-17 | [ef52573](https://github.com/odoo/odoo/commit/ef525735a3ab9c443ffc8cb2b94744e277adcbf7) | Robin Lejeune (role) | html_builder | Document the `BuilderAction` API for HTML Builder extensions. |
| 2025-10-17 | [64ae3fc](https://github.com/odoo/odoo/commit/64ae3fce66737f01ea47c9fa701155df6e70de0b) | Louis (loco) | website | Correct default value formatting in the website configurator. |
| 2025-10-16 | [a748955](https://github.com/odoo/odoo/commit/a7489557f04ab2d617996ed56e7647c5fb7cbed1) | alap-odoo | html_builder, website | Overhaul social and share icon snippet options in the Website Builder. |

> **How to read the data:** The accompanying JSON export at [`docs/reports/data/2025-10-22-website-html-builder.json`](./data/2025-10-22-website-html-builder.json) is sorted by the GitHub committer timestamp and includes every file-level diff touching the tracked paths within the window.

## Verification

- **Window coverage.** All 21 commits in the export have committer timestamps between 16 Oct 2025 00:00 UTC and 22 Oct 2025 23:59 UTC.
- **Master parity check.** Re-running the GitHub REST API queries (`sha=master`) for each tracked path returns the same 21 commit SHAs, confirming no extra or missing entries for the covered week.
