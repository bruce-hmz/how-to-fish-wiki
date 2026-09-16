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
    name: 'Island 1 (Lighthouse)',
    icon: '🗼',
    x: 10, y: 50, stage: 'Stage 1',
    desc: 'Clam beaches, the fisherman shop, and the lighthouse tidepool. Beat the Spider Crab and trade its shell for the Boat Keys.',
    badges: ['🔑 Boat Keys (shell trade)', '🦀 Free Lure + Hot Dog roster'],
    links: [
      { href: '/bosses/spider-crab/', label: 'Spider Crab guide' },
      { href: '/guide/', label: 'Starter walkthrough' },
    ],
  },
  {
    id: 'lake',
    name: 'Island 2 (Forest Lake)',
    icon: '🐟',
    x: 27, y: 28, stage: 'Stage 2',
    desc: 'Freshwater lake arena. Bring the three leeches for the Modified Leech summon, and mind the piranha swarm during the fight.',
    badges: ['🔑 Island 3 unlock (Skeleton hand-in)', '🎣 Beginner Lure tier'],
    links: [{ href: '/bosses/giant-piranha/', label: 'Giant Piranha guide' }],
  },
  {
    id: 'desert',
    name: 'Island 3 (Desert)',
    icon: '🏜️',
    x: 45, y: 48, stage: 'Stage 3',
    desc: 'Desert island. Summon the Pufferfish with the Carrot, hook the Blue Shark on the Standard Boss Lure, and unlock the Grill.',
    badges: ['🥕 Pufferfish gate', '🔥 Grill unlock (Grillmaster)'],
    links: [
      { href: '/bosses/pufferfish/', label: 'Pufferfish guide' },
      { href: '/lures/', label: 'Lure recommendations' },
    ],
  },
  {
    id: 'casino',
    name: 'Island 6 (Casino)',
    icon: '🎰',
    x: 47, y: 82, stage: 'Side locale',
    desc: 'The roulette table and prize machines. Drip catches convert into exclusive cosmetics here.',
    badges: ['🎚 Blank-prize render bug: cycle held item'],
    links: [
      { href: '/casino/', label: 'Casino & gachapon guide' },
      { href: '/fish/drip-fish/', label: 'Drip odds, honestly' },
    ],
  },
  {
    id: 'skies',
    name: 'Island 4 (Sky)',
    icon: '🦅',
    x: 64, y: 26, stage: 'Stage 4',
    desc: 'Albatross airspace. Catch the Tuna on the Professional Boss Lure, use it as bait, and keep open sightlines between dive passes.',
    badges: ['🐟 Tuna → Albatross chain', '🎣 Professional Lure tier'],
    links: [{ href: '/bosses/albatross/', label: 'Albatross guide' }],
  },
  {
    id: 'volcano',
    name: 'Island 5 (Volcano)',
    icon: '🌋',
    x: 82, y: 52, stage: 'Stage 5',
    desc: 'The volcano island. Fish Bucket → Bowhead Whale → the Mutated Bowhead Whale final boss; the Goblin Shark and the $1,700 Superdwarf Fish live here too.',
    badges: ['🐋 Final-boss chain', '🔥 Cooked-weapon risk zone', '🎣 Scientific Lure tier'],
    links: [
      { href: '/bosses/magma-whale/', label: 'Final boss guide' },
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
        Sailing blind between markers is how crews get lost — the <span className="text-gray-300">radar purchase</span> is the single most-recommended early buy. Which fish you catch is
        determined by your <span className="text-gray-300">equipped lure</span>, so plan trips around the lure tiers on the <Link href="/fish/" className="text-aqua hover:underline">fish list</Link>.
      </p>
    </div>
  );
}
