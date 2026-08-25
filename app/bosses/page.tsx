import Breadcrumb from '@/components/Breadcrumb';
import Link from 'next/link';
import { BOSSES_DATABASE } from '@/lib/data';

export const metadata = {
  title: 'All Bosses: Summon Baits & Strategies',
  description: 'Summon and defeat all five How to Fish bosses — Spider Crab, Giant Piranha, Pufferfish, Albatross, and Magma Whale — with bait chains and phase tactics.',
  alternates: { canonical: 'https://howtofish101.com/bosses/' },
};

export default function BossesPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      <Breadcrumb items={[{ name: 'Boss Battles', href: '/bosses/' }]} />
      <div>
        <h1 className="text-3xl font-extrabold text-white tracking-tight">Colossal Marine Boss Battles</h1>
        <p className="text-gray-400 text-xs mt-1">Summon conditions, attack patterns, weak points, and unique trophy rewards.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {BOSSES_DATABASE.map((boss) => (
          <div key={boss.id} className="bg-ocean-900 border border-ocean-800 rounded-xl p-6 flex flex-col justify-between hover:border-coral/50 transition-all">
            <div className="space-y-3">
              <div className="text-3xl">👾</div>
              <h2 className="text-xl font-bold text-white">{boss.name}</h2>
              <p className="text-xs text-gray-400">Location: <span className="text-gray-300">{boss.location}</span></p>
              <p className="text-xs text-gray-400">Summon Bait: <span className="text-gold font-semibold">{boss.summonBait}</span></p>
              <p className="text-xs text-gray-400">HP: <span className="text-coral-light font-bold">{boss.hp}</span></p>
            </div>
            <Link 
              href={`/bosses/${boss.id}/`} 
              className="mt-6 bg-ocean-800 hover:bg-ocean-700 text-aqua text-xs font-bold py-2 rounded-lg text-center border border-ocean-700 transition-colors block"
            >
              View Strategy Guide →
            </Link>
          </div>
        ))}
      </div>

      <div className="bg-ocean-900/80 border border-ocean-800 rounded-xl p-6 space-y-6 text-sm text-gray-300">
        <h2 className="text-xl font-bold text-white border-b border-ocean-800 pb-2">How the Boss System Works</h2>
        <p>
          How to Fish features five colossal bosses that guard the Boat Key Parts and island coordinates you need to unlock the full archipelago. Bosses are not random encounters — you must deliberately summon each one through a specific <strong>bait chain</strong>: an NPC trade, a quest item, or a crafted lure tied to their arena. Once the chain completes, the boss emerges after a short cinematic, and the fight ends in victory or defeat.
        </p>
        <p>
          Each boss has multiple combat phases with escalating attack patterns. Depleting a boss HP to certain thresholds triggers phase transitions with new mechanics, faster attacks, and environmental hazards. Understanding these phase breaks is the key to consistent wins.
        </p>

        <h2 className="text-xl font-bold text-white border-b border-ocean-800 pb-2">Boss Difficulty Ranking & Recommended Gear</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-ocean-950 text-gray-400 border-b border-ocean-800">
              <tr><th className="p-3">Boss</th><th className="p-3">Difficulty</th><th className="p-3">HP</th><th className="p-3">Recommended Gear</th><th className="p-3">Key Reward</th></tr>
            </thead>
            <tbody className="divide-y divide-ocean-800/50">
              <tr>
                <td className="p-3 font-bold text-white"><Link href="/bosses/spider-crab/" className="text-aqua hover:underline">Giant Spider Crab</Link></td>
                <td className="p-3 text-green-400">Easy</td>
                <td className="p-3">800 HP</td>
                <td className="p-3">Knife, Crab Rod, Hot Dogs</td>
                <td className="p-3">Boat Key #1</td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-white"><Link href="/bosses/giant-piranha/" className="text-aqua hover:underline">Giant Piranha</Link></td>
                <td className="p-3 text-yellow-400">Medium</td>
                <td className="p-3">1,200 HP</td>
                <td className="p-3">Harpoon / Rifle, Healing Items</td>
                <td className="p-3">Island 3 Coordinates</td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-white"><Link href="/bosses/pufferfish/" className="text-aqua hover:underline">Colossal Pufferfish</Link></td>
                <td className="p-3 text-yellow-400">Medium</td>
                <td className="p-3">1,500 HP</td>
                <td className="p-3">Deep-Sea Rod, Harpoon, Hull Armor Tier 1</td>
                <td className="p-3">Boat Key #2</td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-white"><Link href="/bosses/albatross/" className="text-aqua hover:underline">Albatross (Terrorizing Bird)</Link></td>
                <td className="p-3 text-orange-400">Very Hard</td>
                <td className="p-3">2,200 HP</td>
                <td className="p-3">Professional Boss Lure, Ranged Weapon</td>
                <td className="p-3">Albatross Head + Achievement</td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-white"><Link href="/bosses/magma-whale/" className="text-aqua hover:underline">Volcanic Magma Whale</Link></td>
                <td className="p-3 text-red-400">Hard</td>
                <td className="p-3">3,000 HP</td>
                <td className="p-3">Titanium Rod, Rifle, Heat-Shielded Hull</td>
                <td className="p-3">Boat Key #3 + Legendary Rod</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-xl font-bold text-white border-b border-ocean-800 pb-2">Boss Scaling in Co-op</h2>
        <p>
          When playing multiplayer, boss HP scales based on the number of players in the session at the time of summoning. This prevents groups from trivializing fights through sheer numbers. The scaling is linear: a 2-player session gives the boss 1.5x HP, 3 players gives 2x, and a full 4-player crew faces 2.5x the base HP pool. Attack damage and phase thresholds remain the same regardless of player count, so coordinated crews with assigned roles (tank, DPS, healer) will always have an advantage over uncoordinated groups of the same size.
        </p>
        <p>
          Loot from boss kills is shared among all participants — every player receives the Boat Key Part and a split of the gold reward. However, rare cosmetic drops like the Puffer Spike Launcher skin are rolled individually, so each player has an independent chance at rare loot.
        </p>
      </div>
    </div>
  );
}
