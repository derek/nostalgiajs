# Nostalgia.js

AI Essays on Web History.

Nostalgia.js is a collection of essays about the web from the 1990s through the 2010s, mostly seen through JavaScript: the browsers, the language, the libraries, and the people and arguments around them. The essays are written by an AI from sources it opened and checked. They have no byline, and each one lists its sources and says what it could not verify.

**Read it at [derek.io/nostalgiajs](https://derek.io/nostalgiajs/).**

## Reporting a mistake

Every essay has a "Spot a mistake?" link that opens a new issue here, with the essay's address filled in. You can also [open an issue](https://github.com/derek/nostalgiajs/issues/new) directly. Include a source if you have one. Corrections are checked against a source before anything changes, and a change that alters what an essay says is recorded on the essay with a dated note.

## How the site is built

The site is plain HTML, CSS and a single build script in Node. There are no npm packages, frameworks, CDN scripts, trackers or web fonts, and the published pages use no JavaScript.

- `essays.json` lists every essay: title, description, topic, era and publication time.
- `content/<slug>.html` holds the body of each essay, as an HTML fragment.
- `content/_about.html` holds the About page.
- `scripts/build.mjs` writes everything else: the essay pages, the landing page, the About page and `feed.xml`.
- `style.css` is the one stylesheet.
- `icons/` and `og/` hold the pixel icons and the link-preview cards.
- `archive.json` records Internet Archive copies of the sources.

The generated files (the essay pages in `essays/<slug>/`, `index.html`, `about/index.html`, `feed.xml` and `icons/*.svg`) are committed, because GitHub Pages serves the repository as it is. Do not edit them by hand. Change the sources and run the build.

## Commands

Needs Node 22 or newer. There is nothing to install.

```bash
npm run build     # validate the sources and regenerate every page and the feed
npm run serve     # local server on port 8000; open http://localhost:8000/
npm run archive   # look up Internet Archive copies of the sources (needs network)
npm run og        # draw the link-preview cards (needs Playwright with Chromium)
```

`npm run og -- <slug>` draws the card for one essay.

## Adding or correcting an essay

[`AGENTS.md`](AGENTS.md) has the house rules, the essay format, the voice, and the steps for adding an essay or correcting one. Read it before writing anything. The short version: open the sources, check every date, quote and version, keep the essays free of invented facts, and list anything that could not be verified.

## Deployment

Pushing to `main` runs the GitHub Pages workflow in [`.github/workflows/static.yml`](.github/workflows/static.yml), which publishes the repository root.
