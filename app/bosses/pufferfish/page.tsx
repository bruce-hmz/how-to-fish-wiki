import Breadcrumb from '@/components/Breadcrumb';
import Link from 'next/link';

export const metadata = {
  title: 'Pufferfish Boss Strategy & Weaknesses',
  description: 'How to summon and beat the Colossal Spiky Pufferfish boss in How to Fish. Dodge spike waves and claim the Puffer Spike Launcher.',
  alternates: { canonical: 'https://howtofish101.com/bosses/pufferfish/' },
};

export default function PufferfishPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      <Breadcrumb items={[{ name: 'Boss Battles', href: '/bosses/' }, { name: 'Pufferfish Boss', href: '/bosses/pufferfish/' }]} />
      <h1 className="text-3xl font-extrabold text-white">Colossal Spiky Pufferfish Boss Fight</h1>
      <div className="bg-ocean-900/80 border border-ocean-800 rounded-xl p-6 space-y-6 text-sm text-gray-300">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 bg-ocean-950 p-4 rounded-lg text-xs">
          <div><span className="text-gray-400">Location:</span> <strong className="text-white block">Coral Maze Lagoon</strong></div>
          <div><span className="text-gray-400">HP Pool:</span> <strong className="text-coral-light block">1,500 HP</strong></div>
          <div><span className="text-gray-400">Required Bait:</span> <strong className="text-gold block">Hot Dog Feast</strong></div>
          <div><span className="text-gray-400">Key Weakness:</span> <strong className="text-aqua block">Mouth & Dorsal Fin</strong></div>
        </div>
        <h2 className="text-xl font-bold text-white">Phase 1: The Rolling Spike Rush</h2>
        <p>Position your boat behind large coral rocks. When the Pufferfish rolls forward, it gets wedged between rock arches for 4 seconds.</p>
        <h2 className="text-xl font-bold text-white">Phase 2: 360-Degree Spike Barrage</h2>
        <p>When the boss inflates to 3x size, submerge underwater or crouch inside your boat cabin until spikes pass.</p>
        <p>
          Phase 2 begins at 60% HP remaining (around 900 HP). The Pufferfish stops rolling and instead anchors itself in the center of the lagoon, inflating to triple its normal size. It launches waves of spikes in a full 360-degree arc every 5 seconds. Each spike wave has a brief telegraph — the boss glows bright orange for 1.5 seconds before releasing. During this window, either dive underwater by pressing <kbd className="bg-ocean-950 px-2 py-0.5 rounded text-aqua font-mono border border-ocean-700">Ctrl</kbd> or duck inside your boat cabin. Between spike waves, you have a 3.5-second window to land hits on the exposed dorsal fin, which takes 2x damage during inflation.
        </p>

        <h2 className="text-xl font-bold text-white">Phase 3: Desperation Dive Bombs</h2>
        <p>
          At 25% HP (roughly 375 HP), the Pufferfish deflates rapidly and begins dive-bombing your boat from above. It launches itself out of the water, hovers briefly, then slams down onto your position. The impact creates a shockwave that damages anything within a 15-meter radius. To dodge, watch for the shadow on the water surface and steer your boat hard in one direction the moment the shadow stops moving. After each dive, the boss lies stunned on the surface for 6 seconds with its mouth wide open — this is your highest-damage window. Aim for the mouth with harpoon shots or melee attacks for 3x damage multiplier.
        </p>

        <h2 className="text-xl font-bold text-white">Recommended Gear Loadout</h2>
        <ul className="list-disc pl-5 space-y-2 text-xs text-gray-300">
          <li><strong>Deep-Sea Rod</strong>: Required for hooking the boss during stagger windows. The starter Crab Rod line snaps instantly.</li>
          <li><strong>Harpoon Gun ($200)</strong>: Deals 45 damage per shot at range. Essential for Phase 3 when the boss is airborne.</li>
          <li><strong>Knife</strong>: For close-range damage during the Phase 1 wedge window and Phase 3 mouth stun.</li>
          <li><strong>Hull Armor Tier 1 ($350)</strong>: Reduces spike damage from 30 to 15 per hit. Without it, your boat sinks in 4 spike waves.</li>
          <li><strong>Cooked Fish (x10)</strong>: Bring at least 10 cooked fish for healing. The fight lasts 5–8 minutes and chip damage adds up.</li>
        </ul>

        <h2 className="text-xl font-bold text-white">Co-op Strategy Tips</h2>
        <p>
          In multiplayer, the Pufferfish fight becomes significantly easier with coordinated roles. Assign one player as the <strong>Captain</strong> to handle boat positioning and dodge maneuvers while the other players focus on damage. During Phase 1, have the Captain wedge the boss into coral arches while Anglers and Gunners unload damage. In Phase 2, spread across multiple boats if possible — the spike barrage targets the nearest vessel, so splitting up means only one boat needs to dodge at a time. For Phase 3 dive bombs, the Captain should bait the dive while DPS players position at the predicted landing zone to immediately hit the stunned mouth.
        </p>
        <p>
          With 2 players (1.5x HP = 2,250 HP), the fight takes roughly 7 minutes. A full 4-player crew (2.5x HP = 3,750 HP) can clear it in about 6 minutes thanks to overlapping damage windows. Communication during Phase 3 transitions is critical — call out the shadow position so the Captain knows which way to steer.
        </p>

        <h2 className="text-xl font-bold text-white">Loot Table</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-ocean-950 text-gray-400 border-b border-ocean-800">
              <tr><th className="p-3">Drop</th><th className="p-3">Type</th><th className="p-3">Drop Rate</th><th className="p-3">Notes</th></tr>
            </thead>
            <tbody className="divide-y divide-ocean-800/50">
              <tr><td className="p-3 font-bold text-white">Boat Key Part #2</td><td className="p-3">Quest Item</td><td className="p-3 text-green-400">100%</td><td className="p-3">Unlocks Casino Island navigation</td></tr>
              <tr><td className="p-3 font-bold text-white">500 Gold</td><td className="p-3">Currency</td><td className="p-3 text-green-400">100%</td><td className="p-3">Split evenly in co-op</td></tr>
              <tr><td className="p-3 font-bold text-white">Puffer Spike Launcher</td><td className="p-3">Weapon Skin</td><td className="p-3 text-yellow-400">15%</td><td className="p-3">Cosmetic harpoon skin, glows purple</td></tr>
              <tr><td className="p-3 font-bold text-white">Pufferfish Trophy</td><td className="p-3">Decoration</td><td className="p-3 text-yellow-400">25%</td><td className="p-3">Wall mount for your boat cabin</td></tr>
              <tr><td className="p-3 font-bold text-white">Rare Drip Pufferfish Skin</td><td className="p-3">Cosmetic</td><td className="p-3 text-red-400">5%</td><td className="p-3">Glowing blue character outfit</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
