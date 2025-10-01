# Odoo Website & HTML Builder — Weekly Commit Digest (25 Sep – 1 Oct 2025)

This digest covers all commits that touched the `addons/website` and `addons/html_builder` directories of the [Odoo community repository](https://github.com/odoo/odoo) between **25 September and 1 October 2025** (UTC). The list was assembled on 1 Oct 2025 using the GitHub REST API with path filters for both modules.

## Highlights

- **Builder polish & preview parity.** HTML Builder regains live previews for many2one pickers, improves translation handling, fixes color picker previews, and tweaks the mobile preview button and background overlay assets for smoother authoring.
- **Website UX, accessibility & resilience.** Multiple fixes refine menus, snippets, videos, animations, and keyboard navigation while restoring editability of share icons and ensuring background resets behave as intended.
- **Testing & tooling stability.** SEO tools get deterministic broken-link handling, tours and animation tests are hardened, and large swaths of builder tests migrate to shared utilities, cutting suite runtime.

## Commit details

| Date (UTC) | Commit | Author | Scope | Summary |
| --- | --- | --- | --- | --- |
| 2025-10-01 | [b561301](https://github.com/odoo/odoo/commit/b561301b97e8e0262329874a90936af8f258c436) | Julien (jula) | html_builder, html_editor | Tighten number-input and formatting utilities so CSS unit conversions keep the expected precision in the builder. |
| 2025-10-01 | [1c6dac6](https://github.com/odoo/odoo/commit/1c6dac66a67ae100658e1ed5b6dc8502c078d728) | Serhii Rubanskyi | web, website | Stabilize the auto-hide menu tour by syncing its assertions with the latest navigation behavior. |
| 2025-10-01 | [0248bd2](https://github.com/odoo/odoo/commit/0248bd2c71d9722a460bc8a7ac55c471abf2e153) | romo | web, website | Ensure footer blocks trigger animations reliably by adjusting how the observer listens for visibility. |
| 2025-10-01 | [6ea8923](https://github.com/odoo/odoo/commit/6ea89238ea42a887162da9ffc8ede95af3d29cd6) | Sébastien (blse) | web, website | Make “Edit Menu” actions opened from submenu links target the correct nested menu structure. |
| 2025-09-30 | [c085958](https://github.com/odoo/odoo/commit/c0859589c43d36309a4c6ecb46b4511ae20064fb) | Robin Lejeune (role) | web, website | Hide video sizing controls when cookies are refused so the snippet UI stays consistent. |
| 2025-09-30 | [a5b5b41](https://github.com/odoo/odoo/commit/a5b5b41999a5e0fb483be7f7f755fe4807d160f4) | FrancoisGe | web, website | Make theme tab palette tests wait for asset reloads to eliminate flakiness. |
| 2025-09-30 | [a6ec0b9](https://github.com/odoo/odoo/commit/a6ec0b97509975f89475371cfcd8adca507a9bab) | Rahil Ghanchi | html_builder, web, website | Refresh the mobile preview button styling and assets for better contrast in the preview systray. |
| 2025-09-30 | [ab274cf](https://github.com/odoo/odoo/commit/ab274cf1226c9e3dfa7e8c5b43f7255fcc754fed) | Robin Lejeune (role) | web, website | Improve snippet accessibility by refining keyboard focus styles and iframe dialog behavior. |
| 2025-09-30 | [1c0c7de](https://github.com/odoo/odoo/commit/1c0c7de4bf5fb35b7642219db4198cc60fabc893) | Benjamin Vray | web, website | Preserve the broken-link checker when SEO dialogs edit redirects so editors still get warnings. |
| 2025-09-30 | [daacfee](https://github.com/odoo/odoo/commit/daacfee5b89b3dd5bac4e4edbd15bdd0bf65fa77) | Benjamin Vray | web, website | Show an image icon fallback for broken SEO previews so missing assets remain obvious. |
| 2025-09-30 | [9d513f9](https://github.com/odoo/odoo/commit/9d513f9187dcc04354345690b850184a2cdbe2ee) | Parth Vyas | web, website | Exclude dynamic template images from the SEO dialog to avoid flagging transient placeholders. |
| 2025-09-30 | [bbced6f](https://github.com/odoo/odoo/commit/bbced6fc418f0ddef977698c7e886ea9d11416d6) | Julien (jula) | web, website | Fix an asynchronous wait in website animation tests so reposition checks don’t race. |
| 2025-09-29 | [b4a2b5a](https://github.com/odoo/odoo/commit/b4a2b5a47a0c79b9ececec8fbaf9e1bd712a9ea4) | Louis (loco) | html_builder, web, website | Rework the translation plugin to rely on new `o_editable_attribute` markers instead of forcing `contenteditable`. |
| 2025-09-26 | [4ed28a0](https://github.com/odoo/odoo/commit/4ed28a0cebe847ab69d1e58840b38be49707cada) | Augustin (duau) | html_builder, web, website, website_sale | Retool website and builder tests to share html_builder utilities, cutting suite runtime. |
| 2025-09-26 | [beef707](https://github.com/odoo/odoo/commit/beef7078138c4185f912ebbd042faf2782b2d17e) | Augustin (duau) | html_builder, web, website | Relocate generic builder tests into the html_builder module to match their scope. |
| 2025-09-25 | [df61467](https://github.com/odoo/odoo/commit/df6146737aa0b3963d4341100b0a1214e5345d41) | Rodolpho Lima | html_builder, html_editor, mass_mailing | Split the color tooling into separate logic and UI plugins so editors can opt out of the selector. |
| 2025-09-25 | [11e13e0](https://github.com/odoo/odoo/commit/11e13e0907ca92442d0547c97dd5ed3c26a99c46) | romo | web, website | Reset section backgrounds when applying color combinations to avoid residual styling. |
| 2025-09-25 | [794d862](https://github.com/odoo/odoo/commit/794d862482d1be1a0df71820f494853fed098d8b) | Louis (loco) | web, website | Restore the share snippet’s icon editability after builder regressions. |
| 2025-09-25 | [315718d](https://github.com/odoo/odoo/commit/315718df644abe959c7993cb85c206cf0146b675) | Nicolas Lempereur | web, website | Prevent view prefetching from leaking restricted fields when rendering website pages. |
| 2025-09-25 | [8983f20](https://github.com/odoo/odoo/commit/8983f20c61fe6b3458b651844984eb873d54b7c2) | Julien (jula) | html_builder | Rename the background overlay stylesheet so it loads inside the builder iframe again. |
| 2025-09-25 | [125c14a](https://github.com/odoo/odoo/commit/125c14a448b927a07d2b1f3fd6330b11bca77ce5) | Sébastien (blse) | html_builder, web, website | Restore live previewing for BuilderMany2One options via new select-menu wiring. |
| 2025-09-25 | [784158c](https://github.com/odoo/odoo/commit/784158c49eba7d9adebb5c212f650a0f35b0ddca) | Sébastien (blse) | html_builder, web, website | Pass the previewing flag into color picker actions so hover previews render correctly. |
