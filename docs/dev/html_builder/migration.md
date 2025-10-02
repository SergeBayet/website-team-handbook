# Migration Guide (Legacy Options → Builder Plugins)

## Legacy Approach (pre `html_builder`)

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

HTML used `data-option="my_legacy_option"` attributes; logic lived in a single class mixing UI and DOM mutations.

## New Class-Based Pattern

### Step 1 – Define the Action

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

### Step 2 – Create the Option Template

```xml
<!-- my_module/static/src/xml/my_option.xml -->
<t t-name="my_module.ToggleOldClassOption" owl="1">
    <BuilderCheckbox label="Highlight"
                     action="toggleOldClass"
                     actionValue="1"
                     t-att-checked="env.getValue('toggleOldClass')"/>
</t>
```

### Step 3 – Update the Snippet Template

- Remove legacy `data-option` attributes.
- Ensure the snippet root matches the selector `.s_my_snippet`.
- Include new assets in the module manifest (JS + XML).

### Step 4 – Clean Migration

- Optionally register `patch_builder_options` to morph legacy option names.
- Provide `cleanForSave` handlers to strip transitional classes if needed.

## Migration Checklist

1. Remove legacy `web_editor` option JS.
2. Register the new plugin in the asset bundle after `html_builder.assets_wysiwyg`.
3. Ensure action id uniqueness.
4. Update tours/tests to cover the new option.
5. Document the change in the module README.
