# Code Review Guidelines from qsm-odoo (2023–2025)

Between July 2023 and October 2025, qsm-odoo reviewed 100 pull requests touching the website, web editor, and adjacent modules in the `odoo/odoo` repository. His 191 substantive review remarks span stability policies, builder architecture, user-facing polish, and process hygiene. This page distills those expectations so reviewers can consistently evaluate website changes with the same lens. The full dataset—including every PR link—is available at the end of this guide.【F:data/qsm_pr_overview.md†L1-L109】【F:data/qsm_review_substantive.md†L1-L858】

## How to use this document

1. **Skim the principles before you review.** Each section quotes (and links to) real PR discussions so you can double-check the original context when necessary.
2. **Apply the checklist during review.** The practical checklist consolidates the recurring asks that qsm-odoo made most often.
3. **Consult the PR inventory.** Use it to find concrete examples to cite in your own reviews or to see how similar fixes were previously implemented.

## Rapid review reminders

Keep this shortlist open while you triage website-related PRs. Each item pairs qsm-odoo’s go-to question with a concrete example so reviewers can immediately sanity-check the change.

* **“Is this a stable version?”** In 17.0/18.0 branches, assume custom code extends today’s XML, selectors, and method signatures—avoid renaming or deleting them unless you provide a compatibility layer. In [PR #228575](https://github.com/odoo/odoo/pull/228575) the review explicitly asked to revert attribute edits and prefer widget patches to keep customer XPath overrides working.【F:data/qsm_review_substantive.md†L47-L58】
* **“Are all user-visible strings still translated?”** Translation exports wipe removed msgids, so keep legacy terms (even in hidden markup) or migrate helper utilities so every locale stays in sync. See the discussion on [PR #226505](https://github.com/odoo/odoo/pull/226505) for how to preserve `.pot` entries while updating content.【F:data/qsm_review_substantive.md†L205-L263】
* **“Does this readonly helper mutate the DOM?”** Builder compute hooks must only describe state—DOM updates belong in UI routines. On [PR #223268](https://github.com/odoo/odoo/pull/223268), qsm-odoo blocked a fix until `_computeWidgetVisibility` stopped touching the DOM and delegated to `updateUI` instead.【F:data/qsm_review_substantive.md†L636-L662】
* **“Did we bump any security XML IDs?”** If an `ir.model.access` row (or any record ID) changes, ship an upgrade patch using `util.rename_xmlid` so existing databases migrate cleanly. [PR #190886](https://github.com/odoo/odoo/pull/190886) shows the preferred pattern: bundle the rename in `migrations/` alongside the security change so upgrades do not drop and recreate access rules.

Use these prompts to gatekeep the basics before diving into the deeper guidance below.

## Core principles highlighted by qsm-odoo

### 1. Guard stability and backward compatibility

* Avoid touching persisted XML (attributes, selectors, file paths) in stable branches unless there is no other option; prefer dynamic fixes or widget overrides so customer xpaths and existing databases stay intact.【F:data/qsm_review_substantive.md†L4-L58】
* Moving files or drastically changing CSS selector specificity in stable versions can break forward-ports and customizations—only do so with compelling evidence that risk is negligible.【F:data/qsm_review_substantive.md†L515-L517】【F:data/qsm_review_substantive.md†L636-L638】
* When you must rework core assets (fonts, bundles, dropdown behavior, etc.) plan incremental follow-ups and keep risky adaptations out of freeze branches.【F:data/qsm_review_substantive.md†L433-L440】【F:data/qsm_review_substantive.md†L185-L190】

### 2. Keep commits traceable and scoped

* Ensure each commit actually contains the change announced by its title; avoid “empty” commits that just add imports or unrelated refactors mixed into functional fixes.【F:data/qsm_review_substantive.md†L11-L18】【F:data/qsm_review_substantive.md†L147-L155】
* Reference the original commits or tasks that introduced regressions so future reviewers can follow the history, and link to the correct merged hash—not a development branch short hash.【F:data/qsm_review_substantive.md†L133-L166】【F:data/qsm_review_substantive.md†L450-L466】
* Split heterogeneous work into dedicated commits (or PRs) before requesting review, especially when mixing backend cache changes, template edits, and JS refactors; otherwise reviewers cannot validate each concern independently.【F:data/qsm_review_substantive.md†L147-L172】【F:data/qsm_review_substantive.md†L316-L324】
* When renaming or moving files, isolate the move so git history and forward-port automation continue to work smoothly.【F:data/qsm_review_substantive.md†L717-L718】

### 3. Demand reproducible testing and coverage

* Prioritize fixes that block many trial databases, and back them with targeted tests (unit, tour, or mocked RPC) so regressions stay caught in future branches.【F:data/qsm_review_substantive.md†L68-L73】【F:data/qsm_review_substantive.md†L577-L599】
* Keep automated tours aligned with the real onboarding experience: homepage tours must still run per theme, include “go to theme” steps, and preserve guards like `prepend_trigger` so tours don’t mutate random pages.【F:data/qsm_review_substantive.md†L536-L558】
* Validate that new tests actually hit the scenario you are fixing—if they keep using community tours or cached code paths, they may pass without covering the bug.【F:data/qsm_review_substantive.md†L540-L556】【F:data/qsm_review_substantive.md†L653-L662】
* Share runbot/test context in the PR so other reviewers can see the failing job without digging through internal tools.【F:data/qsm_review_substantive.md†L112-L115】

### 4. Respect builder semantics and editability rules

* Understand the separation between “editable” and “savable”: classes like `o_editable_media` intentionally allow editing inside otherwise non-editable DOM regions, so guardrails like `shouldEditableMediaBeEditable` must remain until the old and new systems are unified.【F:data/qsm_review_substantive.md†L15-L45】
* Avoid leaking generic variables (`t-set="fields"`) into global templates such as `website.layout`; rename or scope them to prevent cross-app collisions.【F:data/qsm_review_substantive.md†L321-L327】
* Builder controllers and options should degrade gracefully—rely on dedicated hooks (`_computeWidgetVisibility`, `_patchForComputeSnippetTemplates`, etc.) instead of DOM mutations inside readonly helpers or ad-hoc background option clones.【F:data/qsm_review_substantive.md†L299-L300】【F:data/qsm_review_substantive.md†L652-L662】

### 5. Bake in accessibility and semantic structure

* Decorative icons inside buttons should use `role="presentation"` (or be dropped entirely) while actionable icons need titles/labels on the button itself; avoid redundant `<i>` wrappers when classes can live on `<button>` directly.【F:data/qsm_review_substantive.md†L82-L99】
* Preserve heading hierarchy and semantic tags—change their styling with utility classes like `h3-fs` instead of downgrading the markup.【F:data/qsm_review_substantive.md†L272-L275】

### 6. Preserve performance and explain cache behavior

* Document every cache invalidation trick (`clear_cache`, `my_func.__cache__.add_value`, cron refreshes, etc.) so future maintainers know why the code is structured that way and when caches expire.【F:data/qsm_review_substantive.md†L133-L172】
* Measure the impact of cache removals: eliminating `t-cache` or website page caches can add 30–50% latency, so either restore alternative caching or justify the trade-off with data.【F:data/qsm_review_substantive.md†L480-L489】
* Prefer lightweight context lookups over recomputing data repeatedly, and keep helper methods private (`_method`) with docstrings that describe parameters and returns for the `/doc` generator.【F:data/qsm_review_substantive.md†L725-L740】

### 7. Treat translations as first-class citizens

* Coordinate with the i18n pipeline: removing strings from `.pot` files wipes translations in existing databases, so keep legacy terms (even hidden) when reworking content and communicate automation changes broadly.【F:data/qsm_review_substantive.md†L205-L267】
* When fixing translation bugs, extend helper utilities (e.g., `multiLanguage`) so all scenarios benefit, and avoid translating effect names or static IDs that should remain developer-facing.【F:data/qsm_review_substantive.md†L344-L349】【F:data/qsm_review_substantive.md†L399-L403】
* Remember that `t-attf-*` attributes are already translatable—migrating strings to JS without need just makes translators’ lives harder.【F:data/qsm_review_substantive.md†L817-L822】

### 8. Uphold front-end styling discipline

* Refrain from redefining palette defaults or logo assets without revisiting the UX rationale (e.g., preventing users from mistaking image logos for editable text) and explaining the change in commit messages.【F:data/qsm_review_substantive.md†L370-L383】
* Use the color-preset (`o_cc*`) helpers as intended: base definitions should fall back to Bootstrap variables, and don’t break nested presets by skipping preset `1` or by hijacking CSS variables for visitor styling.【F:data/qsm_review_substantive.md†L781-L795】
* Leverage upstream mixins (`btn-close-white`) or shared `.o_cc` rules instead of duplicating SCSS declarations across presets.【F:data/qsm_review_substantive.md†L844-L858】

### 9. Communicate proactively and close the loop

* Ping assignees when forward-ports block, and follow up on stalled reviews; reviewers expect visibility on status as freezes approach.【F:data/qsm_review_substantive.md†L63-L77】【F:data/qsm_review_substantive.md†L202-L229】
* Set expectations with product and QA stakeholders—if a PR introduces new fields or broad architectural changes, negotiate the target version (19.0 vs 19.1) before pushing for merge.【F:data/qsm_review_substantive.md†L523-L531】
* Provide reproduction steps and end-user impact directly in commit messages/PR descriptions, since community contributors cannot open internal tasks.【F:data/qsm_review_substantive.md†L844-L845】
* Use delegation tools (`@robodoo delegate`) responsibly so someone remains accountable for finishing the review cycle.【F:data/qsm_review_substantive.md†L701-L712】

### 10. Enforce style and linting standards

* Keep comments ≤80 characters and commit messages within 72 characters per line, include task/runbot references, and remove unused imports or whitespace noise before requesting review.【F:data/qsm_review_substantive.md†L132-L139】【F:data/qsm_review_substantive.md†L735-L756】
* Apply consistent naming (e.g., prefixing processors with `_`) so it is obvious which helpers are internal APIs versus callable from JS widgets.【F:data/qsm_review_substantive.md†L725-L738】

## Practical review checklist

1. **Scope & branch** – Is this change limited to the minimal surface for the target branch? Any XML/styling adjustments need a stability justification.【F:data/qsm_review_substantive.md†L4-L58】
2. **Commit hygiene** – Does each commit do one thing with clear history references and proper formatting?【F:data/qsm_review_substantive.md†L133-L172】
3. **Reproduction & tests** – Are steps and automated coverage in place (or explicitly planned) so others can validate the fix?【F:data/qsm_review_substantive.md†L68-L73】【F:data/qsm_review_substantive.md†L536-L556】
4. **Builder semantics** – Are editability flags, widget hooks, and option scopes respected to avoid regressions in existing snippets?【F:data/qsm_review_substantive.md†L15-L45】【F:data/qsm_review_substantive.md†L652-L662】
5. **Accessibility & UX** – Do markup and assets remain semantic, accessible, and aligned with branding guidelines?【F:data/qsm_review_substantive.md†L82-L99】【F:data/qsm_review_substantive.md†L370-L383】
6. **Performance** – Have caching implications been documented or mitigated?【F:data/qsm_review_substantive.md†L133-L172】【F:data/qsm_review_substantive.md†L480-L489】
7. **Translations** – Will translators and legacy databases keep working after these changes?【F:data/qsm_review_substantive.md†L205-L263】【F:data/qsm_review_substantive.md†L817-L822】
8. **Communication** – Does the PR include context, ownership, and coordination notes for stakeholders?【F:data/qsm_review_substantive.md†L202-L229】【F:data/qsm_review_substantive.md†L701-L712】

## Full PR inventory

The table below lists every pull request that qsm-odoo reviewed over the last two years, so you can dive into the original discussions.

--8<-- "../../data/qsm_pr_overview.md"
