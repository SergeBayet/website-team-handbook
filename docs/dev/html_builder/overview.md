# Overview

## Purpose and Positioning

- `html_builder` is the visual website editor shipped with Odoo. It sits on top of the generic `html_editor` engine and provides the snippet sidebar, contextual options, and website-specific plugins.
- The module turns the static website into an interactive editable surface by embedding the editor inside the website iframe and orchestrating snippets, options, and builder actions.
- Responsibilities include loading snippet catalogs, applying style/layout changes, coordinating undo/redo, saving custom snippets, exposing integrations to tours/tests, and bridging to backend services (ORM, assets).

## Integration with Other Modules

- `website` supplies the shell: iframe management, toolbar, theme assets, controllers. `html_builder` injects itself via `website.editor` actions.
- `html_editor` provides the OWL-based editing engine with plugin architecture, history, selection, and DOM mutation tracking. `html_builder` extends it through additional plugins declared in `static/src/core/core_plugins.js`.
- The builder reuses editor features (history, operation mutex, resource orchestration) while adding website-specific interactions (snippets, overlay handles, grid layout helpers).

## Why a Dedicated Module Exists

- Website features require high-level abstractions (snippets, option panels, builder actions) that would pollute the generic editor.
- `html_builder` defines a clear API to extend the website editor without touching the base `html_editor` package.
- Migration tooling moves legacy `web_editor` snippet options to class-based builder options, ensuring forward compatibility.
