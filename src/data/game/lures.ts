import { LureEntity } from './types';

/**
 * The verified lure/bait economy. Structure is cross-verified by
 * G2A + Mobalytics; prices where recorded.
 *
 * AUDIT NOTE (2026-09-16): the previous /lures/ page listed Earthworm,
 * Shrimp Cocktail, Squid Tentacle, Lantern Bait, Rainbow Lure, Fireproof
 * Lure, Golden Minnow, Hot Dog Feast, and Volcano Core. None of these
 * appear in any external source and all were removed as FALSE/UNVERIFIED.
 */
export const LURES: LureEntity[] = [
  {
    slug: 'free-lure',
    name: 'Free Lure',
    entityType: 'lure',
    gameVersion: '1.0.12',
    aliases: ['crab rod lure', 'fishing rod lure'],
    facts: {
      priceUsd: 0,
      obtained: 'Default lure on the Crab Fishing Rod and the Fishing Rod — no purchase needed.',
      notes: 'Catches the starter roster: crabs, shrimp, and the basic freshwater fish on island 2.',
    },
    provenance: {
      sourceType: 'COMMUNITY_VERIFIED',
      sourceIds: ['g2a-island-guide', 'mobalytics-fish-list'],
      verifiedAt: '2026-09-16',
      confidence: 'high',
    },
  },
  {
    slug: 'hot-dog',
    name: 'Hot Dog (bait)',
    entityType: 'bait',
    gameVersion: '1.0.12',
    facts: {
      notes: 'Buyable bait. Catches Rock Crab and Lobster on the Crab Rod, Piranha on the Fishing Rod. IGN also recommends it for better early catches.',
    },
    provenance: {
      sourceType: 'COMMUNITY_VERIFIED',
      sourceIds: ['g2a-island-guide', 'mobalytics-fish-list', 'ign-boat-keys'],
      verifiedAt: '2026-09-16',
      confidence: 'high',
    },
  },
  {
    slug: 'beginner-lure',
    name: 'Beginner Lure',
    entityType: 'lure',
    gameVersion: '1.0.12',
    facts: {
      notes: 'Island 2 (Forest) lure tier. Catches Piranha, Pike, Cod, Goby, Salmon, Perch, Triggerfish, Goldfish.',
    },
    provenance: {
      sourceType: 'COMMUNITY_VERIFIED',
      sourceIds: ['g2a-island-guide', 'mobalytics-fish-list'],
      verifiedAt: '2026-09-16',
      confidence: 'high',
    },
  },
  {
    slug: 'standard-lure',
    name: 'Standard Lure',
    entityType: 'lure',
    gameVersion: '1.0.12',
    facts: {
      priceUsd: 15,
      priceSourceId: 'g2a-island-guide',
      notes: 'Island 3 (Desert) lure tier, $15 per G2A and Mobalytics. Catches Catfish, Clownfish, Sea Urchin, Boxfish, Bowlfish, Needlefish, Angelfish, Bluegill, Seahorse, Salmon.',
    },
    provenance: {
      sourceType: 'COMMUNITY_VERIFIED',
      sourceIds: ['g2a-island-guide', 'mobalytics-fish-list'],
      verifiedAt: '2026-09-16',
      confidence: 'high',
    },
  },
  {
    slug: 'professional-lure',
    name: 'Professional Lure',
    entityType: 'lure',
    gameVersion: '1.0.12',
    facts: {
      priceUsd: 50,
      priceSourceId: 'g2a-island-guide',
      notes: 'Island 4 (Sky/Rocks) lure tier, $50 per G2A and Mobalytics. Catches Bass, Eel, Red Snapper, Sengarat, Halibut, Tigerfish, Flying Fish, Voxelfish, Parrotfish, Dripper.',
    },
    provenance: {
      sourceType: 'COMMUNITY_VERIFIED',
      sourceIds: ['g2a-island-guide', 'mobalytics-fish-list'],
      verifiedAt: '2026-09-16',
      confidence: 'high',
    },
  },
  {
    slug: 'scientific-lure',
    name: 'Scientific Lure',
    entityType: 'lure',
    gameVersion: '1.0.12',
    facts: {
      priceUsd: 500,
      priceSourceId: 'g2a-island-guide',
      notes: 'Island 5 (Volcano) lure tier, $500 per G2A and Mobalytics. Catches Blobfish, Oarfish, Anglerfish, Stonefish, Superdwarf Fish.',
    },
    provenance: {
      sourceType: 'COMMUNITY_VERIFIED',
      sourceIds: ['g2a-island-guide', 'mobalytics-fish-list'],
      verifiedAt: '2026-09-16',
      confidence: 'high',
    },
  },
  {
    slug: 'beginner-boss-lure',
    name: 'Beginner Boss Lure',
    entityType: 'lure',
    gameVersion: '1.0.12',
    facts: {
      priceUsd: 40,
      priceSourceId: 'game8-old-pike',
      notes: 'Boss-class lure for island 2. Hooks The Old Pike and the Sunfish — the two share this lure pool, so the Sunfish can bite first.',
    },
    provenance: {
      sourceType: 'COMMUNITY_VERIFIED',
      sourceIds: ['g2a-island-guide', 'mobalytics-fish-list', 'game8-old-pike'],
      verifiedAt: '2026-09-16',
      confidence: 'high',
    },
  },
  {
    slug: 'standard-boss-lure',
    name: 'Standard Boss Lure',
    entityType: 'lure',
    gameVersion: '1.0.12',
    facts: {
      notes: 'Boss-class lure for island 3. Hooks the Blue Shark.',
    },
    provenance: {
      sourceType: 'COMMUNITY_VERIFIED',
      sourceIds: ['g2a-island-guide', 'mobalytics-fish-list'],
      verifiedAt: '2026-09-16',
      confidence: 'high',
    },
  },
  {
    slug: 'professional-boss-lure',
    name: 'Professional Boss Lure',
    entityType: 'lure',
    gameVersion: '1.0.12',
    facts: {
      notes: 'Boss-class lure for island 4. Hooks the Tuna — which is itself the bait for the Albatross fight.',
    },
    provenance: {
      sourceType: 'COMMUNITY_VERIFIED',
      sourceIds: ['g2a-island-guide', 'mobalytics-fish-list'],
      verifiedAt: '2026-09-16',
      confidence: 'high',
    },
  },
  {
    slug: 'scientific-boss-lure',
    name: 'Scientific Boss Lure',
    entityType: 'lure',
    gameVersion: '1.0.12',
    facts: {
      notes: 'Boss-class lure for island 5. Hooks the Goblin Shark.',
    },
    provenance: {
      sourceType: 'COMMUNITY_VERIFIED',
      sourceIds: ['g2a-island-guide', 'mobalytics-fish-list', 'steam-goblin-shark-save'],
      verifiedAt: '2026-09-16',
      confidence: 'high',
    },
  },
  // ---- Quest baits (boss summons; see quests.ts for the chains) ----
  {
    slug: 'empty-beer-can',
    name: 'Empty Beer Can (quest bait)',
    entityType: 'bait',
    gameVersion: '1.0.12',
    facts: {
      obtained: 'Buy a Beer and feed it to the fisherman NPC on island 1; he hands back the Empty Beer Can, which attaches to the rod as a lure.',
      notes: 'Summons the Spider Crab boss. Beer price DISPUTED: IGN says $12, older site copy said $10 — IGN adopted.',
    },
    provenance: {
      sourceType: 'COMMUNITY_VERIFIED',
      sourceIds: ['ign-boat-keys', 'g2a-island-guide', 'mobalytics-fish-list'],
      verifiedAt: '2026-09-16',
      confidence: 'medium',
      note: 'Beer price conflicts between sources ($10 vs $12); summon function triple-sourced.',
    },
  },
  {
    slug: 'modified-leech',
    name: 'Modified Leech (quest bait)',
    entityType: 'bait',
    gameVersion: '1.0.12',
    facts: {
      obtained: 'Collect three Leeches (ground pickups) on island 2 and hand them to the lady by the lake.',
      notes: 'Summons the Giant Piranha boss.',
    },
    provenance: {
      sourceType: 'COMMUNITY_VERIFIED',
      sourceIds: ['g2a-island-guide', 'mobalytics-fish-list'],
      verifiedAt: '2026-09-16',
      confidence: 'high',
    },
  },
  {
    slug: 'carrot',
    name: 'Carrot (quest bait)',
    entityType: 'bait',
    gameVersion: '1.0.12',
    facts: {
      notes: 'Summons the Pufferfish boss on island 3. AUDIT: the previous "Hot Dog Feast (5 Hot Dogs)" summon was FALSE and removed.',
    },
    provenance: {
      sourceType: 'COMMUNITY_VERIFIED',
      sourceIds: ['g2a-island-guide', 'mobalytics-fish-list'],
      verifiedAt: '2026-09-16',
      confidence: 'high',
    },
  },
  {
    slug: 'fish-bucket',
    name: 'Fish Bucket (quest item)',
    entityType: 'bait',
    gameVersion: '1.0.12',
    facts: {
      notes: 'Summons the Bowhead Whale on island 5. Source basis: G2A + Mobalytics quest-bait tables.',
    },
    provenance: {
      sourceType: 'COMMUNITY_VERIFIED',
      sourceIds: ['g2a-island-guide', 'mobalytics-fish-list'],
      verifiedAt: '2026-09-16',
      confidence: 'high',
    },
  },
];

export const LURE_BY_SLUG: Record<string, LureEntity> = Object.fromEntries(
  LURES.map((l) => [l.slug, l])
);
