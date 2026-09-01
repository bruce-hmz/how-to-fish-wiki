import Breadcrumb from '@/components/Breadcrumb';
import Sources from '@/components/Sources';
import Link from 'next/link';

export const metadata = {
  title: 'Giant Spider Crab Boss Guide',
  description: 'How to summon and beat the Giant Spider Crab on starter lighthouse reef using the Empty Beer Can rage bait in How to Fish.',
  alternates: { canonical: 'https://howtofish101.com/bosses/spider-crab/' },
};

export default function SpiderCrabPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      <Breadcrumb items={[{ name: 'Boss Battles', href: '/bosses/' }, { name: 'Spider Crab', href: '/bosses/spider-crab/' }]} />
      <h1 className="text-3xl font-extrabold text-white">Giant Spider Crab Boss Guide</h1>

      <div className="bg-coral/10 border border-coral/40 rounded-xl p-6 space-y-3 text-sm text-gray-300">
        <p className="font-bold text-white text-base">⚠️ Known Bug: the crab floats and can&apos;t be hit (Patch 1.0.11)</p>
        <p>
          Since the September 1 Patch 1.0.11, many players report the Spider Crab <strong className="text-white">floating in the air above the tidepool, out of reach</strong> — it cannot be lured down or damaged, and the fight can&apos;t be won that run. Three separate Steam threads appeared within a day of the update (25+ replies combined, including &ldquo;no way to beat him in the air&rdquo;), and the developer has not shipped a fix yet — 1.0.11 is still the newest patch as of September 2, 2026.
        </p>
        <p>
          <strong className="text-white">Community-reported workaround (unverified by our editors):</strong> a player in the largest bug thread says you can bring the crab back down — throw your boss bait behind the cockpit of the broken captain&apos;s boat and reel it in, so the crab follows the bait and gets wedged in the captain&apos;s seat where you can hit it. It may save an otherwise lost run; treat it as unconfirmed until more players verify it.
        </p>
        <p className="text-xs text-gray-400">
          The strategy below is the normal, pre-1.0.11 fight and still applies once the bug is fixed or patched out. Check the{' '}
          <Link href="/troubleshooting/" className="text-aqua hover:underline">troubleshooting hub</Link> and the{' '}
          <Link href="/updates/" className="text-aqua hover:underline">patch notes</Link> for fix status — this notice will be removed as soon as an official fix lands.
        </p>
      </div>

      <div className="bg-ocean-900/80 border border-ocean-800 rounded-xl p-6 space-y-6 text-sm text-gray-300">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 bg-ocean-950 p-4 rounded-lg text-xs">
          <div><span className="text-gray-400">Location:</span> <strong className="text-white block">Lighthouse Tidepool</strong></div>
          <div><span className="text-gray-400">HP Pool:</span> <strong className="text-coral-light block">800 HP</strong></div>
          <div><span className="text-gray-400">Summon Bait:</span> <strong className="text-gold block">Empty Beer Can</strong></div>
          <div><span className="text-gray-400">Key Weakness:</span> <strong className="text-aqua block">Soft Belly (when flipped)</strong></div>
        </div>
        <p className="text-[11px] text-gray-500 -mt-4">
          HP and damage figures are community-tested and can shift between patches — see the{' '}
          <Link href="/updates/" className="text-gray-400 hover:text-aqua underline underline-offset-2">official patch notes history</Link>{' '}
          for balance changes.
        </p>
      </div>

      <div className="bg-ocean-900/80 border border-ocean-800 rounded-xl p-6 space-y-6 text-sm text-gray-300">
        <h2 className="text-xl font-bold text-white">Summoning with the Empty Beer Can</h2>
        <p>
          Buy a full beer from the tavern for $10, give it to the beach fisherman NPC, and he will drink it and toss you the Empty Beer Can. This is the Rage Bait needed to summon the Giant Spider Crab. Head to the lighthouse tidepool on the northeast side of the starter island and cast the can into the shallow water. After a 5-second rumble animation, the Spider Crab bursts from beneath the sand and the arena seals with rock barriers, preventing escape until the fight concludes.
        </p>
        <p>
          You can re-fight the Spider Crab as many times as you want by purchasing another beer. Subsequent kills still drop gold but not additional key parts.
        </p>

        <h2 className="text-xl font-bold text-white">Combat Strategy</h2>
        <p>
          The Spider Crab has three main attack patterns that cycle throughout the fight:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-xs text-gray-300">
          <li><strong>Claw Swipe</strong>: The crab raises one pincer and swings horizontally. Telegraphed by a 1-second wind-up with a clicking sound. Dodge by stepping backward or circling behind the lighthouse pillar. Deals 20 damage on hit.</li>
          <li><strong>Shell Slam</strong>: The crab lifts its entire body and slams down, creating a small shockwave. Jump or stay at range when you see it rear up. Deals 35 damage and briefly stuns you if hit.</li>
          <li><strong>Burrow Attack</strong>: The crab digs underground and tracks your position for 3 seconds before erupting upward. Watch for the sand trail moving toward you and sidestep at the last moment. Deals 25 damage but leaves the crab flipped on its back for 4 seconds — your best damage window.</li>
        </ul>

        <h2 className="text-xl font-bold text-white">Phase Breakdown</h2>
        <p>
          <strong>Phase 1 (100%–50% HP)</strong>: The Spider Crab uses Claw Swipe and Shell Slam in a predictable rotation. Stay near the lighthouse pillar and circle it to dodge swipes. Attack the legs between combos with your Knife for consistent damage.
        </p>
        <p>
          <strong>Phase 2 (50%–25% HP)</strong>: The crab becomes enraged, glowing red. Attack speed increases by 50% and it begins using the Burrow Attack. This phase is actually easier if you stay calm — the Burrow Attack leaves it vulnerable for longer than any Phase 1 opening. Bait out burrow attacks by standing still until you see the sand trail, then dodge.
        </p>
        <p>
          <strong>Phase 3 (25%–0% HP)</strong>: The crab retreats to the center of the tidepool and begins rapid-fire Claw Swipes in all directions while slowly advancing. Sprint to the edge of the arena and use ranged attacks (thrown fish, harpoon) if available. If melee only, wait for the brief pause between swipe combos to dash in, land 2 hits, and dash out. At 5% HP it does one final Shell Slam — dodge this and finish it off during the recovery.
        </p>

        <h2 className="text-xl font-bold text-white">Reward: Boat Key Part #1</h2>
        <p>
          Upon defeat, the Spider Crab drops <strong>Boat Key Part #1</strong>, 200 gold, and occasionally a Spider Crab Shell Shield (10% drop rate). Take the key to the dock mechanic NPC to unlock your boat engine ignition. This is the gateway to the rest of the archipelago — without it, you are stranded on the starter island. The Spider Crab Shell Shield is a cosmetic back accessory that reduces fall damage by 15%.
        </p>

        <Sources
          items={[
            {
              label: 'How to Fish on Steam',
              href: 'https://store.steampowered.com/app/4001890/How_to_Fish/',
              note: 'Official game info; fight phases verified in-game by our editors',
            },
            {
              label: 'Steam Discussions: "FLOATING CRABS" (bug reports after Patch 1.0.11)',
              href: 'https://steamcommunity.com/app/4001890/discussions/0/581681246928694953/',
              note: 'largest of three post-1.0.11 bug threads; source of the community workaround quoted above',
            },
          ]}
        />
      </div>
    </div>
  );
}
