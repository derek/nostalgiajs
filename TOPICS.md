# Topics

Ideas for essays that have not been written yet. Published essays are listed in `essays.json`, not here.

Pick the next essay from the first item under "Up next" if there is one, otherwise your choice from the lists. When you write an essay, delete its line from this file. Add new ideas to the lists as you find them, never to "Up next". Every topic should have a concrete artifact (a line of code, a tag, a product, a document) and a well-documented story: someone who wanted something, trouble, and an ending. See "Is there a story?" in `AGENTS.md`. A topic that turns out to have no story is moved to "Parked" at the bottom of this file, not written.

## Up next

Derek's picks, in order. Always take the first item here. Only choose from the lists below when this list is empty.

- The founding of WHATWG (2004): browser makers lose a vote at a W3C workshop, start their own group days later, and end up writing HTML5
- The Samy worm (2005): one MySpace profile script that made a million friends in a day, and what happened to its author
- Opera's "Bork" edition (2003): Opera says Microsoft's site is sending it broken pages, and answers with a build that turns that site into Swedish Chef gibberish
- IE6: the box model, `hasLayout` and conditional comments
- CSS Zen Garden (2003) and the tables-versus-CSS argument
- A List Apart, "To Hell with Bad Browsers" and the Web Standards Project: developers lobbying browser makers
- The Firefox 1.0 New York Times ad (2004): users paying to advertise a browser
- Web 2.0: the 2005 essay, glossy buttons, rounded corners and the permanent "beta" badge
- "How it feels to learn JavaScript in 2016" and JavaScript fatigue
- RSS 0.91, 1.0, 2.0 and Atom: the feed format war nobody won, and why every reader parses all of them

## Ideas

Aim for about one people-and-culture essay in every three, so the collection is not all code. Each essay is filed under one of four topics in `essays.json`: `browsers`, `language`, `libraries` or `people`.

### Technology

- ViolaWWW and the Eolas patent (1993 to 2013): Pei-Yuan Wei gives away a browser that runs embedded programs, tells Michael Doyle on www-talk in 1995 that the patent on that idea should not stick, and waits through a $520 million verdict and IE's "click to activate" for a 2012 Texas jury to agree; the 2001 W3C patent policy fight is the "why". Research notes in `research/2026-11-18/`; Wei's own account of the case has not been opened yet
- robots.txt (1994): Martijn Koster posts a proposal to www-talk on 25 February 1994 after crawlers hammer servers; the file starts life as `/RobotsNotWanted.txt`, Roy Fielding pushes for `/spiders.txt` in a June vote because he needs a decision "within the next 24 hours" to finish a paper, and it becomes an IETF standard only in 2022, just as AI crawlers arrive. The surprise: Charlie Stross's famous "I necessitated it" story doesn't fit the dates, since Koster's earliest emails from Stross are 7 March 1994, ten days after the proposal, and Koster points to a September 1993 incident instead. Write it as memory against mail archive, not a debunking. *eBay v. Bidder's Edge* (2000) is the middle act. Research notes in `research/2026-11-18/` (opened: www-talk 1994, robotstxt.org, Koster's 2019 post, Stross, RFC 9309; not opened: the comp.infosystems.www thread and Koster's 1993 "Guidelines for Robot Writers"). The restored www-talk archive at `lists.w3.org/Archives/Public/www-talk/` (see the W3C post of 28 October 2026) now has Putz's 1993 "WWW robots should be identified" and Fielding's MOMspider RFC to open as primary sources
- Image rollovers and `MM_swapImage`: Dreamweaver writes your JavaScript
- The `window.status` scroller and other things we thought were cool
- Frames, framesets and frame-busting
- Prototype.js, Scriptaculous and the day we all extended `Object.prototype`
- Flash, ActionScript and "Thoughts on Flash" (2010)
- Node.js is announced at JSConf EU (2009)
- Backbone, Knockout, Angular 1 and the first MVC-in-the-browser wave
- Grunt, Gulp, Webpack: the task-runner treadmill
- Callback pyramids, Promises and the long road to `async`/`await`
- `<script language="JavaScript1.2">`: when the version attribute changed what `==` meant
- `document.lastModified` and the "last updated" footer
- Email address munging: `document.write`, "name at example dot com" and the arms race with the harvesters
- The `window.onload` problem: `DOMContentLoaded`, the IE `defer` script hack and the race to run code before the images arrived
- `querySelectorAll` and the Selectors API: the library authors' 2008 objections, and why `:scope` exists
- Moment.js, its 2020 "done" notice, and the long wait for Temporal
- Minification and the compiled web: JSMin (2001), YUI Compressor, Closure Compiler (2009) and the day the source stopped being readable
- The table layout hack and `spacer.gif`: how a data tag became the page grid, as the 1996 Space Jam source still shows
- Venkman and the DOM Inspector: the debugger and the tree view Mozilla shipped years before anyone used them
- Google Chrome Frame (2009 to 2014): a browser shipped as a plug-in for somebody else's browser, switched on with one `<meta>` tag
- `console.log` shipped to production: `firebugx.js`, "console is not defined" and the stub at the top of every script
- JSON: Crockford's "fat-free alternative to XML", `eval()` as a parser and the script-tag trick that became JSONP
- The back button and the `#` fragment: how Ajax applications broke history and `pushState` repaired it
- Hidden frames, Java applets and cookies: remote scripting before `XMLHttpRequest` (MSRS, JSRS, RSLite)
- npm and its rivals (2010): the package manager Isaac Schlueter built, Kiwi and its “seed” files, and the nested node_modules choice that made the ecosystem big
- CoffeeScript (2009): square = (x) -> x * x, the compiler that Rails made a default and whose syntax came back through ES2015
- Palm webOS (2009 to 2012): apps written in HTML and JavaScript, Mojo and Enyo, and Node.js services on a phone
- The February 1996 cull of HTTP/1.1 methods: Larry Masinter proposes cutting PATCH, COPY, MOVE, LINK, UNLINK and WRAPPED, Roy Fielding, who wrote them, argues back, and PATCH returns as RFC 5789 in 2010 while COPY and MOVE come back in WebDAV. Research notes in `research/2026-11-20/http-dom.md`
- Web Forms 2.0 repetition templates (2004 to 2012): Aaron Swartz asks the WHATWG list in September 2008 why a feature Open Library uses is being cut, Ian Hickson answers that it "solves about 5% of the use cases", and the parser problem behind Hickson's 2004 refusal of a `<template>` element meets the 2011 `<template>` proposal. Research notes in `research/2026-11-20/whatwg.md`
- The edition that never was (2008): Lars Hansen and Jeff Dyer cut packages from ECMAScript 4 in April, Brendan Eich's "ECMAScript Harmony" message cuts the rest in August, and ES3.1 is renumbered ES5. Decimal and version opt-in are the side stories. Research notes in `research/2026-11-20/es-discuss.md`
- The first CSS, October 1994: Håkon Lie's proposal averaged two designers' style sheets by percentage and tested a document's age, Bert Bos objected the next day, and Rob Raisch's 1993 style sheets (`@H1 fo(si=32,we=bo)`) had come first. Research notes in `research/2026-11-20/www-talk.md`
- The parent selector (1999 to 2022): `:subject` is in the first CSS3 Selectors draft, is removed in 2003 for performance, and ships as `:has()` 23 years later. Research notes in `research/2026-11-20/www-style.md`
- Behaviour in CSS (1998 to 2014): Netscape's Action Sheets and Microsoft's HTC become one draft with `onclick` as a CSS property, Håkon Lie objects to executable code in `text/css`, and Ian Hickson, who defended the idea in 1999, edits the 2014 Note that closes it. Research notes in `research/2026-11-20/www-style.md`
- `Object.observe` (2012 to 2015): Rafael Weinstein's `Object.observe(obj, callback)` reaches stage 2, Yehuda Katz warns about its ergonomics in 2014, and Adam Klein withdraws it on es-discuss in November 2015, citing 0.0169% of Chrome page views. Research notes in `research/2026-11-20/es-discuss.md`
- `<main>` (2012 to 2013): Steve Faulkner and Simon Pieters push for the element, Ian Hickson objects with data on how `class="main"` is used, browsers build it anyway, and Hickson writes "Just implement it." Faulkner's own spec and the W3C side of the argument have not been opened. Research notes in `research/2026-11-20/whatwg.md`
- `<a ping>` (2005): Ian Hickson proposes link-click tracking in a WHATWG thread that asks "Is it evil?", and Gecko later backs out its implementation. The attribute's present status in browsers has not been sourced. Research notes in `research/2026-11-20/whatwg.md`
- "One JavaScript" (2008 to 2012): versioned opt-in (`type="application/ecmascript;version=6"`) is ended by David Herman's "ES6 doesn't need opt-in" on 1 January 2012, the fix for `typeof null` dies with it, and Mark S. Miller declares the experiment failed a year later. Overlaps the Annex B essay and the `JavaScript1.2` idea above, so it needs its own angle. Research notes in `research/2026-11-20/es-discuss.md`
- 402 Payment Required: a 1992-headed W3C page defines it with a `ChargeTo` header, HTTP/1.0 leaves it out, and HTTP/1.1 brings it back as "reserved for future use". Needs a protagonist; Dave Raggett's October 1994 working group charter, mostly about payments, is the likeliest way in. Research notes in `research/2026-11-20/http-dom.md` and `www-talk.md`


### People and culture

- "Under construction" GIFs, 88x31 buttons and "Best viewed in" badges: the folk art of the early web
- GeoCities neighborhoods, webrings and guestbooks: how people found each other before search and social
- Copy-and-paste script archives (Dynamic Drive, The JavaScript Source) and the credit comment you were told not to remove
- The dot-com crash of 2000 to 2001 as web developers lived it
- "Evergreen" browsers: Chrome's silent updater (2008), the six-week release train and the end of knowing your version number
- "JavaScript: The World's Most Misunderstood Programming Language" (2001): how a toy language became respectable
- The QuirksMode `addEvent()` recoding contest (2005): when the platform was patched by blog competition
- Stack Overflow launches (2008), and what asking a programming question was like before it
- From webmaster to "front-end developer": how the job titles split
- FizzBuzz, the whiteboard and the rituals of the developer interview
- ServerJS becomes CommonJS (2009): the mailing list that gave JavaScript `require()` before it had a server to run on
- "Hug a Conference Organizer" (2010) and the economics of the community tech conference, from hotel room blocks to ticket lotteries
- The conference code of conduct: how one page of boilerplate spread from event to event in the early 2010s
- The "no right click" script, image theft and the early web's copyright anxieties
- "Hi Webmaster!": the 405 emails W3C's webmaster mailbox received in three weeks of 1995, and what newcomers thought the web was
- Tim Berners-Lee's browser was an editor: the read-write web that shipped read-only
- Delicious, Digg and Technorati: when a link's worth was counted in bookmarks, diggs and "authority"
- The "beta book" and the 21-day promise: how 1990s computer books were written in three months, sold by thickness and corrected on errata pages
- Computer Literacy Bookshops (1983 to 2001): the Silicon Valley store that stocked every computer book in print, and what closed it
- Netscape DevEdge disappears and Mozilla Developer Center rescues it (2005): how MDN began as a salvage job

## Parked

Topics that were researched and set aside because they did not make a story. Each says why, and what would change the answer. Derek can move any of them back to "Up next".

- JavaScript's first hundred days on Usenet (December 1995 to spring 1996). Why: many voices and no protagonist, and its one dramatic event, the first security report, is its own essay. Would change: threads from the 1995 to 2000 archive (Google Groups only) showing a running argument between named people.
- comp.lang.javascript, its FAQ, and learning from strangers on Usenet Why: its 1990s posts are in an archive that could not be read from here, and no protagonist is known yet. Would change: access to the Google Groups archive, and a named FAQ maintainer or a running dispute to follow.
- Hiding scripts in HTML comments (`<!--` ... `//-->`) for browsers that didn't exist anymore Why: the Annex B essay already tells this story. Would change: a new angle with its own protagonist.
