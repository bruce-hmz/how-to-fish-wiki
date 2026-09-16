/**
 * Gameplay data integrity tests.
 * Run: npm test  (node --test, powered by jiti for TS imports)
 *
 * Enforces the audit rules from docs/GAMEPLAY_FACT_AUDIT.md:
 *  - entity integrity (no fabricated entities in the rendered layer)
 *  - provenance integrity (every entity cites real sources)
 *  - relation integrity (fish→location/lure refs must resolve)
 *  - duplicate-entity protection
 *  - version integrity (no entity newer than the current game version)
 */
import test from 'node:test';
import assert from 'node:assert/strict';
import jitiPkg from 'jiti';

const createJiti = jitiPkg.createJiti ?? jitiPkg.default ?? jitiPkg;
const jiti = createJiti(import.meta.url, {
  alias: { '@': new URL('..', import.meta.url).pathname },
});
const game = jiti('../src/data/game/index.ts');
const lib = jiti('../lib/data.ts');

const {
  ALL_ENTITIES,
  ENTITY_BY_SLUG,
  SOURCES,
  SOURCE_BY_ID,
  FISH,
  BOSSES,
  LURES,
  LOCATIONS,
  NPCS,
  QUESTS,
  ACHIEVEMENTS,
  CURRENT_GAME_VERSION,
  VERSION_HISTORY,
  DRIP_SYSTEM_FACTS,
} = game;

const { FISH_DATABASE, BOSSES_DATABASE, LURE_DATABASE } = lib;

const VERSIONS = new Set(VERSION_HISTORY.map((v) => v.version));
const LOCATION_SLUGS = new Set(LOCATIONS.map((l) => l.slug));
const LURE_SLUGS = new Set(LURES.map((l) => l.slug));
const SOURCE_IDS = new Set(SOURCES.map((s) => s.id));

// ---- provenance integrity ----

test('every entity carries provenance that cites registered sources', () => {
  assert.ok(ALL_ENTITIES.length >= 80, `expected a full catalog, got ${ALL_ENTITIES.length}`);
  for (const e of ALL_ENTITIES) {
    assert.ok(e.provenance, `${e.slug}: missing provenance`);
    assert.ok(
      ['OFFICIAL', 'GAME_DATA', 'COMMUNITY_VERIFIED', 'UNVERIFIED'].includes(e.provenance.sourceType),
      `${e.slug}: bad sourceType ${e.provenance.sourceType}`
    );
    assert.notEqual(e.provenance.sourceType, 'FALSE', `${e.slug}: FALSE entity must not ship`);
    assert.ok(e.provenance.sourceIds.length >= 1, `${e.slug}: no source ids`);
    for (const id of e.provenance.sourceIds) {
      assert.ok(SOURCE_IDS.has(id), `${e.slug}: unknown source id ${id}`);
    }
    assert.match(e.provenance.verifiedAt, /^\d{4}-\d{2}-\d{2}$/, `${e.slug}: bad verifiedAt`);
    assert.ok(['high', 'medium', 'low'].includes(e.provenance.confidence), `${e.slug}: bad confidence`);
  }
});

test('COMMUNITY_VERIFIED entities cite at least two sources', () => {
  for (const e of ALL_ENTITIES) {
    if (e.provenance.sourceType === 'COMMUNITY_VERIFIED') {
      assert.ok(
        e.provenance.sourceIds.length >= 2 || /conflict|disputed|single/i.test(e.provenance.note ?? ''),
        `${e.slug}: COMMUNITY_VERIFIED with a single source and no dispute note`
      );
    }
  }
});

test('low-confidence facts are never rendered as certain (none ship as entities)', () => {
  for (const e of ALL_ENTITIES) {
    assert.notEqual(e.provenance.confidence, 'low', `${e.slug}: low-confidence entity in production data`);
  }
});

// ---- relation integrity ----

test('every fish resolves to a real location and real lures', () => {
  for (const f of FISH) {
    assert.ok(LOCATION_SLUGS.has(f.facts.locationSlug), `${f.slug}: unknown location ${f.facts.locationSlug}`);
    assert.ok(f.facts.lureSlugs.length >= 1, `${f.slug}: no lure`);
    for (const l of f.facts.lureSlugs) {
      assert.ok(LURE_SLUGS.has(l), `${f.slug}: unknown lure ${l}`);
    }
  }
});

test('every boss and NPC resolves to a real location', () => {
  for (const b of BOSSES) {
    assert.ok(LOCATION_SLUGS.has(b.facts.locationSlug), `${b.slug}: unknown location`);
  }
  for (const n of NPCS) {
    if (n.facts.locationSlug) {
      assert.ok(LOCATION_SLUGS.has(n.facts.locationSlug), `${n.slug}: unknown location`);
    }
  }
});

test('documented sell values always name their source', () => {
  for (const f of FISH) {
    if (f.facts.sellValueUsd !== undefined) {
      assert.ok(f.facts.sellValueUsd > 0, `${f.slug}: non-positive sell value`);
      assert.ok(
        SOURCE_IDS.has(f.facts.sellValueSourceId),
        `${f.slug}: sell value without a valid source`
      );
    }
  }
});

// ---- duplicate entity protection ----

test('slugs are unique', () => {
  const seen = new Set();
  for (const e of ALL_ENTITIES) {
    assert.ok(!seen.has(e.slug), `duplicate slug ${e.slug}`);
    seen.add(e.slug);
  }
});

test('normalized names are unique (no Trigger Fish / Triggerfish style dupes)', () => {
  const norm = (s) => s.toLowerCase().replace(/[\s_-]+/g, '');
  const seen = new Map();
  for (const e of ALL_ENTITIES) {
    const n = norm(e.name);
    assert.ok(!seen.has(n), `duplicate normalized name: ${e.name} vs ${seen.get(n)}`);
    seen.set(n, e.name);
  }
});

test('aliases do not shadow other entity names of the same type', () => {
  const norm = (s) => s.toLowerCase().replace(/[\s_-]+/g, '');
  const namesByType = new Map();
  for (const e of ALL_ENTITIES) {
    if (!namesByType.has(e.entityType)) namesByType.set(e.entityType, new Set());
    namesByType.get(e.entityType).add(norm(e.name));
  }
  for (const e of ALL_ENTITIES) {
    for (const a of e.aliases ?? []) {
      assert.ok(
        !namesByType.get(e.entityType).has(norm(a)),
        `alias "${a}" of ${e.slug} collides with a same-type entity name`
      );
    }
  }
});

// ---- version integrity ----

test('every entity is pinned to a known game version <= current', () => {
  for (const e of ALL_ENTITIES) {
    assert.ok(VERSIONS.has(e.gameVersion), `${e.slug}: unknown gameVersion ${e.gameVersion}`);
    assert.ok(
      e.gameVersion <= CURRENT_GAME_VERSION,
      `${e.slug}: version ${e.gameVersion} newer than dataset current ${CURRENT_GAME_VERSION}`
    );
  }
});

// ---- catalog integrity ----

test('catalog matches the community total: 38 fish + 11 boss-class = 49 creatures', () => {
  assert.equal(FISH.length, 38);
  assert.equal(BOSSES.length, 11);
  assert.equal(FISH.length + BOSSES.length, DRIP_SYSTEM_FACTS.totalCatalogSize);
});

test('audit-removed fabricated entities stay removed', () => {
  const fabricated = [
    'ghost-manta', 'kraken-spawn', 'golden-tuna', 'striped-bass', 'electric-eel', 'drip-fish',
  ];
  for (const slug of fabricated) {
    assert.ok(!ENTITY_BY_SLUG[slug], `fabricated entity ${slug} resurfaced`);
  }
  const names = new Set(ALL_ENTITIES.map((e) => e.name.toLowerCase()));
  for (const n of ['ghost manta', 'kraken spawn', 'golden tuna', 'striped bass', 'electric eel']) {
    assert.ok(!names.has(n), `fabricated name "${n}" resurfaced`);
  }
});

test('verified structure anchors exist (carrot summon, mutated bowhead, goblin shark, dripper, goby)', () => {
  for (const slug of ['mutated-bowhead-whale', 'goblin-shark', 'bowhead-whale', 'tuna', 'old-pike', 'blue-shark', 'sunfish']) {
    assert.ok(ENTITY_BY_SLUG[slug], `missing verified boss ${slug}`);
  }
  for (const slug of ['dripper', 'goby', 'bowlfish']) {
    assert.ok(ENTITY_BY_SLUG[slug], `missing verified fish ${slug}`);
  }
  const carrot = LURES.find((l) => l.slug === 'carrot');
  assert.ok(carrot, 'carrot quest bait missing');
  const feast = LURES.find((l) => /feast|volcano core/i.test(l.name));
  assert.ok(!feast, 'fabricated summon item still present in lure data');
});

// ---- page-rendering adapters ----

test('rendered databases derive cleanly from the data layer', () => {
  assert.equal(FISH_DATABASE.length, FISH.length);
  assert.equal(BOSSES_DATABASE.length, BOSSES.length);
  for (const row of FISH_DATABASE) {
    assert.ok(row.island && row.bait, `${row.id}: adapter produced empty island/bait`);
    if (row.value > 0) assert.ok(row.valueDocumented);
  }
  for (const row of LURE_DATABASE) {
    if (row.price !== undefined) assert.ok(row.price >= 0);
  }
});

test('final-boss URL alias maps back to the corrected entity', () => {
  const alias = game.BOSS_URL_ALIASES['magma-whale'];
  assert.equal(alias, 'mutated-bowhead-whale');
  assert.ok(ENTITY_BY_SLUG[alias]);
});

// ---- achievements ----

test('achievements keep official Steam shape and rates', () => {
  assert.equal(ACHIEVEMENTS.length, 28);
  for (const a of ACHIEVEMENTS) {
    assert.ok(a.facts.description.length > 5, `${a.slug}: empty description`);
    assert.ok(a.facts.globalPercent >= 0 && a.facts.globalPercent <= 100, `${a.slug}: bad unlock rate`);
  }
});
