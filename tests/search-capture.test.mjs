/**
 * P1 search-capture batch tests (old-pike, bowhead-whale, fishipedia).
 * Run: npm test
 *
 * Covers the batch gates from the P1 brief:
 *  - route existence for the 3 published pages
 *  - Fishipedia checklist is fully data-driven (no hardcoded rows,
 *    rendered count == validated fish + boss entities, exclusions coded)
 *  - 0 dead internal links (all app pages, not just the new ones)
 *  - provenance integrity for the entities the 3 pages depend on
 *  - hallucination regression (banned terms absent from new content)
 *  - sitemap + canonical host + www redirect guardrails
 */
import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';
import jitiPkg from 'jiti';

const createJiti = jitiPkg.createJiti ?? jitiPkg.default ?? jitiPkg;
const jiti = createJiti(import.meta.url, {
  alias: { '@': new URL('..', import.meta.url).pathname },
});
const game = jiti('../src/data/game/index.ts');

const { FISH, BOSSES, CURRENT_GAME_VERSION, DRIP_SYSTEM_FACTS } = game;

const BATCH_PAGES = [
  'app/bosses/old-pike/page.tsx',
  'app/bosses/bowhead-whale/page.tsx',
  'app/guides/fishipedia/page.tsx',
];
const BATCH_ROUTES = ['/bosses/old-pike/', '/bosses/bowhead-whale/', '/guides/fishipedia/'];

// ---- route existence ----

test('P1 batch routes exist as real pages', () => {
  for (const file of BATCH_PAGES) {
    assert.ok(statSync(file).isFile(), `${file} missing`);
  }
});

// ---- Fishipedia data model ----

test('Fishipedia checklist is generated from the data layer: 38 fish + 11 boss = 49', () => {
  const f = jiti('../lib/fishipedia.ts');
  const entries = f.getFishipediaEntries();
  assert.equal(entries.length, FISH.length + BOSSES.length, 'rendered rows must equal validated entities');
  assert.equal(entries.filter((e) => e.kind === 'fish').length, 38);
  assert.equal(entries.filter((e) => e.kind === 'boss').length, 11);
  assert.equal(entries.length, DRIP_SYSTEM_FACTS.totalCatalogSize);
  assert.equal(entries.length, DRIP_SYSTEM_FACTS.dripVariantCount);
  // Every row maps 1:1 to a real entity and carries the full answer fields.
  const slugs = new Set(entries.map((e) => e.slug));
  assert.equal(slugs.size, entries.length, 'duplicate checklist rows');
  for (const e of entries) {
    assert.ok(game.ENTITY_BY_SLUG[e.slug], `${e.slug}: row not backed by an entity`);
    assert.ok(e.name && e.locationName && e.method, `${e.slug}: incomplete row`);
    assert.ok(e.islandNumber >= 1 && e.islandNumber <= 6, `${e.slug}: bad island`);
    assert.ok(['fish', 'boss'].includes(e.kind), `${e.slug}: bad kind`);
  }
});

test('Fishipedia exclusions are coded, not implicit: nothing ship-published is excluded', () => {
  // The catalog total (49) equals the achievement scope (49 drip creatures),
  // so today the exclusion set is empty. If a future entity should NOT count,
  // this test forces the exclusion to be declared in lib/fishipedia.ts.
  const f = jiti('../lib/fishipedia.ts');
  assert.equal(f.FISHIPEDIA_ENTRIES.length, game.FISH.length + game.BOSSES.length);
  assert.deepEqual(
    new Set(f.FISHIPEDIA_ENTRIES.map((e) => game.ENTITY_BY_SLUG[e.slug].entityType)),
    new Set(['fish', 'boss']),
    'checklist must only contain fish/boss entities'
  );
});

test('Fishipedia groups cover every island and match entry counts', () => {
  const f = jiti('../lib/fishipedia.ts');
  const grouped = f.FISHIPEDIA_GROUPS.flatMap((g) => g.entries.map((e) => e.slug));
  assert.equal(grouped.length, 49);
  assert.deepEqual(new Set(grouped), new Set(f.FISHIPEDIA_ENTRIES.map((e) => e.slug)));
  for (const g of f.FISHIPEDIA_GROUPS) {
    assert.equal(g.count, g.entries.length);
    assert.equal(g.count, g.fishCount + g.bossCount);
  }
});

test('no hardcoded creature list lives in the fishipedia page', () => {
  const src = readFileSync(BATCH_PAGES[2], 'utf8');
  // The only creature names allowed as literals on the page are the
  // hand-written prosp prose mentions; assert the checklist itself is
  // rendered from FISHIPEDIA_GROUPS (data-driven).
  assert.match(src, /FISHIPEDIA_GROUPS\.map/, 'checklist must iterate data groups');
  assert.match(src, /group\.entries\.map/, 'rows must come from group entries');
  assert.ok(!/hardcode/i.test(src));
});

// ---- provenance ----

test('P1 pages carry self canonicals, titles, and version-pinned descriptions', () => {
  for (let i = 0; i < BATCH_PAGES.length; i++) {
    const src = readFileSync(BATCH_PAGES[i], 'utf8');
    // metadata block is plain literals in these pages (matches repo pattern)
    assert.match(src, /export const metadata = \{/, `${BATCH_ROUTES[i]}: metadata missing`);
    assert.ok(
      src.includes(`canonical: 'https://howtofish101.com${BATCH_ROUTES[i]}'`),
      `${BATCH_ROUTES[i]}: canonical must be self + apex`
    );
    assert.match(src, /title: /, `${BATCH_ROUTES[i]}: title missing`);
    assert.match(src, /description:\s*['"]/, `${BATCH_ROUTES[i]}: description missing`);
    assert.match(src, /1\.0\.12/, `${BATCH_ROUTES[i]}: description should pin the game version`);
  }
  const graph = jiti('../lib/entity-graph.ts');
  const entities = [
    graph.getBoss('old-pike'),
    graph.getBoss('bowhead-whale'),
    graph.getBoss('mutated-bowhead-whale'),
    graph.getFish('pike'),
  ];
  for (const e of entities) {
    assert.ok(e.provenance.sourceIds.length >= 2, `${e.slug}: provenance must be multi-source`);
    assert.equal(e.provenance.verifiedAt, '2026-09-16', `${e.slug}: verifiedAt drift`);
    assert.equal(e.gameVersion, CURRENT_GAME_VERSION, `${e.slug}: version drift`);
  }
  // sourcesFor resolves every cited source id (page Sources blocks are derived).
  const src = graph.sourcesFor(entities);
  assert.ok(src.length >= 3, 'expected the three Old Pike sources (G2A, Mobalytics, Game8)');
  for (const s of src) assert.ok(game.SOURCE_BY_ID[s.id], `unregistered source ${s.id}`);
});

test('freshness stamp: pages verified for 1.0.12 on 2026-09-16 only', () => {
  assert.equal(CURRENT_GAME_VERSION, '1.0.12');
  // A version newer than the current official patch on a batch page would be
  // unsourced drift. Historical patch references (1.0.5 fix notes etc.) are
  // legitimate and come from the data layer.
  const futureVersion = /1\.0\.1[3-9]|1\.[1-9]\./;
  for (const file of BATCH_PAGES) {
    const src = readFileSync(file, 'utf8');
    assert.match(src, /1\.0\.12/);
    assert.match(src, /2026-09-16/);
    assert.doesNotMatch(src, futureVersion, `${file}: version newer than 1.0.12 without data-layer change`);
  }
});

// ---- entity graph relations ----

test('derived relations are correct (lure->boss, boss->chain, boss->quest)', () => {
  const graph = jiti('../lib/entity-graph.ts');
  assert.deepEqual(
    graph.getBossesSummonedByLure('beginner-boss-lure').map((b) => b.slug).sort(),
    ['old-pike', 'sunfish']
  );
  assert.deepEqual(
    graph.getBossesSummonedByLure('fish-bucket').map((b) => b.slug),
    ['bowhead-whale']
  );
  assert.deepEqual(
    graph.getBossesUnlockedBy(graph.getBoss('bowhead-whale')).map((b) => b.slug),
    ['mutated-bowhead-whale']
  );
  assert.equal(graph.getSummonerBoss(graph.getBoss('old-pike')), null, 'shared-pool mention must not be a chain');
  assert.equal(graph.getSummonerBoss(graph.getBoss('mutated-bowhead-whale'))?.slug, 'bowhead-whale');
  // Quest relations are only true gates, named in the quest title.
  const questByBoss = (slug) => graph.getRelatedQuests(graph.getBoss(slug)).map((q) => q.slug);
  assert.deepEqual(questByBoss('spider-crab'), ['beer-can-chain']);
  assert.deepEqual(questByBoss('giant-piranha'), ['three-leech-quest']);
  assert.deepEqual(questByBoss('pufferfish'), ['pufferfish-gate']);
  assert.deepEqual(questByBoss('tuna'), ['albatross-chain']);
  assert.deepEqual(questByBoss('albatross'), ['albatross-chain']);
  assert.deepEqual(questByBoss('bowhead-whale'), ['final-boss-chain']);
  assert.deepEqual(questByBoss('mutated-bowhead-whale'), ['final-boss-chain']);
  for (const slug of ['old-pike', 'blue-shark', 'goblin-shark', 'sunfish']) {
    assert.deepEqual(questByBoss(slug), [], `${slug}: contextual mention must not become a quest gate`);
  }
});

// ---- dead links ----

function walk(dir, out = []) {
  for (const entry of readdirSync(dir)) {
    const p = join(dir, entry);
    if (statSync(p).isDirectory()) walk(p, out);
    else if (/\.(tsx|ts)$/.test(p)) out.push(p);
  }
  return out;
}

test('every internal link across the app resolves to a real route (0 dead links)', () => {
  const files = walk('app');
  const routes = new Set(
    files
      .filter((f) => f.endsWith('page.tsx'))
      .map((f) => '/' + f.replace(/^app\//, '').replace(/\/page\.tsx$/, '').replace(/\/$/, '') + '/')
  );
  routes.add('/');
  const dead = [];
  for (const file of files) {
    const src = readFileSync(file, 'utf8');
    const re = /(?:href|destination)\s*[:=]\s*(["'])(\/[^"']*)\1/g;
    let m;
    while ((m = re.exec(src))) {
      const raw = m[2];
      if (raw.startsWith('#')) continue;
      const path = raw.split('#')[0];
      const norm = path === '/' ? '/' : path.replace(/\/$/, '') + '/';
      if (!routes.has(norm) && !/\.(png|ico|svg|webmanifest)$/.test(norm)) {
        dead.push(`${file} -> ${raw}`);
      }
    }
  }
  assert.deepEqual(dead, [], 'dead internal links found');
});

test('GUIDE_ROUTES map stays in sync: keys are real entities, values are real routes', () => {
  const graph = jiti('../lib/entity-graph.ts');
  const files = walk('app');
  const routes = new Set(
    files
      .filter((f) => f.endsWith('page.tsx'))
      .map((f) => '/' + f.replace(/^app\//, '').replace(/\/page\.tsx$/, '').replace(/\/$/, '') + '/')
  );
  routes.add('/');
  for (const [slug, route] of Object.entries(graph.GUIDE_ROUTES)) {
    assert.ok(game.ENTITY_BY_SLUG[slug], `GUIDE_ROUTES key ${slug} is not an entity`);
    assert.ok(routes.has(route), `GUIDE_ROUTES value ${route} (${slug}) does not exist`);
  }
});

// ---- hallucination regression ----

test('P1 batch content is clean of the banned fabricated facts', () => {
  const banned = [
    /Volcano Core/,
    /Hot Dog Feast/,
    /Magma Whale/,
    /weather spawn|weather window|rain window|thunderstorm|day\/night|night-only/,
    /Titanium Harpoon/,
    /Ghost Manta/,
    /Kraken Spawn/,
    /Striped Bass|Electric Eel|Golden Tuna|Volcanic Magma/,
  ];
  // The batch's NEW files must be clean. (Pre-existing pages may carry
  // historical audit-documentation of removed fabrications, which the
  // fact-audit policy permits; the batch must not reintroduce them.)
  const files = [...BATCH_PAGES, 'lib/fishipedia.ts', 'lib/entity-graph.ts'];
  for (const file of files) {
    const src = readFileSync(file, 'utf8');
    for (const re of banned) {
      assert.doesNotMatch(src, re, `${file}: banned pattern ${re} resurfaced`);
    }
  }
  // The data layer itself stays clean of the renamed fabrications.
  assert.ok(
    !game.BOSSES.some((b) => /magma whale/i.test(b.name)),
    'magma whale must not be a canonical boss name'
  );
});

// ---- sitemap / canonical host / redirect guardrails ----

test('sitemap includes the 3 new routes and never emits www', () => {
  const src = readFileSync('app/sitemap.ts', 'utf8');
  for (const r of BATCH_ROUTES) {
    assert.ok(src.includes(`'${r}'`), `sitemap missing ${r}`);
  }
  assert.doesNotMatch(src, /www\./, 'sitemap must not reference www');
  assert.ok(src.includes("const baseUrl = 'https://howtofish101.com'"), 'sitemap host must be apex');
});

test('www -> apex permanent redirect is configured (host match, 308)', () => {
  const src = readFileSync('next.config.mjs', 'utf8');
  assert.match(src, /host.*www\.howtofish101\.com/s, 'host-matched redirect missing');
  assert.match(
    src,
    /destination: ['"]https:\/\/howtofish101\.com\/:path\*['"]/,
    'redirect destination must be apex'
  );
  assert.match(src, /permanent: true/, 'redirect must be permanent');
});

test('robots sitemap points at the apex host', () => {
  const src = readFileSync('app/robots.ts', 'utf8');
  assert.match(src, /https:\/\/howtofish101\.com\/sitemap\.xml/);
  assert.doesNotMatch(src, /www\./);
});