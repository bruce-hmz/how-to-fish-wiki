import { LocationEntity } from './types';

/**
 * Island/zone structure. Naming follows the two structure sources
 * (G2A island guide + Mobalytics lure table); the island-6 casino reference
 * is OFFICIAL via the 1.0.11 patch notes.
 *
 * NOTE (audit 2026-09-16): the names "Coral Maze Lagoon" and
 * "Mount Inferno / Deep Volcanic Trench" previously used across the site
 * appear in NO external source and were retired. Island 3 is the desert
 * island; island 5 is the volcano island.
 */
export const LOCATIONS: LocationEntity[] = [
  {
    slug: 'island-1-lighthouse',
    name: 'Island 1 — Lighthouse (starter island)',
    entityType: 'location',
    gameVersion: '1.0.12',
    facts: { islandNumber: 1 },
    provenance: {
      sourceType: 'COMMUNITY_VERIFIED',
      sourceIds: ['g2a-island-guide', 'mobalytics-fish-list', 'ign-boat-keys'],
      verifiedAt: '2026-09-16',
      confidence: 'high',
    },
  },
  {
    slug: 'island-2-forest',
    name: 'Island 2 — Forest island (lake)',
    entityType: 'location',
    gameVersion: '1.0.12',
    facts: { islandNumber: 2 },
    aliases: ['forest island', 'the lake island'],
    provenance: {
      sourceType: 'COMMUNITY_VERIFIED',
      sourceIds: ['g2a-island-guide', 'mobalytics-fish-list'],
      verifiedAt: '2026-09-16',
      confidence: 'high',
    },
  },
  {
    slug: 'island-3-desert',
    name: 'Island 3 — Desert island',
    entityType: 'location',
    gameVersion: '1.0.12',
    facts: { islandNumber: 3 },
    provenance: {
      sourceType: 'COMMUNITY_VERIFIED',
      sourceIds: ['g2a-island-guide', 'mobalytics-fish-list'],
      verifiedAt: '2026-09-16',
      confidence: 'high',
    },
  },
  {
    slug: 'island-4-sky',
    name: 'Island 4 — Sky island (the Rocks)',
    entityType: 'location',
    gameVersion: '1.0.12',
    facts: { islandNumber: 4, notes: 'G2A describes island 4 as "in the sky"; Mobalytics labels it "Rocks Island".' },
    aliases: ['rocks island', 'sky island'],
    provenance: {
      sourceType: 'COMMUNITY_VERIFIED',
      sourceIds: ['g2a-island-guide', 'mobalytics-fish-list'],
      verifiedAt: '2026-09-16',
      confidence: 'high',
    },
  },
  {
    slug: 'island-5-volcano',
    name: 'Island 5 — Volcano island',
    entityType: 'location',
    gameVersion: '1.0.12',
    facts: { islandNumber: 5 },
    provenance: {
      sourceType: 'COMMUNITY_VERIFIED',
      sourceIds: ['g2a-island-guide', 'mobalytics-fish-list'],
      verifiedAt: '2026-09-16',
      confidence: 'high',
    },
  },
  {
    slug: 'island-6-casino',
    name: 'Island 6 — Casino island',
    entityType: 'location',
    gameVersion: '1.0.12',
    facts: { islandNumber: 6, notes: 'Roulette table location per official 1.0.11 patch notes; gachapon/Reel of Fortune per community reports.' },
    provenance: {
      sourceType: 'OFFICIAL',
      sourceIds: ['steam-patch-1.0.11', 'steam-drip-threads'],
      verifiedAt: '2026-09-16',
      confidence: 'high',
    },
  },
];

export const LOCATION_BY_SLUG: Record<string, LocationEntity> = Object.fromEntries(
  LOCATIONS.map((l) => [l.slug, l])
);
