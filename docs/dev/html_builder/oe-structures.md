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
