import Breadcrumb from '@/components/Breadcrumb';
import Link from 'next/link';
import { FaqJsonLd } from '@/components/JsonLd';

export const metadata = {
  title: 'Casino & Reel of Fortune Guide: Gachapon Skins',
  description: 'How to Fish Casino Island explained: Reel of Fortune spins, the Drip Rock Crab gachapon route, slot machine skins, and why gambling is a money sink — not an income strategy.',
  alternates: { canonical: 'https://howtofish101.com/casino/' },
  openGraph: {
    title: 'How to Fish Casino & Reel of Fortune Guide',
    description: 'How to Fish Casino Island explained: Reel of Fortune spins, the Drip Rock Crab gachapon route, slot machine skins, and why gambling is a money sink — not an income strategy.',
    url: 'https://howtofish101.com/casino/',
  },
};

const faqs = [
  { q: 'Is the Casino worth it in How to Fish?', a: 'As an income strategy, no — the expected value of spins is below steady fishing and boss kills. As a skin and cosmetics shortcut, yes. Treat it as entertainment spending, not a money route.' },
  { q: 'How does the gachapon machine work?', a: 'Bring a Drip Rock Crab — the glowing variant from secret tidepools — and insert it into the Casino Gachapon machine for a spin at exclusive skins. The machine consumes the crab either way.' },
  { q: 'Why is my slot machine skin invisible?', a: 'A 4K rendering bug made some slot-machine skins invisible. Patch 1.0.5 addressed it — if you still see it on the current build, verify game files and capture the result before re-spinning.' },
];

export default function CasinoPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8 text-sm text-gray-300">
      <FaqJsonLd faqs={faqs} />
      <Breadcrumb items={[{ name: 'Casino', href: '/casino/' }]} />
      <h1 className="text-3xl font-extrabold text-white">Casino Island &amp; Reel of Fortune Guide</h1>

      <div className="bg-ocean-900/80 border border-ocean-800 rounded-xl p-6 space-y-6">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 bg-ocean-950 p-4 rounded-lg text-xs">
          <div><span className="text-gray-400">Location:</span> <strong className="text-white block">Casino Island</strong></div>
          <div><span className="text-gray-400">Games:</span> <strong className="text-white block">Reel of Fortune, Slots, Gachapon</strong></div>
          <div><span className="text-gray-400">Currency:</span> <strong className="text-gold block">Cash (fish sales)</strong></div>
          <div><span className="text-gray-400">Best For:</span> <strong className="text-aqua block">Skins &amp; cosmetics</strong></div>
        </div>

        <h2 className="text-xl font-bold text-white">How Casino Island Works</h2>
        <p>
          Casino Island hosts the game's three gambling attractions: the <strong>Reel of Fortune</strong>
          prize wheel, <strong>slot machines</strong>, and the <strong>Gachapon machine</strong>. Everything
          runs on cash earned from selling catches — there is no separate casino currency. The island is
          purely optional: no story quest requires a win, and no boss gate checks your luck.
        </p>

        <h2 className="text-xl font-bold text-white">The Gachapon Route (Drip Rock Crab)</h2>
        <p>
          The Gachapon machine has one special input: the <Link href="/fish/drip-fish/" className="text-aqua hover:underline">Drip Rock Crab</Link>, the
          glowing blue variant found in secret tidepools during rain. Insert the crab, pull the lever, and
          the machine dispenses an exclusive skin from its pool. The crab is consumed win or lose, so stock
          several before a session — each rain window only yields a couple of spawns.
        </p>

        <h2 className="text-xl font-bold text-white">Are the Odds Published?</h2>
        <p className="text-xs leading-relaxed">
          No. Dazed Games has not released an official odds table — every percentage you see quoted online
          is a community estimate from player-reported spins. Treat streaks and &ldquo;guaranteed&rdquo;
          patterns with suspicion, and never chase losses with money you need for
          <Link href="/boat/" className="text-aqua hover:underline"> boat upgrades</Link>.
        </p>

        <h2 className="text-xl font-bold text-white">The Money Reality</h2>
        <p className="text-xs leading-relaxed">
          Steady income in How to Fish comes from the catch-sell-upgrade loop and boss trophies — see the
          <Link href="/guide/" className="text-aqua hover:underline"> beginner walkthrough</Link> for the
          reliable route. Casino expected value sits below honest fishing, which makes it a cosmetics
          shortcut rather than a strategy. Set a session budget before you walk in, and stop when it is
          gone: the house edge compounds exactly like real gambling.
        </p>
      </div>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white">Casino FAQ</h2>
        <div className="bg-ocean-900/70 border border-ocean-800 rounded-xl p-6 space-y-5">
          {faqs.map((item) => (
            <div key={item.q} className="border-b border-ocean-800 pb-4 last:border-0 last:pb-0">
              <h3 className="text-white font-semibold mb-2 text-sm">{item.q}</h3>
              <p className="text-xs text-gray-400 leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
