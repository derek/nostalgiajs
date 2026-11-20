# Research: rejected ideas on www-style (1995-2012) and www-html (1995-2004)

Researcher notes for the "rejected ideas" essay. Beat: www-style and www-html mail archives at lists.w3.org, plus the W3C NOTE / WD pages those threads were about. Everything below was opened in this session (2026-11-20). Saved page text is in `work/rejected-ideas/sources/www-style-<name>.txt` (first line of each file = URL). Subject indexes for every month (www-style 1996-2012, www-html 1996-2004) are saved raw in `sources/idx/`.

Message URL pattern: `https://lists.w3.org/Archives/Public/<list>/<YYYYMon>/<NNNN>.html`. Dates are the message's own Date header unless noted; the archive indexes sometimes show the UTC day instead, which can differ by one day.

Ranking of depth: A = story-grade (artifacts + named people + turn + afterlife), B = solid but thinner, C = lead only.

---

## A1. The parent selector: `:subject`, `:matches()`, then `:has()` (1999 to 2022)

**Idea:** style an element based on what it contains, the thing CSS authors asked for for twenty years.

**Proposals (all in the archive):**

1. Tue 30 Nov 1999, David Wagner asks (www-style/1999Nov/0235, source `www-style-parent-1999nov-0235.txt`): "Is there any particular reason there is no parent selector (say: <) to select the parent of an element?" Example given: `DEL<P, INS<P {border-left: thick red solid;}`. He also says he "needed a little JavaScript hack to apply a style to the parent of an element". He guessed the cost himself: "The drawback I can think of is the style would have to be applied after the UA reads the entire element to determine its contents".
2. Same day, Daniel Glazman (editor of Selectors) answers (0236): "Yes it is. I think that you'll be happy reading the W3C Selectors Working Draft [1]. It introduces the :subject selector. So selecting a P that contains a DEL is written `P:subject > DEL`". The first public WD of CSS3 Selectors is dated 3 Aug 1999 (URL in Glazman's 2003 message, below).
3. Same day, Ian Hickson (www-style/1999Nov/0241) objects to the syntax and proposes a functional pseudo-class. His table (copied exactly):
   ```
   1. As A Parent Selector
      Proposed syntax:  x:matches(> y)
      WD syntax:        x:subject > y
   3. Inverse Direct Adjacent Selector
      Proposed syntax:  x:matches(+ y)
      WD syntax:        x:subject + y
   5. Selecting Elements Which Contain Certain Other Elements
      Proposed syntax:  x:matches(y):matches(z)
      WD syntax:        /* not possible ? */
   ```
   His complaint about `:subject`: "the :subject selector _always_ applies -- in fact, it has no relevance whatsoever to matching the document tree, it merely changes the resulting meaning of the complete selector." And "as a _selector_, it should be selecting something".
4. Glazman 1 Dec 1999 (www-style/1999Dec/0000) on negation: "There are no "negative" selectors. You have to use the cascade."
5. Wed 29 Nov 2000, Dylan Schiemann asks (www-style/2000Nov/0081): "Has there been any thought given to adding parent selectors?" with `span < div {width:100%;}`. Glazman replies (0083): "In the current Working Draft, this is achieved using the :subject pseudo (I know, it's a bad syntax, but the idea is here)." After Schiemann floats alternatives, Glazman (0087): "Agreed. I have to say that I find your suggestion very interesting. Thanks a lot. I'll discuss it with the other editor of the draft and with the WG."
6. Fri 24 Jan 2003, Chris Hubick, "RFE: CSS3 Selectors: Parent combinators" (www-style/2003Jan/0278): `h < section { padding-top: 0; }`. Hickson replies 25 Jan 2003 (0279): "A frequent request, and one that is subsummed by my :matches() proposal. The main reason CSS doesn't already have this is that it is significantly more performance intensive to go down the tree than it is to go up. (In the case of "<", you have to check every child of the element, instead of just the parent as you do for ">".)"
7. 5 May 2003 Glazman (www-style/2003May/0021): "The :subject pseudo-class was in the first public WD [1] for this module but was later removed because of implementation problems in dynamic environments. It does not mean we dropped the feature forever." He adds he implemented it "in static environement" in "my tool CSSize based on a tranformation language called STTS".
8. 21 Jan 2010 "Proposal: parent selectors" (www-style/2010Jan/0473 onward, 19 msgs). Tab Atkins Jr. (0474): "The general case is implemented in jQuery by the :has() pseudoclass... Unfortunately, while this is reasonable to implement once you have the entire page built and ready like jQuery does, it breaks some very important optimizations if you're trying to match selectors to elements *while* the page is being built". Boris Zbarsky (0483): "They're asking for a feature where one has to constantly track which nodes match the selector in the face of DOM mutations. That's something jquery does NOT do last I checked." and "DOM mutations happen after the document has loaded. On some sites, every 10ms, forever."
9. 11 Jun 2011 (www-style/2011Jun/0341, "[CSS4 Selectors] :has()"): Brian Kardell, quoted by Alan Gresley, says `has()` "as presented by Ian and implemented in jQuery for some time" is "infinitely more intuitive/readable" than the `!` subject-indicator notation, which his eight CSS-literate test readers took as "that means not".

**What killed it:** performance in a browser that matches selectors while the page streams in and that must keep matching after DOM changes. (Sources: Hickson 2003, Glazman 2003, Atkins and Zbarsky 2010.) Not taste, not specificity.

**Afterlife:** WebKit blog (author not captured in my saved text); page is "Using :has() as a CSS Parent Selector and much more", dated Aug 18, 2022 (`www-style-webkit-has.txt`). Quote: "Over the last twenty years, the CSS Working Group discussed the possibility many, many times. The need was clear and well understood. Defining syntax was a doable task. But figuring out how a browser engine could handle potentially very complex circular patterns, and get through the calculations fast enough seemed impossible." And: "The WebKit team shipped :has() in Safari Technology Preview 137 in December 2021, and in Safari 15.4 on March 14, 2022. Igalia did the engineering work to implement :has() in Chromium, which will ship in Chrome 105 on August 30, 2022."

**Odd trail inside the archive:** Glazman's own 1998 STTS3 Note already had a "selected element selector": `AUTHOR:selected() > FIRSTNAME { .... }` ("Declarations contained in the first rule apply on all AUTHOR which contain a FIRSTNAME"). Source `www-style-stts.txt` (W3C Note 11-Nov-1998, Daniel Glazman, Electricité de France). In Dec 1999 Glazman says the original STTS3 syntax was a leading "!" ("the subject of the selector was indicated by a leading descriptor "!"", www-style/1999Dec/0007).

**Evidence strength:** strong (primary messages, all opened). The dates 2021/2022 rest on the WebKit blog only; I did not open a Chrome or Mozilla source. Author of the WebKit post not captured.

**Protagonists with names:** Daniel Glazman (Netscape/EDF; wrote `:subject`), Ian Hickson (`:matches()`), Dylan Schiemann (asked in 2000), Tab Atkins Jr. and Boris Zbarsky (2010 explanations).

---

## A2. Behavior in CSS: Action Sheets, HTML Components and BECSS (1998 to 2014)

**Idea:** attach script behaviour to elements from the style sheet, so an HTML or XML document needs no `onclick` attributes.

**Artifacts:**

- **Action Sheets**, W3C NOTE-AS-19980619, 19 June 1998. Authors: Vidur Apparao, Brendan Eich, Ramanathan Guha, Nisheeth Ranjan (all Netscape). Abstract: "Action sheets provide a mechanism for separation of event-based behavior from the structure of HTML and XML documents. This is similar to the way in which style sheets provide a separation between visual presentation properties and document structure." Syntax of its "CAS" action system, copied exactly (`www-style-actionsheets.txt`):
  ```
  #CreditCard { onChange:    "validate(this.value)" }
  A *[HREF]   { onMouseDown: "this.style.fontColor = 'magenta'" }
  .HelpItems  { onMouseOver: "showTip(event)" }
  ```
  and an action sheet file: `.collapsible { onClick: "changeVisibility(event)" }` in an `<action type="text/cas" codetype="text/javascript">` element, linked with `<?xml:actionsheet type="text/act" href="actions.act"?>`. Its stated rationale: "Many current web pages look more like full-fledged software programs than declarative specifications of document structure."
- **STTS3** (above) mentions "STTS, HTML, CSS, CAS" (CAS = the Action Sheets language) in its own section heading list. Glazman's tool worked across all.
- **Microsoft HTML Components (HTC):** `https://www.w3.org/TR/NOTE-HTC` is a 404 today (see Could not open). Known only through BECSS's description: "DIV#eagle { behavior : url(http://www.w3.org/bhv/eagle.thc) }".
- **BECSS, "Behavioral Extensions to CSS", W3C Working Draft 04 Aug 1999.** Editors: Vidur Apparao (Netscape), Daniel Glazman (Electricité de France), Chris Wilson (Microsoft). Status text: "based on the submissions made to the W3C by Netscape Communications Corp. (Action Sheets [ACTIONS]) and Microsoft Corp. (HTML Components [HTC])." Code from the draft (`www-style-becss-wd.txt`):
  ```
  DIV.header > H1.TOCtitle {
        color : red ;
        onclick : "fold_or_unfoldTOC(event)"
       }
  DIV#eagle { behavior : url(http://www.w3.org/bhv/eagle.thc) }
  ```
  plus an `@script` at-rule for script blocks in a style sheet and a `<COMPONENT>`/`<PROPERTY>`/`<METHOD>`/`<EVENT>`/`<ATTACH>` element set for HTCs.

**The argument (all opened):**

- Fri 6 Aug 1999 Glazman announces it: "I am *very* pleased to announce a new Working Draft" (www-style/1999Aug/0010).
- Mon 9 Aug 1999 Jelks Cabaniss asks why Action Sheets got dropped in favour of "CSS behaviors"; Chris Wilson (Microsoft) answers (1999Aug/0025): "In discussions with the CSS WG, it was generally agreed that integrating the ideas in Action Sheets into CSS was a better idea that writing yet another format... BECSS is a combination and improvement of Action Sheets, DHTML behaviors and HTML Components. And incidentally, of the three editors, I probably did the least work. Daniel Glazman deserves much credit for pulling all this together and making it consistent."
- 24 Oct 1999 (quoted by Hickson 3 Nov 1999, www-style/1999Nov/0011), Håkon Wium Lie: "I think, however, that all new proposals for CSS should be declarative; adding executable code to content labeled as "text/css"... is too much of a break with the past." He cites the last line of CSS1, "We do not expect CSS to evolve into: a programming language", and the text/css RFC security section: "CSS style sheets consist of declarative property/value pairs assigned to element selectors. They contain no executable code."
- Ian Hickson in that same reply defends BECSS: "Executable code already appears in HTML. Moving it to CSS adds no security problems that are not present already, but makes the life of web authors significantly simpler. What does anyone gain by forcing the `user-select: text;` ...and `onBlur: "validateData()";` ...to be in different files?"
- 4 Aug 2000 (www-style/2000Aug/0040) Håkon Wium Lie: "Question of the day: In order to turn off the effects of BeCSS, do I turn off style sheets or scripting in my browser?" Tantek Çelik (0043, signature is a Microsoft Mac IE ad): "No need to turn off either if all you want to do is disable BeCSS. Add this to your user style sheet of course: `* { behavior: none ! important }`".
- 8 Aug 2000 Glazman (0059): "BECSS is a proposal that tries to address a problem that dozens and dozens of people expressed during the Future of HTML Workshop, some years ago : the componentization of the Web." Matthew Brealey had called it "a proposal to turn style sheets into a script dump".
- 3 Aug 2000 Simon St.Laurent (0036): "Styles already define behavior, and already provide a set of tools for attaching that behavior to document structures. I don't think adding scripting to the behavioral mix is so awful." Jelks Cabaniss (quoted there): "Script does not belong inside CSS".
- 1 Aug 2001 Jeffrey Yasskin asks (www-style/2001Aug/0013) "What's up with BECSS?... It looked like a good idea." Hickson (0016): "The working group recently restarted working on this. Ideas from BECSS, HTCs, AS, XBL, CSSUI and other proposed languages and extensions are all being carefully considered." Bjoern Hoehrmann (0014): "Not to me, so, why do you think so?"
- 1 Jan 2003 Hickson on the huge XBL thread (www-style/2003Jan/0000, 89 msgs): "CSS is _exactly_ the right layer." and "XBL... is the glue that binds CSS and the DOM." (He draws an ASCII diagram with "CSS <----> XBL <----> DOM".)

**What became of it:**

- BECSS: W3C Working Group Note 14 October 2014, editor Ian Hickson (Google): "The features are no longer being developed." Previous version was WD 2007-10-19 (`www-style-becss-latest.txt`).
- XBL 2.0 (Hickson): Working Group Note 24 May 2012: "Beware. This specification is no longer in active maintenance... No browser vendor has plans to implement this specification at this time. Unless you are interested in the history of the Web's component model, this document is likely not of any use to you." (`www-style-xbl2.txt`).
- The `:hover` style of declarative behaviour survived in CSS; the script-in-CSS part did not. My inference (label as interpretation): Custom Elements / Shadow DOM took over "componentization". I did not open a source for Web Components; do not state it as a fact without one.
- Also see JSSS (A3): Netscape's earlier attempt to fold script into styling.

**Evidence strength:** strong. Surprise-grade: the same person (Hickson) argued for it in 1999, edited its successor in 2007, and wrote its closing Note in 2014. The co-editor list (Netscape + EDF + Microsoft) is a rare unity of rivals.

---

## A3. JavaScript Style Sheets (JSSS), Netscape 1996

**Idea:** write style sheets as JavaScript property assignments.

**Artifact:** "JavaScript-Based Style Sheets, 'JSSS', Initial Proposal", authors Lou Montulli, Brendan Eich, Scott Furman, Donna Converse, Troy Chevalier (all Netscape); dated Aug 19, 1996 / Aug 22, 1996 (`www-style-jsss-note.txt`, URL https://www.w3.org/Submission/1996/1/WD-jsss-960822). Abstract: "This document specifies a method to attach styles to HTML documents using the existing property-based language JavaScript." Code, copied exactly:
```
document.tags.H1.color = "blue"
tags.h1.color = "blue"
<LINK REL=STYLESHEET TYPE="text/Javascript" HREF="http://style.com/cool" TITLE="Cool">
<STYLE TYPE="text/javascript">
  tags.H1.color = "blue"
</STYLE>
with(tags.BODY) {
  color = "black";
  bgColor = "white";
}
classes.punk.all.color = "#00FF00"
ids.z098y.letterSpacing = "0.3em"
```

**The argument:**

- Sun 19 Jan 1997 Todd Fahrner (www-style/1997Jan/0054), answering Paul Ford's "I'm baffled": "The advantage for whom? Netscape-specific "proposed standards," like the new <layers> tag and shifting implementations of JavaScript, can themselves be advantages to Netscape as long as they command the greatest market share. Apologies in advance if my cynicism is unwarranted". And: "Rather than normalize CSS1 and complement it with a separate script/object model, however, Netscape will offer an all-in-one styling/scripting solution, allowing authors to bypass CSS1." And: "Unless you really want to have color-cycling <H1> elements available exclusively to Nav 4 users, I see no point."
- 20 Jan 1997 David Seibert (1997Jan/0058): JSSS "does not allow style that depends on the document structure". Steve Knoblock (22 Jan, 0060): "The real power of CSS comes from hanging styles on elements."
- 29 Apr 1997, Chris Wilson (Microsoft), www-style/1997Apr/0287, thread "Cascading and scripting": "I don't believe solutions like Netscape's JavaScript Style Sheets (renamed "Dynamic Stylesheets" - heh heh) are a good solution to the basic stylesheet requirement"; "I think it's silly to recommend that someone write J*Script just to write basic stylesheets - but I think it's great to be able to write "ONMOUSEOVER="this.style.fontWeight='bold'" to get hover effects."

**Outcome:** Lie and Bos, "The CSS saga" (`www-style-liebos-saga.txt`, https://www.w3.org/Style/LieBos2e/history/): "Netscape implemented CSS internally by translating CSS rules into snippets of Javascript, which were then run along with other scripts. The company also decided to let developers write JSSS, thereby bypassing CSS entirely. If JSSS had been successful, the Web would have had one more style sheet than necessary. This, fortunately for CSS, turned out not to be the case." Also: "Since its inception Netscape had been sceptical towards style sheets, and the company's first implementation turned out to be a half-hearted attempt to stop Microsoft from claiming to be more standards-compliant than themselves." (This is Lie and Bos's telling: Lie co-invented CSS, so partisan. Say so.) Wikipedia (secondary, `www-style-wiki-jsss.txt`): supported only by Netscape 4.x, dropped in Netscape 6. Wikipedia's source is that same Lie/Bos chapter.

**Surprise:** CSS in Netscape 4 was literally compiled into JS (Lie and Bos). Also, Lou Montulli, who co-signed JSSS, was the Netscape member of the HTML ERB who sat in the CSS1 fight (same source, line "Among the members of the HTML ERB was Lou Montulli of Netscape... The battles within the HTML ERB were long and hard, but CSS level 1 finally emerged as a W3C Recommendation in December 1996."). The JSSS note is dated eight months after the same person's ERB role. Connection is the reader's to draw; I did not find a message from Montulli on the list.

**Strength:** good for the artifact and 1997 reaction; the actual 1996 announcement thread not located (Aug 1996 index only shows "scripts and bookmarks").

---

## A4. CSS variables: `@define`, `@var`, `@variables`, `$foo`, then `--foo` (1998 to 2022)

**Idea:** name a value once, reuse it.

**Timeline of the proposals, with exact syntax:**

1. **10 Dec 1998**, W3C NOTE "List of suggested extensions to CSS", editor Bert Bos (`www-style-css-potential-note.txt`, URL http://www.w3.org/TR/1998/NOTE-CSS-potential-19981210). Purpose: "The purpose of the list is to make sure suggestions are neither forgotten nor suggested over and over again." Item 28 "Symbolic constants":
   ```
   @define orange = #faa;
   H1 {color: orange}
   H2 {color: orange}
   H3 {color: orange}
   ```
   Item 27 "Constant expressions": "You can set 'font-size: larger', but wouldn't it be nice to be able to say 'font-size: font-size + 2pt'? or 'line-height: max(10pt, width/12)'". Item 32 "High-level constraints" (a constraint solver; compare Badros and Borning's CCSS, not opened). Item 26 "Transparency": "rgba(40%, 40%, 100%,70%)". Item 24: gradient backgrounds "might even be a primitive in CSS". Item 18 "Page-transition effects": `A.local {transition-style: fade}`. Item 17 "Folding lists": `DIV.expand {hyper-display: folding}`. Item 10 "Image filters": "Examples: convolution matrices."
2. **6 Dec 2001**, Christoph Päper (www-style/2001Dec/0008): `@var { $fore: #000; $back: #FFF; }` then `color: $fore; /* or var($fore) */`. His note: "Maybe it would be a better idea to incorporate this into a CSS editor and not the browser". Glazman (0010) points to the WG's own "future" list; Bert Bos (0012) says of the Note, "The document is useful as a repository of ideas, to avoid them being reinvented."
3. **23 Apr 2005**, a poster at karsites.net (www-style/2005Apr/0263): `CONST: top_value = 200px, left_value = 20%...; VAR: my_fav_color = blue...`. 15-message thread.
4. **27 Aug 2007**, Daniel Brumbaugh Keeney, "css constants" (www-style/2007Aug/0167), listing six blog posts from 2003-ish onward asking for it. L. David Baron: "There are many different ways constants could be used. A proposal that would support all of them would be difficult to specify and difficult to implement." fantasai (0170) created a wiki page for use cases.
5. **8 Apr 2008**, Daniel Glazman and David Hyatt (Apple), "CSS Variables" (www-style/2008Apr/0178; page `www-style-glazman-vars.txt`). Their abstract: "Since the release of CSS Level 2 Recommendation ten years ago in may 1998, the Web authors' community has been requesting a way of defining variables in CSS." Syntax copied:
   ```
   @variables {  CorporateLogoBGColor: #fe8d12;}
   div.logoContainer {  background-color: var(CorporateLogoBGColor);}
   ```
6. **Bert Bos, 8 Apr 2008 (www-style/2008Apr/0187)**: "Variables in CSS are wrong for the above three reasons. They make the language bigger and more difficult to learn, they make other people's style sheets more difficult to understand and re-use. They can instead be done with a generic macro processor... They introduce extra indirections. Computer scientists love indirections, they believe all problems can be solved with them, but normal people hate them." His essay "Why 'variables' in CSS are harmful" (created 30 June 2008; `www-style-varsharmful.txt`): "Adding any form of macros or additional scopes and indirections, including symbolic constants, is not just redundant, but changes CSS in ways that make it unsuitable for its intended audience." It says constants "have been regularly proposed and rejected over the long history of CSS" and that "WebKit (the core of Apple's Safari browser) briefly experimented with an implementation of constants".
7. **David Baron's technical questions** to Glazman/Hyatt, 8 Apr 2008 (0179): what if `@variables { myvar: red; }` then `p { font-size: var(myvar); }`... "Is the font-size rule ignored temporarily?" (This is the question the later design had to answer.)
8. **Glazman, 17 Aug 2012 blog** (`www-style-glazman-dollar.txt`): "Dave Hyatt and I shaped the first concrete public proposal in 2008 but the CSS Working Group could not reach an agreement about it. Variables, constants, mutable constants, OM or no OM, we had endless "religious" discussions about that and Hyatt finally removed his implementation from WebKit. Then Tab Atkins made a breakthrough last february..."
9. **Tab Atkins Jr., 24 Oct 2011** (www-style/2011Oct/0699): his own `@var` draft:
   ```
   @var $main-color #06c;
   @var $accent-color #006;
   h1 { color: $main-color; border-left: thick solid $accent-color; }
   ```
   then, crediting Roland Steiner, custom properties with the normal cascade:
   ```
   :root { data-main-color: #06c; data-accent-color: #006; }
   h1 { color: data(main-color); border-left: thick solid data(accent-color); }
   ```
   "As far as I can tell, there's not a single downside to using Roland's suggestion instead of the current suggested grammar, and a lot of upsides."
10. **5 Nov 2011** fantasai (www-style/2011Nov/0124) finds prior art in a 2008 rechartering wishlist (stephaniehobson.ca/css3wishlist; page not opened).
11. **The `$` fight, May 2012**: Tab Atkins Jr., 21 May 2012 (www-style/2012May/0744), proposes `$foo`: "it matches the way SASS does variables. Chris Eppstein, one of the SASS devs, has been telling me repeatedly that the $foo syntax will be easier for devs." 78-message thread. Pete Boere (1021 quote chain) worried about PHP heredocs: `color: $bar;`. Tab replied "echo "<hr style='color: \$foo;' />";".
12. **Resolution**: minutes of the 14 Aug 2012 San Diego f2f posted 29 Aug 2012 (www-style/2012Aug/0891): "RESOLVED: Syntax of variables settled on var-foo and var(foo)"; "ACTION: TabAtkins, fantasai, and glazou to write blog post explaining why not using $". Glazman's reasons (17 Aug 2012): "the spec is NOT about variables... That about Inherited User-Defined Properties"; the `$` "deeply conveys a notion of "programming language variable" or "preprocessor macro"".
13. **Today**: CSS Custom Properties for Cascading Variables Module Level 1, W3C Candidate Recommendation Snapshot 16 June 2022 (`www-style-css-variables-1.txt`), syntax `--main-color: #06c;` and `color: var(--main-color);`. I did NOT locate when `var-foo` became `--foo` (after Aug 2012; outside my crawl).

**Surprises:** the final design came from a non-proposal: Tab Atkins (Oct 2011) is replacing his own `@var $` draft after Roland Steiner's thread; first custom-property idea used `data-` by analogy to HTML `data-*` attributes; the rejected `$` was Sass's syntax; Bos's 2008 "harmful" essay was written against the first Hyatt/Glazman draft.

**Strength:** strong. Gaps: Feb 2011 "CSS Variables" (80 msgs) and "CSS Variables Draft Proposal" (61 msgs) threads not read; `var-` to `--` rename not captured; Hyatt's own WebKit removal known only from Glazman's blog and Bos's essay.

---

## A5. Template layout (`display: "a b"`), Bert Bos, to Grid (2005 to 2015)

**Idea:** draw the page layout as ASCII art in a `display` value.

**Artifact:** "CSS Template Layout Module", W3C Working Group Note 26 March 2015, editors Bert Bos and César Acebal (`www-style-template-layout.txt`). Status: "This document currently serves as a repository for ideas around using templates for laying out elements, regions or pages; and for various alternative layout models. It is expected to be updated, but it is not expected to become a W3C Recommendation in this form. Instead, ideas may migrate to other modules of CSS." And "This draft combines ideas from earlier drafts on Template Layout, Grid Positioning [CSS3GRID] and Grid Layout [CSS-GRID-1]." Previous version: the 2011 WD "css3-layout" (WD 29 Nov 2011). Code from the 2011 WD (`www-style-layout-wd2011.txt`, http://www.w3.org/TR/2011/WD-css3-layout-20111129/):
```
body {
     display: "a   b"
              10em *;
}
#nav { position: a; }
#content { position: b;
     display: "c   .   d   .   e   "
              ".   .   .   .   .   "/1em
```
and "A grid with four slots defined by 'display: "aaaaaaa" "bccccdd"'". In the 2015 Note, `display: grid` and `grid-template-areas` have taken over the vocabulary.
**Missing:** who proposed it first and when (the www-style 2005-2009 threads were not opened); the 2010 "[css3-grid-align] -- proposed new grid layout module" thread (Alex Mogilevsky, Microsoft, 27 Oct 2010 first message per index) is the other parent of Grid but I did not open it. Evidence: artifact solid, story thin.

---

## B1. CSS 2 features that shipped in a Recommendation and were then cut in CSS 2.1

Source: CSS 2.1 Appendix C "Changes" (`www-style-css21-changes.txt`, https://www.w3.org/TR/CSS21/changes.html):

- "The 'marker' and 'compact' values of the 'display' property are not part of CSS 2.1. Text relating to these values has been removed throughout the specification."
- "The 'font-stretch' and 'font-size-adjust' properties have been removed in CSS 2.1. Font descriptors, the '@font-face' declaration, and all associated parts of the font matching algorithm have been removed in CSS 2.1."
- "The 'text-shadow' property is not in CSS 2.1."
- "The list styles 'hebrew', 'armenian', 'georgian', 'cjk-ideographic', 'hiragana', 'katakana', 'hiragana-iroha' and 'katakana-iroha' have been removed due to lack of implementation experience. (They are expected to return in the CSS3 Lists module.)"
- "The 'size', 'marks', and 'page' properties are not part of CSS 2.1."

**The CSS2 original** (REC-CSS2-19980512, `www-style-css2-fonts.txt`, `www-style-css2-visuren.txt`):
```
@font-face {
    font-family: "Swiss 721";
    src: url("swiss721lt.pfr"); /* Swiss 721 light */
    font-style: normal, italic;
    font-weight: 200;
}
```
CSS2's format table lists `"truedoc-pfr"` (TrueDoc Portable Font Resource .pfr), `"embedded-opentype"` (Embedded OpenType .eot), `"truetype"`, `"opentype"`, `"truetype-gx"`. The compact box example: `DT { display: compact }  DD { margin-left: 4em }` ("A compact inline box is given a position in the margin of a block box.").
**Afterlife:** `@font-face` and `text-shadow` came back in CSS3; Microsoft's Embedded OpenType was published as a W3C Member Submission on 5 March 2008 (Paul Nelson, Microsoft; Microsoft and Monotype copyright) (`www-style-eot.txt`) "to enable TrueType and OpenType fonts to be linked to web pages for download". `display: run-in` is still being used in the 2015 template Note (line "display: run-in }"); `compact` and `marker` I have no later source for. The CSS 2.1 Changes page gives no reason for the font cut beyond the list. Source is strong; the reasons are not stated.

## B2. XHTML 2.0 (www-html, 2002 to 2010)

**Artifacts:** W3C Working Group Note 16 December 2010 (`www-style-xhtml2.txt`): "The XHTML2 Working Group's charter expired before it could complete work on this document." Editors included Steven Pemberton, Mark Birbeck, Shane McCarron, Markus Gylling. Code from the spec (`www-style-xhtml2-struct.txt`, `-intro.txt`):
```
<h>This is a top level heading</h>
<section>
    <p>....</p>
    <h>This is a second-level heading</h>
</section>
<nl>
<label>Navigation</label>
<li href="/">Home</li>
<li><separator/></li>
<li href="prev">Previous</li>
</nl>
```
Intro: "In XHTML 2 any element can now also be the source of a hyperlink, since @href and its associated attributes may now appear on any element. So for instance, instead of `<li><a href="home.html">Home</a></li>`, you can now write `<li href="home.html">Home</li>`."
**The argument:**
- 18 Dec 2002 Daniel Glazman, www-html/2002Dec/0113: "I deeply regret that the style attribute was dropped... Dropping the style attribute is my opinion a *major* error... It is, from my perspective, an important enough issue to make XHTML 2.0 an "harmful" proposal." Also: "I regret that a proprietary extension to HTML was not standardized and added to XHTML : the contenteditable attribute." And he proposes `td[bgcolor] { background-color: attr(bgcolor); }`.
- 14 Jan 2003 Tantek Çelik, "XHTML 2.0 considered harmful" (www-html/2003Jan/0123, 96-msg thread): "I think there needs to be a serious reconsideration of XHTML2 as an effort at all. I'd rather see efforts spent on HTML4/XHTML1,1.1,Basic errata and test suites." "Disclaimer: I am Microsoft's representative to, and participate in, the HTML working group." He points to Mark Pilgrim's post (diveintomark.org 2003/01/13 "semantic_obsolescence"; not opened).
**Afterlife (my inference, no source opened):** HTML5's `<section>`, `<nav>`, `contenteditable`. Needs a source before claiming. Strength: artifacts and two key messages are solid; the end of the WG (2009 charter expiry) is only known from the Note's own status sentence.

## B3. Microsoft's patent over style sheets (surprise, not exactly a rejected idea)

www-style/1999Mar: thread "Official statement from Microsoft concerning CSS, XSL and US Patent No. 5,860,073" with 30+ messages. Chris Wilson posted on 9 Mar 1999 (0016): "Microsoft agrees that any W3C member or other party will be able to obtain a license under Microsoft's US Patent No. 5,860,073 to implement and use the technology described in W3C Recommendations for Cascading Style Sheets (CSS) and the EXtensible Style Language (XSL) for the purpose of supporting such standards, on a royalty-free basis." I did not read the reaction threads or look at the patent. Lead only.

## B4. "Formatting Objects considered harmful" (Håkon Wium Lie, 16 Apr 1999)

www-style/1999Apr/0016 announces his essay (the essay itself is 404/not opened): "XFO is therefore a threat to accessibility, device-independence and the dream of a semantic Web." and "A Web of XFO documents can be compared to a Web of HTML documents with only FONT and BR tags." Same message: "(And yes, I have a new job! Bert will take over my duties in W3C)" (he had joined Opera). The XSL-vs-CSS fight. Outcome of XSL-FO not researched. Thin: message only.

## B5. `@version` for CSS (Jeffrey Yasskin, 26 Jul 2001)

www-style/2001Jul/0168, 28-message thread "@version rule". Proposal: "I propose that an @version rule be added of the syntax: `@version version-string`", with
```
@version "3";
/*CSS 3 selectors here*/
@version "2.1"
{
	/*CSS 2.1 selectors here*/
}
```
Motivation: "the :first-letter pseudo-element is valid CSS1 but not valid CSS3 (it needs to be ::first-letter)". Tantek Çelik's reply (www-style/2001Jul/0194) argues compliance can already be measured with the CSS1 Test Suite and that IE6/Windows "has full CSS Level 1 compliance". I did not find a formal rejection; the thread drifts to conformance claims. The idea resurfaces in practice as `@supports` (not sourced here). Also interesting: Hickson on 30 Nov 1999 suggested double-colon pseudo-elements ("element::before { content: 'whatever' }") because "there are only four pseudo-elements so far", so `::first-letter` is not a 2001 invention (www-style/1999Nov/0241 footnote [1]). Strength: medium.

## B6. The `reader` media type (Joe Clark, 30 Oct 2003)

www-style/2003Oct/0327: "I suggest that these adaptive technologies be brought explicitly into the fold of CSS through the creation of a new media type, 'reader,' which would allow for simultaneous multimodal output." Table row: `'reader' | continuous; | visual,audio,speech,tactile | both | interactive`. Supporters: Chris Hofstader of Freedom Scientific (JAWS) "entirely support[s]" it; Tantek Çelik (4 Nov 2003, 2003Nov/0017): "I fully support including it in CSS2.1 as defined by Joe's proposal." The same message chain mentions Joe's A List Apart article on Fahrner Image Replacement and screen readers. I did NOT find the outcome in my reading; CSS 2.1 has no `reader` type (not verified here by opening the spec). Strength: proposal solid, ending unverified.

## B7. Small items worth knowing about

- **`text-decoration: blink` and CSS3** (Hickson, 16 Mar 1999, www-style/1999Mar/0078): "Most people hate blink anyway." plus: "The current documents regarding what may or may not appear in CSS3 are: http://www.w3.org/TR/NOTE-CSS-potential" and his own minutes page. (He also keeps a page that is "basically the minutes of this mailing list".)
- **Navigation tag** (Doug Schepers, www-html/1999Dec/0067, 7 Dec 1999): "I propose a universal navigation markup tag", a `NAV` tag with next/previous/up/down keyed to arrow keys for web appliances and accessibility. Thread 15 + 9 msgs. Outcome not read.
- **`SPACER`** (Netscape) discussed on www-html Jul 1996, 11 msgs (David Perrell: "Why not just <SPACER HEIGHT=n WIDTH=n>"); "Dump MULTICOLS, enhance DIV" (Jul 1996). Only the first messages read; no source for what became of them.

---

## Surprises (things that contradict the usual telling)

1. **BECSS was a Netscape + Microsoft + EDF joint draft** (Apparao, Glazman, Wilson), not a Microsoft land grab. Wilson himself pushes back on "reads like it popped right out of Redmond" in 1999. In 2000, it is Microsoft's Tantek Çelik who supplies the opt-out line `* { behavior: none ! important }`, and Håkon Lie asks which setting turns BECSS off.
2. **Ian Hickson defended script-in-CSS in 1999**, edited the BECSS and XBL 2 notes, and wrote the 2014 Note that says the features are "no longer being developed".
3. **Netscape 4 compiled CSS into JavaScript internally** (Lie and Bos).
4. **Todd Fahrner mentions the `<layers>` tag in January 1997 as a "proposed standard" alongside JSSS**, i.e. the layers fight (see published essay content/document-layers.html) and JSSS were seen at the time as one Netscape play. (Quote from the message; the essay itself does not cite www-style.)
5. **The parent selector existed on paper from 1999** (`:subject` in the first CSS3 Selectors WD, 3 Aug 1999) and Glazman had a working version in his own tool (CSSize) by 2003; the blocker was dynamic-update performance, not lack of ideas. Hickson's 1999 `:matches()` is the functional-pseudo-class shape that `:has()` has now.
6. **The W3C itself kept a "do not suggest this again" list** (NOTE-CSS-potential, Dec 1998), and it included `@define orange = #faa;`, `max()`/arithmetic, `rgba()`, gradients, page transitions, image filters. Bos in 2001: "useful as a repository of ideas, to avoid them being reinvented."
7. **Bert Bos, who wrote that list, was also the loudest opponent of variables** in 2008 ("Indirection is bad, because too few people understand it").
8. **CSS 2.1 deleted `@font-face`, `text-shadow`, `compact`, `marker`** from a published Recommendation, then CSS3 reinstated the first two.
9. **The final custom-properties design began as `data-` prefixed properties** in Tab Atkins' Oct 2011 message, and a `var-` prefix before the current `--`.
10. **XHTML 2 was attacked in 2003 by Microsoft's own HTML WG representative** (Tantek Çelik) and by Daniel Glazman, who in the same email wanted `contenteditable` standardised.

## Could not open / not done

- `https://www.w3.org/People/howcome/note/fo.html` (Lie, "Formatting Objects considered harmful"): W3C "Page Not Found". The old operasoftware.com URL redirects to a blog index. Essay text not read; only the list announcement.
- `https://www.w3.org/TR/NOTE-HTC` and `https://www.w3.org/TR/1998/NOTE-HTC`: 404. HTC known only via BECSS and message references.
- `https://constraints.cs.washington.edu/ccss/` (Badros/Borning Constraint CSS): 404. The CCSS lead is unconfirmed; the only on-list artifact is Bos's Note item 32 "High-level constraints". I did not search www-style for "constraint".
- Netscape LAYER/SPACER/MULTICOL specs: not located; www-style 1997Oct "How to get around the lack of a LAYER tag?" and www-html 1996Jul SPACER threads not read beyond first messages.
- The 1996 announcement thread for JSSS (Aug 1996): not found by subject.
- W3C list search (`/Search/Mail/Public/`): not tried; all discovery was via saved subject indexes.
- web.archive.org: not tried.
- WebKit/Hyatt's own post about removing variables, Wired "CSS variables" post (30 Apr 2008), Mark Pilgrim's 2003 post, Glazman's `disruptive-innovations.com` 2008 page was opened but only as the proposal; Stephanie Hobson's wishlist: not opened.
- Tab Atkins's blog (`xanthir.com/blog/b4KT0`) was fetched (`www-style-tab-dollar.txt`) but not read in detail.
- Chrome and Firefox dates for `:has()`; the date `var-` became `--`; how `reader` media type ended; why exactly `text-shadow`/`@font-face` were cut in CSS 2.1.
- www-html 1999-2004 only skimmed by subject (XHTML 2 threads); `<qst>`/`<ans>` (Jul 2003), `<line>` vs `<l>` (Dec 2002), `<footnote>` (Jan 2003), "Subheadings desired in XHTML 2.0" (Nov 2002, 20 msgs), "XHTML 2.0 - no interest in RDF/XML?" were seen in the index but not read. These look like lively untold material.
- www-style 2005-2009 template-layout/grid origin threads and "CSS3 Hyperlink Presentation" (Hoehrmann, Jul 2001 "Another approach to style hyperlinks") and "CSS TV Profile" (CR 2002/2003) and CSS3 marquee: index lines seen; threads not read. (`css-overflow-3` page fetched; contains no mention of marquee when I grepped; CSS3 marquee afterlife not established.)
