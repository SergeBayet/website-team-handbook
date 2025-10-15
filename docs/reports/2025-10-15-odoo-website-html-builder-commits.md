# Odoo Website & HTML Builder — Weekly Commit Digest (9–15 Oct 2025)
This digest covers all commits merged into the `odoo/odoo` repository’s `master` branch between **9 and 15 October 2025** (UTC). The window is based on the committer timestamp — the moment GitHub records the change as landing in `master` — and is limited to updates that touched `addons/website`, `addons/html_builder`, or `addons/website_sale/static/src/website_builder`. The list was assembled on 15 Oct 2025 using the GitHub REST API with scoped path filters for all three areas, then re-queried to confirm the final set matches every commit that landed in `master` during the window.

## Commit of the Week
- **[a5c02da](https://github.com/odoo/odoo/commit/a5c02da5c24bfc85b3bbb7d1410d489d3c7185b8)** — Introduces binary font bundles so icon fonts get cache-busted URLs and year-long CDN lifetimes without manual tweaks.

## Highlights
- **Faster, longer-lived assets.** Front-end fonts now ship through fingerprinted asset bundles, trimming weekly cache misses and simplifying preload links, while media utilities were cleaned up to keep editor checks lightweight.
- **Announcement Scroll overhaul.** Dedicated plugins now restart marquee interactions safely, honour reduced-motion, and use real dialogs for translations instead of brittle prompts.
- **Builder stability & ergonomics.** Color pickers remember the last tab, Safari configurator clicks are reliable again, and refreshed sidebar helpers eliminate reload races and flaky job-location crashes.
- **Content editing polish.** Showcase videos stop flickering, highlighted SVGs stay within the viewport, configurator menus match the new offer set, and multiple tours/tests gained deterministic helpers.

## Commit details
| Merged (UTC) | Commit | Author | Scope | Summary |
| --- | --- | --- | --- | --- |
| 2025-10-15 | [faf42a1](https://github.com/odoo/odoo/commit/faf42a1555fd6d268a0b47a2692ceeabde058aef) | Tiffany Chang (tic) | html_builder | Restore the missing empty translation entry in the HTML Builder POT so exports stay valid. |
| 2025-10-15 | [899c08b](https://github.com/odoo/odoo/commit/899c08bd2ba2f8571cf025245219621d36ed999c) | Serhii Rubanskyi | html_builder | Export every color picker tab module so downstream patches can hook the pluggable tabs. |
| 2025-10-14 | [1d04c87](https://github.com/odoo/odoo/commit/1d04c87836daa17ecf0fafc1931395d169372e66) | Rahil Ghanchi | website | Make card snippet images inherit the card border radius for consistent rounded corners. |
| 2025-10-14 | [ba2ba3f](https://github.com/odoo/odoo/commit/ba2ba3f4da043664e17fc62c81ba1f18f4e744be) | Antoine (anso) | website | Let `.btn-close` buttons pick up themed colours so modals, off-canvas panes, and alerts retain contrast. |
| 2025-10-14 | [3893156](https://github.com/odoo/odoo/commit/3893156f9319b08453eaa1e1264952c936d315c8) | Robin Lejeune (role) | website | Rename add-dialog preview styles to the `.preview.scss` convention to keep bundles lean. |
| 2025-10-14 | [798ad29](https://github.com/odoo/odoo/commit/798ad29a9d898230ddbfdc5b144fa08fcc755190) | Robin Lejeune (role) | website | Replace the announcement scroll prompt with a proper dialog plugin and shared translation hook. |
| 2025-10-14 | [0e03cf9](https://github.com/odoo/odoo/commit/0e03cf93a331b096b79a523cc7f1709b612896ec) | Robin Lejeune (role) | website | Rebuild the announcement scroll restart flow, tweak previews, and respect reduced-motion users. |
| 2025-10-14 | [1940931](https://github.com/odoo/odoo/commit/19409315e54c28d1b411e0e6ea3226ee09d20084) | Julien (jula) | html_builder, website | Guard builder refreshes during editor reloads and harden the product page options test. |
| 2025-10-14 | [239fce0](https://github.com/odoo/odoo/commit/239fce02bec48e06bbeeb00062a320c3111205dd) | Krzysztof Magusiak (krma) | website | Update website visitor tracking and friends to the new GeoIP API ahead of the old hook’s removal. |
| 2025-10-14 | [8783ee5](https://github.com/odoo/odoo/commit/8783ee50708eb6a7289589c895f78a5fb8197728) | divy-odoo | website | Keep selected blog tags when changing archive dates by routing the filters through POST links. |
| 2025-10-14 | [7a291d5](https://github.com/odoo/odoo/commit/7a291d59909b2ee57111ddec35a20a2302291f29) | Guillaume Jacquet | website | Delay configurator focusout handlers so Safari users can click dropdown options without losing focus. |
| 2025-10-13 | [482c459](https://github.com/odoo/odoo/commit/482c4597ca8081e29b7cb41039ef7433ff02ce59) | Serhii Rubanskyi | html_builder, website | Remember the last-used color picker tab and extend the behaviour across editor surfaces and tests. |
| 2025-10-13 | [6df92ce](https://github.com/odoo/odoo/commit/6df92ce41681118c15e0c9613a430682f566079d) | romo | website | Ensure every carousel instance gets a unique ID so controls don’t cross-wire between snippets. |
| 2025-10-13 | [ef789d3](https://github.com/odoo/odoo/commit/ef789d3c50869ccb8651b7056c725257eb069759) | Krzysztof Magusiak (krma) | website | Move the Query helper into `odoo.orm` as groundwork for deeper ORM integration. |
| 2025-10-13 | [2b12fda](https://github.com/odoo/odoo/commit/2b12fdaa91fba6e6a27818e7ee4f028ef3fa6877) | Raphael Collet | website | Allow instantiating ORM queries from the model to align with the Query relocation work. |
| 2025-10-13 | [82b518e](https://github.com/odoo/odoo/commit/82b518e3747d202131534b08df07bbc101124883) | Nicolas Lempereur | website | Reorder translation setup so nested editable fields stay translatable on product pages. |
| 2025-10-13 | [a35f834](https://github.com/odoo/odoo/commit/a35f834df59b75adaa7d845bc89bc3a1946fc2b7) | Garvish Panchal | website | Stop the events-only configurator from pulling in eCommerce unnecessarily. |
| 2025-10-13 | [fe1c0e1](https://github.com/odoo/odoo/commit/fe1c0e1b3b588d765f2cc570fd8e57e15a326799) | qsm-odoo | website | Clarify media/void element utilities so editor contentEditable logic covers images consistently. |
| 2025-10-11 | [f56528c](https://github.com/odoo/odoo/commit/f56528cecfa81cc5e3b239b7fbe2c9ea5fe13ca6) | sben-odoo | website | Give video containers an explicit width so flex layouts don’t squeeze embedded players. |
| 2025-10-11 | [7450ed3](https://github.com/odoo/odoo/commit/7450ed30ddb54b74993885d4d9b98a26f9e2a85b) | Sébastien (blse) | html_builder, website | Introduce `waitSidebarUpdated` to replace brittle DOM waits in sidebar-related tests. |
| 2025-10-10 | [80942fa](https://github.com/odoo/odoo/commit/80942fa5162cd069037065f85abc574732d14b7c) | Serge Bayet (seba) | website | Inline the “New Content” access checks client-side and drop the temporary filtering controller. |
| 2025-10-10 | [cf30344](https://github.com/odoo/odoo/commit/cf30344a3af56b187f7de15ee1b3e543ae0066a5) | KAEI | website | Rename “Job Offer” strings to “Job Opportunity” across website recruitment flows. |
| 2025-10-10 | [a34aee6](https://github.com/odoo/odoo/commit/a34aee6aadb8c9a26d1f1d93bc8d94d964bbe8dc) | assk-odoo | html_builder | Restore the Remote option in job-location selectors to stop builder crashes. |
| 2025-10-10 | [be0d11b](https://github.com/odoo/odoo/commit/be0d11b9b8a9b9a077221e9f3a4aef94636fd571) | Arib Ansari | website | Switch the translation tour to the shared helper so site switching stays deterministic. |
| 2025-10-10 | [af291ad](https://github.com/odoo/odoo/commit/af291ad69a5a7befe0878d8314b81aa96e0a1a35) | sben-odoo | website | Cap highlighted SVG widths so mobile highlights no longer force sideways scrolling. |
| 2025-10-10 | [4f87601](https://github.com/odoo/odoo/commit/4f87601c5c81df6cdcbbfc9d9364f684ecc1cfae) | Jinjiu Liu | website | Only prefix links with `@` inside the website app so backend redirects keep working. |
| 2025-10-09 | [a5c02da](https://github.com/odoo/odoo/commit/a5c02da5c24bfc85b3bbb7d1410d489d3c7185b8) | qsm-odoo | website | Serve icon fonts through hashed asset bundles for year-long caching and automatic preloads. |
| 2025-10-09 | [b7d9ae5](https://github.com/odoo/odoo/commit/b7d9ae53ff0b6df8ceb1f8be79ad3304c843e258) | assk-odoo | website | Fix the mobile new-page dialog so it grabs the right iframe document before loading. |
| 2025-10-09 | [0cb4545](https://github.com/odoo/odoo/commit/0cb45457ccd59c4caf28fddccb43ccdbd3e73257) | khaj-odoo | website | Refresh configurator menus, feature toggles, and tours to match the current offer mix. |
| 2025-10-09 | [d3dc69b](https://github.com/odoo/odoo/commit/d3dc69b0431ae2f037ddb9e0e881ddf03b657638) | Benjamin Vray | website | Lock the showcase video iframe size so Chrome stops flickering on hover. |

> **How to read the data:** The accompanying JSON export at [`docs/reports/data/2025-10-15-website-html-builder.json`](./data/2025-10-15-website-html-builder.json) is sorted by the GitHub committer timestamp and includes every file-level diff touching the tracked paths within the window.

## Verification

- **Window coverage.** All 30 commits in the export have committer timestamps between 9 Oct 2025 00:00 UTC and 15 Oct 2025 23:59 UTC.
- **Master parity check.** Re-running the GitHub REST API queries (`sha=master`) for each tracked path returns the same 30 commit SHAs, confirming no extra or missing entries for the covered week.
