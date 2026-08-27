'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { FISH_DATABASE } from '@/lib/data';

// Documented factors (community-verified list; see trick shots page for sources).
const KILLSCORE = [
  { id: 'spin', label: '360 Spin', factor: 1.5 },
  { id: 'head', label: 'Headshot', factor: 1.25 },
  { id: 'last', label: 'Last Bullet', factor: 1.25 },
  { id: 'noscope', label: 'No Scope', factor: 1.2 },
  { id: 'point', label: 'Point Blank', factor: 1.1 },
];
const COOK_FACTOR = 1.5;

export default function PriceCalculator() {
  const [fishId, setFishId] = useState(FISH_DATABASE[0].id);
  const [picked, setPicked] = useState<Set<string>>(new Set());
  const [cooked, setCooked] = useState(false);

  const fish = FISH_DATABASE.find(f => f.id === fishId) ?? FISH_DATABASE[0];

  const killscoreFactor = useMemo(
    () => KILLSCORE.filter(k => picked.has(k.id)).reduce((acc, k) => acc * k.factor, 1),
    [picked]
  );
  const total = fish.value * killscoreFactor * (cooked ? COOK_FACTOR : 1);

  const formula = [
    '$' + fish.value,
    ...(picked.size ? ['× ' + picked.size + ' style modifier' + (picked.size > 1 ? 's' : '') + ' (×' + killscoreFactor.toFixed(2).replace(/0+$/, '').replace(/\.$/, '') + ')'] : []),
    ...(cooked ? ['× 1.5 cooked'] : []),
  ].join(' ');

  function toggle(id: string) {
    const next = new Set(picked);
    if (next.has(id)) next.delete(id);
    else next.add(id);
    setPicked(next);
  }

  return (
    <div className="bg-ocean-950/60 border border-ocean-700 rounded-xl p-5 space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <label className="block text-xs text-gray-300">
          <span className="block mb-1 font-semibold text-white">Catch</span>
          <select
            value={fishId}
            onChange={(e) => setFishId(e.target.value)}
            className="w-full bg-ocean-950 border border-ocean-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-aqua"
          >
            {FISH_DATABASE.map((f) => (
              <option key={f.id} value={f.id}>
                {f.name} — ${f.value} ({f.rarity})
              </option>
            ))}
          </select>
        </label>
        <label className="block text-xs text-gray-300">
          <span className="block mb-1 font-semibold text-white">Grill before selling?</span>
          <button
            type="button"
            onClick={() => setCooked(v => !v)}
            aria-pressed={cooked}
            className={`w-full px-3 py-2 rounded-lg text-sm font-semibold border transition-colors ${cooked ? 'bg-gold/20 border-gold/60 text-gold' : 'bg-ocean-950 border-ocean-700 text-gray-400 hover:text-white'}`}
          >
            {cooked ? 'Cooked (×1.5)' : 'Raw (×1.0)'}
          </button>
        </label>
      </div>

      <fieldset>
        <legend className="text-xs font-semibold text-white mb-2">Style modifiers on the killing blow</legend>
        <div className="flex flex-wrap gap-2">
          {KILLSCORE.map((k) => (
            <button
              key={k.id}
              type="button"
              onClick={() => toggle(k.id)}
              aria-pressed={picked.has(k.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-colors ${picked.has(k.id) ? 'bg-aqua text-ocean-950 border-aqua' : 'bg-ocean-950 text-gray-400 border-ocean-700 hover:text-white'}`}
            >
              {k.label} ×{k.factor}
            </button>
          ))}
        </div>
      </fieldset>

      <div className="bg-ocean-900 border border-ocean-700 rounded-lg p-4">
        <p className="text-xs text-gray-400">{formula}</p>
        <p className="text-2xl font-extrabold text-gold mt-1">${total.toLocaleString('en-US', { maximumFractionDigits: 0 })}</p>
        <p className="text-[11px] text-gray-500 mt-1">
          Estimated sale value. Killsteal / Fly Fishing / Overkill / Finally bonuses are undocumented, so this
          calculator excludes them — real payouts can land higher. Factors from the{' '}
          <Link href="/trick-shots/" className="text-aqua hover:underline">trick shots table</Link>; sell prices from
          the <Link href="/fish/" className="text-aqua hover:underline">verified fish database</Link>.
        </p>
      </div>
    </div>
  );
}
