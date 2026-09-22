import Breadcrumb from '@/components/Breadcrumb';
import PriceCalculator from '@/components/PriceCalculator';
import Link from 'next/link';
import { FaqJsonLd } from '@/components/JsonLd';
import Sources from '@/components/Sources';

export const metadata = {
  title: 'How to Make Money Fast — Verified Prices & Routes',
  description: 'How to Fish money guide: documented fish sell values, the hot-dog bait loop, killscore multipliers, cook-before-selling, and why the casino is not an income strategy.',
  alternates: { canonical: 'https://howtofish101.com/money/' },
};

const pricedCatches = [
  { name: 'Superdwarf Fish', island: 'Island 5 (Volcano)', lure: 'Scientific Lure', sell: 1700, note: 'Highest documented value; IGN lists it Endangered-tier' },
  { name: 'Parrotfish', island: 'Island 4 (Sky)', lure: 'Professional Lure', sell: 350 },
  { name: 'Voxelfish', island: 'Island 4 (Sky)', lure: 'Professional Lure', sell: 340, note: 'Endangered-tier per IGN' },
  { name: 'Flying Fish', island: 'Island 4 (Sky)', lure: 'Professional Lure', sell: 320 },
  { name: 'Tigerfish', island: 'Island 4 (Sky)', lure: 'Professional Lure', sell: 310 },
  { name: 'Halibut', island: 'Island 4 (Sky)', lure: 'Professional Lure', sell: 290 },
  { name: 'Eel', island: 'Island 4 (Sky)', lure: 'Professional Lure', sell: 280 },
  { name: 'Sengarat', island: 'Island 4 (Sky)', lure: 'Professional Lure', sell: 280 },
  { name: 'Triggerfish', island: 'Island 2 (Forest)', lure: 'Beginner Lure', sell: 18 },
  { name: 'Lobster', island: 'Island 1 (Lighthouse)', lure: 'Hot Dog bait', sell: 9 },
  { name: 'Rock Crab', island: 'Island 1 (Lighthouse)', lure: 'Hot Dog bait', sell: 7 },
  { name: 'Mackerel', island: 'Island 2 (Forest)', lure: 'Free Lure (Fishing Rod)', sell: 6 },
  { name: 'Gar', island: 'Island 2 (Forest)', lure: 'Free Lure (Fishing Rod)', sell: 5 },
  { name: 'Piranha', island: 'Island 2 (Forest)', lure: 'Hot Dog / Beginner Lure', sell: 4 },
];

const faqs = [
  {
    q: 'What is the fastest way to make money early?',
    a: 'The shell-and-clam opener: sell beach shells and extra clams first (clams are $1 each per IGN), buy the Crab Fishing Rod ($2–3 depending on the guide), then treat the $45 Knife as your first real investment — both IGN and G2A recommend it. From there, Hot Dog bait steps your Crab Rod up from Brown Crabs to Rock Crab and Lobster, which sell for $7–9.',
  },
  {
    q: 'Should I gamble at the casino to get rich?',
    a: 'Do not use spins as a dependable income route. Dazed Games has not published the odds table, so jackpot screenshots cannot establish a repeatable return. Use the casino for cosmetic rewards, keep quest items and Drip catches out of the sell loop, and set a loss limit before spending.',
  },
  {
    q: 'Do trick shot multipliers stack past 5x?',
    a: 'Five style modifiers carry community-documented numbers (360 spins 1.5x, headshot and last-bullet 1.25x each, no-scope 1.2x, point-blank 1.1x), while four more have undisclosed values. The official Impressive achievement only confirms a 5x milestone; whether layered kills reliably compound beyond 5x is not independently verified. The full factor table lives on our trick shots page.',
  },
  {
    q: 'What is the single most valuable catch?',
    a: 'Among species with documented prices, the Superdwarf Fish tops the chart at $1,700 — a Scientific Lure catch on island 5, the volcano island. The realistic mid-game earners are the island-4 Professional Lure roster: Parrotfish $350, Voxelfish $340, Flying Fish $320, Tigerfish $310. All documented values are single-source (the IGN fish table), so treat them as indicative and verify in-game with the inspect key.',
  },
];

export default function MoneyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      <Breadcrumb items={[{ name: 'Money Guide', href: '/money/' }]} />
      <h1 className="text-3xl font-extrabold text-white">How to Make Money Fast in How to Fish</h1>
      <p className="text-xs text-gray-500 -mt-4">Updated September 22, 2026 · Mechanics reviewed for game version 1.0.12</p>

      <div className="bg-ocean-900/80 border border-ocean-800 rounded-xl p-6 space-y-3 text-sm text-gray-300">
        <p>
          Income runs on three engines: <strong className="text-white">selling catches</strong>,{' '}
          <strong className="text-white">quest and boss payouts</strong>, and{' '}
          <strong className="text-white">multipliers on how stylishly you kill</strong>. This page attaches
          real numbers where a source recorded them and labels everything else honestly. Press{' '}
          <kbd className="bg-ocean-950 px-1.5 py-0.5 rounded border border-ocean-700 font-mono text-[11px]">F</kbd>{' '}
          to inspect any creature&apos;s price in-game before selling.
        </p>
      </div>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white">Money Routes by Progression Stage</h2>
        <ol className="list-decimal pl-5 space-y-3 bg-ocean-900/80 border border-ocean-800 rounded-xl p-6 text-xs leading-relaxed">
          <li><strong className="text-white">Starter island:</strong> sell shells and surplus clams, buy the Crab Rod, then use Hot Dog bait for documented Rock Crab and Lobster values. Keep quest bait and boss drops aside.</li>
          <li><strong className="text-white">Islands 2–3:</strong> move to the Beginner and Standard lure tiers, inspect each catch with F, and sell only catches you have confirmed are not needed for a quest or hand-in.</li>
          <li><strong className="text-white">Islands 4–5:</strong> save for the Professional and Scientific lures; the documented high-value roster is the repeatable route once those islands are open. Cook or style catches only where your own save confirms the payout increase.</li>
        </ol>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white">What Catches Actually Sell For (Documented Values Only)</h2>
        <p className="text-xs text-gray-400 leading-relaxed">
          Every value below comes from the IGN fish table (single source — indicative, not exact). Locations
          and lures are cross-verified against two guide databases. Species without a documented price are
          not listed at all rather than guessed.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs bg-ocean-900/70 rounded-xl overflow-hidden border-collapse">
            <thead className="bg-ocean-950/90 text-gray-400 uppercase border-b border-ocean-800">
              <tr><th className="px-3 py-2">Catch</th><th className="px-3 py-2">Island</th><th className="px-3 py-2">Lure</th><th className="px-3 py-2">Sell</th><th className="px-3 py-2">Notes for farmers</th></tr>
            </thead>
            <tbody className="divide-y divide-ocean-800/60 align-top">
              {pricedCatches.map((c) => (
                <tr key={c.name}>
                  <td className="px-3 py-2 font-bold text-white">{c.name}</td>
                  <td className="px-3 py-2">{c.island}</td>
                  <td className="px-3 py-2">{c.lure}</td>
                  <td className="px-3 py-2 font-semibold text-gold">${c.sell}</td>
                  <td className="px-3 py-2 text-gray-400">{c.note ?? '—'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-gray-500">Use these as documented reference values, then press F in your own save before selling because prices can change with patches or source corrections.</p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white">The Starter Money Loop</h2>
        <div className="bg-ocean-900/80 border border-ocean-800 rounded-xl p-6 space-y-3 text-sm text-gray-300">
          <ol className="list-decimal pl-5 space-y-2 text-xs leading-relaxed">
            <li><strong className="text-white">Open with free money:</strong> sell beach shells and clam extras — clams fetch $1 each (IGN) — to fund the Crab Fishing Rod ($2–3). The{' '}
              <Link href="/guide/" className="text-aqua hover:underline">beginner walkthrough</Link> covers the full loop.</li>
            <li><strong className="text-white">Upgrade the bait, not the rod:</strong> Hot Dog bait steps the Crab Rod up from Brown Crabs to Rock Crab ($7) and Lobster ($9) — the documented early-game income jump.</li>
            <li><strong className="text-white">First big purchase:</strong> the $45 Knife (IGN + G2A agree). It protects your health and time on every aggressive catch.</li>
            <li><strong className="text-white">Follow the lure tiers:</strong> Beginner Lure on island 2 (Triggerfish $18), Standard Lure $15 on island 3, Professional Lure $50 on island 4 (the $280–350 roster above), Scientific Lure $500 on island 5 (Superdwarf Fish $1,700). Lure economics are in the{' '}
              <Link href="/lures/" className="text-aqua hover:underline">lures guide</Link>.</li>
            <li><strong className="text-white">Kill in style, cook before selling:</strong> both multiply the payout — see below.</li>
          </ol>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white">Killscore Multipliers Are Real Money</h2>
        <div className="bg-ocean-900/80 border border-ocean-800 rounded-xl p-6 space-y-3 text-sm text-gray-300">
          <p className="text-xs leading-relaxed">
            A plain kill pays base; trick kills pay multiplied. The 5x milestone is anchored by the official{' '}
            <em>Impressive</em> achievement. Modifier values circulate from a single community source (Nerds
            Chalk) — treat them as documented-but-unofficial. Anything past 5x quoted online is theory, so
            treat mid-value catches finished with stunts as your most repeatable bonus income. Full method
            breakdowns live in the{' '}
            <Link href="/trick-shots/" className="text-aqua hover:underline">trick shots guide</Link>.
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white">Boss Payouts &amp; Trophy Discipline</h2>
        <ul className="list-disc pl-5 space-y-2 bg-ocean-900/80 border border-ocean-800 rounded-xl p-6 text-sm text-gray-300">
          <li>Every boss defeat pays out loot and unlocks — check each encounter&apos;s own page in the{' '}
            <Link href="/bosses/" className="text-aqua hover:underline">boss hub</Link> for the verified rewards. Exact gold amounts are not published, so we do not print them.</li>
          <li><strong className="text-white">Never pre-sell trophies or odd drops.</strong> Progression chains ask for them much later, and sellers regret it — this overlaps with our{' '}
            <Link href="/troubleshooting/items-disappeared/" className="text-aqua hover:underline">quest-item safety notes</Link>.</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white">Community Techniques — Try With Caution</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
          <div className="bg-ocean-950 p-4 rounded-lg border border-ocean-800">
            <strong className="text-white block mb-1">Co-op sell-and-buy cycling</strong>
            <p className="text-gray-400 mb-1">Friends spam-buy stock while one player sells, multiplying shared-wallet turnover. Circulated widely in launch-week reviews.</p>
            <p className="text-gray-500">Patch-volatile: exploits like this tend not to survive balance updates.</p>
          </div>
          <div className="bg-ocean-950 p-4 rounded-lg border border-ocean-800">
            <strong className="text-white block mb-1">Speedrun opener</strong>
            <p className="text-gray-400 mb-1">Shell sales → buy rod/knuckles/beer immediately → rush the first bosses. Documented in a one-hour-clear thread; also functions as efficient early routing.</p>
            <p className="text-gray-500">Works legit; nice structure, zero gimmicks.</p>
          </div>
          <div className="bg-ocean-950 p-4 rounded-lg border border-ocean-800">
            <strong className="text-white block mb-1">Cook-before-selling consensus</strong>
            <p className="text-gray-400 mb-1">Editorial guides (Mobalytics, Sportskeeda) document grilling catches before sale; Nerds Chalk puts the bonus at up to 1.5x, stacking with killscore.</p>
            <p className="text-gray-500">The 1.5x figure is single-source — compare prices in your own save first.</p>
          </div>
          <div className="bg-ocean-950 p-4 rounded-lg border border-ocean-800">
            <strong className="text-white block mb-1">Casino “jackpot stories”</strong>
            <p className="text-gray-400 mb-1">Yes, someone hit a double-black jackpot on a boss fish. That is a survivor anecdote, not EV advice.</p>
            <p className="text-gray-500">Odds remain unpublished.</p>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white">Money FAQ</h2>
        <div className="bg-ocean-900/80 border border-ocean-800 rounded-xl divide-y divide-ocean-800/60 text-sm text-gray-300">
          {faqs.map((f) => (
            <div key={f.q} className="p-5 space-y-2">
              <h3 className="font-bold text-white">{f.q}</h3>
              <p>{f.a}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white">Sale Price Calculator</h2>
        <PriceCalculator />
      </section>
      <Sources
        items={[
          { label: 'IGN Wiki: How to Fish — all-fish table', href: 'https://www.ign.com/wikis/how-to-fish', note: 'source of every documented sell value above (single source)' },
          { label: 'G2A News: all fish, bosses, rods and bait by island', href: 'https://www.g2a.com/news/features/guide/how-to-fish-all-fish-bosses-rods-and-bait-by-island/', note: 'lure tier structure and prices' },
          { label: 'Steam Discussion: “Beating the game in 1 hour Solo, any tips?”', href: 'https://steamcommunity.com/app/4001890/discussions/0/582806239606645268/', note: 'source of the shell-sale speedrun opener' },
          { label: 'Mobalytics: How to Fish — How to Make Money', href: 'https://mobalytics.gg/gamebase/guides/how-to-fish-how-to-make-money', note: 'cook-before-selling consensus among editorial guides' },
          { label: 'Nerds Chalk: Killscore multipliers list', href: 'https://nerdschalk.com/how-killscore-multipliers-work-in-how-to-fish/', note: 'grill 1.5x stacking documentation (single source)' },
        ]}
      />
      <FaqJsonLd faqs={faqs} />
    </div>
  );
}
