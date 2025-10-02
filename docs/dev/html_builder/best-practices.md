# Best Practices

## Performance

- Reduce `withLoadingEffect` usage for instant actions; reserve loading overlays for heavy operations.
- Reuse cached ORM helpers (`cached_model_plugin`) when building pickers.
- Debounce preview-heavy actions and prefer CSS class toggles over inline style rewrites.

## UX Consistency

- Align option labels and tooltips with existing builder terminology.
- Use overlay buttons (`builder_header_middle_buttons`) for destructive actions so users keep spatial context.
- Ensure options that change visibility trigger `builder.editorBus.trigger("UPDATE_EDITING_ELEMENT")` or refresh containers.

## Resource Ordering

- `Builder` wraps `on_mobile_preview_clicked` handlers with `withSequence(20, ...)`; lower numbers execute first.
- Override default option templates with `resources.patch_builder_options` (`method: "replace"`) and ensure the patch plugin loads after the original provider.
- When chaining resources, prefer named sequences from `static/src/utils/option_sequence.js`.

## Invisible Elements and Preview

- `builder.js` maintains `state.currentOptionsContainers`. Invisible elements panel uses `getInvisibleSelector` to list `.o_snippet_invisible` and breakpoint-specific classes.
- When writing actions that change visibility, call `builder.editorBus.trigger("UPDATE_EDITING_ELEMENT")` or rely on `BuilderOptionsPlugin.updateContainers` to refresh.

## Testing Discipline

- Run website tours covering new options (base tours in `tests/` show patterns).
- Add QUnit tests when feasible, reusing `website_tour_utils` for interactions.
- Validate undo/redo by calling `editor.shared.history.undo()` / `redo()` in tests and asserting DOM state.
