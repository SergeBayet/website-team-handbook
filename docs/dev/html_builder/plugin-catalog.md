# Plugin Catalog

This section summarizes core plugin types and illustrates how to extend them.

## BuilderActionsPlugin

- **Configuration**: consumes `builder_actions` resources provided by other plugins.
- **Extension Points**: register actions via any plugin contributing to `resources.builder_actions`; access them via `editor.shared.builderActions`.
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

## BuilderOptionsPlugin

- **Configuration**: contributes option descriptors to the `builder_options` resource.
- **Extension Points**: add option templates, override container metadata, or patch existing options.
- **Example**: see [Examples](examples.md#adding-a-new-optionplugin).

## CompositeActionPlugin

- Enables combining multiple builder actions. Useful for complex options like background configuration.

## GridLayoutPlugin

- Introduces grid-mode overlay controls, drag/drop hooks, and background grids.

## MediaWebsitePlugin

- Integrates the media dialog with the website builder, wiring double-click listeners, tooltip hints, and snippet-drop hooks.

## Additional Notable Plugins

- **TextAlignmentOptionPlugin**: toggles text alignment classes.
- **BackgroundShapeOptionPlugin**: selects decorative shapes; loads definitions from `background_shapes_definition.js`.
- **Image and field option plugins**: integrate binary and Many2One fields with website UI (`image_field_plugin.js`, `many2one_option_plugin.js`, `monetary_field_plugin.js`).
- **Shadow/background suites**: provide custom overlays (`background_position_overlay.js`) and hooks.

Refer to the source files under `static/src/core` and `static/src/plugins` for full configuration details and resource signatures.
