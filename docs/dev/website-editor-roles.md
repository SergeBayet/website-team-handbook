# Website Editor Roles and Access Levels

In Odoo Website, users who access the website builder can have **two levels of editing permissions**, determined by two boolean flags: `isRestrictedEditor` and `isDesigner`.
Understanding how they interact is key to implementing proper access checks and avoiding security or UX issues.

---

## 1. Overview

| Role                  | `isRestrictedEditor` | `isDesigner` | Can edit content? | Can customize design? | Notes                                                                                                                     |
| --------------------- | -------------------- | ------------ | ----------------- | --------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| **No access**         | `false`              | `false`      | ❌ No              | ❌ No                  | Cannot access the editor at all. Should never enter editor-related flows.                                                 |
| **Restricted Editor** | `true`               | `false`      | ✅ Yes (limited)   | ❌ No                  | Can create, edit, and delete content based on their access rights, but **cannot change templates, structure, or design**. |
| **Designer Editor**   | `true`               | `true`       | ✅ Yes             | ✅ Yes                 | Full editing capabilities, including structure, templates, CSS, and advanced features. Still subject to per-model ACLs.   |

---

## 2. Access Flags Explained

### `isRestrictedEditor`

* Indicates whether the user is allowed into **edit mode** at all.
* Any user entering the website editor **must have this flag set to `true`**.
* If `isRestrictedEditor` is `false`, the user should **not see the editor UI**, nor should any editor-specific code run.

### `isDesigner`

* Indicates whether the user has **design-level permissions**.
* Designer editors can access advanced features like:

  * Editing templates and structure
  * Adding custom snippets
  * Managing theme assets (CSS, JS, etc.)
* It’s always used **in combination** with `isRestrictedEditor = true`.
* If `isDesigner = true`, the user is still subject to model-specific access rights.

---

## 3. Common Misunderstandings

🚫 **Wrong assumption:**

> “If `isRestrictedEditor` is `false`, it means the user is an admin.”

❌ Incorrect.
If `isRestrictedEditor` is `false`, the user **should not be editing at all**. Admin-like users are recognized by **both** `isRestrictedEditor = true` and `isDesigner = true`.

🚫 **Wrong assumption:**

> “Designer editors can do everything.”

❌ Incorrect.
Even designer editors can be restricted by **per-model access rights**. For example, a designer might not be able to create a Live Chat channel if their access level on the `im_livechat.channel` model is only “User”.

---

## 4. Best Practices for Developers

* **Always check `isRestrictedEditor` first.**
  If it’s `false`, stop there — the user shouldn’t be in the editor context.
* **Use `isDesigner` only to enable design-specific actions.**
  Never use `!isRestrictedEditor` as a shortcut for “admin”.
* **Always verify access rights for specific features.**
  Use the generic `has_access` RPC or explicit permission checks even for designer editors.

Example:

```js
if (!user.isRestrictedEditor) {
    // Should never happen in edit mode
    return;
}

// Safe: now check feature-level permissions
if (await userService.has_access('im_livechat.channel', 'create')) {
    // Show “Create Live Chat” option
}
```

---

## 5. Summary

* `isRestrictedEditor` = **entry ticket** to the website editor.
* `isDesigner` = **advanced privileges** on top of restricted editing.
* Both flags **must be true** for admin-like users.
* Even designer editors must **pass per-model ACL checks**.

Understanding and respecting this permission model ensures correct feature visibility, avoids security holes, and prevents confusing behavior in the website builder UI.
