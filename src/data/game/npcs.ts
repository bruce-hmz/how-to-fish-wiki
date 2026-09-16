import { NpcEntity } from './types';

/**
 * NPCs are only listed when a verifiable source names them (achievement
 * descriptions are OFFICIAL via Steam; quest NPCs are cross-verified by
 * the two guide databases).
 */
const V = '1.0.12';
const D = '2026-09-16';

export const NPCS: NpcEntity[] = [
  {
    slug: 'fisherman',
    name: 'The Fisherman',
    entityType: 'npc',
    gameVersion: V,
    facts: {
      locationSlug: 'island-1-lighthouse',
      role: 'Buys clams, sells the Crab Fishing Rod; drinks your Beer and hands back the Empty Beer Can; trades the Spider Crab Shell for the Boat Keys',
    },
    provenance: {
      sourceType: 'COMMUNITY_VERIFIED',
      sourceIds: ['ign-boat-keys', 'g2a-island-guide'],
      verifiedAt: D,
      confidence: 'high',
    },
  },
  {
    slug: 'lady-by-the-lake',
    name: 'The Lady by the Lake',
    entityType: 'npc',
    gameVersion: V,
    aliases: ['lake lady', 'forest lady'],
    facts: {
      locationSlug: 'island-2-forest',
      role: 'Wants three Leeches (Modified Leech quest); takes the Giant Piranha skeleton hand-in',
    },
    provenance: {
      sourceType: 'COMMUNITY_VERIFIED',
      sourceIds: ['g2a-island-guide', 'mobalytics-fish-list', 'steam-achievements'],
      verifiedAt: D,
      confidence: 'high',
      note: 'The "Dinnertime" achievement ("Catch dinner for the lady in the forest", 78.9%) refers to this NPC per guide cross-reference.',
    },
  },
  {
    slug: 'lighthouse-keeper',
    name: 'The Lighthouse Keeper',
    entityType: 'npc',
    gameVersion: V,
    facts: {
      locationSlug: 'island-1-lighthouse',
      role: 'Receives the beer-theft culprit in the "Who stole my beer" quest (89.9% global unlock)',
    },
    provenance: {
      sourceType: 'OFFICIAL',
      sourceIds: ['steam-achievements'],
      verifiedAt: '2026-08-26',
      confidence: 'medium',
      note: 'NPC named in the official achievement description; quest specifics community-documented.',
    },
  },
  {
    slug: 'grillmaster-npc',
    name: 'The Grillmaster',
    entityType: 'npc',
    gameVersion: V,
    facts: {
      locationSlug: 'island-3-desert',
      role: 'Take the Blue Shark catch to him to unlock the island Grill',
    },
    provenance: {
      sourceType: 'COMMUNITY_VERIFIED',
      sourceIds: ['g2a-island-guide', 'mobalytics-fish-list'],
      verifiedAt: D,
      confidence: 'high',
      note: 'Matches the official "Grillmaster" achievement ("Start the grill", 73.1%).',
    },
  },
  {
    slug: 'tourist',
    name: 'The Tourist',
    entityType: 'npc',
    gameVersion: V,
    facts: {
      locationSlug: 'island-3-desert',
      role: '"Help the tourist swim on his vacation" (Vacation achievement, 62.0%); guide sources place him on the desert island',
    },
    provenance: {
      sourceType: 'OFFICIAL',
      sourceIds: ['steam-achievements', 'g2a-island-guide'],
      verifiedAt: D,
      confidence: 'medium',
    },
  },
  {
    slug: 'military',
    name: 'The Military',
    entityType: 'npc',
    gameVersion: V,
    facts: {
      role: '"Help the military defeat the big creature they located" (Deadliest catch achievement, 29.3%)',
    },
    provenance: {
      sourceType: 'OFFICIAL',
      sourceIds: ['steam-achievements'],
      verifiedAt: '2026-08-26',
      confidence: 'medium',
      note: 'Faction named in the official achievement description only.',
    },
  },
  {
    slug: 'scared-islanders',
    name: 'The Scared Islanders',
    entityType: 'npc',
    gameVersion: V,
    facts: {
      role: 'Quest givers implied by "Defend the scared islanders from the terrorizing bird" (Terrorizing bird achievement, 42.8%)',
    },
    provenance: {
      sourceType: 'OFFICIAL',
      sourceIds: ['steam-achievements'],
      verifiedAt: '2026-08-26',
      confidence: 'medium',
    },
  },
];

export const NPC_BY_SLUG: Record<string, NpcEntity> = Object.fromEntries(
  NPCS.map((n) => [n.slug, n])
);
