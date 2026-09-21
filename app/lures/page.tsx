import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import LoadoutRecommender from '@/components/LoadoutRecommender';
import { LURE_DATABASE } from '@/lib/data';
import { getBossesSummonedByLure, guideHref } from '@/lib/entity-graph';

export const metadata = {
  title: 'All Lures & Baits: What Each One Catches',
  description:
    'Every verified How to Fish lure and bait — Free Lure, Hot Dog, Beginner/Standard/Professional/Scientific Lures, the four Boss Lures, and quest baits like the Carrot, Modified Leech, and Fish Bucket — with prices and catch rosters.',
  alternates: { canonical: 'https://howtofish101.com/lures/' },
};

export default function LuresPage() {
  const regular = LURE_DATABASE.filter((l) =>
    ['free-lure', 'hot-dog', 'beginner-lure', 'standard-lure', 'professional-lure', 'scientific-lure'].includes(l.id)
  );
  const bossLures = LURE_DATABASE.filter((l) => l.id.endsWith('-boss-lure'));
  const questBaits = LURE_DATABASE.filter((l) =>
    ['empty-beer-can', 'modified-leech', 'carrot', 'fish-bucket'].includes(l.id)
  );

  // Which boss-class creature each lure/bait hooks, and whether a dedicated
  // guide exists — derived from the summon lines in the data layer.
  const hookedBoss = (lureId: string) =>
    getBossesSummonedByLure(lureId).map((b) => ({ name: b.name, href: guideHref(b.slug) }));

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      <Breadcrumb items={[{ name: 'Lures & Baits', href: '/lures/' }]} />
      <h1 className="text-3xl font-extrabold text-white">All Lures &amp; Baits Guide</h1>
      <p className="text-xs text-gray-500 -mt-4">Last verified September 16, 2026 · Game version 1.0.12</p>

      <div className="bg-ocean-900/80 border border-ocean-800 rounded-xl p-6 space-y-4 text-sm text-gray-300">
        <p>
          Regular fish in How to Fish are determined by your <strong className="text-white">equipped lure</strong>{' '}
          — not by your current island. Each lure tier belongs to an island progression step and pulls from
          that tier&apos;s catch roster. This table is cross-verified against two independent guide databases
          (G2A&apos;s island guide and Mobalytics&apos; fish list), and lure prices are only shown where a
          source recorded one.
        </p>
        <div className="overflow-x-auto mt-4">
          <table className="w-full text-left text-xs">
            <thead className="bg-ocean-950 text-gray-400 border-b border-ocean-800">
              <tr>
                <th className="p-3">Lure / Bait</th>
                <th className="p-3">Price</th>
                <th className="p-3">Catch Roster</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-ocean-800/50">
              {regular.map((l) => (
                <tr key={l.id}>
                  <td className="p-3 font-bold text-white">{l.name}</td>
                  <td className="p-3">{l.priceDocumented ? `$${l.price}` : <span className="text-gray-500" title="No source documents a price">—</span>}</td>
                  <td className="p-3 text-gray-300">{l.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-gray-500">
          Which fish lives on which island? The full per-species table lives in the{' '}
          <Link href="/fish/" className="text-aqua hover:underline">fish database</Link> — for example the
          island-2 Beginner Lure catch{' '}
          <Link href="/fish/triggerfish/" className="text-aqua hover:underline">Triggerfish</Link>.
        </p>

        <h2 className="text-xl font-bold text-white border-b border-ocean-800 pb-2 pt-4">Boss Lures</h2>
        <p>
          Boss-class catches need their own lure tier — one per island step. These are the only documented
          ways to hook the Old Pike, Blue Shark, Tuna, and Goblin Shark.
        </p>
        <div className="overflow-x-auto mt-4">
          <table className="w-full text-left text-xs">
            <thead className="bg-ocean-950 text-gray-400 border-b border-ocean-800">
              <tr>
                <th className="p-3">Boss Lure</th>
                <th className="p-3">Hooks</th>
                <th className="p-3">Island</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-ocean-800/50">
              {bossLures.map((l) => (
                <tr key={l.id}>
                  <td className="p-3 font-bold text-white">{l.name}</td>
                  <td className="p-3 text-gray-300">
                    {l.note}
                    {hookedBoss(l.id)
                      .filter((b) => b.href)
                      .map((b) => (
                        <span key={b.name} className="block mt-1 text-[11px]">
                          <Link href={b.href!} className="text-aqua hover:underline">
                            {b.name} catch guide →
                          </Link>
                        </span>
                      ))}
                  </td>
                  <td className="p-3 text-gray-300">
                    {l.id === 'beginner-boss-lure' && 'Island 2 (Forest)'}
                    {l.id === 'standard-boss-lure' && 'Island 3 (Desert)'}
                    {l.id === 'professional-boss-lure' && 'Island 4 (Sky)'}
                    {l.id === 'scientific-boss-lure' && 'Island 5 (Volcano)'}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-gray-500">
          The Beginner Boss Lure is documented at <strong>$40</strong> (Game8), and the Sunfish shares its
          pool with the Old Pike — expect wrong-fish bites.
        </p>

        <h2 className="text-xl font-bold text-white border-b border-ocean-800 pb-2 pt-4">Quest Baits: Boss Summons</h2>
        <p>
          Story bosses are summoned with quest items, not shop lures. Each chain is covered step-by-step in
          the{' '}
          <Link href="/bosses/" className="text-aqua hover:underline">boss guides</Link> and the{' '}
          <Link href="/islands/" className="text-aqua hover:underline">island progression guide</Link>.
        </p>
        <div className="overflow-x-auto mt-4">
          <table className="w-full text-left text-xs">
            <thead className="bg-ocean-950 text-gray-400 border-b border-ocean-800">
              <tr>
                <th className="p-3">Quest Bait</th>
                <th className="p-3">How to Get It</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-ocean-800/50">
              {questBaits.map((l) => (
                <tr key={l.id}>
                  <td className="p-3 font-bold text-white">{l.name}</td>
                  <td className="p-3 text-gray-300">
                    {l.obtained || l.note}
                    {hookedBoss(l.id).map((b) => (
                      <span key={b.name} className="block mt-1 text-[11px] text-gray-400">
                        Summons: <span className="text-gray-300">{b.name}</span>
                        {b.href ? (
                          <>
                            {' · '}
                            <Link href={b.href} className="text-aqua hover:underline">
                              catch guide →
                            </Link>
                          </>
                        ) : null}
                      </span>
                    ))}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="text-xl font-bold text-white border-b border-ocean-800 pb-2 pt-4">What We Removed and Why</h2>
        <p className="text-xs text-gray-400 leading-relaxed">
          An earlier version of this page listed Earthworms, Shrimp Cocktail, Squid Tentacles, Lantern Bait,
          Rainbow Lure, Fireproof Lure, Golden Minnow, a &ldquo;Hot Dog Feast&rdquo; (5 Hot Dogs) and a
          &ldquo;Volcano Core&rdquo; (Obsidian + Magma Eel) recipe. None of those items appear in any
          external source — guide databases, patch notes, or player threads — and bait-to-species claims
          like &ldquo;Golden Minnow guarantees a rare catch&rdquo; had no basis at all. They were removed in
          our September 2026 fact audit rather than softened with &ldquo;may&rdquo; or
          &ldquo;usually&rdquo;. If an item on this page is missing a price, that is deliberate: no source
          has documented one.
        </p>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-white border-b border-ocean-800 pb-2">Zone Loadout Recommender</h2>
        <LoadoutRecommender />
      </section>
    </div>
  );
}
