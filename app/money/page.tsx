import Breadcrumb from '@/components/Breadcrumb';
import PriceCalculator from '@/components/PriceCalculator';
import Link from 'next/link';
import { FaqJsonLd } from '@/components/JsonLd';
import Sources from '@/components/Sources';

export const metadata = {
  title: 'How to Make Money Fast — Routes, Numbers & What to Skip',
  description: 'How to Fish money guide with real numbers: verified fish sell values, the hot-dog bait loop, killscore multipliers (1.5x–5x), boss lump sums, and why the casino is not an income strategy.',
  alternates: { canonical: 'https://howtofish101.com/money/' },
};

const faqs = [
  {
    q: 'What is the fastest way to make money early?',
    a: 'The hot-dog loop: $5 of Hot Dog bait pulls in Striped Bass and Snapper worth $18–$25 each, so every cast nets positive even after bait costs. Pair it with the community opening — sell the shells you find before buying anything, then grab the Crab Rod ($2 economy) and treat the $45 Knife as your first real investment because dying without it costs more than it saves.'
  },
  {
    q: 'Should I gamble at the casino to get rich?',
    a: 'No. Spins have worse expected value than simply fishing, the odds table has never been published by Dazed Games, and single jackpot screenshots are survivors’ stories, not strategy. Use the casino for what it is good at — feeding Drip creatures into the gachapon for cosmetics — and set a loss budget you actually stop at.'
  },
  {
    q: 'Do trick shot multipliers stack past 5x?',
    a: 'Five style modifiers carry confirmed numbers (360 spins 1.5x, headshot and last-bullet 1.25x each, no-scope 1.2x, point-blank 1.1x), four more stack in with undisclosed values, and because everything multiplies, layered kills compound past 5x — Impressive is a milestone, not a ceiling. The full factor table lives on our trick shots page.'
  },
  {
    q: 'What is the single most valuable catch?',
    a: 'Among species with verified prices in our database, the Legendary Kraken Spawn tops the chart at $1,200 — but it gates behind deep-water progression and a reinforced boat. The realistic mid-game bestsellers are Epic-tier catches like Golden Tuna at $450 in far outer waters.'
  },
];

export default function MoneyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      <Breadcrumb items={[{ name: 'Money Guide', href: '/money/' }]} />
      <h1 className="text-3xl font-extrabold text-white">How to Make Money Fast in How to Fish</h1>
      <p className="text-xs text-gray-500 -mt-4">Last verified August 27, 2026 · Game version 1.0.9</p>

      <div className="bg-ocean-900/80 border border-ocean-800 rounded-xl p-6 space-y-3 text-sm text-gray-300">
        <p>
          Income runs on three engines: <strong className="text-white">selling catches</strong>,{' '}
          <strong className="text-white">quest and boss payouts</strong>, and{' '}
          <strong className="text-white">multipliers on how stylishly you kill</strong>. Most “money guide” advice online stops at naming these; this page attaches real numbers where they exist and labels everything else honestly.
        </p>
      </div>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white">What Catches Actually Sell For</h2>
        <p className="text-xs text-gray-400 leading-relaxed">
          Every value below comes from our verified fish database (11 species fully documented; the full catalog keeps growing). Press <kbd className="bg-ocean-950 px-1.5 py-0.5 rounded border border-ocean-700 font-mono text-[11px]">F</kbd> to inspect any creature’s price in-game before selling — merchants do not hide it, players just forget to look.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs bg-ocean-900/70 rounded-xl overflow-hidden border-collapse">
            <thead className="bg-ocean-950/90 text-gray-400 uppercase border-b border-ocean-800">
              <tr><th className="px-3 py-2">Catch</th><th className="px-3 py-2">Rarity</th><th className="px-3 py-2">Sell</th><th className="px-3 py-2">Notes for farmers</th></tr>
            </thead>
            <tbody className="divide-y divide-ocean-800/60 align-top">
              <tr><td className="px-3 py-2 font-bold text-white">Kraken Spawn</td><td className="px-3 py-2"><span className="text-amber-300">Legendary</span></td><td className="px-3 py-2 font-semibold text-gold">$1,200</td><td className="px-3 py-2">Bermuda Whirlpool, needs the reinforced boat first.</td></tr>
              <tr><td className="px-3 py-2 font-bold text-white">Golden Tuna</td><td className="px-3 py-2"><span className="text-purple-300">Epic</span></td><td className="px-3 py-2 font-semibold text-gold">$450</td><td className="px-3 py-2">Far outer ocean, squid strips, sunset window.</td></tr>
              <tr><td className="px-3 py-2 font-bold text-white">Drip Fish</td><td className="px-3 py-2"><span className="text-cyan-300">Drip</span></td><td className="px-3 py-2 font-semibold text-gold">$250</td><td className="px-3 py-2">Do not sell — gachapon value beats shop price.</td></tr>
              <tr><td className="px-3 py-2 font-bold text-white">Ghost Manta</td><td className="px-3 py-2"><span className="text-blue-300">Rare</span></td><td className="px-3 py-2 font-semibold text-gold">$120</td><td className="px-3 py-2">Abyssal trench on rainy dives.</td></tr>
              <tr><td className="px-3 py-2 font-bold text-white">Electric Eel</td><td className="px-3 py-2"><span className="text-blue-300">Rare</span></td><td className="px-3 py-2 font-semibold text-gold">$65</td><td className="px-3 py-2">Night-only at the shipwreck; stun risk when dropped.</td></tr>
              <tr><td className="px-3 py-2 font-bold text-white">Red Snapper</td><td className="px-3 py-2"><span className="text-emerald-300">Uncommon</span></td><td className="px-3 py-2 font-semibold text-gold">$25</td><td className="px-3 py-2">The hot-dog loop’s premium target.</td></tr>
              <tr><td className="px-3 py-2 font-bold text-white">Striped Bass</td><td className="px-3 py-2"><span className="text-emerald-300">Uncommon</span></td><td className="px-3 py-2 font-semibold text-gold">$18</td><td className="px-3 py-2">Foggy open water; steady mid-tier income.</td></tr>
              <tr><td className="px-3 py-2 font-bold text-white">Bluegill / Shrimp / Crabs</td><td className="px-3 py-2"><span className="text-gray-400">Common</span></td><td className="px-3 py-2 font-semibold text-gold">$2–$8</td><td className="px-3 py-2">Starter island pocket change — sell freely.</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-gray-500">
          Rarity in this game tracks value tightly, so once islands unlock better habitats, upgrading bait quality outearns grinding common waters.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white">The Positive-EV Bait Loop</h2>
        <div className="bg-ocean-900/80 border border-ocean-800 rounded-xl p-6 space-y-3 text-sm text-gray-300">
          <ol className="list-decimal pl-5 space-y-2 text-xs leading-relaxed">
            <li><strong className="text-white">Open with free money:</strong> sell beach shells and clam extras — several coins fund the $2 Crab Fishing Rod moment from the{' '}
              <Link href="/guide/" className="text-aqua hover:underline">beginner walkthrough</Link>.</li>
            <li><strong className="text-white">The workhorse loop:</strong> Hot Dogs cost $5 as bait and reliably pull $18–$25 catches. Even one keeper per three casts pays the bait bill — more than that is profit per minute nobody can take from you.</li>
            <li><strong className="text-white">First big purchase:</strong> the $45 Knife. It halves the hits aggressive boarders need, which protects both your HP bar and your time-on-water; skipping it costs more than it saves.</li>
            <li><strong className="text-white">Around $150 banked,</strong> the Deep-Sea Rod extends your cast into money water — pair this with habitat unlocks rather than buying on schedule.</li>
            <li><strong className="text-white">Boat math matters late:</strong> engines tier $350 → $1,200 → $3,500, fuel runs $2 per unit on a base 50-unit tank, and premium engines claw back fuel through efficiency. Details and tank tiers live in the{' '}
              <Link href="/boat/" className="text-aqua hover:underline">boat &amp; upgrades guide</Link>.</li>
          </ol>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white">Killscore Multipliers Are Real Money</h2>
        <div className="bg-ocean-900/80 border border-ocean-800 rounded-xl p-6 space-y-3 text-sm text-gray-300">
          <p className="text-xs leading-relaxed">
            A plain kill pays base; trick kills pay multiplied. Two rungs are anchored by achievements — the 1.5x common stunt tier and a confirmed <strong className="text-white">5x cap</strong> tied to Impressive. Anything past 5x quoted online is theory, so treat mid-value catches finished with stunts as your most repeatable bonus income. Full method breakdowns live in the{' '}
              <Link href="/trick-shots/" className="text-aqua hover:underline">trick shots guide</Link>.
          </p>
          <p className="text-xs text-gray-500 leading-relaxed">
            Rule of thumb, labeled as such (<em>estimated, not dev-documented</em>): a 5x finish on a $18–$25 class catch turns one throwaway kill into roughly a hundred-dollar swing. If multiplier math ever shifts in a patch, the update history page will say so.
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white">Boss Payouts &amp; Trophy Discipline</h2>
        <ul className="list-disc pl-5 space-y-2 bg-ocean-900/80 border border-ocean-800 rounded-xl p-6 text-sm text-gray-300">
          <li>Every boss defeat pays a loot-table bundle — cash plus key items plus trophies. The amounts differ per boss, so check each encounter’s own page in the{' '}
            <Link href="/bosses/" className="text-aqua hover:underline">boss hub</Link> instead of trusting secondhand totals.
          </li>
          <li><strong className="text-white">Never pre-sell trophies or odd drops.</strong> Progression chains ask for them much later, and sellers regret it — this overlaps with our{' '}
            <Link href="/troubleshooting/items-disappeared/" className="text-aqua hover:underline">quest-item safety notes</Link>.</li>
          <li>Summon baits (Hot Dog Feast, Volcano Core) convert cheap ingredients into boss access — the cheapest “fee” for the biggest lump sums in the game.</li>
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
            <p className="text-gray-400 mb-1">Community documentation puts the grill bonus at up to 1.5x on sale price, stacking with Killscore — so premium catches get grilled before selling — the grill is income as much as healing.</p>
            <p className="text-gray-500">See our cooking recipes for the crafting side.</p>
          </div>
          <div className="bg-ocean-950 p-4 rounded-lg border border-ocean-800">
            <strong className="text-white block mb-1">Casino “jackpot stories”</strong>
            <p className="text-gray-400 mb-1">Yes, someone hit a double-black jackpot on a boss fish. That is a survivor anecdote, not EV advice — skip unless playing with cosmetically expendable cash.</p>
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
          { label: 'Steam Discussion: “Beating the game in 1 hour Solo, any tips?”', href: 'https://steamcommunity.com/app/4001890/discussions/0/582806239606645268/', note: 'source of the shell-sale speedrun opener' },
          { label: 'Mobalytics: How to Fish — How to Make Money', href: 'https://mobalytics.gg/gamebase/guides/how-to-fish-how-to-make-money', note: 'cook-before-selling consensus among editorial guides' },
          { label: 'Sportskeeda: Best Ways to Earn Money', href: 'https://www.sportskeeda.com/esports/best-ways-earn-money-how-fish', note: 'corroborating route coverage' },
          { label: 'Nerds Chalk: Killscore multipliers list', href: 'https://nerdschalk.com/how-killscore-multipliers-work-in-how-to-fish/', note: 'grill 1.5x stacking documentation' },
        ]}
      />
      <FaqJsonLd faqs={faqs} />
    </div>
  );
}