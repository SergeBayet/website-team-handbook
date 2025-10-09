# Ten reminders from qsm-odoo for website reviews (2023–2025)

Between July 2023 and October 2025, qsm-odoo reviewed 100 pull requests that touched the website, web editor, and adjacent modules in the `odoo/odoo` repository. The notes below condense the themes that came up most often so your reviews stay aligned with his expectations. The full dataset—including every PR link—is still available at the end of this guide.【F:data/qsm_pr_overview.md†L1-L109】【F:data/qsm_review_substantive.md†L1-L858】

## Ten things to remember before you +1 a website PR

1. **Assume stable branches must keep today’s XML, selectors, and method signatures.** If a change targets 17.0 or 18.0, look for alternatives (widget patches, visibility toggles, CSS `:where()` wrappers, etc.) that fix the bug without breaking customer overrides.【F:data/qsm_review_substantive.md†L47-L58】【F:data/qsm_review_comments.md†L843-L845】
2. **Keep selector specificity predictable.** Layering IDs or `:not()` clauses onto generic classes makes customer snippets impossible to override, so favor lower-specificity helpers and document unavoidable bumps.【F:data/qsm_review_comments.md†L843-L845】【F:data/qsm_review_substantive.md†L636-L638】
3. **Leave translators a migration path.** Removing msgids or moving copy to JS wipes live translations—preserve legacy strings (even hidden) or migrate helper utilities so every locale stays in sync.【F:data/qsm_review_substantive.md†L205-L267】【F:data/qsm_review_substantive.md†L817-L822】
4. **Keep compute helpers pure.** Methods such as `_computeWidgetVisibility` only describe state; DOM updates belong in the UI layer. Push any mutations into `updateUI` or dedicated hooks before you approve.【F:data/qsm_review_substantive.md†L636-L662】
5. **Insist on clean commits and accurate references.** Commit messages should mention the merged hash (not development branches), use complete URLs, and keep whitespace noise out; if the history is messy, ask for a `robodoo squash` or a rewrite before approving.【F:data/qsm_review_comments.md†L612-L628】【F:data/qsm_review_comments.md†L442-L444】【F:data/qsm_review_comments.md†L634-L636】
6. **Demand reproducible fixes and matching tests.** Prioritize bug fixes that block many trials, and insist on tours or unit tests that actually hit the scenario instead of unrelated community flows.【F:data/qsm_review_substantive.md†L68-L73】【F:data/qsm_review_substantive.md†L536-L556】
7. **Respect builder semantics.** Editable zones, snippet options, and processor utils have clear contracts—watch for leaked variables, misplaced options, or helpers that ignore savable vs. editable boundaries.【F:data/qsm_review_substantive.md†L15-L45】【F:data/qsm_review_substantive.md†L299-L324】
8. **Preserve accessibility and structure.** Keep markup semantic (correct roles, headings, labels) and prefer utility classes over downgrading tags or duplicating icon wrappers.【F:data/qsm_review_substantive.md†L227-L275】【F:data/qsm_review_substantive.md†L370-L383】
9. **Protect performance-conscious defaults.** Removing caches or heavy refactors without numbers can add 30–50% latency. Either prove the gain or land mitigations alongside the change.【F:data/qsm_review_substantive.md†L480-L489】【F:data/qsm_review_substantive.md†L725-L740】
10. **Close the loop with clear ownership.** Reviewers expect regular status updates when forward-ports block, plus deliberate pings so work does not stall as freezes approach.【F:data/qsm_review_substantive.md†L63-L77】【F:data/qsm_review_substantive.md†L707-L712】

Keep this list handy for triage. It captures the baseline expectations that repeatedly surfaced in qsm-odoo’s reviews—anything that violates them should block until addressed.

## Full PR inventory

The table below lists every pull request that qsm-odoo reviewed over the last two years, so you can dive into the original discussions.

--8<-- "../../data/qsm_pr_overview.md"
