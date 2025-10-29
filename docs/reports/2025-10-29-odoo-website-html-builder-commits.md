# Odoo Website & HTML Builder — Weekly Commit Digest (22–29 Oct 2025)
This digest covers all commits merged into the `odoo/odoo` repository’s `master` branch between **22 and 29 October 2025** (UTC).

The window is based on the committer timestamp — the moment GitHub records the change as landing in `master` — and is limited to
updates that touched `addons/website`, `addons/html_builder`, or `addons/website_sale/static/src/website_builder`. The list was
assembled on 29 Oct 2025 using the GitHub REST API with scoped path filters for all three areas, then re-queried to confirm the
final set matches every commit that landed in `master` during the window. No Website Builder assets shipped from
`website_sale/static/src/website_builder` this week, although one test update touched that module’s suite.

## Commit of the Week
- **[350da9c](https://github.com/odoo/odoo/commit/350da9c8561276a45d65b3e74418a8cfc28eda16)** — Introduces the new
  `s_newsletter_aside` snippet with dedicated preview assets and shared mass-mailing options, giving sites an out-of-the-box
  newsletter layout that pairs copy with a visual call to action.

## Highlights
- **Fresh conversion snippets.** The redesigned contact page and new `s_newsletter_aside` snippet ship updated imagery, map
  defaults, and CTA icons so freshly generated sites feel polished from the first publish.
- **Builder stability & controls.** Header content, image shape options, background patterns, and aspect-ratio toggles all
  received fixes, while the editor’s automated tests now simulate server errors correctly to avoid false positives.
- **Configurator & form polish.** Loading indicators, dropdown interactions, form field safeguards, and cache keys were all tuned
  to keep the website configurator and out-of-the-box forms responsive across devices.

## Commit details
| Merged (UTC) | Commit | Author | Scope | Summary |
| --- | --- | --- | --- | --- |
| 2025-10-29 | [c528c9c](https://github.com/odoo/odoo/commit/c528c9c198825c01e67d89f2dad79aceb010e22f) | assh-odoo | website | Guard the Send Email snippet so submissions no longer crash when required values are missing. |
| 2025-10-29 | [7406a05](https://github.com/odoo/odoo/commit/7406a05116d9adeb8f0aada996cda06f978194f2) | divy-odoo | website | Show a fullscreen loader when fetching additional website themes so users see progress feedback. |
| 2025-10-28 | [df5e739](https://github.com/odoo/odoo/commit/df5e7396f93418a96be703b2a58ed20c09740671) | Walid (wasa) | html_builder | Preserve header slot content when switching layout types inside the HTML editor. |
| 2025-10-28 | [68bfe6f](https://github.com/odoo/odoo/commit/68bfe6fec67b0d87c59454b254a98bee57dc5d4c) | Julien (jula) | website | Keep background pattern repeats consistent between the editor, website, and mass mailing themes. |
| 2025-10-27 | [57f7a35](https://github.com/odoo/odoo/commit/57f7a3537bff44c56928a1db4df413465e92dff7) | Rahil Ghanchi | website | Add an aspect-ratio toggle so embedded media can be forced to stay proportional. |
| 2025-10-27 | [54698f4](https://github.com/odoo/odoo/commit/54698f4d2854ca1777ec62a6464004b5b88a4dc5) | Julien Mougenot | website | Update website and builder tests to handle simulated server errors without relying on pure RPC stubs. |
| 2025-10-27 | [350da9c](https://github.com/odoo/odoo/commit/350da9c8561276a45d65b3e74418a8cfc28eda16) | Antoine (anso) | website | Ship the `s_newsletter_aside` snippet, preview art, and shared options for quick newsletter CTAs. |
| 2025-10-24 | [3e9b2fc](https://github.com/odoo/odoo/commit/3e9b2fcabeba28e685a748d5f542362284faa317) | Nicolas Lempereur | website | Build dynamic asset bundles using the visitor’s language to avoid cross-locale mixes. |
| 2025-10-24 | [a34db9d](https://github.com/odoo/odoo/commit/a34db9d13c4cacfde158619471c70ad91adb7b75) | Aaron Bohy | html_builder | Eliminate drag-and-drop race conditions so Kanban boards and the builder stay in sync. |
| 2025-10-24 | [78d406c](https://github.com/odoo/odoo/commit/78d406ce5456dc20c10e884d8abd76458bb78e22) | krip-odoo | website | Block deletion of website form fields that are still referenced to keep forms valid. |
| 2025-10-24 | [ba8d1f6](https://github.com/odoo/odoo/commit/ba8d1f60b82ffeada0b222481706a5c65623020d) | Antoine (anso) | website | Rebuild the default Contact Us page around modern snippets and refreshed company info handling. |
| 2025-10-24 | [9bb2a86](https://github.com/odoo/odoo/commit/9bb2a86af6b913884dcafc4e49b202947b911a0d) | Sanjay Sharma | website | Switch social link defaults to the YouTube play icon for clearer branding. |
| 2025-10-23 | [7f1ddba](https://github.com/odoo/odoo/commit/7f1ddba17a19cab22f6106ecc6a3624f67101c21) | sben-odoo | html_builder | Stop the image shape selector from raising tracebacks inside the builder. |
| 2025-10-23 | [f4436d4](https://github.com/odoo/odoo/commit/f4436d4f8400995dcf382107d93cd95d9f625335) | Augustin (duau) | html_builder | Align the shape animation speed option between HTML editor controllers and builder plugins. |
| 2025-10-22 | [411bf8d](https://github.com/odoo/odoo/commit/411bf8dce9c0fd391bddc950ee030086d5c6e9b4) | Serhii Rubanskyi | website | Fix the `_get_page_info` cache key so multi-website navigation picks up the right metadata. |
| 2025-10-22 | [3e7038c](https://github.com/odoo/odoo/commit/3e7038ce72389638309f0a2d9552fd45b7426e1d) | Serhii Rubanskyi | website | Drop leftover sidebar padding whenever the website header is hidden. |
| 2025-10-22 | [54a621f](https://github.com/odoo/odoo/commit/54a621f5f7728ca1b1ea14ef6d1912984eac0418) | Augustin (duau) | html_builder, website | Relocate custom snippet helpers from `html_editor` into the website module to simplify overrides. |
| 2025-10-22 | [d957f69](https://github.com/odoo/odoo/commit/d957f6965384ab66557c9622a9f7cd6a4f06dfe9) | Augustin (duau) | html_builder, website | Move view-saving routines into the website app so builder persistence lives in one place. |
| 2025-10-22 | [65f677b](https://github.com/odoo/odoo/commit/65f677be1d4450a36929b9f9dbd8c17e9a34e3e3) | chdh-odoo | website | Refresh the default About Us footer copy with GPT-generated text. |
| 2025-10-22 | [82e927a](https://github.com/odoo/odoo/commit/82e927a5ea994d148d859fd1ce4e458f72e2cb1a) | Nicolas Lempereur | website | Make the website configurator dropdown respond properly on iOS Safari. |
| 2025-10-22 | [3071ce4](https://github.com/odoo/odoo/commit/3071ce47799648ab90f3e4e0d4723dc13870356c) | Chrysanthe (chgo) | website | Ensure `.o_tag` styling no longer shrinks Bootstrap badge text. |
| 2025-10-22 | [708b336](https://github.com/odoo/odoo/commit/708b336fba8abed927843ea8843eacc6e4551555) | Gorash | website | Rebalance `/shop` performance test expectations after the latest storefront changes. |

> **How to read the data:** The accompanying JSON export at [`docs/reports/data/2025-10-29-website-html-builder.json`](./data/2025-10-29-website-html-builder.json) is sorted by the GitHub committer timestamp and includes every file-level diff touching the tracked paths within the window.

## Verification

- **Window coverage.** All 22 commits in the export have committer timestamps between 22 Oct 2025 00:00 UTC and 29 Oct 2025 23:59 UTC.
- **Master parity check.** Re-running the GitHub REST API queries (`sha=master`) for each tracked path returns the same 22 commit SHAs, confirming no extra or missing entries for the covered week.
