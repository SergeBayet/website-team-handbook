# Reference

## Snippet Load and Save

```text
SnippetModel.load()
    -> RPC ir.ui.view.render_public_asset
    -> preprocessors (registry html_builder.snippetsPreprocessor)
    -> populate snippetsByCategory
    -> sidebar BlockTab renders categories

SaveSnippetPlugin.apply()
    -> clean_for_save_handlers root cleanup
    -> orm call ir.ui.view.save_snippet
    -> SnippetModel.reload()
```

## Useful Selectors and Constants

- `BuilderOptionsPlugin.notActivableElementsSelector`: skip overlay updates when clicking UI chrome.
- `utils/option_sequence.js`: `DEFAULT`, `WIDTH`, `LAYOUT_COLUMN`, `ANIMATE`, `BLOCK_ALIGN`, etc.
- `builder.js#getInvisibleSelector`: `.o_snippet_invisible`, `.o_snippet_mobile_invisible`, `.o_snippet_desktop_invisible`.

## Services Overview

- `html_builder.snippets`: returns `getSnippetModel` for snippet metadata and persistence.
- `public.interactions`: controls website interactions (stop/start) for previews and cloning.
- `orm`, `ui`, `notification`, `dialog`, `popover`: inherited from the webclient; accessible via `useService` in option components.

## Testing Checklist

- Run tours targeting new options (see `tests/` for base scenarios).
- Add QUnit tests when feasible, reusing `website_tour_utils` for interactions.
- Validate undo/redo by calling `editor.shared.history.undo()` / `redo()` in tests and asserting DOM state.
