'use client';

/**
 * Interactive Fishipedia checklist (search / island filter / caught filter /
 * per-creature ticks / localStorage progress).
 *
 * Progressive enhancement, not a client shell: this is a Client Component
 * rendered on the server too, so the initial HTML already contains every
 * creature row, its location/lure and its guide link. React only adds the
 * filtering and the tick state on top — with JS disabled the full checklist
 * is still readable, and the creature names/links never change.
 *
 * The creature list arrives as a prop straight from lib/fishipedia.ts
 * (which derives it from src/data/game/) — there is no second hardcoded list
 * anywhere in this file, and a new verified creature shows up automatically.
 */

import { useEffect, useMemo, useRef, useState } from 'react';
import Link from 'next/link';
import type { FishipediaEntry, FishipediaGroup } from '@/lib/fishipedia';
import {
  EMPTY_PROGRESS,
  clearProgress,
  computeProgress,
  filterEntries,
  islandOptions,
  readProgress,
  toggleProgress,
  writeProgress,
  type ProgressLayer,
  type ProgressState,
  type StatusFilter,
  type StorageLike,
} from '@/lib/fishipedia-progress';

/** localStorage access can throw (blocked storage, private mode) — never fatal. */
function browserStorage(): StorageLike | null {
  try {
    if (typeof window === 'undefined') return null;
    return window.localStorage ?? null;
  } catch {
    return null;
  }
}

const STATUS_OPTIONS: ReadonlyArray<{ value: StatusFilter; label: string }> = [
  { value: 'all', label: 'All' },
  { value: 'not-caught', label: 'Not caught' },
  { value: 'caught', label: 'Caught' },
];

function chipClass(active: boolean): string {
  return `px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap border transition-colors ${
    active
      ? 'bg-aqua text-ocean-950 border-aqua'
      : 'bg-ocean-950 text-gray-400 border-ocean-800 hover:text-white hover:border-aqua/50'
  }`;
}

function StatusToggle({
  id,
  label,
  checked,
  onToggle,
}: {
  id: string;
  label: string;
  checked: boolean;
  onToggle: () => void;
}) {
  return (
    <label
      htmlFor={id}
      className="inline-flex min-h-[44px] lg:min-h-0 lg:py-1 items-center gap-2 cursor-pointer select-none"
    >
      <input
        id={id}
        type="checkbox"
        checked={checked}
        onChange={onToggle}
        className="h-5 w-5 shrink-0 cursor-pointer rounded border border-ocean-600 bg-ocean-950 accent-aqua focus:outline-none focus-visible:ring-2 focus-visible:ring-aqua"
      />
      <span className="text-[11px] font-semibold text-gray-400">{label}</span>
    </label>
  );
}

function ChecklistRow({
  entry,
  caught,
  drip,
  onToggle,
}: {
  entry: FishipediaEntry;
  caught: boolean;
  drip: boolean;
  onToggle: (layer: ProgressLayer, slug: string) => void;
}) {
  return (
    <li className="px-3 sm:px-4 py-2.5 border-b border-ocean-800/50 last:border-0">
      <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-3">
        <div className="flex items-center gap-4 md:gap-3 md:w-[136px] md:shrink-0">
          <StatusToggle
            id={`fishipedia-caught-${entry.slug}`}
            label="Caught"
            checked={caught}
            onToggle={() => onToggle('caught', entry.slug)}
          />
          <StatusToggle
            id={`fishipedia-drip-${entry.slug}`}
            label="Drip"
            checked={drip}
            onToggle={() => onToggle('drip', entry.slug)}
          />
        </div>
        <div className="flex-1 min-w-0 grid grid-cols-1 md:grid-cols-12 gap-x-3 gap-y-0.5 items-baseline md:items-center">
          <div className="md:col-span-4 font-bold text-white text-sm leading-snug break-words">
            {entry.name}
            {entry.caveat ? (
              <span className="ml-1.5 text-[10px] text-gray-500 cursor-help align-middle" title={entry.caveat}>
                ⓘ
              </span>
            ) : null}
          </div>
          <div className="md:col-span-2 text-[11px] text-gray-500">
            {entry.kindLabel}
            {entry.chainStep ? ' · chain catch' : ''}
          </div>
          <div className="md:col-span-4 text-xs text-gray-300 leading-snug">
            {entry.method}
            {entry.methodDetail ? (
              <span className="ml-1.5 text-[10px] text-gray-500 cursor-help" title={entry.methodDetail}>
                ⓘ
              </span>
            ) : null}
          </div>
          <div className="md:col-span-2 text-xs">
            {entry.guideHref ? (
              <Link href={entry.guideHref} className="text-aqua hover:underline font-semibold">
                Guide →
              </Link>
            ) : (
              <span
                className="text-gray-600"
                title="No dedicated page yet — the location and catch method in this row are the full documented answer."
              >
                Guide unavailable
              </span>
            )}
          </div>
        </div>
      </div>
    </li>
  );
}

export default function FishipediaChecklist({
  groups,
  total,
}: {
  groups: FishipediaGroup[];
  total: number;
}) {
  const [query, setQuery] = useState('');
  const [island, setIsland] = useState<number | 'all'>('all');
  const [status, setStatus] = useState<StatusFilter>('all');
  const [progress, setProgress] = useState<ProgressState>(EMPTY_PROGRESS);
  const [restored, setRestored] = useState(false);
  const [confirmingReset, setConfirmingReset] = useState(false);

  const allEntries = useMemo(() => groups.flatMap((g) => g.entries), [groups]);
  const allSlugs = useMemo(() => allEntries.map((e) => e.slug), [allEntries]);
  const islands = useMemo(() => islandOptions(groups), [groups]);

  // Restore once, after mount: the first client render matches the server HTML
  // (nothing ticked, full list) so hydration is never mismatched.
  const restoredRef = useRef(false);
  useEffect(() => {
    if (restoredRef.current) return;
    restoredRef.current = true;
    setProgress(readProgress(browserStorage(), allSlugs));
    setRestored(true);
  }, [allSlugs]);

  // Persist after restore so an unreadable storage never wipes saved state.
  useEffect(() => {
    if (!restored) return;
    writeProgress(browserStorage(), progress);
  }, [progress, restored]);

  const caughtSet = useMemo(() => new Set(progress.caught), [progress.caught]);
  const summary = useMemo(() => computeProgress(allEntries, progress), [allEntries, progress]);
  const percent = summary.total > 0 ? Math.round((summary.caught / summary.total) * 100) : 0;

  const visibleGroups = useMemo(
    () =>
      groups
        .map((group) => ({
          ...group,
          entries: filterEntries(group.entries, { query, island, status, caught: caughtSet }),
        }))
        .filter((group) => group.entries.length > 0),
    [groups, query, island, status, caughtSet]
  );

  const visibleCount = visibleGroups.reduce((sum, g) => sum + g.entries.length, 0);
  const filtering = query.trim() !== '' || island !== 'all' || status !== 'all';

  function handleToggle(layer: ProgressLayer, slug: string) {
    setProgress((current) => toggleProgress(current, layer, slug));
  }

  function handleReset() {
    clearProgress(browserStorage());
    setProgress(EMPTY_PROGRESS);
    setConfirmingReset(false);
  }

  const savedTicks = progress.caught.length + progress.drip.length;

  return (
    <div className="space-y-4">
      {/* ---- controls + progress ---- */}
      <div className="bg-ocean-900/80 border border-ocean-800 rounded-xl p-4 sm:p-5 space-y-4">
        <div className="flex flex-wrap items-start justify-between gap-x-4 gap-y-3">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs" aria-live="polite">
            <span className="text-gray-400">
              Caught: <strong className="text-white">{summary.caught} / {summary.total}</strong>
            </span>
            <span className="text-gray-400">
              Drip caught: <strong className="text-white">{summary.drip} / {summary.total}</strong>
            </span>
            <span className="text-gray-400">
              Remaining: <strong className="text-white">{summary.remaining}</strong>
            </span>
          </div>
          {confirmingReset ? (
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-[11px] text-gray-400">Erase all ticks saved in this browser?</span>
              <button
                type="button"
                onClick={handleReset}
                className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-coral/20 border border-coral/50 text-coral-light hover:bg-coral/30 transition-colors"
              >
                Yes, reset
              </button>
              <button
                type="button"
                onClick={() => setConfirmingReset(false)}
                className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-ocean-950 border border-ocean-800 text-gray-400 hover:text-white transition-colors"
              >
                Cancel
              </button>
            </div>
          ) : (
            <button
              type="button"
              onClick={() => setConfirmingReset(true)}
              disabled={savedTicks === 0}
              className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-ocean-950 border border-ocean-800 text-gray-400 hover:text-white transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
            >
              Reset progress
            </button>
          )}
        </div>

        <div className="h-2 w-full rounded-full bg-ocean-950 overflow-hidden">
          <div
            className="h-full bg-aqua transition-all"
            style={{ width: `${percent}%` }}
            role="progressbar"
            aria-valuenow={summary.caught}
            aria-valuemin={0}
            aria-valuemax={summary.total}
            aria-label="Regular creatures recorded as caught"
          />
        </div>

        <p className="text-[11px] text-gray-500 leading-relaxed">
          Your ticks are saved in this browser only (<code className="text-gray-400">localStorage</code>) — they
          are never uploaded, never synced across devices, and they do not touch your game save. These counters
          are your own notes, not the in-game Collector or Fishipedia achievement progress. The two layers are
          tracked separately because the game tracks them separately: a regular catch does not fill the Drip
          entry, and vice versa.
        </p>

        <div className="space-y-3">
          <div>
            <label htmlFor="fishipedia-search" className="sr-only">
              Search creatures
            </label>
            <input
              id="fishipedia-search"
              type="search"
              inputMode="search"
              autoComplete="off"
              placeholder="Search creatures..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full bg-ocean-950 border border-ocean-700 text-white rounded-lg px-4 py-2.5 text-sm placeholder:text-gray-500 focus:outline-none focus:border-aqua"
            />
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <span className="text-[10px] uppercase tracking-wider text-gray-500 w-full sm:w-auto">Island</span>
            <button
              type="button"
              onClick={() => setIsland('all')}
              aria-pressed={island === 'all'}
              className={chipClass(island === 'all')}
            >
              All Islands
            </button>
            {islands.map((n) => (
              <button
                key={n}
                type="button"
                onClick={() => setIsland(n)}
                aria-pressed={island === n}
                className={chipClass(island === n)}
              >
                Island {n}
              </button>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <span className="text-[10px] uppercase tracking-wider text-gray-500 w-full sm:w-auto">Status</span>
            {STATUS_OPTIONS.map((option) => (
              <button
                key={option.value}
                type="button"
                onClick={() => setStatus(option.value)}
                aria-pressed={status === option.value}
                className={chipClass(status === option.value)}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ---- results ---- */}
      {filtering ? (
        <p className="text-xs text-gray-400" aria-live="polite">
          Showing {visibleCount} of {total} creatures
          {island !== 'all' ? ` · Island ${island}` : ''}
          {status === 'not-caught' ? ' · not caught' : ''}
          {status === 'caught' ? ' · caught' : ''}
          {query.trim() ? ` · matching “${query.trim()}”` : ''}.
        </p>
      ) : (
        <p className="text-xs text-gray-400" aria-live="polite">
          Showing all {total} creatures.
        </p>
      )}

      {visibleGroups.length === 0 ? (
        <div className="bg-ocean-900/80 border border-ocean-800 rounded-xl p-6 text-sm text-gray-400">
          No creature matches those filters. Clear the search box or switch the island/status filters back to
          All.
        </div>
      ) : (
        <>
          <nav className="flex flex-wrap gap-2 text-xs" aria-label="Jump to island">
            {visibleGroups.map((group) => (
              <a
                key={group.locationSlug}
                href={`#island-${group.islandNumber}`}
                className="bg-ocean-900 border border-ocean-800 hover:border-aqua/50 hover:text-aqua transition-colors text-gray-300 px-3 py-1.5 rounded-lg"
              >
                Island {group.islandNumber} ({group.entries.length})
              </a>
            ))}
          </nav>

          <div className="space-y-6">
            {visibleGroups.map((group) => (
              <div
                key={group.locationSlug}
                className="bg-ocean-900/80 border border-ocean-800 rounded-xl overflow-hidden"
              >
                <h3
                  id={`island-${group.islandNumber}`}
                  className="px-4 py-3 bg-ocean-950 text-white font-bold text-sm border-b border-ocean-800 flex flex-wrap items-baseline gap-x-2"
                >
                  <span>
                    Island {group.islandNumber} —{' '}
                    {group.locationName.replace(`Island ${group.islandNumber} — `, '')}
                  </span>
                  <span className="text-[11px] font-normal text-gray-500">
                    {group.entries.length} creatures ·{' '}
                    {group.entries.filter((e) => e.kind === 'fish').length} fish ·{' '}
                    {group.entries.filter((e) => e.kind === 'boss').length} boss-class
                  </span>
                </h3>
                <ul>
                  <li className="hidden md:grid grid-cols-12 gap-3 px-4 py-2 text-[10px] uppercase tracking-wider text-gray-500 border-b border-ocean-800/50">
                    <span className="col-span-4">Creature</span>
                    <span className="col-span-2">Type</span>
                    <span className="col-span-4">Location / Lure or summon</span>
                    <span className="col-span-2">Guide</span>
                  </li>
                  {group.entries.map((entry) => (
                    <ChecklistRow
                      key={entry.slug}
                      entry={entry}
                      caught={caughtSet.has(entry.slug)}
                      drip={progress.drip.includes(entry.slug)}
                      onToggle={handleToggle}
                    />
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
