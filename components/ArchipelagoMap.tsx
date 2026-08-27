'use client';

import { useState } from 'react';
import Link from 'next/link';

type Zone = {
  id: string;
  name: string;
  icon: string;
  x: number; // % position on schematic map
  y: number;
  stage?: string;
  desc: string;
  badges?: string[];
  links: { href: string; label: string }[];
};

const ZONES: Zone[] = [
  {
    id: 'starter',
    name: 'Starter Island (Lighthouse)',
    icon: '🗼',
    x: 10, y: 50, stage: 'Stage 1',
    desc: 'Clam beaches, the shop kiosk and tavern, and the rain-gated tidepools where Drip Rock Crabs appear.',
    badges: ['🌧 Rain → tidepool Drips', '🔑 Boat Key Part #1'],
    links: [
      { href: '/bosses/spider-crab/', label: 'Spider Crab guide' },
      { href: '/guide/', label: 'Starter walkthrough' },
    ],
  },
  {
    id: 'lake',
    name: 'Island 2 (Lake)',
    icon: '🐟',
    x: 27, y: 28, stage: 'Stage 2',
    desc: 'Freshwater lake arena. Bring the three leeches for the Modified Leech summon, and watch the escape bar once the Piranha circles.',
    badges: ['🔑 Island 3 coordinates (Skeleton hand-in)'],
    links: [{ href: '/bosses/giant-piranha/', label: 'Giant Piranha guide' }],
  },
  {
    id: 'coral',
    name: 'Coral Maze Lagoon',
    icon: '🪸',
    x: 45, y: 48, stage: 'Stage 3',
    desc: 'Pufferfish home turf. Pre-position the boat at the coral arches before summoning; Rainbow Lure pulls the whole tropical roster.',
    badges: ['🔑 Boat Key Part #2'],
    links: [
      { href: '/bosses/pufferfish/', label: 'Pufferfish guide' },
      { href: '/lures/', label: 'Lure recommendations' },
    ],
  },
  {
    id: 'casino',
    name: 'Casino Island',
    icon: '🎰',
    x: 47, y: 82, stage: 'Side locale',
    desc: 'Hand-in stop on the Stage 3 exit path. The gachapon machine trades Drip catches for exclusive cosmetics.',
    badges: ['🎚 Blank-prize render bug: cycle held item'],
    links: [
      { href: '/casino/', label: 'Casino & gachapon guide' },
      { href: '/fish/drip-fish/', label: 'Drip odds, honestly' },
    ],
  },
  {
    id: 'skies',
    name: 'Island 4 (Skies)',
    icon: '🦅',
    x: 64, y: 26, stage: 'Stage 4',
    desc: 'Albatross airspace. Catch a tuna locally, plant the carcass as bait, and keep open sightlines between dive passes.',
    badges: ['🧭 Sky Compass on hand-in'],
    links: [{ href: '/bosses/albatross/', label: 'Albatross guide' }],
  },
  {
    id: 'inferno',
    name: 'Mount Inferno & Deep Trench',
    icon: '🌋',
    x: 82, y: 52, stage: 'Stage 5',
    desc: 'Lava river canal to the crater lake, then the deepest zones. Vent fishing during thunderstorms is where Drip Fish live — and where guns get cooked.',
    badges: ['⛈ Storm → vent Drip Fish', '🔥 Cooked-weapon risk zone', '🔑 Boat Key Part #3'],
    links: [
      { href: '/bosses/magma-whale/', label: 'Magma Whale guide' },
      { href: '/troubleshooting/cooked-weapons/', label: 'Burned-gear rescue' },
    ],
  },
];

export default function ArchipelagoMap() {
  const [activeId, setActiveId] = useState<string>('starter');
  const active = ZONES.find(z => z.id === activeId) ?? ZONES[0];

  return (
    <div className="space-y-4">
      <div className="relative w-full overflow-hidden rounded-xl border border-ocean-700 bg-gradient-to-b from-ocean-950 via-ocean-900 to-ocean-950" style={{ aspectRatio: '16 / 9' }}>
        {/* dashed route line, decorative */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 56" preserveAspectRatio="none" aria-hidden="true">
          <polyline
            points="10,28 27,16 45,27 64,15 82,29"
            fill="none"
            stroke="rgba(255,255,255,0.25)"
            strokeWidth="0.4"
            strokeDasharray="2 1.5"
          />
          <polyline
            points="45,27 47,46"
            fill="none"
            stroke="rgba(255,255,255,0.15)"
            strokeWidth="0.3"
            strokeDasharray="1.5 1.5"
          />
        </svg>

        {ZONES.map((z) => (
          <button
            key={z.id}
            type="button"
            onClick={() => setActiveId(z.id)}
            aria-pressed={activeId === z.id}
            className={'absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-1 rounded-lg px-2 py-1.5 border transition-all ' +
              (activeId === z.id
                ? 'bg-aqua/20 border-aqua scale-110'
                : 'bg-ocean-950/70 border-ocean-700 hover:border-aqua/60')}
            style={{ left: z.x + '%', top: z.y + '%' }}
          >
            <span className="text-xl leading-none" aria-hidden>{z.icon}</span>
            <span className={'text-[10px] font-semibold whitespace-nowrap ' + (activeId === z.id ? 'text-aqua' : 'text-gray-300')}>
              {z.name.split(' (')[0]}
            </span>
          </button>
        ))}

        <p className="absolute bottom-2 left-3 right-3 text-[10px] text-gray-500">
          Schematic route map — marker positions are illustrative, not in-game coordinates.
        </p>
      </div>

      <div className="bg-ocean-950/60 border border-ocean-700 rounded-xl p-5 space-y-3">
        <div className="flex flex-wrap items-center gap-2">
          {active.stage && (
            <span className="text-[10px] font-bold uppercase tracking-wider text-aqua border border-aqua/40 rounded px-1.5 py-0.5">
              {active.stage}
            </span>
          )}
          <h3 className="text-lg font-bold text-white">{active.name}</h3>
        </div>
        <p className="text-xs text-gray-300 leading-relaxed">{active.desc}</p>
        {active.badges && (
          <ul className="flex flex-wrap gap-2">
            {active.badges.map((b) => (
              <li key={b} className="text-[11px] bg-ocean-900 border border-ocean-700 rounded-full px-2.5 py-1 text-gray-300">{b}</li>
            ))}
          </ul>
        )}
        <div className="flex flex-wrap gap-3">
          {active.links.map((l) => (
            <Link key={l.href + l.label} href={l.href} className="text-xs text-aqua hover:underline">
              {l.label} →
            </Link>
          ))}
        </div>
      </div>

      <p className="text-xs text-gray-400">
        Sailing blind between markers is how crews get lost — the <span className="text-gray-300">radar purchase</span> is the single most-recommended early buy. Weather matters: several
        catch windows open only in rain or storms (see the <Link href="/fish/" className="text-aqua hover:underline">fish list</Link>).
      </p>
    </div>
  );
}
