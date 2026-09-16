import Breadcrumb from '@/components/Breadcrumb';
import Link from 'next/link';
import { BOSSES_DATABASE } from '@/lib/data';

export const metadata = {
  title: 'All Bosses: Summon Items & Progression',
  description:
    'Every How to Fish boss — Spider Crab, Giant Piranha, Pufferfish, Albatross, Old Pike, Blue Shark, Goblin Shark, and the final Mutated Bowhead Whale — with verified summon items and what each kill unlocks.',
  alternates: { canonical: 'https://howtofish101.com/bosses/' },
};

// Boss slugs that currently have a dedicated strategy page.
const PAGED_BOSSES = new Set([
  'spider-crab',
  'giant-piranha',
  'pufferfish',
  'albatross',
  'old-pike',
  'bowhead-whale',
]);

export default function BossesPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      <Breadcrumb items={[{ name: 'Boss Battles', href: '/bosses/' }]} />
      <div>
        <h1 className="text-3xl font-extrabold text-white tracking-tight">Boss Battles &amp; Boss-Class Catches</h1>
        <p className="text-gray-400 text-xs mt-1">Verified summon items, fight access, and progression gates. Last verified September 16, 2026 · Game version 1.0.12.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {BOSSES_DATABASE.map((boss) => (
          <div key={boss.id} className="bg-ocean-900 border border-ocean-800 rounded-xl p-6 flex flex-col justify-between hover:border-coral/50 transition-all">
            <div className="space-y-3">
              <div className="text-3xl">👾</div>
              <h2 className="text-xl font-bold text-white">{boss.name}</h2>
              <p className="text-xs text-gray-400">Location: <span className="text-gray-300">{boss.location}</span></p>
              <p className="text-xs text-gray-400">Summon: <span className="text-gold font-semibold">{boss.summonBait}</span></p>
              <p className="text-xs text-gray-400">Unlocks: <span className="text-gray-300">{boss.unlocks}</span></p>
            </div>
            {PAGED_BOSSES.has(boss.id) ? (
              <Link
                href={`/bosses/${boss.id}/`}
                className="mt-6 bg-ocean-800 hover:bg-ocean-700 text-aqua text-xs font-bold py-2 rounded-lg text-center border border-ocean-700 transition-colors block"
              >
                View Strategy Guide →
              </Link>
            ) : (
              <span className="mt-6 block text-[11px] text-gray-500 text-center border border-dashed border-ocean-700 rounded-lg py-2">
                {boss.id === 'mutated-bowhead-whale'
                  ? 'Strategy page: /bosses/magma-whale/ (final boss — kept at its original URL)'
                  : 'Dedicated guide pending verified fight details'}
              </span>
            )}
          </div>
        ))}
      </div>

      <div className="bg-ocean-900/80 border border-ocean-800 rounded-xl p-6 space-y-6 text-sm text-gray-300">
        <h2 className="text-xl font-bold text-white border-b border-ocean-800 pb-2">How Boss Fights Work</h2>
        <p>
          Just starting the boss chain? The <Link href="/bosses/first-boss/" className="text-aqua hover:underline">first-boss quick guide</Link> covers the Giant Spider Crab from zero — the beer trade, the fight, and the Boat Keys.
        </p>
        <p>
          How to Fish gates its archipelago behind boss kills. Each island step has a story boss summoned with
          a specific quest item (the Empty Beer Can, the Modified Leech, the Carrot, a defeated Tuna, a
          defeated Bowhead Whale), plus boss-class catches hooked with the four Boss Lures. HP values,
          damage numbers, and drop-rate tables are not published by the developers and not documented in
          any guide database we trust — we no longer print them. When a patch changes a fight (the official
          1.0.4 notes nerfed the Pufferfish and the final boss, 1.0.12 rebalanced the piranha and fixed
          final-boss explosive damage), we say so from the{' '}
          <Link href="/updates/" className="text-aqua hover:underline">patch notes</Link> instead.
        </p>

        <h2 className="text-xl font-bold text-white border-b border-ocean-800 pb-2">Boss-Class Catches: Old Pike, Blue Shark, Tuna, Goblin Shark</h2>
        <p>
          Between regular fish and the story bosses sits a tier the game itself acknowledges — the{' '}
          <em>&ldquo;Competitive eating&rdquo;</em> achievement asks you to eat a mini-boss. Four are documented by
          player guides, one per island step:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong className="text-white">The Old Pike — Island 2 (Forest).</strong> Hook it with the{' '}
            <Link href="/lures/" className="text-aqua hover:underline">Beginner Boss Lure</Link> ($40; the Sunfish shares the lure pool and can bite first), or skip fishing and hunt it with the $150 Shotgun. Full answer in the{' '}
            <Link href="/bosses/old-pike/" className="text-aqua hover:underline">Old Pike catch guide</Link>.
          </li>
          <li>
            <strong className="text-white">Blue Shark — Island 3 (Desert).</strong> Standard Boss Lure from the
            desert shore. Bring the catch to the Grillmaster NPC to unlock the island&apos;s Grill.
          </li>
          <li>
            <strong className="text-white">Tuna — Island 4 (Sky).</strong> Professional Boss Lure. The Tuna is
            itself the bait that summons the{' '}
            <Link href="/bosses/albatross/" className="text-aqua hover:underline">Albatross</Link>; it was
            nerfed slightly in patch 1.0.12.
          </li>
          <li>
            <strong className="text-white">Goblin Shark — Island 5 (Volcano).</strong> Scientific Boss Lure.
            Named in a real Steam save-reset thread — the fight exists, the numbers are undocumented.
          </li>
        </ul>
        <p className="text-xs text-gray-500">
          All four are guide-documented (G2A + Mobalytics cross-verified, Game8 for the Old Pike route), not
          in-game verified by us — the same provenance standard as the fish table.
        </p>
        <p>
          The island-5 whale chain sits between those two tiers: the Fish Bucket quest item summons the
          regular{' '}
          <Link href="/bosses/bowhead-whale/" className="text-aqua hover:underline">Bowhead Whale</Link>,
          and the defeated whale is itself the bait for the Mutated Bowhead Whale — the final boss covered
          in the{' '}
          <Link href="/bosses/magma-whale/" className="text-aqua hover:underline">final-boss guide</Link>.
        </p>

        <h2 className="text-xl font-bold text-white border-b border-ocean-800 pb-2">Difficulty Settings Beat Grinded Gear</h2>
        <p>
          Struggling with any fight? Patch 1.0.9 added official difficulty modes: Easy gives creatures 25%
          less health and 50% less damage; Hard does the opposite. Details in the{' '}
          <Link href="/difficulty/" className="text-aqua hover:underline">difficulty guide</Link>. For co-op,
          our{' '}
          <Link href="/multiplayer/" className="text-aqua hover:underline">multiplayer guide</Link> covers the
          shared wallet and what carries between saves — boss HP scaling numbers circulate online, but none
          are dev-published, so we do not repeat them.
        </p>

        <p className="text-xs text-gray-500 border-l-2 border-coral/40 pl-3">
          Audit note (September 2026): this hub previously carried exact HP pools, a boss-HP co-op scaling
          table, and a three-part &ldquo;Boat Key&rdquo; reward chain. None of that was sourced — IGN documents a
          single Boat Keys acquisition (Spider Crab Shell trade), and later gates are island unlocks. Those
          claims were removed, not softened.
        </p>
      </div>
    </div>
  );
}
