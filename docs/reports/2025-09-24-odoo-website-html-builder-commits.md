# Odoo Website & HTML Builder — Weekly Commit Digest (17–24 Sep 2025)

This digest covers all commits that touched the `addons/website` and `addons/html_builder` directories of the [Odoo community repository](https://github.com/odoo/odoo) between **17 and 24 September 2025** (UTC). The list was assembled on 24 Sep 2025 using the GitHub REST API with path filters for both modules.

## Commit of the Week

- **[0a0aa09](https://github.com/odoo/odoo/commit/0a0aa09651849d0f35a4490573e5218b82aa2f1f)** — Enabled full-page AI translation flows so site builders can localise entire layouts in a single action.

## Highlights

- **Editor resilience & usability.** Patches harden the website/html editor against tricky scenarios such as pasting cross-document nodes, losing selection when triple-clicking UI controls, or drifting tooltips/popovers inside the iframe.
- **Website UX polish.** Several commits refine the shopper and content-creation experience: better search dropdown placement, functional multi-file uploads, sitemap deduplication, floating card stability, and safer social-share snippets.
- **Builder productivity & AI.** HTML Builder now honours backend domains in many2one pickers, speeds up row tooltips, refreshes dark mode colours, and gains a whole-page AI translation option alongside theme-tab responsiveness tweaks.

## Commit details

| Date (UTC) | Commit | Author | Scope | Summary |
| --- | --- | --- | --- | --- |
| 2025-09-24 | [c5dd5a0](https://github.com/odoo/odoo/commit/c5dd5a0c5992e858bacbf9ac67d8d2a60a5def9f) | adch-odoo | html_editor, website | Detect attribute nodes by `nodeType` so styles survive when pasting content from external editors into Website. |
| 2025-09-24 | [0159e22](https://github.com/odoo/odoo/commit/0159e22fa7c5e784fc0d7a23f3b9c3786559ace6) | divy-odoo | website | Restore the dynamic blog snippet’s cover-image option when toggling item counts. |
| 2025-09-24 | [803de4e](https://github.com/odoo/odoo/commit/803de4ed417d6eb59a34e706e5204f6552c5488f) | panj-odoo | website, tours | Add `expectUnloadPage` and adjust redirects so Website tours tolerate reloads without flaking. |
| 2025-09-24 | [a6e23d4](https://github.com/odoo/odoo/commit/a6e23d4231b2e94b87175b73d5605c93d70fa1aa) | pish-odoo | html_builder, html_editor | Apply backend domain filters to many2one pickers inside HTML Builder to match back-office access rules. |
| 2025-09-23 | [f0da72c](https://github.com/odoo/odoo/commit/f0da72c575ad0ca76e1bb9d10482051ba93a5032) | FrancoisGe | html_builder | Defer heavy row-tooltip checks until hover time, cutting builder render overhead. |
| 2025-09-23 | [2f75e64](https://github.com/odoo/odoo/commit/2f75e648e387199831462a92e1881b03f4684ee8) | Rodolpho Lima | website | Block accidental text selection when rapidly clicking icons inside snippets. |
| 2025-09-23 | [2967a41](https://github.com/odoo/odoo/commit/2967a41b8ba396778fd79c0a41db81ee0b2ecdbc) | Rodolpho Lima | website | Lock the `s_share` snippet to avoid unintended editing and noisy error popovers. |
| 2025-09-23 | [5c1cd49](https://github.com/odoo/odoo/commit/5c1cd49f2a8351f46e5c99881c26785179ca020e) | dtda-odoo | website | Ensure the “Max # of files” option allows multi-file uploads while enforcing a minimum of one. |
| 2025-09-23 | [ea1b037](https://github.com/odoo/odoo/commit/ea1b03757d13d9d3d42d6658d4db308fcdbc7afb) | Nicolas Lempereur | website | Position shop search suggestions on the side with more viewport room to avoid clipping. |
| 2025-09-23 | [bc14197](https://github.com/odoo/odoo/commit/bc141971e42dccfbb513051ef750a1f849ba015f) | Jinjiu Liu | html_editor | Limit triple-click selection to button text so adjacent nodes are unaffected. |
| 2025-09-23 | [668b805](https://github.com/odoo/odoo/commit/668b805b0c08a002a6eb31947e6e88a5508b6fa1) | Aaron Bohy | website, web | Drop legacy hoot-dom dependencies from Website/Web test helpers during cleanup of legacy suites. |
| 2025-09-22 | [4a9a284](https://github.com/odoo/odoo/commit/4a9a2841e2b4409d0a5c7e74693144e8d7b9a000) | Serge Bayet (seba) | website | Reinstate the floating cards resize guard by restoring the missing grid class. |
| 2025-09-22 | [1ae530e](https://github.com/odoo/odoo/commit/1ae530e42dd8c7f274ff7599dc34b9831703c68c) | Benjamin Vray | html_builder, website | Hide the image-width option on pictures nested in cards to match card styling rules. |
| 2025-09-22 | [3854e51](https://github.com/odoo/odoo/commit/3854e51626d73c55cc4040b24bd0a7816f14ce5a) | Serge Bayet (seba) | website | Deduplicate sitemap entries when overridden routes resolve to the same URL, with regression tests. |
| 2025-09-18 | [8ada7af](https://github.com/odoo/odoo/commit/8ada7af6f1ed313db6373972c76032ca484e8beb) | Julien (jula) | html_editor, website | Keep color pickers and other popovers anchored by making them static within the iframe. |
| 2025-09-18 | [b8ac840](https://github.com/odoo/odoo/commit/b8ac84041a4d316199b4bbc89005851ce83e9e70) | Xavier Luyckx (xlu) | website | Stop registering parallax clones in the categories showcase to avoid duplicate controls. |
| 2025-09-17 | [f5f744d](https://github.com/odoo/odoo/commit/f5f744d95f9caf14fcc8ff6f431bb2ecfe3df48c) | mano-odoo | website | Restore the banner categories snippet background image loading after theme tweaks. |
| 2025-09-17 | [940d08c](https://github.com/odoo/odoo/commit/940d08c1f21cb2e25ac7d1a18de77d7dbac32feb) | Xavier Morel | website | Remove the obsolete `link_tools` tour that no longer reflects current flows. |
| 2025-09-17 | [c82b4a8](https://github.com/odoo/odoo/commit/c82b4ad87de66d4b890c64feaff8dd691e18a563) | Laetitia (ldau) | auth_totp_mail, website | Drop the deprecated `.btn-block` class across mail/login flows, including Website pages. |
| 2025-09-17 | [d4e0deb](https://github.com/odoo/odoo/commit/d4e0deb08bd31295deff94526260770a5f15eca8) | Claire Nguyen (clan) | website | Swap the empty-search icon for a maintained asset to avoid broken links. |
| 2025-09-17 | [5345971](https://github.com/odoo/odoo/commit/5345971bc27d156df7038ebd9294e1ab55321b34) | Brieuc Dejean (brd) | website_sale | Restore the showcase design overlay option inside the shop builder panel. |
| 2025-09-17 | [0a0aa09](https://github.com/odoo/odoo/commit/0a0aa09651849d0f35a4490573e5218b82aa2f1f) | Garvish Panchal | website, html_builder | Allow translating an entire page with AI, wiring builder actions into the new flow. |
| 2025-09-17 | [42c1ef9](https://github.com/odoo/odoo/commit/42c1ef9c6a21fbfcec05f72c07e33ef88939bf75) | divy-odoo | website | Move the translation tab template into its own folder to match refactored structure. |
| 2025-09-17 | [65cdbec](https://github.com/odoo/odoo/commit/65cdbece7edfd4e48807aa0b183265377b075a88) | Lucas Perais (lpe) | web_tour, website | Drop hard hoot-dom dependencies from website/web tours for compatibility with the new test runner. |
| 2025-09-17 | [b159bbd](https://github.com/odoo/odoo/commit/b159bbd0c8c254e5263336708c0e18d9fac58547) | Serhii Rubanskyi | web, website | Make color picker tabs pluggable so website components can extend them cleanly. |
| 2025-09-17 | [e017a69](https://github.com/odoo/odoo/commit/e017a69ab0aa48760ea6c208c24b34c7d1e1ae7e) | mano-odoo | html_builder | Refresh add-snippet dialog dark-mode colors for readability. |
| 2025-09-17 | [de2be35](https://github.com/odoo/odoo/commit/de2be35076931b63ed597ceabd61156c969363a8) | FrancoisGe | html_builder, website | Reduce the time before the theme tab appears by scheduling checks more lightly. |
| 2025-09-17 | [da9222e](https://github.com/odoo/odoo/commit/da9222e435b6c72c8b8bc7d67bd0d1a0c0ada64e) | Benoit Socias | html_builder | Fix `flattenSave` grouping so HTML Builder saves don’t lose row information. |
| 2025-09-17 | [6c0a62e](https://github.com/odoo/odoo/commit/6c0a62eedc08dbde67a4ae07a5cd8763d4552168) | Benoit Socias | website | Put the palette name back in quotes to keep theme previews consistent. |
| 2025-09-17 | [5796d77](https://github.com/odoo/odoo/commit/5796d77f5fecb1f8a56cd0147472f05b40ccd7b8) | dtda-odoo | website | Enforce the website form file-size limit check correctly for multi-file uploads. |
| 2025-09-17 | [2261e6b](https://github.com/odoo/odoo/commit/2261e6b0843fc611d33f72edf8ae8f267d69e735) | rusp-odoo | website | Preserve alt descriptions when reopening the SEO dialog on website pages. |
