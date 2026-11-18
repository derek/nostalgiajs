# AGENTS.md: Nostalgia.js

Instructions for AI agents and humans working in this folder. Keep this file current: if you change a convention, change it here in the same commit.

## What this is

Nostalgia.js is a collection of essays on web history, with the tagline "Essays on the Early Web". Served by GitHub Pages and published at `https://derek.io/nostalgiajs/`. The GitHub Pages address `https://derek.github.io/nostalgiajs/` redirects there, so every canonical link, feed link and link-preview tag uses the derek.io address. The essays cover the web from the 1990s through the 2010s, mostly through JavaScript, and include the people and culture of that time (careers, communities, arguments) as well as the technology. An essay may run up to the present when its story does.

Audience: JavaScript and web developers aged 40 to 60 in Derek's community, many of whom lived this history. The essays are written by an AI. Derek Gathright edits the collection and picks most of the topics.

These are essays, not blog posts. They are not dated, they do not say "today" or "this week", and the site does not promise a schedule. Say "essay" and "collection", never "post", "blog" or "daily".

The site was first called Boomer.js and then, briefly, View Source. `../boomerjs/` and `../view-source/` now hold only redirect pages to the new addresses. Leave them alone.

## Hard rules

1. **Stay in this folder.** Do not edit anything outside `nostalgiajs/`.
2. **No dependencies.** One build script in plain Node, no npm packages, no frameworks, no CDN scripts, no web fonts. The published pages use no JavaScript, with two exceptions that the build writes into every page's `<head>`: the Google Tag Manager loader (`gtm.js` from `googletagmanager.com`) when `GTM_ID` is set in `scripts/build.mjs`, and the GoatCounter page-view counter (`count.js` from `gc.zgo.at`) when `GOATCOUNTER` is set there. The only tracking allowed is those two: what Derek configures in that GTM container, which is intended to be Google Analytics 4 only, and GoatCounter's page counts. Do not add any other script, tracker or pixel to the site or to the container.
3. **Never edit generated files by hand.** A hand edit is silently lost at the next build. The landing page's intro sentence lives in `scripts/build.mjs`, and the About page's text lives in `content/_about.html`. `index.html`, `feed.xml`, `about/index.html` and every `essays/<slug>/index.html` are written by `scripts/build.mjs`. Change the sources (`essays.json`, `content/`, `style.css`, the script) and rebuild. Commit the generated files with the change, because GitHub Pages serves this folder as it is.
4. **No author name, and one quiet disclosure.** The essays have no byline and the author has no name. The tagline does not mention it, but the landing page's intro sentence and the About page say the essays are written by AI. Do not add disclaimers, apologies or "as an AI" asides to an essay.
5. **Never invent facts.** No made-up quotes, statistics, version numbers, release dates, people or anecdotes. Open a real source for every date, version, quote and attribution before you write it. Quote people only in words you have seen on the page. If you cannot confirm a claim, drop it or state it less firmly ("around 2001", "by the early 2000s"). Label your own interpretations ("my best guess", "I'd argue"). Code samples must be real code from the period or code that runs as shown, not pseudo-code in disguise.
6. **Never claim personal memories.** Do not write "I remember writing this" or invent a past. Do not dwell on the absence either: no "I wasn't there" or "the people who were there will know". Tell the story with the confidence of someone who did the reading. Use "you" for the developer's experience.
7. **No punching down.** Gently roasting a technology is fine. Mocking the people who used it is not. Most of them shipped real products under real constraints.
8. **Do not assume anyone's gender.** Refer to people by name or with "they" unless a source you opened states their pronouns.

## Voice

One consistent voice across every essay: first person, dry, warm, curious and a little self-deprecating, like the funniest person at a user group who also reads the spec. "I" is for opinions and judgments, never for memories. Contractions, plain words. One joke per section is plenty. Avoid corporate filler, listicle hype, emoji and the "It's not X, it's Y" pattern. Respect the reader's time: no padding. The essay should feel like a learning journey, of someone who only knew fragments of the history, but through the research, discovered new facts they found surprising. Curiosity and reverence for history is paramount.

## Is there a story?

An essay here tells a story. A collection of facts, dates and other people's opinions about a topic is a report, and reports do not get published. Decide which one you have after the research and before you write.

**What a story needs**

1. **Someone who wanted something.** A person, a team or a company with a name, doing something for a reason: Flanagan writing a book about a language still in beta, a commuter working out that a web page can spy on its reader, a designer publishing a joke. A technology on its own is not a protagonist. Find who made it, who fought it or who was stuck with it.
2. **Trouble, and a turn.** Something went wrong, surprised people or changed direction, on a date you can name. If nothing in your notes can be introduced with "and then", you have a timeline.
3. **Stakes the reader felt.** Why it mattered at the time to someone doing the work: a site went blank, a job title disappeared, every effect had to be written twice.
4. **An ending.** Where it stopped, who won, what gave way. "It is still used today" is a status, not an ending.
5. **Something you did not know.** At least one discovery from the research that surprised you and will surprise a reader who was there. It should come from a source, not from your own framing.

**The two-sentence test.** Write the story as: "X wanted Y, but Z happened, so W." Then write what the reader will know at the end that they did not know at the start. If either sentence comes out vague ("JavaScript had many quirks that developers discussed"), there is no story yet.

**Signs you have a report, not a story**

- Your notes are mostly what people said about the thing, and little of what anyone did.
- No named person makes a decision anywhere in the outline.
- The sections could be put in any order without loss.
- The sources are commentary and retrospectives, with no artifact from the time (code, a release note, a bug report, a post, a page).
- The draft goes "A said this. B said that. C disagreed."

**Quotes are evidence, not narration.** Tell the story in your own sentences and quote to prove a point or to let a voice be heard: a line that is funny, exact or revealing. Paraphrase the rest, with attribution. As a guide, no more than one quotation in a paragraph and one block quotation in a section, and never two quotations back to back with only "X wrote" between them.

**If there is no story, stop.** First try to rescue it once: narrow to a single episode or person, or widen to the event the topic was part of. If it still fails the test, do not write the essay. Cancelling is a good outcome and costs less than publishing something dull. Then:

- Move the topic's line in `TOPICS.md` to the "Parked" list, with one sentence on why and one on what would change the answer (a source you could not open, a person whose account is missing, a better angle).
- Publish nothing and commit only the `TOPICS.md` change.
- Report what you found. The research is not wasted: say whether any of it belongs in another essay.

The same applies later. If the finished draft or the reviewer shows that the essay is quotations strung together, cut it back to the story or cancel it. Derek's "Up next" picks can be parked too; he will see why and can overrule.

## Essay shape

Target 2,200 to 3,000 words of prose (about 10 to 13 minutes, plus code). Readers are experienced developers, so go deep and skip the basics. Every essay has, in this order:

1. **Lede and hook**: a one-sentence lede, then a concrete artifact (a line of code, a tag, an error message, a product name), not a generic intro.
2. **Setup**: what the world looked like before, so the change makes sense.
3. **What happened**: the facts, in order, with the real code from the time. Show the mechanism, not just the headline.
4. **Why**: the forces behind it (market, standards, engines, tooling, money). Give each force its own paragraph. This is the part readers will argue with, so be fair.
5. **How people coped**: the workarounds, tools and culture around the problem.
6. **What became of it**: connect the story to the present by reporting what happened next. Pick the form that fits this story, and say so in the heading:
   - **Where it went**, when the thing scattered: follow each piece to where it is now ("Where the shelf went", "Where the unicorns went").
   - **What survived**, when part of it is still running: show the old thing at work today ("What survives of the hashbang").
   - **Who inherited it**, when it was displaced: name what took over each of its jobs ("Who inherited the mailbox").
   - **What it cost**, when the story turns on a mistake: the bill that came due later, such as a fix that caused the next problem.

   Whichever form you choose, give two to four findings, each specific and traceable to a source, and each opening with a plain sentence that states it ("The reference section moved to the web", "The bookmarklet turned into the extension"). At least one should be something the reader probably has not met. This is reporting, not a list of lessons; save the judgment for the takeaway. The four names above are forms, not headings: the heading names this essay's subject.
7. **The takeaway**: a final section under the heading "The takeaway", one or two paragraphs that state the essay's conclusion outright. A reader who skips to the end should get the point. Where you can, close by returning to the artifact the essay opened with, as it stands now. Never end on a code block, a list or a question to the reader.
8. **Sources and further reading**: the last thing in the essay.

Section headings should describe the content of this essay. The list above is the order of ideas, not a set of headings to copy, apart from "The takeaway". Name the thing in the heading and never use "it": write "Where the reference pages went" or "After Firebug", not "What it left behind", "Why it worked" or "Living with it". A reader scanning the contents list should be able to tell this essay from every other one.

The order can bend to fit the story. If the trouble is the best way in, start there; if "how people coped" is one paragraph, fold it into another section. What may not go missing is the hook, the turn, the afterlife and the takeaway.

**Link your sources.** When an essay mentions an essay, blog post, spec, book or project site, link it inline at the mention and list it again under "Sources and further reading" with author and year. Only link URLs you have opened and confirmed load and say what you claim. If you cannot open a source, name it without a link. Link to other Nostalgia.js essays as `../their-slug/` where they are relevant (essays are siblings under `essays/`, so the relative link works).

## Files

| Path | What it is |
| --- | --- |
| `essays.json` | The list of published essays. The single source of truth for titles, topics, eras and order. |
| `content/<slug>.html` | The body of one essay, as an HTML fragment. |
| `content/_about.html` | The body of the About page. |
| `archive.json` | Internet Archive copies of source links, filled in by `scripts/archive.mjs`. |
| `og/*.png` | Link-preview cards, drawn by `scripts/og.mjs`. |
| `style.css` | The one stylesheet. |
| `icons/<slug>.txt` | One pixel icon per essay, as a 32x32 text grid. `icons/topic-<topic>.txt` are the fallbacks used when an essay has no icon of its own. (GitHub Pages does not serve files whose names start with an underscore, so never name a published file that way.) |
| `berry.gif`, `berry.png` | The animated mascot shown in the header, and its still frame. |
| `buttons/*.png` | The three 88x31 footer buttons, drawn by `scripts/buttons.py` (needs Python with Pillow; run only to change them). |
| `scripts/build.mjs` | Generates every page, the landing page and the feed. |
| `TOPICS.md` | Essay ideas, with Derek's "Up next" queue at the top. |
| `research/<date>/` | Working research notes and reports, as Markdown. Not essays, and not checked like essays. `research/index.html` is a hand-written page that lists them; add a section to it when you add a dated folder. It is not linked from the site and not written by the build. |
| `essays/<slug>/index.html`, `index.html`, `about/index.html`, `feed.xml`, `icons/*.svg` | Generated. Do not edit. |

### An entry in `essays.json`

```json
{
  "slug": "jquery",
  "title": "jQuery 1.0: what $ really replaced",
  "description": "One sentence, used on the landing page, in link previews and in the feed.",
  "topic": "libraries",
  "era": [2005, null],
  "published": "2026-11-12T04:41:10+00:00"
}
```

- `slug`: one to three lowercase words joined by hyphens, named for the subject (`jquery`, `ie6-funeral`, `xmlhttprequest`), not the title. It is the essay's address (`/essays/<slug>/`) and the name of its `content`, `icons` and `og` files, so never change it after publishing. No dates in slugs.
- `topic`: one of `browsers` (Browsers and the platform), `language` (The language), `libraries` (Libraries and tools) or `people` (People and culture). The landing page groups essays by topic.
- `era`: the years the story covers, `[start, end]`, or `[start, null]` when it runs to the present. Shown on the page as "1997 to 2001" or "2005 to today", and used to order essays within a topic.
- `published`: the real UTC time the essay was first published, as an ISO date-time. It is used only inside the RSS feed. It is never shown on a page, and never changed afterwards.
- `related` (optional): up to three slugs to list first under "Related essays". Without it, the build picks essays from the same topic and the nearest era.
- `unverified` (optional, but expected on new essays): a list of plain sentences, shown near the end of the essay under "What I couldn't verify". See below.
- `corrections` (optional): a list of `{ "date": "2026-12-01", "note": "What changed." }`, shown at the end of the essay.

### A content fragment

`content/<slug>.html` starts with `<p class="lede">…</p>` and ends with the sources section. It contains no `<h1>`, no title, no date, no byline and no navigation; the build adds those. Copy the shape of an existing fragment, including the sources section:

```html
<section class="sources" aria-labelledby="sources-h">
  <h2 id="sources-h">Sources and further reading</h2>
  <ul>
    <li><a href="https://example.org/page">Title of the source</a>, Author, 2006</li>
  </ul>
</section>
```

Code goes in `<pre tabindex="0"><code>…</code></pre>` with `&lt;`, `&gt;` and `&amp;` escaped. About 35 characters fit across a 375 px screen; longer lines scroll inside the `pre`, which is fine, but keep the opening snippet within 35 so the hook is never clipped. Do not bend period code out of shape to fit.

### What the build adds to an essay

You write only the fragment. The build adds the title with the essay's icon, a "Contents" list made from the fragment's `<h2>` headings, "(archived)" links beside sources, the "What I couldn't verify" box above the sources, the "Spot a mistake?" box with "View source" and "Edit history" links to GitHub, and the related essays. Because the contents list is built from the headings, keep each `<h2>` short and specific, and do not put links inside headings.

### What I couldn't verify

Every essay tells the reader plainly where its evidence is thin. Put these in the essay's `unverified` list in `essays.json`, one plain sentence each, in the essay's first-person voice:

- a claim that rests on a single source, or on Wikipedia or another secondary summary instead of the original
- a source you could not open, and what you linked or left out as a result
- dates or details where sources disagree
- anything in the essay that is your own inference or guess

Take them from your research notes and from the second-pass review. Three to five entries is typical. Do not list things you simply cut. If there is truly nothing, leave the field out.

### Icons

Each essay has a small pixel icon, shown beside its title and on the landing page. It is drawn as text in `icons/<slug>.txt`: exactly 32 lines of exactly 32 characters, one character per pixel. A dot is transparent. The colours are:

| Char | Colour | Char | Colour | Char | Colour |
| --- | --- | --- | --- | --- | --- |
| `K` | black | `W` | white | `S` | silver |
| `D` | dark grey | `N` | navy | `n` | light navy |
| `B` | blue | `C` | pale blue | `T` | teal |
| `G` | green | `L` | lime | `R` | red |
| `M` | maroon | `Y` | gold | `y` | pale yellow |
| `O` | orange | `o` | dark orange | `P` | purple |
| `p` | violet | `E` | beige | `e` | dark beige |
| `b` | brown | | | | |

Draw it like a Windows 95 desktop icon: one clear object that stands for the essay's artifact (a calendar page for `getYear()`, a bug for Firebug), a one-pixel black outline, flat colours, a pixel or two of empty margin, and no text beyond a few characters. Read two existing icon files first to see the style. After the build, open `icons/<slug>.svg` in the browser and look at it at 48 px. If you cannot get a clear, recognisable icon, delete the file: the build then uses the topic's fallback icon, which is better than a muddy drawing.

## Commands

Run from the repository root. Needs Node 22 or newer. There is nothing to install.

| Command | What it does |
| --- | --- |
| `npm run build` | Validates `essays.json` and the fragments, then regenerates every page and the feed. |
| `npm run archive` | Looks up an Internet Archive copy for each source link and records it in `archive.json`. Add `-- --save` to ask the archive to capture pages it does not have. Needs network access. |
| `npm run og` | Draws the link-preview cards. Add `-- <slug>` to draw one. Needs Playwright with Chromium. |
| `npm run serve` | Local server on port 8000. Open `/`. |

## Adding an essay

1. Pick the topic from `TOPICS.md`: the first item under "Up next" if that list has any, otherwise your choice from the lists.
2. Research. Open the sources and collect the exact dates, versions and quotes you will use.
3. **Story check.** Apply "Is there a story?" above. Write the two-sentence test and name the protagonist, the turn, the ending and the surprise. If you cannot, try one rescue, and if that fails, park the topic and stop.
4. Write `content/<slug>.html` and add the entry to `essays.json`. Draw the essay's icon as `icons/<slug>.txt`.
5. **Second-pass review.** Have a separate reviewer (a subagent that has not seen your research notes) read the finished fragment and do two things. First, the fact check: reopen every linked source and try to find errors: wrong dates, versions, quotes that do not appear on the page, claims the source does not support. Second, the story check: say in two sentences what the story is, name any section that could be cut without losing it, and flag any stretch that is quotations strung together. Fix or cut everything it finds. Do not skip this, even when you are confident. Then fill in the essay's `unverified` list.
6. Delete the topic's line from `TOPICS.md` and renumber "Up next". Add any good new ideas to the lists.
7. Run `npm run archive`, then `npm run og -- <slug>`, then `npm run build`.
8. Check the new essay and the landing page at 375 px wide: no horizontal page scroll, no console errors, no broken local links.
9. Commit everything, generated files included, with the essay title in the message. List in the commit body anything you could not verify.

## Correcting an essay

Readers report mistakes through the "Spot a mistake?" link, which opens a GitHub issue. Check the report against a source before changing anything. Fix the fragment, and if the fix changes what the essay says (a date, a name, a claim), add a `corrections` entry to `essays.json` with the date and a one-sentence note. Typos need no note. Rebuild and commit.

## Site conventions

- The look is a tidy late-1990s homepage: navy title bar with a gold rule, pale yellow link strip, navy section bars, Verdana body text, Georgia headings and yellow code boxes, in web-safe colours. Simple and old, never busy: no backgrounds, counters or marquees, and no badges beyond the three 88x31 buttons in the footer and the small orange feed icon beside the RSS link. It is light only, with no dark mode.
- The animated berry in the top-right corner (`berry.gif`, with `berry.png` as the still shown to readers who ask for reduced motion) is the site's mascot. It is the only animation on the site. Its hover text is "'member when...? Yeah, I remember!".
- Colours are tokens in `:root`. Body text is 17px Verdana with at least 4.5:1 contrast. The audience reads with their glasses on, so do not make it small.
- Semantic HTML, a visible focus style, `lang="en"`.
- Links inside the site are relative so it works under `/nostalgiajs/` and from a local server. The feed, canonical links and link-preview tags use absolute URLs, which they require.
- Everything from `essays.json` is HTML-escaped by the build. Keep it that way.
- Copy style: short sentences, plain words, no hype.

## Branches and PRs

Develop on the branch you were given. Do not open a PR unless asked. When you open one, list anything you could not verify.
