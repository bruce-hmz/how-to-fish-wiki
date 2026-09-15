import Breadcrumb from '@/components/Breadcrumb';
import Link from 'next/link';
import { FaqJsonLd } from '@/components/JsonLd';

export const metadata = {
  title: 'Casino Guide: Roulette, Reel of Fortune & Gachapon',
  description: 'How to Fish Casino Island explained: the roulette table and whether it is rigged, Reel of Fortune spins, the Drip Rock Crab gachapon route, slot skins, and why gambling is a money sink.',
  alternates: { canonical: 'https://howtofish101.com/casino/' },
};

const faqs = [
  { q: 'Is the Casino worth it in How to Fish?', a: 'As an income strategy, no — the expected value of spins is below steady fishing and boss kills. As a skin and cosmetics shortcut, yes. Treat it as entertainment spending, not a money route.' },
  { q: 'How does the gachapon machine work?', a: 'Bring a Drip Rock Crab — the glowing variant from secret tidepools — and insert it into the Casino Gachapon machine for a spin at exclusive skins. The machine consumes the crab either way.' },
  { q: 'Why is my slot machine skin invisible?', a: 'A 4K rendering bug made some slot-machine skins invisible. Patch 1.0.5 addressed it — if you still see it on the current build, verify game files and capture the result before re-spinning.' },
  { q: 'Is the roulette table rigged?', a: 'It was genuinely bugged, not just unlucky: patch 1.0.10 fixed roulette physics that let the ball clip through the wheel at high bet values. Landing green is clearly attainable — roughly 28% of players own the "All in" achievement for betting green and winning — but the developers have never published real odds, so treat long losing streaks as normal table variance.' },
  { q: 'The skin machine took my money but no prize appeared — is it bugged?', a: 'Two players reported exactly this on Reddit in late August: the drip machine consumed a spin and no weapon skin appeared. Before treating it as a bug, know that prize items drop into the world — since Patch 1.0.10, up to 64 ground-dropped items persist in your save, so reload your session and sweep around the machine before re-spinning. If the machine eats spins every single time on the fully updated build, capture it on video and treat it as a bug report, not bad luck.' },
  { q: 'I put a fish in the Reel of Fortune and nothing happened — is it bugged?', a: 'Almost certainly the wrong fish, not a bug. Community answers confirm the machine only accepts special (drip) fish — a regular catch is just ignored. Feed it a drip fish for a weapon-skin spin, then switch skins with Z or C while handling the item.' },
  { q: 'I see the rainbow skin in the machine but can never win it — why?', a: 'That is the RNG wall, not a malfunction. One player logged an estimated 300–400 spins chasing the rainbow SMG without landing it — while another player in the same thread says it was the first rainbow skin they got. Odds are unpublished, so nobody can tell you if spin 401 is close. One honest warning from the same thread: several players now suspect the pistol and fishing-rod rainbow skins do not exist in the prize pool at all — do not burn your cash fishing for a skin no one has ever pulled.' },
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
          <div><span className="text-gray-400">Games:</span> <strong className="text-white block">Roulette, Reel of Fortune, Slots, Gachapon</strong></div>
          <div><span className="text-gray-400">Currency:</span> <strong className="text-gold block">Cash (fish sales)</strong></div>
          <div><span className="text-gray-400">Best For:</span> <strong className="text-aqua block">Skins &amp; cosmetics</strong></div>
        </div>

        <h2 className="text-xl font-bold text-white">How Casino Island Works</h2>
        <p>
          Casino Island hosts the game's four gambling attractions: the cash <strong>roulette table</strong>,
          the <strong>Reel of Fortune</strong> prize wheel, <strong>slot machines</strong>, and the{' '}
          <strong>Gachapon machine</strong>. Everything runs on cash earned from selling catches — there is
          no separate casino currency. The island is purely optional: no story quest requires a win, and no
          boss gate checks your luck.
        </p>

        <h2 className="text-xl font-bold text-white">The Roulette Table</h2>
        <p>
          The roulette table is the island's cash game — bet on a number or color, including green. Don't
          confuse it with the Reel of Fortune prize wheel below: the roulette table pays cash, while the
          Reel of Fortune deals out <Link href="/creatures/rare-variants/" className="text-aqua hover:underline">weapon-skin spins</Link>.
          It is also the most patched attraction in the game. Patch 1.0.10 fixed three real roulette bugs —
          infinite ticking at high bet values, the ball clipping through the wheel, and leaving mid-game
          breaking the table for your next session. Patch 1.0.11 then moved the island-6 table slightly,
          because the devs acknowledged its old position was &ldquo;annoying to bet from&rdquo;. If your only
          roulette experience is from before those fixes, the table you remember was literally broken.
        </p>

        <h2 className="text-xl font-bold text-white">The Reel of Fortune (Weapon-Skin Wheel)</h2>
        <p>
          The Reel of Fortune is the island's prize wheel: it takes a <strong>special drip fish</strong> and
          deals out a <Link href="/creatures/rare-variants/" className="text-aqua hover:underline">weapon skin</Link>,
          not cash. Its most common failure mode is feeding it a regular catch — the machine does nothing,
          exactly what one Steam player reported in a thread that sat unanswered for over three weeks until
          the community clarified the input must be a drip fish, not a regular one. Skins you win apply to
          the item itself, and community answers report you can switch skins with <strong>Z or C</strong>{' '}
          while handling the item. See the{' '}
          <Link href="/fish/drip-fish/" className="text-aqua hover:underline">drip fish list</Link> for what
          to stock before a session.
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
          reliable route — and see the{' '}
          <Link href="/money/" className="text-aqua hover:underline">money guide with real numbers</Link>{' '}
          for what honest fishing actually pays. Casino expected value sits below that baseline, which makes it a cosmetics
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
