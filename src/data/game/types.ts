/**
 * Single source of truth for How to Fish gameplay facts.
 *
 * Rules (see docs/GAMEPLAY_FACT_AUDIT.md):
 *  - Every entity carries provenance. No fact without a source.
 *  - sourceType COMMUNITY_VERIFIED requires >= 2 independent community sources,
 *    or 1 high-trust source plus in-game proof.
 *  - confidence 'low' facts must never be rendered as certain on a page.
 *  - OFFICIAL > GAME_DATA > COMMUNITY_VERIFIED > UNVERIFIED. Conflicts between
 *    two community sources are recorded as DISPUTED in the fact note, never
 *    silently resolved.
 */

export type SourceType =
  | 'OFFICIAL'
  | 'GAME_DATA'
  | 'COMMUNITY_VERIFIED'
  | 'UNVERIFIED'
  | 'FALSE';

export type Confidence = 'high' | 'medium' | 'low';

export interface SourceRef {
  /** Stable id referenced by entity provenance. */
  id: string;
  name: string;
  url: string;
  kind: SourceType;
  /** When this source was last retrieved/checked by us (YYYY-MM-DD). */
  retrievedAt?: string;
}

export interface Provenance {
  sourceType: SourceType;
  /** Ids into the SOURCES registry in sources.ts. */
  sourceIds: string[];
  /** YYYY-MM-DD this fact was last verified. */
  verifiedAt: string;
  confidence: Confidence;
  /** Free-text caveat shown when the fact is less than certain. */
  note?: string;
}

export type EntityType =
  | 'fish'
  | 'boss'
  | 'lure'
  | 'bait'
  | 'location'
  | 'npc'
  | 'quest'
  | 'achievement';

export interface BaseEntity {
  slug: string;
  name: string;
  entityType: EntityType;
  /** Game version this entity's facts were last verified against. */
  gameVersion: string;
  provenance: Provenance;
  /** Alternate names players use (for search matching only). */
  aliases?: string[];
}

export interface FishEntity extends BaseEntity {
  entityType: 'fish';
  facts: {
    /** Location slug from locations.ts. */
    locationSlug: string;
    /** Lure/bait slugs from lures.ts that can catch this fish. */
    lureSlugs: string[];
    /** Sell value in dollars. Only set when a source recorded it. */
    sellValueUsd?: number;
    /** Where the sell value came from (source id) — required when set. */
    sellValueSourceId?: string;
    notes?: string;
  };
}

export interface BossEntity extends BaseEntity {
  entityType: 'boss';
  facts: {
    locationSlug: string;
    /** Item/lure/bait that summons or triggers the fight. */
    summon: string;
    /** What the kill unlocks, when documented. */
    unlocks?: string;
    notes?: string;
  };
}

export interface LureEntity extends BaseEntity {
  entityType: 'lure' | 'bait';
  facts: {
    /** Price when a source recorded one. */
    priceUsd?: number;
    priceSourceId?: string;
    /** Where it is obtained, when documented. */
    obtained?: string;
    notes?: string;
  };
}

export interface LocationEntity extends BaseEntity {
  entityType: 'location';
  facts: {
    /** 1-based island number; 0 for hub areas. */
    islandNumber: number;
    notes?: string;
  };
}

export interface NpcEntity extends BaseEntity {
  entityType: 'npc';
  facts: {
    locationSlug?: string;
    role?: string;
    notes?: string;
  };
}

export interface QuestEntity extends BaseEntity {
  entityType: 'quest';
  facts: {
    steps: string[];
    unlocks?: string;
    notes?: string;
  };
}

export interface AchievementEntity extends BaseEntity {
  entityType: 'achievement';
  facts: {
    description: string;
    /** Steam global unlock rate at fetch time, percent. */
    globalPercent: number;
    notes?: string;
  };
}
