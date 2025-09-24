# html_builder — Definitive Developer Handbook

> **Scope**: Single-source technical reference for `html_builder` (Website Editor) internals.  
> **Audience**: Odoo Website R&D contributors and reviewers.  
> **Status**: Living document – keep in sync with code.

---

## 1. High-Level Overview

### 1.1 Purpose and Positioning
- `html_builder` is the website visual editor shipped with Odoo. It sits on top of the generic `html_editor` engine and provides the snippet sidebar, contextual options, and website-specific plugins.
- The module turns the static website into an interactive editable surface by embedding the editor inside the website editor iframe and orchestrating snippets, options and builder actions.
- The builder is responsible for: loading snippet catalogs, applying style/layout changes, coordinating undo/redo, saving custom snippets, exposing integrations to tours/tests, and bridging to backend services (ORM, assets).

### 1.2 Integration with `website` and `html_editor`
- `website` provides the shell: iframe management, toolbar, theme assets, controllers. `html_builder` injects itself via `website.editor` actions.
- `html_editor` provides the OWL-based editing engine with plugin architecture, history, selection, and DOM mutation tracking. `html_builder` extends it via additional plugins declared in `static/src/core/core_plugins.js`.
- The builder reuses `html_editor` features (history, operation mutex, resource orchestration) while adding website-specific user interactions (snippets, overlay handles, grid layout helpers).

### 1.3 Why a dedicated module exists
- Website requires many high-level abstractions (snippets, option panels, builder actions) that would pollute the generic editor.
- `html_builder` defines a clear API to extend the website editor without having to touch the base `html_editor`.
- The module offers migration tooling from legacy web_editor snippet options to class-based builder options, facilitating forward compatibility.

---

## 2. Architecture

### 2.1 Runtime architecture

```text
+----------------------------------------------------------+
| Website Editor Shell (website/static/src/js/editor.js)   |
|  - loads iframe with page HTML                           |
|  - mounts sidebar component (html_builder.Builder)       |
+----------------------------+-----------------------------+
                             |
                             v
+----------------------------+-----------------------------+
| static/src/builder.js (OWL component)                    |
|  - instantiates html_editor.Editor                       |
|  - feeds Plugins/resources/config                        |
|  - exposes editor & event bus to sub-components          |
+----------------------------+-----------------------------+
                             |
                             v
+----------------------------+-----------------------------+
| html_editor.Editor (addons/html_editor/static/src)       |
|  - sorts plugin constructors                             |
|  - instantiates Plugin subclasses                        |
|  - aggregates resources & shared helpers                 |
+----------------------------+-----------------------------+
|  Core Plugins (static/src/core)                          |
|    BuilderActionsPlugin / BuilderOptionsPlugin ...       |
|  Snippet & option plugins (static/src/plugins)           |
|  Utilities (static/src/utils)                            |
+----------------------------------------------------------+
```

### 2.2 Data flow of an option interaction

```text
Sidebar option click
    |
    v
BuilderOptionsPlugin.computeContainers()
    |
    v
BuilderActionsPlugin.applyAction(actionId, spec)
    |
    v
Action dependencies resolved via BuilderAction.dependencies
    |
    v
OperationPlugin.next() -> HistoryPlugin.addStep()
    |
    v
DOM mutation, overlay refresh, snippet service updates
```

### 2.3 Layered view (client <-> backend)

```text
[User Browser]
    ↑            ↓   RPC / assets
[html_builder static assets] ----> [website controllers]
    ↑
[html_editor shared libs]
    ↑
[OWL / Webclient services]
```

- Client-side code handles interactions and DOM changes.
- Backend controllers (`ir.ui.view` RPCs) serve snippets and persist custom snippets.
- Assets defined in `__manifest__.py` deliver builder QWeb, JS, SCSS.

---

## 3. Core Concepts

### 3.1 BuilderAction (`static/src/core/builder_action.js`)
- Base class representing an atomic mutation applied to the edited DOM element.
- Key properties (set in constructor or overridden in `setup()`):
  - `preview`: enable live preview before commit (default `true` unless `reload` flag).
  - `reload`: mark action as requiring iframe reload.
  - `withLoadingEffect`, `loadOnClean`: fine-grained control around operation mutex.
- Override hooks:
  - `prepare(context)` (async preconditions), `getPriority(context)` (ordering), `apply(context)`, `getValue`, `isApplied`, `clean`, `load`.
- Actions receive:
  - `context.editingElement`, `context.value`, `context.params`, `context.isPreviewing`, `context.dependencyManager`, etc.
  - `this.dependencies`: resolved through `static dependencies`.
  - Helper methods: `this.getResource`, `this.dispatchTo`, `this.delegateTo`.

### 3.2 Plugin model (`@html_editor/plugin`)
- Plugins declare static metadata:
  - `id`: unique identifier.
  - `dependencies`: other plugin ids providing `shared` helpers.
  - `shared`: helper methods exposed through `editor.shared[id][name]`.
  - `resources`: entries merged into editor-wide registries (e.g., `builder_actions`, `clean_for_save_handlers`).
- Lifecycle:
  - `setup()` executed once when editor attaches. Use to register listeners, instantiate services, parse resources.
  - `destroy()` (optional) to cleanup listeners.

### 3.3 Resource registries & sequencing
- Each plugin can contribute to named resources (arrays).
- `withSequence(priority, payload)` wraps payloads to sort by numeric position (see `static/src/utils/option_sequence.js`).
- `resourceSequenceSymbol` (from `html_editor`) ensures deterministic execution order.
- Example resources: `builder_actions`, `builder_options`, `start_edition_handlers`, `clean_for_save_handlers`, `on_mobile_preview_clicked`.

### 3.4 Option containers & dependency manager
- `BuilderOptionsPlugin` computes option containers per selected DOM node.
- Each container contains:
  - `options`: array of option metadata (template, action, dependencies).
  - `headerMiddleButtons`, `containerTitle`, overlay metadata.
- `DependencyManager` (`static/src/core/dependency_manager.js`) stores runtime dependencies (option items toggling others). Options register dependencies via `useDependencyDefinition`.
- Option components use `useDependencies`, `useIsActiveItem`, `useGetItemValue` helpers from `static/src/core/utils.js` to react to dependencies.

### 3.5 Interactions
- Interactions are instances of `@web/public/interaction.Interaction`.
- Builder actions often pause/resume public interactions via `save_snippet_plugin.js` and `snippets/snippet_service.js` when duplicating/saving snippets.
- For dynamic front-end behaviors (e.g., animate text), builder exposes `getAnimateTextConfig` (see `static/src/builder.js`) to re-run interactions in preview.

### 3.6 History & Operation mutex
- `HistoryPlugin` (from `html_editor`) tracks DOM mutations and provides undo/redo stacks.
- `Operation` (`static/src/core/operation.js`) serializes action execution, enforces loading overlays, supports cancellation for previews.
- Builder actions typically run inside `operation.next()` via `BuilderActionsPlugin.applyAction`.

### 3.7 Services & environment
- Builder component sets sub-environment with `editor`, `editorBus`, `triggerDomUpdated`, `editColorCombination`.
- Snippet data comes from `html_builder.snippets` service (see `static/src/snippets/snippet_service.js`).
- OWL components consume environment via hooks (`useSubEnv`, `useService`, `useSnippets`).

---

## 4. Builder Action Lifecycle

### 4.1 Registration → execution pipeline

```text
QWeb/JS plugin defines class extending BuilderAction
    ↓
Plugin exposes it via resources.builder_actions ({ MyAction })
    ↓
BuilderActionsPlugin.setup():
    - iterates resources
    - instantiates MyAction with dependencies/services
    - freezes registry
    ↓
Option definition references action id (action: "myActionId")
    ↓
User triggers option UI
    ↓
BuilderOptionsPlugin → editor.shared.builderActions.applyAction("myActionId", spec)
    ↓
OperationPlugin.next() wraps apply()
    ↓
HistoryPlugin records mutations -> addStep()
    ↓
Undo/Redo stack updated; overlay, options, snippet panels notified
```

### 4.2 Detailed steps
1. **Definition**: create subclass of `BuilderAction` with override hooks; optionally declare `static dependencies`.
2. **Registration**: add to `resources.builder_actions` in a plugin (core or custom). Optionally register plugin in `registry.category("builder-plugins")`.
3. **Preparation** (`prepare`): executed before apply when defined. Ideal for async fetches.
4. **Load**: executed within `operation.next` `load` callback for heavy operations (e.g., fetching image info). Result stored as `loadResult`.
5. **Apply**: mutate DOM. Use `dependencyManager` to coordinate with other options.
6. **Clean**: revert effect in preview rollback or on `clean_for_save`.
7. **History**:
   - `OperationPlugin` ensures `history.addStep()` after successful apply.
   - Undo/Redo triggers `BuilderOptionsPlugin.restoreContainers` to re-sync UI.
8. **Previewing**:
   - When `preview` true, builder may call `apply` on pointer move; cancel path uses `operation.cancelPrevious`.
9. **Undo/Redo**:
   - Undo replays recorded mutations; `post_undo_handlers` restore option selection.
   - Redo similarly via `post_redo_handlers`.
10. **Save**: `clean_for_save_handlers` remove temporary classes/attributes before persisting HTML.

---

## 5. Integration Points

### 5.1 Snippet catalog & service (`static/src/snippets/snippet_service.js`)
- Loads snippet bundles via RPC `ir.ui.view.render_public_asset`.
- Preprocesses DOM via `registry.category("html_builder.snippetsPreprocessor")`.
- Provides API (`SnippetModel`) for retrieving snippet metadata, saving custom snippets, opening snippet dialog.

### 5.2 Website editor shell (`static/src/builder.js`)
- OWL component orchestrating tabs (Blocks/Style/Theme), hotkeys, mobile preview toggle.
- Instantiates `Editor` with config (plugins set to `CORE_PLUGINS`, extra resources, mobile detection).
- Bridges history state to UI (undo/redo buttons), updates option containers on DOM changes.

### 5.3 Backend endpoints
- `html_builder` relies on:
  - `ir.ui.view.render_public_asset` to fetch snippet markup.
  - `ir.ui.view.save_snippet`, `rename_snippet`, `delete_snippet` for custom snippet persistence.
- Assets defined in `static/src/builder.xml` and `__manifest__.py` add templates, SCSS, JS bundles.
- RPC context enriched with edition metadata (language, theme module, record info).

### 5.4 Collaboration with other modules
- Grid layout helpers integrate with `website_sale`, `website_event` plugins through additional option plugins registered in their own modules (they import base builder actions).
- Media plugins reuse `media_website_plugin.js` to integrate media dialog.
- `website_theme_install` extends theme tab via `getThemeTab`.

---

## 6. Key Classes & Files

Each entry lists path, purpose, public API, relationships, and usage notes.

### static/src/builder.js
- **Purpose**: main OWL component for sidebar UI and editor bootstrapping.
- **Public API**: props (`closeEditor`, `reloadEditor`, `snippetsName`, `Plugins`, `config`, `editableSelector`, ...); methods `undo()`, `redo()`, `onTabClick()`, `triggerDomUpdated()`, `updateInvisibleEls()`.
- **Relationships**: Instantiates `Editor` with `CORE_PLUGINS`, exposes `editor` via sub-env, communicates with `InvisibleElementsPanel`, `BlockTab`, `CustomizeTab`.
- **Usage**: Extend props (e.g., `slots.extraActions`) to add custom buttons; use `getThemeTab` for theme-specific tab.

### static/src/core/core_plugins.js
- **Purpose**: defines plugin list to boot the editor (merging `html_editor` main plugins with builder-specific ones).
- **Public API**: exports `MAIN_PLUGINS`, `CORE_PLUGINS` arrays.
- **Relationships**: consumed by `builder.js`; other modules can prepend/append plugins by altering `Plugins` prop.

### static/src/core/core_builder_action_plugin.js
- **Purpose**: supplies foundational builder actions (`ClassAction`, `AttributeAction`, `StyleAction`, `DataAttributeAction`, `SetClassRangeAction`) and registers system classes like `o_we_force_no_transition`.
- **Public API**: actions exposed via `resources.builder_actions`.
- **Relationships**: Base actions reused by most option templates (class toggles, inline styles, dataset updates).

### static/src/core/builder_action.js
- **Purpose**: base class for builder actions (see §3.1).
- **Public API**: lifecycle hooks (`setup`, `prepare`, `apply`, `clean`, etc.), `has(method)` inspector.
- **Relationships**: Instantiated by `BuilderActionsPlugin` with dependencies and services.

### static/src/core/builder_actions_plugin.js
- **Purpose**: aggregates action classes registered via `builder_actions` resource; exposes shared helpers.
- **Public API**: `getAction(actionId)`, `applyAction(actionId, spec)`; shared methods reachable through `editor.shared.builderActions`.
- **Relationships**: Depends on `operation` and `history`; consumed by option components and other plugins (e.g., composite actions).

### static/src/core/composite_action_plugin.js
- **Purpose**: provides `CompositeAction` and `ReloadCompositeAction` to chain multiple builder actions in a single option.
- **Public API**: override of `prepare`, `apply`, `clean`; `loadOnClean = true` behaviour.
- **Relationships**: Depends on `builderActions`; used by complex options like background configuration.

### static/src/core/builder_options_plugin.js
- **Purpose**: computes option containers for selected elements, manages option lifecycle, coordinates overlay, undo/redo integration.
- **Public API** (shared): `computeContainers`, `getContainers`, `updateContainers`, `deactivateContainers`, `getTarget`, `getPageContainers`, `getRemoveDisabledReason`, `getCloneDisabledReason`, `getReloadSelector`, `setNextTarget`.
- **Relationships**: Depends on `selection`, `overlay`, `operation`, `history`, `builderOverlay`, `overlayButtons`. Interacts with option components via event bus (`change_current_options_containers_listeners`).
- **Usage**: Extend via resources (`builder_options`, `elements_to_options_title_components`, `builder_header_middle_buttons`, `container_title`, `remove_disabled_reason_providers`, `clone_disabled_reason_providers`, `patch_builder_options`).

### static/src/core/builder_component_plugin.js
- **Purpose**: exposes reusable OWL components (inputs, dropdowns, color pickers, lists) to option templates.
- **Public API**: shared helper `getComponents()` returning component map.
- **Relationships**: Option templates retrieve components via `env.Components`; custom modules can import components or register new ones through `builder_components` resource.

### static/src/core/builder_content_editable_plugin.js
- **Purpose**: centralizes contenteditable flags for builder context.
- **Public API**: resources `force_not_editable_selector`, `force_editable_selector`, `filter_contenteditable_handlers`, `contenteditable_to_remove_selector`.
- **Relationships**: Ensures only intended areas remain editable; cooperates with `SetupEditorPlugin` and `DisableSnippetsPlugin`.

### static/src/core/dependency_manager.js
- **Purpose**: lightweight reactive store for option dependencies.
- **Public API**: `add(id, value, ignored)`, `get(id)`, `removeByValue`, `trigger("dependency-updated")`.
- **Relationships**: Exposed via option component env; used with hooks from `static/src/core/utils.js`.

### static/src/core/utils.js
- **Purpose**: provides OWL hooks/helpers for builder components (`useDomState`, `useActionInfo`, `useBuilderComponent`, `useDependencyDefinition`, `useDependencies`, `useGetItemValue`, `useIsActiveItem`).
- **Relationships**: Required by option templates to bind builder actions to OWL components.

### static/src/core/operation.js` & `static/src/core/operation_plugin.js`
- **Purpose**: wraps asynchronous operations with mutex, loading overlay, cancellation support.
- **Public API**: `Operation.next(fn, params)`, shared `editor.shared.operation.next`, `useOperation()` hook.
- **Relationships**: `BuilderActionsPlugin.applyAction` and option buttons rely on these to sequence actions.

### static/src/core/history plugin interplay
- Provided by `html_editor` but tightly integrated: builder uses history hooks (`makeSavePoint`, `getIsCurrentStepModified`, `post_undo_handlers`, `post_redo_handlers`) to resync UI and overlay.

### static/src/core/builder_overlay/builder_overlay_plugin.js
- **Purpose**: manages overlay boxes and resize handles aligned with option selection.
- **Public API** (shared): `showOverlayPreview`, `hideOverlayPreview`, `refreshOverlays`.
- **Relationships**: Depends on `localOverlay`, `history`, `operation`; consumes `has_overlay_options` resource from options plugin.

### static/src/core/grid_layout/grid_layout_plugin.js
- **Purpose**: enables grid layout editing (background grid, drag/drop of grid items, overlay controls).
- **Public API**: resources for overlay buttons, drag/drop hooks, history filters (`savable_mutation_record_predicates`).
- **Relationships**: Works with `BuilderOptionsPlugin` to toggle grid mode (`LayoutOption`); uses utilities from `static/src/utils/grid_layout_utils.js`.

### static/src/core/dropzone_selector_plugin.js
- **Purpose**: declares dropzone selectors/rules controlling where snippets can be inserted.
- **Public API**: resources `dropzone_selector`, `so_snippet_addition_selector`, `so_content_addition_selector`.
- **Relationships**: Consumed by `drop_zone_plugin.js` and `DisableSnippetsPlugin` to compute snippet availability.

### static/src/core/disable_snippets_plugin.js
- **Purpose**: disables snippets that cannot be dropped into current context and keeps snippet palette in sync.
- **Public API**: shared helper `disableUndroppableSnippets`; resources triggered on clone/remove/undo/redo/mobile preview.
- **Relationships**: Depends on `setup_editor_plugin`, `dropzone`, `dropzone_selector`; manipulates `SnippetModel` categories.

### static/src/core/media_website_plugin.js
- **Purpose**: adapts media handling to website editor (double-click to replace, drop video flow).
- **Public API**: shared `replaceMedia`; resources hooking into snippet drop, overlay.
- **Relationships**: Depends on `media`, `selection`, `builderOptions`; uses tooltip service for UX cues.

### static/src/core/cached_model_plugin.js
- **Purpose**: caches ORM reads/searchRead and wraps editable relation fields via `ModelEdit`.
- **Public API**: shared helpers `ormRead`, `ormSearchRead`, `useModelEdit`; `savePendingRecords` resource invoked before save.
- **Relationships**: Ensures repeated ORM calls (Many2Many pickers etc.) stay fast; flushes pending relation changes on save.

### static/src/core/field_change_replication_plugin.js
- **Purpose**: copies content changes across duplicate website fields (language variants, dynamic components).
- **Public API**: resources `handleNewRecords`, `normalize_handlers`.
- **Relationships**: Works with `dom` plugin from `html_editor` to remove system attributes; ensures translation duplicates stay in sync.

### static/src/core/save_snippet_plugin.js
- **Purpose**: adds “Save block” button atop option container and coordinates snippet save pipeline.
- **Public API**: resource `get_options_container_top_buttons`; method `wrapWithBeforeAfterSaveHandlers`.
- **Relationships**: Leverages `clean_for_save_handlers`, snippet model service, and notifications.

### static/src/core/save_plugin.js
- **Purpose**: orchestrates save flow for website records; groups dirty elements, calls backend, resets history.
- **Public API** (shared): `save`, `saveView`, `ignoreDirty`; resources include `savable_selectors`, `before_save_handlers`, `clean_for_save_handlers`, `save_element_handlers`, `save_handlers`, `get_dirty_els`.
- **Relationships**: Coordinates with `history` (resets after save) and other plugins contributing to save handlers.

### static/src/core/setup_editor_plugin.js
- **Purpose**: initializes editable areas, applies `o_editable` classes, injects helper messages.
- **Public API**: shared `getEditableAreas`; resources `clean_for_save_handlers`, `closest_savable_providers`, `o_editable_selectors`.
- **Relationships**: Downstream plugins (dropzones, disable snippets) rely on `getEditableAreas`; clean handler strips editor-only markers before save.

### static/src/core/color_plugin.js
- **Purpose**: extends base color picker to surface website palette and used colors.
- **Public API**: overrides `getUsedCustomColors`, `getPropsForColorSelector`.
- **Relationships**: Consumed by Theme tab and color-focused options.

### static/src/core/anchor/anchor_plugin.js
- **Purpose**: adds anchor creation button to overlay, generates unique anchors, integrates clipboard copy.
- **Public API**: shared `createOrEditAnchorLink`; resources hooking into clone and overlay buttons.
- **Relationships**: Uses notification & dialog services, history for undo.

### static/src/core/move_plugin.js`, `drag_and_drop_plugin.js`, `drop_zone_plugin.js`
- **Purpose**: support drag-and-drop snippet reordering and overlay handles; manage dropzone highlighting.
- **Relationships**: Interact with `BuilderOverlay`, `DropZoneSelectorPlugin`, `DisableSnippetsPlugin`.

### static/src/core/remove_plugin.js`, `clone_plugin.js`
- **Purpose**: implement remove/clone overlay buttons; update history and snippet selection accordingly.
- **Relationships**: Use `BuilderOptionsPlugin.setNextTarget`, `history` previewing, `public.interactions` to pause/resume dynamic behaviours.

### static/src/core/customize_tab_plugin.js
- **Purpose**: mounts style tab components, provides context to option templates, registers dependency environment.

### static/src/core/operation.js`*, `static/src/core/operation_plugin.js`
- Covered above (§3.6); key for sequence integrity.

### static/src/core/builder_overlay/`*
- Contains overlay rendering logic (`builder_overlay.js`), handles, overlay XML/CSS.

### static/src/plugins/**/*
- Option-specific plugins (see §7).

### static/src/utils/**
- `utils_css.js`: CSS helpers (normalize colors, backgrounds, parse box-shadow).
- `grid_layout_utils.js`, `column_layout_utils.js`: layout computations.
- `option_sequence.js`: defines ordering constants.
- `utils.js`: DOM helpers (visibility, selectors).
- `sync_cache.js`: caches to sync state across actions.

### static/src/sidebar/*
- OWL components for tabs and option cards.

### static/src/snippets/*
- Snippet service classes and dialogs.

### tests/*
- JS tours ensuring builder actions remain tour-proof. Use as reference when adding new options.

---

## 7. Plugin Catalog

This section summarizes core plugin types and illustrates how to extend them.

### 7.1 BuilderActionsPlugin
- **Configuration**: No resources; it consumes `builder_actions`.
- **Extension points**: register actions via any plugin contributing to `resources.builder_actions`; access via `editor.shared.builderActions`.
- **Example**: registering a custom action and invoking it.

```js
// my_module/static/src/plugins/spacing_plugin.js
import { Plugin } from "@html_editor/plugin";
import { BuilderAction } from "@html_builder/core/builder_action";
import { registry } from "@web/core/registry";

class ToggleSpacingAction extends BuilderAction {
    static id = "toggleSpacing";
    apply({ editingElement, value }) {
        editingElement.classList.toggle(value);
    }
    isApplied({ editingElement, value }) {
        return editingElement.classList.contains(value);
    }
    clean({ editingElement, value }) {
        editingElement.classList.remove(value);
    }
}

class SpacingPlugin extends Plugin {
    static id = "spacingPlugin";
    resources = {
        builder_actions: { ToggleSpacingAction },
    };
}

registry.category("builder-plugins").add(SpacingPlugin.id, SpacingPlugin);
```

Option usage:

```xml
<t t-name="my_module.SpacingOption" owl="1">
    <BuilderCheckbox label="Compact"
                     action="toggleSpacing"
                     actionValue="o_spacing_compact"/>
</t>
```

### 7.2 BuilderOptionsPlugin
- **Responsibility**: Manage option panels & container stack.
- **Extending options**:
  - Add to `builder_options` resource: object with `template`, `selector`, `name`, optional `exclude`, `editableOnly`, `dependencies`, `reloadTarget`, `cleanForSave`.
  - Use `withSequence(POSITION, descriptor)` to place option (see `@html_builder/utils/option_sequence.js`).
- **Example**:

```js
import { Plugin } from "@html_editor/plugin";
import { registry } from "@web/core/registry";
import { withSequence } from "@html_editor/utils/resource";
import { DEFAULT } from "@html_builder/utils/option_sequence";

class SpacingOptionPlugin extends Plugin {
    static id = "spacingOption";
    resources = {
        builder_options: [
            withSequence(DEFAULT, {
                template: "my_module.SpacingOption",
                selector: ".s_text_block",
                name: "spacingOption",
            }),
        ],
    };
}
registry.category("builder-plugins").add(SpacingOptionPlugin.id, SpacingOptionPlugin);
```

### 7.3 ShadowOptionPlugin (`static/src/plugins/shadow_option_plugin.js`)
- **Purpose**: Manage box-shadow presets.
- **Configuration**: Registers builder actions `setShadowMode`, `setShadow`; utilities to normalize CSS.
- **Extension points**: patch defaults via `resources.patch_builder_options`; add custom templates referencing same action ids.
- **Excerpt**:

```js
import { BuilderAction } from "@html_builder/core/builder_action";
import { Plugin } from "@html_editor/plugin";
import { registry } from "@web/core/registry";

class SetShadowModeAction extends BuilderAction { /* ... */ }
class SetShadowAction extends BuilderAction { /* ... */ }

class ShadowOptionPlugin extends Plugin {
    static id = "shadowOption";
    resources = {
        builder_actions: { SetShadowModeAction, SetShadowAction },
    };
}
registry.category("builder-plugins").add(ShadowOptionPlugin.id, ShadowOptionPlugin);
```

### 7.4 BackgroundPositionOptionPlugin (`static/src/plugins/background_option/background_position_option_plugin.js`)
- **Purpose**: Provide UI to adjust background positioning/size with visual overlay.
- **Configuration**: Depends on `overlay`, `overlayButtons`; actions `backgroundType`, `setBackgroundSize`, `backgroundPositionOverlay` (launches overlay component with `services.overlay.add`).
- **Usage**: Option template renders `BuilderRange`, `BuilderButton` bound to these actions.

### 7.5 LayoutColumnOptionPlugin (`static/src/plugins/layout_column_option_plugin.js`)
- **Purpose**: Adjust column layout (Bootstrap grid classes, column count).
- **Configuration**: Adds option descriptors with `LayoutColumnOption` template; actions rely on `ClassAction` composites.
- **Extension**: Introduce extra breakpoints by patching `builder_options` or providing new templates.

### 7.6 VerticalAlignmentOptionPlugin (`static/src/plugins/vertical_alignment_option_plugin.js`)
- **Purpose**: Control vertical alignment classes on flex containers.
- **Configuration**: Option toggles `align-items-*` classes via `ClassAction`.

### 7.7 Many2OneOptionPlugin (`static/src/plugins/many2one_option_plugin.js`)
- **Purpose**: Connect option UI to backend record selection.
- **Configuration**: Depends on `orm`, `dialog`, `cachedModel`; registers `BuilderMany2One` component and builder actions to set dataset fields.
- **Usage**: Add descriptor with template `html_builder.Many2OneOption` targeting snippet elements with `data-oe-model` attributes.

### 7.8 WidthOptionPlugin (`static/src/plugins/width_option_plugin.js`)
- **Purpose**: Toggle container width presets.
- **Configuration**: Registers option at sequence `WIDTH` with template `html_builder.WidthOption` targeting `.s_alert`, `.s_blockquote`, `.s_text_highlight`.
- **Extension**: Duplicate descriptor for custom selectors or adjust sequence for ordering.

### 7.9 AnchorPlugin (`static/src/core/anchor/anchor_plugin.js`)
- **Purpose**: Adds overlay button to create/copy anchors.
- **Configuration**: Provides top button via `get_options_container_top_buttons`, uses dialog & notification services.

### 7.10 GridLayoutPlugin (`static/src/core/grid_layout/grid_layout_plugin.js`)
- **Purpose**: Introduces grid-mode overlay controls, drag/drop hooks, background grids.
- **Configuration**: Provides overlay buttons and drag/drop event handlers; manipulates `o_grid_mode` classes.

### 7.11 MediaWebsitePlugin (`static/src/core/media_website_plugin.js`)
- **Purpose**: Integrates media dialog with website builder.
- **Configuration**: Adds double-click listeners, tooltip hints, snippet-drop hooks; exposes shared `replaceMedia` helper.

### 7.12 Additional notable plugins
- **TextAlignmentOptionPlugin**: toggles text alignment classes.
- **BackgroundShapeOptionPlugin**: selects decorative shapes; loads definitions from `background_shapes_definition.js`.
- **Image/MQ field plugins**: integrate binary and Many2One fields with website UI (`image_field_plugin.js`, `many2one_option_plugin.js`, `monetary_field_plugin.js`).
- **Shadow/background option suites**: provide custom overlays (`background_position_overlay.js`) and hooks.

Refer to respective files for exact action IDs and parameter structure.

---

## 8. Options Migration (Legacy → Class-based)

### 8.1 Legacy approach (pre html_builder)

```js
/** Legacy web_editor option */
odoo.define("my_module.legacy_option", function (require) {
    "use strict";
    const options = require("web_editor.snippets.options");

    options.registry.MyLegacyOption = options.Class.extend({
        start() {
            this.$target.toggleClass("o_old_class", this.$target.data("old"));
        },
        onBuilt() {
            this._super.apply(this, arguments);
            this.$target.addClass("o_old_class");
        },
    });
});
```

- HTML used `data-option="my_legacy_option"` attributes; logic lived in a single class mixing UI and DOM mutations.

### 8.2 New class-based pattern

**Step 1 – Define action**

```js
// my_module/static/src/plugins/new_option.js
import { BuilderAction } from "@html_builder/core/builder_action";
import { Plugin } from "@html_editor/plugin";
import { withSequence } from "@html_editor/utils/resource";
import { registry } from "@web/core/registry";
import { DEFAULT } from "@html_builder/utils/option_sequence";

class ToggleOldClassAction extends BuilderAction {
    static id = "toggleOldClass";
    apply({ editingElement, value }) {
        editingElement.classList.toggle("o_old_class", !!value);
    }
    getValue({ editingElement }) {
        return editingElement.classList.contains("o_old_class");
    }
}

class MyOptionPlugin extends Plugin {
    static id = "myOption";
    resources = {
        builder_actions: { ToggleOldClassAction },
        builder_options: [
            withSequence(DEFAULT, {
                template: "my_module.ToggleOldClassOption",
                selector: ".s_my_snippet",
                name: "toggleOldClassOption",
            }),
        ],
    };
}

registry.category("builder-plugins").add(MyOptionPlugin.id, MyOptionPlugin);
```

**Step 2 – Create option template**

```xml
<!-- my_module/static/src/xml/my_option.xml -->
<t t-name="my_module.ToggleOldClassOption" owl="1">
    <BuilderCheckbox label="Highlight"
                     action="toggleOldClass"
                     actionValue="1"
                     t-att-checked="env.getValue('toggleOldClass')"/>
</t>
```

**Step 3 – Update snippet template**
- Remove legacy `data-option` attributes.
- Ensure snippet root matches selector `.s_my_snippet`.
- Include new assets in `manifest` (JS + XML).

**Step 4 – Clean migration**
- Optionally register `patch_builder_options` to morph legacy option names.
- Provide `cleanForSave` to strip transitional classes if needed.

### 8.3 Migration checklist
1. Remove legacy `web_editor` option JS.
2. Register new plugin in asset bundle after `html_builder.assets_wysiwyg`.
3. Ensure action id uniqueness.
4. Update tours/tests to cover new option.
5. Document change in module README.

---

## 9. Usage Examples

### 9.1 Creating a custom BuilderAction

```js
// docs/dev/html_builder/examples/custom_builder_action.js
import { BuilderAction } from "@html_builder/core/builder_action";
import { Plugin } from "@html_editor/plugin";
import { registry } from "@web/core/registry";
import { withSequence } from "@html_editor/utils/resource";
import { DEFAULT } from "@html_builder/utils/option_sequence";

/** Add/Remove a badge label on cards */
export class ToggleBadgeAction extends BuilderAction {
    static id = "toggleBadge";
    setup() {
        this.preview = true; // preview while hovering checkbox
    }
    isApplied({ editingElement }) {
        return editingElement.classList.contains("o_card_badge");
    }
    apply({ editingElement, value }) {
        editingElement.classList.toggle("o_card_badge", !!value);
    }
    clean({ editingElement }) {
        editingElement.classList.remove("o_card_badge");
    }
}

class ToggleBadgePlugin extends Plugin {
    static id = "toggleBadgeOption";
    resources = {
        builder_actions: { ToggleBadgeAction },
        builder_options: [
            withSequence(DEFAULT, {
                template: "my_module.ToggleBadgeOption",
                selector: ".s_card",
                name: "toggleBadgeOption",
            }),
        ],
    };
}

registry.category("builder-plugins").add(ToggleBadgePlugin.id, ToggleBadgePlugin);
```

Option template:

```xml
<t t-name="my_module.ToggleBadgeOption" owl="1">
    <BuilderCheckbox label="Badge"
                     action="toggleBadge"
                     actionValue="1"/>
</t>
```

### 9.2 Adding a new OptionPlugin

```js
// docs/dev/html_builder/examples/custom_option_plugin.js
import { Plugin } from "@html_editor/plugin";
import { registry } from "@web/core/registry";
import { withSequence } from "@html_editor/utils/resource";
import { AFTER_HTML_BUILDER } from "@html_builder/utils/option_sequence";

class CardThemeOptionPlugin extends Plugin {
    static id = "cardThemeOption";
    resources = {
        builder_options: [
            withSequence(AFTER_HTML_BUILDER, {
                template: "my_module.CardThemeOption",
                selector: ".s_card",
                name: "cardThemeOption",
            }),
        ],
    };
}

registry.category("builder-plugins").add(CardThemeOptionPlugin.id, CardThemeOptionPlugin);
```

Template:

```xml
<t t-name="my_module.CardThemeOption" owl="1">
    <BuilderSelect label="Card Theme"
                   action="classAction"
                   actionParam="{&quot;mainParam&quot;: &quot;o_card_theme o_card_theme_alt&quot;}"
                   t-props-options="[
                       { value: '', label: 'Default' },
                       { value: 'o_card_theme', label: 'Soft' },
                       { value: 'o_card_theme_alt', label: 'Accent' },
                   ]"/>
</t>
```

### 9.3 Using interactions for dynamic behavior

```js
// docs/dev/html_builder/examples/interaction_example.js
import { Interaction } from "@web/public/interaction";
import { registry } from "@web/core/registry";

export class CounterInteraction extends Interaction {
    static selector = ".s_counter";

    setup() {
        this.dynamicContent = {
            ".js-counter-value": { "t-out": () => this.el.dataset.counter || 0 },
        };
    }

    start() {
        this.updateContent();
    }
}

registry.category("public.interactions").add("my_module.counter", CounterInteraction);
```

Builder action updating counter:

```js
import { BuilderAction } from "@html_builder/core/builder_action";
import { Plugin } from "@html_editor/plugin";
import { registry } from "@web/core/registry";

class IncrementCounterAction extends BuilderAction {
    static id = "incrementCounter";
    apply({ editingElement }) {
        const current = Number(editingElement.dataset.counter || "0");
        editingElement.dataset.counter = current + 1;
        this.services["public.interactions"].stopInteractions(editingElement);
        this.services["public.interactions"].startInteractions(editingElement);
    }
}

class CounterOptionPlugin extends Plugin {
    static id = "counterOption";
    resources = {
        builder_actions: { IncrementCounterAction },
        builder_options: [
            {
                template: "my_module.CounterOption",
                selector: ".s_counter",
                name: "counterOption",
            },
        ],
    };
}

registry.category("builder-plugins").add(CounterOptionPlugin.id, CounterOptionPlugin);
```

### 9.4 Debugging tips
1. **Grab the builder component**
   ```js
   const sidebarEl = document.querySelector(".o-snippets-menu");
   const builder = sidebarEl.__owl__.component;          // OWL component instance
   const editor = builder.editor;                        // html_editor.Editor
   ```
2. **Inspect current option containers**
   ```js
   editor.shared.builderOptions.getContainers();
   ```
3. **List registered actions**
   ```js
   Object.keys(editor.shared.builderActions.actions); // map of instantiated actions
   editor.shared.builderActions.getAction("yourActionId");
   ```
4. **Check history stack**
   ```js
   editor.shared.history.getHistorySteps().map(step => ({
       id: step.id,
       type: step.type,
       mutations: step.mutations.length,
   }));
   ```
5. **Trigger clean-for-save flow**
   ```js
   editor.resources.clean_for_save_handlers.forEach(cb => cb({ root: editor.editable }));
   ```
6. **Snippet service debugging**
   ```js
   const snippetsService = odoo.__DEBUG__.services["html_builder.snippets"];
   const snippetModel = snippetsService.getSnippetModel("website.snippets");
   console.table(snippetModel.snippetsByCategory.snippet_structure);
   ```

---

## 10. Advanced Topics

### 10.1 Resource loading & sequencing
- Use `withSequence(position, payload)` to control option order (see `utils/option_sequence.js` constants such as `DEFAULT`, `WIDTH`, `LAYOUT_COLUMN`, `ANIMATE`).
- Heavy actions should run asynchronous preparation inside `BuilderAction.load`. Combine with `Operation.next`'s `load` parameter for concurrency-safe fetches.
- `withSequence` also applies to lower panel entries (`resources.lower_panel_entries`), overlay hooks, and builder header buttons.

### 10.2 Undo/Redo internals
- `HistoryPlugin` records DOM mutations and selection state per step.
- `BuilderOptionsPlugin.onWillAddStep` saves current target; `onStepAdded`, `restoreContainers` re-select correct element after undo/redo.
- Preview actions register via `history.makePreviewableOperation`. To make previews cancelable set `BuilderAction.preview = true` and supply `cancelPrevious` in `operation.next`.

### 10.3 Making options tour/test-proof
- Avoid relying on transient DOM order; use selectors anchored on snippet root classes (`.s_my_snippet`).
- For async options, resolve promises before returning from `apply` to ensure history step finishes before tours continue.
- Provide stable attributes (`data-name`, `data-testid`) in templates for web tours.
- When manipulating interactions or overlays, always call `history.addStep()` once per logical change to keep undo consistent.
- Use `services.tour?.register_condition` if your option requires asynchronous readiness.

### 10.4 Resource loading order pitfalls
- `Builder` component wraps `on_mobile_preview_clicked` handlers with `withSequence(20, ...)`. Lower numbers execute first.
- To override default option templates, use `resources.patch_builder_options` with `method: "replace"`; ensure patch plugin loads after original.

### 10.5 Invisible elements & preview
- `builder.js` maintains `state.currentOptionsContainers`. Invisible elements panel uses `getInvisibleSelector` to list `.o_snippet_invisible` and breakpoint-specific invisibility classes.
- When writing actions that change visibility, call `builder.editorBus.trigger("UPDATE_EDITING_ELEMENT")` or rely on `BuilderOptionsPlugin.updateContainers` to refresh.

---

## 11. FAQ / Troubleshooting

- **Q: My action isn't executed when clicking the option.**
  - Ensure the option descriptor `selector` matches the DOM element (`editor.shared.builderOptions.computeContainers(el)`).
  - Verify the action id matches the class `static id`.
  - Confirm the plugin is included in asset bundle (after `html_builder.assets_wysiwyg`).

- **Q: Action throws "Unknown builder action id".**
  - Plugin providing the action must load before option triggers. Check asset ordering (`depends` in manifest).
  - Avoid duplicate ids—`BuilderActionsPlugin.setup` throws on duplicates.

- **Q: Undo/Redo leaves option panel empty.**
  - Actions should not detach the editing element without reinstating containers. Call `editor.shared.builderOptions.setNextTarget(newEl)` during apply if selection moves.
  - Ensure `clean` reinstates attributes/classes needed by selectors.

- **Q: DOM element removed before action commit.**
  - Wrap asynchronous operations in `Operation.next` with `shouldInterceptClick` or guard with `editingElement.isConnected`.
  - Use `dependencyManager` to re-attach to parent fallback.

- **Q: Runbot tours flake when clicking options.**
  - Avoid animation delays; set `BuilderAction.withLoadingEffect = false` for instant options.
  - Provide deterministic overlays (await overlay removal before continuing).
  - Add `await editor.shared.history.makeSnapshotStep()` in tests to wait for history flush.

- **Q: Debugging "action not applied" issues.**
  - Enable assets debug (`?debug=assets`) to load source maps.
  - Inspect action instance: `editor.shared.builderActions.getAction("yourId")` to inspect `preview`, `reload`, `dependencies`.
  - Check `isApplied` return; option may disable itself if `isApplied` yields `true`.

- **Q: How to patch default option without replacing template.**
  - Use `resources.patch_builder_options` entry `{ target_name, target_element, method: "replace", value }`.
  - Or supply `resources.builder_header_middle_buttons` to add overlay buttons without replacing template.

- **Q: Overlay handles missing on custom snippet.**
  - Ensure snippet root matches `BuilderOverlayPlugin` selectors (`sizingX`, `sizingY`, `sizingGrid`).
  - If custom element should expose overlay, register `has_overlay_options` resource returning `true` for element.

- **Q: Snippet saving keeps transient classes.**
  - Add `cleanForSave` handler to option descriptor to remove classes/attributes before snapshot save.

---

## 12. Reference Diagrams

### 12.1 Builder action lifecycle

```text
             +---------------------------+
             | Plugin setup (resources)  |
             +------------+--------------+
                          |
                          v
+-------------------------+-------------------------+
| BuilderActionsPlugin.setup()                      |
| - instantiate action classes                      |
| - bind dependencies, services                     |
+-------------------------+-------------------------+
                          |
                          v
+-------------------------+-------------------------+
| Option UI event (CustomizeTab)                    |
| - compute containers                              |
| - call editor.shared.builderActions.applyAction() |
+-------------------------+-------------------------+
                          |
                          v
+-------------------------+-------------------------+
| Operation.next()                                  |
| - optional load()                                 |
| - apply()                                         |
| - history.addStep()                               |
+-------------------------+-------------------------+
                          |
              +-----------+-----------+
     undo --> | History undo/redo     | --> redo
              +-----------+-----------+
                          |
                          v
             +------------+-------------+
             | BuilderOptionsPlugin     |
             | - restoreContainers()    |
             | - dispatch UI updates    |
             +--------------------------+
```

### 12.2 Snippet load & save

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

---

## 13. Appendices

### 13.1 Useful selectors & constants
- `BuilderOptionsPlugin.notActivableElementsSelector`: skip overlay updates when clicking UI chromes.
- `utils/option_sequence.js`: `DEFAULT`, `WIDTH`, `LAYOUT_COLUMN`, `ANIMATE`, `BLOCK_ALIGN`, etc.
- `builder.js#getInvisibleSelector`: `.o_snippet_invisible`, `.o_snippet_mobile_invisible`, `.o_snippet_desktop_invisible`.

### 13.2 Services overview
- `html_builder.snippets`: returns `getSnippetModel`.
- `public.interactions`: control website interactions (stop/start) for previews and cloning.
- `orm`, `ui`, `notification`, `dialog`, `popover`: inherited from webclient; accessible via `useService` in option components.

### 13.3 Testing checklist
- Run website tours targeting new options (base tours in `tests/` show patterns).
- Add QUnit tests if feasible, reusing `website_tour_utils` for interactions.
- Validate undo/redo by programmatically calling `editor.shared.history.undo()` / `redo()` in tests and asserting DOM state.

---

This handbook should equip you to extend, debug, and review any change touching `html_builder`. Contribute updates whenever a new plugin or subsystem is introduced.
