/**
 * P1.1 tests — drip-count fact review + 768px navbar overflow fix.
 * Run: npm test
 *
 * The drip review found that the site was asserting a DISPUTED mechanic as
 * certain fact. These tests lock in the corrected state, so the unverified
 * claim cannot quietly come back:
 *
 *  - DRIP_SYSTEM_FACTS marks the Drip SET size as SINGLE_SOURCE and boss-class
 *    Drip independence as DISPUTED, with the conflicting evidence recorded
 *  - no page presents "49 independent Drip states" or "every creature has a
 *    Drip variant" as settled
 *  - the Fishipedia page renders the confirmed / single-source / disputed
 *    breakdown, and its checklist features are untouched
 *  - the achievement rates in the data layer match the official 2026-09-21
 *    Steam fetch, and no page still prints the superseded 2026-08-26 numbers
 *  - the navbar only shows the desktop link row where it actually fits, and
 *    nothing masks the overflow with `overflow-x: hidden`
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

const { DRIP_SYSTEM_FACTS, ACHIEVEMENT_BY_SLUG, SOURCE_BY_ID } = game;
const TOTALS = fishipedia.FISHIPEDIA_TOTALS;

const FISHIPEDIA_PAGE = 'app/guides/fishipedia/page.tsx';
const CHECKLIST_COMPONENT = 'components/FishipediaChecklist.tsx';
const DRIP_PAGE = 'app/fish/drip-fish/page.tsx';
const TRIGGERFISH_PAGE = 'app/fish/triggerfish/page.tsx';
const ACHIEVEMENTS_PAGE = 'app/achievements/page.tsx';
const RARE_VARIANTS_PAGE = 'app/creatures/rare-variants/page.tsx';
const NAVBAR = 'components/Navbar.tsx';
const LAYOUT = 'app/layout.tsx';

/** Pages whose prose talks about the Drip layer. */
const DRIP_PROSE_PAGES = [
  FISHIPEDIA_PAGE,
  CHECKLIST_COMPONENT,
  DRIP_PAGE,
  TRIGGERFISH_PAGE,
  ACHIEVEMENTS_PAGE,
  RARE_VARIANTS_PAGE,
];

// ================================================== drip-count evidence state

test('P1.1/Drip: the catalog size stays verified, the Drip set size does not', () => {
  assert.equal(DRIP_SYSTEM_FACTS.totalCatalogSize, 49);
  assert.equal(game.FISH.length + game.BOSSES.length, DRIP_SYSTEM_FACTS.totalCatalogSize);
  // The Drip set is a community catalog figure, not game data.
  assert.equal(DRIP_SYSTEM_FACTS.catalogDripEntryCountStatus, 'SINGLE_SOURCE');
  assert.equal(DRIP_SYSTEM_FACTS.catalogDripEntryCount, 49);
  // The old name implied a verified count of independently obtainable states.
  assert.equal(
    Object.prototype.hasOwnProperty.call(DRIP_SYSTEM_FACTS, 'dripVariantCount'),
    false,
    'dripVariantCount must stay removed — it read as a verified count'
  );
});

test('P1.1/Drip: boss-class Drip independence is recorded as DISPUTED, with both sides', () => {
  assert.equal(DRIP_SYSTEM_FACTS.bossDripStatus, 'DISPUTED');
  const note = DRIP_SYSTEM_FACTS.bossDripNote;
  // Both conflicting positions must be present, and neither may be stated as fact.
  assert.match(note, /bosses count as both regular and Drip variants/i, 'Game8 position missing');
  assert.match(note, /rainbow from their base forms/i, 'player observation missing');
  assert.match(note, /500\+ crabs|500 crabs/i, 'counter-report missing');
  assert.match(note, /conflict/i, 'note must say the sources conflict');
  assert.match(note, /does not claim either outcome/i, 'note must refuse to pick a side');
});

test('P1.1/Drip: confidence dropped from high, and every claim names its evidence', () => {
  assert.notEqual(
    DRIP_SYSTEM_FACTS.provenance.confidence,
    'high',
    'a single-source + disputed fact set must not ship as high confidence'
  );
  assert.equal(DRIP_SYSTEM_FACTS.provenance.verifiedAt, '2026-09-21');
  for (const id of DRIP_SYSTEM_FACTS.provenance.sourceIds) {
    assert.ok(SOURCE_BY_ID[id], `unregistered drip source ${id}`);
  }
  // The sources the review actually used must be registered.
  for (const id of ['game8-drip-guide', 'steam-drip-boss-thread', 'grindnstrat-achievements']) {
    assert.ok(SOURCE_BY_ID[id], `missing evidence source ${id}`);
  }
  // The note must spell out which part is single-source and which is disputed.
  assert.match(DRIP_SYSTEM_FACTS.provenance.note, /SINGLE-SOURCE/i);
  assert.match(DRIP_SYSTEM_FACTS.provenance.note, /DISPUTED/i);
});

test('P1.1/Drip: only the multi-source half of the old rule survives', () => {
  // Confirmed by Game8 + Mobalytics + GrindNStrat + the Steam threads.
  assert.match(DRIP_SYSTEM_FACTS.rule, /same rod or lure as their normal version/i);
  assert.match(DRIP_SYSTEM_FACTS.rule, /no separate drip lure/i);
  assert.doesNotMatch(
    DRIP_SYSTEM_FACTS.rule,
    /every creature has a drip variant/i,
    'the "every creature" universal is the disputed part'
  );
  assert.match(DRIP_SYSTEM_FACTS.rng, /RNG-based/i);
  // The two counters are described as separate, which is the official position.
  assert.match(DRIP_SYSTEM_FACTS.trackedBy, /separate counter from Collector/i);
});

test('P1.1/Drip: no page asserts 49 independent Drip states as settled fact', () => {
  const banned = [
    /every creature has a drip variant/i,
    /every one of them has a drip variant/i,
    /all 49 regular and 49 drip/i,
    /49 drip entries must each be filled/i,
    /\b49 drip creatures\b(?!.{0,120}(community|single|not official|figure))/i,
    /must be caught twice/i,
  ];
  for (const file of DRIP_PROSE_PAGES) {
    const src = readFileSync(file, 'utf8');
    for (const re of banned) {
      assert.doesNotMatch(src, re, `${file}: unverified drip claim resurfaced (${re})`);
    }
  }
});

test('P1.1/Drip: every page that renders the Drip set also renders its status', () => {
  // Fishipedia renders all three evidence tiers.
  const page = readFileSync(FISHIPEDIA_PAGE, 'utf8');
  assert.match(page, /What Is Confirmed About Drip Variants/, 'evidence section missing');
  assert.match(page, /Confirmed — multiple independent sources/);
  assert.match(page, /Single-source — community catalog figure/);
  assert.match(page, /Disputed — sources conflict on boss-class rows/);
  assert.match(page, /catalogDripEntryCountStatus/, 'status must come from the data layer');
  assert.match(page, /bossDripStatus/);
  assert.match(page, /\{bossDripNote\}/);
  assert.match(page, /not a claim that the in-game Fishipedia counter has reached/i);

  // Triggerfish carries the same qualifier where it quotes the set size.
  const trigger = readFileSync(TRIGGERFISH_PAGE, 'utf8');
  assert.match(trigger, /catalogDripEntryCountStatus/);
  assert.match(trigger, /not as an official completion requirement/i);

  // The drip deep-dive labels the 49/49 split as one community source.
  const drip = readFileSync(DRIP_PAGE, 'utf8');
  assert.match(drip, /single community source, not official data/i);

  // The checklist's own disclaimer refuses to decide the boss question.
  const checklist = readFileSync(CHECKLIST_COMPONENT, 'utf8');
  assert.match(checklist, /boss-class rows the sources conflict/i);
  assert.match(checklist, /does not\s+decide that question for you/i);
});

test('P1.1/Drip: the Fishipedia checklist features are untouched by the fact fix', () => {
  const page = readFileSync(FISHIPEDIA_PAGE, 'utf8');
  // Server-rendered checklist still driven by the data layer.
  assert.match(page, /<FishipediaChecklist groups=\{FISHIPEDIA_GROUPS\} total=\{total\} \/>/);
  const checklist = readFileSync(CHECKLIST_COMPONENT, 'utf8');
  for (const feature of [
    'Search creatures...',
    'All Islands',
    'Not caught',
    'localStorage',
    'Reset progress',
    'Yes, reset',
  ]) {
    assert.ok(checklist.includes(feature), `checklist lost "${feature}"`);
  }
  assert.match(checklist, /islandOptions\(groups\)/);
  assert.match(checklist, /filterEntries\(/);
  assert.equal(TOTALS.total, 49, 'checklist row count changed');
});

// ============================================== refreshed achievement rates

test('P1.1/Achievements: the drip/collection trio matches the official 2026-09-21 fetch', () => {
  const expected = { drip: 96.5, collector: 18.5, fishipedia: 3.6 };
  for (const [slug, rate] of Object.entries(expected)) {
    const a = ACHIEVEMENT_BY_SLUG[slug];
    assert.ok(a, `${slug} achievement missing`);
    assert.equal(a.facts.globalPercent, rate, `${slug} rate not refreshed`);
    assert.equal(a.provenance.verifiedAt, '2026-09-21', `${slug} verifiedAt not bumped`);
    assert.equal(a.provenance.sourceType, 'OFFICIAL');
    for (const id of a.provenance.sourceIds) {
      assert.ok(SOURCE_BY_ID[id], `${slug}: unregistered source ${id}`);
    }
  }
  assert.ok(SOURCE_BY_ID['steam-achievements-2026-09-21'], 'the 2026-09-21 fetch must be registered');
  // The descriptions — the only official statement of scope — must not change.
  assert.equal(ACHIEVEMENT_BY_SLUG.collector.facts.description, 'Find and kill all the creatures');
  assert.equal(ACHIEVEMENT_BY_SLUG.fishipedia.facts.description, 'Find and kill all drip creatures');
  assert.notEqual(
    ACHIEVEMENT_BY_SLUG.collector.facts.description,
    ACHIEVEMENT_BY_SLUG.fishipedia.facts.description,
    'the two counters must stay distinct'
  );
  // Achievements that were NOT re-fetched keep their original stamp.
  assert.equal(ACHIEVEMENT_BY_SLUG.bean.provenance.verifiedAt, '2026-08-26');
  assert.equal(ACHIEVEMENT_BY_SLUG.bean.facts.globalPercent, 1.0);
});

test('P1.1/Achievements: no page still prints the superseded 2026-08-26 numbers', () => {
  const stale = ['1.4%', '10.8%', '96.4%'];
  const pages = [
    FISHIPEDIA_PAGE,
    DRIP_PAGE,
    TRIGGERFISH_PAGE,
    ACHIEVEMENTS_PAGE,
    RARE_VARIANTS_PAGE,
    'app/creatures/rare-variants/page.tsx',
    'app/fish/page.tsx',
    'app/page.tsx',
    'app/faq/page.tsx',
  ];
  for (const file of pages) {
    const src = readFileSync(file, 'utf8');
    for (const s of stale) {
      assert.ok(!src.includes(s), `${file}: stale official rate ${s} still rendered`);
    }
  }
  // "rarest achievement in the game" is false once Fishipedia is 3.6% (Bean 1.0%).
  for (const file of [FISHIPEDIA_PAGE, RARE_VARIANTS_PAGE]) {
    const src = readFileSync(file, 'utf8');
    assert.doesNotMatch(
      src,
      /single rarest achievement|the rarest achievement in the game/i,
      `${file}: superseded rarity claim`
    );
  }
});

test('P1.1/Fishipedia: corrected meta description keeps the intent and drops the claim', () => {
  const page = readFileSync(FISHIPEDIA_PAGE, 'utf8');
  const desc = /description:\s*\n?\s*'([^']+)'/.exec(page);
  assert.ok(desc, 'meta description missing');
  const text = desc[1];
  assert.match(text, /Fishipedia achievement/);
  assert.match(text, /find and kill all drip creatures/);
  assert.match(text, /3\.6%/);
  assert.match(text, /49-creature checklist/, 'must keep the checklist intent');
  assert.match(text, /1\.0\.12/, 'must keep the version pin');
  assert.doesNotMatch(text, /spans 49 creatures/i, 'must not restate the disputed scope as fact');
  assert.doesNotMatch(text, /1\.4%/);
  // Title / H1 / canonical are unchanged.
  assert.match(page, /title: 'How to Complete the Fishipedia — Missing Creature Checklist'/);
  assert.match(page, /canonical: 'https:\/\/howtofish101\.com\/guides\/fishipedia\/'/);
  assert.match(page, />How to Complete the Fishipedia in How to Fish<\/h1>/);
});

// ================================================================ navbar

test('P1.1/Navbar: the desktop link row only appears where it fits', () => {
  const src = readFileSync(NAVBAR, 'utf8');
  // Measured at 768px: logo 186 + nav 686 + CTA 91 = 964px of content, but the
  // md container only offers 720px. The row therefore starts at lg.
  assert.match(src, /hidden lg:flex items-center space-x-4 xl:space-x-5/, 'nav breakpoint not moved to lg');
  assert.doesNotMatch(src, /hidden md:flex/, 'the overflowing md nav is back');
  // The hamburger must cover exactly the range where the row is hidden.
  assert.match(src, /className="lg:hidden text-gray-300/, 'hamburger breakpoint out of sync');
  assert.match(src, /className="lg:hidden border-t border-ocean-800/, 'mobile panel breakpoint out of sync');
  assert.doesNotMatch(src, /md:hidden/, 'a stale md:hidden breakpoint remains');
  // Nothing may be crushed to make room.
  assert.match(src, /group shrink-0/, 'logo must not shrink');
  assert.match(src, /flex items-center space-x-3 shrink-0/, 'CTA block must not shrink');
  assert.match(src, /whitespace-nowrap text-gray-300/, 'nav labels must not wrap to two lines');
  // The mobile menu and the CTA must both still exist.
  assert.match(src, /aria-label=\{menuOpen \? 'Close menu' : 'Open menu'\}/);
  assert.match(src, /store\.steampowered\.com\/app\/4001890/);
  assert.equal((src.match(/navLinks\.map/g) || []).length, 2, 'desktop + mobile nav lists expected');
});

test('P1.1/Navbar: overflow is fixed structurally, not masked', () => {
  for (const file of [LAYOUT, 'app/globals.css', NAVBAR]) {
    if (!existsSync(file)) continue;
    const src = readFileSync(file, 'utf8');
    assert.doesNotMatch(
      src,
      /overflow-x\s*:\s*hidden|overflow-x-hidden/,
      `${file}: horizontal overflow must not be hidden with CSS`
    );
  }
});
