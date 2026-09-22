import Link from 'next/link';
import ArchipelagoMap from '@/components/ArchipelagoMap';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata = {
  title: 'Interactive Route Map, Zones & Hotspots',
  description: 'The How to Fish archipelago in canonical stage order: what each zone contains, navigation tools worth buying, and which circulating map rumors survived fact-checking.',
  alternates: { canonical: 'https://howtofish101.com/map/' },
};

export default function MapPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      <Breadcrumb items={[{ name: 'Archipelago Map', href: '/map/' }]} />
      <h1 className="text-3xl font-extrabold text-white">Archipelago Zones, Hotspots &amp; Navigation</h1>
      <p className="text-xs text-gray-500 -mt-4">Updated September 22, 2026 · Mechanics reviewed for game version 1.0.12</p>

      <div className="bg-ocean-900/80 border border-ocean-800 rounded-xl p-6 space-y-3 text-sm text-gray-300">
        <p>
          This guide follows the game's own stage naming — the same five-step chain our progression records track — instead of fan-invented coordinates drifting through comment sections. Every hotspot cross-references the guide that documents it.
        </p>
        <p className="text-xs leading-relaxed">
          On floating rumors: posts cite exact treasure coordinates, secret merchants selling guaranteed legendary bait, hidden basements. We could not reproduce any of them reliably, so they stay off these pages until reproducible — extend that suspicion to every X/Y list you meet elsewhere.
        </p>
      </div>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white">Interactive Route Map</h2>
        <ArchipelagoMap />
      </section>
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white">The Five Stages, In Order</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-ocean-950 p-4 rounded-lg border border-ocean-800">
            <h3 className="font-bold text-white text-base mb-1">Stage 1 · Island 1 (Lighthouse)</h3>
            <p className="text-xs text-gray-400 mb-2">Clam beaches, your first rod, the beer run, and the Spider Crab tidepool that gates everything.</p>
            <Link href="/bosses/spider-crab/" className="text-xs text-aqua hover:underline">Spider Crab guide →</Link>
          </div>
          <div className="bg-ocean-950 p-4 rounded-lg border border-ocean-800">
            <h3 className="font-bold text-white text-base mb-1">Stage 2 · Island 2 (Forest Lake)</h3>
            <p className="text-xs text-gray-400 mb-2">Freshwater boss arena unlocked by the three-leech favor. Mind the piranha swarm once the fight starts.</p>
            <Link href="/bosses/giant-piranha/" className="text-xs text-aqua hover:underline">Giant Piranha guide →</Link>
          </div>
          <div className="bg-ocean-950 p-4 rounded-lg border border-ocean-800">
            <h3 className="font-bold text-white text-base mb-1">Stage 3 · Island 3 (Desert)</h3>
            <p className="text-xs text-gray-400 mb-2">Pufferfish territory (Carrot summon). The Blue Shark boss catch and the Grill unlock live here too.</p>
            <Link href="/bosses/pufferfish/" className="text-xs text-aqua hover:underline">Pufferfish guide →</Link>
          </div>
          <div className="bg-ocean-950 p-4 rounded-lg border border-ocean-800">
            <h3 className="font-bold text-white text-base mb-1">Side Locale · Roulette (Island 6)</h3>
            <p className="text-xs text-gray-400 mb-2">Patch 1.0.11 moved the roulette table on island 6; treat this as an optional side stop, separate from the five main progression stages.</p>
            <Link href="/casino/" className="text-xs text-aqua hover:underline">Casino &amp; gachapon →</Link>
          </div>
          <div className="bg-ocean-950 p-4 rounded-lg border border-ocean-800">
            <h3 className="font-bold text-white text-base mb-1">Stage 4 · Island 4 (Sky)</h3>
            <p className="text-xs text-gray-400 mb-2">Albatross airspace: catch the Tuna on the Professional Boss Lure, use it as bait, keep open sightlines between dive passes.</p>
            <Link href="/bosses/albatross/" className="text-xs text-aqua hover:underline">Albatross guide →</Link>
          </div>
          <div className="bg-ocean-950 p-4 rounded-lg border border-ocean-800">
            <h3 className="font-bold text-white text-base mb-1">Stage 5 · Island 5 (Volcano)</h3>
            <p className="text-xs text-gray-400 mb-2">Fish Bucket → Bowhead Whale → the Mutated Bowhead Whale final boss. The Goblin Shark and the $1,700 Superdwarf Fish live here.</p>
            <Link href="/bosses/magma-whale/" className="text-xs text-aqua hover:underline">Final boss guide →</Link>
          </div>
        </div>
        <p className="text-xs text-gray-500">Gate-by-gate unlock requirements live on the <Link href="/islands/" className="text-aqua hover:underline">island progression page</Link>.</p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white">Navigation That Actually Helps</h2>
        <ul className="list-disc pl-5 space-y-2 bg-ocean-900/80 border border-ocean-800 rounded-xl p-6 text-sm text-gray-300">
          <li><strong className="text-white">Buy the radar early.</strong> It anchors half of all navigation pain stories — players describe eyeballing headings and sailing blind (it also marks quest ground-pickups like the leeches with red dots).</li>
          <li><strong className="text-white">Match the lure, not the weather:</strong> regular fish are determined by your equipped lure — no weather or day/night system exists to plan around (players are still requesting one). The tier list is on the <Link href="/fish/" className="text-aqua hover:underline">fish list</Link>.</li>
          <li><strong className="text-white">Lost-at-sea protocol:</strong> stop zig-zagging, open the map for discovered landmarks, and steer for the last island you unlocked instead of guessing toward undiscovered ones.</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white">Map Rumors We Left Out (And Why)</h2>
        <div className="bg-coral/10 border border-coral/40 rounded-xl p-5 space-y-2 text-xs">
          <p>Coordinate lists for “sunken shipyards” and “hermit bait vendors”, basement-treasure walkthroughs, pearl merchants paying doubled prices — none survived a sources-first review: no screenshots, no patch-note mention, no consistent retelling between playthroughs.</p>
          <p>If one pans out, it earns its own entry with evidence credits. Until then, the pages linked above stay deliberately rumor-free — that is the editorial standard this wiki runs on.</p>
        </div>
      </section>
    </div>
  );
}
