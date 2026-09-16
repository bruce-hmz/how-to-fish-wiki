import { FishEntity } from './types';

/**
 * Verified fish/creature catalog — 38 regular entries. Together with the 11
 * boss-class catches in bosses.ts this matches the 49-species community
 * catalog total (G2A/Mobalytics both count 49).
 *
 * Location + lure for every row is cross-verified against BOTH structure
 * sources (G2A island guide, retrieved 2026-09-16; Mobalytics lure table,
 * retrieved 2026-09-16). Sell values are IGN-table values (single source)
 * and are marked as such — treat them as indicative, not exact.
 *
 * AUDIT REMOVALS (2026-09-16): Striped Bass, Electric Eel, Ghost Manta,
 * Kraken Spawn, and Golden Tuna existed in no external source and were
 * deleted. "Bass" and "Eel" are the real island-4 Professional Lure catches.
 * The previous weather/time-of-day column was removed entirely: neither
 * structure source documents a weather or day/night spawn system, and the
 * research corpus (INT-024) shows players requesting day/night + weather
 * as a FUTURE feature — i.e. it does not exist in 1.0.12.
 */
const V = '1.0.12';
const D = '2026-09-16';
const STRUCTURE = {
  sourceType: 'COMMUNITY_VERIFIED' as const,
  sourceIds: ['g2a-island-guide', 'mobalytics-fish-list'],
  verifiedAt: D,
  confidence: 'high' as const,
};

function fish(
  slug: string,
  name: string,
  locationSlug: string,
  lureSlugs: string[],
  extra?: Partial<FishEntity['facts']> & { aliases?: string[]; note?: string }
): FishEntity {
  const { aliases, note, ...facts } = extra ?? {};
  // All recorded sell values in this catalog trace to the IGN fish table.
  const sellValueSourceId =
    facts.sellValueUsd !== undefined ? (facts.sellValueSourceId ?? 'ign-all-fish') : undefined;
  return {
    slug,
    name,
    entityType: 'fish',
    gameVersion: V,
    aliases,
    facts: { locationSlug, lureSlugs, sellValueSourceId, ...facts },
    provenance: note
      ? { ...STRUCTURE, note }
      : STRUCTURE,
  };
}

export const FISH: FishEntity[] = [
  // ---- Island 1 — Lighthouse ----
  fish('brown-crab', 'Brown Crab', 'island-1-lighthouse', ['free-lure'], {
    note: 'Punch with knuckles to collect meat (community-documented starter loop).',
  }),
  fish('shrimp', 'Shrimp', 'island-1-lighthouse', ['free-lure'], {
    aliases: ['coastal shrimp'],
  }),
  fish('rock-crab', 'Rock Crab', 'island-1-lighthouse', ['hot-dog'], {
    sellValueUsd: 7,
    note: 'Hot Dog bait on the Crab Rod (both 2026-09-16 sources agree; resolves the older Free-Lure conflict). $7 sell value single-source (IGN).',
  }),
  fish('lobster', 'Lobster', 'island-1-lighthouse', ['hot-dog'], {
    sellValueUsd: 9,
    note: 'Hot Dog bait on the Crab Rod (both sources agree). $9 sell value single-source (IGN).',
  }),

  // ---- Island 2 — Forest ----
  fish('mackerel', 'Mackerel', 'island-2-forest', ['free-lure'], {
    sellValueUsd: 6,
    note: 'Free Lure on the Fishing Rod — matches IGN\'s "Fishing Rod catch, $6". Resolves the old bait-method conflict.',
  }),
  fish('gar', 'Gar', 'island-2-forest', ['free-lure'], {
    sellValueUsd: 5,
    note: 'Free Lure on the Fishing Rod; IGN agrees ("Fishing Rod, $5").',
  }),
  fish('pike', 'Pike', 'island-2-forest', ['free-lure', 'beginner-lure'], {
    note: 'Catchable with both the Free Lure (Fishing Rod) and the Beginner Lure per the two structure sources.',
  }),
  fish('goldfish', 'Goldfish', 'island-2-forest', ['free-lure', 'beginner-lure'], {
    note: 'Listed under both the Free Lure (Fishing Rod) and the Beginner Lure. The Drip Goldfish variant is community-sighted behind the island 2–3 drip slot machine.',
  }),
  fish('piranha', 'Piranha', 'island-2-forest', ['hot-dog', 'beginner-lure'], {
    sellValueUsd: 4,
    note: 'Hot Dog on the Fishing Rod (G2A + Mobalytics) and Beginner Lure (Mobalytics + IGN). Rebalanced in official patch 1.0.12. $4 value single-source (IGN).',
  }),
  fish('cod', 'Cod', 'island-2-forest', ['beginner-lure']),
  fish('goby', 'Goby', 'island-2-forest', ['beginner-lure'], {
    note: 'Added in the 2026-09-16 audit — present in both structure sources but previously missing from the site database. The Drip Goby has no reliable public catch report yet.',
  }),
  fish('perch', 'Perch', 'island-2-forest', ['beginner-lure'], {
    note: 'The special perch variant is frequently reported as the last missing Collector checklist entry; no verified acquisition method.',
  }),
  fish('triggerfish', 'Triggerfish', 'island-2-forest', ['beginner-lure'], {
    sellValueUsd: 18,
    note: '$18 sell value single-source (IGN).',
  }),

  // ---- Island 3 — Desert ----
  fish('angelfish', 'Angelfish', 'island-3-desert', ['standard-lure'], {
    note: 'Previously mis-filed under the retired "Coral Maze Lagoon" name; island 3 is the desert island.',
  }),
  fish('boxfish', 'Boxfish', 'island-3-desert', ['standard-lure']),
  fish('bowlfish', 'Bowlfish', 'island-3-desert', ['standard-lure'], {
    note: 'Single-structure-source naming (Mobalytics lists both Boxfish and Bowlfish; G2A lists only Boxfish) — pending in-game confirmation that they are distinct species.',
  }),
  fish('catfish', 'Catfish', 'island-3-desert', ['standard-lure']),
  fish('sea-urchin', 'Sea Urchin', 'island-3-desert', ['standard-lure']),
  fish('seahorse', 'Seahorse', 'island-3-desert', ['standard-lure'], {
    note: 'The Drip Seahorse is reported as pure RNG (single island-3 sighting).',
  }),
  fish('clownfish', 'Clownfish', 'island-3-desert', ['standard-lure']),
  fish('salmon', 'Salmon', 'island-3-desert', ['standard-lure']),
  fish('needlefish', 'Needlefish', 'island-3-desert', ['standard-lure']),
  fish('bluegill', 'Bluegill', 'island-3-desert', ['standard-lure'], {
    note: 'CORRECTED 2026-09-16: previously listed as a starter-zone Worm-bait catch with a "Clear weather" window — fabricated. Real location: island 3, Standard Lure.',
  }),

  // ---- Island 4 — Sky (Rocks) ----
  fish('bass', 'Bass', 'island-4-sky', ['professional-lure'], {
    note: 'CORRECTED 2026-09-16: the previous "Striped Bass / foggy open water" entry was fabricated. The real catch is "Bass", Professional Lure, island 4.',
  }),
  fish('eel', 'Eel', 'island-4-sky', ['professional-lure'], {
    sellValueUsd: 280,
    note: 'CORRECTED 2026-09-16: the previous "Electric Eel / sunken shipwreck / night-only" entry was fabricated. Real catch: "Eel", Professional Lure, island 4. $280 value single-source (IGN).',
  }),
  fish('red-snapper', 'Red Snapper', 'island-4-sky', ['professional-lure'], {
    note: 'CORRECTED 2026-09-16: previously listed as a coral-reef Hot Dog catch — fabricated. Real location: island 4, Professional Lure.',
  }),
  fish('sengarat', 'Sengarat', 'island-4-sky', ['professional-lure'], {
    sellValueUsd: 280,
  }),
  fish('halibut', 'Halibut', 'island-4-sky', ['professional-lure'], {
    sellValueUsd: 290,
  }),
  fish('tigerfish', 'Tigerfish', 'island-4-sky', ['professional-lure'], {
    sellValueUsd: 310,
  }),
  fish('flying-fish', 'Flying Fish', 'island-4-sky', ['professional-lure'], {
    sellValueUsd: 320,
  }),
  fish('voxelfish', 'Voxelfish', 'island-4-sky', ['professional-lure'], {
    sellValueUsd: 340,
    note: 'IGN lists it as Endangered-tier. The Drip Voxelfish is the best-documented rare drip catch (Steam threads confirm it exists and is heavy RNG).',
  }),
  fish('parrotfish', 'Parrotfish', 'island-4-sky', ['professional-lure'], {
    sellValueUsd: 350,
    note: 'The drip parrotfish cookability was fixed in official patch 1.0.11.',
  }),
  fish('dripper', 'Dripper', 'island-4-sky', ['professional-lure'], {
    note: 'Added in the 2026-09-16 audit. Real catch documented by G2A + Mobalytics and by the Steam "Drip Dripper" grind thread (150+ professional lures). Replaces the fabricated "Drip Fish — volcano vent, Beer lure, thunderstorm" row; note this is the regular Dripper — drip VARIANT hunting is a separate system.',
  }),

  // ---- Island 5 — Volcano ----
  fish('anglerfish', 'Anglerfish', 'island-5-volcano', ['scientific-lure'], {
    note: 'Nerfed in official patch 1.0.10 ("too annoying with a lot of health").',
  }),
  fish('blobfish', 'Blobfish', 'island-5-volcano', ['scientific-lure']),
  fish('oarfish', 'Oarfish', 'island-5-volcano', ['scientific-lure']),
  fish('stonefish', 'Stonefish', 'island-5-volcano', ['scientific-lure']),
  fish('superdwarf-fish', 'Superdwarf Fish', 'island-5-volcano', ['scientific-lure'], {
    sellValueUsd: 1700,
    note: 'Highest documented sell value in the catalog; IGN lists it as Endangered-tier. $1,700 value single-source (IGN).',
  }),
];

export const FISH_BY_SLUG: Record<string, FishEntity> = Object.fromEntries(
  FISH.map((f) => [f.slug, f])
);

/** System-level drip facts (not per-species). */
export const DRIP_SYSTEM_FACTS = {
  totalCatalogSize: 49,
  dripVariantCount: 49,
  rule: 'Every creature has a Drip variant; drip variants are caught with the same lure as their normal version — there is no separate drip lure.',
  trackedBy: 'Fishipedia achievement ("Find and kill all drip creatures", 1.4% global unlock)',
  provenance: {
    sourceType: 'COMMUNITY_VERIFIED' as const,
    sourceIds: ['mobalytics-fish-list', 'steam-drip-threads', 'steam-achievements'],
    verifiedAt: D,
    confidence: 'high',
  },
};
