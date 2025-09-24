/** Example option plugin contributing a custom select. */
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
