/**
 * Fishipedia checklist adapter over the verified data layer (src/data/game/).
 *
 * The checklist is generated from FISH + BOSSES — there is no hand-written
 * creature list anywhere in the page. Add a verified creature to the data
 * layer and it appears here (and on the page) automatically.
 *
 * Scope note: both the catalog total (49) and the Fishipedia achievement's
 * requirement span the same 49 creatures, so no creature is excluded today.
 * If a future entity type should not count, exclude it HERE — and the
 * exclusion is enforced by tests/search-capture.test.mjs.
 */
import { FISH, BOSSES, ACHIEVEMENT_BY_SLUG, DRIP_SYSTEM_FACTS } from '@/src/data/game';
import type { AchievementEntity, BaseEntity, BossEntity } from '@/src/data/game';
import {
  getCatchMethod,
  getSummonerBoss,
  guideHref,
  islandNumber,
  locationLabel,
} from './entity-graph';

export type FishipediaKind = 'fish' | 'boss';

export interface FishipediaEntry {
  slug: string;
  name: string;
  kind: FishipediaKind;
  /** "Regular fish" | "Boss-class catch" */
  kindLabel: string;
  islandNumber: number;
  locationSlug: string;
  locationName: string;
  /** Compact catch method (lure/bait name, or the summon line for chains). */
  method: string;
  /** Full documented trigger text for the boss-class rows. */
  methodDetail?: string;
  /** True once the creature changes hands mid-chain (Tuna -> Albatross, etc.). */
  chainStep: boolean;
  /** Dedicated guide route, or null when no such page exists yet. */
  guideHref: string | null;
  /** Provenance caveat from the data layer (fact is less than certain). */
  caveat?: string;
  /** Longer source note from the data layer (shown as a tooltip). */
  detail?: string;
}

function entityFacts(entity: BaseEntity): { notes?: string } {
  return (entity as unknown as { facts: { notes?: string } }).facts;
}

function toEntry(entity: BaseEntity, kind: FishipediaKind): FishipediaEntry {
  const isBoss = kind === 'boss';
  const locationSlug = entity.entityType === 'fish' || entity.entityType === 'boss'
    ? (entity as unknown as { facts: { locationSlug: string } }).facts.locationSlug
    : '';
  return {
    slug: entity.slug,
    name: entity.name,
    kind,
    kindLabel: isBoss ? 'Boss-class catch' : 'Regular fish',
    islandNumber: islandNumber(locationSlug),
    locationSlug,
    locationName: locationLabel(locationSlug),
    method: getCatchMethod(entity),
    methodDetail: isBoss ? (entity as unknown as { facts: { summon: string } }).facts.summon : undefined,
    chainStep: isBoss && getSummonerBoss(entity as BossEntity) !== null,
    guideHref: guideHref(entity.slug),
    caveat: entity.provenance.note,
    detail: entityFacts(entity).notes,
  };
}

/** Every creature the Fishipedia achievement can be checked against. */
export function getFishipediaEntries(): FishipediaEntry[] {
  const fish = FISH.map((f) => toEntry(f, 'fish'));
  const bosses = BOSSES.map((b) => toEntry(b, 'boss'));
  return [...fish, ...bosses].sort(
    (a, b) => a.islandNumber - b.islandNumber || a.kind.localeCompare(b.kind) || a.name.localeCompare(b.name)
  );
}

export const FISHIPEDIA_ENTRIES: FishipediaEntry[] = getFishipediaEntries();

export interface FishipediaGroup {
  islandNumber: number;
  locationSlug: string;
  locationName: string;
  count: number;
  fishCount: number;
  bossCount: number;
  entries: FishipediaEntry[];
}

/** Checklist grouped by island, in progression order. */
export const FISHIPEDIA_GROUPS: FishipediaGroup[] = Object.values(
  FISHIPEDIA_ENTRIES.reduce<Record<string, FishipediaGroup>>((acc, entry) => {
    const key = entry.locationSlug;
    if (!acc[key]) {
      acc[key] = {
        islandNumber: entry.islandNumber,
        locationSlug: entry.locationSlug,
        locationName: entry.locationName,
        count: 0,
        fishCount: 0,
        bossCount: 0,
        entries: [],
      };
    }
    acc[key].entries.push(entry);
    acc[key].count += 1;
    if (entry.kind === 'fish') acc[key].fishCount += 1;
    else acc[key].bossCount += 1;
    return acc;
  }, {})
).sort((a, b) => a.islandNumber - b.islandNumber);

export function getFishipediaGroup(island: number): FishipediaGroup | undefined {
  return FISHIPEDIA_GROUPS.find((g) => g.islandNumber === island);
}

export const FISHIPEDIA_ACHIEVEMENT: AchievementEntity = ACHIEVEMENT_BY_SLUG['fishipedia'];
export const COLLECTOR_ACHIEVEMENT: AchievementEntity = ACHIEVEMENT_BY_SLUG['collector'];

export const FISHIPEDIA_TOTALS = {
  /** Rendered checklist rows — must equal FISH.length + BOSSES.length. */
  total: FISHIPEDIA_ENTRIES.length,
  fish: FISHIPEDIA_ENTRIES.filter((e) => e.kind === 'fish').length,
  boss: FISHIPEDIA_ENTRIES.filter((e) => e.kind === 'boss').length,
  /** Boss-class creatures that end a chain (summoned with another creature). */
  dripVariantCount: DRIP_SYSTEM_FACTS.dripVariantCount,
  catalogSize: DRIP_SYSTEM_FACTS.totalCatalogSize,
  dripRule: DRIP_SYSTEM_FACTS.rule,
  fishipediaAchievement: {
    name: FISHIPEDIA_ACHIEVEMENT.name,
    description: FISHIPEDIA_ACHIEVEMENT.facts.description,
    globalPercent: FISHIPEDIA_ACHIEVEMENT.facts.globalPercent,
    note: FISHIPEDIA_ACHIEVEMENT.facts.notes,
  },
  collectorAchievement: {
    name: COLLECTOR_ACHIEVEMENT.name,
    description: COLLECTOR_ACHIEVEMENT.facts.description,
    globalPercent: COLLECTOR_ACHIEVEMENT.facts.globalPercent,
  },
};
