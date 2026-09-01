import Breadcrumb from '@/components/Breadcrumb';
import Link from 'next/link';
import { FaqJsonLd } from '@/components/JsonLd';
import Sources from '@/components/Sources';

export const metadata = {
  title: 'Everyone’s Dream Achievement: Kill a Seagull With Dynamite',
  description:
    'How to unlock Everyone’s dream in How to Fish (4.1% unlock rate): where to buy dynamite, the fish-bait setup that lures a regular seagull into the blast, and why shooting the stick is the reliable trigger.',
  alternates: { canonical: 'https://howtofish101.com/achievements/everyones-dream/' },
};

const faqs = [
  {
    q: 'Does the Albatross count for Everyone’s dream?',
    a: 'No. Guides are explicit that the achievement wants a regular seagull, not the giant Albatross boss. Blowing up the boss is its own kind of memory, but it will not fill the achievement box.',
  },
  {
    q: 'Can I shoot the seagull instead and still get it?',
    a: 'No — the kill has to be the dynamite blast itself. Shooting the seagull is just a normal kill. The intended trick is to detonate the stick (by shooting the stick, not the bird) while the seagull stands inside the radius.',
  },
  {
    q: 'How much HP does a seagull have?',
    a: 'Guide write-ups put a regular seagull at 10 HP and 1.5 weight — fragile enough that any blast that touches it is lethal. The hard part is placement and timing, not damage.',
  },
  {
    q: 'What if the seagull runs away from the dynamite?',
    a: 'Re-bait and wait. Fish bait placed next to the stick is what pulls gulls into the radius; if your bait got flattened by the first attempt, place the next one clearly beside the stick, not on top of it.',
  },
];

export default function EveryonesDreamPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      <Breadcrumb items={[{ name: 'Achievements', href: '/achievements/' }, { name: 'Everyone’s Dream', href: '/achievements/everyones-dream/' }]} />
      <h1 className="text-3xl font-extrabold text-white">Everyone’s Dream Achievement: Seagull + Dynamite</h1>
      <p className="text-xs text-gray-500 -mt-4">Last verified September 1, 2026 · Game version 1.0.10 · Global unlock rate ~4.1% · Method is guide-documented</p>

      <div className="bg-ocean-900/80 border border-ocean-800 rounded-xl p-6 space-y-3 text-sm text-gray-300">
        <p>
          <strong className="text-white">Everyone’s dream</strong> asks you to kill a seagull with dynamite, and at a
          ~4.1% global unlock rate it is one of the rarest non-endgame trophies in the game — rare enough that most
          crews finish the story without ever attempting it. The good news: nothing about it is missable, the setup is
          cheap, and it doubles as the most entertaining five minutes you will spend with a stick of TNT. Need the
          explosive itself first? Our <Link href="/guides/dynamite/" className="text-aqua hover:underline">dynamite guide</Link> covers
          buying it on Island 2 and the blast rules.
        </p>
      </div>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white">What You Need Before Starting</h2>
        <div className="bg-ocean-900/80 border border-ocean-800 rounded-xl p-6 space-y-3 text-sm text-gray-300">
          <ul className="list-disc pl-5 space-y-2">
            <li><strong className="text-white">At least one stick of dynamite</strong> — sold at the Island 2 item shop for around $25 once you have beaten the Spider Crab and reached the Forest island. Bring two or three; first attempts are tuition.</li>
            <li><strong className="text-white">One piece of fish for bait</strong> — any cheap catch works. Its job is to pull a gull into the blast radius.</li>
            <li><strong className="text-white">A gun with any bullet in it</strong> — you will not shoot the bird; you will shoot the stick. Firing at planted dynamite detonates it immediately, which turns a guessy timed throw into a deliberate, aimed trigger.</li>
            <li><strong className="text-white">Open ground with gulls around</strong> — a beach you already know has regular gull traffic beats a forest clearing.</li>
          </ul>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white">The Setup (Guide-Documented Method)</h2>
        <ol className="list-decimal pl-5 space-y-3 bg-ocean-900/80 border border-ocean-800 rounded-xl p-6 text-sm leading-relaxed">
          <li><strong className="text-white">Plant the stick.</strong> Drop the dynamite on open, flat ground — somewhere you can watch from a distance without your character drifting into the radius.</li>
          <li><strong className="text-white">Bait beside it, not on it.</strong> Place the fish clearly next to the stick. Bait sitting on the dynamite gets destroyed by the first blast and teaches you nothing.</li>
          <li><strong className="text-white">Back out of blast range.</strong> The explosion does not check whose feet are inside it, and the achievement does not require a heroic camera angle at ground zero.</li>
          <li><strong className="text-white">Wait for a gull to go for the bait.</strong> Regular seagulls will come down to a free fish. If several show up, you may clear the achievement and a bonus kill in one blast.</li>
          <li><strong className="text-white">Shoot the stick while the bird is inside the radius.</strong> The detonation is instant — fire the moment the gull is committed to the bait, not a second after it turns around.</li>
        </ol>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white">Timing Tips and Common Failures</h2>
        <div className="bg-cyan-950/50 border border-cyan-500/30 rounded-xl p-5 space-y-2 text-sm">
          <ul className="list-disc pl-5 space-y-2">
            <li><strong className="text-white">Post-game is the cleanest window.</strong> With the story done you have money for sticks, every island is open, and nothing is chasing you while you wait for birds.</li>
            <li><strong className="text-white">Wrong bird, no credit.</strong> The giant <Link href="/bosses/albatross/" className="text-aqua hover:underline">Albatross boss</Link> does not count — the achievement wants an ordinary seagull.</li>
            <li><strong className="text-white">Gunshot ≠ credit.</strong> A seagull killed by bullets is a normal kill. The blast has to be what lands it.</li>
            <li><strong className="text-white">Skittish gulls?</strong> Re-place the bait closer to their landing spot and crouch out of sight; failed attempts only cost bait and patience.</li>
          </ul>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white">Everyone’s Dream FAQ</h2>
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
          { label: 'NerdsChalk — Kill a Seagull With Dynamite in How to Fish', href: 'https://nerdschalk.com/kill-seagull-with-dynamite-how-to-fish/', note: 'bait placement, shoot-to-detonate trigger, seagull 10 HP / 1.5 weight, regular-seagull requirement' },
          { label: 'allthings.how — How to kill a seagull with dynamite (Everyone’s Dream)', href: 'https://allthings.how/how-to-fish-how-to-kill-a-seagull-with-dynamite-for-everyone-s-dream/', note: 'Spider Crab → Forest island gate, nothing permanently missable' },
          { label: 'Mobalytics — How to Fish: All Achievements', href: 'https://mobalytics.gg/gamebase/guides/how-to-fish-all-achievements', note: 'shoot-the-dynamite detonation while the bird is in radius' },
          { label: 'How to Fish on Steam (store page)', href: 'https://store.steampowered.com/app/4001890/How_to_Fish/', note: 'achievement list reference' },
        ]}
      />
      <FaqJsonLd faqs={faqs} />
    </div>
  );
}
