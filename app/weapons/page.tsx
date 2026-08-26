import Breadcrumb from '@/components/Breadcrumb';
import Sources from '@/components/Sources';
import Link from 'next/link';

export const metadata = {
  title: 'All Weapons & Attachments Guide',
  description:
    'Every How to Fish weapon — knife, harpoon gun, rifle, titanium harpoon, dynamite, bare fists. Unlock order, boss loadouts, and the Fully equipped achievement.',
  alternates: { canonical: 'https://howtofish101.com/weapons/' },
};

const weapons = [
  {
    name: 'Bare Fists',
    type: 'Melee (default)',
    unlock: 'Available from the start',
    damage: 'Very low per hit',
    use: 'Emergency self-defense and the secret Handyman achievement',
  },
  {
    name: 'Knife',
    type: 'Melee',
    unlock: 'Starter loadout',
    damage: 'Low, fast swing',
    use: 'Subduing reeled-in catches and finishing staggered bosses at close range',
  },
  {
    name: 'Harpoon Gun',
    type: 'Ranged',
    unlock: 'Purchased after the first boat key ($200)',
    damage: '45 per shot',
    use: 'The workhorse ranged option for mid-game bosses and aggressive fish',
  },
  {
    name: 'Rifle',
    type: 'Ranged',
    unlock: 'Late-game shop unlock',
    damage: 'High per shot, slow reload',
    use: 'Long-range burst damage during boss stagger windows',
  },
  {
    name: 'Titanium Harpoon',
    type: 'Ranged (upgrade)',
    unlock: 'Endgame upgrade of the Harpoon Gun',
    damage: 'Highest sustained ranged DPS',
    use: 'Deep Trench bosses and the Magma Whale finale',
  },
  {
    name: 'Dynamite',
    type: 'Explosive (consumable)',
    unlock: 'Crafted at cooking/crafting stations',
    damage: 'Area of effect, one-time use',
    use: "Clearing fish swarms and the Everyone's dream seagull achievement",
  },
];

export default function WeaponsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      <Breadcrumb items={[{ name: 'Weapons', href: '/weapons/' }]} />
      <h1 className="text-3xl font-extrabold text-white">All Weapons &amp; Attachments Guide</h1>
      <div className="bg-ocean-900/80 border border-ocean-800 rounded-xl p-6 space-y-6 text-sm text-gray-300">
        <p>
          Fishing rods bring in the money, but weapons keep you alive. How to Fish ships with a compact arsenal of
          melee, ranged, and explosive tools, and each boss encounter in the archipelago is tuned around a specific
          loadout. This page covers every weapon, when to buy it, and how to kit out a single gun for the{' '}
          <strong className="text-white">Fully equipped</strong> achievement.
        </p>

        <h2 className="text-xl font-bold text-white border-b border-ocean-800 pb-2">Complete Weapon List</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-ocean-950 text-gray-400 border-b border-ocean-800">
              <tr>
                <th className="p-3">Weapon</th>
                <th className="p-3">Type</th>
                <th className="p-3">How to Unlock</th>
                <th className="p-3">Damage Profile</th>
                <th className="p-3">Best Use</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-ocean-800/50">
              {weapons.map((w) => (
                <tr key={w.name}>
                  <td className="p-3 font-bold text-white">{w.name}</td>
                  <td className="p-3">{w.type}</td>
                  <td className="p-3">{w.unlock}</td>
                  <td className="p-3">{w.damage}</td>
                  <td className="p-3">{w.use}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="text-xl font-bold text-white border-b border-ocean-800 pb-2">What to Buy First</h2>
        <p>
          Early gold is scarce, so the purchase order matters. Save for the <strong>Harpoon Gun ($200)</strong> as
          your first major weapon purchase — it single-handedly makes the Spider Crab and Pufferfish fights
          manageable by letting you deal damage from outside claw and spike range. Skip the Rifle until you have
          already invested in a Deep-Sea Rod and Hull Armor Tier 1: without survivability you will not live long
          enough to benefit from the higher per-shot damage. The Titanium Harpoon upgrade is a pure endgame purchase
          and should only come after your boat can reliably reach the Deep Trench.
        </p>
        <ul className="list-disc pl-5 space-y-2 text-xs text-gray-300">
          <li>
            <strong>1. Harpoon Gun</strong> — 45 damage per shot at range; carries you through every mid-game boss
            fight.
          </li>
          <li>
            <strong>2. Hull Armor Tier 1 ($350)</strong> — not a weapon, but it halves incoming spike and claw
            damage so your weapons get more uptime.
          </li>
          <li>
            <strong>3. Rifle</strong> — long-range burst for the dive-bomb and airborne boss phases where the
            harpoon reload is too slow.
          </li>
          <li>
            <strong>4. Titanium Harpoon</strong> — the final ranged upgrade; mandatory DPS for the{' '}
            <Link href="/bosses/magma-whale/" className="text-aqua hover:underline">Magma Whale</Link> finale.
          </li>
        </ul>

        <h2 className="text-xl font-bold text-white border-b border-ocean-800 pb-2">
          Fully Equipped Achievement: All Attachments on One Weapon
        </h2>
        <p>
          The <Link href="/achievements/" className="text-aqua hover:underline">Fully equipped</Link> achievement
          (49.8% of players) asks you to <strong>apply all attachments to a single weapon</strong> — not to own
          every weapon in the game. Attachments unlock progressively at shops as you defeat bosses, and each one
          must be installed on the same gun. The Harpoon Gun is the cheapest platform to complete: its scope,
          reinforced line, and reel attachments are all purchasable by the time you clear the Pufferfish, so you can
          unlock this mid-game instead of waiting for the endgame rifle attachments.
        </p>

        <h2 className="text-xl font-bold text-white border-b border-ocean-800 pb-2">Boss Loadout Cheatsheet</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-ocean-950 text-gray-400 border-b border-ocean-800">
              <tr>
                <th className="p-3">Boss</th>
                <th className="p-3">Recommended Weapons</th>
                <th className="p-3">Why It Works</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-ocean-800/50">
              <tr>
                <td className="p-3 font-bold text-white">
                  <Link href="/bosses/spider-crab/" className="hover:text-aqua">Spider Crab</Link>
                </td>
                <td className="p-3">Knife + Harpoon Gun</td>
                <td className="p-3">Harpoon the legs from range, knife the soft body during shell-slam staggers.</td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-white">
                  <Link href="/bosses/pufferfish/" className="hover:text-aqua">Pufferfish</Link>
                </td>
                <td className="p-3">Harpoon Gun + Knife</td>
                <td className="p-3">Harpoon the mouth during dive-bomb stuns; knife the dorsal fin between spike waves.</td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-white">
                  <Link href="/bosses/giant-piranha/" className="hover:text-aqua">Giant Piranha</Link>
                </td>
                <td className="p-3">Harpoon Gun + Dynamite</td>
                <td className="p-3">Dynamite clears the leech swarms; harpoon the boss during its escape-bar rests.</td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-white">
                  <Link href="/bosses/magma-whale/" className="hover:text-aqua">Magma Whale</Link>
                </td>
                <td className="p-3">Titanium Harpoon + Rifle, then Bare Fists</td>
                <td className="p-3">
                  Burn the whale down with the Titanium Harpoon and Rifle, then finish at minimum HP with bare fists
                  for the Handyman achievement.
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-xs text-gray-400">
          For the bait side of the loadout equation, see the{' '}
          <Link href="/lures/" className="text-aqua hover:underline">lures &amp; baits guide</Link>, and for
          crew-based weapon role assignments check the{' '}
          <Link href="/multiplayer/" className="text-aqua hover:underline">4-player co-op guide</Link>.
        </p>

        <Sources
          items={[
            {
              label: 'Steam Community Achievements — How to Fish',
              href: 'https://steamcommunity.com/stats/4001890/achievements',
              note: 'Fully equipped description and global unlock rate',
            },
            {
              label: 'How to Fish on Steam',
              href: 'https://store.steampowered.com/app/4001890/How_to_Fish/',
              note: 'Official store page and game description',
            },
          ]}
        />
      </div>
    </div>
  );
}
