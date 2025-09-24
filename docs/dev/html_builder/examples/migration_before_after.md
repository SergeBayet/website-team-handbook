# Legacy vs BuilderOption Migration Cheat Sheet

## Legacy web_editor option
```javascript
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

## New builder action + option plugin
```javascript
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

```xml
<!-- my_module/static/src/xml/my_option.xml -->
<t t-name="my_module.ToggleOldClassOption" owl="1">
    <BuilderCheckbox label="Highlight"
                     action="toggleOldClass"
                     actionValue="1"/>
</t>
```
