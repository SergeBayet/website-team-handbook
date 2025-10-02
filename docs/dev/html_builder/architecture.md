# Architecture

## Runtime Layout

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
|  - feeds plugins/resources/config                        |
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

## Option Interaction Flow

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

## Client ↔ Backend Layers

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
- Assets defined in `__manifest__.py` deliver builder QWeb, JS, and SCSS bundles.
