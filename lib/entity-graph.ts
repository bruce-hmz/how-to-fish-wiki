/**
 * Entity-graph adapter over the verified data layer (src/data/game/).
 *
 * Relations here are DERIVED from entity data — a lure mentioned inside a
 * boss `summon` string, or an entity named inside a quest chain — never
 * hand-written gameplay facts. `GUIDE_ROUTES` only lists pages that already
 * exist; a missing route renders as "no dedicated guide" instead of a link.
 */
import {
  FISH,
  BOSSES,
  LURES,
  QUESTS,
  LOCATION_BY_SLUG,
  LURE_BY_SLUG,
  SOURCE_BY_ID,
  BOSS_BY_SLUG,
} from '@/src/data/game';
import type {
  BaseEntity,
  BossEntity,
  FishEntity,
  LureEntity,
  LocationEntity,
  QuestEntity,
  SourceRef,
} from '@/src/data/game';

/** Dedicated per-creature guide pages that exist today, keyed by entity slug. */
export const GUIDE_ROUTES: Record<string, string> = {
  'spider-crab': '/bosses/spider-crab/',
  'giant-piranha': '/bosses/giant-piranha/',
  pufferfish: '/bosses/pufferfish/',
  albatross: '/bosses/albatross/',
  // Entity renamed in the 2026-09-16 audit; page kept at its original URL
  // for link equity (see BOSS_URL_ALIASES in src/data/game/bosses.ts).
  'mutated-bowhead-whale': '/bosses/magma-whale/',
  'old-pike': '/bosses/old-pike/',
  'bowhead-whale': '/bosses/bowhead-whale/',
  triggerfish: '/fish/triggerfish/',
};

export function guideHref(slug: string): string | null {
  return GUIDE_ROUTES[slug] ?? null;
}

/** Raw location label from the data layer (no string mangling). */
export function locationLabel(slug: string): string {
  const loc: LocationEntity | undefined = LOCATION_BY_SLUG[slug];
  if (!loc) throw new Error(`Unknown location slug: ${slug}`);
  return loc.name;
}

export function islandNumber(slug: string): number {
  const loc: LocationEntity | undefined = LOCATION_BY_SLUG[slug];
  if (!loc) throw new Error(`Unknown location slug: ${slug}`);
  return loc.facts.islandNumber;
}

/** Lure/bait display names for a list of lure slugs. */
export function lureNames(slugs: string[]): string[] {
  return slugs.map((s) => {
    const lure: LureEntity | undefined = LURE_BY_SLUG[s];
    if (!lure) throw new Error(`Unknown lure slug: ${s}`);
    return lure.name;
  });
}

/** "Hot Dog (bait)" -> "Hot Dog" — the name as it appears inside prose. */
export function lureBaseName(name: string): string {
  return name.replace(/\s*\([^)]*\)\s*$/, '').trim();
}

/** "The Old Pike" -> "The Old Pike"; strips a trailing parenthetical only. */
export function entityBaseName(name: string): string {
  return name.replace(/\s*\([^)]*\)\s*$/, '').trim();
}

function mentions(haystack: string, needle: string): boolean {
  if (!needle) return false;
  const escaped = needle.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  return new RegExp(`(^|[^A-Za-z0-9])${escaped}([^A-Za-z0-9]|$)`).test(haystack);
}

/**
 * Boss-class entities name their trigger item in `facts.summon`. Matching
 * registered lure/bait names against that string derives the Boss -> Lure
 * relation without duplicating any fact.
 */
export function getBossLures(boss: BossEntity): LureEntity[] {
  const summon = boss.facts.summon;
  return LURES.filter((l) => mentions(summon, lureBaseName(l.name)));
}

/** The lure/bait needed to catch a creature (fish: explicit refs, boss: derived). */
export function getEntityLures(entity: BaseEntity): LureEntity[] {
  if (entity.entityType === 'fish') {
    const fish = entity as FishEntity;
    return fish.facts.lureSlugs.map((s) => {
      const lure = LURE_BY_SLUG[s];
      if (!lure) throw new Error(`${entity.slug}: unknown lure ${s}`);
      return lure;
    });
  }
  if (entity.entityType === 'boss') return getBossLures(entity as BossEntity);
  return [];
}

/** Short "how to catch it" label: the trigger lure name, else the summon text. */
export function getCatchMethod(entity: BaseEntity): string {
  if (entity.entityType === 'fish') {
    return lureNames((entity as FishEntity).facts.lureSlugs).join(' + ');
  }
  if (entity.entityType === 'boss') {
    const boss = entity as BossEntity;
    const lures = getBossLures(boss);
    return lures.length > 0 ? lureNames(lures.map((l) => l.slug)).join(' + ') : boss.facts.summon;
  }
  return '';
}

/** Lures/baits whose summon text names this creature — i.e. this bait hooks it. */
export function getBossesSummonedByLure(lureSlug: string): BossEntity[] {
  const lure = LURE_BY_SLUG[lureSlug];
  if (!lure) throw new Error(`Unknown lure slug: ${lureSlug}`);
  const name = lureBaseName(lure.name);
  return BOSSES.filter((b) => mentions(b.facts.summon, name));
}

/** Bosses whose summon is this creature (the chain step this catch unlocks). */
export function getBossesUnlockedBy(entity: BaseEntity): BossEntity[] {
  const name = entityBaseName(entity.name);
  return BOSSES.filter((b) => b.slug !== entity.slug && mentions(b.facts.summon, name));
}

/**
 * The creature used as bait to summon this boss, when the chain is
 * creature -> creature (e.g. Bowhead Whale -> Mutated Bowhead Whale).
 * Only counts when the sources describe the summon as bait — the word
 * "bait" must appear in the summon line — so shared-lure-pool mentions
 * (e.g. the Sunfish inside the Old Pike's summon note) do not match.
 */
export function getSummonerBoss(boss: BossEntity): BossEntity | null {
  const summon = boss.facts.summon;
  if (!/bait/i.test(summon)) return null;
  return (
    BOSSES.find((b) => b.slug !== boss.slug && mentions(summon, entityBaseName(b.name))) ?? null
  );
}

/**
 * Quest chains that gate this creature.
 *
 * Matching is against the quest TITLE only (titles are written to name the
 * gated boss, e.g. "Three Leeches → Modified Leech → Giant Piranha → Island
 * 3"); steps/prose are not matched, so contextual mentions (e.g. the Goblin
 * Shark named as a "parallel catch" inside the final-boss quest) do not
 * produce false relations. The last-two-words variant absorbs naming
 * differences like "Giant Spider Crab" vs "Spider Crab".
 */
export function getRelatedQuests(entity: BaseEntity): QuestEntity[] {
  const tokens = [entity.name, ...(entity.aliases ?? [])].flatMap((name) => {
    const base = entityBaseName(name);
    const words = base.split(/\s+/).filter(Boolean);
    return words.length >= 2 ? [base, words.slice(-2).join(' ')] : [base];
  });
  return QUESTS.filter((q) => tokens.some((t) => mentions(q.name, t)));
}

/** A creature's page title suffix for the boss hub, e.g. "Mini-boss". */
export function getBossRoleLabel(boss: BossEntity): string {
  return boss.facts.unlocks ? 'Story boss' : 'Mini-boss / boss-class catch';
}

export function getBoss(slug: string): BossEntity {
  const boss = BOSS_BY_SLUG[slug];
  if (!boss) throw new Error(`Unknown boss slug: ${slug}`);
  return boss;
}

export function getFish(slug: string): FishEntity {
  const fish = FISH.find((f) => f.slug === slug);
  if (!fish) throw new Error(`Unknown fish slug: ${slug}`);
  return fish;
}

/**
 * Source registry entries backing the entities used on a page, in provenance
 * order and de-duplicated. Pages render this so the cited sources can never
 * drift from the entities' `sourceIds`.
 */
export function sourcesFor(entities: BaseEntity[]): SourceRef[] {
  const seen = new Set<string>();
  const out: SourceRef[] = [];
  for (const entity of entities) {
    for (const id of entity.provenance.sourceIds) {
      if (seen.has(id)) continue;
      const source = SOURCE_BY_ID[id];
      if (!source) throw new Error(`${entity.slug}: unknown source id ${id}`);
      seen.add(id);
      out.push(source);
    }
  }
  return out;
}

/** Latest `verifiedAt` date across entities — the page's freshness stamp. */
export function lastVerified(entities: BaseEntity[]): string {
  return entities
    .map((e) => e.provenance.verifiedAt)
    .sort()
    .at(-1) as string;
}
