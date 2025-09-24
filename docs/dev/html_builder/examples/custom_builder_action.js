/** Example custom BuilderAction and plugin registration. */
import { BuilderAction } from "@html_builder/core/builder_action";
import { Plugin } from "@html_editor/plugin";
import { registry } from "@web/core/registry";
import { withSequence } from "@html_editor/utils/resource";
import { DEFAULT } from "@html_builder/utils/option_sequence";

export class ToggleBadgeAction extends BuilderAction {
    static id = "toggleBadge";

    setup() {
        this.preview = true; // enable hover preview
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
