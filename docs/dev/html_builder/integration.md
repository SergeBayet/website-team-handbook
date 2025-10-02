# Integration Points

## Snippet Catalog and Service (`static/src/snippets/snippet_service.js`)

- Loads snippet bundles via RPC `ir.ui.view.render_public_asset`.
- Preprocesses DOM via `registry.category("html_builder.snippetsPreprocessor")`.
- Provides API (`SnippetModel`) for retrieving snippet metadata, saving custom snippets, and opening the snippet dialog.

## Website Editor Shell (`static/src/builder.js`)

- OWL component orchestrating tabs (Blocks/Style/Theme), hotkeys, and the mobile preview toggle.
- Instantiates `Editor` with configuration (plugins set to `CORE_PLUGINS`, extra resources, mobile detection).
- Bridges history state to the UI (undo/redo buttons) and updates option containers on DOM changes.

## Backend Endpoints

- `html_builder` relies on:
  - `ir.ui.view.render_public_asset` to fetch snippet markup.
  - `ir.ui.view.save_snippet`, `rename_snippet`, `delete_snippet` for custom snippet persistence.
- Assets defined in `static/src/builder.xml` and `__manifest__.py` add templates, SCSS, and JS bundles.
- RPC context is enriched with edition metadata (language, theme module, record info).

## Collaboration with Other Modules

- Grid layout helpers integrate with `website_sale` and `website_event` through option plugins registered in their respective modules.
- Media plugins reuse `media_website_plugin.js` to integrate the media dialog.
- `website_theme_install` extends the theme tab via `getThemeTab`.
