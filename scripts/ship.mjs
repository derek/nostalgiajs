// Does every mechanical step between a reviewed essay and a commit.
// Run: `node scripts/ship.mjs <slug>`.
// Expects content/<slug>.html, work/<slug>/entry.json (the essays.json entry
// without `published`) and, usually, icons/<slug>.txt. It then:
//   0. runs scripts/lint.mjs on the fragment and stops on any FAIL
//   1. adds the entry to essays.json with the current UTC time as `published`
//      (or, if the slug is already there, updates it and keeps `published`)
//   2. builds, records archive copies, draws the preview card, builds again
//   3. runs scripts/check.mjs
//   4. writes the commit message to work/<slug>/commit.txt
// It does not touch TOPICS.md and does not run git. Stops at the first failure.
import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const slug = process.argv[2];
const fail = (msg) => { console.error('ship: ' + msg); process.exit(1); };
if (!slug) fail('usage: npm run ship -- <slug>');
const entryFile = join(ROOT, 'work', slug, 'entry.json');
if (!existsSync(join(ROOT, 'content', `${slug}.html`))) fail(`content/${slug}.html is missing`);
if (!existsSync(entryFile)) fail(`work/${slug}/entry.json is missing`);

// Style rules first, so a draft that breaks one never reaches essays.json.
try {
  process.stdout.write(execFileSync('node', ['scripts/lint.mjs', slug], { cwd: ROOT, encoding: 'utf8' }));
} catch (e) { process.stdout.write(e.stdout || ''); fail('lint failed; fix the FAIL lines and run again'); }

const entry = JSON.parse(readFileSync(entryFile, 'utf8'));
if (entry.slug !== slug) fail(`entry.json has slug "${entry.slug}", expected "${slug}"`);
const listFile = join(ROOT, 'essays.json');
const list = JSON.parse(readFileSync(listFile, 'utf8'));
const at = list.essays.findIndex((e) => e.slug === slug);
const isNew = at < 0;
if (isNew) {
  list.essays.push({ ...entry, published: new Date().toISOString().replace(/\.\d+Z$/, 'Z') });
} else {
  list.essays[at] = { ...entry, published: list.essays[at].published };
}
writeFileSync(listFile, JSON.stringify(list, null, 2) + '\n');
console.log(`ship: ${isNew ? 'added' : 'updated'} ${slug} in essays.json`);

const run = (label, ...args) => {
  console.log(`ship: ${label}`);
  try { execFileSync('node', args, { cwd: ROOT, stdio: ['ignore', 'pipe', 'inherit'], encoding: 'utf8' }); }
  catch (e) { process.stdout.write(e.stdout || ''); fail(`${label} failed`); }
};
run('build', 'scripts/build.mjs');
try {
  const out = execFileSync('node', ['scripts/archive.mjs'], { cwd: ROOT, encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'] });
  console.log('ship: ' + (out.split('\n').find((l) => l.startsWith('archive:')) || 'archive done'));
} catch { console.log('ship: archive lookup failed (network?); continuing without new archive links'); }
run('preview card', 'scripts/og.mjs', slug);
run('build', 'scripts/build.mjs');
try {
  process.stdout.write(execFileSync('node', ['scripts/check.mjs', slug], { cwd: ROOT, encoding: 'utf8' }));
} catch (e) { process.stdout.write(e.stdout || ''); fail('checks failed; fix and run again'); }

const body = (entry.unverified || []).length
  ? '\n\nCould not verify:\n' + entry.unverified.map((u) => `- ${u}`).join('\n') : '';
writeFileSync(join(ROOT, 'work', slug, 'commit.txt'), `${isNew ? 'Add essay' : 'Update essay'}: ${entry.title}${body}\n`);
console.log(`ship: ready. Commit message is in work/${slug}/commit.txt`);
