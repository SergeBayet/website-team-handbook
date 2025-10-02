# Builder Actions

## Lifecycle

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

## Detailed Steps

1. **Definition** – create a subclass of `BuilderAction` with override hooks; optionally declare `static dependencies`.
2. **Registration** – add it to `resources.builder_actions` in a plugin (core or custom). Optionally register the plugin in `registry.category("builder-plugins")`.
3. **Preparation** – `prepare` executes before `apply` when defined. Use it for async fetches.
4. **Load** – executed within `operation.next`'s `load` callback for heavy operations (e.g., fetching image info). Result stored as `loadResult`.
5. **Apply** – mutate the DOM. Use `dependencyManager` to coordinate with other options.
6. **Clean** – revert effects during preview rollback or `clean_for_save`.
7. **History** –
   - `OperationPlugin` ensures `history.addStep()` after a successful apply.
   - Undo/Redo triggers `BuilderOptionsPlugin.restoreContainers` to re-sync the UI.
8. **Previewing** – when `preview` is true, the builder may call `apply` on pointer move; cancellation uses `operation.cancelPrevious`.
9. **Undo/Redo** –
   - Undo replays recorded mutations; `post_undo_handlers` restore option selection.
   - Redo follows the same flow via `post_redo_handlers`.
10. **Save** – `clean_for_save_handlers` remove temporary classes/attributes before persisting HTML.

## Lifecycle Diagram

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
