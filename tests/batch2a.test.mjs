/**
 * Batch 2A tests — Fishipedia interactive upgrade + /fish/triggerfish/ landing page.
 * Run: npm test
 *
 * Covers the Batch 2A gates:
 *  - the checklist still renders every data-layer entity, from the data layer
 *    only (no second hardcoded creature list anywhere)
 *  - search / island / caught-status filtering, and their combination
 *  - versioned localStorage persistence, restore, reset scope, and graceful
 *    behaviour when storage is missing or throws
 *  - the server-rendered HTML still carries all 49 creatures (checked against
 *    the real build output when a build exists)
 *  - the Fishipedia SEO surface is byte-identical to what shipped
 *  - /fish/triggerfish/ exists, is canonical-correct, is sitemapped, is linked
 *    from Fishipedia, and carries no resurrected fabricated mechanics
 */
import test from 'node:test';
import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import jitiPkg from 'jiti';

const createJiti = jitiPkg.createJiti ?? jitiPkg.default ?? jitiPkg;
const jiti = createJiti(import.meta.url, {
  alias: { '@': new URL('..', import.meta.url).pathname },
});

const game = jiti('../src/data/game/index.ts');
const fishipedia = jiti('../lib/fishipedia.ts');
const graph = jiti('../lib/entity-graph.ts');
const progress = jiti('../lib/fishipedia-progress.ts');

const { FISH, BOSSES, DRIP_SYSTEM_FACTS, CURRENT_GAME_VERSION } = game;
const ENTRIES = fishipedia.getFishipediaEntries();
const GROUPS = fishipedia.FISHIPEDIA_GROUPS;

const FISHIPEDIA_PAGE = 'app/guides/fishipedia/page.tsx';
const CHECKLIST_COMPONENT = 'components/FishipediaChecklist.tsx';
const PROGRESS_LIB = 'lib/fishipedia-progress.ts';
const TRIGGERFISH_PAGE = 'app/fish/triggerfish/page.tsx';
const TRIGGERFISH_ROUTE = '/fish/triggerfish/';

// ---------------------------------------------------------------- helpers

/** In-memory StorageLike, so persistence is tested without a browser. */
function fakeStorage(seed = {}) {
  const map = new Map(Object.entries(seed));
  return {
    map,
    getItem: (k) => (map.has(k) ? map.get(k) : null),
    setItem: (k, v) => map.set(k, String(v)),
    removeItem: (k) => map.delete(k),
  };
}

/** A storage that throws on every access — private mode / blocked storage. */
const hostileStorage = {
  getItem() {
    throw new Error('storage disabled');
  },
  setItem() {
    throw new Error('storage disabled');
  },
  removeItem() {
    throw new Error('storage disabled');
  },
};

const entryBySlug = (slug) => ENTRIES.find((e) => e.slug === slug);

// ============================================================ Fishipedia

test('2A/Fishipedia: every data-layer creature is still rendered, 38 + 11 = 49', () => {
  assert.equal(ENTRIES.length, FISH.length + BOSSES.length);
  assert.equal(ENTRIES.length, 49);
  assert.equal(ENTRIES.length, DRIP_SYSTEM_FACTS.totalCatalogSize);
  const rendered = new Set(ENTRIES.map((e) => e.slug));
  for (const entity of [...FISH, ...BOSSES]) {
    assert.ok(rendered.has(entity.slug), `${entity.slug} missing from the checklist`);
  }
  // Row content (name / location / method / guide) is untouched by the upgrade.
  for (const entry of ENTRIES) {
    assert.ok(entry.name && entry.locationName && entry.method, `${entry.slug}: row lost a field`);
    assert.equal(typeof entry.islandNumber, 'number');
  }
});

test('2A/Fishipedia: no second hardcoded creature list (component renders from props)', () => {
  const component = readFileSync(CHECKLIST_COMPONENT, 'utf8');
  // The client island must take its rows from the data-layer adapter...
  assert.match(component, /from '@\/lib\/fishipedia'/, 'component must consume the fishipedia adapter');
  assert.match(component, /groups\.flatMap\(\(g\) => g\.entries\)/, 'entries must come from the passed groups');
  assert.match(component, /group\.entries\.map/, 'rows must be rendered from group entries');
  // ...and must never reach into the raw data layer itself.
  assert.doesNotMatch(component, /from '@\/src\/data\/game'/, 'component must not import the raw data layer');
  assert.doesNotMatch(component, /\bFISH\b|\bBOSSES\b/, 'component must not import FISH/BOSSES');
  // No creature name may be typed into the component.
  for (const name of ['Triggerfish', 'Brown Crab', 'Voxelfish', 'Bowhead Whale', 'Old Pike', 'Goby']) {
    assert.ok(!component.includes(name), `${CHECKLIST_COMPONENT}: hardcoded creature name "${name}"`);
  }
  // The page itself only forwards the data-layer groups.
  const page = readFileSync(FISHIPEDIA_PAGE, 'utf8');
  assert.match(page, /<FishipediaChecklist groups=\{FISHIPEDIA_GROUPS\} total=\{total\} \/>/);
  assert.doesNotMatch(page, /hardcode/i);
});

test('2A/Fishipedia: search filters by name, case-insensitively, and clears', () => {
  const none = { island: 'all', status: 'all', caught: [] };
  const all = progress.filterEntries(ENTRIES, { ...none, query: '' });
  assert.equal(all.length, 49, 'empty query returns the full list');

  const lower = progress.filterEntries(ENTRIES, { ...none, query: 'triggerfish' });
  assert.deepEqual(lower.map((e) => e.slug), ['triggerfish']);

  const upper = progress.filterEntries(ENTRIES, { ...none, query: 'TRIGGERFISH' });
  assert.deepEqual(upper.map((e) => e.slug), ['triggerfish'], 'search must be case-insensitive');

  const mixed = progress.filterEntries(ENTRIES, { ...none, query: '  CrAb  ' });
  assert.ok(mixed.length >= 2, 'trimmed, case-insensitive substring match');
  assert.ok(mixed.every((e) => e.name.toLowerCase().includes('crab')));

  const partial = progress.filterEntries(ENTRIES, { ...none, query: 'fish' });
  assert.ok(partial.length > 1, 'substring match, not exact match');

  const nothing = progress.filterEntries(ENTRIES, { ...none, query: 'zzzz' });
  assert.deepEqual(nothing, []);
});

test('2A/Fishipedia: island filter is derived from the data layer, not hardcoded', () => {
  const islands = progress.islandOptions(GROUPS);
  assert.deepEqual(islands, [1, 2, 3, 4, 5]);
  // Derived: a future island in the data layer shows up without a code change.
  assert.deepEqual(progress.islandOptions([...GROUPS, { islandNumber: 6 }]), [1, 2, 3, 4, 5, 6]);
  // The component must not hardcode the island list either.
  const component = readFileSync(CHECKLIST_COMPONENT, 'utf8');
  assert.match(component, /islandOptions\(groups\)/);
  assert.doesNotMatch(component, /Island 6/, 'island list must not be hardcoded');

  const island2 = progress.filterEntries(ENTRIES, {
    query: '',
    island: 2,
    status: 'all',
    caught: [],
  });
  assert.ok(island2.length > 0);
  assert.ok(island2.every((e) => e.islandNumber === 2));
  assert.equal(
    island2.length,
    ENTRIES.filter((e) => e.islandNumber === 2).length
  );
});

test('2A/Fishipedia: caught / not-caught filter, and combination with search + island', () => {
  const caughtSlugs = ['triggerfish', 'goby'];
  const base = { query: '', island: 'all', caught: caughtSlugs };

  const caughtOnly = progress.filterEntries(ENTRIES, { ...base, status: 'caught' });
  assert.deepEqual(caughtOnly.map((e) => e.slug).sort(), ['goby', 'triggerfish']);

  const notCaught = progress.filterEntries(ENTRIES, { ...base, status: 'not-caught' });
  assert.equal(notCaught.length, 49 - caughtSlugs.length);
  assert.ok(!notCaught.some((e) => caughtSlugs.includes(e.slug)), 'ticked rows must be excluded');

  const allStatus = progress.filterEntries(ENTRIES, { ...base, status: 'all' });
  assert.equal(allStatus.length, 49);

  // The exact brief example: Island 2 + Not caught + "Triggerfish".
  const combined = progress.filterEntries(ENTRIES, {
    query: 'Triggerfish',
    island: 2,
    status: 'not-caught',
    caught: [],
  });
  assert.deepEqual(combined.map((e) => e.slug), ['triggerfish']);

  // Ticking it removes it from that same combined view.
  const afterTick = progress.filterEntries(ENTRIES, {
    query: 'Triggerfish',
    island: 2,
    status: 'not-caught',
    caught: ['triggerfish'],
  });
  assert.deepEqual(afterTick, [], 'all three conditions must AND together');

  // Island mismatch still excludes it.
  const wrongIsland = progress.filterEntries(ENTRIES, {
    query: 'Triggerfish',
    island: 4,
    status: 'all',
    caught: [],
  });
  assert.deepEqual(wrongIsland, []);
});

test('2A/Fishipedia: progress counts are derived, never hardcoded', () => {
  const empty = progress.computeProgress(ENTRIES, progress.EMPTY_PROGRESS);
  assert.deepEqual(empty, { total: 49, caught: 0, drip: 0, remaining: 49 });

  const some = progress.computeProgress(ENTRIES, { caught: ['triggerfish', 'goby'], drip: ['goby'] });
  assert.deepEqual(some, { total: 49, caught: 2, drip: 1, remaining: 47 });

  // Unknown slugs never inflate the counters.
  const stale = progress.computeProgress(ENTRIES, { caught: ['ghost-manta'], drip: [] });
  assert.deepEqual(stale, { total: 49, caught: 0, drip: 0, remaining: 49 });

  // A smaller catalog moves the denominator automatically.
  const single = [entryBySlug('triggerfish')];
  const smaller = progress.computeProgress(single, { caught: ['triggerfish'], drip: [] });
  assert.deepEqual(smaller, { total: 1, caught: 1, drip: 0, remaining: 0 });

  const component = readFileSync(CHECKLIST_COMPONENT, 'utf8');
  assert.match(component, /computeProgress\(allEntries, progress\)/);
  assert.doesNotMatch(component, /\/\s*49\b/, 'total must not be hardcoded in the component');
});

test('2A/Fishipedia: the two collection layers stay separate', () => {
  // The data layer documents two counters, so the tool tracks two layers and
  // never merges them into one "complete" claim.
  assert.match(DRIP_SYSTEM_FACTS.rule, /same lure as their normal version/i);
  const toggled = progress.toggleProgress(progress.EMPTY_PROGRESS, 'caught', 'triggerfish');
  assert.deepEqual(toggled, { caught: ['triggerfish'], drip: [] });
  const dripToggled = progress.toggleProgress(toggled, 'drip', 'triggerfish');
  assert.deepEqual(dripToggled, { caught: ['triggerfish'], drip: ['triggerfish'] });
  assert.deepEqual(progress.toggleProgress(dripToggled, 'caught', 'triggerfish'), {
    caught: [],
    drip: ['triggerfish'],
  });

  const component = readFileSync(CHECKLIST_COMPONENT, 'utf8');
  assert.match(component, /label="Caught"/);
  assert.match(component, /label="Drip"/);
  // Honesty guardrails the brief requires on the page.
  assert.match(component, /saved in this browser only/i);
  assert.match(component, /do not touch your game save/i);
  assert.match(component, /not the in-game Collector or Fishipedia achievement progress/i);
});

test('2A/Fishipedia: localStorage round-trips, restores on reload, and is versioned', () => {
  assert.equal(progress.PROGRESS_STORAGE_KEY, 'howtofish101:fishipedia:progress:v1');
  const storage = fakeStorage();

  const state = { caught: ['triggerfish'], drip: ['goby', 'triggerfish'] };
  assert.equal(progress.writeProgress(storage, state), true);

  const restored = progress.readProgress(storage, ENTRIES.map((e) => e.slug));
  assert.deepEqual(restored.caught, ['triggerfish']);
  assert.deepEqual(restored.drip, ['goby', 'triggerfish']);

  // Serialized payload is explicitly versioned and slug-keyed (no array indices).
  const raw = JSON.parse(storage.getItem(progress.PROGRESS_STORAGE_KEY));
  assert.equal(raw.v, 1);
  assert.deepEqual(raw.caught, ['triggerfish']);
  assert.ok(raw.drip.every((s) => typeof s === 'string'), 'rows are keyed by stable slug');

  // A reload is just another read from the same storage.
  assert.deepEqual(progress.readProgress(storage, ENTRIES.map((e) => e.slug)), restored);
});

test('2A/Fishipedia: corrupt, stale-version, or unknown-id payloads never mis-map', () => {
  const valid = ENTRIES.map((e) => e.slug);

  assert.deepEqual(progress.parseProgress('{not json', valid), { caught: [], drip: [] });
  assert.deepEqual(progress.parseProgress('null', valid), { caught: [], drip: [] });
  assert.deepEqual(progress.parseProgress('[]', valid), { caught: [], drip: [] });
  assert.deepEqual(progress.parseProgress(JSON.stringify({ v: 2, caught: ['triggerfish'] }), valid), {
    caught: [],
    drip: [],
  });
  assert.deepEqual(
    progress.parseProgress(JSON.stringify({ v: 1, caught: 'triggerfish', drip: 5 }), valid),
    { caught: [], drip: [] }
  );
  // A slug removed from the data layer is dropped, not remapped onto a row.
  assert.deepEqual(
    progress.parseProgress(
      JSON.stringify({ v: 1, caught: ['ghost-manta', 'triggerfish', 'triggerfish'], drip: [] }),
      valid
    ),
    { caught: ['triggerfish'], drip: [] }
  );
  // Without a validity list, slugs survive verbatim but counters still ignore them.
  assert.deepEqual(progress.parseProgress(JSON.stringify({ v: 1, caught: ['ghost-manta'] })).caught, [
    'ghost-manta',
  ]);
});

test('2A/Fishipedia: storage being unavailable or throwing never breaks the page', () => {
  assert.deepEqual(progress.readProgress(null), { caught: [], drip: [] });
  assert.equal(progress.writeProgress(null, { caught: ['triggerfish'], drip: [] }), false);
  assert.equal(progress.clearProgress(null), false);

  assert.deepEqual(progress.readProgress(hostileStorage), { caught: [], drip: [] });
  assert.equal(progress.writeProgress(hostileStorage, { caught: [], drip: [] }), false);
  assert.equal(progress.clearProgress(hostileStorage), false);

  // The component resolves storage defensively and never calls localStorage
  // during render (SSR safety).
  const component = readFileSync(CHECKLIST_COMPONENT, 'utf8');
  assert.match(component, /typeof window === 'undefined'/);
  assert.match(component, /try \{[\s\S]*window\.localStorage[\s\S]*\} catch/);
  assert.match(component, /useEffect\(/);
});

test('2A/Fishipedia: Reset clears only this tool key, behind a confirmation', () => {
  const storage = fakeStorage({
    'some-other-site-setting': 'keep me',
    [progress.PROGRESS_STORAGE_KEY]: JSON.stringify({ v: 1, caught: ['triggerfish'], drip: [] }),
  });
  assert.equal(progress.clearProgress(storage), true);
  assert.equal(storage.getItem(progress.PROGRESS_STORAGE_KEY), null);
  assert.equal(storage.getItem('some-other-site-setting'), 'keep me', 'reset must not touch other keys');
  assert.deepEqual(progress.readProgress(storage), { caught: [], drip: [] });

  const component = readFileSync(CHECKLIST_COMPONENT, 'utf8');
  assert.match(component, /clearProgress\(browserStorage\(\)\)/);
  assert.doesNotMatch(component, /localStorage\.clear\(\)/, 'reset must never clear all localStorage');
  // Two-step confirmation before anything is erased.
  assert.match(component, /confirmingReset/);
  assert.match(component, /Yes, reset/);
  assert.match(component, /Cancel/);
});

test('2A/Fishipedia: the initial server HTML still contains all 49 creatures', (t) => {
  const htmlPath = '.next/server/app/guides/fishipedia.html';
  if (!existsSync(htmlPath)) {
    t.skip(`no build output at ${htmlPath} — run npm run build first`);
    return;
  }
  const html = readFileSync(htmlPath, 'utf8');
  for (const entry of ENTRIES) {
    assert.ok(html.includes(entry.name), `${entry.slug}: "${entry.name}" missing from server HTML`);
  }
  // Facts and guide links survive the client-component upgrade.
  const triggerfish = entryBySlug('triggerfish');
  assert.ok(html.includes(triggerfish.method), 'lure/location column missing from server HTML');
  assert.ok(html.includes(TRIGGERFISH_ROUTE), 'Triggerfish guide link missing from server HTML');
  assert.ok(html.includes('Search creatures...'), 'search control must be part of the initial HTML');
  // No creature is hidden by default.
  assert.doesNotMatch(html, /hidden[^"]*"[^>]*>Search creatures/);
});

test('2A/Fishipedia: SEO surface (URL, title, H1, description, canonical, quick answer) is unchanged', () => {
  const page = readFileSync(FISHIPEDIA_PAGE, 'utf8');
  assert.ok(
    page.includes("title: 'How to Complete the Fishipedia — Missing Creature Checklist'"),
    'title changed'
  );
  assert.ok(
    page.includes("alternates: { canonical: 'https://howtofish101.com/guides/fishipedia/' }"),
    'canonical changed'
  );
  assert.ok(
    page.includes('<h1 className="text-3xl font-extrabold text-white">How to Complete the Fishipedia in How to Fish</h1>'),
    'H1 changed'
  );
  assert.ok(
    page.includes(
      "'The Fishipedia achievement (\"find and kill all drip creatures\", 1.4%) spans 49 creatures — 38 regular fish plus 11 boss-class. Full checklist with location and lure for every missing entry, verified for 1.0.12.'"
    ),
    'meta description changed'
  );
  assert.ok(
    page.includes('Quick answer: the Fishipedia achievement asks you to'),
    'quick answer changed'
  );
  assert.ok(page.includes('2026-09-16'), 'verification stamp changed');
  assert.ok(page.includes('1.0.12'), 'game version stamp changed');
  // The page must stay a Server Component (no 'use client' at the top).
  assert.doesNotMatch(page.slice(0, 200), /'use client'/);
  // Interactive bits live in the client island only.
  assert.equal(readFileSync(CHECKLIST_COMPONENT, 'utf8').startsWith("'use client';"), true);
});

test('2A/Fishipedia: filter controls wrap instead of overflowing on narrow screens', () => {
  const component = readFileSync(CHECKLIST_COMPONENT, 'utf8');
  assert.match(component, /w-full bg-ocean-950 border border-ocean-700/, 'search input must be full-width');
  assert.match(component, /flex flex-wrap items-center gap-2/, 'filter chips must wrap');
  assert.match(component, /min-h-\[44px\]/, 'checkbox tap target must stay finger-sized');
  assert.doesNotMatch(component, /overflow-x-auto/, 'the checklist must not need horizontal scrolling');
  assert.match(component, /break-words/, 'creature names must wrap rather than truncate');
});

// =========================================================== Triggerfish

test('2A/Triggerfish: the route exists as a real page', () => {
  assert.ok(existsSync(TRIGGERFISH_PAGE), `${TRIGGERFISH_PAGE} missing`);
});

test('2A/Triggerfish: title, H1 and canonical are self-referential and game-scoped', () => {
  const src = readFileSync(TRIGGERFISH_PAGE, 'utf8');
  assert.match(src, /title: 'How to Catch Triggerfish in How to Fish \(Beginner Lure, Island 2\)'/);
  assert.match(src, /<h1 className="text-3xl font-extrabold text-white">How to Catch Triggerfish in How to Fish<\/h1>/);
  assert.ok(
    src.includes(`canonical: 'https://howtofish101.com${TRIGGERFISH_ROUTE}'`),
    'canonical must be self + apex'
  );
  assert.match(src, /description:\s*'/, 'meta description missing');
  assert.match(src, /1\.0\.12/, 'description must pin the game version');
  // Real-world disambiguation is mandatory for this species.
  assert.match(src, /not a guide to real-world triggerfish/i);
  assert.match(src, /Dazed Games/);
});

test('2A/Triggerfish: every gameplay fact is read from the verified data layer', () => {
  const src = readFileSync(TRIGGERFISH_PAGE, 'utf8');
  assert.match(src, /from '@\/src\/data\/game'/, 'page must import the data layer');
  for (const symbol of [
    'FISH_BY_SLUG',
    'LURE_BY_SLUG',
    'LOCATION_BY_SLUG',
    'DRIP_SYSTEM_FACTS',
    'CURRENT_GAME_VERSION',
  ]) {
    assert.ok(src.includes(symbol), `${symbol} must come from the data layer`);
  }
  assert.match(src, /const triggerfish = FISH_BY_SLUG\['triggerfish'\]/);
  assert.match(src, /locationLabel\(triggerfish\.facts\.locationSlug\)/);
  assert.match(src, /lureNames\(triggerfish\.facts\.lureSlugs\)/);

  // The facts the page renders match the data layer exactly.
  const triggerfish = game.FISH_BY_SLUG['triggerfish'];
  assert.deepEqual(triggerfish.facts.lureSlugs, ['beginner-lure']);
  assert.equal(triggerfish.facts.locationSlug, 'island-2-forest');
  assert.equal(game.LOCATION_BY_SLUG['island-2-forest'].facts.islandNumber, 2);
  assert.equal(game.LURE_BY_SLUG['beginner-lure'].name, 'Beginner Lure');
  assert.equal(triggerfish.provenance.sourceIds.length, 2, 'multi-source provenance required');
  assert.equal(triggerfish.provenance.verifiedAt, '2026-09-16');
  assert.equal(triggerfish.gameVersion, CURRENT_GAME_VERSION);
});

test('2A/Triggerfish: regular vs Drip is stated once, from DRIP_SYSTEM_FACTS, with no invented mechanics', () => {
  const src = readFileSync(TRIGGERFISH_PAGE, 'utf8');
  assert.match(src, /## How to Catch Drip Triggerfish|How to Catch Drip Triggerfish<\/h2>/);
  assert.match(src, /\{DRIP_SYSTEM_FACTS\.rule\}/, 'the drip rule must be quoted from the data layer');
  assert.match(src, /no separate drip bait/i);
  assert.match(src, /does not fill the regular one/i, 'the two layers must be described as separate');

  // No invented drop rate / spawn rate / weather / time / hidden-quest claims.
  const banned = [
    /Volcano Core/,
    /Hot Dog Feast/,
    /Magma Whale/,
    /weather spawn|weather window|rain window|thunderstorm|day\/night|night-only/,
    /Titanium Harpoon/,
    /Ghost Manta/,
    /Kraken Spawn/,
    /Striped Bass|Electric Eel|Golden Tuna|Volcanic Magma/,
    /\b\d+\s*%\s*(drop|spawn|chance|catch)/i,
    /(drop|spawn|catch)\s+(rate|chance)\s*(of|is|:)?\s*\d/i,
    /hidden quest/i,
    /guaranteed (catch|drip)/i,
  ];
  for (const re of banned) {
    assert.doesNotMatch(src, re, `${TRIGGERFISH_PAGE}: banned claim ${re} resurfaced`);
  }
  // "pity" may only ever appear inside an explicit denial.
  for (const match of src.matchAll(/pity/gi)) {
    const before = src.slice(Math.max(0, match.index - 240), match.index).toLowerCase();
    assert.match(
      before,
      /\b(no|not|never|without|nothing)\b/,
      `${TRIGGERFISH_PAGE}: "pity" mentioned outside a denial`
    );
  }
  // And it must say so out loud rather than staying silent.
  assert.match(src, /Not documented:/);
  assert.match(src, /no source in the data layer carries a\s+Drip-Triggerfish-specific catch report/i);
});

test('2A/Triggerfish: provenance block is derived, complete, and version-pinned', () => {
  const src = readFileSync(TRIGGERFISH_PAGE, 'utf8');
  assert.match(src, /sourcesFor\(\[triggerfish, beginnerLure\]\)/);
  assert.match(src, /<Sources/);
  assert.match(src, /retrieved \$\{s\.retrievedAt \?\? '—'\}/);
  assert.match(src, /Last verified \{verifiedAt\} · Game version \{CURRENT_GAME_VERSION\}/);
  // The sell-value source is cited too, since the page prints the value.
  assert.match(src, /sellValueSourceId/);
  assert.match(src, /SOURCE_BY_ID\[sellValueSourceId\]/);

  const sources = graph.sourcesFor([game.FISH_BY_SLUG['triggerfish'], game.LURE_BY_SLUG['beginner-lure']]);
  const ids = sources.map((s) => s.id);
  assert.deepEqual(ids, ['g2a-island-guide', 'mobalytics-fish-list']);
  for (const s of sources) assert.ok(game.SOURCE_BY_ID[s.id], `unregistered source ${s.id}`);
  assert.equal(game.FISH_BY_SLUG['triggerfish'].facts.sellValueSourceId, 'ign-all-fish');
  assert.ok(game.SOURCE_BY_ID['ign-all-fish'], 'IGN sell-value source must be registered');
});

test('2A/Triggerfish: Fishipedia now links the Triggerfish row to the new page', () => {
  assert.equal(graph.GUIDE_ROUTES['triggerfish'], TRIGGERFISH_ROUTE);
  assert.equal(entryBySlug('triggerfish').guideHref, TRIGGERFISH_ROUTE);
  assert.equal(
    ENTRIES.filter((e) => e.guideHref === null).length,
    49 - Object.keys(graph.GUIDE_ROUTES).length,
    'guide links must resolve from GUIDE_ROUTES only'
  );
});

test('2A/Triggerfish: sitemap carries the new URL on the apex host', () => {
  const src = readFileSync('app/sitemap.ts', 'utf8');
  assert.ok(src.includes(`'${TRIGGERFISH_ROUTE}'`), `sitemap missing ${TRIGGERFISH_ROUTE}`);
  assert.doesNotMatch(src, /www\./);
  assert.match(src, /UPDATED_2026_09_21\.has/);
});

test('2A/Triggerfish: inbound internal links exist on the semantically related pages', () => {
  const inbound = [
    'app/fish/page.tsx',
    'app/fish/drip-fish/page.tsx',
    'app/lures/page.tsx',
    'app/islands/page.tsx',
  ];
  for (const file of inbound) {
    const src = readFileSync(file, 'utf8');
    assert.ok(src.includes(TRIGGERFISH_ROUTE), `${file} must link to ${TRIGGERFISH_ROUTE}`);
  }
  // The new page links back out to the hubs it belongs to.
  const src = readFileSync(TRIGGERFISH_PAGE, 'utf8');
  for (const route of [
    '/fish/',
    '/lures/',
    '/fish/drip-fish/',
    '/guides/fishipedia/',
    '/islands/',
    '/bosses/old-pike/',
    '/troubleshooting/fish-not-biting/',
  ]) {
    assert.ok(src.includes(`href="${route}"`), `${TRIGGERFISH_PAGE} must link to ${route}`);
  }
  // No footer-wide or duplicated link spam.
  assert.ok(!readFileSync('components/Footer.tsx', 'utf8').includes(TRIGGERFISH_ROUTE));
});

test('2A/Triggerfish: the page answers the target queries in the first screen', () => {
  const src = readFileSync(TRIGGERFISH_PAGE, 'utf8');
  const quickAnswer = src.slice(src.indexOf('Quick answer:'), src.indexOf('Where to Find Triggerfish'));
  assert.ok(quickAnswer.length > 0, 'quick answer block missing');
  for (const field of ['Location:', 'Required lure:', 'Progression:', 'Drip Triggerfish:', 'Game version:']) {
    assert.ok(quickAnswer.includes(field), `first screen missing "${field}"`);
  }
  // The exact-intent phrasings the brief targets.
  assert.match(src, /How to Catch Triggerfish in How to Fish/);
  assert.match(src, /How to Catch Drip Triggerfish/);
  assert.match(src, /Why Triggerfish Is Not Appearing/);
});

// ------------------------------------------------------------ scope guard

test('2A/scope: exactly one new SEO page shipped this batch', () => {
  const forbidden = [
    'app/fish/goby/page.tsx',
    'app/fish/goldfish/page.tsx',
    'app/fish/perch/page.tsx',
    'app/fish/bluegill/page.tsx',
    'app/bosses/goblin-shark/page.tsx',
    'app/bosses/tuna/page.tsx',
    'app/fish/bucket/page.tsx',
    'app/items/fish-bucket/page.tsx',
  ];
  for (const file of forbidden) {
    assert.equal(existsSync(file), false, `${file} is out of scope for Batch 2A`);
  }
  // Old Pike / Bowhead SEO copy is untouched by this batch.
  const oldPike = readFileSync('app/bosses/old-pike/page.tsx', 'utf8');
  assert.ok(oldPike.includes("title: 'How to Catch the Old Pike in How to Fish'"));
  assert.ok(oldPike.includes("canonical: 'https://howtofish101.com/bosses/old-pike/'"));
  const bowhead = readFileSync('app/bosses/bowhead-whale/page.tsx', 'utf8');
  assert.ok(bowhead.includes("canonical: 'https://howtofish101.com/bosses/bowhead-whale/'"));
});
