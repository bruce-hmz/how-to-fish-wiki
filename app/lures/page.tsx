import Link from 'next/link';
import LoadoutRecommender from '@/components/LoadoutRecommender';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata = {
  title: 'All Lures & Baits Unlock Guide',
  description: 'Full list of lures, baits, and rage attractors in How to Fish. Learn unlock requirements, costs, and fish affinities.',
  alternates: { canonical: 'https://howtofish101.com/lures/' },
};

export default function LuresPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      <Breadcrumb items={[{ name: 'Lures & Baits', href: '/lures/' }]} />
      <h1 className="text-3xl font-extrabold text-white">All Lures & Baits Guide</h1>
      <div className="bg-ocean-900/80 border border-ocean-800 rounded-xl p-6 space-y-4 text-sm text-gray-300">
        <p>Choosing the right bait dictates bite speed and rarity. Starter clams attract crabs, while Hot Dogs attract high-yield commercial fish.</p>
        <div className="overflow-x-auto mt-4">
          <table className="w-full text-left text-xs">
            <thead className="bg-ocean-950 text-gray-400 border-b border-ocean-800">
              <tr><th className="p-3">Bait Name</th><th className="p-3">Cost</th><th className="p-3">Target Species</th><th className="p-3">Special Effect</th></tr>
            </thead>
            <tbody className="divide-y divide-ocean-800/50">
              <tr><td className="p-3 font-bold text-white">Clam Meat</td><td className="p-3">Free</td><td className="p-3">Crabs, Shrimps</td><td className="p-3">Starter food & bait</td></tr>
              <tr><td className="p-3 font-bold text-white">Earthworm</td><td className="p-3">$1</td><td className="p-3">Bluegill, Perch</td><td className="p-3">High bite frequency</td></tr>
              <tr><td className="p-3 font-bold text-white">Hot Dog</td><td className="p-3">$5</td><td className="p-3">Red Snapper, Bass</td><td className="p-3">Attracts fast carnivores</td></tr>
              <tr><td className="p-3 font-bold text-white">Empty Beer Can</td><td className="p-3">$10</td><td className="p-3">Spider Crab Boss</td><td className="p-3">Summons boss</td></tr>
              <tr><td className="p-3 font-bold text-white">Shrimp Cocktail</td><td className="p-3">$8</td><td className="p-3">Lobster, King Crab</td><td className="p-3">Premium crustacean bait</td></tr>
              <tr><td className="p-3 font-bold text-white">Squid Tentacle</td><td className="p-3">$12</td><td className="p-3">Swordfish, Marlin</td><td className="p-3">Deep-water predator lure</td></tr>
              <tr><td className="p-3 font-bold text-white">Lantern Bait</td><td className="p-3">$15</td><td className="p-3">Anglerfish, Drip variants</td><td className="p-3">Glowing repellent field</td></tr>
              <tr><td className="p-3 font-bold text-white">Rainbow Lure</td><td className="p-3">$20</td><td className="p-3">All tropical species</td><td className="p-3">Universal tropical attractor</td></tr>
              <tr><td className="p-3 font-bold text-white">Fireproof Lure</td><td className="p-3">$30</td><td className="p-3">Magma Eel, Lava Carp</td><td className="p-3">Survives volcanic water</td></tr>
              <tr><td className="p-3 font-bold text-white">Golden Minnow</td><td className="p-3">$50</td><td className="p-3">Legendary fish only</td><td className="p-3">Guarantees rare catch</td></tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-xl font-bold text-white border-b border-ocean-800 pb-2">Rage Baits: Boss Summoning Items</h2>
        <p>
          Rage Baits are special single-use items that summon colossal bosses when cast into their designated arenas. Unlike regular bait, Rage Baits cannot be purchased from standard shops — they must be obtained through specific NPC quests or crafting recipes. Each boss has exactly one Rage Bait associated with it:
        </p>
        <div className="overflow-x-auto mt-4">
          <table className="w-full text-left text-xs">
            <thead className="bg-ocean-950 text-gray-400 border-b border-ocean-800">
              <tr><th className="p-3">Rage Bait</th><th className="p-3">How to Obtain</th><th className="p-3">Summons</th><th className="p-3">Arena Location</th></tr>
            </thead>
            <tbody className="divide-y divide-ocean-800/50">
              <tr><td className="p-3 font-bold text-white">Empty Beer Can</td><td className="p-3">Buy beer ($10), give to beach NPC</td><td className="p-3">Giant Spider Crab</td><td className="p-3">Lighthouse Tidepool</td></tr>
              <tr><td className="p-3 font-bold text-white">Hot Dog Feast</td><td className="p-3">Combine 5 Hot Dogs at cooking station</td><td className="p-3">Colossal Pufferfish</td><td className="p-3">Coral Maze Lagoon</td></tr>
              <tr><td className="p-3 font-bold text-white">Volcano Core</td><td className="p-3">3 Obsidian Shards + 1 Magma Eel</td><td className="p-3">Volcanic Magma Whale</td><td className="p-3">Deep Volcanic Trench</td></tr>
            </tbody>
          </table>
        </div>
        <p>
          Rage Baits are consumed on use regardless of whether you win or lose the boss fight. Plan accordingly and make sure your gear and supplies are ready before casting.
        </p>

        <h2 className="text-xl font-bold text-white border-b border-ocean-800 pb-2">Bait Crafting & Combining</h2>
        <p>
          The cooking station on the starter island dock lets you combine basic baits into more powerful variants. Crafting follows simple recipes: place 2–5 ingredients on the station grill and press <kbd className="bg-ocean-950 px-2 py-0.5 rounded text-aqua font-mono border border-ocean-700">E</kbd> to cook. Failed recipes just produce Burnt Bait (worthless but funny). Here are the key crafting recipes:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-xs text-gray-300">
          <li><strong>Shrimp Cocktail</strong>: 2 Clam Meat + 1 Earthworm — unlocks crustacean targeting.</li>
          <li><strong>Squid Tentacle</strong>: 1 Hot Dog + 2 Earthworms — must be crafted at the Coral Maze station (unlocked after Spider Crab).</li>
          <li><strong>Hot Dog Feast</strong>: 5 Hot Dogs combined at any cooking station — the Pufferfish boss Rage Bait.</li>
          <li><strong>Volcano Core</strong>: 3 Obsidian Shards + 1 Magma Eel — crafted at the Mount Inferno forge only.</li>
        </ul>

        <h2 className="text-xl font-bold text-white border-b border-ocean-800 pb-2">Best Bait per Biome</h2>
        <p>
          Each biome has species that respond best to specific bait types. Using the wrong bait still works but drastically reduces bite frequency and locks you out of the rarest spawns. Here are the recommended loadouts per area:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-xs text-gray-300">
          <li><strong>Starter Island Shallows</strong>: Clam Meat for crabs, Earthworms for Bluegill and Perch. Hot Dogs once you can afford them for faster income.</li>
          <li><strong>Coral Maze Lagoon</strong>: Rainbow Lure is the universal best option here. Attracts all tropical species including the high-value Parrot Wrasse ($45).</li>
          <li><strong>Casino Island Reef</strong>: Lantern Bait at night for Drip variants. Shrimp Cocktail during the day for King Crabs ($65 each).</li>
          <li><strong>Deep Open Ocean</strong>: Squid Tentacle for Swordfish and Marlin. Golden Minnow if you are specifically hunting legendary species.</li>
          <li><strong>Volcanic Trench</strong>: Fireproof Lure is mandatory — regular bait burns up instantly in the heated water. Targets Magma Eels and Lava Carp.</li>
        </ul>
      </div>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white border-b border-ocean-800 pb-2">Zone Loadout Recommender</h2>
          <LoadoutRecommender />
        </section>
        <p className="text-xs text-gray-400 border-l-2 border-aqua/40 pl-3">Pair baits with targets via the <Link href="/fish/" className="text-aqua hover:underline">fish list</Link>, then turn catches into cash with the <Link href="/money/" className="text-aqua hover:underline">money guide</Link>.</p>
    </div>
  );
}
