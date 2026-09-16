'use client';

import { useState } from 'react';
import Link from 'next/link';

const ZONES = [
  {
    id: 'island1',
    name: 'Island 1 · Lighthouse (starter)',
    lures: ['Free Lure (comes on the Crab Rod / Fishing Rod)', 'Hot Dog bait — better early catches'],
    targets: 'Brown Crab, Shrimp, Rock Crab, Lobster.',
    link: { href: '/guide/', label: 'Full starter walkthrough' },
  },
  {
    id: 'island2',
    name: 'Island 2 · Forest (lake)',
    lures: ['Free Lure on the Fishing Rod — Mackerel, Gar, Pike, Goldfish', 'Beginner Lure — Cod, Goby, Perch, Triggerfish, Salmon', 'Beginner Boss Lure ($40) — The Old Pike (Sunfish shares the pool)'],
    targets: 'Piranha takes Hot Dog or the Beginner Lure.',
    link: { href: '/bosses/giant-piranha/', label: 'Giant Piranha + leech quest' },
  },
  {
    id: 'island3',
    name: 'Island 3 · Desert',
    lures: ['Standard Lure ($15) — the full desert roster incl. Bluegill, Angelfish, Catfish', 'Standard Boss Lure — Blue Shark (unlocks the Grill)'],
    targets: 'Angelfish, Boxfish, Catfish, Sea Urchin, Seahorse, Clownfish, Salmon, Needlefish, Bluegill.',
    link: { href: '/bosses/pufferfish/', label: 'Pufferfish boss (Carrot summon)' },
  },
  {
    id: 'island4',
    name: 'Island 4 · Sky (the Rocks)',
    lures: ['Professional Lure ($50) — Bass, Eel, Red Snapper, Voxelfish, Parrotfish, Dripper…', 'Professional Boss Lure — the Tuna (bait for the Albatross)'],
    targets: 'Sengarat, Halibut, Tigerfish, Flying Fish round out the roster.',
    link: { href: '/bosses/albatross/', label: 'Albatross fight chain' },
  },
  {
    id: 'island5',
    name: 'Island 5 · Volcano',
    lures: ['Scientific Lure ($500) — Blobfish, Oarfish, Anglerfish, Stonefish, Superdwarf Fish', 'Scientific Boss Lure — Goblin Shark'],
    targets: 'Fish Bucket summons the Bowhead Whale — which is itself the final-boss bait.',
    link: { href: '/bosses/magma-whale/', label: 'Final boss guide' },
  },
];

export default function LoadoutRecommender() {
  const [zoneId, setZoneId] = useState(ZONES[0].id);
  const zone = ZONES.find((z) => z.id === zoneId) ?? ZONES[0];

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
          <p className="font-bold text-white mb-1">Bring these lures</p>
          <ul className="list-disc pl-4 space-y-1 text-gray-300">
            {zone.lures.map((l) => (
              <li key={l}>{l}</li>
            ))}
          </ul>
        </div>
        <p className="text-gray-300"><span className="font-bold text-white">Target board:</span> {zone.targets}</p>
        <div className="flex flex-wrap gap-3 pt-1">
          <Link href={zone.link.href} className="text-aqua hover:underline">{zone.link.label} →</Link>
        </div>
      </div>

      <p className="text-[11px] text-gray-500">
        Rosters cross-verified against the G2A island guide and the Mobalytics fish list (September 16,
        2026). Prices only shown where a source documents one.
      </p>
    </div>
  );
}
