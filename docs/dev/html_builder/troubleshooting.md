# Troubleshooting

- **My action is not executed when clicking the option.**
  - Ensure the option descriptor `selector` matches the DOM element (`editor.shared.builderOptions.computeContainers(el)`).
  - Verify the action id matches the class `static id`.
  - Confirm the plugin is included in the asset bundle (after `html_builder.assets_wysiwyg`).

- **Action throws “Unknown builder action id”.**
  - The plugin providing the action must load before the option triggers. Check asset ordering (`depends` in the manifest).
  - Avoid duplicate ids—`BuilderActionsPlugin.setup` throws on duplicates.

- **Undo/Redo leaves the option panel empty.**
  - Actions should not detach the editing element without reinstating containers. Call `editor.shared.builderOptions.setNextTarget(newEl)` during `apply` if the selection moves.
  - Ensure `clean` reinstates attributes/classes needed by selectors.

- **DOM element removed before action commit.**
  - Wrap asynchronous operations in `Operation.next` with `shouldInterceptClick` or guard with `editingElement.isConnected`.
  - Use `dependencyManager` to re-attach to a parent fallback when needed.

- **Runbot tours flake when clicking options.**
  - Avoid animation delays; set `BuilderAction.withLoadingEffect = false` for instant options.
  - Provide deterministic overlays (await overlay removal before continuing).
  - Add `await editor.shared.history.makeSnapshotStep()` in tests to wait for history flushes.

- **Debugging “action not applied” issues.**
  - Enable assets debug (`?debug=assets`) to load source maps.
  - Inspect the action instance: `editor.shared.builderActions.getAction("yourId")` to review `preview`, `reload`, `dependencies`.
  - Check `isApplied` return; options may disable themselves if `isApplied` yields `true`.

- **Patch default option without replacing template.**
  - Use `resources.patch_builder_options` with `{ target_name, target_element, method: "replace", value }`.
  - Or supply `resources.builder_header_middle_buttons` to add overlay buttons without replacing the template.

- **Overlay handles missing on a custom snippet.**
  - Ensure the snippet root matches `BuilderOverlayPlugin` selectors (`sizingX`, `sizingY`, `sizingGrid`).
  - If a custom element should expose an overlay, register a `has_overlay_options` resource returning `true`.

- **Snippet saving keeps transient classes.**
  - Add `cleanForSave` handlers to option descriptors to remove classes/attributes before snapshot save.
