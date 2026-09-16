import { BossEntity } from './types';

/**
 * Verified boss catalog — 11 boss-class creatures (incl. mini-bosses).
 * With the 38 regular fish in fish.ts this totals the 49-species catalog.
 *
 * AUDIT NOTE (2026-09-16): all previous HP values (800/1200/1500/2200/3000),
 * damage numbers, phase percentages, and drop-rate tables were UNSIGNED and
 * were removed. "Boat Key Part #1/#2/#3" was corrected: IGN documents ONE
 * boat-key acquisition (Spider Crab Shell trade); later gates are island
 * unlocks via boss hand-ins, not key parts. "Magma Whale" as a boss NAME
 * appears in no external source — the verified final-boss entity is the
 * Mutated Bowhead Whale (summoned by feeding it a Bowhead Whale).
 */
const V = '1.0.12';
const D = '2026-09-16';

export const BOSSES: BossEntity[] = [
  {
    slug: 'spider-crab',
    name: 'Giant Spider Crab',
    entityType: 'boss',
    gameVersion: V,
    aliases: ['first boss', 'the crab'],
    facts: {
      locationSlug: 'island-1-lighthouse',
      summon: 'Empty Beer Can (feed a Beer to the fisherman NPC; the can attaches to your rod as a lure)',
      unlocks: 'Boat Keys — grab the Spider Crab Shell it drops and trade it to the fisherman, then you can leave the starter island',
      notes: 'First boss. Live bug since 1.0.11: crab can float out of reach; 1.0.12 did not fix it (community workaround exists).',
    },
    provenance: {
      sourceType: 'COMMUNITY_VERIFIED',
      sourceIds: ['ign-boat-keys', 'g2a-island-guide', 'mobalytics-fish-list'],
      verifiedAt: D,
      confidence: 'high',
    },
  },
  {
    slug: 'giant-piranha',
    name: 'Giant Piranha',
    entityType: 'boss',
    gameVersion: V,
    aliases: ['second boss', 'lake boss'],
    facts: {
      locationSlug: 'island-2-forest',
      summon: 'Modified Leech (hand three ground-picked Leeches to the lady by the lake)',
      unlocks: 'Island 3 (hand the skeleton back to the quest NPC)',
      notes: 'Rebalanced in official patch 1.0.12; post-patch community reports say the fight got harder.',
    },
    provenance: {
      sourceType: 'COMMUNITY_VERIFIED',
      sourceIds: ['g2a-island-guide', 'mobalytics-fish-list', 'steam-patch-1.0.12'],
      verifiedAt: D,
      confidence: 'high',
    },
  },
  {
    slug: 'old-pike',
    name: 'The Old Pike',
    entityType: 'boss',
    gameVersion: V,
    aliases: ['old pike boss'],
    facts: {
      locationSlug: 'island-2-forest',
      summon: 'Beginner Boss Lure ($40) — the Sunfish shares this lure pool and can bite first; alternative: hunt it with the $150 Shotgun',
      notes: 'Mini-boss / boss-class fish. "Eat a mini-boss" is the Competitive eating achievement.',
    },
    provenance: {
      sourceType: 'COMMUNITY_VERIFIED',
      sourceIds: ['g2a-island-guide', 'mobalytics-fish-list', 'game8-old-pike'],
      verifiedAt: D,
      confidence: 'high',
    },
  },
  {
    slug: 'blue-shark',
    name: 'Blue Shark',
    entityType: 'boss',
    gameVersion: V,
    facts: {
      locationSlug: 'island-3-desert',
      summon: 'Standard Boss Lure cast from the desert island',
      unlocks: 'Grill access (bring the catch to the Grillmaster NPC)',
      notes: 'Mini-boss on island 3 (desert), re-verified against 5 outlets during the 2026-09-04 execution run.',
    },
    provenance: {
      sourceType: 'COMMUNITY_VERIFIED',
      sourceIds: ['g2a-island-guide', 'mobalytics-fish-list'],
      verifiedAt: D,
      confidence: 'high',
    },
  },
  {
    slug: 'pufferfish',
    name: 'Pufferfish (Colossal)',
    entityType: 'boss',
    gameVersion: V,
    facts: {
      locationSlug: 'island-3-desert',
      summon: 'Carrot (quest bait)',
      unlocks: 'Progression toward island 4',
      notes: 'AUDIT: the "Hot Dog Feast" summon was FALSE and removed. Boss nerfed in official patch 1.0.4.',
    },
    provenance: {
      sourceType: 'COMMUNITY_VERIFIED',
      sourceIds: ['g2a-island-guide', 'mobalytics-fish-list', 'steam-patch-1.0.4'],
      verifiedAt: D,
      confidence: 'high',
    },
  },
  {
    slug: 'tuna',
    name: 'Tuna',
    entityType: 'boss',
    gameVersion: V,
    facts: {
      locationSlug: 'island-4-sky',
      summon: 'Professional Boss Lure',
      unlocks: 'The Tuna itself is the bait for the Albatross fight',
      notes: 'Boss-class catch on island 4; nerfed slightly in official patch 1.0.12. The previous "Golden Tuna, $450, far outer ocean" fish entry was fabricated and removed.',
    },
    provenance: {
      sourceType: 'COMMUNITY_VERIFIED',
      sourceIds: ['g2a-island-guide', 'mobalytics-fish-list', 'steam-patch-1.0.12'],
      verifiedAt: D,
      confidence: 'high',
    },
  },
  {
    slug: 'albatross',
    name: 'Albatross',
    entityType: 'boss',
    gameVersion: V,
    aliases: ['terrorizing bird', 'the bird'],
    facts: {
      locationSlug: 'island-4-sky',
      summon: 'A defeated Tuna used as bait (catch the Tuna with the Professional Boss Lure first)',
      unlocks: 'Terrorizing bird achievement ("Defend the scared islanders from the terrorizing bird", 42.8% global unlock)',
      notes: 'Two-stage chain on island 4. Community tactics: interrupt dives with buildings, hide-and-snipe from the casino, shotgun + cooked-fish bait.',
    },
    provenance: {
      sourceType: 'COMMUNITY_VERIFIED',
      sourceIds: ['g2a-island-guide', 'mobalytics-fish-list', 'steam-achievements'],
      verifiedAt: D,
      confidence: 'high',
    },
  },
  {
    slug: 'goblin-shark',
    name: 'Goblin Shark',
    entityType: 'boss',
    gameVersion: V,
    facts: {
      locationSlug: 'island-5-volcano',
      summon: 'Scientific Boss Lure',
      notes: 'Boss-class catch on island 5; named in a real Steam save-reset thread ("I caught three goblin sharks…").',
    },
    provenance: {
      sourceType: 'COMMUNITY_VERIFIED',
      sourceIds: ['g2a-island-guide', 'mobalytics-fish-list', 'steam-goblin-shark-save'],
      verifiedAt: D,
      confidence: 'high',
    },
  },
  {
    slug: 'bowhead-whale',
    name: 'Bowhead Whale',
    entityType: 'boss',
    gameVersion: V,
    facts: {
      locationSlug: 'island-5-volcano',
      summon: 'Fish Bucket (quest item)',
      unlocks: 'The Bowhead Whale itself is the bait for the final boss',
      notes: 'Community reports the regular bowhead whale "just blows up with dynamite" — treat as a normal-encounter whale, distinct from the final boss.',
    },
    provenance: {
      sourceType: 'COMMUNITY_VERIFIED',
      sourceIds: ['g2a-island-guide', 'mobalytics-fish-list'],
      verifiedAt: D,
      confidence: 'high',
    },
  },
  {
    slug: 'mutated-bowhead-whale',
    name: 'Mutated Bowhead Whale',
    entityType: 'boss',
    gameVersion: V,
    aliases: ['the final boss', 'the whale', 'last boss'],
    facts: {
      locationSlug: 'island-5-volcano',
      summon: 'A Bowhead Whale used as bait',
      unlocks: 'Finishing the fight completes the game ("We are so back" achievement, 28.5% global unlock)',
      notes: 'THE FINAL BOSS. AUDIT: the site previously called this "Volcanic Magma Whale" — that name appears in no external source. The verified entity name is Mutated Bowhead Whale (G2A + Mobalytics); Steam players call it "the whale"/"last boss". Official 1.0.4 note nerfed it; 1.0.12 fixed explosives when it lands on its tail. Handyman (bare-hands kill, 1.7%) applies to this fight.',
    },
    provenance: {
      sourceType: 'COMMUNITY_VERIFIED',
      sourceIds: ['g2a-island-guide', 'mobalytics-fish-list', 'steam-patch-1.0.4', 'steam-patch-1.0.12', 'steam-achievements'],
      verifiedAt: D,
      confidence: 'high',
    },
  },
  {
    slug: 'sunfish',
    name: 'Sunfish',
    entityType: 'boss',
    gameVersion: V,
    facts: {
      locationSlug: 'island-2-forest',
      summon: 'Beginner Boss Lure (shares the Old Pike lure pool — can bite when you are hunting the Pike)',
      notes: 'Boss-class catch on island 2.',
    },
    provenance: {
      sourceType: 'COMMUNITY_VERIFIED',
      sourceIds: ['g2a-island-guide', 'mobalytics-fish-list'],
      verifiedAt: D,
      confidence: 'high',
    },
  },
];

export const BOSS_BY_SLUG: Record<string, BossEntity> = Object.fromEntries(
  BOSSES.map((b) => [b.slug, b])
);

/** The URL /bosses/magma-whale/ predates the corrected name; kept for link equity. */
export const BOSS_URL_ALIASES: Record<string, string> = {
  'magma-whale': 'mutated-bowhead-whale',
};
