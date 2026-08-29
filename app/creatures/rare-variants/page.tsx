import Breadcrumb from '@/components/Breadcrumb';
import Link from 'next/link';
import { FaqJsonLd, ArticleJsonLd } from '@/components/JsonLd';
import Sources from '@/components/Sources';

export const metadata = {
  title: 'Rare Fish Variants: What Counts & How to Hunt Them',
  description: 'How to Fish asks you to "collect the rare variant of all the different fish" — what that means, how rare variants differ from drip creatures, which achievements track them, and a low-waste hunting loop.',
  alternates: { canonical: 'https://howtofish101.com/creatures/rare-variants/' },
};

const faqs = [
  {
    q: 'Does every fish in How to Fish have a rare variant?',
    a: 'Yes, per the official store listing: one of the stated things to do in the game is to "Try to collect the rare variant of all the different fish." The variant pool grows as new islands unlock more species, so the collection target expands with progression.'
  },
  {
    q: 'Do rare variants sell for more?',
    a: 'A higher sale price is widely assumed but not officially documented anywhere — no patch note, loading-screen tip, or guide states a multiplier. The honest approach: sell your first variant and compare against the normal price in your own fishing log before building a money plan around them.'
  },
  {
    q: 'Are drip creatures the same as rare variants?',
    a: 'No. Drip creatures are a separate, named creature class — color-shifted, tied to the Casino and the Reel of Fortune weapon-skin spins, and tracked by their own achievements. A rare variant is an off-palette version of a specific fish species. You can absolutely have one without the other.'
  },
  {
    q: 'Is there an achievement for collecting rare variants?',
    a: 'Not directly. The store lists the variant hunt as a goal, but Steam\'s achievement list has no "collect every rare variant" trophy. The closest are Collector (find and kill all the creatures, 10.8%) and Fishipedia (find and kill all drip creatures, 1.4% — the rarest achievement in the game).'
  },
];

export default function RareVariantsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8 text-sm text-gray-300">
      <ArticleJsonLd
        headline="Rare Fish Variants in How to Fish: What Counts and How to Hunt Them"
        description="The official goal to collect the rare variant of every fish, explained: how variants differ from drip creatures, which achievements track them, and what is honestly not known yet."
        url="https://howtofish101.com/creatures/rare-variants/"
        datePublished="2026-08-29"
        dateModified="2026-08-29"
      />
      <Breadcrumb items={[{ name: 'Fish Database', href: '/fish/' }, { name: 'Rare Variants', href: '/creatures/rare-variants/' }]} />
      <h1 className="text-3xl font-extrabold text-white">Rare Fish Variants in How to Fish</h1>
      <p className="text-xs text-gray-500 -mt-4">Last verified August 29, 2026 · Game version 1.0.10</p>

      <div className="bg-gold/10 border border-gold/40 rounded-xl p-6 space-y-3">
        <p>
          One line of the official store listing quietly defines a big chunk of this game&rsquo;s long-term play:{' '}
          <em className="text-gray-200">&ldquo;Try to collect the rare variant of all the different fish.&rdquo;</em>{' '}
          Every fish species in How to Fish has a rarer, off-palette version of itself, and hunting them down is the
          closest thing the game has to a completionist endgame outside the achievement list.
        </p>
        <p className="text-xs text-gray-400">
          The Species table on our{' '}
          <Link href="/fish/" className="text-aqua hover:underline">fish database</Link> covers the six standard rarity
          tiers; this page is about the per-species variant hunt that sits on top of them.
        </p>
      </div>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white">Rare Variants vs Drip Creatures — Not the Same Thing</h2>
        <p className="text-gray-300 leading-relaxed">
          These two get conflated constantly because both are &ldquo;special fish,&rdquo; but the game treats them as
          separate systems:
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse bg-ocean-900/70 rounded-xl overflow-hidden">
            <thead className="bg-ocean-950/90 text-gray-400 uppercase border-b border-ocean-800">
              <tr>
                <th className="px-3 py-2"></th>
                <th className="px-3 py-2">Rare variant</th>
                <th className="px-3 py-2">Drip creature</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-ocean-800/60 align-top">
              <tr>
                <td className="px-3 py-2 font-bold text-white">What it is</td>
                <td className="px-3 py-2">An off-palette version of a specific fish species</td>
                <td className="px-3 py-2">A separate color-shifted creature class</td>
              </tr>
              <tr>
                <td className="px-3 py-2 font-bold text-white">What it connects to</td>
                <td className="px-3 py-2">The store&rsquo;s stated collection goal — no dedicated achievement</td>
                <td className="px-3 py-2">Casino &ldquo;Reel of Fortune&rdquo; weapon-skin spins and two achievements</td>
              </tr>
              <tr>
                <td className="px-3 py-2 font-bold text-white">Tracked by</td>
                <td className="px-3 py-2">Your own log — nothing in Steam&rsquo;s list</td>
                <td className="px-3 py-2">Drip (kill one, 96.4%) and Fishipedia (kill all, 1.4%)</td>
              </tr>
              <tr>
                <td className="px-3 py-2 font-bold text-white">More reading</td>
                <td className="px-3 py-2">This page</td>
                <td className="px-3 py-2">
                  <Link href="/fish/drip-fish/" className="text-aqua hover:underline">Drip Fish guide</Link> and the{' '}
                  <Link href="/casino/" className="text-aqua hover:underline">Casino guide</Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white">The Achievements Nearby</h2>
        <p className="text-gray-300 leading-relaxed">
          Steam&rsquo;s achievement list is the authoritative record of what the game tracks, and the collection-adjacent
          trophies are:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-sm text-gray-300">
          <li><strong className="text-white">Collector</strong> — &ldquo;Find and kill all the creatures&rdquo; (10.8% of players). The kill-everything checklist that variant hunting naturally feeds.</li>
          <li><strong className="text-white">Drip</strong> — &ldquo;Kill a drip creature&rdquo; (96.4%). Nearly everyone stumbles into one.</li>
          <li><strong className="text-white">Fishipedia</strong> — &ldquo;Find and kill all drip creatures&rdquo; (1.4%). The single rarest achievement in the game, and a warning about how long true completion takes.</li>
        </ul>
        <p className="text-xs text-gray-400">
          Track your own progress with the{' '}
          <Link href="/achievements/" className="text-aqua hover:underline">achievement checklist</Link> — it uses real Steam unlock rates and saves your ticks locally.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white">A Low-Waste Hunting Loop</h2>
        <p className="text-gray-300 leading-relaxed">
          No official spawn rates, timers, or variant-specific lures have been documented — anyone selling a &ldquo;guaranteed
          farm&rdquo; is guessing. What the community does instead is a simple loop that keeps the grind cheap:
        </p>
        <ol className="list-decimal pl-5 space-y-3 bg-ocean-900/80 border border-ocean-800 rounded-xl p-6 text-xs leading-relaxed">
          <li><strong className="text-white">Learn the baseline first.</strong> Catch the normal version of each species until its look is boring — a variant is only recognizable against a known normal.</li>
          <li><strong className="text-white">Progress islands before grinding variants.</strong> New islands add new species pools, and every new species is another variant target — grinding Island 1 variants with starter gear burns hours for a shrinking payoff.</li>
          <li><strong className="text-white">Hold anything visually odd.</strong> Do not sell a strange-looking catch until you have checked your achievements and quest needs — several chains want unusual fish handed in, and a sold quest fish is a re-catch.</li>
          <li><strong className="text-white">Vary bait and weather.</strong> Species tables tie fish to baits and weather windows, so rotating conditions is the only honest way to widen encounters while rates remain undocumented.</li>
          <li><strong className="text-white">Log your own numbers.</strong> Note island, bait, weather, and sell price per variant — with nothing official published, your log is the only real data set you have.</li>
        </ol>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white">What We Deliberately Do Not Claim</h2>
        <div className="bg-coral/10 border border-coral/40 rounded-xl p-5 space-y-2 text-xs">
          <p>No official variant spawn rates or percentages exist in any developer note so far.</p>
          <p>No confirmed sell-price multiplier — the &ldquo;variants sell for double&rdquo; claims circulating in comments are not backed by anything we can verify. Check your own sale prices first.</p>
          <p>No variant-specific lure, spawn timer, or guaranteed farming method has been proven. Guides claiming one are extrapolating.</p>
          <p>The fish database total is not confirmed as the final species count — the Fishipedia achievement&rsquo;s 1.4% unlock rate suggests even the fastest players have not finished cataloguing.</p>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white">Rare Variants FAQ</h2>
        <div className="bg-ocean-900/80 border border-ocean-800 rounded-xl divide-y divide-ocean-800/60 text-sm text-gray-300">
          {faqs.map((f) => (
            <div key={f.q} className="p-5 space-y-2">
              <h3 className="font-bold text-white">{f.q}</h3>
              <p>{f.a}</p>
            </div>
          ))}
        </div>
      </section>

      <Sources
        items={[
          { label: 'Official Steam store listing: How to Fish (Dazed Games)', href: 'https://store.steampowered.com/app/4001890/How_to_Fish/', note: 'source of the “collect the rare variant of all the different fish” goal' },
          { label: 'Steam global achievements: How to Fish (app 4001890)', href: 'https://steamcommunity.com/stats/4001890/achievements', note: 'official wording and unlock rates for Collector, Drip, and Fishipedia' },
          { label: 'Steam Community guide: All 28 Achievements + Post-Game Route', href: 'https://steamcommunity.com/sharedfiles/filedetails/?id=3788027308', note: 'community achievement route referencing drip creatures and post-game hunting' },
        ]}
      />
      <FaqJsonLd faqs={faqs} />
    </div>
  );
}
