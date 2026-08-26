'use client';

import { useEffect, useMemo, useState } from 'react';
import { ACHIEVEMENTS } from '@/lib/achievements';

const STORAGE_KEY = 'htf101-achievements';

function rarityOf(pct: number): { label: string; className: string } {
  if (pct >= 80) return { label: 'Very common', className: 'text-green-400 border-green-500/40 bg-green-500/10' };
  if (pct >= 50) return { label: 'Common', className: 'text-aqua border-aqua/40 bg-aqua/10' };
  if (pct >= 25) return { label: 'Uncommon', className: 'text-yellow-400 border-yellow-500/40 bg-yellow-500/10' };
  if (pct >= 10) return { label: 'Rare', className: 'text-orange-400 border-orange-500/40 bg-orange-500/10' };
  return { label: 'Very rare', className: 'text-red-400 border-red-500/40 bg-red-500/10' };
}

export default function AchievementChecklist() {
  const [unlocked, setUnlocked] = useState<Set<string>>(new Set());
  const [hideUnlocked, setHideUnlocked] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) setUnlocked(new Set(JSON.parse(saved)));
    } catch {
      // corrupt or unavailable storage — start clean
    }
    setLoaded(true);
  }, []);

  const persist = (next: Set<string>) => {
    setUnlocked(next);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify([...next]));
    } catch {
      // storage unavailable (private mode) — keep in-memory only
    }
  };

  const toggle = (slug: string) => {
    const next = new Set(unlocked);
    if (next.has(slug)) next.delete(slug);
    else next.add(slug);
    persist(next);
  };

  const shown = useMemo(
    () => (hideUnlocked ? ACHIEVEMENTS.filter((a) => !unlocked.has(a.slug)) : ACHIEVEMENTS),
    [hideUnlocked, unlocked]
  );

  const done = unlocked.size;
  const pct = Math.round((done / ACHIEVEMENTS.length) * 100);

  return (
    <div className="space-y-6">
      <div className="bg-ocean-900/80 border border-ocean-800 rounded-xl p-6 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-white font-bold text-lg">
              {loaded ? done : '—'} / {ACHIEVEMENTS.length} unlocked
            </p>
            <p className="text-xs text-gray-400">Your checklist is saved in this browser only — no account needed.</p>
          </div>
          <label className="flex items-center gap-2 text-xs text-gray-300 cursor-pointer select-none">
            <input
              type="checkbox"
              checked={hideUnlocked}
              onChange={(e) => setHideUnlocked(e.target.checked)}
              className="accent-cyan-400 w-4 h-4"
            />
            Hide unlocked
          </label>
        </div>
        <div className="h-2.5 bg-ocean-950 rounded-full overflow-hidden border border-ocean-800">
          <div className="h-full bg-gradient-to-r from-aqua to-gold transition-all duration-500" style={{ width: (loaded ? pct : 0) + '%' }} />
        </div>
      </div>

      <ul className="space-y-3">
        {shown.map((a) => {
          const isUnlocked = unlocked.has(a.slug);
          const rarity = rarityOf(a.globalPercent);
          return (
            <li key={a.slug}>
              <button
                type="button"
                onClick={() => toggle(a.slug)}
                aria-pressed={isUnlocked}
                className={
                  'w-full flex items-start gap-4 text-left p-4 rounded-xl border transition-all ' +
                  (isUnlocked
                    ? 'bg-aqua/10 border-aqua/50'
                    : 'bg-ocean-900/60 border-ocean-800 hover:border-ocean-600')
                }
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={a.icon}
                  alt={'How to Fish achievement: ' + a.name}
                  width={56}
                  height={56}
                  className={'rounded-lg shrink-0 ' + (isUnlocked ? '' : 'grayscale opacity-60')}
                  loading="lazy"
                />
                <span className="flex-1 min-w-0">
                  <span className="flex flex-wrap items-center gap-2">
                    <span className={'font-bold ' + (isUnlocked ? 'text-aqua' : 'text-white')}>{a.name}</span>
                    <span className={'text-[10px] font-bold uppercase tracking-wider border rounded px-1.5 py-0.5 ' + rarity.className}>
                      {rarity.label}
                    </span>
                  </span>
                  <span className="block text-xs text-gray-400 mt-1">{a.description}</span>
                </span>
                <span className="flex flex-col items-end gap-2 shrink-0">
                  <span className="text-xs font-mono text-gray-300">{a.globalPercent.toFixed(1)}%</span>
                  <span className={'text-lg leading-none ' + (isUnlocked ? 'text-aqua' : 'text-gray-600')} aria-hidden>
                    {isUnlocked ? '✓' : '○'}
                  </span>
                </span>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
