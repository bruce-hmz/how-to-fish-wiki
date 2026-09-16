/**
 * Adapter over the verified game data layer (src/data/game/).
 * Gameplay facts live ONLY in the data layer — do not add facts here.
 */
import {
  FISH,
  BOSSES,
  LURES,
  LOCATION_BY_SLUG,
  LURE_BY_SLUG,
  DRIP_SYSTEM_FACTS,
  CURRENT_GAME_VERSION,
} from '@/src/data/game';

export { DRIP_SYSTEM_FACTS, CURRENT_GAME_VERSION };

export interface FishItem {
  id: string;
  name: string;
  island: string;
  bait: string;
  value: number;
  /** True when a source recorded a sell value (IGN table). */
  valueDocumented: boolean;
  /** Provenance note rendered in the table. */
  note?: string;
}

export interface BossInfo {
  id: string;
  name: string;
  location: string;
  summonBait: string;
  unlocks: string;
  note: string;
}

export const GAME_INFO = {
  name: 'How to Fish',
  developer: 'Dazed Games',
  publisher: 'Dazed Games',
  releaseDate: 'August 20, 2026',
  steamAppId: '4001890',
  steamUrl: 'https://store.steampowered.com/app/4001890/How_to_Fish/',
  genre: '1-4 Player Physics Fishing Simulator',
  peakPlayers: '373,971 Peak Concurrent Players (Aug 26, SteamDB)',
  description:
    'A 1-4 player physics-based fishing simulator. After a boat crash on a mysterious archipelago, survive, master casting, battle gigantic marine bosses, and find your way home.',
};

function locationName(slug: string): string {
  const loc = LOCATION_BY_SLUG[slug];
  if (!loc) throw new Error(`Unknown location slug: ${slug}`);
  return loc.name.replace(' — ', ' (') + (loc.name.includes(' — ') ? ')' : '');
}

function lureNames(slugs: string[]): string {
  const names = slugs.map((s) => {
    const lure = LURE_BY_SLUG[s];
    if (!lure) throw new Error(`Unknown lure slug: ${s}`);
    return lure.name;
  });
  return names.join(' / ');
}

export const FISH_DATABASE: FishItem[] = FISH.map((f) => ({
  id: f.slug,
  name: f.name,
  island: locationName(f.facts.locationSlug),
  bait: lureNames(f.facts.lureSlugs),
  value: f.facts.sellValueUsd ?? 0,
  valueDocumented: f.facts.sellValueUsd !== undefined,
  note: f.provenance.note,
}));

export const BOSSES_DATABASE: BossInfo[] = BOSSES.map((b) => ({
  id: b.slug,
  name: b.name,
  location: locationName(b.facts.locationSlug),
  summonBait: b.facts.summon,
  unlocks: b.facts.unlocks ?? '—',
  note: [b.facts.notes, b.provenance.note].filter(Boolean).join(' ') || '',
}));

/** Verified lure price list for the /lures/ page. */
export const LURE_DATABASE = LURES.map((l) => ({
  id: l.slug,
  name: l.name,
  price: l.facts.priceUsd,
  priceDocumented: l.facts.priceUsd !== undefined,
  obtained: l.facts.obtained ?? '',
  note: l.facts.notes ?? '',
}));
