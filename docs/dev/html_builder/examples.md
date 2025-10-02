# Examples

## Creating a Custom BuilderAction

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

Corresponding template:

```xml
<t t-name="my_module.ToggleBadgeOption" owl="1">
    <BuilderCheckbox label="Badge"
                     action="toggleBadge"
                     actionValue="1"/>
</t>
```

## Adding a New OptionPlugin

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

## Wiring an Interaction for Dynamic Behaviour

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

Builder action updating the counter:

```js
import { BuilderAction } from "@html_builder/core/builder_action";
import { Plugin } from "@html_editor/plugin";
import { registry } from "@web/core/registry";

class IncrementCounterAction extends BuilderAction {
    static id = "incrementCounter";
    apply({ editingElement }) {
        const current = Number(editingElement.dataset.counter || "0");
        editingElement.dataset.counter = String(current + 1);
    }
}

class CounterPlugin extends Plugin {
    static id = "counterOption";
    resources = {
        builder_actions: { IncrementCounterAction },
    };
}

registry.category("builder-plugins").add(CounterPlugin.id, CounterPlugin);
```
