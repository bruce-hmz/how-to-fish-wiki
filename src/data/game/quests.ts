import { QuestEntity } from './types';

/**
 * Verified quest/progression chains. Each gate below is documented by at
 * least the two guide databases; patch-note confirmations are cited where
 * they exist.
 */
const V = '1.0.12';
const D = '2026-09-16';

export const QUESTS: QuestEntity[] = [
  {
    slug: 'beer-can-chain',
    name: 'Beer → Empty Beer Can → Spider Crab → Boat Keys',
    entityType: 'quest',
    gameVersion: V,
    facts: {
      steps: [
        'Gather clams on the beach and sell them to the fisherman ($1 each per IGN).',
        'Buy the Crab Fishing Rod (price DISPUTED: G2A $2 vs IGN $3).',
        'Buy a Beer (IGN: $12) and feed it to the fisherman (press Q per IGN) — he returns the Empty Beer Can, which attaches to your rod as a lure.',
        'Defeat the Spider Crab it summons (attack while it is dizzy per IGN).',
        'Trade the dropped Spider Crab Shell to the fisherman for the Boat Keys — the boat is now yours.',
      ],
      unlocks: 'Travel off the starter island',
      notes: 'Overlaps the official "Who stole my beer" achievement (bring the culprit to the lighthouse keeper).',
    },
    provenance: {
      sourceType: 'COMMUNITY_VERIFIED',
      sourceIds: ['ign-boat-keys', 'g2a-island-guide', 'mobalytics-fish-list'],
      verifiedAt: D,
      confidence: 'high',
    },
  },
  {
    slug: 'three-leech-quest',
    name: 'Three Leeches → Modified Leech → Giant Piranha → Island 3',
    entityType: 'quest',
    gameVersion: V,
    facts: {
      steps: [
        'On island 2, find three Leeches — ground pickups inland, not catches.',
        'Hand all three to the lady by the lake; she returns the Modified Leech bait.',
        'Defeat the Giant Piranha it summons (rebalanced in 1.0.12).',
        'Hand the skeleton back to the quest NPC to receive the island 3 unlock.',
      ],
      unlocks: 'Island 3 (desert)',
    },
    provenance: {
      sourceType: 'COMMUNITY_VERIFIED',
      sourceIds: ['g2a-island-guide', 'mobalytics-fish-list', 'steam-patch-1.0.12'],
      verifiedAt: D,
      confidence: 'high',
    },
  },
  {
    slug: 'pufferfish-gate',
    name: 'Carrot → Pufferfish → Island 4',
    entityType: 'quest',
    gameVersion: V,
    facts: {
      steps: [
        'On island 3, use the Carrot as quest bait to summon the Pufferfish.',
        'Defeat it (nerfed in official patch 1.0.4) and complete the hand-in to unlock island 4.',
      ],
      unlocks: 'Island 4 (sky)',
      notes: 'AUDIT: the previous "cook a Hot Dog Feast from 5 Hot Dogs" summon chain was FALSE and removed.',
    },
    provenance: {
      sourceType: 'COMMUNITY_VERIFIED',
      sourceIds: ['g2a-island-guide', 'mobalytics-fish-list'],
      verifiedAt: D,
      confidence: 'high',
    },
  },
  {
    slug: 'albatross-chain',
    name: 'Professional Boss Lure → Tuna → Albatross → Island 5',
    entityType: 'quest',
    gameVersion: V,
    facts: {
      steps: [
        'On island 4, buy/use the Professional Boss Lure and defeat the Tuna (nerfed slightly in 1.0.12).',
        'Use the Tuna as bait to draw in the Albatross ("terrorizing bird").',
        'Defeat it to unlock the route onward (Terrorizing bird achievement).',
      ],
      unlocks: 'Island 5 (volcano)',
    },
    provenance: {
      sourceType: 'COMMUNITY_VERIFIED',
      sourceIds: ['g2a-island-guide', 'mobalytics-fish-list'],
      verifiedAt: D,
      confidence: 'high',
    },
  },
  {
    slug: 'final-boss-chain',
    name: 'Fish Bucket → Bowhead Whale → Mutated Bowhead Whale → Finish',
    entityType: 'quest',
    gameVersion: V,
    facts: {
      steps: [
        'On island 5, use the Fish Bucket to summon the Bowhead Whale and defeat it.',
        'Use the Bowhead Whale as bait to summon the Mutated Bowhead Whale — the final boss.',
        'Defeat it to finish the game ("We are so back" achievement, 28.5%); the Scientific Boss Lure (Goblin Shark) is the parallel island-5 boss catch.',
      ],
      unlocks: 'Game completion',
      notes: 'AUDIT: the previous "Volcano Core (3 Obsidian Shards + 1 Magma Eel)" summon was FALSE and removed.',
    },
    provenance: {
      sourceType: 'COMMUNITY_VERIFIED',
      sourceIds: ['g2a-island-guide', 'mobalytics-fish-list', 'steam-achievements'],
      verifiedAt: D,
      confidence: 'high',
    },
  },
];

export const QUEST_BY_SLUG: Record<string, QuestEntity> = Object.fromEntries(
  QUESTS.map((q) => [q.slug, q])
);
