import Breadcrumb from '@/components/Breadcrumb';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Editorial Policy – How to Fish Wiki',
  description:
    'How How to Fish Wiki sources, verifies, and corrects game data: source hierarchy, no-fabrication rule, spoiler policy, and update cadence.',
  alternates: { canonical: 'https://howtofish101.com/editorial-policy/' },
};

export default function EditorialPolicyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8 text-sm text-gray-300">
      <Breadcrumb items={[{ name: 'Editorial Policy', href: '/editorial-policy/' }]} />
      <h1 className="text-3xl font-bold text-white">Editorial Policy</h1>
      <p className="text-xs text-gray-500">Last updated: August 26, 2026</p>

      <section className="space-y-3 bg-ocean-900/80 border border-ocean-800 rounded-xl p-6">
        <h2 className="text-xl font-bold text-white">One Game, Full Depth</h2>
        <p>
          How to Fish Wiki covers exactly one game: <strong className="text-white">How to Fish</strong> by Dazed
          Games (Steam, 2026). We do not run a multi-game content farm. Every guide, stat table, and walkthrough on
          this site was written while playing this specific game, which is why pages go deep — boss phase timings,
          real achievement unlock rates, and exact shop prices — instead of recycling generic fishing-game advice.
        </p>
      </section>

      <section className="space-y-3 bg-ocean-900/80 border border-ocean-800 rounded-xl p-6">
        <h2 className="text-xl font-bold text-white">Source Hierarchy</h2>
        <p>When sources disagree, we resolve conflicts in this fixed order:</p>
        <ol className="list-decimal pl-5 space-y-2 text-xs text-gray-300">
          <li>
            <strong className="text-white">In-game verification.</strong> Our editors replay the encounter, read the
            shop, or reproduce the bug before a guide ships or after any patch.
          </li>
          <li>
            <strong className="text-white">Official data.</strong> The Steam store page and Steam Community
            achievement statistics provide canonical pricing, system requirements, language lists, and global
            achievement unlock percentages.
          </li>
          <li>
            <strong className="text-white">Official patch notes.</strong> Dazed Games' update announcements
            (1.0.4 through 1.0.9 at the time of writing) define what changed and when.
          </li>
          <li>
            <strong className="text-white">Community verification.</strong> Player reports are only promoted to a
            page once a second editor can reproduce them.
          </li>
        </ol>
      </section>

      <section className="space-y-3 bg-ocean-900/80 border border-ocean-800 rounded-xl p-6">
        <h2 className="text-xl font-bold text-white">We Do Not Fabricate Data</h2>
        <p>
          Every number on this site traces back to a source you can check: HP thresholds and phase timings come from
          our own runs, achievement percentages come from Steam's public community stats, and prices come from the
          in-game shops. If we have not verified a number, we either omit it or mark it explicitly as unconfirmed.
          We never pad pages with invented drop rates or made-up percentages to chase search rankings.
        </p>
      </section>

      <section className="space-y-3 bg-ocean-900/80 border border-ocean-800 rounded-xl p-6">
        <h2 className="text-xl font-bold text-white">Spoiler Policy</h2>
        <p>
          This is a wiki for a game with story beats and a finale. Pages about bosses, endings, and secret
          achievements discuss those events openly — that is the point of a walkthrough. We do our best to put a
          clear warning at the top of pages that reveal the final boss or ending content, but readers should assume
          any guide page beyond the beginner walkthrough contains mid- or late-game spoilers.
        </p>
      </section>

      <section className="space-y-3 bg-ocean-900/80 border border-ocean-800 rounded-xl p-6">
        <h2 className="text-xl font-bold text-white">Updates &amp; Corrections</h2>
        <p>
          How to Fish is actively patched. After each official update we re-check the pages most likely to be
          affected — shop prices, boss phases, achievement lists, and troubleshooting fixes — against the new build
          and publish corrections, usually within a few days of the patch. When we get something wrong, we fix the
          page and, where the error was material, note the correction on the page itself rather than silently
          rewriting it.
        </p>
      </section>

      <section className="space-y-3 bg-ocean-900/80 border border-ocean-800 rounded-xl p-6">
        <h2 className="text-xl font-bold text-white">Media &amp; Assets</h2>
        <p>
          Achievement icons and game terminology reference How to Fish and remain the property of Dazed Games. We
          use them for identification purposes only, on a community resource basis. Screenshots and strategy text
          are our own. This site is not affiliated with or endorsed by Dazed Games.
        </p>
      </section>

      <section className="space-y-3 bg-ocean-900/80 border border-ocean-800 rounded-xl p-6">
        <h2 className="text-xl font-bold text-white">Core Source Set</h2>
        <ul className="space-y-2 text-xs text-gray-300">
          <li>
            <a href="https://store.steampowered.com/app/4001890/How_to_Fish/" target="_blank" rel="noopener noreferrer" className="text-aqua hover:underline">
              How to Fish — Steam store page ↗
            </a>{' '}
            (pricing, system requirements, supported languages)
          </li>
          <li>
            <a href="https://steamcommunity.com/stats/4001890/achievements" target="_blank" rel="noopener noreferrer" className="text-aqua hover:underline">
              Steam Community achievement statistics ↗
            </a>{' '}
            (global unlock percentages for all 28 achievements)
          </li>
          <li>
            Official Dazed Games patch announcements, 1.0.4–1.0.9 (balance changes, new content, bug fixes)
          </li>
          <li>
            Our editors' in-game runs and reproducible community bug reports (troubleshooting pages)
          </li>
        </ul>
      </section>
    </div>
  );
}
