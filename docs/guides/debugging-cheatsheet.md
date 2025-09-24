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
- **Screencasts & screenshots**: supply `--screencasts=$PWD/artifacts` or `--screenshots=$PWD/artifacts` to capture UI state for failures.
- **CI parity**: mimic runbot by using the `--test-enable --stop-after-init` combo locally before pushing.

## 7. JavaScript & OWL Debugging
- Start the server with `--dev=assets` to serve raw ES modules.
- In DevTools:
  - Use the *Sources* panel to set breakpoints in Owl components (file paths mirror `addons/.../static/src`).
  - Enable *Async stack traces* to follow RPC chains.
- Use browser console helpers from `@web/`:
  - `_t`, `registry`, and `env.services` are accessible in the console when you pause inside Owl component code.
- Run Karma/QUnit tests by visiting `/web/tests?debug=assets,tests` and filtering modules.
- For assets cache issues, invalidate via Developer menu → *Regenerate Assets* or remove `*.assets_*.json` in the filestore.

## 8. RPC, HTTP, and External Services
- **Werkzeug debugger**: `--dev=werkzeug` exposes an interactive traceback for uncaught HTTP errors.
- **Trace RPC calls**: set `--log-level=debug_rpc_answer` to print request payloads and JSON responses.
- **Simulate different users**: developer menu → *Become Superuser* or run code with `env['res.users'].browse(id).with_user(user).method()` inside the shell.
- **Email / SMTP**: use a local dummy SMTP (e.g., `python -m smtpd -c DebuggingServer -n localhost:1025`) and configure outgoing mail in *Settings → Technical → Outgoing Mail Servers*.

## 9. Database & SQL Diagnostics
- Connect directly: `psql postgres://odoo:odoo@localhost/<db>`.
- List open transactions: `SELECT pid, state, query FROM pg_stat_activity WHERE state <> 'idle';`.
- Check slow queries with `EXPLAIN (ANALYZE, BUFFERS) <query>;` after copying SQL from `--log-sql` output.
- Enforce constraints manually: run `env.cr.execute("SELECT ...")` from `odoo-bin shell` when building ad-hoc checks.
- Use `--db-filter='^%d$'` to focus on a single database in multi-db setups while debugging login issues.

## 10. Performance & Memory Profiling
- **Monitor worker churn**: `--limit-request=1` forces workers to restart after each request, surfacing leaks.
- **Track allocations**: set `os.environ['TRACEMALLOC'] = '1'` before starting the server, then use `tracemalloc` inside breakpoints.
- **Yappi / Pyflame**: wrap server start with profiling tools (`yappi.start()`) and inspect stats via `yappi.get_func_stats().print_all()`.
- **Long requests**: `watch -n 1 'ps -o pid,ppid,etime,%cpu,%mem,cmd -C python3'` to verify workers stuck in CPU/memory.
- **JS performance**: open Chrome Performance tab, record interactions in debug assets mode for meaningful stack traces.

## 11. Background Jobs & Cron
- Pause cron: start with `--max-cron-threads=0` to prevent scheduled jobs from interfering.
- Trigger manually from shell:
```python
env['ir.cron'].browse(<cron_id>).method_direct_trigger()
```
- Inspect queue backlogs in *Technical → Scheduled Actions* and check `ir.cron` logs with `--log-handler=odoo.addons.base.models.ir_cron:DEBUG`.

## 12. Common Debug Workflows
- **Reproduce in a copy**: `./odoo-bin db duplicate -d prod_db test_db` then neutralize with `./odoo-bin neutralize -d test_db`.
- **Minimal module update**: `./odoo-bin -d <db> -u my_module --log-level=debug --dev=xml` to rebuild views.
- **Frontend asset tweak**: start with `--dev=reload,assets`, edit JS/SCSS, watch auto-reload in the browser.
- **Investigate access errors**: run with `--dev=access` to print stack traces for `AccessError` and `MissingError`.

Keep this guide close while working on the handbook. When you discover a new debugging trick inside `../Dev/odoo`, add it here so the whole team benefits.
