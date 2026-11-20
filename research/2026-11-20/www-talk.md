# Rejected ideas on www-talk, 1991 to 1996 (research file)

Opened 2026-11-20. Archive base: https://lists.w3.org/Archives/Public/www-talk/ . Every message below was opened and its text saved in `sources/www-talk-*.txt` (first line of each file = URL). Subject indexes for all 63 months Oct 1991 to Dec 1996 were read (saved in `idx/`, flattened in `subjects.txt`). The archive's header dates are as written in the messages. Message URLs are `BASE/<YYYYMon>/<NNNN>.html`.

Evidence grades: SOLID = the proposal and the objection are both on the page; THIN = one side only, or the "afterlife" comes from my memory/secondary source and is labelled.

Skim of content/img-tag.html: it already covers ICON (Johnson), `REL="EMBED, PRESENT"` (Berners-Lee), INCLUDE/EMBED refused by Andreessen in Feb 1993, and Raggett's end-tag IMG. So IMG losers are only noted in item 9.

---------------------------------------------------------------------
## 1. A style sheet that is a "hint", and the one that averaged two designers (STYLE SHEETS, 1993 to 1994)  [SOLID, best story]

**Idea:** let a document say how it should look without putting presentation in HTML. At least five incompatible versions were proposed on this one list in 17 months, and each was a different bet on who is in charge, author or reader.

### 1a. Rob Raisch (O'Reilly), "Stylesheets for HTML", 10 June 1993
- Posted by Rob Raisch, manager of Online Systems, O'Reilly & Associates, to www-talk, Thu 10 Jun 1993: https://lists.w3.org/Archives/Public/www-talk/1993Jun/0029.html (source: www-talk-raisch-rfc-stylesheets.txt). He says it was "Forwarded from comp.infosystems.www". Document dated "June 6 1993"; body dated "02 June 1993".
- Key words, exact: "In no way should this proposal be considered an attempt to stipulate *required* behavior." And: "HTML documents would include a LINK STYLE tag which would point to a stylesheet associated with the current document." And: "Styles are suggestions or hints about behavior, not rules." And: "It is not appropriate to use HTML for this purpose, since one of the first principles of HTML is to encode objects within a document, not how they might be rendered in a particular environment."
- Exact markup: `<LINK STYLE={URL}>`.
- Exact sample stylesheet syntax (Appendix I): 
  `@DEFAULT fo(fa=ti,sp=pr,si=14,we=me,sl=ro,fo=in,bo=in,li=no,nu=1,fn='')`
  `@H1 fo(si=32,we=bo) ve(be=1,af=2) @H2 fo(si=24,we=bo) ve(be=1,af=2)`
  `@A fo(fo='yellow',ba='black')`
  Eight style categories: font, justify, column, break, mark, vert, indent, link. Colour values like `0xff00ff`. Font family values "times, helvetica, system, typewriter" and a `longname` slot for an X font string "-adobe-courier-bold-r-normal--0-190-75-75-m-110-iso8859-1".
- Rule that hides the old sheet: "Once a new stylesheet was loaded it would hide, not overwrite, the previous stylesheet. The previous stylesheet would become visible once an empty LINK STYLE tag was encountered."
- Promise: "supported in libWStyle, a stylesheet parser library which will be released to the WWW developer community, REAL SOON NOW." It was also published "as a plain text document. Apologies to Web purists."
- Parsing design note: "the name of each style and style attribute has been chosen to be unique to the first two letters, which makes parsing the style-sheet a simple task."

**Replies, 11 to 14 Jun 1993**
- Dave Raggett (HP Labs, then drafting the HTML+ DTD) 11 Jun 1993, https://lists.w3.org/Archives/Public/www-talk/1993Jun/0033.html : will add a "style" attribute to LINK; suggests `<LINK style="http://ora.com/styles/paper_a4" media="paper/A4">` and `media="xwindows"`; "Comments please?"
- Raisch 13 Jun 1993, 0049: "I would rather carry this information in the stylesheet itself. I seems rather wasteful to me to have 5 or 6 media links in the same document." and "a maze of twisty little suggestions, all alike."  So the author of the first style sheet proposal turned down the idea that became `media=`. (Afterlife of media: my knowledge, not from a source I opened.)
- Torben Noerup Nielsen 11 Jun, 0039: asked instead for equation support. M. Strata Rose 14 Jun, 0066: wants per-platform sheets "extremely useful" for MOO and educational users.
- Only four replies on the list. Later, Pei Wei: "At the time I think I had gotten like 3 or 4 replies out of it." (1994Oct/0383.)

**Raisch's spec was hard to find.** Nathan Torkington 14 Aug 1993, https://lists.w3.org/Archives/Public/www-talk/1993Aug/0278.html : "Tony Sanders writes: > I keep asking someone to post a pointer to the spec. ... I'm not from O'Reilly, and I hear they're working on an updated version but just to shut you all up :) here's the version I was sent: http://www.vuw.ac.nz/non-local/gnat/ora-stylesheet-proposal.txt". (Tony Sanders's own message not opened; quoted second-hand inside Torkington's.) Torkington had also posted his own "ideas on style" 4 Aug 1993 (1993Aug/0058; page not opened).

### 1b. Raisch leaves; Pei Wei inherits (Oct 1993)
- Pei Y. Wei, then at O'Reilly (Viola browser author), 22 Oct 1993, https://lists.w3.org/Archives/Public/www-talk/1993Oct/0260.html : "I'm working on a stylesheet library that will hopefully be useful for all W3 browsers. A prototype is implemented in viola". Syntax, exact:
  ```
  (HEAD,BODY				fontSize=normal
  					BGColor=white
  					FGColor=black
      (H1					fontSize=largest
  					BGColor=red
  					FGColor=white)
  ```
  plus `A document uses a <LINK REL="STYLE" HREF="URL_to_a_stylesheet">`. "Personally I still much prefer the simple semi LISP'ish syntax." (0293, 26 Oct.)
- Marc Andreessen, 22/23 Oct 1993, 0263: "What's the relationship between this and Rob Raisch's stylesheet proposal from this summer? (Rob, are you out there? :-)"
- Raisch, 23 Oct 1993, 0266: "Yup, still here. No idea. I guess Pei has other ideas. I am no longer directly associated with O'Reilly & Associates, so better ask them." Signature: "Rob Raisch, The Internet Company".
- Wei, 0271: "Well, after Rob left ORA I've basically inherited the stylesheet problem-- finish the design, prototype, and final implementation."
- SGML people push back: Steve Heaney 26 Oct, 0295: "rather than re-invent the wheel, we consider using an SGML DTD for specifying stylesheets" (re-spelled Wei's example with `<e-i-c gi="h1"><font size="24pt" ...>`, a FOSI-style DTD). Lou Burnard 27 Oct, 0300: "I'd like to endorse very strongly indeed the notion of using SGML as a notation for whatever style-sheet mechanism you eventually decide on." Wei 0293: "The idea was to do a quick style-hints sort of thing ASAP, rather than something as comphrehensive as FOSI." John Price-Wilkin 0297 offered Open Text Lector's spec file as inspiration.

### 1c. Andreessen on style sheets, Feb 1994
- 17 Feb 1994 (header date), https://lists.w3.org/Archives/Public/www-talk/1994Feb/0260.html : "As we kneel before the altar of the 'ha ha, you can't control what your documents look like in HTML' philosophy ... it has been a constant source of delight for me over the past year to get to continually tell hordes (literally) of people who want to -- strap yourselves in, here it comes -- control what their documents look like in ways that would be trivial in TeX, Microsoft Word, and every other common text processing environment: 'Sorry, you're screwed.'"
- Reply to Tony Sanders ("Then why don't you just implement one of the many style sheet proposals that are on the table"), header 25 Feb 1994 (Message-Id suggests 18 Feb), 1994Feb/0296: "So then I get to tell people, 'Well, you get to learn *this* language to write your document, and then you get to learn *that* language for actually making your document look like you want it to.' Oh, they'll love that." And: "Marc's viewpoint: style sheets are an artificial construct inflicted on us because of the whole non-presentation philosophy ..." and "(Actually, 'why don't I just implement...' is a moot point right now, as I'm not in the client business anymore.)"
- Raisch, now The Internet Company, 24 May 1994, 1994May/0258, replying to a GTE Labs post (Yechezkal-Shimon Gutfreund, 23 May, 0251, "How about an HTML style sheet attachment?"): "Yes, stylesheets are VERY VERY important to the future of the web for publishing ... Having talked to many, many publishers, I can tell you that they are excited about tools like Mosaic until they resize the window -- thus completely reformatting the document -- or until I show them how trivial it is for the consumer to change the font." and "presentational control over the chaos of the medium." Points readers at the 1993 spec and says: "This work was paid for by O'Reilly and Associates and is in the public domain."

### 1d. Håkon Wium Lie, Cascading HTML Style Sheets, 10 Oct 1994: the sheet that averaged
- Announcement, 10 Oct 1994, https://lists.w3.org/Archives/Public/www-talk/1994Oct/0147.html : "it can also provide logic to make presentation decisions based on the user's environment; e.g. the size of the screen or the current date." (Header "From: H&kon W Lie".)
- The proposal text itself, fetched live at https://www.w3.org/People/howcome/p/cascade.html (saved: www-talk-chss-proposal-v092.txt). CAUTION: this is "v0.92", file comment "Changed by: , 16-Oct-1994", so it is a few days newer than the 10 Oct post. The 12 Oct reply from Lie quotes the same features, so they were in the first version. Exact lines from it:
  `<LINK REL="style" HREF="http://NYT.com/style">`
  `h1.font.size = 24pt 100%`
  `h2.font.size = 20pt 40%`
  "a weighted average of the two requests is calculated, and the final font size is determined."
  `AGE > 3d ? background.color = pale_yellow : background.color = white`
  `DISPLAY_HEIGHT > 30cm ? http://NYT.com/style : http://LeMonde.fr/style`
  `RELEVANCE > 80 ? h1.font.size *= 1.5`
  `http://NYT.com/style 30%` / `http://LeMonde.com/style 70%`  ("the resulting presentation will be a mix of NYT (30%) and LeMonde (70%)")
  `speech.*.weight = 35db`
  It credits "Robert Raisch's stylesheet proposal" as a list of parameters, linking gummo.stanford.edu/.../www-talk-1993q2.messages/443.html.
- **Bert Bos kills the averaging and the logic**, 11 Oct 1994, https://lists.w3.org/Archives/Public/www-talk/1994Oct/0154.html : "The idea that two designs can be averaged to come up with an intermediate style seems utterly wrong to me. What happens when my blue-on-yellow style is combined with somebody else's yellow-on-blue? Do I get green-on-green? Or who wants to look at a page with Avant-garde titles over Helvetica paragraphs?" and "Expressions in the style specification that are to be evaluated by the browser make the language far too difficult." He lists three options (no preference / document sheet / user sheet) and proposes "specific overrules general ... if two specifications are the same, the one encountered first will take precedence."
- Lie's reply, 12 Oct, 0163: "Some attributes mix better that others ... while '100%' is equal to a binary '1' there is no going back from a binary syntax. In general, I think computer interfaces are much too binary." On the AGE rule: "No, the author does not know the age of the document since it changes all the time :-)".
- Pei Wei, 24 Oct 1994, 0383: "I'm intrigued by the effects of the cascading effects ... Neat as it is, though, it seems like a big can or worm ... I suggest such macro/scripting language be kept in mind, but postponed for the first cut." and from Viola experience "by mixing different stylesheets, it's very easy to have the styles clashing in a bad way." He reposts his 1993 RFC and says "The first time it was posted to www-talk a year ago. At the time I think I had gotten like 3 or 4 replies out of it."
- Brian Behlendorf (Wired), 13 Oct, 0182: "Separating the hardcore presentation information from the semantic information is quite nice." Wants authoring tools to generate the sheet.
- Bos 17 Oct, 0220: "NB2. For an example of how *not* to do it, look at MCOM-Netscape (pronounced `Mozilla' :-)."; he sorts attributes into "keep in HTML" and "remove to HSSL" (TABLE BORDER, CAPTION ALIGN=TOP, H1 ALIGN=CENTER go to the style language).
- Lie 3 Nov 1994, 1994Nov/0073 (copied to Raisch, Wei, Bos, Raggett, Behlendorf, TimBL, Terry Allen etc.): "Consensus items: ... Style sheets provide _hints_ ... Items for discussion: Should style sheets be HTML-specific or SGML-generic? Can style sheets be blended? Should style sheets include logic?" Moves talk to www-html.
- DSSSL Lite: Tom Magliery (NCSA), 1 Dec 1994, 1994Dec/0022: group at SGML '94 (7-11 Nov) met "to discuss the feasibility of defining a subset of the Document Style Semantics and Specification Language (DSSSL)", hoping to use it "in the upcoming release of SoftQuad's Panorama SGML browser software that will be distributed via NCSA along with Mosaic."
- Daniel Connolly 25 Jul 1995, 1995Jul/0186: answers "how can I give Arena, ViolaWWW and NaviPress sheets" with "format negotiation."

**What became of it (secondary, from the Lie/Bos book chapter, saved as www-talk-liebos-css-saga.txt; and the W3C history page):** CSS "started at CERN in 1994 and CSS1 became a W3C Recommendation in December 1996." W3C history page: "The earliest proposal (dated 95/10/10) included some exciting ideas that never made it past the brainstorming stage." Chapter says: Chicago "Developer's Day" showed "a slider with the label 'user' on one side and 'author' on the other" (fictitious screenshot); some found CSS "too simple ... they argued that ... the power of a full programming language was needed. CSS went in the exact opposite direction by making a point out of being a simple, declarative format." It also says Pei Wei's Viola (1992) and Harmony had style languages. NOTE: the chapter says Chicago "Mosaic and the Web" was "October 17-20, 1995" in a sidenote and "November 1994" in text: a typo/inconsistency in the secondary source. I did not find where the percentage syntax was dropped; I did not open the CSS drafts.

Evidence: SOLID for 1a to 1d (all on the list). Weakness: the weights' removal date and Raisch's reasons for leaving ORA are not in anything I opened.

---------------------------------------------------------------------
## 2. HTTP 402 Payment Required and a "ChargeTo" header (March 1994)  [SOLID, small, punchy]

- Dave Kristol (AT&T, dmk@allegra.att.com), Tue 15 Mar 1994, https://lists.w3.org/Archives/Public/www-talk/1994Mar/0113.html : "Are there provisions in HTTP to support fees for documents? ... 2) Server rejects, requesting payment. Server informs client of cost. Server expects some kind of (say) certificate that proves the client has deposited money in the server's 'bank account' somewhere or that represents some kind of 'digital cash'."
- Dave Raggett (HP Labs), same day, 0116: "Yes. Error code 402 Payment Required is sent by the server when appropriate. The header fields associated with this response indicate acceptable charging schemes. The client can then retry with a suitable ChargeTo header. This needs to be supplemented with a suitable authorization scheme." He wants to adapt PEM "for authentication, privacy (e.g. for credit card details) and billing", cites RSA offering to "waive license fees for non-commercial i.e. freeware implementations", and ends: "Lets use the web to defeat Clipper and in the process build a thriving global market for electronic commerce!"
- Only these two messages in the thread. No objector. The idea died by never being used, not by a vote.
- Afterlife: RFC 2616 (1999) section 10.4.3: "402 Payment Required: This code is reserved for future use." (https://www.rfc-editor.org/rfc/rfc2616.txt, saved.) I did NOT find "ChargeTo" in RFC 2616.
- Link to the cookie essay: Dave Kristol later co-wrote the cookie RFC (I did not verify in this pass; his Aug 1995 "State-Info proposal" appears in the subject index: "Dave Kristol's 'State-Info' proposal", 1995Aug). Worth confirming before using.
- Related, same direction: Raisch's "Registrar" (item 4) had "access authority, billing authority, and cost records" in each product record, July 1993.

---------------------------------------------------------------------
## 3. Links that run programs on your machine: `exec:` and `x-exec:` (March to December 1993)  [SOLID, good arc]

- 8 Mar 1993, "joe@athena.mit.edu" (tkWWW), https://lists.w3.org/Archives/Public/www-talk/1993Mar/0032.html : "In the next version of tkWWW, I'm planning to include an 'exec:' URL header. If you select a tag with this header it will display the text at the end of the address and ask the user if it wants to execute it as a system call. Any thoughts? In particular, are there any security problems won't be fixed by asking the user ..." (no name in header beyond joe@athena.mit.edu).
- Marc Andreessen, 9 Mar 1993, 1993Mar/0034: "It's a mammoth security problem in general, don't you think? Asking the user whether or not to execute a command absolves you of responsibility for the results, but the results could still be catastrophic."
- Three months later Andreessen, 19/20 Jun 1993, 1993Jun/0157: "For various reasons, we're about ready to give into our previous resistance to this whole idea and try to allow, under some circumstances, local executables to be launched via hyperlinks in Mosaic. Didn't someone suggest an exec: URL type, or something like that?"
- Tony Sanders, 0158: configure by MIME type, `exec/*: verify_exec() exec(exec_handler)`; "the '....:' part of a URL should specify how to retrive the data, not what to do with it."
- Tim Berners-Lee, 23 Jun 1993, 1993Jun/0191 (libwww release note): "If you are rash enough to put in `presentation application/x-csh "csh %s"` into your client rule file, then you can try out the example script". "Obviously this is just a hook. A script which previews it or at least asks would be more reasonable." and "The competition is obviously on for portable 1. safe scripting language for general use 2. timed presentation language (HyTime based?) for illustrated talks which give themselves."
- Andreessen again, 29 Jun 1993, 1993Jun/0259: "Having browsers execute code is *very* scary. Servers generally run ... as userid 'nobody' ... I don't see as there's any reason to think that client-side execution is safer."
- George Phillips (UBC, phillips@cs.ubc.ca), 13 Dec 1993 (header; archive lists it 14 Dec), 1993Dec/0175: "I've been working on a new URL scheme called 'x-exec:' which directs the WWW browser to execute a program locally ... upgrade patches to Mosaic 2.1 and Lynx 2-0-12". Exact URL forms: `x-exec://program/path/information`, `x-exec://urnw/rn/unread/group/comp.infosystems.www`, `x-exec://postnews/?newsgroups=misc.test`. "What local programs may be run is configurable by the installer and the user (default: nothing)." "Who knows, if it becomes popular enough, x-exec: could become a standard." Asks for flames "in the same cheerful spirit as Mosaic Motif flames."  (Phillips 20 Jun 1993, 1993Jun/0160, had said he already used "my own version of local program executing URLs for a newsreader" and proposed `file:/usr/local/rn.html%/news/comp/sources/misc`.)
- Replies: Larry Masinter (Xerox PARC), 15 Dec 1993, 1993Dec/0206: "I think x-exec: is an ugly hack. I'm about to propose something that at first glance looks like an uglier hack ..." (client treats `http://cs.ubc.ca/exec/...` as a local command). Andreessen 14 Dec, 0188: a mailcap flag "receiveoutput" instead. Roy Fielding 16 Dec, 0229: it "makes writing a web-roaming robot (spider) very difficult." Axel Belinfante 17 Dec, 0246: a script so people need not patch Mosaic: `application/x-exec; x_exec %s` in ~/.mailcap, noting "(it tries to be paranoia about the commands it is given to run ... i remember seeing something about a secure tcl interpreter)". Thread subject "Local Browser Execution (speaking of troyans)" exists in the index (1993Dec).
- Afterlife: x-exec itself did not become a standard (no source for that beyond the list going quiet; unverified). The "safe scripting language" competition TBL named in Jun 1993 is item 6.
Evidence: SOLID for arc; ending unverified.

---------------------------------------------------------------------
## 4. `<INCLUDE>`: put another document inside this one (1994 and 1995)  [SOLID for proposals; afterlife not checked]

- Server-side-include fight, 17 Apr 1994. frans van hoesel (chem.rug.nl), https://lists.w3.org/Archives/Public/www-talk/1994Apr/0267.html, on NCSA httpd 1.2 SSI: "the include syntax is weird. The idea of using comments for it ... what's wrong with a element of <include "ape.html">".
- Rob McCool (NCSA), 18 Apr 1994, 1994Apr/0275: "NO! NOT HTML! ... You are telling the server that certain files are of a special format, text/x-server-parsed-html. This is an internal representation that IS NOT HTML." "What about the element INCLUDE on the client side that may (or hopefully not) appear in the future?" and "The reason that the activation characters happen to be those that surround SGML comments is so that in the event that this internal representation should fall into external parsing hands, the extra directives will be ignored".  (McCool's own words say "hopefully not".) Rainer Klute 19 Apr, 0279: "Hopefully it will! You can already include images - why not text and other stuff?"
- Lewis Foti (Morgan), 9 Jun 1994, 1994Jun/0137: "<include src="URL">. ... standard disclaimers that need to be included in all the documents available at a server."  John C. Mallery (MIT AI Lab) 0141: instead `<A href="URL" ACCESS="inline">` with ACCESS= "jump", "inline", "toggle", "when#var". Brian Behlendorf 0172: `<include src="street.cred.html#vending">` with wrapped `<a name="vending">`; "Also, one could specify 'don't follow includes'." Gavin Nicol 0157: "one could support the SGML facility already defined". Daniel Connolly 0179: "This business of refering to parts of things has been done by the HyTime standard committee." Klute 0144: "The general case is to include only part of the document ... We first need to have a specification on how to reference a certain part of a document".
- Also in the index, NOT opened: 1995Mar '"Includes" in HTML...', 1995Jul 'INCLUDE-tag' (Danyel Ceccaldi, 6 Jul 1995, 1995Jul/0010), 1995May 'INCLUDES questions'. These could show whether the idea died or was "solved" by SSI.
- Afterlife: client-side include never shipped as `<INCLUDE>` (my knowledge; iframe/object/etc. not verified here). Server side includes survived as a comment: `<!--#include ... -->` (the McCool comment-trick; syntax not shown on pages I opened).

---------------------------------------------------------------------
## 5. FIGT/FIGA overlays and the EMBED element, dropped from HTML+ (1993 to 1994)  [SOLID]

- HTML+ Discussion Document, 8 Nov 1993 (https://www.w3.org/MarkUp/HTMLPlus/htmlplus_35.html to _38.html, saved), section 8.3, exact: "Another possibility would be to allow image data to be embedded in the document using an EMBED element in place of the SRC attribute. Binary data could be represented using the MIME character encoding or the more compact ASCII base 85 encoding ... The drawback with this approach is the inability to use format negotiation. As a result, the EMBED element has been dropped from the current draft." (An inline `data:` URI idea, 1993.)
- Same doc, 8.2, exact: `<A SHAPE="0.35,0.1&0.1,0.8&0.35,0.8" HREF="button1.html">triangle</A>` inside `<FIG SRC="test.gif">`: client-side clickable regions as polygons on the A tag. Sample: `<FIG ALIGN=FLOAT SRC="cat.gif"><CAPTION>"Not curried fish again!"<CAPTION>`.
- Raggett, 5 Jan 1994, https://lists.w3.org/Archives/Public/www-talk/1994Jan/0021.html, answering Alejandro Rivero (21 Dec 1993, 1993Dec/0263, "Can anyone out there suggest a WWW client or HTML+ parser implementing FIG directive?"): "The IMAGE element described in the above document was dropped." "The FIGT/FIGA elements were dropped following the WWW Wizards Workshop last year. People felt that the FIGT overlay mechanism needed more thought and should be deferred. The FIGA shaped buttons were replaced by the SHAPE attribute on the <A> element". And the DTD: `<!ELEMENT FIG - - (CAPTION?,(%text;)*)>` with comment "figures which subsume the role of the earlier IMG element." Also "I am working on an HTML+ browser for X11/XLib which will be ready in early spring `94."
- FIGT in use: Jay Glicksman (eitech.com) 13 Jul 1993, 1993Jul/0128, wanted FIGT overlays for annotations ("overlays can be stacked"). Raggett 14 Jul, 0130: restriction on nesting "is there to help browsers and authors avoid overly complex documents"; suggests a PANEL element "rendered as an icon of a thumbtack/drawing pin".
- Afterlife: (not from a source I opened here) client-side image maps arrived later; subject lines exist: 1994Nov "Inline support for vector files (client-side imagemap)", 1995Aug "Clientside Maps", not opened. FIG itself: img-tag.html already says Raggett's FIG did not displace IMG.

---------------------------------------------------------------------
## 6. "A safe virtual machine" and a scripting language for the Web, 17 months before JavaScript (1993 to 1995)  [SOLID]

- TBL, 23 Jun 1993 (see item 3): "The competition is obviously on for portable 1. safe scripting language for general use".
- Bert Bos, 24 Jun 1994, 1994Jun/0427: "W3A": "an interface (API) between a WWW browser and `applets' which can implement protocols, conversions, viewers, hotlists ... based on dynamic linking and a stream model ... A browser must export 12 functions. An applet must export 2-7 functions." Daniel Connolly's reply (0431): "Your implementation is limited to Unix boxes that support dynamic linking." and "We need two kinds of 'safe' programming languages: the lisp/perl/smalltalk/python style ... and the safe-tcl/Obliq/telescript style".
- Daniel Connolly (HaL), 30 Sep 1994, https://lists.w3.org/Archives/Public/www-talk/1994Sep/0526.html "How about a Safe Virtual Machine?": "Safe Tcl is the most mature system of its kind ... Still... Tcl give me the heebee-jeebees." Proposes a VM rather than a language; "Any application where the end user is required to do programming is bound to fail."; admits "I'm sorry I don't have a concrete proposal. In a way, I'm generating a bunch of heat and not much light."
- Nathaniel Borenstein (Safe-Tcl), 1 Oct 1994, 1994Oct/0007: the confirmation dialog must say "This program is trying to send mail to 'president@whitehouse.gov' with a Subject of 'Die, Commie Dog!'" not "execute the 'exec' system call", so "this is NOT your father's Virtual Machine".
- Guido van Rossum, 2 Oct 1994, 1994Oct/0016: "Hm... I think the whole idea of a 'safe virtual machine' won't work ... maybe 95% of the unsafe operations are library functions -- 4% are high-level operations that negotiate access to the library ... only a tiny fraction of unsafe operations are close to the level of the Python virtual machine".
- Mark Fisher (Thomson Consumer Electronics), 6 Mar 1995, 1995Mar/0042: Safe-Tcl for browser extension, a CGI substitute, and agents. "I suggest the name 'Spider' for this Safe-Tcl extension."
- Bert Bos, 7 Mar 1995, https://lists.w3.org/Archives/Public/www-talk/1995Mar/0073.html, "HyperText Scripting Language": "time is slowly getting ripe for client-side scripting. By that I mean a bold leap away from all those half-hearted HTML extensions into a completely new language." Wish-list exact: "text that slips away when you try to click on it", "thumbnail HTML pages that circle each other on the screen", "a ticking clock that displays the users's local time", "a `screen saver' for your browser's window". Proposes "`Uniform Object Code' (or bytecode, or p-code...)", "restricted OOP", and an API. Notes: "In the past we have had discussions about all kinds of `safe' variants of languages such as Scheme, Tcl, Python, and C."
- Also opened-by-subject only (not read): 1995Mar "Safe CGI Scripting Language", "Telescript information", "Web Scripting Languages" (reply thread, 17 messages), 1995Jun "Java vs Tcl/Tk", 1995Apr "Hot Java is here! And it *rocks*" (starts 1995Mar), 1995May "[aw@bae.bellcore.com: Netscape to incorporate Java]", 1996Oct "ANNOUNCEMENT: Tcl plugin 1.0 final release available", 1996Oct/Sep "Java is not the only applet language!".
- Afterlife: Java applets and JavaScript (1995) won; "safe VM" idea reappears as the JVM sandbox. I did not source JavaScript's date here.
- Note Lie/Bos chapter: Bos's Argo browser "featured plug-ins (which it called 'applets') before Netscape added them" (secondary, www-talk-liebos-css-saga.txt).

---------------------------------------------------------------------
## 7. URNs, "Registrar" and TBL's DNS "IX" records (1993)  [SOLID for proposals; ending is long and diffuse]

- Raisch, 7 Jul 1993, https://lists.w3.org/Archives/Public/www-talk/1993Jul/0076.html, "Registrar -- Resource Registration Service", cross-posted to uri@bunyip.com, www-talk and com-priv@psi.com: "Registrar is a 'product' registry which serves various pieces of information when given a unique URN. One of the returned 'attributes' is a 'product instance record' which contains a URL, content type, content encoding, content size, access authority, billing authority, and cost records." Reachable via `telnet ruby.ora.com 99`, command HELP. URN form: "authority:opaque_data".  Thread has ~28 messages (Ed Krol, Larry Masinter, Terry Allen, Tim BL, Michael Mealling ...), not read except TBL's LinkToLiving note (0116).
- TBL, 3 Nov 1993, https://lists.w3.org/Archives/Public/www-talk/1993Nov/0042.html, on the URN draft: "I am going to propose that the / and the : be merged." "What protocol should we DEFINE to implement URNs? None. Any URN name space which is linked to one protocol is broken, and is more of a URL." and proposes DNS: "One possibility is to add an IX record. This I am told would mean recompiling all DNS." or MX records under `.ix`: `aaa1.notes.sept.timbl.as.cn.cern.ch.ix`.
- Afterlife: not checked here. (RFC 1737 and later URN work exist; I did not open them.) Subject lines: 1994Dec "SOAPs as URCs [was: HTTP Futures]", 1994Mar "Stab at URNs in the dark".
Evidence: THIN on outcome.

---------------------------------------------------------------------
## 8. HTTP-NG (1994 to 1999)  [SOLID start, W3C page for ending]

- Simon E Spero (UNC), 20 Nov 1994, https://lists.w3.org/Archives/Public/www-talk/1994Nov/0268.html (Star Trek framing "Captain's log, stardate 11-20-94"): "HTTP-NG is designed to be a replacement for HTTP 1.0 offering much higher performance". "HTTP 1.0 would only use around a 10th of the available bandwidth". Many requests over one connection via a "session layer"; "Each object is returned over in its own channel."
- Behlendorf 21 Nov, 0285: server could send `Inlined-objects-URI: /Images/yes.gif, /Images/no.gif` in headers (an early push/preload idea).
- Raggett 23 Nov, 0323: "I ran a BOF on this at the recent WWWF'94 conference, and will be doing the same at the IETF meeting next month in San Jose, where we will be formally requesting the settting up of an IETF HTTP working group."
- End: W3C page https://www.w3.org/Protocols/HTTP-NG/ (saved): "HISTORIC: This page is not kept up to date. W3C currently does not have an Activity on HTTP-NG." Last news: "Dec 11, 1998: HTTP-NG BOF at IETF-43", "Nov 18, 1998: HTTP-NG Overview ... Internet Draft", "Oct 27, 1999: Endpoint Congestion Management (ecm) Working Group chartered".
- Afterlife (my knowledge, not verified): HTTP/1.1 persistent connections, later HTTP/2 multiplexing. 1996Feb threads "HTTP-NG Client/Server Project" exist (not opened).

---------------------------------------------------------------------
## 9. Notes on other leads

**IMG rivals:** covered by content/img-tag.html. Added by me: HTML+ doc dropped EMBED (item 5).

**Mosaic group annotations:** Marc Andreessen, 31 May 1993 (header; archived 1 Jun), https://lists.w3.org/Archives/Public/www-talk/1993Jun/0001.html: "We could use a few guinea pigs to try out our in-progress group annotation server for Mosaic ... Mosaic 1.1 has built-in client-side support. ... no security except through obscurity". Shipped feature; I did not find a source on its removal. Raisch 17 Jun 1993 (0125) on the annotation dream: "Ahhhh.... Dreams of XANADU. (Where's my laudanum?)". THIN.

**Netscape extensions, Oct 1994 (shipped, then argued over):** Montulli (Netscape), 25 Oct 1994, 1994Oct/0407: "The original CERN spec, which BTW never included a DTD, specified <p> as a paragraph separator and never had a </p>. Trying to make <p> into a container now IS rewritting history and breaks many current implementations". Connolly reply 27 Oct, 0431: "Spreading Fear, Uncertainty and Doubt about the interoperability aspects of the HTML 2.0 specification at this point is pretty much inexcusable, given the openness of the working group", "Mosaic communications corp. was noticeably absent from the discussions on html-wg." Connolly on CENTER, 21 Oct 1994, 0332: "today's browsers will blur the 'centered text' with the 'normal para'. So it appears that <center> does have impact on existing browsers. ... the DIV or DIVISION element seems like a better idea." (DIV did become HTML 3.2 and CENTER also; my knowledge.) Lie/Bos chapter: Andreessen announced Mozilla beta 13 Oct 1994 with `<center>`. The messages are partly quoted-stripped by my filter; a deeper read could yield a full CENTER story. THIN here.

**Raggett's `media=` on LINK**: see 1a.

**Not found / not on list as subjects:** `<NEXTID>`, `<BLINK>`, `<MARQUEE>`, `<BANNER>` as a proposal (only 1995Aug "does arena browser support banner yet?", 1996Dec "The use and implementation of Banner" which may be a different Banner; not opened), `<TAB>`, `<OVERLAY>`, LINK/UNLINK methods (a subject search found no LINK/UNLINK method thread; PUT threads exist in 1995Jun and 1996Aug/Sep/Oct but are about PUT use). 1996Jun "MATH support on Mozzila 3.0" exists (Mirsad Todorovac, 25 Jun 1996, 1996Jun/0055, 57, MegaZone 0056), not opened. HTML+ <MATH> and eqn: Nielsen asked for equations 11 Jun 1993 (1993Jun/0039); HTML+ draft has section 12 "Mathematical Equations" (htmlplus_45.html, not opened).
**Other opened-by-subject leads worth a second pass:** 1994Jul "Proposal -- Foldable Anchor Inclusion for HTML 3.0"; 1995Jan "PROPOSAL: Re: Automatic Page Updates" and 1995Apr/May "Dynamic HTML documents with client pull" (Netscape refresh); 1995Aug "new html extension proposal"; 1996Feb "A Criticism of NS Frames [was: Strongly-Typed Hyperlinks]" (Guido van Rossum 24 Feb 1996, 1996Feb/0053); 1996Feb "<OL>, stylesheets, HTML3, Netscape2.0"; 1996Jun "shopping baskets w/o dynamic documents (proposal)"; 1995Dec "Proposition on advanced URL features"; 1996Jan "URL Expansion proposal"; 1995Jan "Proposed new authentication scheme for HTTP"; 1994Feb "Proposal for standard icons/symbols" and 1996Jan "W3C Working Draft: HTML predefined icon-like symbols" (standard icon set idea; two ends of one idea); 1994Dec "WWW Applets: Embedding & Filters" (Ellis Cohen, 21 Dec 1994, 1994Dec/0177).

---------------------------------------------------------------------
## Surprises
1. Raisch's 1993 style sheet was asked for, then could not be found: Aug 1993 Tony Sanders "keeps asking someone to post a pointer to the spec" (second-hand) and Torkington posted a copy sent to him. It only ever existed in the mail archive and one copy on a New Zealand server, per what I opened. In May 1994 Raisch (by then at The Internet Company) is still pointing people at the June 1993 message, and says O'Reilly paid for it and it "is in the public domain".
2. The first style sheet author and the one who "inherited the stylesheet problem" were successive staff at the same publisher. Raisch left O'Reilly between Jun and Oct 1993 (Wei, 0271, and Raisch, 0266). Wei's Viola implemented it and drew "like 3 or 4 replies" in 1993.
3. The first CSS proposal was a different idea from CSS: percentage "influence" weights, a weighted average of two sheets (NYT 30% / Le Monde 70%), and expressions on the document's `AGE` and `RELEVANCE`. The man who killed the averaging, Bert Bos, then joined Lie.
4. Andreessen, who in Feb 1994 told authors "Sorry, you're screwed" and said he was no longer "in the client business", had in Mar 1993 called exec: URLs "a mammoth security problem" and by June 1993 was "about ready to give into our previous resistance".
5. The 402 Payment Required status was explained with a worked scheme (`ChargeTo` header) the same day it was asked about, by the HTML+ author, in a message ending with an anti-Clipper rallying cry. It then sat "reserved for future use" in RFC 2616.
6. HTML+ (Nov 1993) already had polygon `SHAPE` regions on `<A>` inside a FIG, i.e. client-side image maps, 18 months before they became a debate; and had an EMBED element (dropped) for inline data.
7. Safe virtual machine thread: Guido van Rossum (Python) said it "won't work", 2 Oct 1994, three months before Safe-Tcl or anything else shipped in a browser.
8. TBL proposed fixing URNs by adding an "IX" record to DNS, "This I am told would mean recompiling all DNS."
9. Secondary-source slip: Lie/Bos CSS chapter dates the Chicago "Mosaic and the Web" conference to "October 17-20, 1995" in a sidenote but "November 1994" in the text. Do not quote that sidenote.
10. McCool himself wrote "hopefully not" about client-side INCLUDE while defending server-side include as "NOT HTML".

## Candidate protagonists (my ranking)
1. **Rob Raisch** (style sheets June 1993, Registrar/URN July 1993 with "billing authority", leaves ORA, May 1994 "VERY VERY important", 1994 Nov still in the cc list on Lie's summary). Two rejected ideas, one man, a publisher's view of the web. Strongest.
2. **Håkon Wium Lie** vs **Bert Bos**: the first CSS had percentages and an `AGE` rule; Bos wrote the objection the next day; they met in person April 1995 (per their book).
3. **George Phillips** and `x-exec:` (Dec 1993): a clean small rejected idea with an inventor, an announcement with sample URLs, and critics (Masinter, Fielding, Andreessen).
4. **Dave Raggett** as the man whose proposals kept being dropped (EMBED, FIGT/FIGA, FIG, `media=`, 402) while he drafted HTML+ and 3.0.

## Could not open
- web.archive.org (not tried, per brief); http://info.cern.ch/hypertext/WWW/People/howcome/p/cascade.html returned 404 on that host (the w3.org copy opened, but it is v0.92 not the 10 Oct original).
- http://pebble.berkeley.ora.com/vdoc/style/stylesheetRFC.txt and sample.html (Wei's page): not tried (old host).
- Torkington's http://www.vuw.ac.nz/non-local/gnat/ora-stylesheet-proposal.txt: not tried; the full text is in 1993Jun/0029 instead.
- gummo.stanford.edu archive links and 1997.webhistory.org links used by Lie/Bos: not tried.
- Tony Sanders's Aug 1993 "I keep asking someone to post a pointer to the spec" message: seen only quoted in Torkington.
- https://www.w3.org/MarkUp/HTMLPlus/ index (Access Denied); htmlplus_45 (Math) and the FIGT section not located.
- www-html archive (1993 to 1995) not searched in this pass.
- mboxes/ folder not tried (not needed).
- Message bodies of ~28-message Registrar thread, the 1995 INCLUDE threads, the Mar 1995 scripting thread's replies, the Oct 1994 CENTER/Netscape thread (most of it) not read.
