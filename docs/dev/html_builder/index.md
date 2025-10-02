# HTML Builder Handbook

The HTML Builder module powers the Odoo website editor. It extends the generic `html_editor` engine with website-specific plugins, snippets, and UI so editors can design pages visually. This section of the handbook mirrors the structure of the public Owl documentation so contributors can quickly find the concepts, architecture, and extension guides they need.

## How to use this guide

- Start with the [Overview](overview.md) if you are new to the builder or need to recall how it fits inside the website application.
- Browse [Architecture](architecture.md) and [Core Concepts](core-concepts.md) to understand the runtime layers, registries, and plugin model.
- Jump to task-focused chapters such as [Builder Actions](builder-actions.md), [Plugin Catalog](plugin-catalog.md), or [Migration Guide](migration.md) when implementing new features.
- Keep [Reference](reference.md) and [Troubleshooting](troubleshooting.md) handy during reviews or debugging sessions.

## Contents

1. [Overview](overview.md)
2. [Architecture](architecture.md)
3. [Core Concepts](core-concepts.md)
4. [Builder Actions](builder-actions.md)
5. [Integration Points](integration.md)
6. [Key Components](key-components.md)
7. [Plugin Catalog](plugin-catalog.md)
8. [Migration Guide](migration.md)
9. [Examples](examples.md)
10. [Best Practices](best-practices.md)
11. [Troubleshooting](troubleshooting.md)
12. [Reference](reference.md)

Each page is self-contained and links back to the relevant source files under `addons/html_builder`. Update the section that matches your change whenever the code introduces new capabilities or alters behaviour.
