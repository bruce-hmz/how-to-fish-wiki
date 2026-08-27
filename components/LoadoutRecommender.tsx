'use client';

import { useState } from 'react';
import Link from 'next/link';

const ZONES = [
  {
    id: 'starter',
    name: 'Stage 1 · Starter Island Shallows',
    baits: ['Clam Meat (crabs)', 'Earthworms (Bluegill / Perch)', 'Hot Dogs once affordable — faster income'],
    targets: 'Crabs, Bluegill, Perch — pocket-change tier that funds your rod and knife.',
    boss: { href: '/bosses/spider-crab/', label: 'Spider Crab (Key Part #1)' },
    link: { href: '/guide/', label: 'Full starter walkthrough' },
  },
  {
    id: 'coral',
    name: 'Stage 3 · Coral Maze Lagoon',
    baits: ['Rainbow Lure — universal best here', 'Hot Dog Feast saved for the boss summon'],
    targets: 'All tropical species including high-value Parrot Wrasse ($45).',
    boss: { href: '/bosses/pufferfish/', label: 'Colossal Pufferfish (Key Part #2)' },
    link: { href: '/bosses/pufferfish/', label: 'Pre-position at the coral arches — how-to' },
  },
  {
    id: 'casino',
    name: 'Side Locale · Casino Island Reef',
    baits: ['Lantern Bait at night (Drip variants)', 'Shrimp Cocktail during the day'],
    targets: 'King Crabs ($65 each) by day; Drip Rock Crabs for the gachapon by night.',
    boss: { href: '/casino/', label: 'Gachapon conversion rules' },
    link: { href: '/fish/drip-fish/', label: 'Drip odds, honestly' },
  },
  {
    id: 'ocean',
    name: 'Deep Open Ocean (post-game waters)',
    baits: ['Squid Tentacle (Swordfish / Marlin)', 'Golden Minnow if hunting legendaries'],
    targets: 'Swordfish, Marlin, and legendary-tier residents of the outer zones.',
    boss: { href: '/islands/', label: 'Open-ocean unlock requirements' },
    link: { href: '/money/', label: 'Income math for expensive bait' },
  },
  {
    id: 'trench',
    name: 'Stage 5 · Volcanic Trench',
    baits: ['Fireproof Lure — mandatory, regular bait burns instantly'],
    targets: 'Magma Eels and Lava Carp. Bring heat protection for the hull too.',
    boss: { href: '/bosses/magma-whale/', label: 'Magma Whale (Key Part #3)' },
    link: { href: '/troubleshooting/cooked-weapons/', label: 'Burned-gear rescue' },
  },
];

export default function LoadoutRecommender() {
  const [zoneId, setZoneId] = useState(ZONES[0].id);
  const zone = ZONES.find(z => z.id === zoneId) ?? ZONES[0];

  return (
    <div className="bg-ocean-950/60 border border-ocean-700 rounded-xl p-5 space-y-4">
      <label className="block text-xs text-gray-300">
        <span className="block mb-1 font-semibold text-white">Where are you fishing?</span>
        <select
          value={zoneId}
          onChange={(e) => setZoneId(e.target.value)}
          className="w-full bg-ocean-950 border border-ocean-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-aqua"
        >
          {ZONES.map((z) => (
            <option key={z.id} value={z.id}>{z.name}</option>
          ))}
        </select>
      </label>

      <div className="bg-ocean-900 border border-ocean-700 rounded-lg p-4 space-y-3 text-xs">
        <div>
          <p className="font-bold text-white mb-1">Bring these baits</p>
          <ul className="list-disc pl-4 space-y-1 text-gray-300">
            {zone.baits.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
        </div>
        <p className="text-gray-300"><span className="font-bold text-white">Target board:</span> {zone.targets}</p>
        <div className="flex flex-wrap gap-3 pt-1">
          <Link href={zone.boss.href} className="text-aqua hover:underline">{zone.boss.label} →</Link>
          <Link href={zone.link.href} className="text-aqua hover:underline">{zone.link.label} →</Link>
        </div>
      </div>

      <p className="text-[11px] text-gray-500">
        Recommendations mirror the bait-per-biome table above and each boss guide&apos;s summon chain. Bait
        prices and effects can shift between patches — flag anything that stops matching in-game.
      </p>
    </div>
  );
}
