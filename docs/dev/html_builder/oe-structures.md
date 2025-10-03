# Structure Containers and Copy-on-Write Behaviour

This page documents how the Website module recognises editable regions with the `oe_structure_*` CSS helpers, how the copy-on-write (COW) machinery keeps multi-website data isolated, and how the builder tracks dirty regions.

## `oe_structure` Areas

Website templates expose drop zones to the HTML Builder through the `oe_structure` CSS class. Each zone is a structural anchor that the editor recognises when scanning the DOM. When a node carries the class, the editor:

- exposes it as a valid target when dropping snippets;
- injects placeholder helpers when the zone becomes empty;
- scopes undo/redo entries so operations inside the zone remain atomic;
- serialises the surrounding HTML during a save if the zone is marked dirty.

The class is typically applied on containers such as `div`, `section`, or `header` elements that already include a layout grid. The builder does **not** enforce additional markup; it trusts the template author to provide the correct structure (for example `container` and `row` divs).

### Variants

Several specialised helpers refine how a structure behaves:

- `oe_structure_solo`: declares a single-snippet area. Dropping a new snippet replaces the existing one instead of appending it. This is used for headers, footers, or hero banners where the website should keep exactly one child.
- `oe_structure_hidden`: marks a drop zone that stays invisible on the published website. Mega menu columns and off-canvas previews use it so editors can stage invisible content without exposing it to visitors.
- `oe_structure_inline`: declares an inline container. The editor keeps text nodes adjacent, prevents block-level wrappers, and offers inline snippets (buttons, badges) instead of full-width sections.
- `oe_structure_wide` / `oe_structure_narrow`: optional visual hints that pre-select width presets in the sidebar and adjust the overlay grid.

> **Note:** Variants simply extend the behaviour of the base `oe_structure`. They can be combined depending on the expected layout (for example, `class="oe_structure oe_structure_solo oe_structure_wide"`).

### Recommended Markup Patterns

Keep the structure lean: the root carries the `oe_structure` helper, while the immediate child defines the layout. A typical hero banner looks like this:

```xml
<t t-name="my_module.hero">
    <section class="s_banner o_cc o_cc2">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-6">
                    <div class="oe_structure oe_structure_solo">
                        <section class="s_media_block">
                            <div class="o_media_block">
                                <h1 class="display-4">Launch faster with Odoo</h1>
                                <p class="lead">Craft beautiful pages with the drag-and-drop editor.</p>
                                <a class="btn btn-primary" href="/contactus">Talk to us</a>
                            </div>
                        </section>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="oe_structure oe_structure_inline">
                        <img class="img-fluid" src="/my_module/static/src/img/product.png" alt="Product preview"/>
                    </div>
                </div>
            </div>
        </div>
    </section>
</t>
```

Key points illustrated in the example:

1. The structure wraps the editable content (the `s_media_block` snippet) but remains inside the layout grid.
2. Different variants control how the editor presents the zone (`oe_structure_solo` vs `oe_structure_inline`).
3. Plain HTML is used for the snippets—no special attributes are required beyond the helper classes.

## Copy-on-Write (COW) for Multi-Website Views

The Website app implements copy-on-write on QWeb views so that each website keeps its own customisations. The mechanism lives in `addons/website/models/ir_ui_view.py` and is triggered whenever the editor writes on a generic view while the context contains a `website_id`.

### What “COWed” Views Look Like

When a view is COWed the framework produces a website-specific copy that mirrors the generic record but carries a `website_id`. The clone keeps the same `key`, `inherit_id`, priority, and architecture so it can seamlessly slot in the rendering tree.

```xml
<!-- Generic template shipped by a module -->
<t t-name="website.s_banner" priority="20" key="website.s_banner">
    <section class="s_banner o_cc o_cc2">
        <div class="container">
            <div class="row">
                <div class="col-lg-8">
                    <div class="oe_structure">
                        <section class="s_media_block">
                            <h1>Build a website in minutes</h1>
                            <p class="lead">Drag, drop, and publish.</p>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    </section>
</t>

<!-- COWed copy generated after editing Website A -->
<t t-name="website.s_banner" priority="20" key="website.s_banner" website_id="1">
    <xpath expr="." position="replace">
        <section class="s_banner o_cc o_cc2">
            <div class="container">
                <div class="row">
                    <div class="col-lg-8">
                        <div class="oe_structure">
                            <section class="s_media_block">
                                <h1>Grow your business online</h1>
                                <p class="lead">A tailored headline for Website A.</p>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </xpath>
</t>
```

The XML shows two records with the same `t-name`/`key`. The second carries a `website_id`, signalling it is the COW copy. Rendering picks the version matching the current site, falling back to the generic template when no specific copy exists.

### Lifecycle of an Edit

1. **User edits a page**: the builder serialises only the dirty `oe_structure` zones and posts them to `/website/save`. The request runs with `context={'website_id': current_website.id}`.
2. **`ir.ui.view.write` intercepts the update**: if the target view is generic (`website_id` is false) and the context carries a website, the method clones the view into a website-specific copy. The copy keeps the same `key` so inheritance chains remain valid.
3. **Inheritance tree propagation**: once the copy exists, the method recursively walks through child views, cloning them when needed so the new branch mirrors the generic tree. Existing website-specific children are duplicated and reattached to preserve the evaluation order.
4. **Pages consistency**: any `website.page` records referencing the view flush their caches and point to the new copy so future renders fetch the website-specific markup.
5. **Write on the copy**: the incoming changes are finally applied on the website-specific view (or the existing copy if one already existed).

As a result, edits never touch the shared (generic) views. New websites start from the pristine generic data and only allocate specific copies when a user edits them.

### Implications for Developers

- Always supply a stable `key` on templates that may be customised. It lets the COW code locate existing copies across websites.
- Avoid forcing `website_id=False` in contexts while writing website views—doing so bypasses the safety net and risks leaking edits to other sites.
- When introducing new inherited views, use `_create_all_specific_views` (invoked during module updates) to populate the missing copies for existing websites.

### Following Inheritance Through COW Copies

Views often inherit from other views using `inherit_id` and XPath operations. Copy-on-write respects those relationships, ensuring each website gets a full branch when any node is edited.

```xml
<!-- Generic header -->
<template id="website.layout" name="Base Layout" inherit_id="web.layout">
    <xpath expr="//header" position="replace">
        <header class="o_header o_we_header_default">
            <div class="oe_structure">
                <section class="s_text_block">
                    <h1>Default header</h1>
                </section>
            </div>
        </header>
    </xpath>
</template>

<!-- Generic child that tweaks the header -->
<template id="website.header_links" inherit_id="website.layout">
    <xpath expr="//header/div[@class='oe_structure']" position="inside">
        <section class="s_button_box">
            <a class="btn btn-primary" href="/contactus">Contact</a>
        </section>
    </xpath>
</template>

<!-- After editing the header on Website B -->
<template id="website.layout" inherit_id="web.layout" website_id="2">
    <xpath expr="//header" position="replace">
        <header class="o_header o_we_header_default">
            <div class="oe_structure">
                <section class="s_text_block">
                    <h1>Welcome to Website B</h1>
                </section>
            </div>
        </header>
    </xpath>
</template>

<template id="website.header_links" inherit_id="website.layout" website_id="2">
    <xpath expr="//header/div[@class='oe_structure']" position="inside">
        <section class="s_button_box">
            <a class="btn btn-primary" href="/shop">Shop now</a>
        </section>
    </xpath>
</template>
```

Notice how both the parent and child views obtain a `website_id`. The inheritance chain is preserved, so the child still points to the COWed parent rather than the generic one. Without this duplication, Website B would mix custom and generic content unpredictably.

### Custom Views Created from the Builder

When an editor drops a brand new snippet or creates a page section, the system generates a **custom view**. Custom views are regular `ir.ui.view` records with a `key` beginning with `website.custom_...` and, in most cases, a specific `website_id`. They inherit from the container view that owns the structure being edited.

```xml
<!-- Website C custom hero created via the builder -->
<template id="website.custom_hero_abcd" inherit_id="website.s_banner" website_id="3" priority="40">
    <xpath expr="//section[@class='s_banner o_cc o_cc2']" position="replace">
        <section class="s_banner o_cc o_cc3">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-6">
                        <div class="oe_structure">
                            <section class="s_call_to_action">
                                <h2>Website C exclusive</h2>
                                <p class="lead">This block lives only on Website C.</p>
                            </section>
                        </div>
                    </div>
                    <div class="col-lg-6 text-center">
                        <img class="img-fluid" src="/website/static/src/img/sample.png" alt=""/>
                    </div>
                </div>
            </div>
        </section>
    </xpath>
</template>
```

The builder assigns a deterministic `id`/`key` so future edits can target the same record. Because the view inherits from `website.s_banner`, it benefits from the same COW propagation: if the parent is cloned for another website later, `_create_all_specific_views` also clones the custom child to keep layouts consistent.

## Dirty Tracking with `oe_dirty`

The builder keeps track of modified areas to minimise payloads and highlight unsaved work. Whenever a change occurs inside an `oe_structure`, the editor walks up the DOM and adds the `oe_dirty` class to the containing structure. The class serves three purposes:

1. **Visual feedback**: in edit mode the overlay paints dirty zones, helping the user review pending changes.
2. **Targeted serialisation**: only nodes marked `oe_dirty` are serialised back to the server. Large pages therefore avoid full HTML uploads on every minor tweak.
3. **Discard safety**: when the user discards changes, the builder reloads the `oe_dirty` zones from the last saved snapshot and removes the class, leaving untouched areas intact.

On save, the server response provides the updated HTML (already merged with computed assets). The builder patches the DOM, removes the `oe_dirty` markers, and resets the undo stack. Any remaining `oe_structure` without the class is considered clean.

### Example: marking a zone dirty

```xml
<div class="oe_structure" data-oe-id="42" data-oe-model="ir.ui.view">
    <section class="s_call_to_action o_cc3">
        <div class="o_container_small">
            <h2>Stay in the loop</h2>
            <div class="s_share text-center">
                <div class="o_we_buttons d-inline-flex gap-2">
                    <a class="btn btn-primary" href="/contactus">Contact us</a>
                    <a class="btn btn-outline-secondary" href="/blog">Read the blog</a>
                </div>
            </div>
        </div>
    </section>
</div>
```

After editing the call-to-action button text, the editor temporarily transforms the wrapper into:

```xml
<div class="oe_structure oe_dirty" data-oe-id="42" data-oe-model="ir.ui.view">
    <!-- updated snippet HTML -->
</div>
```

When the changes are saved, the builder removes `oe_dirty`, keeping the outer structure untouched.

## Summary Checklist

- Wrap every droppable region in an element with `oe_structure` and the relevant variants.
- Keep layout containers outside the structure so the editor cannot accidentally delete them.
- Remember that COW clones generic views per website; do not rely on edits leaking across sites.
- `oe_dirty` marks pending changes—never ship templates that intentionally include the class.
