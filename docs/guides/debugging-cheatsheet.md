# Debugging Cheatsheet

This cheat sheet collects the debugging techniques we reach for most often when working on the Odoo codebase under `../Dev/odoo`. Each section is organized so you can jump directly to the tool you need.

## 1. Entering Developer Mode Quickly
- **Toggle from the UI**: Click your avatar → *About Odoo* → *Activate the developer tools*.
- **URL switch**: Append query parameters to any backend URL:
  - `?debug=1` for regular developer mode.
  - `?debug=assets` to serve unminified assets and expose JS sources.
  - `?debug=assets,tests` to load the QUnit test environment.
- **Server autoload**: Run `./odoo-bin start --dev=reload` during local development to restart workers when Python sources change.

## 2. Server Startup Flags Worth Memorizing
- `./odoo-bin server -d <db> --log-level=debug` to start in verbose mode for a given database.
- `./odoo-bin server -d <db> --dev=qweb,xml,werkzeug` to expose the Werkzeug debugger, log compiled QWeb templates, and bypass DB-cached views.
- `./odoo-bin server -d <db> --log-sql` to show executed SQL queries; pair with `--max-cron-threads=0` to avoid cron noise.
- `./odoo-bin server -d <db> --limit-time-cpu=0 --limit-time-real=0` temporarily disables request timeouts while debugging.
- `./odoo-bin server -d <db> --test-tags=...` filters tests when diagnosing regressions (see §6).

## 3. Logging, Tracing, and Noise Control
- **Change log handler on the fly**: `--log-handler=odoo.addons.module:DEBUG` to isolate a module.
- **Root level overrides**: `--log-level=debug_rpc` to print RPC payloads, `--log-level=debug_sql` for SQL timings.
- **Send logs elsewhere**: add `--logfile=/tmp/odoo.log` or `--syslog` when attaching to tmux/screen sessions.
- **Log from code**: prefer `_logger = logging.getLogger(__name__)`; use structured messages (`_logger.info("[%s] %s", partner.id, msg)`).
- **Trace email flow**: `--log-handler=odoo.addons.base.models.ir_mail_server:DEBUG` surfaces actual SMTP payloads.

## 4. Python Breakpoints & Interactive Shells
```bash
# Drop into a REPL with a live environment
./odoo-bin shell -d <db>
```
Inside the shell you get `env`, `self`, and helpers:
```python
Partners = env['res.partner']
Partners.search([('is_company', '=', True)], limit=5).mapped('name')
```
- **Breakpoints**: insert `import pdb; pdb.set_trace()` or use `from odoo.tools.debugger import check_debugger` to activate conditionally when `--dev=werkzeug` is set.
- **Post-mortem**: run `python3 -m pdb -c continue odoo-bin server ...` to automatically enter pdb on uncaught exceptions.
- **ipdb / pudb**: install the debugger in your virtualenv, then call `import ipdb; ipdb.set_trace()` for richer interaction.

## 5. Inspecting Records & Views from the UI
- Developer menu contains:
  - *View Fields* / *View Metadata* to examine models and XML IDs.
  - *Regenerate Assets* (see `addons/web/static/src/core/debug/debug_menu_items.js`) when tinkering with web assets.
  - *Become Superuser* to reproduce sudo-only paths without editing code.
- Use the *Technical → Database Structure* submenu to inspect models, fields, scheduled actions, and access rules.
- Activate *Leave Debug Mode* to return to production-like conditions quickly.

## 6. Tests, Tours, and Screenshots
- **Unit and YAML tests**: `./odoo-bin -d <db> --test-tags=account --log-level=test` executes only tagged suites.
- **JS/QUnit suites**: launch the server with `--dev=assets` and open `/web/tests?module=web`.
- **Tours**: for web tours, add `--test-tags=/web.tour` or run Chrome with `--remote-debugging-port` and inspect the console output.
- **Tours from console**: in DevTools run `odoo.startTour('tour_name', { mode: 'manual' })` once `odoo.isTourReady('tour_name')` returns true; for database-backed tours fall back to `odoo.__WOWL_DEBUG__.root.env.services.tour_service.startTour('tour_name', { mode: 'manual', fromDB: true })`, and trigger the recorder via `...startTourRecorder()` when you need to capture steps.
- **Screencasts & screenshots**: supply `--screencasts=$PWD/artifacts` or `--screenshots=$PWD/artifacts` to capture UI state for failures.
- **CI parity**: mimic runbot by using the `--test-enable --stop-after-init` combo locally before pushing.

## 7. Browser DevTools Deep Dive
- **Launch quickly**: open DevTools with `F12` / `Ctrl+Shift+I` (or browser menu) and always append `?debug=assets` when you need readable JS. Chrome, Firefox, Edge, and Safari expose near-identical panels—use the one you know best.
- **Elements tab**: inspect the live DOM, tweak HTML/CSS to preview UI fixes, and copy selectors. When you spot a class like `oe_login_form`, jump to the corresponding view via *Debug* → *Technical* → *Views* and edit the XML safely instead of relying on ephemeral DOM tweaks.
- **Console tab**: execute arbitrary JS or jQuery snippets (Odoo still ships jQuery) to query fields, trigger services, or paste snippets copied from teammates. Watch it for runtime errors, stack traces, and messages emitted by `_logger`. Pair it with network requests copied as `fetch` (see below) to replay calls with custom payloads.
- **Sources tab**: browse every loaded asset, set breakpoints, and step through Owl components. Use `debugger;` statements or click the gutter next to a line, watch the call stack/context in the right sidebar, and edit scripts on the fly. Keep *Async* call stacks enabled to follow RPC chains across promises.
- **Network tab**: inspect payloads, responses, and timing for each request. Headers reveal the JSON body sent server-side; Preview/Response shows the ORM result. Use *Initiator* to discover which JS triggered the call and *Timing* to distinguish network latency (`Request/Response`) from server processing (`TTFB`). Right-click → *Copy → Copy as fetch* sends a ready-to-edit snippet to the console—great for reproducing a `read_group` or `search_read` with modified domains (be cautious with destructive endpoints).
- **Performance aids**: toggle *Preserve log* before reloads, filter by `XHR` to suppress static assets, and experiment with throttling (3G, offline) to simulate slower clients. The waterfall highlights slow requests and is your entry point for performance debugging.
- **Other tabs worth a glance**: *Application* offers quick cookie/cache inspection when auth issues arise; *Performance* captures CPU frames for JS-heavy flows; *Sensors* spoofs location/timezone for views that depend on geolocation. Clear the browser cache when assets or cookies appear stale.

## 8. JavaScript & OWL Debugging
- **Serve raw assets**: start with `--dev=assets` (and `--dev=reload` for hot reloads) so Chrome DevTools shows the real ES modules from `addons/.../static/src`.
- **Breakpoints in Sources**: add `debugger;` or click the gutter, keep *Async* stacks on, and step through Owl lifecycle hooks just like any other JS.
- **Console helpers**: while paused you can call `_t`, use `registry.category(...)`, or inspect `env.services`; via `odoo.__WOWL_DEBUG__.root.env` you can grab services without a pause.
- **OWL runtime introspection**: `const [app] = __OWL_DEVTOOLS__.apps;` exposes the active root, letting you traverse `app.root.component`, its props, env, and subscriptions programmatically.
- **Asset cache resets**: if changes fail to show, hit Developer menu → *Regenerate Assets* or delete `*.assets_*.json` from the filestore before refreshing.

**OWL DevTools Setup**
- **Get the extension**: download the packaged `owl-devtools.zip` from the Owl releases or build locally from the Owl repo root with `npm install` then `npm run build:devtools-chrome` / `…-firefox`.
- **Chrome install**: open `chrome://extensions`, enable Developer Mode, choose *Load unpacked*, and select `dist/devtools` (refresh the card after each rebuild).
- **Firefox install**: visit `about:debugging#/runtime/this-firefox`, click *Load Temporary Add-on…*, and pick any file inside `dist/devtools` (use *Reload* after rebuilds).
- **Live tweaks**: `npm run dev:devtools-<browser>` watches the sources so you can reload the extension without a full rebuild.

**OWL DevTools Highlights**
- **Component tree & picker**: open the Owl tab to browse every app/component, search fuzzily, or use the DOM picker to highlight and select the matching Owl component on hover.
- **Context actions**: right-click any node to expand/fold descendants, inspect compiled/raw templates, jump to Elements, force a rerender, or drop the instance/subscriptions into the console.
- **Details panel**: view props, env, subscriptions, instance fields, and hooks; double-click leaf values to edit them (JSON literals) and trigger a manual rerender when you confirm.
- **Observed variables**: watch any property via the context menu; values refresh every 200 ms, persist per browser profile, and sit in a dedicated panel for quick comparisons.
- **Hook tooling**: lifecycle hooks expose menus to inject (conditional) breakpoints either on the class or instance, letting you break exactly when `willUpdateProps` or `mounted` fires.

**Profiler & Utilities**
- **Event recorder**: hit *Record* to capture render/create/destroy events, switch between tree and log views, and use the context menu to navigate just like in the component tree.
- **Tracing switches**: enable *Trace renderings* or *Trace subscriptions* to stream the stack trace of each render trigger straight to the console for post-analysis.
- **Multi-frame support**: the frame selector appears when an Owl-powered iframe is detected; switching frames reloads the tree and profiler scoped to that context.
- **Comfort features**: toggle dark mode from the toolbar, refresh the extension when the hook desyncs, and rely on the popup icon (upright owl) to confirm Owl is present in the tab.

## 9. RPC, HTTP, and External Services
- **Werkzeug debugger**: `--dev=werkzeug` exposes an interactive traceback for uncaught HTTP errors.
- **Trace RPC calls**: set `--log-level=debug_rpc_answer` to print request payloads and JSON responses.
- **Simulate different users**: developer menu → *Become Superuser* or run code with `env['res.users'].browse(id).with_user(user).method()` inside the shell.
- **Email / SMTP**: use a local dummy SMTP (e.g., `python -m smtpd -c DebuggingServer -n localhost:1025`) and configure outgoing mail in *Settings → Technical → Outgoing Mail Servers*.

## 10. Database & SQL Diagnostics
- Connect directly: `psql postgres://odoo:odoo@localhost/<db>`.
- List open transactions: `SELECT pid, state, query FROM pg_stat_activity WHERE state <> 'idle';`.
- Check slow queries with `EXPLAIN (ANALYZE, BUFFERS) <query>;` after copying SQL from `--log-sql` output.
- Enforce constraints manually: run `env.cr.execute("SELECT ...")` from `odoo-bin shell` when building ad-hoc checks.
- Use `--db-filter='^%d$'` to focus on a single database in multi-db setups while debugging login issues.

## 11. Performance & Memory Profiling
- **Monitor worker churn**: `--limit-request=1` forces workers to restart after each request, surfacing leaks.
- **Track allocations**: set `os.environ['TRACEMALLOC'] = '1'` before starting the server, then use `tracemalloc` inside breakpoints.
- **Yappi / Pyflame**: wrap server start with profiling tools (`yappi.start()`) and inspect stats via `yappi.get_func_stats().print_all()`.
- **Long requests**: `watch -n 1 'ps -o pid,ppid,etime,%cpu,%mem,cmd -C python3'` to verify workers stuck in CPU/memory.
- **JS performance**: open Chrome Performance tab, record interactions in debug assets mode for meaningful stack traces.

## 12. Background Jobs & Cron
- Pause cron: start with `--max-cron-threads=0` to prevent scheduled jobs from interfering.
- Trigger manually from shell:
```python
env['ir.cron'].browse(<cron_id>).method_direct_trigger()
```
- Inspect queue backlogs in *Technical → Scheduled Actions* and check `ir.cron` logs with `--log-handler=odoo.addons.base.models.ir_cron:DEBUG`.

## 13. Common Debug Workflows
- **Reproduce in a copy**: `./odoo-bin db duplicate -d prod_db test_db` then neutralize with `./odoo-bin neutralize -d test_db`.
- **Minimal module update**: `./odoo-bin -d <db> -u my_module --log-level=debug --dev=xml` to rebuild views.
- **Frontend asset tweak**: start with `--dev=reload,assets`, edit JS/SCSS, watch auto-reload in the browser.
- **Investigate access errors**: run with `--dev=access` to print stack traces for `AccessError` and `MissingError`.

Keep this guide close while working on the handbook. When you discover a new debugging trick inside `../Dev/odoo`, add it here so the whole team benefits.
