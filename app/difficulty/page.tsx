import Breadcrumb from '@/components/Breadcrumb';
import Sources from '@/components/Sources';
import Link from 'next/link';

export const metadata = {
  title: 'Difficulty Guide: Easy vs Normal vs Hard',
  description:
    'How to Fish difficulty modes from Patch 1.0.9: exact Easy, Normal, and Hard modifiers, how to switch mid-game, and which mode to pick.',
  alternates: { canonical: 'https://howtofish101.com/difficulty/' },
};

export default function DifficultyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      <Breadcrumb items={[{ name: 'Difficulty Modes', href: '/difficulty/' }]} />
      <h1 className="text-3xl font-extrabold text-white">Difficulty Modes: Easy, Normal &amp; Hard Explained</h1>
      <div className="bg-ocean-900/80 border border-ocean-800 rounded-xl p-6 space-y-6 text-sm text-gray-300">
        <p>
          How to Fish shipped with a single fixed difficulty, but{' '}
          <Link href="/updates/" className="text-aqua hover:underline">Patch 1.0.9</Link>{' '}
          (August 24, 2026) added three modes: <strong className="text-white">Easy</strong>,{' '}
          <strong className="text-white">Normal</strong> (the default, identical to the game before the patch), and{' '}
          <strong className="text-white">Hard</strong>. This page covers the exact stat modifiers, where to change
          the setting, and which mode makes sense for your playthrough.
        </p>

        <h2 className="text-xl font-bold text-white border-b border-ocean-800 pb-2">Exact Stat Modifiers per Mode</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-ocean-950 text-gray-400 border-b border-ocean-800">
              <tr>
                <th className="p-3">Mode</th>
                <th className="p-3">Creature Health</th>
                <th className="p-3">Creature Damage</th>
                <th className="p-3">Best For</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-ocean-800/50">
              <tr>
                <td className="p-3 font-bold text-green-400">Easy</td>
                <td className="p-3">−25%</td>
                <td className="p-3">−50%</td>
                <td className="p-3">Casual play, tough boss walls, younger players</td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-white">Normal</td>
                <td className="p-3">Baseline (100%)</td>
                <td className="p-3">Baseline (100%)</td>
                <td className="p-3">The intended experience — same as launch version</td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-coral-light">Hard</td>
                <td className="p-3">+25%</td>
                <td className="p-3">+25%</td>
                <td className="p-3">Veterans, challenge runs, more tense boss fights</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-gray-400">
          Note the asymmetry: Easy cuts incoming damage in half but only trims health by a quarter, so fights end
          faster on both ends. Hard raises both equally, which makes boss mistake windows far less forgiving —
          spike waves and dive bombs that chip you down on Normal can two-shot your crew on Hard.
        </p>

        <h2 className="text-xl font-bold text-white border-b border-ocean-800 pb-2">How to Change Difficulty</h2>
        <p>
          Two places, both added in Patch 1.0.9:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-xs text-gray-300">
          <li><strong>Main menu</strong> — set your preferred mode before loading a save.</li>
          <li><strong>In-game</strong> — switch mid-session through the pause menu, no restart required.</li>
        </ul>
        <p>
          The default setting is Normal, which plays exactly like the game did before the patch. If you started
          playing before August 24 and never touched the option, you are on Normal.
        </p>

        <h2 className="text-xl font-bold text-white border-b border-ocean-800 pb-2">Which Mode Should You Pick?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-ocean-950 border border-green-900/50 rounded-lg p-4">
            <h3 className="font-bold text-green-400 text-sm mb-2">Pick Easy if…</h3>
            <p className="text-xs text-gray-400">
              A boss has stalled your progress for several attempts. The{' '}
              <Link href="/bosses/magma-whale/" className="text-aqua hover:underline">Magma Whale finale</Link> and
              the <Link href="/bosses/pufferfish/" className="text-aqua hover:underline">Pufferfish spike barrage</Link>{' '}
              are the usual walls. Halved damage means you survive an extra mistake per phase.
            </p>
          </div>
          <div className="bg-ocean-950 border border-ocean-700 rounded-lg p-4">
            <h3 className="font-bold text-white text-sm mb-2">Pick Normal if…</h3>
            <p className="text-xs text-gray-400">
              You want the tuned experience the developers balanced around — every phase threshold and survival tip
              in our <Link href="/guide/" className="text-aqua hover:underline">walkthrough</Link> and boss guides
              assumes these numbers.
            </p>
          </div>
          <div className="bg-ocean-950 border border-coral/30 rounded-lg p-4">
            <h3 className="font-bold text-coral-light text-sm mb-2">Pick Hard if…</h3>
            <p className="text-xs text-gray-400">
              You cleared the game on Normal and want the bosses to respect you again. Pair it with a{' '}
              <Link href="/multiplayer/" className="text-aqua hover:underline">full co-op crew</Link> and role
              assignments for the best results.
            </p>
          </div>
        </div>

        <h2 className="text-xl font-bold text-white border-b border-ocean-800 pb-2">Difficulty and Achievements</h2>
        <p>
          The official 1.0.9 patch notes do not mention any achievement restrictions tied to difficulty — no
          achievements are documented as Easy-exclusive or Hard-only. That said, the rarest completion runs
          (like <Link href="/achievements/" className="text-aqua hover:underline">Bean</Link>, finishing the game
          within one hour, held by 1.0% of players) were set before difficulty modes existed, so their leaderboard
          context is Normal-only. If Dazed Games documents difficulty-gated achievements in a future patch, we will
          update this section.
        </p>

        <h2 className="text-xl font-bold text-white border-b border-ocean-800 pb-2">Boss Tips by Difficulty</h2>
        <ul className="list-disc pl-5 space-y-2 text-xs text-gray-300">
          <li>
            <strong>Easy</strong>: Boss health drops 25%, so burst windows matter less — you can win through
            patience alone. The Pufferfish Phase 3 dive-bombs become survivable even without Hull Armor.
          </li>
          <li>
            <strong>Normal</strong>: Follow the loadout advice in each{' '}
            <Link href="/bosses/" className="text-aqua hover:underline">boss guide</Link> — Hull Armor Tier 1 before
            the Pufferfish, Heat-Shielded Hull before the Magma Whale.
          </li>
          <li>
            <strong>Hard</strong>: +25% boss HP stretches every fight by roughly a quarter, so bring more cooked
            fish than the guides suggest and never enter a finale without full engine upgrades. The{' '}
            <Link href="/weapons/" className="text-aqua hover:underline">Titanium Harpoon</Link> stops being a
            luxury.
          </li>
        </ul>

        <Sources
          items={[
            {
              label: 'PATCH 1.0.9 — official Steam announcement',
              href: 'https://steamcommunity.com/games/4001890/announcements/detail/711158520539514352',
              note: 'Difficulty mode modifiers and where to change them, quoted from the patch notes',
            },
          ]}
        />
      </div>
    </div>
  );
}
