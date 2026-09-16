import Breadcrumb from '@/components/Breadcrumb';
import Sources from '@/components/Sources';
import Link from 'next/link';

export const metadata = {
  title: 'Mutated Bowhead Whale — Final Boss Guide (How to Fish)',
  description:
    'The How to Fish final boss is the Mutated Bowhead Whale on the volcano island: Fish Bucket → Bowhead Whale → final fight. Community tactics, the 1.0.12 explosive fix, and the Handyman bare-hands achievement.',
  alternates: { canonical: 'https://howtofish101.com/bosses/magma-whale/' },
};

export default function FinalBossPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      <Breadcrumb items={[{ name: 'Boss Battles', href: '/bosses/' }, { name: 'Mutated Bowhead Whale', href: '/bosses/magma-whale/' }]} />
      <h1 className="text-3xl font-extrabold text-white">Mutated Bowhead Whale (Final Boss)</h1>
      <p className="text-xs text-gray-500 -mt-4">Last verified September 16, 2026 · Game version 1.0.12</p>

      <div className="bg-gold/10 border border-gold/40 rounded-xl p-6 space-y-3">
        <p className="font-bold text-white text-sm">Name correction (September 2026 audit)</p>
        <p className="text-xs text-gray-300 leading-relaxed">
          This guide was previously titled &ldquo;Volcanic Magma Whale.&rdquo; That name appears in no
          external source. Two independent guide databases (G2A, Mobalytics) name the final boss the{' '}
          <strong className="text-white">Mutated Bowhead Whale</strong>, summoned by using a{' '}
          <strong className="text-white">Bowhead Whale</strong> as bait; players on Steam just call it
          &ldquo;the whale&rdquo; or &ldquo;the last boss.&rdquo; The URL stays the same so existing links
          keep working.
        </p>
      </div>

      <div className="bg-ocean-900/80 border border-ocean-800 rounded-xl p-6 space-y-6 text-sm text-gray-300">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 bg-ocean-950 p-4 rounded-lg text-xs">
          <div><span className="text-gray-400">Location:</span> <strong className="text-white block">Island 5 — Volcano</strong></div>
          <div><span className="text-gray-400">Summon bait:</span> <strong className="text-gold block">A Bowhead Whale</strong></div>
          <div><span className="text-gray-400">Unlocks:</span> <strong className="text-aqua block">Game completion</strong></div>
          <div><span className="text-gray-400">HP:</span> <strong className="text-white block">Undocumented</strong></div>
        </div>

        <div className="bg-aqua/10 border border-aqua/40 rounded-xl p-5 space-y-2">
          <p className="font-bold text-white text-sm">✅ Patch 1.0.12 made explosives reliable (September 4, 2026)</p>
          <p className="text-xs leading-relaxed">
            Before this patch, players found that dynamite stopped working in the later phases: <em>&ldquo;phase 1 dynamite works,
            phase 2 takes no damage — is this intentional or a bug?&rdquo;</em> It was a bug. The official 1.0.12 notes fix exactly
            that: <strong className="text-white">&ldquo;Final boss should now take damage from explosives even when landing on its
            tail.&rdquo;</strong> In practice, the whale&apos;s body used to sit on your planted dynamite without triggering it — so if
            you saw &ldquo;explosive immunity&rdquo; in older clips or guides, that was the bug, not a mechanic. Stacked dynamite is now a
            dependable damage source throughout the fight. Full notes in our{' '}
            <Link href="/updates/" className="text-aqua hover:underline">patch history</Link>.
          </p>
        </div>

        <h2 className="text-xl font-bold text-white">The Chain to the Final Fight</h2>
        <p>
          The final boss sits at the end of a two-step bait chain on the volcano island: use the{' '}
          <strong>Fish Bucket</strong> quest item to summon the regular <strong>Bowhead Whale</strong>, defeat
          it, then use the <strong>Bowhead Whale itself as bait</strong> — that summons the Mutated Bowhead
          Whale. (Community shorthand from a real thread: the regular, non-mutated bowhead &ldquo;just blows
          up with dynamite&rdquo;; the mutated one is the fight that ends the game.) The parallel island-5
          boss catch is the Goblin Shark on the Scientific Boss Lure.
        </p>

        <h2 className="text-xl font-bold text-white">Community Tactics &amp; What to Expect</h2>
        <p>
          After one player called the final boss <em>&ldquo;an absolute chore and not fun at all&rdquo;</em>{' '}
          where <em>&ldquo;spaghetti coding makes it completely RNG whether or not youre gonna win that fight,&rdquo;</em> the
          top reply was two words: <em>&ldquo;just keep moving!&rdquo;</em> Another finisher agrees —{' '}
          <em>&ldquo;what i did was just move.... a LOT.&rdquo;</em> Constant motion is the whole game plan,
          and it pairs with the 1.0.12 dynamite fix above: plant explosives, keep the boat moving, never sit
          under the whale.
        </p>
        <p>
          One honest caveat: one post-1.0.12 player reports the whale is still instantly lethal on landing
          despite the explosive fix — <em>&ldquo;HIS TAIL ACCIDENTALLY TOUCHED ME WHEN HE LANDED GUESS I
          DIE&rdquo;</em> — so treat every landing as a get-out-of-the-way moment. That instant kill is a
          single community report we have not seen corroborated, but the cheap defense (never be under the
          whale) costs you nothing.
        </p>

        <h2 className="text-xl font-bold text-white">Bare Hands Achievement (Handyman)</h2>
        <p>
          Kill the final boss with your bare fists to unlock the{' '}
          <Link href="/achievements/" className="text-aqua hover:underline"><strong>Handyman</strong></Link>{' '}
          achievement — officially described as &ldquo;Defeat the final boss with your bare hands,&rdquo;
          earned by <strong>1.7%</strong> of players worldwide (Steam global stats). Patch 1.0.4 fixed it so
          the achievement unlocks for everyone in the session, not just the finisher. The exact damage a
          bare-fist hit deals is not documented — the practical route players describe is whittling the boss
          down with your full arsenal first and landing the killing blow empty-handed.
        </p>

        <h2 className="text-xl font-bold text-white">What We Removed</h2>
        <p className="text-xs text-gray-400 leading-relaxed">
          An earlier version of this page carried a 3,000 HP pool, exact damage numbers per attack, phase
          thresholds, map coordinates, a &ldquo;Heat-Shielded Titanium Hull ($2,000)&rdquo; requirement, a
          &ldquo;Volcano Core&rdquo; craft recipe (3 Obsidian Shards + 1 Magma Eel), and a reward list
          including a &ldquo;Legendary Volcanic Rod&rdquo; and two cosmetic drop rates. None of it was
          sourced from any guide database, patch note, or player thread — it was removed in our September
          2026 fact audit. The verified content above is what the sources actually support.
        </p>

        <div className="bg-ocean-950 border border-ocean-700 rounded-lg p-4 text-xs text-gray-400">
          <strong className="text-gold">Stuck on this fight?</strong> Patch 1.0.9 added Easy Mode: creatures
          have 25% less health and deal 50% less damage — the difficulty the community recommends for the
          Handyman attempt while a run is still forgiving. Details in the{' '}
          <Link href="/difficulty/" className="text-aqua hover:underline">difficulty guide</Link>.
        </div>

        <Sources
          items={[
            {
              label: 'G2A News: all fish, bosses, rods and bait by island',
              href: 'https://www.g2a.com/news/features/guide/how-to-fish-all-fish-bosses-rods-and-bait-by-island/',
              note: 'Fish Bucket → Bowhead Whale → Mutated Bowhead Whale final-boss chain',
            },
            {
              label: 'Mobalytics: How to Fish — All 49 Fish, Creatures and Lures',
              href: 'https://mobalytics.gg/gamebase/guides/how-to-fish-all-fish-creatures-lures',
              note: 'independent corroboration of the final-boss name and bait chain',
            },
            {
              label: 'Steam Community Achievements — How to Fish',
              href: 'https://steamcommunity.com/stats/4001890/achievements',
              note: 'Handyman global unlock rate (1.7%) and official wording',
            },
            {
              label: 'Patch 1.0.12 official notes (Steam News, September 4, 2026)',
              href: 'https://store.steampowered.com/news/app/4001890/view/698774889153168485',
              note: 'source of the verbatim final-boss explosive-on-tail fix',
            },
            {
              label: 'Patch 1.0.4 official notes (Steam)',
              href: 'https://steamcommunity.com/games/4001890/announcements/detail/711158520539513916',
              note: '"Magma Whale boss nerfed" — the final boss nerf; Handyman session-wide unlock fix',
            },
            {
              label: 'Steam Discussion: Whale Boss 2nd Phase Immune to Explosive Damage?',
              href: 'https://steamcommunity.com/app/4001890/discussions/0/581681298840556965/',
              note: 'the pre-1.0.12 phase-2 dynamite report the patch note answers',
            },
            {
              label: 'Steam Discussion: Last Boss is an absolute chore (September 13, 2026)',
              href: 'https://steamcommunity.com/app/4001890/discussions/0/564793766239599085/',
              note: 'community "just keep moving" tactics, the chore/RNG expectation-setting quotes, and the regular-bowhead dynamite line',
            },
            {
              label: 'Steam Discussion: THE WHALE SHOULD NOT ONESHOT (September 10, 2026)',
              href: 'https://steamcommunity.com/app/4001890/discussions/0/564793434686198062/',
              note: 'post-1.0.12 tail-touch instant-kill report (single account, uncorroborated)',
            },
          ]}
        />
      </div>
    </div>
  );
}
