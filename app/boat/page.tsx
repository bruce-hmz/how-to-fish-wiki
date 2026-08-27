import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata = {
  title: 'Boat Keys Location & Engine Upgrades',
  description: 'Where to find lost boat keys in How to Fish. Complete upgrade tree for engine horsepower, fuel tank capacity, and hull armor.',
  alternates: { canonical: 'https://howtofish101.com/boat/' },
};

export default function BoatPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      <Breadcrumb items={[{ name: 'Boat Upgrades', href: '/boat/' }]} />
      <h1 className="text-3xl font-extrabold text-white">Boat Keys Location & Engine Upgrades</h1>
      <div className="bg-ocean-900/80 border border-ocean-800 rounded-xl p-6 space-y-6 text-sm text-gray-300">
        <h2 className="text-xl font-bold text-white">Locating the Lost Starter Boat Keys</h2>
        <p>
          Your wrecked boat on the starter island requires three key parts to fully restore. Each part drops from a different boss, gating your exploration progression through the archipelago:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-xs text-gray-300">
          <li><strong>Boat Key Part #1 — Giant Spider Crab</strong>: Dropped after defeating the Spider Crab in the Lighthouse Tidepool. Take it to the dock mechanic NPC to unlock basic engine ignition. This lets you leave the starter island and reach the Coral Maze Lagoon.</li>
          <li><strong>Boat Key Part #2 — Colossal Pufferfish</strong>: Dropped after defeating the Pufferfish in the Coral Maze Lagoon. Upgrades your navigation computer, unlocking the autopilot feature and access to Casino Island and outer reef zones.</li>
          <li><strong>Boat Key Part #3 — Volcanic Magma Whale</strong>: Dropped after defeating the final boss in the Deep Volcanic Trench. Installs the Turbine Engine module, granting access to the open ocean endgame area and maximum boat speed.</li>
        </ul>

        <h2 className="text-xl font-bold text-white">Engine Upgrade Tree</h2>
        <p>
          The dock mechanic on Casino Island offers three engine tiers, each unlocked sequentially. You must own the previous tier before purchasing the next:
        </p>
        <div className="overflow-x-auto mt-4">
          <table className="w-full text-left text-xs">
            <thead className="bg-ocean-950 text-gray-400 border-b border-ocean-800">
              <tr><th className="p-3">Engine</th><th className="p-3">Cost</th><th className="p-3">Speed</th><th className="p-3">Fuel Efficiency</th><th className="p-3">Prerequisite</th></tr>
            </thead>
            <tbody className="divide-y divide-ocean-800/50">
              <tr><td className="p-3 font-bold text-white">Outboard Motor</td><td className="p-3">$350</td><td className="p-3">2x base speed</td><td className="p-3">Low (burns 1 fuel/min)</td><td className="p-3">Boat Key #1</td></tr>
              <tr><td className="p-3 font-bold text-white">Diesel Engine</td><td className="p-3">$1,200</td><td className="p-3">3.5x base speed</td><td className="p-3">Medium (burns 0.6 fuel/min)</td><td className="p-3">Boat Key #2</td></tr>
              <tr><td className="p-3 font-bold text-white">Turbine Engine</td><td className="p-3">$3,500</td><td className="p-3">5x base speed</td><td className="p-3">High (burns 0.3 fuel/min)</td><td className="p-3">Boat Key #3</td></tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-xl font-bold text-white">Hull Armor Levels</h2>
        <p>
          Hull armor determines how much damage your boat can absorb from collisions, boss attacks, and environmental hazards. Upgrade at the dock mechanic:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-xs text-gray-300">
          <li><strong>Wooden Hull (default)</strong>: 100 HP. Breaks apart after 3 boss hits or running aground twice. Free but fragile.</li>
          <li><strong>Reinforced Steel Hull ($500)</strong>: 250 HP. Halves collision damage and prevents grounding stun. Essential for open ocean travel.</li>
          <li><strong>Titanium Plated Hull ($2,000)</strong>: 500 HP. Required for the Volcanic Trench — immune to lava damage. Also reduces boss attack damage by 40%.</li>
          <li><strong>Obsidian Infused Hull ($5,000)</strong>: 800 HP. Endgame hull that regenerates 5 HP per second. Unlocked after defeating the Magma Whale.</li>
        </ul>

        <h2 className="text-xl font-bold text-white">Fuel Management Tips</h2>
        <p>
          Fuel is a real resource in How to Fish — run out in the middle of the ocean and you drift at mercy of the currents until rescued or until you row back manually (painfully slow). Keep these tips in mind:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-xs text-gray-300">
          <li>Always top off fuel at dock stations before long trips. Fuel costs $2 per unit and your tank holds 50 units at base capacity.</li>
          <li>Upgrade your fuel tank at the mechanic: Tier 1 (75 units, $200), Tier 2 (100 units, $600), Tier 3 (150 units, $1,500).</li>
          <li>Ride favorable ocean currents (blue arrows on Sonar) to reduce fuel consumption by 50% on those stretches.</li>
          <li>The Diesel and Turbine engines are progressively more fuel-efficient despite higher top speeds — upgrading engines actually saves fuel long-term.</li>
          <li>Carry 2 Emergency Fuel Cans ($25 each, sold at all docks) in your inventory as insurance against running dry.</li>
        </ul>

        <h2 className="text-xl font-bold text-white">Boat Skins from Casino Gachapon</h2>
        <p>
          The Casino Island Gachapon machine accepts Drip Fish and Drip Crabs in exchange for random cosmetic rewards, including exclusive boat skins. There are 8 boat skins available from the machine, ranging from common recolors to ultra-rare animated skins. Notable skins include the <strong>Neon Racer</strong> (glowing teal hull lines), <strong>Pirate Ghost Ship</strong> (translucent hull with spectral sails), and the coveted <strong>Golden Kraken</strong> skin (animated gold tentacles wrapping the hull). Boat skins are purely cosmetic and do not affect stats. You can preview and swap skins at 

        <p className="text-xs text-gray-400 border-l-2 border-aqua/40 pl-3">Key drops behind each hull upgrade come from the bosses in our <Link href="/bosses/" className="text-aqua hover:underline">boss hub</Link>; fuel budgeting math sits inside the <Link href="/money/" className="text-aqua hover:underline">money guide</Link>.</p>any dock station.
        </p>
      </div>
    </div>
  );
}
