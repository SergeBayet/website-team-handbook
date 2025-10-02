# Key Components

Each entry lists the path, purpose, public API, relationships, and usage notes.

## `static/src/builder.js`

- **Purpose**: main OWL component for sidebar UI and editor bootstrapping.
- **Public API**: props (`closeEditor`, `reloadEditor`, `snippetsName`, `Plugins`, `config`, `editableSelector`, ...); methods `undo()`, `redo()`, `onTabClick()`, `triggerDomUpdated()`, `updateInvisibleEls()`.
- **Relationships**: Instantiates `Editor` with `CORE_PLUGINS`, exposes `editor` via sub-env, communicates with `InvisibleElementsPanel`, `BlockTab`, `CustomizeTab`.
- **Usage**: Extend props (e.g., `slots.extraActions`) to add custom buttons; use `getThemeTab` for theme-specific content.

## `static/src/core/core_plugins.js`

- **Purpose**: defines plugin lists to boot the editor (merging `html_editor` main plugins with builder-specific ones).
- **Public API**: exports `MAIN_PLUGINS`, `CORE_PLUGINS` arrays.
- **Relationships**: consumed by `builder.js`; other modules can prepend/append plugins by altering the `Plugins` prop.

## `static/src/core/core_builder_action_plugin.js`

- **Purpose**: supplies foundational builder actions (`ClassAction`, `AttributeAction`, `StyleAction`, `DataAttributeAction`, `SetClassRangeAction`) and registers system classes like `o_we_force_no_transition`.
- **Public API**: actions exposed via `resources.builder_actions`.
- **Relationships**: base actions reused by most option templates (class toggles, inline styles, dataset updates).

## `static/src/core/builder_action.js`

- **Purpose**: base class for builder actions (see [Core Concepts](core-concepts.md)).
- **Public API**: lifecycle hooks (`setup`, `prepare`, `apply`, `clean`, etc.), `has(method)` inspector.
- **Relationships**: instantiated by `BuilderActionsPlugin` with dependencies and services.

## `static/src/core/builder_actions_plugin.js`

- **Purpose**: aggregates action classes registered via `builder_actions` and exposes shared helpers.
- **Public API**: `getAction(actionId)`, `applyAction(actionId, spec)`; shared methods reachable through `editor.shared.builderActions`.
- **Relationships**: depends on `operation` and `history`; consumed by option components and other plugins (e.g., composite actions).

## `static/src/core/composite_action_plugin.js`

- **Purpose**: provides `CompositeAction` and `ReloadCompositeAction` to chain multiple builder actions in a single option.
- **Public API**: overrides of `prepare`, `apply`, `clean`; `loadOnClean = true` behaviour.
- **Relationships**: depends on `builderActions`; used by complex options like background configuration.

## `static/src/core/builder_options_plugin.js`

- **Purpose**: computes option containers for selected elements, manages option lifecycle, coordinates overlay integration, and syncs with undo/redo.
- **Public API** (shared): `computeContainers`, `getContainers`, `updateContainers`, `deactivateContainers`, `getTarget`, `getPageContainers`, `getRemoveDisabledReason`, `getCloneDisabledReason`, `getReloadSelector`, `setNextTarget`.
- **Relationships**: depends on `selection`, `overlay`, `operation`, `history`, `builderOverlay`, `overlayButtons`. Interacts with option components via the event bus (`change_current_options_containers_listeners`).
- **Extension**: contribute via resources such as `builder_options`, `elements_to_options_title_components`, `builder_header_middle_buttons`, `container_title`, `remove_disabled_reason_providers`, `clone_disabled_reason_providers`, `patch_builder_options`.

## `static/src/core/builder_component_plugin.js`

- **Purpose**: exposes reusable OWL components (inputs, dropdowns, color pickers, lists) to option templates.
- **Public API**: shared helper `getComponents()` returning the component map.
- **Relationships**: option templates retrieve components via `env.Components`; custom modules can import components or register new ones through the `builder_components` resource.

## `static/src/core/builder_content_editable_plugin.js`

- **Purpose**: centralizes `contenteditable` flags for the builder context.
- **Public API**: resources `force_not_editable_selector`, `force_editable_selector`, `filter_contenteditable_handlers`, `contenteditable_to_remove_selector`.
- **Relationships**: ensures only intended areas remain editable; cooperates with `SetupEditorPlugin` and `DisableSnippetsPlugin`.

## `static/src/core/dependency_manager.js`

- **Purpose**: lightweight reactive store for option dependencies.
- **Public API**: `add(id, value, ignored)`, `get(id)`, `removeByValue`, `trigger("dependency-updated")`.
- **Relationships**: exposed via the option component environment; used with hooks from `static/src/core/utils.js`.

## `static/src/core/utils.js`

- **Purpose**: provides OWL hooks/helpers for builder components (`useDomState`, `useActionInfo`, `useBuilderComponent`, `useDependencyDefinition`, `useDependencies`, `useGetItemValue`, `useIsActiveItem`).
- **Relationships**: required by option templates to bind builder actions to OWL components.

## `static/src/core/operation.js` and `static/src/core/operation_plugin.js`

- **Purpose**: wrap asynchronous operations with a mutex, loading overlay, and cancellation support.
- **Public API**: `Operation.next(fn, params)`, shared `editor.shared.operation.next`, `useOperation()` hook.
- **Relationships**: `BuilderActionsPlugin.applyAction` and option buttons rely on these utilities to sequence actions.

## History Plugin Interplay

- Provided by `html_editor` but tightly integrated: the builder uses history hooks (`makeSavePoint`, `getIsCurrentStepModified`, `post_undo_handlers`, `post_redo_handlers`) to resync UI and overlay state.

## `static/src/core/builder_overlay/builder_overlay_plugin.js`

- **Purpose**: manages overlay boxes and resize handles aligned with option selection.
- **Public API** (shared): `showOverlayPreview`, `hideOverlayPreview`, `refreshOverlays`.
- **Relationships**: depends on `localOverlay`, `history`, `operation`; consumes the `has_overlay_options` resource from the options plugin.

## `static/src/core/grid_layout/grid_layout_plugin.js`

- **Purpose**: enables grid layout editing (background grid, drag/drop of grid items, overlay controls).
- **Public API**: resources for overlay buttons, drag/drop hooks, history filters (`savable_mutation_record_predicates`).
- **Relationships**: works with `BuilderOptionsPlugin` to toggle grid mode (`LayoutOption`); uses utilities from `static/src/utils/grid_layout_utils.js`.

## `static/src/core/dropzone_selector_plugin.js`

- **Purpose**: declares dropzone selectors/rules controlling where snippets can be inserted.
- **Public API**: resources `dropzone_selector`, `so_snippet_addition_selector`, `so_content_addition_selector`.
- **Relationships**: consumed by `drop_zone_plugin.js` and `DisableSnippetsPlugin` to compute snippet availability.

## `static/src/core/disable_snippets_plugin.js`

- **Purpose**: disables snippets that cannot be dropped into the current context and keeps the snippet palette in sync.
- **Public API**: shared helper `disableUndroppableSnippets`; resources triggered on clone/remove/undo/redo/mobile preview.
- **Relationships**: depends on `setup_editor_plugin`, `dropzone`, `dropzone_selector`; manipulates `SnippetModel` categories.

## `static/src/core/media_website_plugin.js`

- **Purpose**: adapts media handling to the website editor (double-click to replace, drop video flow).
- **Public API**: shared `replaceMedia`; resources hooking into snippet drop and overlay.
- **Relationships**: depends on `media`, `selection`, `builderOptions`; uses the tooltip service for UX cues.

## `static/src/core/cached_model_plugin.js`

- **Purpose**: caches ORM reads/searches and wraps editable relation fields via `ModelEdit`.
- **Public API**: shared helpers `ormRead`, `ormSearchRead`, `useModelEdit`; `savePendingRecords` resource invoked before save.
- **Relationships**: ensures repeated ORM calls (Many2Many pickers, etc.) stay fast; flushes pending relation changes on save.

## `static/src/core/field_change_replication_plugin.js`

- **Purpose**: copies content changes across duplicate website fields (language variants, dynamic components).
- **Public API**: resources `handleNewRecords`, `normalize_handlers`.
- **Relationships**: works with the `dom` plugin from `html_editor` to remove system attributes; ensures translation duplicates stay in sync.

## `static/src/core/save_snippet_plugin.js`

- **Purpose**: adds the “Save block” button atop option containers and coordinates the snippet save pipeline.
- **Public API**: resource `get_options_container_top_buttons`; method `wrapWithBeforeAfterSaveHandlers`.
- **Relationships**: leverages `clean_for_save_handlers`, the snippet model service, and notifications.

## `static/src/core/save_plugin.js`

- **Purpose**: orchestrates the save flow for website records; groups dirty elements, calls the backend, and resets history.
- **Public API** (shared): `save`, `saveView`, `ignoreDirty`; resources include `savable_selectors`, `before_save_handlers`, `clean_for_save_handlers`, `save_element_handlers`, `save_handlers`, `get_dirty_els`.
- **Relationships**: coordinates with `history` (resets after save) and other plugins contributing to save handlers.

## `static/src/core/setup_editor_plugin.js`

- **Purpose**: initializes editable areas, applies `o_editable` classes, injects helper messages.
- **Public API**: shared `getEditableAreas`; resources `clean_for_save_handlers`, `closest_savable_providers`, `o_editable_selectors`.
- **Relationships**: downstream plugins (dropzones, disable snippets) rely on `getEditableAreas`; clean handler strips editor-only markers before save.

## `static/src/core/color_plugin.js`

- **Purpose**: extends the base color picker to surface the website palette and used colors.
- **Public API**: overrides `getUsedCustomColors`, `getPropsForColorSelector`.
- **Relationships**: consumed by the Theme tab and color-focused options.

## `static/src/core/anchor/anchor_plugin.js`

- **Purpose**: adds an anchor creation button to the overlay, generates unique anchors, integrates clipboard copy.
- **Public API**: shared `createOrEditAnchorLink`; resources hooking into clone and overlay buttons.
- **Relationships**: uses notification and dialog services, history for undo.

## Move, Drag-and-Drop, and Drop-Zone Plugins

- `static/src/core/move_plugin.js`, `drag_and_drop_plugin.js`, `drop_zone_plugin.js`
  - **Purpose**: support drag-and-drop snippet reordering and overlay handles; manage dropzone highlighting.
  - **Relationships**: interact with `BuilderOverlay`, `DropZoneSelectorPlugin`, `DisableSnippetsPlugin`.

## Remove and Clone Plugins

- `static/src/core/remove_plugin.js`, `clone_plugin.js`
  - **Purpose**: implement remove/clone overlay buttons; update history and snippet selection accordingly.
  - **Relationships**: use `BuilderOptionsPlugin.setNextTarget`, history previewing, and `public.interactions` to pause/resume dynamic behaviours.

## `static/src/core/customize_tab_plugin.js`

- **Purpose**: mounts style tab components, provides context to option templates, registers the dependency environment.

## Overlay and Sidebar Assets

- `static/src/core/builder_overlay/*` contains overlay rendering logic (`builder_overlay.js`), handles, overlay XML/CSS.
- `static/src/plugins/**/*` holds option-specific plugins (see the [Plugin Catalog](plugin-catalog.md)).
- `static/src/utils/**` offers helpers (`utils_css.js`, `grid_layout_utils.js`, `column_layout_utils.js`, `option_sequence.js`, `sync_cache.js`).
- `static/src/sidebar/*` groups OWL components for tabs and option cards.
- `static/src/snippets/*` hosts snippet service classes and dialogs.
- `tests/*` delivers JS tours ensuring builder actions remain tour-proof.
