// Checks the built site before an essay is published: the landing page and
// each named essay at 375 px wide (no sideways page scroll, no console
// errors, no broken local links), and that feed.xml parses as XML.
// Run: `node scripts/check.mjs <slug> [<slug> ...]`. Exits 1 on any failure.
// If work/<slug>/ exists, saves the essay's icon at 96 and 48 px to
// work/<slug>/icon.png so it can be looked at. Needs Playwright with Chromium.
import { readFileSync, existsSync, statSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createRequire } from 'node:module';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const { chromium } = createRequire(import.meta.url)('playwright');
const slugs = process.argv.slice(2);
let failed = false;
const report = (ok, msg) => { console.log((ok ? 'ok    ' : 'FAIL  ') + msg); if (!ok) failed = true; };

const browser = await chromium.launch();
const ctx = await browser.newContext({ viewport: { width: 375, height: 800 }, deviceScaleFactor: 1 });
for (const pg of ['index.html', ...slugs.map((s) => `essays/${s}/index.html`)]) {
  const file = join(ROOT, pg);
  if (!existsSync(file)) { report(false, `${pg}: not built`); continue; }
  const page = await ctx.newPage();
  const errs = [];
  page.on('console', (m) => m.type() === 'error' && errs.push(m.text()));
  page.on('pageerror', (e) => errs.push(String(e)));
  // The two visit counters are remote scripts; keep the check offline.
  await page.route(/^https?:/, (r) => r.abort());
  await page.goto('file://' + file);
  const [sw, iw] = await page.evaluate(() => [document.documentElement.scrollWidth, innerWidth]);
  const refs = await page.evaluate(() => [...document.querySelectorAll('a[href],img[src],link[href]')]
    .map((a) => a.getAttribute('href') || a.getAttribute('src')).filter((h) => !/^(https?:|#|mailto:|data:)/.test(h)));
  const missing = refs.filter((h) => {
    let t = resolve(dirname(file), h.split('#')[0]);
    if (existsSync(t) && statSync(t).isDirectory()) t = join(t, 'index.html');
    return !existsSync(t);
  });
  const real = errs.filter((e) => !/ERR_FAILED|net::/.test(e));
  report(sw <= iw, `${pg}: width ${sw}/${iw}`);
  report(real.length === 0, `${pg}: ${real.length} console errors ${real.join(' | ')}`);
  report(missing.length === 0, `${pg}: ${missing.length} broken local links ${missing.join(', ')}`);
  await page.close();
}

const page = await ctx.newPage();
const feedErr = await page.evaluate((xml) => {
  const e = new DOMParser().parseFromString(xml, 'application/xml').querySelector('parsererror');
  return e ? e.textContent.slice(0, 200) : '';
}, readFileSync(join(ROOT, 'feed.xml'), 'utf8'));
report(!feedErr, `feed.xml parses ${feedErr}`);

for (const s of slugs) {
  const dir = join(ROOT, 'work', s);
  const svg = join(ROOT, 'icons', `${s}.svg`);
  if (!existsSync(dir) || !existsSync(join(ROOT, 'icons', `${s}.txt`))) continue;
  const data = 'data:image/svg+xml;base64,' + readFileSync(svg).toString('base64');
  const p = await browser.newPage({ viewport: { width: 200, height: 120 }, deviceScaleFactor: 2 });
  await p.setContent(`<body style="margin:12px;background:#fff"><img width=96 height=96 src="${data}"> <img width=48 height=48 src="${data}"></body>`);
  await p.screenshot({ path: join(dir, 'icon.png') });
  console.log(`icon  work/${s}/icon.png`);
}
await browser.close();
process.exit(failed ? 1 : 0);
