/**
 * Single source of truth for How to Fish gameplay entities.
 * Pages must import from here (or from the lib/ adapters) — never
 * hand-write gameplay facts inside page components.
 */
export * from './types';
export * from './sources';
export * from './versions';
export * from './locations';
export * from './lures';
export * from './fish';
export * from './bosses';
export * from './npcs';
export * from './quests';
export * from './achievements';

import { BaseEntity } from './types';
import { FISH } from './fish';
import { BOSSES } from './bosses';
import { LURES } from './lures';
import { LOCATIONS } from './locations';
import { NPCS } from './npcs';
import { QUESTS } from './quests';
import { ACHIEVEMENTS } from './achievements';

export const ALL_ENTITIES: BaseEntity[] = [
  ...FISH,
  ...BOSSES,
  ...LURES,
  ...LOCATIONS,
  ...NPCS,
  ...QUESTS,
  ...ACHIEVEMENTS,
];

export const ENTITY_BY_SLUG: Record<string, BaseEntity> = Object.fromEntries(
  ALL_ENTITIES.map((e) => [e.slug, e])
);
