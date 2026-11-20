# Rejected ideas on es-discuss / es4-discuss (2006 to 2018): inventory

Researcher: Sonnet. Beat: the TC39 list. Every item below was read on esdiscuss.org (the list's archive; it imports the old mail.mozilla.org mail, so es4-discuss is on it too, filed as es-discuss from 2008-08). Saved page text is in `work/rejected-ideas/sources/es-discuss-<name>.txt`, first line = URL. Exact message timestamps come from each message's `data-message` attribute on the page (UTC); the page itself only shows "N years ago", so I use the timestamps. Messages on the site are shown twice (plain text, then the HTML version); I quote the plain version. Indentation/braces in code on the site can be flattened; where that happened I say so.

Opened: 2026-11-20 (all pages). The esdiscuss.org topic index (4,355 topic rows over 218 pages, newest first) is saved as `sources/es-discuss-topic-index.txt` so the next person can grep for slugs: format `page /topic/slug title`. Pages 196 to 218 cover 2006 to mid-2008 (es4-discuss era); 186 to 195 cover Oct 2008 to Mar 2009.

Note on notation: "ES4" below means the abandoned fourth edition; TC39 meeting notes were NOT opened (esdiscuss.org/notes redirects to github.com/rwaldron/tc39-notes; github.com is blocked from this session, raw.githubusercontent.com works for README-type files only).

---

## 1. ES4 itself, and the line that killed it: "packages, namespaces and early binding"

**Idea.** The fourth edition of ECMAScript: classes, packages, namespaces, early binding, optional/static types. Dropped in pieces: packages in April 2008, then all of ES4 in August 2008 under the name "Harmony".

**Packages dropped, 2008-04-17.** Jeff Dyer (Adobe) forwarded to the ES4 list a proposal "to drop packages" ("FW: Packages must go"), signed "--lars" (Lars Hansen). Message timestamp 2008-04-17T15:38:48Z. https://esdiscuss.org/topic/fw-packages-must-go
Exact words of the reason: "The answer appears to be, for the time being, no. One important problem, for example, is that packages appear to be scoped entities but are not." And: "As a consequence Jeff and I think we should remove packages from ES4 for the time being, instead of embarking on a design exercise without the benefit of practice."
Their own code (copied exactly; the web page has flattened indentation):
```
package P {
public var x
}

means exactly the same thing as this fragment:

package Q {
}
public var x
```
and the replacement idiom they proposed (also exact):
```
// file 1
internal namespace PRIVATE = "eval private"
internal namespace PUBLIC = "eval public"
use namespace PRIVATE, namespace PUBLIC

PUBLIC function evaluate(t)
evalStmt(t)

PRIVATE function evalStmt(t)
... evalExpr(t) ...
```
Evidence: primary (the message), solid. Note: the message is a forward, so the author is Lars Hansen (signature) with Jeff Dyer as co-proposer and forwarder; I did not see a "From:" line saying so more explicitly. Say "forwarded by Jeff Dyer, signed lars".

**Harmony, 2008-08-13.** Brendan Eich, "ECMAScript Harmony", timestamp 2008-08-13T21:26:56Z. https://esdiscuss.org/topic/ecmascript-harmony (saved: `es-discuss-harmony-aug2008.txt`, 58 KB, includes replies)
Exact words:
- "It's no secret that the JavaScript standards body, Ecma's Technical Committee 39, has been split for over a year, with some members favoring ES4, a major fourth edition to ECMA-262, and others advocating ES3.1 based on the existing ECMA-262 Edition 3 (ES3) specification. Now, I'm happy to report, the split is over."
- "Some ES4 proposals have been deemed unsound for the Web, and are off the table for good: packages, namespaces and early binding. This conclusion is key to Harmony."
- "For these reasons, namespaces and early binding (like packages before them, this past April) must go. This is final, they are not even a future possibility."
- "It does mean that some of the ideas going back to the first ES4 proposals in 1999, implemented variously in JScript.NET and ActionScript, won't make it into any ES standard."
- "To achieve harmony, we have to focus not only on nearer term improvements -- on 'what's in' or what could be in -- we must also strive to agree on what's out."
- On the plan: "I heard good agreement on low-hanging 'de-facto standard' fruit, particularly let as the new var ... Also some favorable comments about simple desugarings such as expression closures and destructuring assignment, and other changes in JS1.7 and 1.8".
- And it says who did the unifying: "I worked with John Neumann, TC39 chair, and ES3.1 and ES4 principals, especially Lars Hansen (Adobe), Mark Miller (Google), and Allen Wirfs-Brock (Microsoft)". Meeting: "The Ecma TC39 meeting in Oslo at the end of July".
Afterlife: ES3.1 was renumbered. Mark S. Miller, "Announcement: ES3.1 renamed to ES5", 2009-03-30T21:42:02Z: "At the recent EcmaScript meeting, we decided to renumber EcmaScript 3.1 to become EcmaScript 5 ... ES4 will continue to be a valid designator for the old proposal with namespaces, etc ... The general expectation is that ES-Harmony will become ES6, i.e., the Sixth Edition." https://esdiscuss.org/topic/announcement-es3-1-renamed-to-es5 . (So there was never an "ES4" edition; the numbering skipped.)
Brendan's own later diagnosis, 2013-08-23T19:03:43Z, in thread "Optional Strong Typing": "Has everyone forgotten ES4? ... ES4 failed in part because of AS3 namespaces (from original JS2/ES4 namespaces in 1999, also in JScript.NET in 2000, IIRC; inspired by Common Lisp symbol packages), but also because on the Web it's very hard to know when to typecheck. Code loads all the time. Judgments may be invalidated down the road. The "any" type requires runtime checking." https://esdiscuss.org/topic/optional-strong-typing (saved). Same thread: the original poster, J B, asked for AS3-style optional types; Domenic Denicola: "(I'll wait for one of the old timers to chime in about the ES4 days here.)". Brendan later in thread: "WarnScript was a bad name" (quoting himself at JSConf.au), "TypeScript got this right."
Earlier signs: Mark S. Miller on 2008-03-24T03:08:26Z, in "Renaming ECMAScript 4 for the final standard?" (started 2008-03-23 by Lemonade Smith): "I agree that the language design currently known as 'proposed ES4' is about as different from the language described by ES3 as C++ is from C, and should therefore have a separate name." And: "The separate existence of C++ probably helped preserve the smallness of C for many years. Likewise, Common Lisp probably helped protect the smallness of Scheme. Both battles were ultimately lost". https://esdiscuss.org/topic/renaming-ecmascript-4-for-the-final-standard
Evidence: strong (primary messages). The "named protagonist" candidates: Brendan Eich (wrote Harmony), Lars Hansen and Jeff Dyer (cut packages), Mark S. Miller (named the split).

---

## 2. Decimal arithmetic in JavaScript ("use decimal", the `m` suffix)

**Idea.** Add IEEE 754r decimal128 as a second number type so `0.1 + 0.2` is exact, with literals like `1.1m`.
**Who.** Sam Ruby (implementer of the SpiderMonkey/ES3.1m patch and spec text, working through Pratap Lakshman for the spec), Mike Cowlishaw (IBM, the decimal arithmetic spec author, cited by Brendan), Brendan Eich, Douglas Crockford.
**Spec description**, Sam Ruby, "ES Decimal status", 2008-09-12T19:00:47Z, https://esdiscuss.org/topic/es-decimal-status : "number and decimal are distinct primitive data types. The former is based on IEEE 754 binary 64 floating point, the latter is based on IEEE 754r decimal 128 floating point." and "'1.1' would be treated as 1.1m when passed as an argument to decimal".
**The `typeof` problem**, "use decimal", Brendan Eich, 2008-09-17T19:49:50Z https://esdiscuss.org/topic/use-decimal (saved, 144 KB). Exact: "Without 'use decimal', typeof 1.1m must not be 'number' to preserve this same invariant. Otherwise (without 'use decimal') 1.5m == 1.5 but 1.1m != 1.1, so without making typeof 1.5m != typeof 1.1m, we cannot have typeof 1.5m == 'number'." and "So without 'use decimal', typeof 1.1m and typeof 1.5m must be 'decimal'." Also: "Many people agree with the intent of your proposal ... Evidence includes the fact that bugzilla.mozilla.org/show_bug.cgi?id=5856 keeps collecting dups." and the mixed-mode fear: "the missile launches when it should not."
**Who deferred it.** Douglas Crockford, same thread, 2008-09-17T20:01:54Z: "We should not be making standards until we can determine the extent to which that is better. It may be best to defer decimal to Harmony so we can try some experiments and have more confidence." and 2008-09-17T21:34:38Z: "There are too many loose threads for the ES3.1 window. I hope we can get this stuff resolved in Harmony." Brendan, 20:55Z: "Absolutely agree" and "Sam, I'm still keen on reviewing your patch for SpiderMonkey." Sam Ruby, 21:18Z, pushes back: "My only claim is that I have a head start on implementations and user feedback on such items as 'use strict', and I intend to maintain that lead."
**What killed it (per the list, June 2009).** "Why decimal?" thread, https://esdiscuss.org/topic/why-decimal (saved):
- Christian Plesner Hansen (V8 team), 2009-06-23T07:18:16Z: "A while ago we (the v8 team) asked around within google and were unable to find anyone who would want to do financial calculations client-side." and "the one decimal library that exists for JS, a direct translation from Java's BigDecimal, hasn't been updated since 2000" and "Another problem is that the standard is closed: I can't even read it without paying for it."
- Brendan Eich, 2009-06-23T14:46:09Z, points to "Mike Cowlishaw's pages on decimal" (hursley.ibm.com) and: "The most-duplicated JS bug in bugzilla.mozilla.org is bugzilla.mozilla.org/show_bug.cgi?id=5856". Then: "Anyway, decimal is not being pushed into JS at this point. At the last face-to-face TC39 meeting, we changed direction to explore generalizing value type support (including operators and literals if we can) so that libraries could add first class number-like types." The user complaint he quotes: "9533.24-215.10 ... 9318.139999999999". Later in thread (2009-06-23T17:20:41Z) Brendan: "13+ years ago, I got a bug report about this calculation: js> 79.46-39.96 39.49999999999999 This was before we founded mozilla.org, it was about Netscape 2 or 3."
Afterlife: not on this list in my range (I did not open any post-2018 decimal thread). The same thread shows decimal was turned into the "value types / operator overloading" project (Mark S. Miller took the action to write the spec; thread "Operator Overloading Strawman for Harmony" is in the index, page 189). Operator overloading and value types did not ship either (I have not opened evidence of the final outcome; do not claim it).
Evidence: strong on 2008-2009 story. Compact story shape: Sam Ruby wanted correct money maths in the web's language, but a 2008 schedule squeeze (ES3.1) and a `typeof` puzzle pushed it to "Harmony", where V8's team asked who needs it client-side, so it became a "value types" research item. Named protagonist: Sam Ruby.

---

## 3. Object.observe (withdrawn)

**Idea.** A native, change-record-based observer for plain objects, meant to be the primitive under data binding (MDV, Polymer).
**Who withdrew.** Adam Klein (Chrome/V8), "An update on Object.observe", 2015-11-02T18:27:43Z, https://esdiscuss.org/topic/an-update-on-object-observe (saved, 85 KB).
Exact words: "Over three years ago, Rafael Weinstein, Erik Arvidsson, and I set out to design and implement what we believed to be the primitive underlying the data-binding system of MDV ('model-driven views')." ... "Polymer rewrote from the ground up for its 1.0 release, and in that rebuilding did not utilize O.o. And React's processing model, which tries to avoid the mutable state inherent in data-binding systems, has become quite popular on the web." ... "I plan to withdraw the Object.observe proposal from TC39 (where it currently sits at stage 2 in the ES spec process), and hope to remove support from V8 by the end of the year (the feature is used on 0.0169% of Chrome pageviews, according to chromestatus.com)." and the transition path: "consider using a polyfill such as MaxArt2501/object-observe or a wrapper library like polymer/observe-js." (I have not opened chromestatus.)
**Own code sample.** Rafael Weinstein, 2013-10-17T22:09:05Z, "Changes to Object.observe based on feedback from the September discussion", https://esdiscuss.org/topic/changes-to-object-observe-based-on-feedback-from-the-september-discussion : the signature under discussion is `Object.observe(obj, callback, opt_acceptList)`, and a critic's complaint that "implements a JS antipattern: the callback argument isn't in the final position", with the wrapper `return Object.observe(object, callback, ['add', 'update', 'delete', 'splice'])`. (Who wrote that critique inside Rafael's message: it is part of the list of feedback he answers.)
**Earlier warning.** Yehuda Katz, 2014-05-27T20:49:47Z, "Object.observe", https://esdiscuss.org/topic/object-observe (saved): after Ember's Kris Selden analysed it, "Kris and I both still have concerns with the ergonomics of the API, and believe that the workarounds we arrived at with Raf will end up being commonly necessary even in basic usage and will necessitate wrapper libraries to avoid infinite observer loop footguns." But "Google seems eager to move ahead with the API (and is unpersuaded by our ergonomics objections), let's continue to move this API forward."
**Reactions the same day** (same thread):
- Jeremiah Senkpiel ("Fishrock123", Node.js TSC), 2015-11-02T20:10:43Z: "Because of how the node module ecosystem works removing features is able to have great destructive impact on us." "This functionally has been exposed unflagged since Node v0.11.4 and will have to be supported in one way other for the next 30ish months in our v4 Long-Term-Support release line."
- Benoit Marchant (Montage), 2015-11-02T19:31:16Z: "I implemented a two-way binding system in my first JavaScript framework at Apple in 2007, designed as a layer on top of a property change observing API, like in Cocoa ... I've never felt the need nor understood why observing changes on a whole object were useful for bindings".
- Andrea Giammarchi, 2015-11-02T21:55:14Z: "there is a reason Object.prototype.watch is still in Firefox"; Boris Zbarsky answered (2015-11-03T02:11:02Z) it only survives "because it's used to implement debugger watchpoints".
- Brian Chin (Polymer client), 2015-11-02T19:35:00Z: "O.o required update callbacks to be executed on a new microtask ... In my experience, the instant propagation is easier to reason about".
Afterlife: Proxy (ES2015) is the nearest descendant (Alexander Jones in-thread: "With Proxy out of the bag, I'm not so hopeful for the humble Object anymore"); getters/setters in Polymer, Vue, etc. were the practical route. I did not open anything confirming what V8 removed in which release; thread "Status of Chrome Proxy in face of Object.observe removal" (index page 45) exists but is unopened.
Evidence: strong. Good protagonist: Rafael Weinstein / Adam Klein, a three-year bet that lost to React.

---

## 4. `String/Array.prototype.contains` (renamed `includes`) because of MooTools

**Idea.** Add `.contains` to String (ES6) and Array (ES7-era). Both were renamed `includes`.
**Who.** String: bug reports against Firefox's SpiderMonkey. Array: Domenic Denicola's proposal.
- David Bruant, 2012-10-12T13:50:33Z, "Mootools and String.prototype.contains": "two bugs [1] [2] related to Mootools-based (only Mootools 1.2-) websites being broken by the inclusion of String.prototype.contains in SpiderMonkey." Alex Russell (Google), 14:09Z: "Their test-and-install mechanism was overly optimistic and therefore future hostile." Geoffrey Sneddon (Opera), 14:26Z: "Given there were similar issues with Function.prototype.bind in the same release of Mootools, I'm inclined to let it slide". Rick Waldron: "ES6 standardization isn't due until Dec 2013, which gives browser vendors and lib authors over a year". Outcome then: wait and see. https://esdiscuss.org/topic/mootools-and-string-prototype-contains
- Two years later, Boris Zbarsky (Mozilla), 2014-09-30T19:18:03Z, "Having a non-enumerable Array.prototype.contains may not be web-compatible": "a web browser cannot ship a non-enumerable method named 'contains' on Array.prototype. The options, therefore, are: 1) Make the method enumerable. 2) Name the method something else. 3) Don't ship the method until every site that currently uses the buggy versions of MooTools (which is every site that uses MooTools, since they only fixed it 4 days ago)." https://esdiscuss.org/topic/having-a-non-enumerable-array-prototype-contains-may-not-be-web-compatible (He also gives the bugzilla case: bugzilla.mozilla.org/show_bug.cgi?id=1075059.)
- Domenic Denicola, 2014-09-30T23:58:55Z, "Array.prototype.contains solutions": "So, guess that proves I should never say 'this will be easy!' before working on a feature. Yay, the web." Options: rename to `has`; make `contains` a getter with a setter that does [[DefineOwnProperty]]; or "General hacks. I joked about @@unMooToolsables, but seriously, we could do something similar to @@unscopables ... `@@enumerableWhenAssigned`". Mark S. Miller replied: "If we do rename, it should be almost anything other than .has." John-David Dalton: "Renaming doesn't really solve the deeper issue. Extending native prototypes is a JavaScript 'thing'." https://esdiscuss.org/topic/array-prototype-contains-solutions (saved)
- Outcome: the tc39/Array.prototype.includes README (raw.githubusercontent.com/tc39/Array.prototype.includes/master/README.md, saved as `es-discuss-includes-readme.txt`): "This proposal was formerly for Array.prototype.contains, but that name is not web-compatible ... Per the November 2014 TC39 meeting, the name of both String.prototype.contains and Array.prototype.contains was changed to includes to dodge that bullet." It also admits an inconsistency: "The web has classes like DOMStringList and DOMTokenList which are array-like, and have methods named contains with the same semantics as our includes. Unfortunately, meshing with those is not web-compatible".
- The pattern the proposal replaces (code in README): `if (arr.indexOf(el) !== -1) {` and "even `~arr.indexOf(el)`"; and `[NaN].indexOf(NaN) === -1`.
- Later naming debate: Axel Rauschmayer, 2015-10-13T20:33:13Z, "The name of Array.prototype.includes": "Shouldn't the method be called Array.prototype.has, then?" Domenic answered with a link to the README FAQ. https://esdiscuss.org/topic/the-name-of-array-prototype-includes
- Domenic's 2014 post also predicted: "MooTools's `flatten` (which seems like something we'd likely want)". For the 2018 `flatten` to `flat` rename ("SmooshGate") I did NOT find it on es-discuss: es-discuss threads I opened (2017-05-19 "flatMap or flatten" by Luan Nico; 2018-06-21 "Array#flat is coming to ES; would you like like some sugar with that?" by Michael Luder-Rosefield) do not discuss MooTools. SmooshGate lives on GitHub (tc39/proposal-flatMap), unreachable. In the 2017 thread Jordan Harband points to bterlson's `proposal-flatMap`.
Evidence: strong for `contains` to `includes`, UNOPENED for flatten/flat.
Story shape: not a rejected idea; the rename is "web compat beat naming". Protagonist: Domenic Denicola / the MooTools maintainers (a library that fixed its bug "4 days ago").

---

## 5. ES6/ES2015 "1JS": no version opt-in, then the sloppy-mode retreat

**Idea (the old plan).** Opt-in versioning: `<script type="application/ecmascript;version=6">` or a `use version 6;` pragma, so new semantics could break old behaviour.
**Original defence.** Brendan Eich in "ECMAScript Harmony" (2008-08-13): "Both the appropriateness of new syntax, and the need to make incompatible (with ES3 extensions) semantic changes, motivate opt-in versioning of harmonized successor edition ... the web page author can write version parameters directly in script tag type attributes". https://esdiscuss.org/topic/ecmascript-harmony
**Who ended it.** David Herman (Mozilla), "ES6 doesn't need opt-in", timestamp 2012-01-01T01:46:40Z (that is 31 Dec 2011 evening US time, so the post dates itself "Happy new year"). https://esdiscuss.org/topic/es6-doesn-t-need-opt-in (saved, large thread, 588 KB).
Exact: "There's been grumbling lately about the ES6 version opt-in [1]. The detractors are not right about everything, but it's true that both the MIME type opt-in: `<script type="application/ecmascript;version=6"> ... </script>` and the pragma opt-in: `use version 6;` are painful -- ugly, verbose, and a permanent tax for opting to use the new semantics." ... "We can do better, and the way we can do it is with modules." ... "And the benefit we get is just one JavaScript." Then: "Any ES6 feature that breaks web-compatibility can be made available only within module code. For example, if `let` as a keyword breaks the web, then in global code we treat it as an identifier, but we treat it as a keyword once you're inside a module." Also in that same message: giving up on removing `window` from the scope chain ("Short answer: giving up.") and `use module;` as an indentation-saving pragma. Code (exact): `module foo { }` ; note `module is {}` ambiguity "with contextual infix operators like `is` and `isnt`".
**Then the retreat.** Mark S. Miller, "The 1JS experiment has failed. Let's return to plan A.", 2012-12-26T22:03:45Z, https://esdiscuss.org/topic/the-1js-experiment-has-failed-let-s-return-to-plan-a (saved, 120 KB). Exact: "Between this data, Apple's decision as recorded at bugs.webkit.org/show_bug.cgi?id=27226#c4, the new function syntax micro-modes, and the 'let' issues already discussed, I reiterate that we should stop trying to twist the language to somehow shoehorn ES6 features into non-strict mode." and "This experiment has failed, so we should now return to plan A. Any ES6 features that don't fit into non-strict mode without contortion, including 'let' and nested 'function', should be available only in strict mode." Data was posted by Brian Terlson (Microsoft) (MarkM thanks him). Rick Waldron's reply, 22:25Z: "Proclaiming 1JS has failed just because we've learned that block scoped function declarations ... is counter-productive rhetoric". Dave Herman 22:27Z: "I think the MIME type idea, while obviously attractive for our purposes, would've had terrible consequences for programmers, and I really hope we don't have to relitigate that debate."
Afterlife: `let`, `class` etc. strict-only; modules implicitly strict. Sloppy-mode `function`-in-block semantics became Annex B (already an essay, skip). I did not open ES2015's final text for this claim; the "modules imply strict" part is not confirmed on this list.
Evidence: strong for the two posts. Protagonists: Dave Herman and Mark S. Miller. Good arc: opt-in (2008) -> "one JavaScript" (Dec 2011) -> "failed" (Dec 2012).

---

## 6. `typeof null === "null"` (the fix that never landed)

**Idea.** Make `typeof null` return "null" (only under the Harmony opt-in).
**Who.** Tom Schuster (Mozilla contributor), "typeof null", 2011-04-19T21:56:06Z, citing wiki pages `strawman:object_isobject` and `proposals:typeof`: "just wanted to ask what's going to happen with typeof null, i am a lot in the favor of changing it to say 'null'." Andreas Gal (Mozilla), 22:03Z: "I think there is pretty broad consensus that this will affect the web." Brendan Eich, 22:14Z: "Hang on. The proposal is to change typeof null == 'null' only under opt-in to Harmony." https://esdiscuss.org/topic/typeof-null (saved, 114 KB; 45 messages)
**What killed it.** The opt-in died. David Herman, 2012-05-08T21:45:11Z: "Changing typeof null always seemed questionable to me in terms of value. It doesn't really give you significant new functionality, it just kinda seems 'more sensible'. But adding it would just make things more messy ... And then once we moved to 1JS, it just seemed that much worse to have the variability, since the exact same code can have different meanings right near each other". His code (exact): `export var y = typeof null;` / `console.log(x)     // "object"` / `console.log(Foo.y) // "null"`. He proposed a library alternative: `import type from "@std";` / `console.log(type(null)) // "null"` and said "I'd support that."
Rick Waldron had asked (2012-05-08T16:19:23Z), "Aware that that typeof null has been rejected, but I was wondering if it could be revived via the implicit 'opt-in' path". Rick later (2012-12-26, in the 1JS thread): "I'd rather abandon the one feature for the greater good." (So even supporters sacrificed it to 1JS.)
Douglas Crockford, 2012-05-09T03:10:09Z (in same thread): "The issue isn't typeof null. null === is a more convenient test. The issue is that typeof object gives a false positive when the value is null. So sensing that a value is an object is error prone. We need a simple, reliable test for objectness."
Also in 2008 the same list: "typeof null, and criticism of idiots who wrote isNull" (index page 197) exists; not opened.
Evidence: strong. The link to #5: a one-bug fix that fell with the opt-in mechanism. Note: I did NOT find a message in which the committee formally "rejects" it; Rick's "has been rejected" is the closest statement.

---

## 7. Paren-free syntax: `if x > 3 { ... }`

**Idea.** Drop the parentheses around the head of `if`/`while`/`for`, require braces.
**Who.** Brendan Eich, blog "Paren-Free", 2010-11-24 (page footer: "Posted on November 24, 2010 by Brendan Eich"), https://brendaneich.com/2010/11/paren-free/ (saved). His own code, exact:
```
<script type="harmony">   // placeholder MIME type
if year > 2010 {
    syntax++
}
for i in iter {           // i is a fresh let binding!
    frob(i)
}
while lo <= hi {
    let mid = (lo + hi) / 2
    // binary search blah blah blah
}
... return [i * i for i in range(n)]   // array comprehension
</script>
```
Exact: "No parentheses around control structure 'heads'. If Go can do it, so can JS. And yes, I'm using automatic semi-colon insertion (JSLint can suck it)." and "I swore I'd never blog at length about syntax, but here I am. Syntax matters, it's programming language UI."
**What killed it.** Waldemar Horwat (Google), "Another paren-free gotcha", 2011-09-28T21:11:05Z, https://esdiscuss.org/topic/another-paren-free-gotcha (saved). Exact code: 
```
if (a + b/g > f) f = a + b/g
```
"Convert it to paren-free: `if a + b/g > f {f = a + b/g}`  ... However, later someone discovers that the code had a logic error ... `if (a + b)/g > f {f = (a + b)/g}` Oops. Now the / starts a regexp. There is an extra closing brace which will simply close the enclosing scope early, so a syntax error likely won't appear for a while." Also an ES5 example where `if (a + b)` newline `(x.y)()` newline `z++` "silently changes the meaning of the program". Douglas Crockford, 22:38Z, defended it: "These are indeed concerns. But paren-free is still worthwhile ... My argument with Thompson and Ritchie is that they chose which pair was required, and they picked the wrong pair."
**Obituary on the list.** kdex, "Paren-free heads strawman", 2016-02-01T11:13:57Z: "I've noticed that there's a strawman that has been left untouched for quite a while ... The strawman hasn't been updated for five years". Andreas Rossberg (Google), 2016-02-01T17:17:49Z: "Will `if x (y) (z);` parse as `if (x) ((y)(z));` or `if (x(y)) (z);`? And how do you parse it without infinite look-ahead?" Brendan, 17:39Z: "Braces required, see the old strawman." and then (his longer reply): "The paren-free meme did 'stick' with Rust, but it seems doomed for JS on account of the problems Waldemar Horwat raised ... the proposal predates 1JS (note my last message talks about 'opt in') and needs a champion who can resolve the refactoring hazard worry (if possible)." https://esdiscuss.org/topic/paren-free-heads-strawman
Afterlife: lives in Go, Rust, Swift (not opened; do not claim Swift). The idea shows up in Brendan's post as bundled with array comprehensions (also dropped, see #9).
Evidence: strong. Nice, tight story with a named champion and a named executioner (Waldemar's regexp-after-paren example).

---

## 8. Block lambdas / `#`-style short functions before arrows won; the `<|` operator

**Block lambdas.** Axel Rauschmayer asked 2011-08-30T14:22:17Z (https://esdiscuss.org/topic/an-news-on-block-lambda-versus-arrow-function-syntax): "Is there a consensus building in TC39 for one or the other? Will any of them make it into ES.next?" Mark S. Miller, 15:53:57Z: "On this matter, the one point on which we have achieved consensus is not to do both ;)." Dmitry Soshnikov: "The main thing of blocks is TCP where we can exit from passed closures to the outside, but not to the caller." Later thread "Block lambda is cool, its syntax isn't", Thaddee Tyl 2012-01-12T21:26:14Z, complains Ruby's `|a, b|` is ugly; Allen Wirfs-Brock replies the paren form is ambiguous with blocks (exact code in thread: a block like `a + b}` "already has a meaning"). https://esdiscuss.org/topic/block-lambda-is-cool-its-syntax-isn-t (saved, 330 KB). I did NOT open the original block lambda proposal post (Herman/Eich, 2011), nor the thread that ended it ("Blocks: minimal or multiple kinds?" etc., index pages 140-141).
**The `<|` ("triangle") operator.** Allen Wirfs-Brock's prototype-setting operator `proto <| { }`. Allen, 2012-03-17T17:09:58Z: `let instance = proto <| { };  //instance is new object with no own properties who [[Prototype]] is proto`. Russell Leggett proposed `:` instead (2012-03-17T09:03:35Z: `let email = Email:"russell.leggett at gmail.com";` and `[1,2,3].map( f:(num){return num * 2;} );`); Allen (15:39:57Z): "that creates an ambiguity ... with the use of : as a statement label designator ... However, unless I'm overlooking something, :: would work just fine. `let email =  Email :: "ressell.leggett at gmail";` ... I think this it it! We should replace the <| symbol with ::" Herby Vojcik objected `::` was used in E4X. https://esdiscuss.org/topic/let-s-replace-with-was-breaking-up-the and https://esdiscuss.org/topic/breaking-up-the-operator-between-creating-instances-and-extending (both saved). Index shows threads "Could <| be spelled 'extends'?", "How about replacing <| with ->", "<| with function RHS is brittle", "Alternative syntax for <|" (pages 107, 135, 136, 144). Final fate on the list: NOT confirmed (I did not open the thread where it was removed).
**Afterlife link.** `::` later became the "bind operator" (index shows "Has the bind operator been revoked from proposal?", 2016-03-05, https://esdiscuss.org/topic/has-the-bind-operator-been-revoked-from-proposal, answer: only Stage 1+ proposals are on the main page; Stage 0 on stage0.md). I could not confirm the bind operator's formal rejection, only that it was Stage 0 in March 2016.
Evidence: medium (block lambda ending not opened).

---

## 9. Array / generator comprehensions (in the ES6 draft, then removed)

**Idea.** Python/SpiderMonkey-style `[x*x for (x of y)]` and `(for x of y ...)` in ES6.
**Who removed.** Dave Herman argued in a talk "A Better Future for Comprehensions" (speakerdeck link cited by Andy Wingo). Andy Wingo (Igalia), "A reprieve for ES6 comprehensions", 2014-06-06T11:57:37Z, https://esdiscuss.org/topic/a-reprieve-for-es6-comprehensions (saved): "dherman has argued that comprehensions should be removed from the ES6 draft ... The argument is that the existing comprehension mechanism is incompatible with future extensions, notably parallelism." "(Disclaimer: I did the work to adapt SpiderMonkey's comprehensions to ES6 syntax/semantics, and have a colleague that was working on doing the same in V8.)" Syntax in his message: array comprehensions `[for x of y z]`, generator comprehensions `(for x of y z)`.
**After.** Kevin Smith, "Comprehensions, Where Art Thou?", 2014-08-11T13:03:02Z, https://esdiscuss.org/topic/comprehensions-where-art-thou (saved): "I still don't quite understand the motivation for removing comprehensions from ES6. They are a well-loved feature of Python". His code: `var list = [...(for x of iterable if somePredicate(x)];` Andy Wingo, 13:49:05Z: "I love array comprehensions -- they are light-weight both from a performance and syntactic point of view ... at least in SpiderMonkey you get a lovely ionified loop." and "we end up in current situation of punting on both of them for now." He explains the combinator alternative with `Iterable.prototype.lazy = function* () { for (var x of this) yield x; }` and `Iterable.prototype.if = function* (pred) {...}`.
Later echo: Isiah Meadows, 2018-06-21, "Array#flat ... sugar", explaining why a new spread syntax is unlikely: "the old proposed comprehension syntax got omitted in favor of just using `map` and `filter` (arrow functions are concise enough)". https://esdiscuss.org/topic/array-flat-is-coming-to-es-would-you-like-like-some-sugar-with-that
Related: SpiderMonkey's comprehension is the "ES4-era JS 1.7" feature (Brendan's Harmony post lists JS1.7/1.8 "simple desugarings"). Not verified that Firefox removed the non-standard version (not opened).
Evidence: strong for the removal being argued, medium for exact decision date (not in these threads). Protagonist: Andy Wingo (defender) vs Dave Herman (remover).

---

## 10. Proper tail calls: out of ES4, ES2015 in, "syntactic tail calls" fights

**ES4 era.** Peter Michaux, "proper tail calls", 2008-01-19T05:36:03Z, https://esdiscuss.org/topic/proper-tail-calls (saved, 260 KB): "Will proper tail calls be implicit in ES4 or will there be a need for special syntax? ... it seems there is a suggestion that the spec will only require proper tail calls with a 'goto' statement." Brendan, 06:49Z: two axes of division "E/I: explicit or implicit; S/X: statement or expression form". He quotes graydon: "we're meandering aimlessly towards a system that claims to provide a way to make tail calls, but in which nobody can ever figure out where or when they're actually getting tail calls. I don't think it'll be useful to ship such a language." Peter, 2008-07-06T22:14:27Z, "proper tail calls still out of es4?": Brendan, 22:52Z: "My belief is that if proper tail calls are to make a come-back, it will be through implementors leading the way." https://esdiscuss.org/topic/proper-tail-calls-still-out-of-es4
Earlier: Jeff Walden, 2007-03-27T06:53:43Z, https://esdiscuss.org/topic/tail-calls, commenting on the ES4 proposal `developer.mozilla.org/es4/proposals/proper_tail_calls.html`.
**ES2015.** I did not open the ES2015 outcome or the "one engine shipped" claim; the index shows later threads ("Why no tail calls from generators?", "Missing PrepareForTailCall in Function.prototype.apply", "PTC and 'SHOULD' vs 'MUST'", pages 35, 43, 158) which I did not open. UNCONFIRMED: syntactic tail calls (STC) 2016 and the one shipping engine.
Evidence: strong for ES4-era, none for the later half. Story potential: a feature voted out of ES4 (2008), in ES2015, and "shipped by one engine" - the later part needs sources (V8/WebKit/Firefox bug trackers and TC39 notes).

---

## 11. `Function.prototype.toMethod`, dropped from ES6 (a `super` primitive)

**Idea.** `toMethod(homeObject)` to rebind a function's `super` home object; a primitive for mixins.
**Who.** Allen Wirfs-Brock. In "any toMethod() use case ?", 2013-12-03T17:15:13Z, https://esdiscuss.org/topic/any-tomethod-use-case (saved): "toMethod is a low level primitive that can be used to implement things like Object.mixin in a manner that works correctly with functions that reference super." Andrea Giammarchi had asked (2013-12-03T03:51:37Z) "if anyone would be so kind to provide a concrete/real-world use case". Allen's code (exact, indentation flattened by the site): `class P { }` / `class C extends P {` / `foo() {` / `super();` ... `P.prototype.foo = C.prototype.foo.toMethod(P.prototype);` "you would not get the infinite recursion, instead you would get two f's followed by a 'method not found'." Giammarchi: "Object.mixin ... has been abandoned".
**Dropped.** Allen Wirfs-Brock, 2015-02-23T20:47:59Z, "A Declarative replacement for toMethod": "Here is a new proposal for a declarative replacement for Function.prototype.toMethod which was dropped from ES6 earlier this year", https://esdiscuss.org/topic/a-declarative-replacement-for-tomethod (saved, 36 KB). Claude Pache's reply sketch (exact): `export const someMixin = obj => obj .= {` / `method1() {return super.method1()},` / ... `C .= class {` / `m2() {super.m2()}` / `}`.
Afterlife: replacement proposal (`mixin` / `.=`); outcome not opened. Evidence: strong for the drop; weak for afterlife. Narrow story; probably not a lead.

---

## 12. Cancelable promises / Cancel Token (withdrawn)

**Idea.** A way to cancel an in-flight promise (originally `promise.cancel()`).
**What the list shows.**
- Glen Huang, "Cancelable promises proposal", 2015-08-03T00:43:07Z, https://esdiscuss.org/topic/cancelable-promises-proposal (saved, 105 KB): "I was discussing with Jake Archibald about cancelable promises the other day ... the abort API represents a strong use case for cancelable promises." His code (exact): `let query = queryDB(sql);` / `query.done.then(data => console.log(data));` / `query.abort();` and `query.done.ignore(updateView); // deregister callback, updateView and log will never be called`. Credit given: "Kyle Simpson and Jake Archibald".
- Isiah Meadows, "Cancel Token proposal withdrawl", 2017-01-06T01:08:55Z, https://esdiscuss.org/topic/cancel-token-proposal-withdrawl (saved): "The latest proposal has been withdrawn due to Google resistance regarding performance." (links to tc39/proposal-cancelable-promises and issue #70 comment 267414933, which I COULD NOT open: github.com returns 403/blocked). Domenic Denicola, 01:24Z: "Why do you say 'regarding performance'? That seems made up with no evidence." Isiah, 01:53Z: "I may have misremembered the general reason ... but I've yet to see anything significant in the open about why they were so against it."
So: the withdrawal message itself (Dec 2016, Domenic) is NOT on es-discuss in what I opened; only a user's question about it. The README on raw.githubusercontent.com may state the status (not fetched). Afterlife (AbortController/AbortSignal in DOM) not opened.
Evidence: weak/medium. Interesting detail: a withdrawal whose reason the community could not find, Jan 2017.

---

## 13. `is` / `isnt` operators (egal), and the `is` pun with CoffeeScript

Brendan Eich, "egal harmony proposal updates", 2011-05-11T21:15:42Z, https://esdiscuss.org/topic/egal-harmony-proposal-updates (saved): "See harmony:egal -- I took the liberty of renaming 'eq' to 'is' and I made the operator idea from the November TC39 meeting concrete. Note that egal as an 'is' operator, with 'isnt' as the not-egal operator, differs from CoffeeScript's 'is' and 'isn't, which are sugar for === and !== respectively ... If ES.next standardizes this proposal, Coffee will cope." Outcome: `Object.is` shipped (I did NOT open that here; known from ES2015 but unconfirmed); the operators did not. Evidence: medium; no obituary found.

---

## 14. E4X (ECMA-357) native XML

On the list in 2012: David Bruant, "Better Native XML Support", 2012-01-16T17:51:08Z, https://esdiscuss.org/topic/better-native-xml-support (saved): quotes Nuno Job: "This is the most commented open issue on V8: code.google.com/p/v8/issues/detail?id=235 Unfortunately people didn't agree on E4X". Bruant suggests quasis. Isaac Schlueter (2012-01-17T16:38:07Z): "I think that requiring a user load a parser to handle XML is perfectly fine." Grant Husbands lists E4X syntax: `expr..ident // descendant selection`, `expr.@ident // attribute selection`, `expr.* // All-children selection`, `expr.(filter) // Filtering a set, with an implicit 'with'`. Link to template literals: "quasis" (`harmony:quasis`) -> ES2015 template literals (the quasis wiki page not opened). Why TC39 dropped E4X: NOT on this list in what I read. Evidence: weak for the death; fine for the afterlife (quasis).

---

## 15. Module Loader API (dropped from ES6)

David Bruant, "State of the Loader API", 2015-02-23T10:02:55Z, https://esdiscuss.org/topic/state-of-the-loader-api (saved): "I was trying to find the module Loader in the latest draft, but found out that it's been removed from it". Quoting TC39 notes: "YK: The loader pipeline will be done in a 'living spec' (a la HTML5) so that Node and the browser can collaborate on shared needs." Ian MacLeod: "I think its latest home is whatwg/loader". The index has ~30 loader threads from 2013-2014 (pages 59-110: `Loader.parse ?`, `Loader Hooks`, `The case for modular Loader.`), none opened except this. Evidence: medium; could be a story about "the part of ES6 modules that never made it" (needs notes).

---

## Leads I could not support from es-discuss (do not rely on)

- SIMD.js: only found "Getting SIMD.js into the TC39 repository" and "Value types, SIMD and standardization stages" (Daniel Ehrenberg, 2015-06-25: "it's OK to bring SIMD to Stage 4 before value types are there as long as we have a general understanding that value types are on track"). No withdrawal message found. https://esdiscuss.org/topic/value-types-simd-and-standardization-stages
- "Strong mode"/SoundScript: no thread titles in the index mention them (index grep). Not on es-discuss under that name.
- Object.prototype.__proto__ arguments: not searched beyond the index (no title hit).
- Guards/trademarks: index has "Status/Thoughts on Guards?" (page 69), "Minimal type guards?" and "Preparing for type guards" (pages 142, 149) from 2012; unopened.
- Expression closures: "Expression Closures as Compliment to Arrow Functions" (index page 57) unopened. Brendan's Harmony post (2008-08-13) calls them one of the "simple desugarings" with "favorable comments".
- Bind operator: only the Stage 0 listing found (see #8).
- SmooshGate: not on es-discuss (see #4).

---

## Surprises (things that contradict the usual telling)

1. **The ES4 killing blow was "packages" in April 2008 (Lars Hansen and Jeff Dyer), four months before "Harmony".** Harmony's own text says "like packages before them, this past April". The usual story starts at the August message.
2. **There was never an ES4 edition and the "3.1" name was a rename.** Mark S. Miller, 2009-03-30: "we decided to renumber EcmaScript 3.1 to become EcmaScript 5 ... ES4 will continue to be a valid designator for the old proposal".
3. **Brendan Eich's own later reason for ES4's failure is types, not politics:** "on the Web it's very hard to know when to typecheck. Code loads all the time." (2013-08-23).
4. **Decimal was deferred in September 2008 by Crockford and Brendan together, over a `typeof` puzzle, and a V8 engineer in 2009 asked who does money client-side.** Brendan's counter was a bug report from Netscape 2 or 3 days (`79.46-39.96`).
5. **`typeof null` fell because of the opt-in mechanism, not on its merits:** David Herman (2012-05-08) says once 1JS existed, having two meanings of `typeof null` "right near each other" was worse than the quirk; and Rick Waldron, a champion of the fix, offered it up as the feature to abandon "for the greater good" (2012-12-26).
6. **Mozilla's own SpiderMonkey shipped String.prototype.contains first and broke MooTools 1.2 sites in 2012; the fix that unblocked Array.prototype.contains came from MooTools four days before Boris Zbarsky's 2014-09-30 message.** And the Array rename to `includes` left the web's own `DOMTokenList.contains` out of sync ("we will have to accept this inconsistency").
7. **Object.observe was withdrawn partly on the strength of a framework (Polymer) rewriting itself without it,** and the node-core reaction in the same thread (Jeremiah Senkpiel) is the "removing features" cost for Node's LTS line (Node v0.11.4 unflagged, 30 months of v4 LTS).
8. **Paren-free was killed by a regexp:** after `if (a + b)/g > f {...}` the `/` starts a regular expression (Waldemar Horwat, 2011-09-28). Even its author later wrote "doomed for JS" (2016-02-01).
9. **es-discuss.org shows its own Algolia search keys in page source** (client-side search). I did not use them.

## Could not open

- https://mail.mozilla.org/pipermail/es-discuss/ : proxy returned HTTP 502 ("connect_unreachable"), tried once as instructed. The site's own "View Original" links point there; none were opened.
- web.archive.org: not tried (told not to).
- github.com pages and api.github.com (issue/comment API): blocked from this session ("GitHub access to this repository is not enabled"). raw.githubusercontent.com works for repo files (used for the includes README). Wanted: tc39/proposal-cancelable-promises issue #70 comment 267414933; Domenic's December 2016 withdrawal; rwaldron/tc39-notes for committee decisions (the November 2014 `includes` rename; the 2012-2014 comprehension and toMethod removals; SmooshGate 2018; PTC); tc39/ecma262 stage0.md.
- wiki.ecmascript.org (strawman pages `strawman:paren_free`, `harmony:egal`, `proposals:typeof`): not fetched; descriptions above come from the list messages quoting them.
- chromestatus.com (the 0.0169% figure); bugzilla.mozilla.org (bug 5856, 781796, 789036, 1075059); bugs.webkit.org 27226: cited by the messages, not opened.
- Threads not opened but identified in the index (slug in `es-discuss-topic-index.txt`): "Block Lambdas: break and continue" (page 140), "Blocks: minimal or multiple kinds?" (141), "Could <| be spelled 'extends'?" (107), "Status of Chrome Proxy in face of Object.observe removal" (45), "Why no tail calls from generators?" (35), "Operator Overloading Strawman for Harmony" (189), "Poll re Decimal" (196), "BigInteger, BigDecimal, etc..." (197), "Expression Closures as Compliment to Arrow Functions" (57), "Status/Thoughts on Guards?" (69), "Do-Expressions Proposal Stalled?" (20), "What is holding back Decorators ?" (10), "My mental reconciliation of ES4, Adobe's leading web design tools and Microsoft's best of breed developer tools" (204), "ES4 Security" (200), "Typed Vector.<T> construction" (199), "Announcement: ECMScript 4 to ECMAScript 3 translator released" (200).
