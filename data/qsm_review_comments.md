## PR #230612
URL: https://github.com/odoo/odoo/pull/230612

- **review** (2025-10-08T14:41:02Z): @robodoo r+

## PR #230030
URL: https://github.com/odoo/odoo/pull/230030

- **review** (2025-10-05T20:25:28Z): @robodoo r+

## PR #229594
URL: https://github.com/odoo/odoo/pull/229594

- **review** (2025-10-03T17:09:57Z): Seems good, thanks :+1: We normally don't *change* XML in stable but I think this is an acceptable exception.

@robodoo r+

## PR #229086
URL: https://github.com/odoo/odoo/pull/229086

- **review** (2025-10-02T14:45:56Z): @robodoo r+

## PR #228947
URL: https://github.com/odoo/odoo/pull/228947

- **review** (2025-10-05T12:18:40Z): @robodoo r+

## PR #228860
URL: https://github.com/odoo/odoo/pull/228860

- **review** (2025-09-26T18:55:21Z): @robodoo r+

## PR #228728
URL: https://github.com/odoo/odoo/pull/228728

- **review_comment** (2025-09-26T11:47:08Z): This commit only includes the addition of the import I guess something more should be in this commit (the removal of isArtificialVoidElement) I guess
- **review_comment** (2025-09-26T11:58:46Z): For this second commit, you know where is the code that handles the double click?
<img width="548" height="221" alt="image" src="https://github.com/user-attachments/assets/0cf06c21-c776-4088-8ea6-67f547f4ae9b" />

Just curious
- **review** (2025-09-26T11:59:00Z): Thanks for checking
- **review_comment** (2025-10-02T15:16:38Z): @dmo-odoo Sorry, forgot to send my answer. I don't know about finding an existing case but it's easy to create one: a non-savable area which contains an image with that class.

o_editable_media means that the image is editable, despite its **first** potential contenteditable="false" ancestor. E.g. your team snippet case: the column that contains the image is not editable (because we don't want users to add text inside by mistake) but the image is. So we use a combination of contenteditable="false" on the column and the o_editable_media class on the image (I guess you know all this since we decided it together).

Then the `shouldEditableMediaBeEditable` is still necessary as a way to check that editing the image actually make sense: if it is *savable*. That function checks that the image is in a savable section.

Easy to reproduce:
- Add a team snippet in a page: see that the images are editable
- Open the dev tools: inside one of the team member description, add `<t t-out="website.name"/>`
- Save the page (the website name appears in your member description)
- Now re-enter edit mode: see that we now rightfully can still edit the images of the team members **except the one where there is the t-out** (well in theory it could but that's a limitation in this case, because the image column is marked as non editable in the first place).

LOCO has been working on distinguishing the "editable" notion from the "savable" notion (and I thought his plan was to rename o_editable into o_savable, don't know). `shouldEditableMediaBeEditable` should probably have been named `shouldEditableMediaBeActuallyEditableBecauseItActuallyIsSavable` but it seemed too much :upside_down_face:  I preferred adding comments explaining why the function name is bad :upside_down_face: I guess I was not clear enough. But the "savable" notion is just a shortcut to explain it, my original code (which now changed to only support that "savable" notion I see :shrug:) was meant to support more. For example: simply a team snippet that was marked as not editable anymore thanks to the o_not_editable class so that some users don't break it (as we did in the past and probably still for some blocks on internal).
- **review_comment** (2025-10-06T12:02:24Z): > The fix I am suggesting would only put the class on images that are "savable", that is the ones having a closest('.o_editable')

That's impossible, as the whole point of the class is to declare an image as editable in a non-editable sub-area, in a savable zone. I don't even know/remember why we have a  JS code adding the class in the first place (was it the case before 18.4?). But in any case, if it makes sense, it should surely not be conditional on the image being in a savable zone (at least not as an exception: it probably never make sense to edit a non-savable area, not just that particular class).

The steps to reproduce I sent you are actually the proof: we have images with the class, then the zone becomes unsavable... but the o_editable_media class will still be there and won't mean it is editable.

Another way to say it: if it was possible to do what you are saying ("determine if the class should be added based on the environment"), then we would not need the class at all.
- **review_comment** (2025-10-06T12:47:41Z): Ok, I spoke a bit with @loco-odoo : I kinda forgot the system changed but still:

- Either we base the new system on adding the `o_editable_media` class automatically during edit mode only, in which case you either have to:
  - Ignore existing databases that had the class saved (never fan of that) and the errors that come with them in the new system
  - Upgrade scripts
  - Remove the class everywhere when entering edit mode
- Or we live with both systems at the same time, in which case the `shouldEditableMediaBeEditable` check is still required**


** living with both system is what I recommend for `o_not_editable` for example as it is way older, an easy way for people to declare non editable zone and just an extra selection in the "non editable element selector list" (without any associated code like `shouldEditableMediaBeEditable`, hopefully)

## PR #228575
URL: https://github.com/odoo/odoo/pull/228575

- **review_comment** (2025-10-06T15:25:58Z): In stable we generally avoid changing attribute values. If someone currently sells your fix as a custo, he might create a view that xpaths `//div[data-selector=".o_wcrm_filters_top"]`, which would later crash if the app is updated.

Also, nobody would get this fix in 17.0 as they would need to -u.

There are two other workarounds:
- Using `_patchForComputeSnippetTemplates`, but when it's about *changing* an attribute, it's not the best.
- Using `_computeWidgetVisibility` (possibly combined to `_patchForComputeSnippetTemplates` to add a data-name if no other ways to differentiate the widget via `params`).

In 19.0, as this became static XML, this would at least ease adding the potentially required data-name, but I still think we should get more careful about *changing attribute values* (even in static XML) when there are ways to avoid it easily as the more Odoo will be used, the more that kind of custom xpath will get likely :grimacing:

## PR #228428
URL: https://github.com/odoo/odoo/pull/228428

- **review** (2025-09-26T11:12:01Z): @robodoo r+ up to saas-18.4

## PR #228321
URL: https://github.com/odoo/odoo/pull/228321

- **issue_comment** (2025-10-02T16:43:33Z): @xO-Tx Status here? :pray:
- **review** (2025-10-06T13:11:35Z): @robodoo r+

## PR #228314
URL: https://github.com/odoo/odoo/pull/228314

- **review** (2025-10-06T12:25:28Z): @robodoo r+

## PR #228253
URL: https://github.com/odoo/odoo/pull/228253

- **review** (2025-09-26T14:54:46Z): @robodoo r+

Actually how do we plan to fix that in existing 19.0 databases @nle-odoo ? Surely there are more problematic cases (that could happen in 3 months once they set up a domain) than there are tickets :grimacing:
- **issue_comment** (2025-09-27T06:41:07Z): @nle-odoo Yes I think it's worth it: with that one week, there was nearly 100k trials that started with website, most are probably testing things of course but that still potentially a lot of new customers who could stumble upon that issue in the next months.

And I guess we could add an unit test in the 19.0 version :pray: 

Thanks!

## PR #228016
URL: https://github.com/odoo/odoo/pull/228016

- **issue_comment** (2025-10-06T14:24:54Z): @bikh-odoo This forward-port PR on 19.0 seems to be blocked for a new reason, could you have a look ?
- **review** (2025-10-08T11:52:23Z): @robodoo r+

## PR #227606
URL: https://github.com/odoo/odoo/pull/227606

- **review** (2025-09-17T13:20:22Z): @robodoo r+

## PR #227527
URL: https://github.com/odoo/odoo/pull/227527

- **review** (2025-09-16T15:26:02Z): @robodoo r+

## PR #227481
URL: https://github.com/odoo/odoo/pull/227481

- **review_comment** (2025-09-17T13:35:41Z): - `role="img"` is not the right one for those: those pictures don't bring anything, they are just decoration, the meaning comes from the text next to it. Using `role="presentation"` (or aria-hidden="true", but I prefer the presentation role) is best.
- You could also remove the title on those button... it's the same as the text, which is just annoying for no reason.
- **review_comment** (2025-09-17T13:38:52Z): In this case, `role="img"` could be the right one... but not if no aria-label or title. IMO I would:
- Add a `title` on the `<button>`
- Remove the `<i>` and use the `oi` class on the button itself as before (does not that work?)
- **review_comment** (2025-09-23T13:54:49Z): > IMO using the icon classes on the button itself makes it clearer that the icon serves as the button’s label.

Exactly... that's what I am asking?

> It also lets us specify its role

That's contradicting :thinking: I guess the first part of your sentence meant the opposite, in which case this is just wrong: `<button class="fa fa-home"/>` is way more clear than `<button><i class="fa fa-home/></button>`: you don't have to analyze the button's content and other attributes to know if there is text or if the structure/roles are right: the button is using the fa class, it is a button with an icon only.

> and prevents styles from .oi to maybe conflict with .btn.

What style could conflict? `oi` is defined afterwards and any `hover` or anything else should style apply, no? In any case, we always have been using `fa` on button directly, that's a case that is supposed to work. That's actually required by some layouts to work (as we have some rules targeting `.btn.fa`), at least that was the case a few days ago still.

Anyways, you can choose to use the inner `<i>` if you prefer and it works but just adding `role="img"` is not enough then. The button needs a `title` either way and if you use `role="img"` it probably requires an `aria-label` on the icon itself... which IMO is just useless info that pollute the DOM for no reason. From an accessibility point of view, I think an user would just prefer to know there is a button with a certain function (title) and not having to know there is a picture which is an icon that says the same thing... but I might be wrong :shrug:
- **review** (2025-09-24T12:09:55Z): Last "unstable" change we merge in 19.0 ;)

@robodoo r+
- **review** (2025-09-30T15:32:59Z): @robodoo r+

## PR #227408
URL: https://github.com/odoo/odoo/pull/227408

- **issue_comment** (2025-09-22T09:30:13Z): @xmo-odoo I think the other work has been merged and forward-ported, can this move forward?
- **review** (2025-09-23T09:20:04Z): @robodoo r+

## PR #227125
URL: https://github.com/odoo/odoo/pull/227125

- **review** (2025-09-15T14:34:14Z): From what I understand, merging this now is the best bet: the test has been re-disabled while waiting for https://github.com/odoo/odoo/pull/227224 (see runbot-229949) so I guess it is best to remove our framework-fighting protections now.

@robodoo r+
- **issue_comment** (2025-09-16T11:53:25Z): My bad then, I thought the big "test-tags" ribbon on the runbot error record combined with the newly assigned fixing PR meant that :shrug:

## PR #227124
URL: https://github.com/odoo/odoo/pull/227124

- **review** (2025-09-17T14:02:40Z): Don't forget to mention the commit that I merged that was incomplete here and also precise the commit message, you don't seem to speak about the header at all

## PR #227107
URL: https://github.com/odoo/odoo/pull/227107

- **review** (2025-09-15T08:23:24Z): @robodoo r+

## PR #227099
URL: https://github.com/odoo/odoo/pull/227099

- **review** (2025-09-15T11:22:01Z): @robodoo r+

## PR #227096
URL: https://github.com/odoo/odoo/pull/227096

- **review** (2025-09-14T20:44:57Z): @robodoo r+

## PR #227070
URL: https://github.com/odoo/odoo/pull/227070

- **review** (2025-09-13T19:09:28Z): @robodoo r+
- **issue_comment** (2025-09-13T22:28:28Z): @robodoo retry

## PR #227043
URL: https://github.com/odoo/odoo/pull/227043

- **review** (2025-09-12T23:02:29Z): @robodoo r+

## PR #226870
URL: https://github.com/odoo/odoo/pull/226870

- **review** (2025-09-12T14:10:59Z): This is not the right fix. The `small` class should stay in `em` unit as explained in the commit message of the line you are touching and explained in the comment above... The o_small font-size was broken by the editor team, I already created a task about it here: https://www.odoo.com/odoo/all-tasks/5055807 -> you can probably close this PR and let us handle this, we are not sure of what we'll do yet.

## PR #226847
URL: https://github.com/odoo/odoo/pull/226847

- **review** (2025-09-14T19:13:41Z): @robodoo r+

## PR #226627
URL: https://github.com/odoo/odoo/pull/226627

- **review_comment** (2025-09-15T08:48:59Z): Is the t-if/t-set split useful?
- **review_comment** (2025-09-15T08:50:39Z): <img width="550" height="50" alt="image" src="https://github.com/user-attachments/assets/c65baf56-9c12-47af-bfb0-f1b981d892fd" />
- **review_comment** (2025-09-15T08:52:33Z): Max 80 chars per line in website :pray:
- **review_comment** (2025-09-15T08:54:34Z): Probably a comment for multiple commits of this PR: could you mention the t-cache removal commit in the commit messages so that we can trace that this is a follow up of that :pray:
- **review_comment** (2025-09-15T09:05:09Z): Follow of https://github.com/odoo/odoo/pull/226019#discussion_r2336193572 -> this still looks awful to me.

1. I guess I don't grasp the distinction between `search_fetch` and `search`: can you explain it to me a bit? Do we still get the same recordset as output? If not, that seems bad to send it as main object for the qweb render. If yes, then why do we have a `search` and a `search_fetch`?
2. The `_search_page` here could normally fail, returning no page. How come you can go and do `page.view_id.fetch` on a falsy `page` variable? :thinking:
- **review_comment** (2025-09-15T09:06:01Z): - Commit title: no uppercase, same for other commits
- Missing changed app website_sale
- **review_comment** (2025-09-15T09:06:42Z): Cool :+1:
- **review_comment** (2025-09-15T09:09:41Z): Commit message mentions conflicts
- **review_comment** (2025-09-15T09:15:20Z): > Additionally, each cached
response is automatically refreshed if the page is visited more than one
hour after its initial caching.

Mmh, what's the idea behind that? That seems weird to me to have such a small caching time.
- **review_comment** (2025-09-15T09:21:02Z): Looks weird that all of these are gone in this file, was not the purpose testing the uncached version? (I don't know much about these tests).
- **review_comment** (2025-09-15T09:21:44Z): This move might be done in a dedicated commit I think, not related to the page caching stuff I think
- **review_comment** (2025-09-15T09:26:02Z): Cannot :upside_down_face:
- **review_comment** (2025-09-15T09:27:24Z): Can you explain the difference between the two clear_cache calls with a comment? :pray:
- **review_comment** (2025-09-15T09:33:08Z): That looks scary to have to do:
- Not actually sure: can't that page be cached?
- If it can't because of something, can't that something be automatically checked?

I am scared nobody will think about doing that.
- **review_comment** (2025-09-15T09:38:01Z): Continue with the docstring, that helps :pray:
- **review_comment** (2025-09-15T09:42:05Z): Inline comment could be useful here too IMO, it's not that obvious to me that this uses the cache thanks to `tools.ormcache` but is invalidated by hand with checking the time here. I was dumbly wondering why _get_response_cached called _get_response_raw and you recall _get_response_raw here afterwards :upside_down_face:
- **review_comment** (2025-09-15T09:43:36Z): What's that? :open_mouth:
- **review_comment** (2025-09-15T09:45:29Z): In fact I am actually not sure: does not this go through `_get_response_raw` twice in the `else` case above? :thinking:
- **review_comment** (2025-09-15T09:47:34Z): - I am confused, what's the point of having a function just calling another cached one like this?
- Did not we decide to not have stuff like `-> dict | None`?
- **review** (2025-09-15T09:52:35Z): Thanks for the PR, I just did a quick scrolling through, follow-up of https://github.com/odoo/odoo/pull/226019#pullrequestreview-3205324793

Much nitpicking and then more questions than actual requests of changes :pray:
- **review_comment** (2025-09-16T08:39:24Z): I know, but it's not the only commit where it makes sense to mention it :+1: 

Also for the one you mention, could you mention this commit : https://github.com/odoo/odoo/commit/0452d0701fcb8f4588b9b05dad9bbdd507539265 (I assumed it was part of the t-cache introduction but apparently not)
- **review_comment** (2025-09-16T08:49:26Z): > they are tested

you meant "cached"? So these tests does not test the uncached versions?
- **review_comment** (2025-09-16T08:51:56Z): Those two clear_cache calls's purpose are not obvious to me, so I imagine they are not clear for many others as well... and pretty sure that if I ask you their purpose in 5 years, you won't be sure either so what I was asking is code comments, no? :pray: Just a suggestion anyway.
- **review_comment** (2025-09-16T08:54:01Z): Ok, in any case there is a simpler problem: you can't just compare to `job-thank-you`, page URLs can be changed by the users
- **review_comment** (2025-09-16T08:56:10Z): Comment the tricks please :pray: I am sure 99% of people reading `my_func.__cache__.add_value` won't know what this does
- **review_comment** (2025-09-16T11:42:23Z): That is still computing `fields_to_fetch` for no reason: I agree this is probably negligible but it seems better to explicitly make a check. But as you wish :upside_down_face:
- **review_comment** (2025-09-17T14:29:33Z): I don't get why that would be an invalid flow... asking to change controller URL is a common request. And the fact this is implemented as a website.page comes with other advantages (e.g. the possibility to control the header position). Even if we are planning to review models and things in the future to improve all of that (urls, page options, etc), that's not the case yet. And having website.page records for dynamic stuff will probably always be a valid usecase and it's probably widely used in customization (it's actually a very common request to be able to add dynamic things in website.page without losing full edition capabilities).

Note that there is also an old task (still not merged this year) about allowing translating URL too. Your check would fail in that case too.

Would be nice if everything that is existing but unknown by some people is not immediately judged as useless or stupid, just saying... :shrug: Anyways, that's the last website-related PR where I'll be annoying, hopefully :+1: 

Maybe there is a way here to somehow rely on the `key` of the website.page's view? That will be somewhat more robust.

## PR #226606
URL: https://github.com/odoo/odoo/pull/226606

- **review_comment** (2025-10-02T14:40:38Z): We should of course not do hack like these :wink: If there is problem with dropdown.js, what I meant is that we will have to prove it with a small example as the framework JS won't be convinced by us directly changing dropdown.js :wink: 

And I don't know more either, when I investigated a bit I also was findind that the dropdown.js hacks simply did not work *in our usecase* but I did not find why.

Btw: mention the task and/or runbot ID in the commit message/PR, took me a while to remember what this is about :wink:

## PR #226598
URL: https://github.com/odoo/odoo/pull/226598

- **review_comment** (2025-09-24T11:52:51Z): In saas-18.3 we had this kind of code? It seems weird to make an exception with email_to like that. At minimum, it should be commented
- **issue_comment** (2025-09-24T13:42:18Z): @bso-odoo see https://github.com/odoo/odoo/pull/226598#discussion_r2375805262 

I let you handle this one, I am not confident enough :grimacing:

## PR #226505
URL: https://github.com/odoo/odoo/pull/226505

- **issue_comment** (2025-10-06T13:17:51Z): @nle-odoo Don't forget this one thanks :pray:
- **review_comment** (2025-10-08T11:21:24Z): (I of course agree that _manually modifying_ is bad)

@ticodoo What do you mean by "auto-exported as of April"? You mean we don't have to export them ourselves anymore when we add new terms in stable versions? Was this communicated? :thinking: How does that work? It's exported every week or something like that? On all versions? I see that if I export manually I have a -500 lines diff for website, that's because the auto-export keeps old terms?

Thanks in advance for the precisions :pray:
- **review_comment** (2025-10-08T13:01:38Z): > Yes, by email.

Indeed, I found it :open_mouth: I totally missed it at the time somehow :shrug: 

> before the switch to Weblate

Actually, Weblate was not communicated, right? It was communicated through the Transifex platform and I saw it over there and I communicated it to the website team but I don't think we actually got a RD email for that one? :upside_down_face:

> We include demo data

That might have been it, I probably tested without them.

> The auto-export does not keep the old terms [...] This is partially why the translation documentation

When it was non-avoidable (e.g. a documentation being entirely wrong in settings because Google changed something and replaced by something new), we actually kept the removed terms in the .pot file that we exported manually (and only commited the added terms). That way translations would not be wiped in outdated database that would still have the outdated XML for some reasons. But of course, that's supposed to be rare and I guess we could just keep the outdated XML in display:none or something like that now, which would be more stable anyway.

Thanks for the details :+1:
- **review_comment** (2025-10-08T13:52:43Z): > because there were 2 msgid/msgstr's for the same email template (i.e. model term) in the pot file when only 1 is expected

Not sure what you mean; for example for a specific website view that's a whole lot of the same "model term" with different msgid.

```
#. module: website
#: model_terms:ir.ui.view,arch_db:website.snippets
msgid "AAA"
msgstr ""

#. module: website
#: model_terms:ir.ui.view,arch_db:website.snippets
msgid "BBB"
msgstr ""
```

If we somehow removed the use of AAA and added the use of CCC, we would just commit


```
#. module: website
#: model_terms:ir.ui.view,arch_db:website.snippets
msgid "AAA"
msgstr ""

#. module: website
#: model_terms:ir.ui.view,arch_db:website.snippets
msgid "BBB"
msgstr ""

#. module: website
#: model_terms:ir.ui.view,arch_db:website.snippets
msgid "CCC"
msgstr ""
```

(without removing AAA, which should just have no effect in new database, while still being on Transifex and used in translation of old databases).

But true, I did not test this was still working, I did not hear of any broken thing because of it (but of course it's not like we did that every week nor even every month). Anyways, that way I know in that rare case, I have to try not removing the outdated part of the XML.

> It doesn't affect R&D though

True, just a bit when someone explains how translations work to newbies and they would incorrectly mention Transifex :wink: Anyways I was not saying you specifically should communicate about it, just that we should have a place for that kind of news (even in Guru meetings I don't remember it was even mentioned  :upside_down_face:)

## PR #226488
URL: https://github.com/odoo/odoo/pull/226488

- **review** (2025-09-12T09:19:37Z): @robodoo r+

## PR #226439
URL: https://github.com/odoo/odoo/pull/226439

- **review** (2025-09-11T11:07:02Z): @robodoo r+

## PR #226303
URL: https://github.com/odoo/odoo/pull/226303

- **review** (2025-09-15T08:35:52Z): @robodoo r+
- **review** (2025-09-16T13:49:24Z): @robodoo r+

## PR #226302
URL: https://github.com/odoo/odoo/pull/226302

- **review_comment** (2025-09-11T11:11:11Z): Good, in general, we should never use `<font>` anymore anyway
- **review_comment** (2025-09-11T11:25:15Z): That comment was not sent apparently: I think this should stay a `<h2>` ?
- **review_comment** (2025-09-11T11:51:47Z): Use `h3-fs` on the `<h2>` if you want to change the size, but it should still be a `<h2>`
- **review** (2025-09-12T09:25:39Z): @robodoo r+

## PR #226255
URL: https://github.com/odoo/odoo/pull/226255

- **review_comment** (2025-09-10T16:15:36Z): @anso-odoo I was about to delegate you all here too but... what happened to the `o_cc` class? :thinking:
- **issue_comment** (2025-09-11T10:45:16Z): @chgo-odoo Could you rebase and retarget both PR on 19.0? :pray:
- **review** (2025-09-14T19:29:06Z): @robodoo r+

## PR #226225
URL: https://github.com/odoo/odoo/pull/226225

- **review** (2025-09-10T09:14:32Z): > as the default palette for website changed for `.version 19`

Should have mentioned the commit that changed it... and what's "`.version 19`"? :thinking: 

> we change the default preset from `o_cc4` to `o_cc3`, ensuring the text remains readable no matter the color preset.

I am not sure how it ensures anything but ok :shrug: 

But sure:
@robodoo r+

## PR #226114
URL: https://github.com/odoo/odoo/pull/226114

- **review** (2025-09-15T11:52:58Z): I doubt this is the right fix, should not you adapt the selector of other plugins instead of adding your own `WebsiteBackgroundOption`? It's not the only block having inner box with background configuration but it's the only snippet redefining the option itself.
- **review** (2025-09-17T13:59:27Z): @robodoo r+

## PR #226061
URL: https://github.com/odoo/odoo/pull/226061

- **issue_comment** (2025-09-15T08:34:20Z): @mano-odoo Why should not you ping rd-website? :thinking: It's actually as good if not better than pinging me :wink: Especially since I won't be handling review in the website team soon :wink:

What you might have heard is that just "requesting review from rd-website" might not be enough for me to review (as that can be requested automatically by the mergebot and I don't fully review all PR that are marked as such).


> is this mergeable in 19.0

Everything except new apps / new python fields is still mergeable in 19.0. But this is a CSS and static XML fix for the editor, it _must_ target 19.0, even if we were March 2026.
- **review** (2025-09-16T08:34:24Z): @robodoo r+

## PR #226021
URL: https://github.com/odoo/odoo/pull/226021

- **review_comment** (2025-09-10T12:01:45Z): Could you split your work in multiple commits so I can be sure which part is what please? :pray: I'll wait to review that last commit :pray:

## PR #226019
URL: https://github.com/odoo/odoo/pull/226019

- **review_comment** (2025-09-10T09:35:57Z): If you `t-set="fields"` here, at the top of the `website.layout`, won't the variable be available for all templates of all apps? I feel it's a useless risk of conflict, "field" is not an uncommon name. Maybe just `__fields` ? :shrug:
- **review_comment** (2025-09-10T09:43:22Z): I have absolutely no idea what this is about... can we really call that a "More optimal use of the ORM"? :thinking: The code here is "retrieve the first page that matches this domain"... why do we need this big obfuscation of the code to improve its perf? 

At minimum this would need comments :pray:
- **review_comment** (2025-09-10T09:46:23Z): Does this one line change come with a perf improvement?

> all_menus.filtered: doesn't use ORM prefetch

I don't understand: how is this not a bug of the ORM? How is leaving the ORM entirely (= converting to a list instead of a recordset) improves the perf... of using the ORM?
- **review_comment** (2025-09-10T09:47:54Z): Nitpick: I would use `False` instead of `None` since it's the value being potentially assigned to a m2o

## PR #225918
URL: https://github.com/odoo/odoo/pull/225918

- **review** (2025-09-08T17:20:12Z): Was not this snippet in the previous version(s) too? But all right I'll r+ and let you backport it afterwards if needed.

I'll try the robodoo squash command to fix the wrong app mentioned in the commit message too:

@robodoo squash r+
- **review** (2025-09-09T11:50:34Z): @robodoo r+

## PR #225913
URL: https://github.com/odoo/odoo/pull/225913

- **review_comment** (2025-09-09T11:44:26Z): Does not the `translation_multi_language_fr_user_fr_en_site` have the issue too @SergeBayet ? Should not you make this part of the `multiLanguage` function to be sure?
- **review_comment** (2025-09-09T11:44:48Z): No one liner when it comes to `if`
- **review_comment** (2025-09-09T11:47:01Z): Same: if you use `{`, it should not be a one-liner.
- **review_comment** (2025-09-09T11:48:06Z): Still annoying we have to this to workaround the tour system that does not work but... ok :grimacing:
- **review_comment** (2025-09-09T11:48:36Z): Same
- **review** (2025-09-09T13:30:47Z): @robodoo r+

I was about to set up a priority r+ but I guess it's useless since our test was disabled on runbot at the moment :grimacing:

## PR #225797
URL: https://github.com/odoo/odoo/pull/225797

- **review** (2025-09-06T08:49:35Z): @robodoo r+

## PR #225790
URL: https://github.com/odoo/odoo/pull/225790

- **review** (2025-09-10T09:23:57Z): You'll need to adapt this one and make the master adaptation @bvr-odoo
- **review_comment** (2025-09-10T12:52:33Z): You can just remove the .pot change in master. Or ignore it, but in general I remove the .pot change when I have to push-force anyway.
- **review_comment** (2025-09-10T15:52:26Z): In fact, the parallax notion (and its class) is a website concept. This should not be in `html_builder`.
- **review** (2025-09-12T09:22:26Z): @robodoo r+

## PR #225783
URL: https://github.com/odoo/odoo/pull/225783

- **review_comment** (2025-09-09T14:30:19Z): Why do you read this outside of the `if`?
- **review** (2025-09-10T09:23:02Z): Not related to the bug being fixed here but found another bug: if you go to theme artist and type "parallax" in the search of the snippet dialog, you still find "s_cover" because it has "parallax" as keyword. Maybe we should have the same as for the label: not adding the "parallax" in keywords automatically but by hand... but since all the keyword are put together in a translated sentence as a whole, this is not possible with the current system (we would need RDE's work of a "snippet model" that FP did not want). Also I am sure "parallax" could be used in keywords, not speaking about the parallax options, e.g. the custom s_announcement_scroll parallax.

Anyways, not important.

@robodoo r+

## PR #225755
URL: https://github.com/odoo/odoo/pull/225755

- **review_comment** (2025-09-08T16:59:05Z): Why this if it's the default? Don't you want to just remove the copyright-custom value?
- **review** (2025-09-08T17:06:00Z): Commit message:

> Adapts default header and footer styles.

I don't see a header change ?

> Adapts `s_numbers_boxed` design to make it work better with the new palette

I don't see that change either?

> Changes the default logo to something fresher.

Note that we changed to a clearly-unmistakable logo image in the past instead of image of "image followed by text", because some users were trying to edit the text not understand this was an image. I don't think it was a big issue... but so you know. I prefer the new logo too but it will clearly recreate that old problem, maybe you can find a compromise.
- **review_comment** (2025-09-08T17:24:22Z): My previous remark is still true: I don't think you need to redefine base-1 at all... but I guess this does not hurt, I'll merge like that. Changing the base-color-palette will override all palettes though... hopefully this was considered.
- **review** (2025-09-08T17:24:36Z): @robodoo r+

## PR #225701
URL: https://github.com/odoo/odoo/pull/225701

- **review** (2025-09-07T14:00:32Z): I re-made the work entirely here, this did not need *more* code, just a bunch of code moved. Hopefully I did not make a mistake but I think this is right.

@robodoo r+
- **issue_comment** (2025-09-07T17:56:49Z): @robodoo retry

## PR #225672
URL: https://github.com/odoo/odoo/pull/225672

- **review_comment** (2025-09-07T09:07:36Z): You used CTRL-C during dev = bad. 
- Only the action changes: `action="condition and 'websiteConfig' or 'previewWebsiteConfig'` ?
- The actionParam can stay the same with or without preview
- **review_comment** (2025-09-07T09:10:33Z): Should have kept the double indent
- **review_comment** (2025-09-07T09:11:17Z): Same
- **review_comment** (2025-09-07T09:12:03Z): Missing space
- **review_comment** (2025-09-07T09:13:05Z): That looks wrong, it never make sense to translate except for animation/effects... especially without a comment to explain.
- **review** (2025-09-07T09:14:08Z): Quick scan... I'll see if I can adapt and merge by the end of the day (I'll just rebase for now)
- **review_comment** (2025-09-07T20:27:06Z): Ok it's an effect... not sure it's better that way but I'll keep it I guess it was discussed/asked
- **review_comment** (2025-09-07T20:40:19Z): In fact this t-if should have been kept I think? :thinking: I am restoring it
- **review** (2025-09-07T20:49:42Z): Tested a bit, applied the changes, hopefully should be good to go now. I'll wait runbot green then I'll see
- **review** (2025-09-07T22:10:19Z): @robodoo rebase-ff r+
- **issue_comment** (2025-09-08T07:24:46Z): @robodoo retry

## PR #225282
URL: https://github.com/odoo/odoo/pull/225282

- **review** (2025-09-03T07:59:59Z): @robodoo r+

## PR #225220
URL: https://github.com/odoo/odoo/pull/225220

- **review** (2025-09-22T15:49:23Z): @robodoo r+

## PR #225160
URL: https://github.com/odoo/odoo/pull/225160

- **review** (2025-09-02T18:16:10Z): @robodoo r+

## PR #225082
URL: https://github.com/odoo/odoo/pull/225082

- **review** (2025-09-02T07:35:31Z): @robodoo r+

## PR #225075
URL: https://github.com/odoo/odoo/pull/225075

- **review** (2025-09-02T08:43:05Z): @robodoo r+

## PR #224880
URL: https://github.com/odoo/odoo/pull/224880

- **review** (2025-08-29T21:06:07Z): @robodoo r+

## PR #224817
URL: https://github.com/odoo/odoo/pull/224817

- **review** (2025-08-29T13:33:34Z): @robodoo r+

## PR #224742
URL: https://github.com/odoo/odoo/pull/224742

- **review_comment** (2025-09-01T11:22:13Z): @Brieuc-brd This was simply removed. It was not to be adapted? So mass_mailing does support `oi` naturally?
- **review** (2025-09-02T14:38:51Z): @Brieuc-brd I refactored a bit:
- Used a placeholder selector instead of repeating the fa-XXX classes (so leading to the same CSS but avoiding code duplication, avoiding silent typo etc)
- Refactored the python code, it was badly made before you had to change it, it was a good occasion to add comments & cie

Thanks for the work on the fonts :+1: 

However while testing, I found out that the image sent by mail are not well-formed (shrunk horizontally), not because of the font/classes but because of the convertion system which forces bad width and height on the images. Don't know who to ping about that: @abd-msyukyu-odoo maybe? Since you are working on https://github.com/odoo/odoo/pull/215364?

E.g.

Sent email:
<img width="439" height="694" alt="image" src="https://github.com/user-attachments/assets/ad86ac5e-9bba-49f7-98c7-394e02659fea" />

Received email:
<img width="352" height="698" alt="image" src="https://github.com/user-attachments/assets/855f151a-6ef8-4863-972c-a5d94a280353" />

@robodoo r+

## PR #224663
URL: https://github.com/odoo/odoo/pull/224663

- **review** (2025-09-05T16:35:12Z): I was hoping to merge this today or over the weekend but unfortunately I think this will wait as there is at least one remaining issue, and I have trouble reviewing this correctly on my own without losing a week :grimacing: Credit to @bso-odoo for having done this that quickly though, as a last-minute request.

What I did here:
- Squashed all commits
- Handled all the comments of JUC
- Handled the comment of XMO (hopefully). To review, in the end I went with the original idea of just changing the path in font CSS files and just stopped using the os.path/Path lib.
- Regrouped the two font bundles into one... actually there are some apps that include one without the other or the fontawesome one without its override (meaning twitter icons are still twitter instead of X, etc), it would fix all of this.
- Split the work in two in the end (also it was missing an enterprise adaptation): I moved the change in app bundles (and its enterprise part) to https://github.com/odoo/odoo/pull/225760. I am not confident enough to merge a change in all apps that close to the OXP for a minor improvement. In this PR here, I only kept the change for the frontend asset bundle.
- Found out that the font preload does not work: it preloads the font asset file with the website ID in the URL... while the font asset file URL added in the CSS is not using the website id (so the browser actually loads the font twice) :grimacing: ... can't seem to find a fix, I don't know this code enough to fix that quickly :cry: 

I'll try to merge this before the OXP after more careful testing, as a first step before the mentioned PR follow-up for all apps. Unfortunately, @bso-odoo is on leave until next Friday. We'll see if I can check with him to do that at that moment. Or find the time to deeply review and fix this on my own.
- **review_comment** (2025-09-25T14:25:35Z): If css or binary do this:
- **review_comment** (2025-09-25T14:30:50Z): Let's not support relative path for now
- **review_comment** (2025-09-25T14:33:47Z): break
- **review_comment** (2025-09-25T14:38:40Z): Probably to remove this one
- **review_comment** (2025-09-25T14:42:38Z): Don't think this is needed
- **review_comment** (2025-09-25T14:43:17Z): .
- **review_comment** (2025-09-25T14:50:02Z): .
- **issue_comment** (2025-09-30T15:59:51Z): @Julien00859 @xmo-odoo Want to have another look at this one? Or should I go ahead, re-test and merge? :)

## PR #224541
URL: https://github.com/odoo/odoo/pull/224541

- **review** (2025-09-01T08:53:11Z): The commit message should mention the original commit that was merged in 18.0
- **review** (2025-09-03T08:21:21Z): > (This is a port of this commit 0da​d5d4, which was merged in 18.0, and
handled the fix in the `media_dialog_legacy` version of the image
selector.)

There are two problems with this:
- You mention the development commit, not the one which was actually merged. Find the proper one in the main branch. You can easily find it by using the pull request dashboard, by clicking on the first message's image of robodoo on the PR in 18.0:
<img width="570" height="448" alt="image" src="https://github.com/user-attachments/assets/d6a325ee-a930-4840-a4e5-bda16d058042" />
- You use a 7-chars hash, which will likely trigger a collision in a few years. I'd suggest you use a full link with a full hash, which allows developers to actually click on the link from their IDE:

```
This is a port of commit [1] which ...

[...]

[1]: https://github.com/odoo/odoo/commit/XXXXXXXXXXXXXXXXXXXXXX

opw-XXX
```
- **review** (2025-09-05T17:21:35Z): @robodoo r+

## PR #224527
URL: https://github.com/odoo/odoo/pull/224527

- **review** (2025-08-28T06:20:13Z): @romo-odoo FYI there were also trailing whitespaces in that new file, you might want to check your editor :grimacing: 

@robodoo r+

## PR #224487
URL: https://github.com/odoo/odoo/pull/224487

- **review_comment** (2025-08-27T14:54:16Z): @Gorash Yes, as you know I have never been a fan of t-cache so I won't be sad to see it gone... but the amount of SQL queries has always been a tricky subject for FP. And RDE and JKE have done many things to keep that query count as low as possible, even if from a practical point of view we would probably most of the time prefer simplicity over SQL query optimization but... :shrug:

Would it be possible for you to check if you can restore the old cache system we had for website.page at least? Not only I was never an expert regarding that part but also I have quite a few things to review at the moment myself :hot_face: 

FYI: FP is actually pinging me at this very moment about micro-optimizations so... kinda funny you are asking me to increase the SQL query count at the same time :upside_down_face:
- **review_comment** (2025-09-02T06:01:32Z): FYI:

I tested this morning based on a fresh master with https://github.com/odoo/odoo/pull/197296 merged (which I guess was related when it comes to the performance of serving pages?), I have similar results: +~30-50% time per request for website.page records.

Is it critical? I don't know, probably not... but it's obviously less good: again, I was not a fan of t-cache, but we should then restore the cache we had for website pages (that was removed when t-cache was introduced) or something similar.

## PR #224465
URL: https://github.com/odoo/odoo/pull/224465

- **review** (2025-08-27T12:34:09Z): @robodoo r+

## PR #224406
URL: https://github.com/odoo/odoo/pull/224406

- **review** (2025-08-27T09:01:59Z): Commit message: use `Closes XXX` or `Fixes XXX` instead of `Issue: XXX`, that makes Github link the issue properly and normally closes the issue automatically once this gets merged (I say normally because since robodoo does not merge but closes it might not get done, but still... :upside_down_face:).

Also what makes it specific to 18.0? The code in 17.0 seems to be the same
- **issue_comment** (2025-09-05T13:04:12Z): @bvr-odoo can merge it if he checked, yes :+1:

## PR #224382
URL: https://github.com/odoo/odoo/pull/224382

- **review_comment** (2025-09-09T14:35:52Z): @dery-odoo Is there a reason you kept a `<t>` without attributes?
- **review** (2025-09-09T14:40:22Z): @dery-odoo I am finally having a look at this PR (well TBH I took a quick look while you were away then had this question immediately and forgot to send it :upside_down_face:)

I only see removal in your PR here, what happened to the part about ensuring that if an option crashes, we should make sure to check if it not because the snippet is outdated? Did I forget something? Did we cancel that? :thinking: 

In any case, you can rebase this PR and move it out of draft if ready :pray:
- **issue_comment** (2025-09-10T11:06:28Z): > we should do it in the builderAction class, like a wrapper around the apply method? (And actually, probably also around other methods like isApplied, etc., which could also cause errors.)

Probably something like that indeed, is there an issue doing it?
- **review** (2025-09-12T15:37:59Z): @robodoo r+

## PR #224269
URL: https://github.com/odoo/odoo/pull/224269

- **review** (2025-08-26T13:51:14Z): Not really stable to move a file in stable... but if things [like that](https://github.com/odoo/odoo/pull/222345) were merged this week, I guess I can allow this one too. Also the file here only patches, so the risk is ultra low.

@robodoo r+
- **review** (2025-08-26T22:24:25Z): @robodoo r+

## PR #224247
URL: https://github.com/odoo/odoo/pull/224247

- **review_comment** (2025-09-09T13:44:46Z): Not sure this should have been added here as blog_post/event do not seem to take profit of it... but I guess it makes sense for consistency.
- **review_comment** (2025-09-09T14:19:16Z): I am a bit sad because from a quick scrolling through the PR it did seem good... but the very first thing I am testing and that is mentioned in the commit message is not working... so it kinda shattered my confidence in the rest of the PR as well, as I was trying to rush my review to have this for the freeze.

Anyways, the "circular avoidance" thing that is explained in the commit message does not work at all... I guess we'll need some more code testing to ensure it stays fixed once you'll fix it.

<img width="560" height="125" alt="image" src="https://github.com/user-attachments/assets/ef6017b3-af28-4e7b-b5b0-77db4740b44c" />

Functionally, if it was up to me, I would not make a line of code about this. But @lebl-odoo wants a complete check about it: preventing to create a circular dependency on any level (so even the 5th ancestor :shrug:), because indeed, the user do not have the possibility to see the full tree so it might be better to ensure the tree is not "broken".

So this PR will need some rework and as it introduces new fields, I guess we'll skip 19.0 and target 19.1 as the freeze is about to happen (this was already not sure it would land in 19.0 even if I r+'ed now). I'll stop my review here, we'll make it happen in 19.1.

## PR #224123
URL: https://github.com/odoo/odoo/pull/224123

- **review** (2025-08-26T10:17:56Z): @robodoo r+

## PR #224076
URL: https://github.com/odoo/odoo/pull/224076

- **review_comment** (2025-09-03T08:28:49Z): The "homepage" tours are supposed to be tours that are also shown to the users, for them to discover the builder (first tour launched after the configurator). Now... it has been known to have issues / be outdated (hence why the configurator loading screen is currently hiding the "follow the tour tip" message if I am not mistaken). But let's not pile on the problem: that step is not supposed to be shown to users... and I am not sure how it works in the new system of tours. I was thinking there was a `isActive` key or something like that, but maybe it was changed to be automatic for steps that have no `run`? (like the first step here actually). Could you confirm me that? :pray:
- **review_comment** (2025-09-03T08:34:22Z): In my theme repo review I said:
>  It could be automatic in the registerThemeHomepageTour function definition in website?

Here you don't do that: you only change the definition of the tour for the community repo. You still have to change it automatically for all themes tours (did you run the theme test to confirm it actually checks the bug is solved? I don't think it does... if you run the `test_02_homepage_tour_every_theme` without your CSS change in the themes, it probably passes because it still does not test going to the theme tab on all themes)

So here I am thinking about actually changing the `registerThemeHomepageTour` function itself, to actually add the `goToTheme` steps at the end automatically.
- **review** (2025-09-03T08:34:57Z): @duau-odoo To double-check, I don't think this is right :pray:
- **review_comment** (2025-09-03T10:01:35Z): Then there is another bigger bug: the `test_02_homepage_tour_every_theme` does not run the right test :man_facepalming: It is not supposed to use the *community* "homepage" tour but each individual theme tour of course. That's the whole purpose of the `registerThemeHomepageTour`... OMG:
<img width="1174" height="238" alt="image" src="https://github.com/user-attachments/assets/35c15694-1d37-4038-b3ea-6bc282234d30" />
https://github.com/odoo/odoo/commit/9fe45e2b7ddbbfd0445ffe25a859e67a316d02b2#diff-c7720501ec33f5f92c907d8bb41de50edd832a4564317073e801a6915796a6bdL478

To fix first :pray:
- **review_comment** (2025-09-03T10:27:33Z): Note: in the past, there was even a `saveAs` parameter when you had to register a tour as an override of an existing one... don't know what that changed :shrug:
- **review_comment** (2025-09-03T10:30:08Z): (and it has to be register under the "homepage" name as this is the one that should be displayed to users after the configurator is followed)
- **review_comment** (2025-09-06T13:28:11Z): The guy who adapted this tour during the editor refactoring is really a champion...
<img width="1192" height="333" alt="image" src="https://github.com/user-attachments/assets/e4ef91ef-d95a-4bd3-b679-b48423a60f62" />

Not only the "homepage" purpose was removed without so much of a thought but we kept calling prepend_trigger but removing the prepend text? Damn...

Anyways, removing `prepend_trigger` entirely (especially keeping the function as dead code (although in stable, that's normal)) is not perfect. I think we should restore the prepend_trigger use. That's actually what was checking that we indeed are on the homepage while the tour run no? :grimacing: That might not be critical for the tour *test* but if we do restore the user tour as we should... we don't want to the tour to build a homepage just anywhere I think.

I'll split this commit in two: you are doing different things in the same commit. I'll add a comment about the prepend and I'll create a follow-up task for handling that.
- **review** (2025-09-06T13:49:38Z): (I am changing the PR myself right now)
- **review** (2025-09-06T15:56:50Z): @robodoo r+
- **issue_comment** (2025-09-06T15:58:05Z): @robodoo rebase-ff

## PR #223990
URL: https://github.com/odoo/odoo/pull/223990

- **review** (2025-09-05T20:12:00Z): I have not gone over each detail but I still went over the whole code, this looks clean :+1: I tested (on top of India, LEBL, BVR, ...), seems to work nicely :+1: I only found a minor issue not even related to the work here:
- Add a "Columns" snippet
- Make it a grid
- Drop an inner content inside
=> All grid item there have no control over the background color (acceptable I guess... but a bit weird now that we have this feature).

Let's go :)

@robodoo rebase-ff r+

## PR #223844
URL: https://github.com/odoo/odoo/pull/223844

- **review** (2025-08-25T11:46:09Z): @robodoo r+

## PR #223789
URL: https://github.com/odoo/odoo/pull/223789

- **review_comment** (2025-08-21T15:05:52Z): Maybe it's worth adding precision to that comment. If we already did remove duplicates before, why do we need this? I guess it meant "duplicates" across multiple searches and now you mean duplicates in the same unsplash result? Explain that :wink:
- **review_comment** (2025-08-21T15:08:36Z): Should not we ensure that `this.state.unsplashRecords` never contains duplicates in the first place? Or is it already the case and you just want to convert to a set?
- **review_comment** (2025-08-21T15:11:33Z): - We don't use the one-line syntax
- Confusing to make the `existingIds` list grow without comment, during a filter IMO
- **review_comment** (2025-08-21T15:26:04Z): Based on my comments, I would go with something like this, if I understood things right:

```javascript
const existingIds = this.state.unsplashRecords.map(existing => existing.id);
const newImages = images.filter((record, index, arr) => {
    // Ignore duplicates from previous searches
    return !existingIds.includes(record.id))
        // Unsplash can actually return duplicate in the same batch, make
        // sure to drop those too.
        && arr.indexOf(record) === index);
});
```

But the most important is comments :wink:
- **review** (2025-08-21T15:35:52Z): Commit message:
- Max 72 characters per line
- Mention opw-XXX on the last line (not just in your branch name)

Regarding a potential test addition as you were asking, well, that would be better to have one but I am not the most regarding when it comes to tests addition for such corner cases including a library. If you were to write a test, then the test should not call unsplash anyway: you would have to mock the actual unsplash search. E.g., in a tour, patch the Unsplash class to not make a RPC but simulate a result with a duplicated entry.
- **review** (2025-08-25T09:16:24Z): @robodoo r+

## PR #223773
URL: https://github.com/odoo/odoo/pull/223773

- **review_comment** (2025-08-21T16:03:23Z): Just after this rule there is another `> [data-snippet]`, with `[data-preview-interaction-enabled="true"]`, it's not broken?

Btw what's that `[data-preview-interaction-enabled="true"]` that was added on some snippets and saved with the page :unamused: @bvr-odoo Do you know?
- **review** (2025-08-21T16:03:57Z): Commit message: re-read it, there are sentences I can't read.
- **issue_comment** (2025-08-21T16:04:51Z): https://github.com/odoo/odoo/pull/223773#issuecomment-3210530317 cc @robinlej @SergeBayet
- **review_comment** (2025-08-25T11:49:10Z): ```suggestion
                &[data-preview-interaction-enabled="true"] {
```

Nest the rule instead of duplicating your selector
- **review_comment** (2025-08-25T11:51:40Z): Can we fix that ? :pray: 
- Should be on the t-snippet instruction, not on the snippet definition
- Should definitely not be an attribute saved with the page

I'll add this in the pad so we don't forget
- **review** (2025-08-26T14:47:33Z): @robodoo r+
- **review** (2025-08-27T09:28:37Z): Oh :upside_down_face: 

@robodoo r+

## PR #223616
URL: https://github.com/odoo/odoo/pull/223616

- **review** (2025-08-20T15:35:41Z): Should not we rather keep the crash (and make it a visible crash / traceback btw, how come is it not the case?) and fix the CSS variable? And potentially make sure our test in test_themes that goes through all themes also try switching to the theme tab of each theme?

## PR #223605
URL: https://github.com/odoo/odoo/pull/223605

- **review** (2025-08-20T15:24:48Z): @robodoo r+

## PR #223575
URL: https://github.com/odoo/odoo/pull/223575

- **review_comment** (2025-09-22T15:51:17Z): Is `website` the right location for that code? Surely the problem is the same without website installed?

## PR #223543
URL: https://github.com/odoo/odoo/pull/223543

- **review** (2025-08-20T09:50:33Z): @robodoo r+

## PR #223531
URL: https://github.com/odoo/odoo/pull/223531

- **review** (2025-08-28T07:58:39Z): @robodoo r+

## PR #223499
URL: https://github.com/odoo/odoo/pull/223499

- **review** (2025-09-22T10:54:24Z): @robodoo r+

## PR #223488
URL: https://github.com/odoo/odoo/pull/223488

- **review** (2025-09-22T10:59:15Z): @robodoo r+

## PR #223441
URL: https://github.com/odoo/odoo/pull/223441

- **review_comment** (2025-08-20T08:59:41Z): In stable, use `:where([role="menu"])` if it works. That way you don't change the specificity of that CSS
- **review** (2025-08-20T08:59:59Z): I'll leave the full review / r+ to @bvr-odoo ;)
- **issue_comment** (2025-08-20T14:03:19Z): FYI I asked to try and not change the specificity of selectors in stable if not strictly required, and you just multiplied it by 11 adding `header#top` without `:where`... not critical but any custo customizing the same properties will have a huge chance of being broken :grimacing:

## PR #223276
URL: https://github.com/odoo/odoo/pull/223276

- **review** (2025-08-20T13:40:27Z): FYI @kmagusiak @HydrionBurst Seems like some `context_today()` were changed into `'today'` instead of `'now'`, which caused this kind of issue. Might be worth rechecking, we are only fixing our usecase here.

@robodoo r+

## PR #223268
URL: https://github.com/odoo/odoo/pull/223268

- **review_comment** (2025-08-20T13:19:51Z): "If unsupported, show it"? :thinking:
- **review_comment** (2025-08-20T13:20:33Z): I would at least return false at the end of this method. Not a fan of a method that return a boolean or a string... but at least make it not return undefined ;)
- **review_comment** (2025-08-20T13:21:38Z): `_computeWidgetVisibility` is a readonly method, it is not supposed to change the DOM. Use `updateUI` for that :pray:
- **review** (2025-08-20T16:34:23Z): > If we select in formats a WebP, then a PNG, we still see the quality
option that are meant for the WebP, and inversely if we start with a PNG
the quality option is hidden.

You are actually fixing more than that:
- Drop an text-image snippet
- Replace the image by a PNG image
=> It is converted to WebP but you don't get the quality option :open_mouth: 

Maybe you could precise that in the commit message while at the same time make the fix available for users that don't update? I think you can replace the TODO part in _renderCustomXML to instead add the missing data-name on the element that you already search with `we-range[data-set-quality]` in fact. Instead of removing it. Or we have also `_patchForComputeSnippetTemplates` for that purpose (but not needed just to add the data-name in an existing option like in this case). Note that in 18.4+, you'll be able to change the XML directly and that's it since it's now static XML :)
- **review** (2025-08-21T07:42:48Z): @robodoo r+

## PR #223028
URL: https://github.com/odoo/odoo/pull/223028

- **review** (2025-08-14T14:48:34Z): @robodoo rebase-ff r+

## PR #223010
URL: https://github.com/odoo/odoo/pull/223010

- **review** (2025-08-14T14:24:46Z): @xO-Tx I don't think we need a patch:
- we already have a system for the masonry ones, steps are **initially created** the right way thanks to it
- the tour registration takes a function that returns the steps, I always guess the point was to allow overrides more easily no? That something could be extended **before** that function is called.

So can't it work by:
- exporting `SUB_SNIPPET_TEMPLATES`
- other apps add things inside that
- The use of `SUB_SNIPPET_TEMPLATES` is made **into the function that return the tour steps**.
- **review** (2025-08-14T15:56:16Z): Alright, this looks good, I'll r+ without testing for once. Since it's about fixing a test, I guess I'll know soon enough if something does not work :upside_down_face: 

@robodoo r+

## PR #222548
URL: https://github.com/odoo/odoo/pull/222548

- **review** (2025-10-06T15:11:35Z): Would be great to have the commit message mentions a bit the commits history that lead to this problem :pray: 

@FrancoisGe @divy-odoo This seems linked to the re-implementation of a sub-feature at https://github.com/odoo/odoo/commit/f4230d74c2209d7902df60d9fed91d8000aa267b -> I don't know if you willingly decided to change things when re-introducing the feature or not, I let you check this :pray:

## PR #221876
URL: https://github.com/odoo/odoo/pull/221876

- **review** (2025-08-19T08:59:12Z): You are replacing a problem:
<img width="672" height="115" alt="image" src="https://github.com/user-attachments/assets/e4c01078-2028-4e2c-b6e2-b739aa7b9918" />

By the same problem:
<img width="683" height="116" alt="image" src="https://github.com/user-attachments/assets/c027c5bd-5e50-4b59-90c5-99a7ca05fc9c" />

... how could this have been reviewed and sent for merge? It's a one-line fix that does not change anything about a very reproducible problem :thinking:
- **review_comment** (2025-09-05T17:00:28Z): Max 80 chars per line for comments
- **review** (2025-09-05T17:01:53Z): Max 72 characters per line in the commit message.

I'll trust you with the r+ for this.

@robodoo delegate+
@robodoo delegate=@abz-odoo

## PR #221791
URL: https://github.com/odoo/odoo/pull/221791

- **issue_comment** (2025-08-04T15:26:54Z): @davidmonnom Could you have a look at this and r+ once you get the time? Thanks! :pray:
- **issue_comment** (2025-08-11T11:36:35Z): @davidmonnom Kind reminder :flushed:
- **issue_comment** (2025-08-18T09:18:28Z): Hello @odoo/pos :wave: Anyone could have a look at this please? :pray:
- **review** (2025-08-25T11:11:27Z): Respect is dead :joy: 

@robodoo r+

## PR #221703
URL: https://github.com/odoo/odoo/pull/221703

- **review_comment** (2025-08-28T06:11:08Z): @romo-odoo FYI for next time, when you move/rename a file, you should make a dedicated move commit, otherwise not only you lose the history but you also make all forward-port in that file fail

## PR #221542
URL: https://github.com/odoo/odoo/pull/221542

- **review_comment** (2025-08-05T12:46:44Z): Should be prefixed by `website.` as discussed
- **review_comment** (2025-08-05T12:47:06Z): Max 80 chars per line for comments
- **review_comment** (2025-08-05T12:51:57Z): ```suggestion
        return dict(self.env.context.get(cache_key, {}))
```
- **review_comment** (2025-08-05T12:55:45Z): In the class you start some methods with `_` and some methods without. I think they should all start with `_`, making them not callable from the client-side. Not that important in this case but that way it clearly indicates it is not meant to.
- **review_comment** (2025-08-05T12:56:25Z): You import things you don't need to
- **review_comment** (2025-08-05T12:58:05Z): Missing doc for one arg
- **review_comment** (2025-08-05T13:00:07Z): Missing args too, review all docstring and comments
- **review_comment** (2025-08-05T13:02:18Z): I am surprised this is done here, it should be done in `_render_snippet` IMO
- **review_comment** (2025-08-05T13:03:02Z): Not sure but why in this function only?
- **review_comment** (2025-08-05T13:10:15Z): The change in this file should be in their own commit IMO, I don't think it has much to do with the processor util creation :+1:
- **review** (2025-08-05T13:12:14Z): Quick superficial review, it's looking promising :+1: Can you adapt then I'll have a deeper look tomorrow and I'll test and merge, thanks :pray:
- **review_comment** (2025-08-07T13:02:29Z): Commit messages: max 72 characters per line
- **review_comment** (2025-08-07T13:03:18Z): You are breaking at <60 characters per line. Use 80 for comments.
- **review_comment** (2025-08-07T13:04:51Z): Actually, Odoo is supposed to use the `:param`, `:return:`, etc syntax. It is even more important now as this is the one required for the new `/doc` feature to work (even if at the moment `AbstractModel` ones are not listed in there).
- **review_comment** (2025-08-08T06:24:43Z): Still should be done in `_render_snippet` IMO but this can wait. In the end, it was already like that before your PR.
- **review_comment** (2025-08-08T06:28:13Z): Why suddenly switching variable here? Can't you keep using `current_processor`?
- **review_comment** (2025-08-08T06:35:12Z): Looks like the "if not stuff return" could be done before the call to `_get_processing_cache`
- **review** (2025-08-08T07:42:36Z): New batch of comments, after that it should be good to go. At least the community part, I did not look at the enterprise part yet (I'll have a quick look now).

Note: I tested this community part, it seems to work well :clap: But in the end, not sure if this is really required to merge this this week: it just seem like a risk for the community days next week, now that you merged the AI work without this anyway. But once you adapt here, I'll r+ today, then I'll leave the r+ of the enterprise part to you so you can decide what's best (waiting next week or not).

Ping me once ready :pray:
- **issue_comment** (2025-08-08T13:54:06Z): As you guessed, I think that's best too. They can do their demo without this technical refactoring :+1:
- **review_comment** (2025-08-08T13:58:04Z): In the other methods you always start with `updated_process` it seems: 
<img width="289" height="59" alt="image" src="https://github.com/user-attachments/assets/56d37321-e00a-45b5-887c-5828159d3c14" />
I am just stating that you exactly could do the same here, starting with update_processor first *before* the loop. But that's fine, I am just nitpicking :shrug:
- **review_comment** (2025-09-07T06:30:53Z): I'll push-force to fix this kind of linting problem, imports in python outdated after code removal, typo, ...
- **review_comment** (2025-09-07T13:35:48Z): > snippet_key = website._get_snippet_view_key(snippet, page_code)

You must have had a conflict when rebasing here at some point and you ignored it... that makes me less confident to trust the rest of your changes without a deeper review :grimacing: The eCommerce team added the `_get_snippet_view_key` apparently, to support snippets from other apps.

=> To fix :pray:
- **review_comment** (2025-09-07T13:38:45Z): See comment on the enterprise PR for more details: you should not change the whole dialog class in fact (even replacing by one that extends our base one), you should path the base one in place.
- **review** (2025-09-07T13:54:58Z): I was planning to have this merge today but actually, there is still a problem in the adaptation here + the patching in enterprise needs further work (see enterprise PR). Let's make it happen this week :pray: Thanks :pray:
- **review** (2025-09-08T16:40:58Z): Seems good, and I retested, seems good to go. I just had to push-force because the second commit message was not adapted and still mentioned the `getConfirmDialogClass` hook and stuff. I took profit of the push-force to rebase and also use the 72 characters per line and add the missing task-XXX in commit messages in both PR.

@robodoo rebase-ff r+

## PR #221524
URL: https://github.com/odoo/odoo/pull/221524

- **review_comment** (2025-08-12T09:48:51Z): I am not sure why this would be a specific problem of the image gallery block. In other cases, how does it magically works? I am guessing it depends on the container display, it's probably flex here and it works in other places where it's not flex? But then you are only fixing it for this one while it should work for all flex containers. Actually with a bit of research I found this: https://github.com/odoo/odoo/commit/14bcdbc6f541b573a2de7b639fde27f3751c9b49 -> it was probably fixing the alignment option when the container is flex... but probably left the link case broken.

Also I don't think that forcing 100% width is actually good: it means that clicking around the image also follow the invisible link.

The solution is probably about making the link adapt according to the alignment option somehow. The ideal way would be using display:contents on the link and be done with it, but that probably does not work on all browsers and screen readers.

I let you investigate.
- **review_comment** (2025-08-18T10:44:37Z): As I explained in details, the current solution is not good:
1. It fixes a generic problem (all images in a flex environment have the same issues) in a very specific way (only in the CSS for the gallery snippet)
2. It is functionally not great: if I have a 50x50 image I don't want the whole carousel to be a link

This should rather be about adapting the link / alignment options to adapt the link element properly.

## PR #221505
URL: https://github.com/odoo/odoo/pull/221505

- **review_comment** (2025-08-18T09:40:09Z): `--o-ccX` CSS variables are not designed to be used like that. I was not even sure they were available to visitors TBH but I guess we could go that way anyway while waiting for https://www.odoo.com/odoo/all-tasks/3770405 ...

... but the minimum would be to make o_cc1 behave like not o_cc at all. Reminder: the o_cc1 class only purposes are:
- Be able to reforce color preset 1 inside another colored contained
- Force the o_cc1 background above the default body background image

So the base definition of `.o_dot` should include the right color forcing, base on a bootstrap variable (I guess `$primary` or something like that).
- **review_comment** (2025-08-18T09:41:59Z): To see if really wanted after my previous comment's request (acceptable but not sure it is needed).
- **review_comment** (2025-08-18T17:17:15Z): > start loop from 2

Why? You break the "Be able to reforce color preset 1 inside another colored contained" part of my explanation if you do that.

Have a snippet (A) which contains your timeline snippet (B). Add o_ccX to A, and o_cc1 to B => you get the dot color of o_ccX and nothing from the inner o_cc1.

<img width="1630" height="896" alt="image" src="https://github.com/user-attachments/assets/e5127284-59e0-481b-b3a8-f405519f1178" />
- **review** (2025-08-19T12:02:28Z): @robodoo r+

## PR #221458
URL: https://github.com/odoo/odoo/pull/221458

- **review** (2025-08-07T09:03:40Z): @robodoo r+

## PR #221448
URL: https://github.com/odoo/odoo/pull/221448

- **review** (2025-08-07T08:55:25Z): @robodoo r+

## PR #221305
URL: https://github.com/odoo/odoo/pull/221305

- **review** (2025-07-31T08:49:49Z): @robodoo r+

## PR #221246
URL: https://github.com/odoo/odoo/pull/221246

- **review_comment** (2025-09-11T11:39:18Z): Remove the `(`, it's not very pythonesque :upside_down_face:
- **review_comment** (2025-09-11T11:43:16Z): You should never duplicate some code, especially when using `filtered`
- **review_comment** (2025-09-11T11:49:34Z): I don't understand why this PR would need to change this function
- **review_comment** (2025-09-11T11:49:46Z): General question before reviewing further: do we really need to change the js <-> python communication for this feature? Can't we track things that are being changed on the client side only (when the JS function calling those python controllers are called)?

It seems weird to say on the client side:

- Hey python, change from x to y, and tell me what changed
- ... well it was x, now it is y
- Ok I'll know I have to revert to x

While you could just say
- Hey python, change from x to y, I'll remember it was x

## PR #221240
URL: https://github.com/odoo/odoo/pull/221240

- **review_comment** (2025-07-31T09:07:12Z): `t-attf-` are normally translated: if not, that's the bug that should be fixed here
- **review** (2025-07-31T09:12:06Z): Most of those moves to the JS are annoying IMO. To avoid having to jump between the JS and the XML just to see some labels, I would rather:
- Use `t-attf-` when you can
- Use a `t-set` otherwise

But if someone prefers to go fast and merge like this, that's fine by me too.

## PR #221202
URL: https://github.com/odoo/odoo/pull/221202

- **review_comment** (2025-08-20T11:30:11Z): I don't like the `fully_editable` name, I'd go with a simpler `is_designer` (in that order: `editable = is_designer = ...`). That way the condition a few lines below will be `if editable and is_designer:` rather than `if fully_editable and editable:` which looks weird.

Or `has_group_designer` to do like the variable below, as you prefer.
- **review_comment** (2025-08-20T11:32:04Z): Enforce max 80 chars per line for comments. And fix the english and add a point at the end of the sentence please :pray:
- **review_comment** (2025-08-20T11:44:52Z): Not sure about those steps:
- Is the first step required given the fact that the second one just checks it's not o_editable?
- Dirty has nothing to do with this test

I would go with an unique step like this:
`iframe :has(.o_editable) footer:not(.o_editable):not(:has(.o_editable))` => this is the most robust way to write this I think, independently from where the `o_editable` class might end up:
- it ensures the check is only done when one o_editable has been added somewhere
- It checks the non-presence of `o_editable` anywhere in the `footer` tag
- **review** (2025-08-20T11:45:35Z): Nitpick: commit message should mention the test_website app
- **review** (2025-08-21T14:20:54Z): @robodoo r+

## PR #221200
URL: https://github.com/odoo/odoo/pull/221200

- **review** (2025-08-04T13:30:21Z): @robodoo r+

## PR #221057
URL: https://github.com/odoo/odoo/pull/221057

- **review** (2025-09-08T12:32:30Z): @robodoo rebase-ff r+
- **review** (2025-09-09T11:41:46Z): @robodoo r+

## PR #221047
URL: https://github.com/odoo/odoo/pull/221047

- **review_comment** (2025-09-22T13:23:03Z): Could you mention in the commit message what you are trying to fix (ideally, steps to reproduce the issue)? The community does not have access to opening the task :upside_down_face: And without opening the task, I lost some time trying to check how it affects popup buttons... well it does not :upside_down_face:
- **review_comment** (2025-09-22T13:33:30Z): From what I see, bootstrap has this:
```scss
@mixin btn-close-white() {
  filter: var(--#{$prefix}btn-close-white-filter);
}

.btn-close-white {
  @include btn-close-white();
}
```

1. I think the minimum would be using their mixin, that will be more robust to future bootstrap lib changes. But maybe it's even better to do `@extend .btn-close-white;` (while I normally don't recommend extending non-placeholder selector, it seems quite controled here). I let you choose :+1: 

2. Instead of `unset` being repeated for potentially all 5 cc classes, put the rule in the `.o_cc {` CSS rules, that's the point of those ;) And that will later be further optimized with task-3770405
- **review_comment** (2025-09-24T11:27:50Z): - `unset` for o_cc
- `filter` (or not, depending on `$-bg-color`) for o_ccX

## PR #220843
URL: https://github.com/odoo/odoo/pull/220843

- **review** (2025-07-30T11:20:11Z): @robodoo r+

