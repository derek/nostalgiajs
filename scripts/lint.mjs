// Style checks for essay fragments: the house rules a script can enforce, so
// the reviewers can spend their attention on the ones it cannot.
// Run: `node scripts/lint.mjs <slug> [<slug> ...]` exits 1 if a named essay
// breaks a rule. With no slug it reports on every essay and always exits 0,
// because some published essays are older than some rules.
// FAIL is a broken rule. "note" is a pattern for the writer and the editor to
// look at; it is often fine once, and a problem when it is a habit.
import { readFileSync, readdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
export const WORD_LIMIT = 3000;
// Headings that copy the outline in AGENTS.md instead of naming this essay's subject.
const GENERIC = /^(what happened|why|why it happened|setup|the setup|the hook|how people coped|what became of it|background|introduction|conclusion)$/i;

const strip = (s) => s.replace(/<[^>]+>/g, ' ').replace(/&[a-z]+;|&#\d+;/g, ' ').replace(/\s+/g, ' ').trim();
const words = (s) => s.split(/\s+/).filter(Boolean);
// The prose a reader reads: no code, no sources section. The build counts the same way.
export const prose = (body) => body.replace(/<pre[\s\S]*?<\/pre>/g, ' ').replace(/<section class="sources"[\s\S]*$/, ' ');
export const wordCount = (body) => words(prose(body).replace(/<[^>]+>/g, ' ')).length;

// Heading rules, shared with the build so no page is published with a broken one.
export function headingProblems(body) {
  const out = [];
  for (const [, inner] of prose(body).matchAll(/<h2>([\s\S]*?)<\/h2>/g)) {
    const label = strip(inner);
    if (/<a[\s>]/.test(inner)) out.push(`heading "${label}" contains a link`);
    if (/\bit\b/i.test(label)) out.push(`heading "${label}" says "it"; name the thing`);
    if (GENERIC.test(label)) out.push(`heading "${label}" copies the outline; describe this essay's content`);
  }
  return out;
}

const QUOTE = /["“]([^"”]{3,}?)["”]/g;
const own = (p) => p.replace(QUOTE, ' ');   // a paragraph with the quoted words taken out
const fiveGrams = (text) => {
  const w = words(text.replace(/[^A-Za-z0-9' ]+/g, ' '));
  const set = new Set();
  // Skip runs with a capitalised word after the first: those are names, not habits.
  for (let i = 0; i + 5 <= w.length; i++) {
    const g = w.slice(i, i + 5);
    if (!g.slice(1).some((x) => /^[A-Z]/.test(x) && !/^I('|$)/.test(x))) set.add(g.join(' ').toLowerCase());
  }
  return set;
};

function lint(slug, others) {
  const fails = [], notes = [];
  const body = readFileSync(join(ROOT, 'content', slug + '.html'), 'utf8').trim();
  const text = prose(body);
  const n = wordCount(body);
  if (n > WORD_LIMIT) fails.push(`${n} words; the limit is ${WORD_LIMIT}. Cut ${n - WORD_LIMIT} or more`);
  fails.push(...headingProblems(body));

  const sections = text.split(/<h2>/);
  sections.forEach((s, i) => {
    const bq = (s.match(/<blockquote/g) || []).length;
    if (bq > 1) fails.push(`section "${i ? strip(s.split('</h2>')[0]) : '(opening)'}" has ${bq} block quotations; one is the most`);
  });

  const paras = [...text.replace(/<blockquote[\s\S]*?<\/blockquote>/g, ' ').matchAll(/<p[^>]*>([\s\S]*?)<\/p>/g)].map((m) => strip(m[1]));
  const mine = paras.map(own).join('\n');
  for (const [re, why] of [
    [/\bthis (blog )?post\b|\bthis blog\b/i, 'calls the essay a post or a blog'],
    [/\bthis week\b|\byesterday\b|\bearlier this (month|year)\b/i, 'dates the essay'],
    [/\bas an AI\b|\bI('m| am) an AI\b/i, 'adds an AI aside'],
    [/\bI (still )?remember\b|\bI wasn't there\b|\bI was not there\b/i, 'claims or disclaims a memory'],
    [/\p{Extended_Pictographic}/u, 'uses an emoji'],
  ]) {
    const m = mine.match(re);
    if (m) fails.push(`"${m[0]}" ${why}`);
  }

  // The ending: "The takeaway" is the last section, one or two paragraphs, ending on a statement.
  const end = text.slice(text.lastIndexOf('<h2>The takeaway</h2>'));
  if (!text.includes('<h2>The takeaway</h2>')) fails.push('no "The takeaway" section');
  else {
    const last = end.trim().match(/<\/(\w+)>\s*$/)?.[1];
    const endParas = [...end.matchAll(/<p[^>]*>([\s\S]*?)<\/p>/g)].map((m) => strip(m[1]));
    if (last !== 'p') fails.push(`the essay ends on a <${last}>, not a paragraph`);
    else if (/\?["”)]?$/.test(endParas.at(-1))) fails.push('the essay ends on a question');
    if (endParas.length > 2) notes.push(`the takeaway runs to ${endParas.length} paragraphs; one or two is the rule`);
  }

  const firstPre = body.match(/<pre[^>]*><code>([\s\S]*?)<\/code><\/pre>/);
  const wide = firstPre ? Math.max(...firstPre[1].replace(/&[a-z]+;/g, 'x').split('\n').map((l) => l.length)) : 0;
  if (wide > 35) notes.push(`the opening snippet is ${wide} characters wide; 35 fit on a phone`);

  // Quotation load.
  const quoted = paras.flatMap((p) => [...p.matchAll(QUOTE)].map((m) => m[1]));
  const share = Math.round(100 * words(quoted.join(' ')).length / Math.max(1, words(paras.join(' ')).length));
  if (share > 20) notes.push(`${share}% of the prose is inside quotation marks; tell more of it in your own sentences`);
  const stacked = paras.filter((p) => [...p.matchAll(QUOTE)].filter((m) => words(m[1]).length >= 6).length >= 2);
  if (stacked.length) notes.push(`${stacked.length} paragraph(s) carry two or more full quotations, e.g. "${stacked[0].slice(0, 60)}..."`);

  // Habits.
  const notX = mine.match(/\b(?:is|was|are|were)(?:n't| not) (?:just |only |merely |simply |really )?[^.;:?!\n]{1,70}[.;,] (?:it|that|this|they) (?:is|was|are|were|'s)\b/i);
  if (notX) notes.push(`possible "not X, it's Y": "${notX[0].slice(0, 90)}"`);
  const openers = {};
  for (const p of paras) { const k = words(p).slice(0, 2).join(' '); openers[k] = (openers[k] || 0) + 1; }
  for (const [k, c] of Object.entries(openers)) if (c >= 4) notes.push(`${c} paragraphs open with "${k}"`);
  const closers = paras.filter((p) => words(p).length > 25 && words(p.split(/(?<=[.!?]["”]?)\s+/).at(-1)).length <= 7);
  if (closers.length > paras.length / 4) notes.push(`${closers.length} of ${paras.length} paragraphs end on a short punchline sentence`);

  // Phrases this essay shares with three or more others: a device the collection keeps reusing.
  const shared = [...fiveGrams(mine)].filter((g) => others.filter((o) => o.grams.has(g)).length >= 3);
  if (shared.length) notes.push(`phrasing already used in three or more essays: ${shared.slice(0, 6).map((g) => `"${g}"`).join(', ')}`);

  return { n, share, fails, notes };
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const all = readdirSync(join(ROOT, 'content')).filter((f) => f.endsWith('.html') && !f.startsWith('_')).map((f) => f.slice(0, -5));
  const named = process.argv.slice(2);
  for (const s of named) if (!all.includes(s)) { console.error(`lint: content/${s}.html is missing`); process.exit(1); }
  const grams = all.map((slug) => {
    const text = prose(readFileSync(join(ROOT, 'content', slug + '.html'), 'utf8')).replace(/<blockquote[\s\S]*?<\/blockquote>/g, ' ');
    return { slug, grams: fiveGrams([...text.matchAll(/<p[^>]*>([\s\S]*?)<\/p>/g)].map((m) => own(strip(m[1]))).join('\n')) };
  });
  let failed = false;
  for (const slug of named.length ? named : all) {
    const r = lint(slug, grams.filter((g) => g.slug !== slug));
    console.log(`${slug}: ${r.n} words (limit ${WORD_LIMIT}), ${r.share}% quoted`);
    for (const f of r.fails) console.log('  FAIL  ' + f);
    for (const x of r.notes) console.log('  note  ' + x);
    if (r.fails.length) failed = true;
  }
  if (named.length) process.exit(failed ? 1 : 0);
}
