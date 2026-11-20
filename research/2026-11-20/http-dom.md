# Research: rejected ideas on the HTTP-WG list and www-dom

Beat: ietf-http-wg archive (1994 to 2000; the URL `ietf-http-wg-old/` 301-redirects to `https://lists.w3.org/Archives/Public/ietf-http-wg/`, which holds 1994 onward) and www-dom (1997 to 2008). All pages opened 2026-11-20. Saved texts are in `sources/http-dom-*.txt` (first line = URL). Mail quotes below are copied exactly from those files. Archive message URLs have the form `https://lists.w3.org/Archives/Public/ietf-http-wg/<period>/<nnnn>.html` and `https://lists.w3.org/Archives/Public/www-dom/<period>/<nnnn>.html`.

Not repeated here: cookies / Set-Cookie2 (already `content/cookies.html`, which already names `Set-Cookie2` and `Cookie2`). RFC 2965 was "moved to Historic" and obsoleted by RFC 6265 (April 2011), which "deprecates the use of the Cookie2 and Set-Cookie2 header fields" (`sources/http-dom-rfc6265.txt`, lines ~210-213).

Evidence ratings: SOLID = primary artifact or mail opened and quoted; THIN = one message, afterlife not sourced.

---

## 1. The February 1996 cull: PATCH, LINK, UNLINK, COPY, MOVE, WRAPPED (best story)

**Idea.** The HTTP/1.1 draft had grown extra request methods (PATCH, COPY, MOVE, DELETE, LINK, UNLINK, TRACE, WRAPPED) plus Upgrade; in February 1996 the group had to decide which survive into the fast-track standard.

**Who / when.** Larry Masinter, Fri 23 Feb 1996, "remove PATCH, COPY, MOVE, DELETE, etc.? Upgrade?" `1996JanMar/0440.html` (`sources/http-dom-remove-patch-0440.txt`):
"I'm only now starting to get the issue status into shape ... The list is still officially 'a mess', but there's hope."
"The major issue is: Which features not in 1.0 and not reviewed by any of the subgroups do we retain in 1.1 (as opposed to pushing into some later version)?"
"Methods: PATCH, COPY, MOVE, DELETE, LINK, UNLINK, TRACE, WRAPPED"
"Request: Upgrade and response 101 Switching"

**Reply, 70 minutes later.** Roy T. Fielding, `0441.html`: "DELETE, TRACE and WRAPPED should stay. The rest can be moved to other drafts." and "[Upgrade] MUST stay -- this is fundamental to forward progress with other protocols."

**Masinter's four tests** (`0457.html`): features need "adequate review to believe that they represent consensus": "1) there are likely to be disagreements about their form (pure conjecture) 2) we've not discussed them ... 3) there are no current implementations ... 4) the form that these operations exist in within the HTTP/1.1 specification has not had adequate review". Also: "I don't think that 'logical completeness' is a useful criteria".

**Dave Long (NaviSoft)** `0445.html`: "If we have PUT it would be awfully nice to retain DELETE!" Then `0465.html` offered counter-evidence ("Implementations (shipping since mid-'95)") but "I will concede (2) and (4) in favor of leaving things as they were in 1.0".

**Fielding pushes back** `0473.html`: "I think logical completeness is an important part of any proposed standard"; "I claim that they are innocent until proven flammable."; DELETE "Why discuss it? There is no controversy about it."; on implementations: "DELETE is implemented in libwww-perl. Of course, since I designed it to be extensible, I can implement any method in libwww-perl in less than 10 minutes."

**Masinter's "Focus" message** `0477.html` (Fri 23 Feb 1996, 20:49 PST): "HTTP-WG is in a state of crisis. We urgently need a standards-track document that * resolves the ambiguities in HTTP/1.0 * deals effectively with caching * supports those features that vendors have implemented because of customer demand (state tracking, range retrieval) * reduces security exposure by supporting new authentication". "What we don't need are arguments of the form 'if we have X, we must have Y, because Y is necessary to complete X.'" "We're going to immediately start work on HTTP/1.2 as soon as we finish 1.1. Things that get left out of 1.1 are not doomed to be left out forever." "Focus."

**Fielding's counter** `0490.html` (24 Feb): "If that occurs, both X and Y get postponed to 1.2. There are some X's that are worth delaying the standard." On range retrieval: "Range retrieval wasn't even considered until a week before draft 00 was submitted and has only been advocated by 3 people ... I am not aware of any implementations of partial GET requests." On state tracking `0573.html`: "State management is completeley (last time I checked) orthogonal to the HTTP version number".

**WRAPPED** (an application-layer security wrapper, rival to S-HTTP) `0480.html` Masinter: "Theoretical arguments about protocol extensibility hold no weight against long-standing implementation experience." Rohit Khare is quoted there arguing "application-layer security != channel-layer". Fielding (0473): WRAPPED was "Part of Dave Kristol's original extension proposal, with additions from myself and Rohit (for PEP)."

**What became of it.**
- RFC 2068 (HTTP/1.1, Jan 1997, Fielding/Gettys/Mogul/Frystyk/Berners-Lee, `sources/http-dom-rfc2068.txt`): no COPY, MOVE or WRAPPED in the text (grep finds none). PATCH, LINK, UNLINK are kept in **Appendix 19.6.1 "Additional Request Methods"**, introduced as "protocol elements used by some existing HTTP implementations, but not consistently and correctly across most HTTP/1.1 applications ... Some of these describe proposed experimental features". PATCH text: "The PATCH method is similar to PUT except that the entity contains a list of differences between the original version of the resource ... (e.g., "application/diff")". Companion headers `Content-Version` and `Derived-From` (`Derived-From: "2.1.1"`; "required for PUT and PATCH requests if the entity being sent was previously retrieved ...").
- RFC 2616 (June 1999) `sources/http-dom-rfc2616.txt`: "The PATCH, LINK, UNLINK methods were defined but not commonly implemented in previous versions of this specification. See RFC 2068" and "The Alternates, Content-Version, Derived-From, Link, URI, Public and Content-Base header fields were defined in previous versions of this specification, but not commonly implemented."
- COPY and MOVE came back in WebDAV, RFC 2518 (Feb 1999; Goland, Whitehead, Faizi, Carter, Jensen), sections 8.8 COPY Method and 8.9 MOVE Method (`sources/http-dom-rfc2518.txt`).
- PATCH came back as RFC 5789, March 2010, Dusseault (Linden Lab) and Snell, Standards Track (`sources/http-dom-rfc5789.txt`). Its Appendix A: "PATCH is not a new concept, it first appeared in HTTP in drafts of version 1.1 written by Roy Fielding and Henrik Frystyk and also appears in Section 19.6.1.1 of RFC 2068."
- The Link header came back as "Web Linking", RFC 8288 (Nottingham, Oct 2017; obsoletes RFC 5988). I did not verify a direct lineage from the 1996 LINK method beyond the shared `Link:` header name (RFC 2068 19.6.2.4: `Link: <http://www.cern.ch/TheBook/chapter2>; rel="Previous"`).

**Evidence.** SOLID. Protagonist candidates: Larry Masinter (the person doing the cutting, on the record), Roy Fielding (the person who wrote the methods and fought to keep them), Dave Long (a shipping product with DELETE, concedes). Note: I did not establish Masinter's formal title; his own words show he was running the issues list. Do not call him "chair" without a source.

---

## 2. HTTP-NG, the binary, multiplexed Next Generation (1995 to 1999)

**Idea.** Replace HTTP/1.0 with a protocol that sends many asynchronous requests over one connection, with a session layer of channels; later with a binary wire protocol and object-style interfaces, plus a multiplexing layer (WebMUX).

**Origin.** Simon Spero, "HTTP-NG" (March 1995 draft; status page `https://www.w3.org/Protocols/HTTP-NG/http-ng-status.html`, signed "Simon Spero, UNC Sunsite/EIT", `sources/http-dom-httpng-status.txt`): "HTTP-NG is designed to be a replacement for HTTP 1.0 offering much higher performance". "HTTP sets up a new connection for every request, which causes a lot of severe performance problems". "The server can also respond to requests in any order it sees fit - it can even interweave the data from multiple objects, allowing several images to be transferred in 'parallel'." "HTTP-NG sends all control messages (GET requests, meta-information etc) over a control channel. Each object is returned over in its own channel." Measurements: "for typical inlined-objects, HTTP 1.0 would only use around a 10th of the available bandwidth". Transition plan: "the use of intermediate proxy servers". Archive: "HTTP-1.1 and HTTP-NG?" Simon Spero, 10 Mar 1995 (`1995JanMar/0111.html`, not opened); "Starting HTTP-NG" Spero, 13 Jul 1996 (`1996JulSep/0118.html`, not opened).

**Second life.** W3C HTTP-NG Activity, July 1997 to Dec 1998, Henrik Frystyk Nielsen, Jim Gettys, Daniel Veillard. WebMUX / SMUX spec: Gettys and Nielsen, W3C Working Draft 10 July 1998 (`https://www.w3.org/TR/WD-mux`, `sources/http-dom-mux-wd.txt`).

**What killed it.** W3C's own "Final HTTP-NG Activity Statement" (`https://www.w3.org/Protocols/HTTP-NG/Activity.html`, `sources/http-dom-httpng-activity.txt`): "The motivation was the impression that HTTP/1.1 is becoming strained modularity wise as well as performance wise." "At the moment, W3C does not plan any follow-up work on HTTP-NG." "While there was interest in the Project, the general feeling was that it was too early to bring it to IETF ... One of the arguments that we got was that people were just getting used to HTTP/1.1 and saw HTTP-NG as a 'warm-hole' into a very different Web infrastructure than what we have today." (sic, "warm-hole".) Fallback: "it was proposed to target the WebMUX work in particular in order to make that an IETF Working Group ... However, as of the time of writing, the IESG did not find enough interested parties to actually establish a WebMUX Working Group." Overview page timeline (`sources/http-dom-httpng-index.txt`): Dec 11, 1998 HTTP-NG BOF at IETF-43 Orlando; Mar 19, 1999 "mux discussed at SLUMS BOF at IETF-44"; Oct 27, 1999 Endpoint Congestion Management WG chartered. The page is stamped "HISTORIC".

**Afterlife.** HTTP/2, RFC 7540 (May 2015; Belshe, Peon, Thomson ed.): "Multiplexing of requests is achieved by having each HTTP request/response exchange associated with its own stream"; section 5 "Streams and Multiplexing". Acknowledgments credit "SPDY contributors". I did not find an RFC 7540 sentence linking HTTP/2 to HTTP-NG; do not claim lineage, only that the idea reappeared.

**Evidence.** SOLID on the W3C pages. Great detail: "warm-hole" rhetoric.

---

## 3. MGET, MHEAD, multipart and "Image-Hints": the October 1994 argument over inline images

**Idea.** Fetch a page's images in one request (MGET returning a multipart message), or send the image sizes ahead (MHEAD, or header hints) so the browser can lay out the page before the pixels arrive.

**The charter that started the list.** Dave Raggett (HP Labs Bristol), Tue 4 Oct 1994, `1994OctDec/0000.html` (`sources/http-dom-mc-0000.txt`), proposed charter: "Right now HTTP is in a mess." Focus: "to make it easy to pay for goods and services on the Web"; "to protect the copyright interests of information providers". Wish list: "MGET and multipart messages: The ability to request several objects in the same request. The objects are then returned as a multipart message."; "keep-alive and segmented transfers"; "encouraging deployment of transaction TCP"; "ways to avoid long lists of Accept headers"; "consideration of an ASN.1 based format ... a binary encoded format for protocol headers". Also, on copyright: "passing limited copyright information in the HTTP header" (`0002.html`), and "to allow publishers of 'free' information to get some idea of how many people are accessing it via shared caches" (the seed of hit metering, #6).

**The trouble.** Brian Behlendorf (Wired) `0006.html` quoting an unnamed company's browser: open a TCP connection per image so "laying out a box in which the image gets filled in as it arrives". Phillip Hallam-Baker (CERN), Sat 8 Oct 1994, `0008.html`: "Non-Solutions: 1) Opening up multiple TCP/IP sessions. This is a kludge." and proposed the header "image/gif; width=200; height=300; colours=256" and "This is where I think that MGET is not quite enough, we would also need an MHEAD." Behlendorf `0010.html`: he dislikes size-in-HTML ("crosses the HTML structure-presentation boundary too far and isn't trustable"). Jeff Hostetler (Spyglass) `0009.html`, 10 Oct: "a) extend HTML to include image size information for inline images ... b) have the server provide ''Image Size Hints'' in the document response header". Henrik Frystyk `0006.html` gave three reasons against many connections: slow start, the 3-way handshake, TIME_WAIT. `0004.html` wants multiple POST too, "a POST-Web". David Morris `1994OctDec/0178.html` (15 Dec): "I for one find the human factors of the NETSCAPE approach much more satisfactory with early rendering ... I would speculate that the primary reason NETSCAPE opens multiple connections is to learn the shape of graphics".

**What killed it / what won.** No single kill message found. Persistent connections won on the HTTP side: Jeffrey Mogul `1995JanMar/0207.html` (24 Mar 1995): "we have finally released our modified NCSA Mosaic and NCSA httpd sources, implementing an experimental persistent-connection version of HTTP ... Venkata Padmanabhan (who did the work!)". The layout problem got solved in HTML instead: John Franks "WIDTH and HEIGHT" (16 Dec 1994, thread `1994OctDec/0214.html`, not opened) and Dave Kristol "[more about IMG attributes for size]" (`0215.html`, not opened). Content in `content/img-tag.html` should be checked before the writer claims WIDTH/HEIGHT history.

**Evidence.** SOLID for who said what. The "what killed MGET" link is inferred, not sourced; label as my reading.

---

## 4. 402 Payment Required (and the ChargeTo header that never was)

**Idea.** The server answers 402 with "a specification of charging schemes acceptable"; the client retries with a `ChargeTo` header.

**Artifact.** `https://www.w3.org/Protocols/HTTP/HTRESP.html` (page headed "Status codes in HTTP", "1992", "This is a historic document and is not accurate anymore", `sources/http-dom-htresp.txt`): "PaymentRequired 402 / The parameter to this message gives a specification of charging schemes acceptable. The client may retry the request with a suitable ChargeTo header."

**What happened.** HTTP/1.0, RFC 1945 (May 1996, Berners-Lee, Fielding, Frystyk, Informational) lists only these codes: 200 201 202 204 301 302 304 400 401 403 404 500 501 502 503 (grep of `sources/http-dom-rfc1945.txt`; "402" and "payment" absent). RFC 2068 (Jan 1997) 10.4.3: "402 Payment Required / This code is reserved for future use." RFC 2616 (June 1999) same words. The Nov 1994 HTTP/1.0 draft (`sources/http-dom-http-v10-draft.txt`) has no "payment" either.

**The payment push.** Raggett's Oct 1994 charter (above) makes "easy to pay for goods and services" objective b. Donald Eastlake 3rd (CyberCash), 6 Jul 1995, `1995JulSep/0015.html`, cross-posted "draft-eastlake-internet-payment-00.txt" to e-payment, www-buyinfo, html-wg and http-wg; Glenn Adams replied it was "rather rude to send an IETF draft out to mailing lists". I found no HTTP-WG thread by subject about 402 itself (subject list scan of 1994 to 2000), which is itself a finding.

**Afterlife.** MDN: "The HTTP 402 Payment Required client error response status code is a nonstandard response status code reserved for future use. This status code was created to enable digital cash or (micro) payment systems" (`sources/http-dom-mdn402.txt`). x402 (https://www.x402.org/): "x402 is an open, neutral standard for internet-native payments. It absolves the Internet's original sin by natively making payments possible between clients and servers" with sample `app.use(paymentMiddleware({ "GET /weather": {` (`sources/http-dom-x402.txt`). Date and authorship of x402 not checked.

**Evidence.** SOLID for the 1992 spec text and the RFC sequence. Who wrote the 1992 text: page does not say; not opened further. Title the 1992 dating as "the page's own heading".

---

## 5. PEP and the "Mandatory" extension framework (Rohit Khare, 1995 to 2000)

**Idea.** A general mechanism by which any HTTP message can declare mandatory or optional extensions, each named by a URI.

**Who / when.** Rohit Khare (W3C), 27 Nov 1995, `1995OctDec/0387.html`: ""PEP: An Extension Mechanism for HTTP" was submitted to the Internet-Drafts editor last week for discussion in Dallas." Draft 2 Feb 1996 (`1996JanMar/0533.html`, not opened). On 30 Sep 1996 `1996JulSep/0662.html` Khare: "I want to say publically that I take the blame for the continuing confusion and inconsistent progress I/W3C have been making on PEP ... almost all of our staff 'HTTP time' has been consumed by 1.1 to date." (Masinter's line quoted there: "I take it all back! Please forgive me, Rohit, and come home soon!")

**Doubt.** Roy Fielding, 21 Oct 1996, `1996OctDec/0180.html` ("PEP Battle Plan"), answering someone who asks whether a URI resolution protocol should replace extension-in-HTTP: "Extensions have occurred, and will continue to occur, regardless of IETF opinions. They occur because users need them, which results in implementers implementing them, often in spite of the WG's recommendations." and "I am inclined to leave research to individuals and not assign things to a WG until the solution is (at least believed to be) known."

**Syntax (copied from RFC 2774, the surviving form).** `M-GET / HTTP/1.1`, `Host: some.host`, `C-Man: "http://www.digest.org/ProxyAuth"; ns=14`, `14-Credentials="g5gj262jdw@4df"`, `Connection: C-Man, 14-Credentials`. And: "The method name of a mandatory request MUST be prefixed by "M-"." Example `M-PUT /a-resource HTTP/1.1` / `Man: "http://www.copyright.org/rights-management"; ns=16`. Unsupported mandatory extension: "respond with a 510 (Not Extended)".

**What killed it.** RFC 2774, "An HTTP Extension Framework", Nielsen, Leach, Lawrence, Feb 2000, Category: Experimental. IESG Note: "This document was originally requested for Proposed Standard status. However, due to mixed reviews during Last Call and within the HTTP working group, it is being published as an Experimental document ... there is a more general concern about whether this document actually represents community consensus regarding the evolution of HTTP." "This document should therefore not be taken as a blueprint for adding extensions to HTTP". W3C PEP page (`https://www.w3.org/Protocols/PEP/`): "This work is now subsumed by the HTTP Extension Framework - Jan 1999".

**Evidence.** SOLID. Notable twist: the final RFC authors include Paul Leach of Microsoft, and the namesake survivor (`M-` methods, `Man:`) was used by nobody I can source. Did not verify any deployment.

---

## 6. Hit metering (the `Meter` header), Mogul and Leach

**Idea.** Let proxy caches count hits for origin servers (advertisers' demographics) and let servers cap how many times a cache may reuse a response, so sites stop "cache-busting".

**Artifact.** RFC 2227, "Simple Hit-Metering and Usage-Limiting for HTTP", Mogul (DECWRL) and Leach (Microsoft), Oct 1997, Standards Track. Abstract: a new "Meter" header "which permits a limited form of demographic information (colloquially called 'hit-counts') to be reported by caches to origin servers, in a more efficient manner than the 'cache-busting' techniques currently used". Directives copied: `Meter: max-uses=3`, `Meter: max-reuses=10`, `Meter: do-report`, `Meter: will-report-and-limit`, `Meter: max-uses=3, max-reuses=10, do-report`. Intro: "Some cache-busting is also done to provide different advertising images to appear on the same page". Model: "publishers of hard-copy publications: such publishers (try to) report to their advertisers how many people read an issue".

**Thread.** Draft announced `1996OctDec/0199.html` (1 Nov 1996). Poll of how sites count hits, Aug 1996: Paul Leach's questions, Matthew Rubenstein reply `1996JulSep/0225.html`. "Hit-metering: to Proposed Standard?" Mogul, 26 Nov 1996, 36-message thread `1996OctDec/0293.html`: "We certainly do not expect (or want) origin servers to hit-meter those bars and buttons!" RFC section 9 compares alternatives: statistical sampling (James Pitkow's paper) and Hallam-Baker's log-exchange protocol.

**What killed it.** Not found. I could not confirm deployment or non-deployment from a source. Candidate for "could not verify".

**Evidence.** SOLID for artifact; THIN for fate.

---

## 7. `Safe: yes` and GET-with-a-body (Koen Holtman, Gavin Nicol), 1996 to 1998

**Idea.** A response header that tells the browser a repeated POST is harmless, so it need not show the "repost form data?" dialog.

**Artifact.** RFC 2310, "The Safe Response Header Field", Koen Holtman (TUE), April 1998, Experimental: "`Safe = "Safe" ":" safe-nature`; `safe-nature = "yes" | "no"`", example `Safe: yes`. Rationale: "If the POST request is unsafe, HTTP requires explicit user confirmation is before the request is repeated. The confirmation dialog often takes the form of a `repost form data?' dialog box. This dialog is confusing to many users, and slows down navigation in any case."

**Thread.** Reload-without-warning problem, Masinter `1996JulSep/0656.html` (27 Sep 1996 quoting his case analysis: "a) new optional request header that marks a request ... as an 'unwarned retry' ... b) new result header that marks whether a result is reloadable without warning"). Masinter closing a loop, `1996OctDec/0051.html`: "If something is going to happen on this, *someone* must write an Internet draft". Holtman's draft discussed `1996OctDec/0092.html` thread (26 msgs; Gavin Nicol pushing "GET+body (Parameterised GET) for over a year now", for i18n of query strings). David Morris, `1997JanMar/0561.html`: "Safe: Yes now, GETWBODY later?". Scope fight: Masinter, July 1997 (quoted in `1997JulSep/0074.html`): "SAFE and UAHINT are not in the charter." Foteos Macrides replying: "it is implemented in at least one browser (Lynx...)". Outcome: Masinter, 26 Sep 1997 `1997JulSep/0858.html`: "I plan to ask that the IESG consider draft-holtman-http-safe-03.txt and draft-ietf-http-uahint-01.txt to become Experimental RFCs".

**What became of it.** Experimental RFC; the only implementation I have a source for is Lynx (Macrides, one mail). I have no source on browsers today still showing the repost dialog (not looked up).

**Evidence.** SOLID for text; THIN on adoption.

---

## 8. 305 Use Proxy and 306 Switch Proxy

**Idea.** An origin server tells a client "use this proxy from now on"; 306 lets a proxy say "switch to the proxy in this `Set-proxy` header".

**Artifact.** Josh Cohen (Netscape), "HTTP/1.1 305 and 306 Response Codes", Internet-Draft, 5 Dec 1996 (`https://www.ietf.org/archive/id/draft-cohen-http-305-306-responses-00.txt`): "The 306 response is generated by a proxy server to indicate that the client or proxy should use the information in the accompanying 'Set-proxy' header to choose a proxy for subsequent requests." Archive: "What is the basic idea behind 305 Use Proxy?" `1997JanMar/0350.html`, Cohen 27 Feb 1997: "Its becoming a Frequently Asked Question, but it doesnt yet have a good answer."

**Fate.** RFC 2616 10.3.7: "306 (Unused). The 306 status code was used in a previous version of the specification, is no longer used, and the code is reserved." And of 305: "Note: RFC 2068 was not clear that 305 was intended to redirect a single request, and to be generated by origin servers only. Not observing these limitations has significant security consequences." Archive thread "305/306 response codes" (Holtman, 30 Jun 1997, 14 msgs, `1997AprJun/0626.html`, only the terminology tangent read).

**Evidence.** SOLID but small; good "fun fact", weak protagonist.

---

## 9. "MUST implement Digest" (August 1996) and the Netscape objection

**Idea.** HTTP/1.1 should require implementations that offer Basic authentication also to implement Digest ("MUST" instead of "SHOULD") so passwords stop crossing the wire in clear.

**Thread.** Paul Hoffman `1996JulSep/0512.html` (29 Aug 1996): "It makes sense to stop sending passwords in the clear." Masinter: "Writing MUST instead of SHOULD in the specification is not any way to force some vendor to either implement or not implement something." Marc Salomon `0515.html`: Netscape "had no plans to support it", "the statement was made by the NS standards cop". Jim Gettys `0549.html` (5 Sep) defends Phil Karlton of Netscape as "a very fine engineer and systems designer" who "has valid concerns that we are trying to resolve to his satisfaction".

**Resolution.** Keith Moore `0529.html` (30 Aug 1996): "We can't impose new requirements on the protocol ... without another Last Call and IESG ballot, and we don't want to delay HTTP 1.1 any longer. Therefore ... approved for Proposed Standard status" with HTTP/1.1 and Digest as separate documents; HTTP-WG may "issue a brief applicability statement".

**Afterlife.** Not researched (Digest in RFC 2069/2617, deployment).

**Evidence.** SOLID for the argument; protagonist too diffuse. Careful: names of individuals appear in a heated exchange; no punching down.

---

## 10. Transparent content negotiation (`Alternates`, `TCN`), Koen Holtman and Andrew Mutz

**Artifact.** RFC 2295 "Transparent Content Negotiation in HTTP", Holtman (TUE) and Mutz (HP), March 1998, Experimental. TOC has "8.2 Accept-Features" and "8.3 Alternates". RFC 2616 lists `Alternates` among header fields "defined in previous versions of this specification, but not commonly implemented". HTTP-WG thread subjects 1997: "Comments on draft-ietf-http-negotiation-00.txt" (21 msgs), "New feature negotiation syntax" (45 msgs, `1997AprJun/0498.html`), "Alternates?" Masinter 4 Sep 1997.

**Evidence.** THIN: only RFC headers and subject lines, no message bodies read.

---

## 11. DOM: getElementsByClassName and getElementsByAttribute, rejected in DOM Level 3

**Idea.** A method to fetch elements by class (or attribute), instead of walking the tree.

**Proposals and answers.**
- "Req: Include document.getElementsByAttrMatch()", answer by Joseph Kesselman (IBM) 26 Jul 2001, `www-dom/2001JulSep/0167.html`: "This can be done today in a Level 2 DOM, by writing an appropriate NodeFilter and using either NodeIterator or TreeWalker... which is actually a very general solution, and probably makes a lot more sense than adding a bunch of individual methods matching on various aspects of the node and its context."
- Rob Cavicchio (Akonix), asks for `getElementsByClassName` (quoted in `2002JulSep/0199.html`): "One addition that would be very useful in HTML files is "getElementsByClassName". I sometimes use classes to filter elements for processing by a script, and the current methods for finding such elements are inefficient." Dylan Schiemann (Yahoo address) replies 27 Sep 2002: "This was previously suggested and rejected in DOM Level 3. I think it is a good idea, but it also makes sense to not have it since it is very easy to accomplish with xpath."
- Kesselman, 24 Mar 2003, `2003JanMar/0070.html`, "DOM getElementsByAttribute": "has been considered in the past, but never survived into the spec since there appeared to be adequate (and less argumentative) alternatives: In DOM Level 1: Write a tree-walker ... In DOM Level 2, if Traversal is supported: Implement a NodeFilter ... In DOM Level 3, if the XPath module is supported: Write a suitable XPath and evaluate that."

**What became of it.** MDN (`sources/http-dom-mdn-gebcn.txt`): `getElementsByClassName()` is "well established ... available across browsers since July 2015" (Baseline). Pre-2015 dates, and who first proposed it for HTML5, not sourced (my fetch of John Resig's post returned 403).

**Also.** The idea that "XPath will solve this" died too, see #13.

**Evidence.** SOLID for the rejection, THIN for the comeback date.

---

## 12. DOM: Abstract Schemas, abandoned July 2002

**Artifact.** Ray Whitmer (Netscape), W3C DOM WG Chair, Wed 10 Jul 2002, `www-dom/2002JulSep/0010.html`, "Announcement regarding work on DOM Abstract Schema": "The "Document Editing" part of Abstract Schema has been split out as a new "Validation" module. Work on the remaining Abstract Schema module has been stopped, and this module will not be advanced by the DOM working group at this time."

**Afterlife.** DOM Level 3 Abstract Schemas is a W3C Working Group Note (2002 version dated 25 July 2002; republished 3 Nov 2020, retired: "This document is retired and MUST NOT be used for further technical work. See the DOM Living Standard instead") (`https://www.w3.org/TR/DOM-Level-3-AS/`). Validation module reached Recommendation 27 Jan 2004 (editors Ben Chang, Oracle; Joe Kesselman, IBM until Sep 2001; Rezaur Rahman, Intel until Jul 2001). Lead-up: Rick Jelliffe, "Abstract Schemas, Schematron and Information Item declarations", 30 Mar 2002.

**Evidence.** SOLID. Thin as a story: no protagonist; mostly a notice.

---

## 13. DOM: Level 3 XPath and Load and Save vs the real web

**XPath.** Level 3 XPath editor Ray Whitmer "Netscape/AOL, then Invited Expert". Became a W3C Working Group Note (previous version NOTE 26 Feb 2004; 3 Nov 2020 version "retired and MUST NOT be used for further technical work") (`https://www.w3.org/TR/DOM-Level-3-XPath/`). Dylan Schiemann's 2002 answer treated XPath as the reason not to add `getElementsByClassName` (#11). Archive: "Level 3 XPath doesn't feel right" (Shelby Moore, 16 Dec 2002, 12 msgs, `2002OctDec/0164.html`, not opened); "Document Object Model (DOM) Level 3 XPath Specification" (Bob Foster, 30 Jun 2001, 17 msgs, `2001AprJun/0316.html`, not opened).

**Load and Save.** DOM Level 3 Load and Save is a W3C Recommendation, 7 April 2004 (editors Johnny Stenback, Netscape; Andy Heninger, IBM until March 2001) (`https://www.w3.org/TR/DOM-Level-3-LS/`). Then the web did it differently. Philippe Le Hegaret (W3C), Thu 19 May 2005, `www-dom/2005AprJun/0039.html`, "XmlHttpRequest and DOM 3 LS": "There is to be lots of confusing between XmlHttpRequest and DOM 3 LS nowadays, especially with the emergence of "Ajax"." "XmlHttpRequest was introduced in Internet Explorer. DOM 3 LS that do provide synchronous and synchronous loading of the DOM tree as well as saving capabilities but, unless the XmlHttpRequest object, without control over the HTTP protocol (no user/passwd, no HTTP header, etc.)." He then proposes, copied exactly: `interface HTTPRequest { String passwd; String user; void setHTTPHeader(String header, String value); }`, a `DOMConfiguration` parameter `"http-request"`, and `interface HTTPResponse { int status; String getHTTPHeader(String value); }` with parameter `"http-response"`. I found no reply in the archive for that month (the only later message, 0063, is unrelated). Also, `content/xmlhttprequest.html` does not mention Load and Save (grep found nothing).

**Evidence.** SOLID for the single message; a strong "specified, then overtaken" episode, but I have no source for the reaction or for any browser implementing LSParser.

---

## 14. DOM: mutation events (DOM Level 2, then the Chrome removal)

**Artifact (the argument).** Philippe Le Hegaret, 29 Jan 2003, `2003JanMar/0016.html`, answering a user (Michael B. Allen) who "just implemented mutation events" and found it not "elegant": "I believe your interpretation is correct." The user could not "listen to just changes to an elements immediate children", so all descendants' events bubble. David Flanagan (O'Reilly), 22 Aug 2001, `2001JulSep/0288.html`, on DOMSubtreeModified wording: "This context switch really tripped me up." Event names in play: `DOMNodeInserted`, `DOMAttrModified`, `DOMSubtreeModified`.

**End.** Chrome for Developers, "Mutation events will be removed from Chrome" (`https://developer.chrome.com/blog/mutation-events-deprecation`): events "are a very old part of the DOM level 2 spec, and they have been deprecated since 2011. They were replaced by the MutationObserver interface, which has been supported in all modern browsers since 2013." Flaws: "They are verbose and fire too often. An event is fired for each node that is removed." "They are slow, due to event propagation and because they prevent many UA run-time optimizations." "They frequently cause crashes. They have been the source of many crashes and security bugs in browsers, because event listeners can change the entire DOM underneath a running DOM operation." "the events were deprecated from the spec in 2011 and a replacement API (MutationObserver) was constructed in 2012." Removal "starting with version 127, which goes to stable release on July 23, 2024". Also: "there has been a longstanding request to prevent <iframe> elements from reloading when they are moved within the DOM. However, partially due to the existence of mutation events, that effort was deemed to be too difficult to achieve, and the request was closed."

**Who proposed MutationObserver:** not sourced. Do not name.

**Evidence.** SOLID for the end; the 2000-era design story (who proposed mutation events, original rationale) is NOT in what I opened.

---

## 15. DOM: the live NodeIterator and live NodeLists (1998)

**Artifact.** Mailing-list fight over "liveness". David Brownell (Sun), 1 Jun 1998 `www-dom/1998AprJun/0215.html`: "the current iterator (Tree and Node) APIs have some serious problems which are most naturally fixed by something like a NodeIterator.release() method. I don't think anyone really liked that fix." Thread "Alternative to the Live NodeIterator" (17 msgs, `1998AprJun/0208.html`, Brownell 29 May 1998), Andrew n marshall: "the iterator is currently defined to be live". Miles Sabin, 21 Oct 1998, `1998OctDec/0176.html` ("An observation about "live" NodeLists", 29 msgs), to Ray Whitmer: "you've been, on the one hand advocating dynamic NodeLists over static NodeLists on the grounds that they can be implemented efficiently ... on the other, you're not actually using dynamic NodeLists very much". Also Mike Champion on getElementById, `1999OctDec/0047.html` (5 Oct 1999): "its lack in DOM Level 1 is often noted"; "Several DOM implementations, including Microsoft's widely used one, have such a method" and Brownell's reply `0049.html`.

**What became of it.** Not traced (live HTMLCollection/NodeList survives in browsers today, but I did not source that).

**Evidence.** SOLID for the quotes; no source for outcome. Lower priority.

---

## Candidates scanned, not opened (could be worth a follow-up)

- `1995JanMar/0182.html` "proposal for a new html tag" (Gavin Nicol, 16 msgs); `1995JanMar/0220.html` "Why is From: limited?" (John Franks, 12 msgs); "Suggestion: HTTP Timezone header" (Chuck Shotton, `1995JanMar/0203.html`); "Possible New Optional Field in Header?" (Barry Johnson, May 1995).
- `1995JanMar/0070.html` and `0089.html` "Full-URI" and "original host name in request/header": the pre-history of the `Host:` header. Cowlishaw (12 Feb 1995): his page-tree is "an alias for www.hursley.ibm.com ... pages from my data are being quoted as at the 'www...' address". Jan Brittenson (15 Feb 1995): "Just add the damn field to the spec so people can get things working." Roy (20 Mar 1995, via Paul Hoffman): "What was under discussion was a feature to add to HTTP/1.1." I opened these four messages; a deferral, not a rejection, so left out of the ranking. (Possible essay "the 1995 request that took the Host header two years to land"; RFC 2068 does require Host, not verified here.)
- "Content-MD5" (23 msgs, Nov 1995, `1995OctDec/0218.html`), "INTEGOK (aka CONTENT-MD5)" Masinter Apr 1996. RFC 2616 includes Content-MD5 (section 14.15) but I did not check its later removal.
- DOM "DOM binding considered harmful, discriminates against open source" (Nov 1999, 13 msgs); "The DOM is not a model, it is a library!" (Ray D. Whitmer, 11 Oct 1999, 36 msgs); "DOM Level 3 Events: Enumeration of EventListeners" (Dec 2001, 27 msgs, `2001OctDec/0203.html`); "Older Sibling?" (Mar 2000, 29 msgs). Not opened.
- No www-dom thread on IE's `attachEvent` or `document.all` turned up by subject; that argument happened elsewhere (not on this list as far as the subject lines show).

---

## Surprises

1. HTTP/1.0 (RFC 1945, May 1996) has no 402 at all. The "Payment Required" code is from a 1992-headed early spec page, with a `ChargeTo` header, and was re-added as "reserved for future use" in RFC 2068. The "reserved for future use" line is a resurrection, not a leftover.
2. The HTTP-WG began (Oct 1994) with a charter that listed payments, copyright, ASN.1 binary headers, MGET and keep-alive. Part of that wish list (one connection for many objects, binary headers) came back as HTTP-NG (1995 to 1999) and multiplexing reappeared in HTTP/2 (2015); I did not source how the rest fared.
3. W3C's own final HTTP-NG statement blames the idea's death on a reception problem: people "were just getting used to HTTP/1.1 and saw HTTP-NG as a 'warm-hole' into a very different Web infrastructure". Even the cut-down WebMUX failed for want of "enough interested parties".
4. The Feb 1996 cull was argued within hours, in public, between Fielding (who wrote the methods) and Masinter (who was organising the issues list); PATCH was not deleted but moved to an appendix of RFC 2068, then deleted from RFC 2616, then revived by someone else in 2010. COPY and MOVE did not go to the appendix at all; they turned up in WebDAV (RFC 2518, Feb 1999).
5. getElementsByClassName was explicitly "rejected in DOM Level 3" and the stated reason was "it is very easy to accomplish with xpath". XPath itself ended as a retired Note. The rejection reason did not survive.
6. DOM Level 3 Load and Save became a Recommendation in April 2004, and within thirteen months the W3C's own DOM contact was writing an FAQ entry to explain why people kept confusing it with XMLHttpRequest, and proposing to bolt `setHTTPHeader` onto it.
7. A mail from the HTTP-WG list had an AOL user's unrelated Apple complaint titled "PEP Battle Plan" (`1996OctDec/0146.html`). Mail subject lines are unreliable; check each message before relying on a thread title. (Fun but not for the essay.)

## Could not open / not verified

- `https://web.archive.org` not tried (told it fails).
- John Resig's getElementsByClassName post: 403 Forbidden. No source for when browsers shipped it before the MDN "July 2015" Baseline.
- RFC 5789 and RFC 8288 are not tied by a source to the 1996 LINK/UNLINK; PATCH is tied by RFC 5789's own acknowledgements.
- Whether hit metering (RFC 2227) was ever deployed; whether `Safe: yes` is deployed beyond Lynx; whether PEP / `M-` methods saw any deployment beyond a W3C demo ("[Announce] PEP demo at w3c site", Eric Prud'hommeaux, 21 Jul 1997, `1997JulSep/0226.html`, not opened).
- Who wrote the 1992 status-codes page with 402; which of Tim Berners-Lee's pages predates it.
- HTTP-NG: Simon Spero's March 1995 draft and the 1995 to 1996 archive posts (`1995JanMar/0111.html`, `1996JulSep/0118.html`, `1996OctDec/0069.html`) not opened; no RFC 7540 sentence tying HTTP/2 to HTTP-NG.
- MutationObserver's authorship and original rationale for mutation events: not in opened material.
- The reactions (if any) to Le Hegaret's May 2005 LS-and-XHR proposal; none in the archive month I read.
- www-dom pre-1997 does not exist in the archive (list starts 1997).
