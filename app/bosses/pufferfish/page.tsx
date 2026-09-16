import Breadcrumb from '@/components/Breadcrumb';
import Link from 'next/link';
import Sources from '@/components/Sources';

export const metadata = {
  title: 'Pufferfish Boss Guide: Carrot Summon',
  description: 'How to summon and beat the Pufferfish boss in How to Fish: the Carrot quest bait on the desert island, post-nerf expectations, and what the kill unlocks.',
  alternates: { canonical: 'https://howtofish101.com/bosses/pufferfish/' },
};

export default function PufferfishPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      <Breadcrumb items={[{ name: 'Boss Battles', href: '/bosses/' }, { name: 'Pufferfish Boss', href: '/bosses/pufferfish/' }]} />
      <h1 className="text-3xl font-extrabold text-white">Pufferfish Boss Fight (Desert Island Gate)</h1>
      <p className="text-xs text-gray-500 -mt-4">Last verified September 16, 2026 · Game version 1.0.12</p>

      <div className="bg-ocean-900/80 border border-ocean-800 rounded-xl p-6 space-y-6 text-sm text-gray-300">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 bg-ocean-950 p-4 rounded-lg text-xs">
          <div><span className="text-gray-400">Location:</span> <strong className="text-white block">Island 3 — Desert</strong></div>
          <div><span className="text-gray-400">Summon bait:</span> <strong className="text-gold block">Carrot</strong></div>
          <div><span className="text-gray-400">Unlocks:</span> <strong className="text-aqua block">Route to Island 4</strong></div>
          <div><span className="text-gray-400">HP:</span> <strong className="text-white block">Undocumented</strong></div>
        </div>

        <div className="bg-gold/10 border border-gold/40 rounded-xl p-5 space-y-2">
          <p className="font-bold text-white text-sm">Corrected September 2026: the summon item is a Carrot</p>
          <p className="text-xs leading-relaxed">
            Two independent guide databases (G2A and Mobalytics) document the same summon: the Pufferfish is
            summoned with a <strong className="text-white">Carrot</strong> used as quest bait on island 3. An
            earlier version of this page — and several older tables on this site — claimed a crafted
            &ldquo;Hot Dog Feast&rdquo; (5 Hot Dogs combined at a cooking station). That recipe appears in no
            external source and was removed as fabricated.
          </p>
        </div>

        <h2 className="text-xl font-bold text-white">Where the Fight Sits in Progression</h2>
        <p>
          The Pufferfish is the island-3 story gate: beat it and hand in the drop, and the route onward
          to <Link href="/islands/" className="text-aqua hover:underline">island 4</Link> opens. One
          community-answered detail trips players up: the hand-in wants the{' '}
          <strong className="text-white">bone-in tail piece, not meat chunks</strong> — Steam threads report
          &ldquo;the guy sitting down doesn&apos;t accept the chunks&rdquo; until you bring the tail, after which the
          next island appears. The island also hosts the Blue Shark boss-class catch (Standard Boss Lure →
          Grillmaster unlocks the Grill), so the desert step usually covers both fights. The boss was{' '}
          <strong className="text-white">nerfed in the official Patch 1.0.4</strong>, which noted the change
          plainly as &ldquo;Pufferfish boss nerfed&rdquo; — see the{' '}
          <Link href="/updates/" className="text-aqua hover:underline">patch history</Link>.
        </p>

        <h2 className="text-xl font-bold text-white">What We Honestly Do Not Know</h2>
        <p>
          The developers have not published this boss&apos;s HP, damage values, phase thresholds, or loot
          table, and no guide database we trust documents them. An earlier version of this page carried an
          exact 1,500 HP pool, phase-by-phase percentages, a gear list with prices (Deep-Sea Rod, Harpoon
          Gun $200, Hull Armor Tier 1), and a drop-rate table — all unsigned, all removed. What we can say:
          community fight reports treat it as a mid-game difficulty spike that the 1.0.4 nerf softened, and
          the reliable levers in any fight (difficulty modes from 1.0.9, cooked-food healing, better weapons)
          are covered in the{' '}
          <Link href="/difficulty/" className="text-aqua hover:underline">difficulty</Link> and{' '}
          <Link href="/weapons/" className="text-aqua hover:underline">weapons</Link> guides.
        </p>

        <div className="bg-ocean-950 border border-ocean-700 rounded-lg p-4 text-xs text-gray-400">
          <strong className="text-gold">Stuck on this fight?</strong> Patch 1.0.9 added Easy Mode: creatures
          have 25% less health and deal 50% less damage. Switch difficulty from the main menu or in-game via
          the <Link href="/difficulty/" className="text-aqua hover:underline">difficulty guide</Link>.
        </div>

        <Sources
          items={[
            {
              label: 'G2A News: all fish, bosses, rods and bait by island',
              href: 'https://www.g2a.com/news/features/guide/how-to-fish-all-fish-bosses-rods-and-bait-by-island/',
              note: 'Carrot quest bait for the Pufferfish, island-3 gate',
            },
            {
              label: 'Mobalytics: How to Fish — All 49 Fish, Creatures and Lures',
              href: 'https://mobalytics.gg/gamebase/guides/how-to-fish-all-fish-creatures-lures',
              note: 'independent corroboration of the Carrot summon',
            },
          {
            label: 'Patch 1.0.4 official notes (Steam)',
            href: 'https://steamcommunity.com/games/4001890/announcements/detail/711158520539513916',
            note: '"Pufferfish boss nerfed"',
          },
          {
            label: 'Steam Discussion: pufferfish hand-in not accepted (tail piece vs chunks)',
            href: 'https://steamcommunity.com/app/4001890/discussions/0/582806239606520310/',
            note: 'community-answered post-fight hand-in detail',
          },
          ]}
        />
      </div>
    </div>
  );
}
