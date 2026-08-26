import Breadcrumb from '@/components/Breadcrumb';
import Sources from '@/components/Sources';
import Link from 'next/link';

export const metadata = {
  title: 'Volcanic Magma Whale Final Boss Strategy',
  description: 'Beat the final Magma Whale boss in Mount Inferno crater. Bare hand achievement strategy and golden rod reward in How to Fish.',
  alternates: { canonical: 'https://howtofish101.com/bosses/magma-whale/' },
};

export default function MagmaWhalePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      <Breadcrumb items={[{ name: 'Boss Battles', href: '/bosses/' }, { name: 'Magma Whale', href: '/bosses/magma-whale/' }]} />
      <h1 className="text-3xl font-extrabold text-white">Volcanic Magma Whale (Final Boss)</h1>

      <div className="bg-ocean-900/80 border border-ocean-800 rounded-xl p-6 space-y-6 text-sm text-gray-300">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 bg-ocean-950 p-4 rounded-lg text-xs">
          <div><span className="text-gray-400">Location:</span> <strong className="text-white block">Deep Volcanic Trench</strong></div>
          <div><span className="text-gray-400">HP Pool:</span> <strong className="text-coral-light block">3,000 HP</strong></div>
          <div><span className="text-gray-400">Summon Bait:</span> <strong className="text-gold block">Volcano Core</strong></div>
          <div><span className="text-gray-400">Key Weakness:</span> <strong className="text-aqua block">Blowhole (during surface)</strong></div>
        </div>
        <p className="text-[11px] text-gray-500 -mt-4">
          HP and damage figures are community-tested and can shift between patches — the Magma Whale was explicitly
          nerfed in <Link href="/updates/" className="text-gray-400 hover:text-aqua underline underline-offset-2">Patch 1.0.4</Link>.
        </p>
      </div>

      <div className="bg-ocean-900/80 border border-ocean-800 rounded-xl p-6 space-y-6 text-sm text-gray-300">
        <h2 className="text-xl font-bold text-white">Accessing the Deep Volcanic Trench</h2>
        <p>
          The Magma Whale resides in the Deep Volcanic Trench beneath Mount Inferno Caldera. To reach it, you must first upgrade your boat with <strong>Heat-Shielded Titanium Hull ($2,000)</strong> — without it, your boat takes continuous fire damage in the lava canal and sinks within 30 seconds. Navigate through the lava canal from the south side of Mount Inferno, following the obsidian rock markers. The trench entrance is a massive underwater cavern at coordinates (X: 890, Y: -420).
        </p>
        <p>
          The <strong>Volcano Core</strong> bait is crafted by combining 3 Obsidian Shards (mined from Mount Inferno rocks) with 1 Magma Eel (caught in the lava pools using Fireproof Lure). Cast the Volcano Core into the trench center to begin the fight.
        </p>

        <h2 className="text-xl font-bold text-white">Attack Patterns</h2>
        <ul className="list-disc pl-5 space-y-2 text-xs text-gray-300">
          <li><strong>Magma Breath</strong>: The whale surfaces and exhales a 120-degree cone of molten rock across the water surface. The telegraph is a deep rumbling and orange glow from its blowhole 2 seconds before firing. Steer your boat perpendicular to its facing direction to escape the cone. Deals 60 damage per second to anything caught in the stream.</li>
          <li><strong>Tail Slam</strong>: The whale pivots and slams its massive tail onto the water, creating a shockwave that travels outward in a ring. Jump the shockwave by timing a boat boost (press Shift) at the moment the ring reaches you, or take 40 damage and get pushed back significantly.</li>
          <li><strong>Dive Attack</strong>: The whale dives deep, disappearing for 5 seconds, then erupts directly beneath your boat. Watch for rising bubbles — they mark the eruption point. Move away from the bubble column immediately. A direct hit deals 80 damage and can flip your boat, requiring a 3-second recovery.</li>
        </ul>

        <h2 className="text-xl font-bold text-white">Phase Breakdown</h2>
        <p>
          <strong>Phase 1 (100%–60% HP)</strong>: The whale alternates between Magma Breath and Tail Slam with generous recovery windows between attacks. Focus on hitting the blowhole with harpoon shots when it surfaces to breathe — blowhole hits deal 2x damage. Keep your boat moving in wide circles around the arena to maintain distance.
        </p>
        <p>
          <strong>Phase 2 (60%–30% HP)</strong>: The whale submerges and begins using Dive Attacks mixed with surface Magma Breath combos. The arena also begins filling with floating lava rocks that damage your boat on contact. Navigate carefully between rocks while watching for dive bubbles. During this phase, the whale surfaces less frequently, so every blowhole window is critical. Use the Titanium Harpoon for maximum damage during brief surface moments.
        </p>
        <p>
          <strong>Phase 3 (30%–0% HP)</strong>: The whale enters a frenzy, chaining all three attacks rapidly with minimal downtime. Lava geysers erupt randomly across the arena floor, creating additional hazards. The key to Phase 3 is patience — do not overcommit to damage windows. Wait for the post-Dive Attack stun when the whale lies on the surface for 4 seconds. This is your only safe damage window in the final phase. Two or three stun cycles should finish it off.
        </p>

        <h2 className="text-xl font-bold text-white">Bare Hands Achievement (Handyman)</h2>
        <p>
          Whittle the whale down to 1% HP using your full arsenal, then unequip all weapons and land the killing blow with bare fists. This unlocks the{' '}
          <Link href="/achievements/" className="text-aqua hover:underline"><strong>Handyman</strong></Link>{' '}
          achievement — &quot;Defeat the final boss with your bare hands&quot; — earned by only 1.7% of players
          worldwide. The bare-fist hit deals only 1 damage, so make sure the whale is at absolute minimum health
          before attempting this. For the full weapon progression that gets you to this fight, see the{' '}
          <Link href="/weapons/" className="text-aqua hover:underline">weapons guide</Link>.
        </p>

        <h2 className="text-xl font-bold text-white">Rewards</h2>
        <ul className="list-disc pl-5 space-y-2 text-xs text-gray-300">
          <li><strong>Boat Key Part #3</strong> (100%): The final engine component. Unlocks the Turbine Engine and access to the open ocean endgame zone.</li>
          <li><strong>Legendary Volcanic Rod</strong> (100%): The strongest fishing rod in the game. Catches any fish instantly without reeling minigame. Glows orange with ember particles.</li>
          <li><strong>1,500 Gold</strong> (100%): Enough to buy most remaining upgrades.</li>
          <li><strong>Magma Whale Mount Skin</strong> (8%): Rare cosmetic that reskins your boat as a miniature lava whale.</li>
          <li><strong>Inferno Crown</strong> (3%): Ultra-rare head cosmetic with fire particle effects.</li>
        </ul>

        <Sources
          items={[
            {
              label: 'Steam Community Achievements — How to Fish',
              href: 'https://steamcommunity.com/stats/4001890/achievements',
              note: 'Handyman global unlock rate (1.7%)',
            },
            {
              label: 'How to Fish on Steam',
              href: 'https://store.steampowered.com/app/4001890/How_to_Fish/',
              note: 'Official game description and release info',
            },
          ]}
        />
      </div>
    </div>
  );
}
