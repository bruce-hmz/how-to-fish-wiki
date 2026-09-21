import { SourceRef } from './types';

/**
 * Canonical source registry. Entity provenance references these ids.
 * Retrieved dates reflect the 2026-09-16 P0 audit unless noted.
 */
export const SOURCES: SourceRef[] = [
  // ---- OFFICIAL ----
  {
    id: 'steam-store',
    name: 'How to Fish — official Steam store page (Dazed Games)',
    url: 'https://store.steampowered.com/app/4001890/How_to_Fish/',
    kind: 'OFFICIAL',
    retrievedAt: '2026-09-16',
  },
  {
    id: 'steam-patch-1.0.12',
    name: 'Patch 1.0.12 official notes (Steam News, Sep 4, 2026)',
    url: 'https://store.steampowered.com/news/app/4001890/view/698774889153168485',
    kind: 'OFFICIAL',
    retrievedAt: '2026-09-16',
  },
  {
    id: 'steam-patch-1.0.11',
    name: 'Patch 1.0.11 official notes (Steam News, Sep 1, 2026)',
    url: 'https://store.steampowered.com/news/app/4001890/view/698774255287927884',
    kind: 'OFFICIAL',
    retrievedAt: '2026-09-16',
  },
  {
    id: 'steam-patch-1.0.10',
    name: 'Patch 1.0.10 official notes (Steam News, Aug 27, 2026)',
    url: 'https://store.steampowered.com/news/app/4001890/view/698774255287927072',
    kind: 'OFFICIAL',
    retrievedAt: '2026-09-16',
  },
  {
    id: 'steam-patch-1.0.9',
    name: 'Patch 1.0.9 official notes (Steam community announcement, Aug 24, 2026)',
    url: 'https://steamcommunity.com/games/4001890/announcements/detail/711158520539514352',
    kind: 'OFFICIAL',
    retrievedAt: '2026-09-16',
  },
  {
    id: 'steam-patch-1.0.5',
    name: 'Patch 1.0.5 official notes (Steam community announcement, Aug 22, 2026)',
    url: 'https://steamcommunity.com/games/4001890/announcements/detail/711158520539513993',
    kind: 'OFFICIAL',
    retrievedAt: '2026-09-16',
  },
  {
    id: 'steam-patch-1.0.4',
    name: 'Patch 1.0.4 official notes (Steam community announcement, Aug 21, 2026)',
    url: 'https://steamcommunity.com/games/4001890/announcements/detail/711158520539513916',
    kind: 'OFFICIAL',
    retrievedAt: '2026-09-16',
  },
  {
    id: 'steam-achievements',
    name: 'Steam Community global achievement stats (app 4001890), fetched 2026-08-26',
    url: 'https://steamcommunity.com/stats/4001890/achievements',
    kind: 'OFFICIAL',
    retrievedAt: '2026-08-26',
  },

  // ---- COMMUNITY_VERIFIED (guide databases) ----
  {
    id: 'g2a-island-guide',
    name: "G2A News: How to Fish — all fish, bosses, rods and bait by island (Aug 24, 2026)",
    url: 'https://www.g2a.com/news/features/guide/how-to-fish-all-fish-bosses-rods-and-bait-by-island/',
    kind: 'COMMUNITY_VERIFIED',
    retrievedAt: '2026-09-16',
  },
  {
    id: 'mobalytics-fish-list',
    name: 'Mobalytics: How to Fish — All 49 Fish, Creatures and Lures',
    url: 'https://mobalytics.gg/gamebase/guides/how-to-fish-all-fish-creatures-lures',
    kind: 'COMMUNITY_VERIFIED',
    retrievedAt: '2026-09-16',
  },
  {
    id: 'ign-boat-keys',
    name: 'IGN Wiki: How to Fish — How to Get the Boat Keys',
    url: 'https://www.ign.com/wikis/how-to-fish/How_to_Get_the_Boat_Keys',
    kind: 'COMMUNITY_VERIFIED',
    retrievedAt: '2026-09-16',
  },
  {
    id: 'ign-all-fish',
    name: 'IGN Wiki: How to Fish — all-fish table (sell values; first verified Aug 2026)',
    url: 'https://www.ign.com/wikis/how-to-fish',
    kind: 'COMMUNITY_VERIFIED',
    retrievedAt: '2026-08-27',
  },
  {
    id: 'game8-old-pike',
    name: 'Game8: The Old Pike boss guide (Beginner Boss Lure $40, $150 Shotgun alternative)',
    url: 'https://game8.co/games/How-to-Fish/archives/617342',
    kind: 'COMMUNITY_VERIFIED',
    retrievedAt: '2026-08-27',
  },
  {
    id: 'nerdschalk-killscore',
    name: 'Nerds Chalk: How Killscore multipliers work in How to Fish (single-source modifier values)',
    url: 'https://nerdschalk.com/how-killscore-multipliers-work-in-how-to-fish/',
    kind: 'COMMUNITY_VERIFIED',
    retrievedAt: '2026-08-27',
  },

  // ---- COMMUNITY threads backing specific entities ----
  {
    id: 'steam-goblin-shark-save',
    name: 'Steam Discussion: island progress resets ("I caught three goblin sharks")',
    url: 'https://steamcommunity.com/app/4001890/discussions/0/581681621355319359/',
    kind: 'COMMUNITY_VERIFIED',
    retrievedAt: '2026-09-16',
  },
  {
    id: 'steam-drip-dripper',
    name: 'Steam Discussion: "150 professional lures in and I still haven\'t caught the Drip Dripper"',
    url: 'https://steamcommunity.com/app/4001890/discussions/0/581681621355209433/',
    kind: 'COMMUNITY_VERIFIED',
    retrievedAt: '2026-09-16',
  },
  {
    id: 'steam-drip-threads',
    name: 'Steam Discussion: "Catching every drip fish" (drip variants, voxelfish hunt)',
    url: 'https://steamcommunity.com/app/4001890/discussions/0/582806239606641006/',
    kind: 'COMMUNITY_VERIFIED',
    retrievedAt: '2026-09-10',
  },

  // ---- Sources added by the 2026-09-21 drip-count evidence review ----
  {
    id: 'game8-drip-guide',
    name: 'Game8: Drip Creatures Guide — How to Catch (drip rule, rainbow notification, boss counting)',
    url: 'https://game8.co/games/How-to-Fish/archives/617424',
    kind: 'COMMUNITY_VERIFIED',
    retrievedAt: '2026-09-21',
  },
  {
    id: 'steam-drip-boss-thread',
    name: 'Steam Discussion: "Does the drippy Voxelfish exist?" (drip boss claims and counter-claim)',
    url: 'https://steamcommunity.com/app/4001890/discussions/0/582806239606534846/',
    kind: 'COMMUNITY_VERIFIED',
    retrievedAt: '2026-09-21',
  },
  {
    id: 'grindnstrat-achievements',
    name: 'GrindNStrat: How to Fish — all 28 achievements guide (separate drip tracking in the encyclopedia)',
    url: 'https://grindnstrat.com/how-to-fish-all-28-achievements-guide/',
    kind: 'COMMUNITY_VERIFIED',
    retrievedAt: '2026-09-21',
  },
  {
    id: 'steam-achievements-2026-09-21',
    name: 'Steam Community global achievement stats (app 4001890), re-fetched 2026-09-21',
    url: 'https://steamcommunity.com/stats/4001890/achievements',
    kind: 'OFFICIAL',
    retrievedAt: '2026-09-21',
  },
];

export const SOURCE_BY_ID: Record<string, SourceRef> = Object.fromEntries(
  SOURCES.map((s) => [s.id, s])
);

/**
 * Helper proving two independent community guide sources agree on the
 * fish/lure structure (used as the backbone of the corrected database).
 */
export const FISH_STRUCTURE_SOURCES = ['g2a-island-guide', 'mobalytics-fish-list'] as const;
