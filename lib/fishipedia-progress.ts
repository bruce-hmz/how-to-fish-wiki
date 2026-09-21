/**
 * Progress + filtering model behind the interactive Fishipedia checklist
 * (components/FishipediaChecklist.tsx).
 *
 * Pure and DOM-free on purpose: the component owns React state, this module
 * owns the rules, so the rules are testable without a browser.
 *
 * Two INDEPENDENT layers are tracked, because the verified data layer
 * documents two separate counters (src/data/game/fish.ts):
 *   `caught` — the regular creature (the Collector layer)
 *   `drip`   — the Drip variant of the same creature (the Fishipedia layer)
 * `DRIP_SYSTEM_FACTS` states a regular catch does not progress the drip
 * counter, so the two are never merged here. Neither value is ever claimed to
 * be the in-game achievement state — it only lives in this browser.
 *
 * Storage keys are VERSIONED and rows are keyed by the stable entity slug
 * from src/data/game/, never by array position, so a data-layer reshuffle can
 * never silently map an old tick onto a different creature. Slugs that no
 * longer exist in the data layer are dropped on read.
 */

export const PROGRESS_STORAGE_KEY = 'howtofish101:fishipedia:progress:v1';
export const PROGRESS_VERSION = 1;

/** The two independent collection layers the data layer documents. */
export type ProgressLayer = 'caught' | 'drip';

export type StatusFilter = 'all' | 'caught' | 'not-caught';

export interface ProgressState {
  /** Entity slugs whose regular version the player has recorded as caught. */
  caught: string[];
  /** Entity slugs whose Drip variant the player has recorded as caught. */
  drip: string[];
}

/** Minimal localStorage shape — lets tests inject a fake or a null storage. */
export interface StorageLike {
  getItem(key: string): string | null;
  setItem(key: string, value: string): void;
  removeItem(key: string): void;
}

export interface ProgressSummary {
  total: number;
  caught: number;
  drip: number;
  remaining: number;
}

export interface FishipediaFilterable {
  slug: string;
  name: string;
  islandNumber: number;
}

export interface FilterOptions {
  query: string;
  /** 'all' or a real island number derived from the data layer. */
  island: number | 'all';
  status: StatusFilter;
  /** Slugs ticked in the `caught` layer (drives the All/Not caught/Caught filter). */
  caught: Iterable<string>;
}

/** Frozen so a caller can never mutate the shared empty value. */
export const EMPTY_PROGRESS: ProgressState = Object.freeze({
  caught: Object.freeze([]) as unknown as string[],
  drip: Object.freeze([]) as unknown as string[],
});

function emptyProgress(): ProgressState {
  return { caught: [], drip: [] };
}

function toSlugArray(value: unknown, valid?: Set<string>): string[] {
  if (!Array.isArray(value)) return [];
  const out = new Set<string>();
  for (const item of value) {
    if (typeof item !== 'string' || item.length === 0) continue;
    if (valid && !valid.has(item)) continue;
    out.add(item);
  }
  return [...out].sort();
}

/**
 * Parse a raw localStorage payload. Anything unexpected (bad JSON, a future
 * schema version, wrong types) degrades to "no progress" rather than throwing
 * or guessing at a mapping.
 */
export function parseProgress(raw: string | null, validSlugs?: Iterable<string>): ProgressState {
  if (!raw) return emptyProgress();
  const valid = validSlugs ? new Set(validSlugs) : undefined;
  try {
    const parsed: unknown = JSON.parse(raw);
    if (!parsed || typeof parsed !== 'object' || Array.isArray(parsed)) return emptyProgress();
    const record = parsed as { v?: unknown; caught?: unknown; drip?: unknown };
    if (record.v !== PROGRESS_VERSION) return emptyProgress();
    return {
      caught: toSlugArray(record.caught, valid),
      drip: toSlugArray(record.drip, valid),
    };
  } catch {
    return emptyProgress();
  }
}

export function serializeProgress(state: ProgressState): string {
  return JSON.stringify({
    v: PROGRESS_VERSION,
    caught: [...new Set(state.caught)].sort(),
    drip: [...new Set(state.drip)].sort(),
  });
}

/**
 * Read progress from storage. A null/unavailable storage, a throwing
 * `getItem` (private mode, blocked storage) or a corrupt payload all resolve
 * to an empty state — the page keeps working, it just forgets.
 */
export function readProgress(storage: StorageLike | null, validSlugs?: Iterable<string>): ProgressState {
  if (!storage) return emptyProgress();
  try {
    return parseProgress(storage.getItem(PROGRESS_STORAGE_KEY), validSlugs);
  } catch {
    return emptyProgress();
  }
}

/** Persist progress. Returns false when storage is unavailable or full. */
export function writeProgress(storage: StorageLike | null, state: ProgressState): boolean {
  if (!storage) return false;
  try {
    storage.setItem(PROGRESS_STORAGE_KEY, serializeProgress(state));
    return true;
  } catch {
    return false;
  }
}

/** Remove ONLY this tool's key — never `localStorage.clear()`. */
export function clearProgress(storage: StorageLike | null): boolean {
  if (!storage) return false;
  try {
    storage.removeItem(PROGRESS_STORAGE_KEY);
    return true;
  } catch {
    return false;
  }
}

/** Immutably flip one layer for one creature. */
export function toggleProgress(state: ProgressState, layer: ProgressLayer, slug: string): ProgressState {
  const next = new Set(state[layer]);
  if (next.has(slug)) next.delete(slug);
  else next.add(slug);
  return { ...state, [layer]: [...next].sort() };
}

/**
 * Counts are always derived from the entries actually rendered, so a new
 * creature in the data layer changes the denominator automatically.
 */
export function computeProgress(
  entries: readonly { slug: string }[],
  state: ProgressState
): ProgressSummary {
  const known = new Set(entries.map((e) => e.slug));
  const total = entries.length;
  const caught = state.caught.filter((slug) => known.has(slug)).length;
  const drip = state.drip.filter((slug) => known.has(slug)).length;
  return { total, caught, drip, remaining: total - caught };
}

/** Island options come from the data layer — a future island appears for free. */
export function islandOptions(groups: readonly { islandNumber: number }[]): number[] {
  return [...new Set(groups.map((g) => g.islandNumber))].sort((a, b) => a - b);
}

/**
 * Search (case-insensitive name match) AND island AND caught-status, combined.
 * An empty query and 'all' filters return the input untouched.
 */
export function filterEntries<T extends FishipediaFilterable>(
  entries: readonly T[],
  options: FilterOptions
): T[] {
  const needle = options.query.trim().toLowerCase();
  const caught = new Set(options.caught);
  return entries.filter((entry) => {
    if (needle && !entry.name.toLowerCase().includes(needle)) return false;
    if (options.island !== 'all' && entry.islandNumber !== options.island) return false;
    if (options.status === 'caught' && !caught.has(entry.slug)) return false;
    if (options.status === 'not-caught' && caught.has(entry.slug)) return false;
    return true;
  });
}
