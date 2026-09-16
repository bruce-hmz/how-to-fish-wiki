import Breadcrumb from '@/components/Breadcrumb';
import Sources from '@/components/Sources';
import Link from 'next/link';

export const metadata = {
  title: 'Giant Spider Crab Boss Guide (First Boss)',
  description: 'How to summon and beat the Giant Spider Crab in How to Fish: the beer trade for the Empty Beer Can, the floating-crab bug workaround, and the Boat Keys reward.',
  alternates: { canonical: 'https://howtofish101.com/bosses/spider-crab/' },
};

export default function SpiderCrabPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      <Breadcrumb items={[{ name: 'Boss Battles', href: '/bosses/' }, { name: 'Spider Crab', href: '/bosses/spider-crab/' }]} />
      <h1 className="text-3xl font-extrabold text-white">Giant Spider Crab Boss Guide</h1>
      <p className="text-xs text-gray-500 -mt-4">Last verified September 16, 2026 · Game version 1.0.12 (known bug — see notice below)</p>

      <div className="bg-coral/10 border border-coral/40 rounded-xl p-6 space-y-3 text-sm text-gray-300">
        <p className="font-bold text-white text-base">⚠️ Known Bug: the crab floats and can&apos;t be hit (since Patch 1.0.11)</p>
        <p>
          Since the September 1 Patch 1.0.11, many players report the Spider Crab <strong className="text-white">floating in the air above the tidepool, out of reach</strong> — it cannot be lured down or damaged, and the fight can&apos;t be won that run. Three separate Steam threads appeared within a day of the update (25+ replies combined, including &ldquo;no way to beat him in the air&rdquo;). <strong className="text-white">Patch 1.0.12 (September 4) did not include a fix</strong>, and fresh &ldquo;same bug&rdquo; reports kept landing on the largest thread through September 9, 2026 — the bug is still live.
        </p>
        <p>
          <strong className="text-white">Community workaround (corroborated, not officially fixed):</strong> players in the bug threads say you can bring the crab back down — throw your boss bait behind the cockpit of the broken captain&apos;s boat and reel it in, so the crab follows the bait and gets wedged in the captain&apos;s seat where you can hit it. The trick was re-posted as recently as the September 9 thread activity, but it is not reliable for everyone: one player reports the crab clipping through the boat anyway, and another got the kill by dragging the fight underwater instead. Treat it as a community tool, not a guarantee.
        </p>
        <p className="text-xs text-gray-400">
          Check the{' '}
          <Link href="/troubleshooting/" className="text-aqua hover:underline">troubleshooting hub</Link> and the{' '}
          <Link href="/updates/" className="text-aqua hover:underline">patch notes</Link> for fix status — this notice will be removed as soon as an official fix lands.
        </p>
      </div>

      <div className="bg-ocean-900/80 border border-ocean-800 rounded-xl p-6 space-y-6 text-sm text-gray-300">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 bg-ocean-950 p-4 rounded-lg text-xs">
          <div><span className="text-gray-400">Location:</span> <strong className="text-white block">Island 1 — lighthouse tidepool</strong></div>
          <div><span className="text-gray-400">Summon bait:</span> <strong className="text-gold block">Empty Beer Can</strong></div>
          <div><span className="text-gray-400">Reward:</span> <strong className="text-aqua block">Boat Keys (shell trade)</strong></div>
          <div><span className="text-gray-400">HP:</span> <strong className="text-white block">Undocumented</strong></div>
        </div>

        <h2 className="text-xl font-bold text-white">Summoning with the Empty Beer Can</h2>
        <p>
          The chain starts with the island&apos;s beer: buy a Beer from the fisherman (IGN documents the price
          at <strong>$12</strong>) and feed it to him (press <strong>Q</strong>). He drinks it and hands back the{' '}
          <strong>Empty Beer Can</strong>, which attaches to your rod as a lure. Cast it at the lighthouse
          tidepool and the Spider Crab surfaces. This is the game&apos;s first boss gate — the same quest
          family as the official <em>&ldquo;Who stole my beer&rdquo;</em> achievement, which asks you to find
          the beer thief and bring it to the lighthouse keeper.
        </p>
        <p>
          You can re-fight the Spider Crab by buying another beer; what the repeat kills drop beyond the
          first clear is not documented anywhere reliable.
        </p>

        <h2 className="text-xl font-bold text-white">Winning the Fight</h2>
        <p>
          The one mechanically documented detail (IGN): the Spider Crab <strong className="text-white">freezes
          after its charge</strong>, and that stun is your damage window — attack while it is dizzy. Beyond
          that, treat the fight as a physics-melee brawl: any weapon works, the{' '}
          <Link href="/weapons/" className="text-aqua hover:underline">knife</Link> recommended by guides for
          the early game is enough. Exact HP, damage values, and phase percentages have never been published
          by the developers or documented in a guide database — an earlier version of this page printed them,
          and they were removed in our September 2026 fact audit.
        </p>

        <h2 className="text-xl font-bold text-white">Reward: The Boat Keys</h2>
        <p>
          Defeat the crab, grab the <strong>Spider Crab Shell</strong> it drops, and trade the shell back to
          the fisherman — he hands over the <strong>Boat Keys</strong>. That trade is the entire starter-island
          gate: with the keys you can hop into the repaired boat and sail to{' '}
          <Link href="/islands/" className="text-aqua hover:underline">island 2</Link>. (An earlier version of
          this page claimed a &ldquo;Boat Key Part #1 of 3&rdquo; system, 200 gold, and a 10% shield drop —
          none of that was sourced; the verified reward is the shell-for-keys trade.)
        </p>

        <div className="bg-ocean-950 border border-ocean-700 rounded-lg p-4 text-xs text-gray-400">
          <strong className="text-gold">Stuck?</strong> Patch 1.0.9 added Easy Mode: creatures have 25% less
          health and deal 50% less damage. Switch difficulty from the main menu or in-game via the{' '}
          <Link href="/difficulty/" className="text-aqua hover:underline">difficulty guide</Link>.
        </div>

        <Sources
          items={[
            {
              label: 'IGN Wiki: How to Get the Boat Keys — How to Fish',
              href: 'https://www.ign.com/wikis/how-to-fish/How_to_Get_the_Boat_Keys',
              note: 'beer price ($12), press-Q hand-in, dizzy-window tactic, shell-for-keys trade',
            },
            {
              label: 'G2A News: all fish, bosses, rods and bait by island',
              href: 'https://www.g2a.com/news/features/guide/how-to-fish-all-fish-bosses-rods-and-bait-by-island/',
              note: 'Empty Beer Can as the Spider Crab quest bait',
            },
            {
              label: 'Steam Discussions: "FLOATING CRABS" (bug reports after Patch 1.0.11)',
              href: 'https://steamcommunity.com/app/4001890/discussions/0/581681246928694953/',
              note: 'largest of three post-1.0.11 bug threads; source of the community workaround; still receiving fresh bug reports as of September 9, 2026',
            },
          ]}
        />
      </div>
    </div>
  );
}
