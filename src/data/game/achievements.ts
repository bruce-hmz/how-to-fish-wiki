import { AchievementEntity } from './types';

/**
 * Achievement data migrated from lib/achievements.ts (fetched from Steam
 * Community global stats on 2026-08-26). Descriptions and unlock rates are
 * OFFICIAL Steam data; interpretations in notes are community-sourced.
 *
 * Unlock rates drift upward over time, so an entity's `verifiedAt` records the
 * fetch it was last confirmed against. The drip/collection trio (Drip,
 * Collector, Fishipedia) was re-fetched on 2026-09-21 during the drip-count
 * evidence review and carries that date; everything else is still on the
 * 2026-08-26 fetch.
 */
const V = '1.0.12';
const FETCH_2026_08_26 = '2026-08-26';
const FETCH_2026_09_21 = '2026-09-21';

function ach(
  slug: string,
  name: string,
  description: string,
  globalPercent: number,
  notes?: string,
  refetch?: { verifiedAt: string; sourceIds: string[] }
): AchievementEntity {
  return {
    slug,
    name,
    entityType: 'achievement',
    gameVersion: V,
    facts: { description, globalPercent, notes },
    provenance: {
      sourceType: 'OFFICIAL',
      sourceIds: refetch?.sourceIds ?? ['steam-achievements'],
      verifiedAt: refetch?.verifiedAt ?? FETCH_2026_08_26,
      confidence: 'high',
    },
  };
}

export const ACHIEVEMENTS: AchievementEntity[] = [
  ach('getting-started', 'Getting started', 'Kill your first creature', 98.3),
  ach('drip', 'Drip', 'Kill a drip creature', 96.5, 'Re-fetched 2026-09-21 (was 96.4% on 2026-08-26).', {
    verifiedAt: FETCH_2026_09_21,
    sourceIds: ['steam-achievements-2026-09-21'],
  }),
  ach('who-stole-my-beer', 'Who stole my beer', 'Find and kill the culprit, and bring it to the lighthouse keeper', 89.9, 'Ties into the island-1 beer quest chain.'),
  ach('noob', 'Noob', 'Get a kill with no kill score multiplier', 82.6),
  ach('getting-an-upgrade', 'Getting an upgrade', 'Upgrade the engine on the boat', 82.5, 'Confirms boat engine upgrades exist; specific tiers/prices are NOT documented anywhere reliable.'),
  ach('dinnertime', 'Dinnertime', 'Catch dinner for the lady in the forest', 78.9, 'The forest lady = island-2 quest NPC.'),
  ach('let-me-go', 'Let me go', 'Get picked up by a seagull', 78.3),
  ach('impressive', 'Impressive', 'Get a 5x killscore multiplier', 75.6, 'Anchors the 5x killscore milestone.'),
  ach('grillmaster', 'Grillmaster', 'Start the grill', 73.1, 'The grill unlocks on island 3 via the Blue Shark / Grillmaster hand-in (community guides).'),
  ach('gold-gold-gold', 'GOLD GOLD GOLD', 'Unlock a legendary skin from the slot machine', 63.1),
  ach('vacation', 'Vacation', 'Help the tourist swim on his vacation', 62.0),
  ach('360-no-scope', '360 no scope', 'Kill a creature with a 360 no scope', 58.1),
  ach('i-am-speed', 'I am speed', 'Buy the best engine for the boat', 51.4),
  ach('fully-equipped', 'Fully equipped', 'Apply all attachments to a single weapon', 49.8),
  ach('terrorizing-bird', 'Terrorizing bird', 'Defend the scared islanders from the terrorizing bird', 42.8, 'The Albatross fight on island 4.'),
  ach('yummy-in-my-tummy', 'Yummy in my tummy', 'Eat a burnt creature', 41.6),
  ach('deadliest-catch', 'Deadliest catch', 'Help the military defeat the big creature they located', 29.3),
  ach('we-are-so-back', 'We are so back', 'Finish the game', 28.5, 'Awarded for defeating the final boss (Mutated Bowhead Whale).'),
  ach('all-in', 'All in', 'Bet on green and win at roulette', 27.7, 'Roulette table lives on island 6 (official 1.0.11 patch note).'),
  ach('easy', 'Easy', 'Kill a boss within 10 seconds', 20.5),
  ach('i-m-the-bird-now', 'I\'m the bird now', 'Make the boat fly', 18.6),
  ach('competitive-eating', 'Competitive eating', 'Eat a mini-boss', 17.3, 'Mini-bosses: the Old Pike and Blue Shark class of catches.'),
  ach('collector', 'Collector', 'Find and kill all the creatures', 18.5, 'Re-fetched 2026-09-21 (was 10.8% on 2026-08-26). Separate counter from Fishipedia: this one tracks the regular catalog.', {
    verifiedAt: FETCH_2026_09_21,
    sourceIds: ['steam-achievements-2026-09-21'],
  }),
  ach('rich-millionaire', 'Rich! Millionaire', 'Sell something worth 100,000 or more', 10.2),
  ach('everyone-s-dream', 'Everyone\'s dream', 'Kill a seagull with dynamite', 4.1),
  ach('handyman', 'Handyman', 'Defeat the final boss with your bare hands', 1.7, 'Unlock-for-everyone-in-session fixed in official patch 1.0.4.'),
  ach('fishipedia', 'Fishipedia', 'Find and kill all drip creatures', 3.6, 'Re-fetched 2026-09-21 (was 1.4% on 2026-08-26). Unlock fixed in official patch 1.0.5 (previously required all + 1). The achievement description is the only official statement about its scope — no official source states how many Drip creatures it counts.', {
    verifiedAt: FETCH_2026_09_21,
    sourceIds: ['steam-achievements-2026-09-21'],
  }),
  ach('bean', 'Bean', 'Finish the game within 1 hour', 1.0),
];

export const ACHIEVEMENT_BY_SLUG: Record<string, AchievementEntity> = Object.fromEntries(
  ACHIEVEMENTS.map((a) => [a.slug, a])
);
