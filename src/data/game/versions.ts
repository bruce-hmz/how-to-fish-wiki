/**
 * Game version tracking. The site targets the newest OFFICIAL patch;
 * every gameplay page must state which version it was verified against.
 */
export const CURRENT_GAME_VERSION = '1.0.12';

export const VERSION_HISTORY: { version: string; date: string; sourceId: string }[] = [
  { version: '1.0.4', date: '2026-08-21', sourceId: 'steam-patch-1.0.4' },
  { version: '1.0.5', date: '2026-08-22', sourceId: 'steam-patch-1.0.5' },
  { version: '1.0.9', date: '2026-08-24', sourceId: 'steam-patch-1.0.9' },
  { version: '1.0.10', date: '2026-08-27', sourceId: 'steam-patch-1.0.10' },
  { version: '1.0.11', date: '2026-09-01', sourceId: 'steam-patch-1.0.11' },
  { version: '1.0.12', date: '2026-09-04', sourceId: 'steam-patch-1.0.12' },
];

/** Officially documented gameplay-relevant changes, for version-stamp triage. */
export const PATCH_GAMEPLAY_CHANGES: Record<string, string[]> = {
  '1.0.4': [
    'Pufferfish boss nerfed',
    'Magma Whale boss nerfed (final boss; see bosses.ts naming note)',
    '8-player lobbies',
    'Handyman achievement unlock fix',
  ],
  '1.0.5': [
    'Island travel without unlocking fixed',
    'Fishipedia achievement unlock fixed (previously required all + 1)',
  ],
  '1.0.9': ['Difficulty modes added (Easy/Normal/Hard)'],
  '1.0.10': [
    'Water cleans cooked weapons',
    'Ground items persist in saves (up to 64)',
    'Anglerfish nerfed',
    'Roulette table fixes',
  ],
  '1.0.11': [
    'Roulette table on island 6 moved',
    'Drip parrotfish now cookable',
    'Item must be held once before selling',
  ],
  '1.0.12': [
    'Piranha rebalanced',
    'Tuna nerfed slightly',
    'Final boss takes explosive damage when landing on its tail',
    'Steam Cloud saves',
  ],
};
