/**
 * Adapter over the verified achievements data (src/data/game/achievements.ts).
 * Keeps the shape used by page components; facts live in the data layer.
 */
import { ACHIEVEMENTS as VERIFIED } from '@/src/data/game/achievements';

export interface Achievement {
  slug: string;
  name: string;
  description: string;
  globalPercent: number;
  icon: string;
}

// Source: Steam Community global achievement stats for app 4001890
// (OFFICIAL). Fetched 2026-08-26; percentages are global unlock rates at
// fetch time. See src/data/game/achievements.ts for provenance.
export const ACHIEVEMENTS: Achievement[] = VERIFIED.map((a) => ({
  slug: a.slug,
  name: a.name,
  description: a.facts.description,
  globalPercent: a.facts.globalPercent,
  icon: `/images/achievements/${a.slug}.jpg`,
}));
