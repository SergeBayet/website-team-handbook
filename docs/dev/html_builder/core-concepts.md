# Core Concepts

## BuilderAction (`static/src/core/builder_action.js`)

- Base class representing an atomic mutation applied to the edited DOM element.
- Key properties (set in constructor or overridden in `setup()`):
  - `preview`: enable live preview before commit (default `true` unless `reload` flag).
  - `reload`: mark action as requiring iframe reload.
  - `withLoadingEffect`, `loadOnClean`: fine-grained control around the operation mutex.
- Override hooks:
  - `prepare(context)` (async preconditions), `getPriority(context)` (ordering), `apply(context)`, `getValue`, `isApplied`, `clean`, `load`.
- Actions receive:
  - `context.editingElement`, `context.value`, `context.params`, `context.isPreviewing`, `context.dependencyManager`, etc.
  - `this.dependencies`: resolved through `static dependencies`.
  - Helper methods: `this.getResource`, `this.dispatchTo`, `this.delegateTo`.

## Plugin Model (`@html_editor/plugin`)

- Plugins declare static metadata:
  - `id`: unique identifier.
  - `dependencies`: other plugin ids providing `shared` helpers.
  - `shared`: helper methods exposed through `editor.shared[id][name]`.
  - `resources`: entries merged into editor-wide registries (e.g., `builder_actions`, `clean_for_save_handlers`).
- Lifecycle:
  - `setup()` executed once when the editor attaches. Use it to register listeners, instantiate services, and parse resources.
  - `destroy()` (optional) to cleanup listeners.

## Resource Registries and Sequencing

- Each plugin can contribute to named resources (arrays).
- `withSequence(priority, payload)` wraps payloads to sort by numeric position (see `static/src/utils/option_sequence.js`).
- `resourceSequenceSymbol` (from `html_editor`) ensures deterministic execution order.
- Example resources: `builder_actions`, `builder_options`, `start_edition_handlers`, `clean_for_save_handlers`, `on_mobile_preview_clicked`.

## Option Containers and Dependency Manager

- `BuilderOptionsPlugin` computes option containers per selected DOM node.
- Each container contains:
  - `options`: array of option metadata (template, action, dependencies).
  - `headerMiddleButtons`, `containerTitle`, overlay metadata.
- `DependencyManager` (`static/src/core/dependency_manager.js`) stores runtime dependencies (option items toggling others). Options register dependencies via `useDependencyDefinition`.
- Option components use `useDependencies`, `useIsActiveItem`, `useGetItemValue` helpers from `static/src/core/utils.js` to react to dependencies.

## Interactions

- Interactions are instances of `@web/public/interaction.Interaction`.
- Builder actions often pause/resume public interactions via `save_snippet_plugin.js` and `snippets/snippet_service.js` when duplicating or saving snippets.
- For dynamic front-end behaviours (e.g., animate text), the builder exposes `getAnimateTextConfig` (see `static/src/builder.js`) to re-run interactions in preview.

## History and Operation Mutex

- `HistoryPlugin` (from `html_editor`) tracks DOM mutations and provides undo/redo stacks.
- `Operation` (`static/src/core/operation.js`) serializes action execution, enforces loading overlays, and supports cancellation for previews.
- Builder actions typically run inside `operation.next()` via `BuilderActionsPlugin.applyAction`.

## Services and Environment

- The Builder component sets a sub-environment with `editor`, `editorBus`, `triggerDomUpdated`, `editColorCombination`.
- Snippet data comes from the `html_builder.snippets` service (see `static/src/snippets/snippet_service.js`).
- OWL components consume the environment via hooks (`useSubEnv`, `useService`, `useSnippets`).
