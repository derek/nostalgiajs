# Research: rejected ideas on the WHATWG list (2004 to 2014)

Opened 2026-11-20. Method: downloaded every monthly gzip of https://lists.whatwg.org/pipermail/whatwg-whatwg.org/ (2004-2014, saved in `sources/wg/`), parsed and de-duplicated them locally (about 42,000 messages), searched, and read the messages below in full. Each message used is extracted to `sources/whatwg-<name>.txt` (first line = URL; where the pipermail article URL could not be resolved, the line gives the monthly gzip plus the Message-ID, and the message can be found by that ID). Everything quoted below is copied from those files. Times are as in the message header.

A note on URLs: pipermail article numbers are not what you would guess (they are not sequential by date). The URLs marked [article] were opened and checked (subject, sender and first line of the body match). Those marked [gz] are located by monthly gzip + Message-ID only.

Quoted text inside a message (lines starting ">") is the other person's words; I say so when a quote below is a quoted passage.

## Ranked inventory (what I confirmed)

### 1. Web Forms 2.0 repetition templates (`repeat="template"`): dropped, and the `<template>` element they rejected came back

**Idea.** Let a form author mark one table row or list item as a template, and have the browser stamp out copies of it when an "add" button is pressed, with "remove", "move-up" and "move-down" buttons.

**Proposer and date.** Ian Hickson, in the Web Forms 2.0 draft he edited for the WHATWG (draft in circulation by 23 June 2004; first thread on the list 23-27 June 2004).

**Real syntax (copied exactly).**

From Anne van Kesteren's reply to Elliotte Harold, 7 Mar 2007 (Opera had it implemented and Harold was using it) [src: whatwg-repeat-2007-opera.txt, Message-ID `<op.totftqwz64w2qv@id-c0020.driveway.uu.nl>`], quoted from Harold's code:

```
<div id="observation" repeat="template" repeat-start="5">
   <label>Species:
     <input type="text" name="species[observation].name" value="" />
   </label>
   <label>Count:
     <input type="number" min='1'  value=""
            name="species[observation].number" />
   </label>
   <button type="remove" template="observation">Delete</button>
   <button type="move-up" template="observation">Move Up</button>
   <button type="move-down" template="observation">Move Down</button>
</div>
<div><button type="add" template="observation">Add Species</button></div>
```

From Hixie's reply about multiple e-mail addresses (found by search; message in 2004-2005 archive, subject "[wf2] ... type=email-single or type=email-multiple"; I have not saved that message as its own file, text copied from the parsed archive):

```
<ul>
 <li repeat="template" id="ccs">
  <input type="email" name="cc">
  <input type="remove">
 </li>
 <repeat/>
</ul>
<p><input type="add" template="ccs"></p>
```

From Hixie, 26 Jun 2004, quoting Matthew Raymond's complaint [article] https://lists.whatwg.org/pipermail/whatwg-whatwg.org/2004-June/042891.html [src: whatwg-repeat-2004-template-reply.txt]: the "current model" in WF2 looked like

```
<tr id="order" repeat="template">
 <td><input type="text" name="row[order].product" value=""></td>
 <td><input type="text" name="row[order].quantity" value="1"></td>
</tr>
```

and Raymond's (quoted) alternative was

```
<template id="order"><!--
  <tr id="row[order]">
   <td><input type="text" name="row[order].product" value=""></td>
   <td><input type="text" name="row[order].quantity" value="1"></td>
  </tr>
--></template>
```

**First rejection of a `<template>` element (the 2004 reasons).** Hixie, 26 Jun 2004 [article] https://lists.whatwg.org/pipermail/whatwg-whatwg.org/2004-June/042891.html: "We don't want to do that because it requires allowing the <template> element anywhere (allowing an attribute anywhere is easy; allowing an element anywhere is not). Also, it wouldn't work in XML, where the comments can be dropped by the parser."

Hixie, 27 Jun 2004 [src: whatwg-repeat-2004-template-reply2.txt, Message-ID `<Pine.LNX.4.58.0406271619460.8483@dhalsim.dreamhost.com>`], on parsing: "An element would confuse non-WF2 UAs a lot more than an element [sic], and would cause definite parsing problems for HTML-based WF2 UAs. For example, in HTML4, the following: `<p> ... <p> ... <p> ...` ...is three siblings." and then "But what if you have: `<p> ... <template> <p> ... </template> <p> ...` ...? Does the <template> element end the first <p>, or not?"

Hixie, 22 Aug 2004 [article] https://lists.whatwg.org/pipermail/whatwg-whatwg.org/2004-August/044126.html: "That was my original design (when I was still at the drawing-on-paper- napkins stage). Doesn't work, because it wouldn't solve the most common use case, namely, repeating table rows. It's not compatible with the CSS table model, and it's not compatible with the HTML table model." And in the next message (same date): "Note that the repetition stiff [sic] in WF2 was never meant to be a generic repetition system. It's meant specifically for repeating form sections in HTML."

**Who built on it.** Dean Edwards (5 Feb 2007, saved: whatwg-repeat-2007-dean-libs.txt): his sourceforge project was "to provide WF2 support for MSIE. Because Mozilla, Opera and Apple were expected to provide native support we didn't bother to make the library cross-platform." He also says "There is a cross-browser implementation of the repetition model here: http://sourceforge.net/projects/repetitionmodel/ The repetition model implementation was written by Weston Ruter." Aaron Swartz used it in production (below).

**What killed it.** Hixie, in an interview quoted by Aaron Swartz, said "the repetition templates proposal is almost certainly going to be dropped" (Swartz is quoting a TechRepublic interview, which I did not open; link he gave: http://blogs.techrepublic.com.com/programming-and-development/?p=718).

Earlier hint: Hixie, 21 Apr 2008 [src: whatwg-repeat-2008-hixie-removed-in-favour.txt, thread "The target="" attribute"]: "(Similarly, Web Forms 2's repetition model, and HTML5's template model, should both probably be removed in favour of simply a supporting infrastructure that allows them to be implemented by script.)"

Aaron Swartz, Thu, 11 Sep 2008 17:04:09 -0400 [article] https://lists.whatwg.org/pipermail/whatwg-whatwg.org/2008-September/058494.html: "In the 11 September 2008 edition, section 1.6 of the HTML5 WD ... links to Repetition Templates at #repetition but there is no element with that ID. ... Can you please say why? I was quite fond of this proposal and we're using it on OpenLibrary.org, where it's been a great boon to our development."

Hixie's reply, Thu, 11 Sep 2008 21:11:33 +0000 [article] https://lists.whatwg.org/pipermail/whatwg-whatwg.org/2008-September/058495.html: "It solves about 5% of the use cases. There are dozens of other solutions that cover overlapping areas, but all of them just handle 5% of the real needs. People have so many varied needs that we are better off providing an infrastructure for templating than providing a single solution." ... "Nothing stops you from continuing to use it -- indeed, if you are using it now, then that demonstrates that it is possible to do it without UA support. :-) With the new data-* attributes, we can allow a thousand templated flowers to bloom and we don't need to honour any of them with the special spec annointing oil (as it were)."

**Afterlife: the `<template>` element came back.** Rafael Weinstein, Thu, 17 Nov 2011 11:15:28 -0800, "[whatwg] Declarative Inert DOM (e.g. the <template> element)" [article] https://lists.whatwg.org/pipermail/whatwg-whatwg.org/2011-November/033868.html [src: whatwg-template-2011-weinstein.txt]. Problem statement: "Dynamic web pages often need to author and deliver fragments of DOM which *may* be used at some point during the page's lifetime, but have them be "inert" until they are needed." He lists what pages do now: "text literals within js files -hidden text areas -script tags with non-script file types -comment tags -elements marked as display: none". Proposal markup:

```
<template>
 <div>
  <span>Hello, world (at some point)</span>
 </div>
</template>
```

Hixie, 4 May 2012 [article] https://lists.whatwg.org/pipermail/whatwg-whatwg.org/2012-May/035677.html [src: whatwg-template-2012-hixie-parser.txt], on the parser change needed so `<template><tr><td>Foo</td></tr></template>` works: "I don't understand how this would work in the parser. The parser doesn't have a "context element" concept, that's only for fragment parsing." And on a proposed behaviour: "That seems pretty weird." (This is the same table-parsing wall he named in 2004.) Hixie, 2 Nov 2012 [src: whatwg-template-2012-hixie-adopt.txt]: "My plan is to not work on this myself in the near term, and to adopt for the HTML spec whatever parser changes end up getting implemented by multiple browsers..."

**Evidence strength.** Strong. All primary mail. NOT confirmed by me: that `<template>` shipped in browsers (I did not open a source; I know from memory it did, so find one before writing). Gap: I did not find the exact date the repetition section left the spec; Swartz (11 Sep 2008) is the best marker.

**Why this is the best story.** A named protagonist who lost something (Aaron Swartz, OpenLibrary.org), a named editor who explains why in plain words, a turn on a date, and an ending that rhymes: the element rejected in 2004 for table-parsing reasons is the one that arrived in 2011-2012, and the table-parsing problem is still what Hixie objects to.

---

### 2. `<a ping="">`: a tracking attribute proposed in the open, in a thread titled "Is it evil?"

**Idea.** A links attribute listing URLs the browser should notify when the link is followed, so sites stop routing clicks through redirect scripts, and so the user's browser can show (and disable) the tracking.

**Proposer/date.** Ian Hickson, Fri, 21 Oct 2005 18:43:59 +0000, "[whatwg] <a href="" ping="">" [article] https://lists.whatwg.org/pipermail/whatwg-whatwg.org/2005-October/047167.html [src: whatwg-ping-2005-hixie.txt].

**Key words (exact).** "One of the patterns I've seen a lot while looking at big sites is this: `<a href="record?url=http%3A%2F%2Ffoo.example.com/"> Foo </a>` ...where "redirect" [sic] is a CGI script that records that the user followed the link". Four reasons: "1. Improving sites ... 2. Keeping track of which adverts were clicked on, for book-keeping. 3. Improving services ... 4. Uniquely identifying and tracking a user for evil purposes." "Now, because of number 4 above, I'm guessing this is going to be controversial ... Thoughts? Is it evil?" The thread eventually has about 98 messages.

**Objections.** dolphinling (no surname given in header), 21 Oct 2005 17:22:45 -0400 [src: whatwg-ping-2005-dolphinling.txt]: "It's not evil in and of itself, but it won't ever be useful. Anyone who just finds themselves curious won't be able to use it reliably for at least 10 years, because of internet explorer. Anyone who actually _needs_ to know won't ever be able to use it, because it's easily disableable." Charles Iliya Krempeaux (works in advertising), same day [src: whatwg-ping-2005-krempeaux.txt]: advertisers "will NOT use this unless they absolutely know it works" and need feature detection.

**Hixie's real code reply** [article] https://lists.whatwg.org/pipermail/whatwg-whatwg.org/2005-October/047171.html [src: whatwg-ping-2005-hixie-reply.txt]: "Oh, I know. My salary comes almost entirely from Web advertising. :-)" and the feature-detect shim:

```
<a href="http://example.com" PING="redirect?uri=http%3A%2F%2Fexample.com">
```
```
var links = document.getElementsByTagName('a');
for (var i = 0; i < links.length; i += 1)
  if (!links[i].ping && links[i].getAttribute('ping'))
    links[i].href = links[i].getAttribute('ping');
```
with: "Run this script once per page and it'll switch you back to using the old method of redirects, with the new user agents (that support ping) having a better UI."

**Later.** Lars Gunther (Keryx Web), 20 Sep 2008 [src: whatwg-ping-2008-gecko-backed-out.txt]: "BTW, Gecko had an implementation of the ping attribute they backed out due to spec changes." Hixie added the Origin header to ping processing on 2 Dec 2008 (list: "[whatwg] CSRFs and Origin header and <form>s"). Hixie, 14 Jun 2011 ("several messages (fwd)"): "There are advantages to sending hyperlink instrumentation data as obtained by ping="". For example, users get a measurably better user experience when they opt-in to the Search History feature, which adjusts Google rankings on a per-user basis based on past clicks." Referer-leak worry: thread "Referer header sent with <a ping>?" Jan 2008 [src: whatwg-ping-2008-referer.txt].

**Evidence strength.** Strong for the proposal and the debate. NOT confirmed: current browser status (I know from memory that Firefox ships it disabled/removed and Chromium/Safari ship it; need a source, e.g. MDN or caniuse). Not strictly "rejected": more "specified, contested, half-shipped".

---

### 3. Ogg Theora / Vorbis as the required `<video>` codecs: written in, then removed (Dec 2007), then abandoned in principle (June 2009)

**Idea.** Hickson's spec said browsers should support Ogg Theora and Vorbis so `<video>` would have one codec everyone could rely on.

**Original text** (quoted by James Justin Harrell, 10 Dec 2007 [src: whatwg-ogg-2007-12-spec-text.txt]): "User agents should support Ogg Theora video and Ogg Vorbis audio, as well as the Ogg container format. [THEORA] [VORBIS] [OGG]". Hixie, 16 Mar 2007 (thread "Video proposals") [src: whatwg-ogg-2007-hixie-should.txt]: "For now, the spec says that UAs SHOULD support Theora for video and Vorbis for audio, and SHOULD support the Ogg container format (it's not a MUST because some vendors may have legal reasons why they can't or won't support it, and there's no point making them non-conforming when they have no choice in the matter)."

**Removal.** Hixie, Tue, 11 Dec 2007 02:39:38 +0000, "Video codec requirements changed" [article] https://lists.whatwg.org/pipermail/whatwg-whatwg.org/2007-December/055408.html [src: whatwg-ogg-2007-12-hixie-removed.txt]: "I've temporarily removed the requirements on video codecs from the HTML5 spec, since the current text isn't helping us come to a useful interoperable conclusion. When a codec is found that is mutually acceptable to all major parties I will update the spec to require that instead and then reply to all the pending feedback on video codecs." Replacement paragraph (quoted by Manuel Amador in "Removal of Ogg is *preposterous*", same day): "It would be helpful for interoperability if all browsers could support the same codecs. However, there are no known codecs that satisfy all the current players: we need a codec that is known to not require per-unit or per-distributor licensing, that is compatible with the open source development model, that is of sufficient quality as to be usable, and that is not an additional submarine patent risk for large companies."

Håkon Wium Lie (Opera CTO), 11 Dec 2007 17:15 +0100 [src: whatwg-ogg-2007-12-howcome.txt]: "I don't think this solves any problem, neither in the short term or the long term. I suggest that the "should" text is put back in."

Hixie's reply, 11 Dec 2007 09:34:24 [article] https://lists.whatwg.org/pipermail/whatwg-whatwg.org/2007-December/055427.html [src: whatwg-ogg-2007-12-preposterous-hixie.txt]: "Certain companies (Nokia and Apple among them) have reported that they still fear that undisclosed patents may exist that cover the relevant codecs, as they might exist for other formats like MPEG4/H.264." And: "Apple, Nokia, Microsoft and other large companies have stated that they will not support Theora purely based on the requirement in the spec. Having or not having this requirement in the spec thus makes no difference to independent authors." Dave Singer (Apple), same day [src: whatwg-ogg-2007-12-singer.txt]: "You seem quite convinced there is no risk; are you willing to offer the indemnity?"

Earlier: Apple's stance quoted by Ivo Emanuel Goncalves, 23 Jun 2007 [src: whatwg-ogg-2007-apple-quote.txt] ("should support in a spec does not denote a requirement. We could have a perfectly suitable implementation of audio and video as seen in this draft spec without having theora/vorbis codecs available" — he attributes it to Apple's WebKit developers; the Maciej Stachowiak reply is in the same thread).

**June 2009 "give up" email.** Hixie, Tue, 30 Jun 2009 04:50:31 +0000, "Codecs for <audio> and <video>" [article] https://lists.whatwg.org/pipermail/whatwg-whatwg.org/2009-June/062893.html [src: whatwg-ogg-2009-hixie-codecs.txt]. (Not literally "I give up".) Exact opening: "[This message is bcc'ed to around 100 people who at some point or other sent comments to the WHATWG list on this topic.] After an inordinate amount of discussions, both in public and privately, on the situation regarding codecs for <video> and <audio> in HTML5, I have reluctantly come to the conclusion that there is no suitable codec that all vendors are willing to implement and ship." The positions: "Apple refuses to implement Ogg Theora in Quicktime by default (as used by Safari), citing lack of hardware support and an uncertain patent landscape. Google has implemented H.264 and Ogg Theora in Chrome, but cannot provide the H.264 codec license to third-party distributors of Chromium ... Opera refuses to implement H.264, citing the obscene cost of the relevant patent licenses. Mozilla refuses to implement H.264, as they would not be able to obtain a license that covers their downstream distributors. Microsoft has not commented on their intent to support <video> at all." Why not just require Theora: "it wouldn't help get us true interoperabiliy, since the people who are willing to implement it are willing to do so regardless of the spec, and the people who aren't are not going to be swayed by what the spec says." His four conditions for a future codec: "is implementable without cost and distributable by anyone; has off-the-shelf decoder hardware chips available; is used widely enough to justify the extra patent exposure; has a quality-per-bit high enough for large volume sites".

**Evidence strength.** Strong. Caveat: this is the most written-about episode of all (hundreds of messages); the story is well known. What may be new: the 2007 text was only ever "SHOULD"; Hixie's own explanation was that a spec line changes nothing about what Apple ships; the thread titles from users ("preposterous", "eyes on you", "AGAINST Removal"). The afterlife (WebM, H.264 as de facto) is NOT researched here.

---

### 4. `<main>`: refused by the editor, implemented anyway, and in the spec by 2013

**Idea.** An element that marks the primary content of a page (skip links, reader modes).

**Protagonist.** Steve Faulkner (writes from The Paciello Group, signature "Technical Director - TPG"), author of the `<main>` extension spec; Simon Pieters (Opera) relays implementer support.

**Thread.** "A plea to Hixie to adopt <main>", 7 Nov 2012. Simon Pieters 15:23 +0100 [src: whatwg-main-2012-pieters.txt]: "My impression from TPAC is that implementors are on board with the idea of adding <main> to HTML, and we're left with Hixie objecting to it. Hixie's argument is, I think, that the use case that <main> is intended to address is already possible by applying the Scooby-Doo algorithm, as James put it -- remove all elements that are not main content, <header>, <aside>, etc., and you're left with the main content."

Hixie, Wed, 7 Nov 2012 19:38:02 +0000 [article] https://lists.whatwg.org/pipermail/whatwg-whatwg.org/2012-November/080101.html [src: whatwg-main-2012-hixie.txt]: "If implementors wish to implement something, my objecting is irrelevant. :-) Just implement it." "The reason there is no element <main> in the HTML spec currently is that there are no use cases for it that aren't already handled, right." His data argument: "Studying the data, as I have done in previous threads, has always indicated that there is actually no cowpath here for "main". As James says above, these classes and IDs are used for all kinds of combinations of content and headers, content and navigation, just content, etc." And: "However, I would recommend against implementing <main>, for the reasons given above." Also: "The strength of the wording will have basically no effect, let's be realistic here. Few authors read the spec."

To Ben Schwarz (who asked what to use between header and footer), 7 Nov 2012 22:41:57 [src: whatwg-main-2012-hixie-div.txt]: "If you just want it for styling purposes, <div> is perfect."

Faulkner's rationale (7 Nov 2012 14:53:45 +0000) [src: whatwg-main-2012-faulkner.txt]: "this means when fuly implemented authors will not have to add aria roles (built in vs bolt-on) the browsers do it already." Spec he cites: https://dvcs.w3.org/hg/html-extensions/raw-file/tip/maincontent/index.html (not opened by me).

**Ending.** 13 Feb 2013, "Is <main> now an official HTML5 element?": Faulkner [src: whatwg-main-2013-faulkner.txt]: "from the W3C HTML spec side the main element is in the HTML 5.1 spec and has been implemented in browsers". Hixie, 17:06:52 [article] [src: whatwg-main-2013-hixie.txt]: "<main> is currently in the HTML standard. That doesn't mean much, though. What means something is that <main> is now implemented by two browsers in their development builds. Once they ship in final versions, that's the point at which we know that the feature is part of the platform." (He also wrote in 2010, thread "'Main Part of the Content' Idiom", 4 Jun 2010, that the spec had an idiom instead; I did not read his reply in that thread.)

**Evidence strength.** Strong; all primary. Not covered: who first proposed `<main>` (there are threads in 2010 and earlier on other lists); which two browsers.

---

### 5. `<device>` (and `ConnectionPeer`): the first webcam element, replaced by `getUserMedia` in March 2011

**Idea.** An element that lets the user pick a camera/microphone and hands the page a stream.

**Syntax from the spec as shown on the list** (Nicklas Sandgren, 15 Sep 2010 [src: whatwg-device-2010-sandgren.txt], quoting the working draft):

```
<p>To start chatting, select a video camera: <device type=media onchange="update(this.data)"></p>
<video autoplay></video>
<script>
function update(stream) {
   document.getElementsByTagName('video')[0].src = stream.url;  }
</script>
```

Hixie's vision post, Tue, 13 Jul 2010, "The vision behind the <device> element and the ..." [src: whatwg-device-2010-hixie-vision.txt]: use cases "Video conferencing; Real-time games; Peer-to-peer file transfer" and "Ideally, I'd like the solution to involve no special code at the JS level".

Objection about privacy (Anne van Kesteren, 4 May 2010, replying to Julien Cayzac's suggestion of `<video><source src="webcam:640,480,25">`): "What is the model for protecting user privacy here?" [src: whatwg-device-2010-cayzac.txt has Cayzac's message; Anne's reply is in the next message in the same archive file].

**Replacement.** Hixie, Fri, 18 Mar 2011 04:45:06 +0000 [article] https://lists.whatwg.org/pipermail/whatwg-whatwg.org/2011-March/030941.html [src: whatwg-device-2011-hixie-replaced.txt]: "<device> has been replaced with a Geolocation-style API for requesting user access to local media devices (such as cameras)." and "the ConnectionPeer interface has been replaced with a PeerConnection interface that interacts directly with ICE and its dependencies." and "there is no longer a feature for direct file transfer or for reliable text messaging."

Reaction, 15 Mar 2011, jesperg at opera.com [src: whatwg-device-2011-jesper.txt]: "I just heard that <device> was canceled and replaced by navigator.getUserMedia()... Just wanted to point out a couple of use cases that I was looking forward to ... I was really looking forward to start playing around with USB MIDI interfaces to control my synth".

Earlier (9 Jan 2010, "Switching to an unversioned development model") Hixie wrote that "the only thing that's in the WHATWG HTML draft only (and not in any other spec elsewhere) is the <device> element, which is purely experimental and might not go anywhere." Hixie, 25 Jun 2010: "sections that are absent from the W3C version (e.g. <device>). These are, by definition, part of "HTML.next" rather than "HTML5"."

**Evidence.** Strong. Afterlife (getUserMedia, WebRTC) is only as far as the March 2011 mail; the later history needs other sources.

---

### 6. Client-side includes (`<include>`, `<iframe doc seamless>`): asked for in 2007 and 2008, refused by the editor on round-trip grounds

**Idea (2007).** Jonas Sicking (Mozilla), Mon, 23 Apr 2007 15:19:49 -0700, "<include> element" [src: whatwg-include-2007-sicking.txt]: "an element like <iframe> but that renders the linked page, instead of inside a square area, in flow with the main page."

```
<input oninput="dropdown.src = urihead + this.value"><br>
<div style="position:absolute;">
<include id="dropdown"></include>
</div>
```
He notes "Currently a lot more code is written to set up an XMLHttpRequest, send a request and insert the response into the rendered page" and that it would be limited to same-origin URIs. Maciej Stachowiak (Apple), 27 Apr 2007 [src: whatwg-include-2007-maciej.txt]: "In that case, wouldn't it make more sense to make in an attribute on iframe ... Different elements with identical processing model is a red flag, at least when the processing model is complex." and "if it is limited to same-site references as you suggest, I'm not sure what it really buys you over XMLHttpRequest and then setting innerHTML on the target element."

**Idea (2008).** "Client-side includes proposal" from Shannon (surname not given in header; shannon at arc.net.au), 18 Aug 2008. Hixie, 18 Aug 2008 07:40:48 [src: whatwg-include-2008-csi-1.txt]: "What advantage does this have over server-side includes? The <iframe doc="" seamless> idea has the advantage of not blocking rendering, which a client-side parsing-level include would." and "A TCP round-trip is very expensive. A client-side parsing-level include would mean that the parser would have to stop while a complete round-trip is performed." In 21:43:39 [article] https://lists.whatwg.org/pipermail/whatwg-whatwg.org/2008-August/058065.html [src: whatwg-include-2008-csi-2.txt] he answers cost/availability arguments: "there are also hosting providers that provide these features for very cheap (e.g. $120/year or less) ... If you're having trouble finding one, contact me privately and I can give you a coupon code for one." and "If it's just a static site, then you can just pre-generate the pages and upload the completed pages".

**Afterlife.** Seamless iframes and later HTML Imports are the ancestors/descendants; I did not source what happened to either (they were removed from browsers after 2014, out of my window). Confirm before writing.

**Evidence.** Strong for the proposals and refusals. Weak on afterlife.

---

### 7. The `<event-source>` element: became the `EventSource` API; the element was dropped

**Idea.** An element that opens a server push connection (what became Server-Sent Events).

Mike Dierken, Sat, 11 Jun 2005 14:37:40 -0700, "Interest in event-source discussion and design" [src: whatwg-eventsource-2005-dierken.txt]: "Several years ago I worked at a company called KnowNow where I spent a lot of time implementing browser based libraries and applications in JavaScript to do almost exactly what this definition of event-source describes." (The 2005 draft already had it.) Hixie's 22 Feb 2008 summary of changes [src: whatwg-eventsource-2008-hixie-summary.txt]: "Simplified the event stream format: removed the concept of 'commands'; changed the comment syntax from starting with a ';' to starting with a ':'" and "Made the MIME type of the new event stream format be text/event-stream; removed mention of the old format's type (application/x-dom-event-stream)."

Jonas Sicking, Tue, 17 Feb 2009 22:53:15 -0800, "<eventsource>/RemoteEventSource wierdness" [src: whatwg-eventsource-2009-sicking.txt]: "This could also replace the IMHO awkward <eventsource> element. I don't understand the value of having this element at all. It seems to me that if the only way you can use an API is through script, then making the API into an element is adding extra complexity to the HTML language for little to no gain." He proposes `x = new RemoteEventTarget('/events/ticker');`.

**Not confirmed:** the date the element left the spec (I did not find Hixie's reply); the constructor `new EventSource(url)` appears later. Need one more message.

**Evidence.** Medium.

---

### 8. Web SQL Database: "impasse", then a Working Group Note (Nov 2010)

**Idea.** An SQL API (SQLite) in the browser. Hixie, 25 Sep 2007, thread "Why SQL?" [article-not-resolved; src: whatwg-websql-2007-whysql-a.txt, Message-ID `<Pine.LNX.4.62.0709250756240.21662@hixie.dreamhostps.com>`]: "Because it's what most app developers are already used to -- the M in the widely used traditional LAMP stack is SQL." "Actually the primary use case for this is offline applications caching server data on the client ... I expect many authors will end up merely replicating their schema on the client, in fact." and "Different browsers will always be at different levels of development." Challenger: Andrew Fedoniouk, 24 Sep 2007 [src: whatwg-websql-2007-whysql-q.txt]: "And by the way what flavor of sql is used? ... Or we will declare that we all should have to use SQLite only?" and "I suspect that initial simple *Berkeley DB* alike proposal is what really needed". Dean Edwards, 26 Sep 2007: "I wonder about the term "SQL" appearing in HTML specs too.."

**End.** public-webapps, Arthur Barstow (Nokia), Sat, 6 Nov 2010 13:34:46 -0400, "CfC: to publish Web SQL Database as a Working Group Note; deadline November 13" [article] https://lists.w3.org/Archives/Public/public-webapps/2010OctDec/0451.html [src: whatwg-w3c-webapps-0451.txt]: quotes the spec's status: "This specification has reached an impasse: all interested implementors have used the same SQL backend (Sqlite), but we need multiple independent implementations to proceed along a standardisation path. Until another implementor is interested in implementing this spec, the description of the SQL dialect has been left as simply a reference to Sqlite, which isn't acceptable for a standard." and "*Note Well: by publishing a Working Group Note, the group sends a signal to the community that work on this spec has ended*". Hixie, 6 Nov 2010 22:09:33 [0453]: "A few months ago I turned off this particular "spigot" in my publishing pipeline (back when I removed the section from the WHATWG complete.html spec)". Nikunj Mehta, 9 Nov 2010 [0505]: "I am glad to see this after having brought this up last year at TPAC. I support this." Adrian Bateman (Microsoft), 9 Nov 2010 [0502]: "Microsoft supports publication as a Working Group Note." Jonas Sicking (Mozilla), 9 Nov 2010 11:03:37 -0800 [0506]: "I support this too."

**Surprise vs the usual telling.** The usual telling is "Mozilla refused." In the thread I read, the status text blames the lack of a second implementer, not any named company, and Mozilla's only message is "I support this too." (There may be earlier Mozilla statements on the W3C list that I did not search; the 2010-11-01 WebApps minutes the CfC cites, http://www.w3.org/2010/11/01-webapps-minutes.html#item09, were not opened.)

**Evidence.** Strong for the endpoint, medium for the debate.

---

### 9. `<dialog>` for marking up conversations (2005-2009), and `<hgroup>` (renamed from `<header>`, 2009)

**`<dialog>`.** An element for conversations, with `<dt>` as speaker and `<dd>` as words. Michel Fortin, Fri, 30 Mar 2007 12:22:28 -0400, "Tendious use cases for <dialog>" [src: whatwg-dialog-2007-fortin.txt]: "Here are some various potential use cases for <dialog> I've collected and which I think are problematic with the way the <dialog> element is currently defined." His markup:

```
<dialog>
  <dt>FRIEND FROM WORK:</dt>
  <dd>I am the loudest! I am the loudest!</dd>
  <p>(Everybody laughs.)</p>
  <dt>MOM:</dt>
  <dd>I had a lot of wine, and now I'm crazy!</dd>
</dialog>
```
He says "These to examples are non-conformant according to the current spec." Also IRC logs with `<time>21:57</time>` and `<dt>caker</dt>`. A 28 Feb 2008 "Thoughts on HTML 5" post (sender shown only as html at nczonline.net; name not in the header): "I'd rename this element as <conversation/> or <discussion/> to avoid such misunderstandings." Hixie (16 Apr 2005 reply to fantasai) had removed the "speakers and words" example from the `<dl>` definition ("Done."). I have NOT yet found the removal of `<dialog>` from the spec nor the later modal reuse of the name; needs another search.

**`<hgroup>`.** Hixie, 30 Apr 2009 [src: whatwg-hgroup-2009-rename.txt]: "I've renamed the old <header> to <hgroup>." Oli Studholme, 3 Oct 2009 [src: whatwg-hgroup-2009-oli.txt]: "<hgroup> ... seems confusing for many people ... Currently it's only role is to hide subheadings from the outline algorithm". Hixie, 9 Oct 2009 [article] https://lists.whatwg.org/pipermail/whatwg-whatwg.org/2009-October/065677.html [src: whatwg-hgroup-2009-hixie.txt]: "The tangible benefit is that when navigating the document by section, or when generating a table of contents, there will be the right number of sections." He shows `<h1>HTML5</h1><h2>A vocabulary and associated APIs...</h2>` would otherwise be read as nested sections. "Previously, <hgroup> was just called <header> and did what you describe, but people indicated they wanted sections in <header>." "The most common uses will likely only take a few WordPress template changes for it to end up being used in a lot of places." Fate of `<hgroup>` (and the outline algorithm) is outside my window; not verified.

**Evidence.** Good for the proposals; no ending.

---

### 10. `<datagrid>`: specified in 2005, shipped nowhere, removed in 2009 "because it wasn't mature enough"

Hixie added a `<datagrid>` to the spec in April 2005 (Anne van Kesteren's first review is dated 29 Apr 2005 [src: whatwg-datagrid-2005-anne.txt], Hixie's replies 1 May 2005 [src: whatwg-datagrid-2005-hixie.txt]). Design: a datagrid whose default data provider reads a `<table>`; API names from the draft as quoted by Anne: `getRowCount()`, `getColumnCount()`, `getCaptionText(i)`. Hixie 1 May 2005: "Datagrids in common GUIs aren't capable of complex column captions like the above." Jon Levell (10 Jun 2005, "Web Apps 1.0 - DataGrid" [src: whatwg-datagrid-2005-levell.txt]) wanted fixed header rows and columns for a table: "I'm currently struggling to write a web application for the company where I work and I'm hoping you guys could make it easier for future versions of me."

Hixie, 31 Dec 2008 ("Trying to work out the problems solved by RDFa"): lists `<datagrid>` among features "which had a number of implementations in JavaScript before we considered adding" it.

Removal: Hixie, Thu, 3 Sep 2009 00:01:49 +0000, "The removal of datalist" (sic; the asker meant datagrid) [src: whatwg-datagrid-2009-removed.txt]: "I think you mean <datagrid>. It'll probably return once we have it figured out. We removed it because it wasn't mature enough yet." Hixie, 25 Jun 2010 [src: whatwg-datagrid-2010-parity.txt] is quoted by Doug Schepers as listing "removed (datagrid)" among sections.

**Evidence.** Medium. I did not find any browser that shipped it; that is my reading of the absence of implementation mail, not a verified fact. Hixie said on 8 Apr 2009 "I'm working on <datagrid> right now" so it was alive until spring 2009.

---

### 11. `<canvas>`: Apple's API shipped first, then Hixie rewrote it for the spec; skeptics in 2005 said it would never reach the web

**Original WebCore API.** Erik Arvidsson, Tue, 13 Jul 2004 [src: whatwg-canvas-2004-hyatt-methods.txt, message 1296 quoting Erik], listing methods read out of Apple's open WebCore-146.1 source: `setStrokeColor`, `setFillColor`, `setLineWidth`, `fillPath`, `strokePath`, `moveToPoint`, `addLineToPoint`, `addQuadraticCurveToPoint`, `addArcToPoint`, `addArc`, `addRect`, `drawImageFromRect`, `setShadow`, `setAlpha`, `setCompositeOperation` and so on. (Dave Hyatt's reply that day: "The various color methods can be overloaded to take CSS colors or to take individual rgb components.") Hixie's first spec draft, 17 Aug 2004 [src: whatwg-canvas-2004-hixie-draft.txt]: "Based on this and also these files from mozilla.org ... I drafted up an initial version of the <canvas> spec ... I'm not a graphics expert, so in particular anything that uses drawing terminology might well be wrong." Dave Hyatt, 20 Aug 2004: "Apologies for the lack of a proposal. I have been attempting to get permission to post the canvas documentation from WWDC from Apple, but had no success so far. Bureaucracy sucks sometimes." (The shipped names changed: the spec uses `fillStyle`; I have not opened the spec to show before/after.)

**The 2005 skeptics.** Olav Junker Kjær, 20 Apr 2005 17:20:28 +0200, "Canvas element" [src: whatwg-canvas-2005-olav.txt]: "Canvas does none of this, its completely new and has to be implemented by the browser vendors. This rules out that it will ever be supported by IE, which in turn means that it will not be used on the world wide web in the foreseeable future (and most likely never)." and "anyone who needs interactive vector graphics on the web is going to use flash." Dean Jackson (W3C), 21 Apr 2005 [src: whatwg-canvas-2005-dean-jackson.txt]: "With <canvas> your document doesn't have the content. You don't update the document, you just call javascript methods. Obviously this has pretty significant accessibility problems."

**Evidence.** Strong for the quotes. I found no "patent worry" about canvas in the archive; that lead from memory is NOT confirmed (searched list for "patent" near canvas only superficially).

---

### Others checked (thin, parked)

- **`<picture>`/`srcset`.** Edward O'Connor (Apple), Thu, 10 May 2012 00:58:17 -0700 [src: whatwg-picture-2012-oconnor-srcset.txt] proposed `<img src="foo-lores.jpg" srcset="foo-hires.jpg 2x, foo-superduperhires.jpg 6.5x" alt="decent alt text for foo.">`; the `<picture>` argument is in threads "Fallback for <picture>" (13 May 2012, Mathew Marquis), "Features for responsive Web design" (Hixie replies 15 May and 7 Aug 2012; he suggests recasting a proposal "into a CSS-variables-style mechanism, rather than an HTML one" and in Nov 2013 points to "multi-element" objections of Aug 2012 at http://lists.w3.org/Archives/Public/public-whatwg-archive/2012Aug/0070.html, not opened) and "Simplified <picture> element draft" (Jan-Mar 2014). I could not show Hixie "refusing" `<picture>` the way he did `<main>`; the framing from memory is NOT confirmed. Plausible story, needs W3C Responsive Images CG sources.
- **`<keygen>`.** 100 messages. Hixie 14 Nov 2005 thread; Hixie Apr 2014 still maintaining it ("I've added a link to the above MDN page to the keygen section"). Not removed within my window.
- **`pubdate` on `<time>`.** Hixie, 4 Sep 2009: attribute exists ("If specified, [pubdate=""] indicates that the date and time given by the element is the publication date and time of the nearest ancestor article element."), thread "Apply pubdate="" to <body> when no ancestor <article>". Removal is later than I traced; not verified.
- **UndoManager.** Ryosuke Niwa, Tue, 26 Jul 2011, "Fixing undo on the Web - UndoManager and Transaction" (worked with developers of CKEditor, TinyMCE, Google Docs). Hixie replied Thu, 25 Aug 2011 23:06:51 +0000 [src: whatwg-undo-2011-hixie.txt]: "I've removed the old UndoManager API from the HTML spec since your proposal seems far more thought out!" Then ~100 messages and 42 on "Feedback on UndoManager spec"; spec still being edited July 2012. Ending not traced.
- **`<bb>`, `<command>`/`<menu type=context>`, `longdesc`, `autobuffer`, `<picture>`, AppCache, scoped, sandbox, seamless:** `<bb>` returned zero hits in subjects or bodies in the WHATWG archive: **discard** (it was in the W3C spec, maybe public-html; not checked). `longdesc` appears in two WHATWG messages only (the fight was on public-html, not opened). Scoped/seamless/AppCache threads exist (e.g. 50 messages "Selectors within <style scoped>", 40 "seamless iframes and event propagation", 21 "AppCache feature request: An https manifest should be...") but their endings (removal from browsers) fall after my window. `<menu>`: 20 messages "<menu> and friends", 16 "<CENTER>, <MENU>, <DIR>, <NL>", 2 "HTML5 is broken: <menuitem> causes infinite loop" not read.
- **W3C public-html:** not searched (I spent my budget on the WHATWG archive and one public-webapps thread).

## Surprises (things that contradict the usual telling)

1. **The `<template>` element was rejected in 2004 for the same reason that held it up in 2012.** Hixie's 2004 objection (a new element in tables breaks the HTML table parser; the repeating-rows case is the common one) is the problem Weinstein's `<template>` needed a parser change for in 2012, and Hixie still says "I don't understand how this would work in the parser." The idea of the original WHATWG form-repetition design being the ancestor of `<template>` is my inference; the mail shows both ends.
2. **Aaron Swartz asked the editor why the thing he used in production was being cut.** (17756.) Hixie's answer was "It solves about 5% of the use cases", and he told him to use `data-*` attributes.
3. **The Ogg requirement was only ever "SHOULD".** And Hixie's stated reason for removing it was not that anyone convinced him of the patent risk but that the requirement had no effect: "the people who are willing to implement it are willing to do so regardless of the spec, and the people who aren't are not going to be swayed by what the spec says."
4. **Hixie asked "Is it evil?" about ping himself, and said his salary came from web advertising.** Most tellings treat ping as imposed by Google.
5. **For `<main>`, the editor told the implementers "Just implement it."** He recommended against it, then called his own objection "irrelevant".
6. **Web SQL "impasse"**: the spec's own status text blames no browser; Mozilla's one message in the CfC is "I support this too." Hixie had already removed the section from the WHATWG spec himself "a few months" earlier.
7. **A 2005 prediction that canvas would "most likely never" be used on the web** because IE could not do it (Olav Junker Kjær); and Hyatt could not publish the WWDC canvas docs ("Bureaucracy sucks sometimes").
8. **Hixie's `<device>` markup was gone seven months after the vision post** (13 Jul 2010 to 18 Mar 2011) and a user wrote on 15 Mar 2011 that they had "just heard" it was cancelled, three days before the announcement mail I found.

## Could not open / not done

- web.archive.org: not tried (told not to).
- The TechRepublic interview with Hixie that Swartz cites (blogs.techrepublic.com.com/programming-and-development/?p=718): not opened.
- The 2010-11-01 WebApps minutes (http://www.w3.org/2010/11/01-webapps-minutes.html#item09): not opened.
- Steve Faulkner's `<main>` extension spec (dvcs.w3.org/hg/html-extensions/...): not opened.
- Hixie's Aug 2012 "multi-element" reply at lists.w3.org/Archives/Public/public-whatwg-archive/2012Aug/0070.html: not opened.
- W3C public-html: not searched at all. public-webapps: only the Nov 2010 Web SQL CfC thread.
- The HTML5 spec text itself (whatwg.org history): not opened; all spec text above is as quoted in mail.
- Pipermail article URLs for messages marked [gz]: could not be resolved without many more fetches; each has its Message-ID in its source file.
- The following leads were not found in the WHATWG archive at all: `<bb>` (no hits). Not confirmed from memory: canvas patent worry; `<hgroup>` removal; `<time pubdate>` removal; seamless/AppCache/scoped removal dates; `<picture>` being "refused".
- Months with no archive content: 2004 January to March (empty files), and the archive's own gaps are unknown.


## Resolved article URLs (checked by subject, sender and body)
- message 17757: https://lists.whatwg.org/pipermail/whatwg-whatwg.org/2008-September/058495.html
- message 17756: https://lists.whatwg.org/pipermail/whatwg-whatwg.org/2008-September/058494.html
- message 2198: https://lists.whatwg.org/pipermail/whatwg-whatwg.org/2004-June/042891.html
- message 298: https://lists.whatwg.org/pipermail/whatwg-whatwg.org/2004-August/044126.html
- message 9619: https://lists.whatwg.org/pipermail/whatwg-whatwg.org/2007-December/055408.html
- message 21945: https://lists.whatwg.org/pipermail/whatwg-whatwg.org/2009-June/062893.html
- message 5063: https://lists.whatwg.org/pipermail/whatwg-whatwg.org/2005-October/047171.html
- message 5059: https://lists.whatwg.org/pipermail/whatwg-whatwg.org/2005-October/047167.html
- message 14124: https://lists.whatwg.org/pipermail/whatwg-whatwg.org/2008-August/058065.html
- message 9249: https://lists.whatwg.org/pipermail/whatwg-whatwg.org/2007-April/053278.html
- message 32618: https://lists.whatwg.org/pipermail/whatwg-whatwg.org/2011-March/030941.html
- message 36704: https://lists.whatwg.org/pipermail/whatwg-whatwg.org/2012-May/035677.html
- message 33399: https://lists.whatwg.org/pipermail/whatwg-whatwg.org/2011-November/033868.html
- message 39132: https://lists.whatwg.org/pipermail/whatwg-whatwg.org/2013-February/081184.html
- message 23372: https://lists.whatwg.org/pipermail/whatwg-whatwg.org/2009-October/065677.html
- message 19923: https://lists.whatwg.org/pipermail/whatwg-whatwg.org/2009-February/060851.html
- message 9638: https://lists.whatwg.org/pipermail/whatwg-whatwg.org/2007-December/055427.html
- message 1296: https://lists.whatwg.org/pipermail/whatwg-whatwg.org/2004-July/043537.html
- message 37333: https://lists.whatwg.org/pipermail/whatwg-whatwg.org/2012-November/080101.html
