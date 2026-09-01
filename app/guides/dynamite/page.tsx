import Breadcrumb from '@/components/Breadcrumb';
import Link from 'next/link';
import { FaqJsonLd } from '@/components/JsonLd';
import Sources from '@/components/Sources';

export const metadata = {
  title: 'Dynamite Guide: Blow Up Fish, Blue Sharks & Everyone’s Dream',
  description:
    'How to get and use dynamite in How to Fish: Island 2 shop price, fishing with explosives, shooting sticks to detonate them early, blue shark tips, and the blast-safety rules that keep your own crew alive.',
  alternates: { canonical: 'https://howtofish101.com/guides/dynamite/' },
};

const faqs = [
  {
    q: 'Where do I buy dynamite in How to Fish?',
    a: 'Guides consistently place it at the item shop on Island 2, the Forest island, for roughly $25 per stick. You need to beat the Spider Crab and reach that island first, so there is no explosive shortcut through the opening hours.',
  },
  {
    q: 'Can dynamite kill me?',
    a: 'Yes. The blast does not care who is standing inside it — misjudge the radius and the stick that just cleared a school of fish will flatten you too. Back out of range the moment the throw leaves your hand, and never chase your own throw downhill.',
  },
  {
    q: 'Can you detonate dynamite early?',
    a: 'Yes — shooting a placed stick detonates it immediately. This is also the core trick behind the Everyone’s dream achievement: plant the dynamite, let a seagull wander into the blast radius over fish bait, then put a bullet in the stick.',
  },
  {
    q: 'Is dynamite good for money?',
    a: 'It is a strong farm tool, not an economy exploit. One stick can surface several catches at once and strips aggressive swarms like leeches far faster than casting — but at ~$25 per stick plus replacement gear for the times it goes wrong, rods still out-earn it on calm days.',
  },
];

export default function DynamiteGuidePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      <Breadcrumb items={[{ name: 'Weapons', href: '/weapons/' }, { name: 'Dynamite', href: '/guides/dynamite/' }]} />
      <h1 className="text-3xl font-extrabold text-white">How to Use Dynamite in How to Fish</h1>
      <p className="text-xs text-gray-500 -mt-4">Last verified September 1, 2026 · Game version 1.0.10 · Acquisition details are guide-documented</p>

      <div className="bg-ocean-900/80 border border-ocean-800 rounded-xl p-6 space-y-3 text-sm text-gray-300">
        <p>
          Rods are the honest way to fish. Dynamite is the fun one. One throw clears a whole school at once, strips
          aggressive swarms like the leeches that guard Island 2, and — with the right setup — turns a harmless seagull
          into the <Link href="/achievements/everyones-dream/" className="text-aqua hover:underline">Everyone’s dream achievement</Link>.
          It is also the fastest way in the game to kill yourself, your friends, and your own bait, so this page
          covers the safety rules alongside the payoff.
        </p>
      </div>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white">Where to Get Dynamite</h2>
        <div className="bg-ocean-900/80 border border-ocean-800 rounded-xl p-6 space-y-3 text-sm text-gray-300">
          <ul className="list-disc pl-5 space-y-2">
            <li><strong className="text-white">Shop location:</strong> the item shop on Island 2, the Forest island — after the Spider Crab gate on the <Link href="/islands/" className="text-aqua hover:underline">island progression</Link> path.</li>
            <li><strong className="text-white">Price:</strong> around $25 per stick, per multiple guide write-ups. Stock several before a swarm-heavy session; it is a consumable, not a tool.</li>
            <li><strong className="text-white">No permanent missables:</strong> if a throw fizzles or the fish scatter, the only real cost is the stick. Failed attempts just cost money, not progress.</li>
          </ul>
          <p className="text-xs text-gray-500">
            Note: our <Link href="/weapons/" className="text-aqua hover:underline">weapons list</Link> previously described
            dynamite as crafted at cooking stations — the shop-purchase route is what every current guide documents, so we have corrected the row.
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white">Fishing With Explosives</h2>
        <div className="bg-ocean-900/80 border border-ocean-800 rounded-xl p-6 space-y-3 text-sm text-gray-300">
          <p>
            The loop is simple: spot a school or a swarm, throw, step back, then wade in and collect what floats up.
            Guide write-ups report several catches per stick on a well-placed throw, which makes dynamite the fastest
            way to strip a crowded cove — and the blunt answer to leech swarms, where casting gets you bitten more
            often than it gets you bites (the same trick our <Link href="/bosses/spider-crab/" className="text-aqua hover:underline">Spider Crab boss guide</Link> uses for the summon fight).
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong className="text-white">Schools and farms:</strong> crowded shallow coves give the best fish-per-stick ratio. Empty water wastes the $25.</li>
            <li><strong className="text-white">Blue sharks:</strong> guides use explosives to skip the duel with aggressive sharks rather than out-tanking them.</li>
            <li><strong className="text-white">Bosses:</strong> several boss fights take explosive damage faster than a rod takes reel-time — crews chasing speed clears (see the <Link href="/achievements/bean/" className="text-aqua hover:underline">sub-hour Bean route</Link>) carry sticks for exactly the fights where casting stalls.</li>
          </ul>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white">Blast Rules: What the Explosion Actually Does</h2>
        <div className="bg-cyan-950/50 border border-cyan-500/30 rounded-xl p-5 space-y-2 text-sm">
          <ul className="list-disc pl-5 space-y-2">
            <li><strong className="text-white">It kills you too.</strong> Dynamite damage does not check teams or intent — stand inside the radius and you go down with the fish. That same rule is what makes <Link href="/multiplayer/friendly-fire/" className="text-aqua hover:underline">friendly fire incidents</Link> a co-op staple.</li>
            <li><strong className="text-white">It destroys what is standing too close.</strong> A bait fish placed on top of the stick instead of next to it is gone before the seagull arrives.</li>
            <li><strong className="text-white">You can shoot a placed stick to set it off instantly.</strong> Treat every planted stick as armed until it pops or despawns.</li>
            <li><strong className="text-white">Dead fish do not sell themselves.</strong> The blast surfaces them; you still wade in and collect. Fish flung by the blast can land in awkward spots — our <Link href="/troubleshooting/items-disappeared/" className="text-aqua hover:underline">missing-items guide</Link> covers how ground drops persist since Patch 1.0.10.</li>
          </ul>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white">Killscore: Why Explosive Kills Stay Flat</h2>
        <div className="bg-ocean-900/80 border border-ocean-800 rounded-xl p-6 space-y-3 text-sm text-gray-300">
          <p>
            A blast kill pays for the fish, but the flashy <Link href="/trick-shots/" className="text-aqua hover:underline">Killscore multipliers</Link> —
            headshots, 360 spins, no-scopes, distance bonuses — are gunshot mechanics. If you are farming style
            multipliers on seagulls, a gun in hand out-earns a stick of dynamite; if you are farming fish, the stick
            wins on volume. Different tools, different jobs.
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white">Dynamite FAQ</h2>
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
          { label: 'NerdsChalk — How to Fish “Everyone’s Dream”: requirements, method, and blast tips', href: 'https://nerdschalk.com/kill-seagull-with-dynamite-how-to-fish/', note: 'Island 2 shop price, bait-and-shoot detonation method, blast-safety notes' },
          { label: 'Sportskeeda — How to use dynamite for fishing in How to Fish', href: 'https://www.sportskeeda.com/esports/how-use-dynamite-fishing-how-fish', note: 'Island 2 shop acquisition' },
          { label: 'GAMES.GG — How to Use Dynamite for Fishing', href: 'https://games.gg/how-to-fish/guides/how-to-fish-how-to-use-dynamite-for-fishing/', note: 'explosive fishing loop, blue shark and fast-farm use cases' },
          { label: 'allthings.how — How to kill a seagull with dynamite', href: 'https://allthings.how/how-to-fish-how-to-kill-a-seagull-with-dynamite-for-everyone-s-dream/', note: 'Spider Crab → Forest island progression gate' },
        ]}
      />
      <FaqJsonLd faqs={faqs} />
    </div>
  );
}
