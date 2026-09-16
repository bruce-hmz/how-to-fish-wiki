import Breadcrumb from '@/components/Breadcrumb';
import Link from 'next/link';
import { FaqJsonLd, ArticleJsonLd } from '@/components/JsonLd';
import Sources from '@/components/Sources';

export const metadata = {
  title: 'First Boss in How to Fish: the Giant Spider Crab',
  description: 'The first boss in How to Fish is the Giant Spider Crab at the starter lighthouse. Summon it with the Empty Beer Can, punish its dizzy window, and trade the shell for the Boat Keys.',
  alternates: { canonical: 'https://howtofish101.com/bosses/first-boss/' },
};

const faqs = [
  {
    q: 'What is the first boss in How to Fish?',
    a: "The Giant Spider Crab, fought at the starter island's lighthouse tidepool. Guides agree it is the gentlest of the game's bosses — it freezes after its charge, leaving a long damage window that later bosses do not give you."
  },
  {
    q: 'How do I summon the first boss?',
    a: 'Buy a Beer from the fisherman (IGN documents $12), press Q to hand it over — he drinks it and gives you the Empty Beer Can, which attaches to your rod as a lure. Cast the can at the lighthouse tidepool and the Spider Crab surfaces. No other prep is required to trigger it.'
  },
  {
    q: 'What do you get for beating the first boss?',
    a: "The Boat Keys. The crab drops a Spider Crab Shell — trade it back to the fisherman and the boat is yours, unlocking travel to the next island. This single trade replaces the whole starter-island gate."
  },
  {
    q: 'Is the first boss hard?',
    a: 'No — it is the tutorial-grade fight. Its charge leaves it dizzy and frozen long enough to unload freely, and the early knife is enough damage. Exact HP is not published anywhere reliable. One exception right now: since Patch 1.0.11 some players cannot fight it at all — see the bug question below.'
  },
  {
    q: 'Is the first boss broken after Patch 1.0.11?',
    a: "For some players, yes. Since the September 1, 2026 update, multiple Steam threads report the Giant Spider Crab floating in the air above the tidepool, unkillable and out of reach. Patch 1.0.12 (September 4) did not fix it, and reports continued through September 9, 2026. A community workaround: throw your boss bait behind the cockpit of the broken captain's boat and reel it in so the crab gets wedged in the captain's seat and becomes hittable again (community-corroborated, though not guaranteed — see the Spider Crab guide for the caveats). The full Spider Crab guide tracks the bug and will drop the notice once a fix ships."
  },
];

export default function FirstBossPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8 text-sm text-gray-300">
      <ArticleJsonLd
        headline="First Boss in How to Fish: the Giant Spider Crab"
        description="The first boss is the Giant Spider Crab at the starter lighthouse — summon it with the Empty Beer Can, punish the dizzy window, and trade the shell for the Boat Keys."
        url="https://howtofish101.com/bosses/first-boss/"
        datePublished="2026-08-28"
        dateModified="2026-09-16"
      />
      <Breadcrumb items={[{ name: 'Boss Battles', href: '/bosses/' }, { name: 'First Boss', href: '/bosses/first-boss/' }]} />
      <h1 className="text-3xl font-extrabold text-white">The First Boss in How to Fish: Giant Spider Crab</h1>
      <p className="text-xs text-gray-500 -mt-4">Last verified September 16, 2026 · Game version 1.0.12 (known bug — see notice below)</p>

      <div className="bg-gold/10 border border-gold/40 rounded-xl p-6 space-y-3">
        <p className="font-bold text-white text-sm">The short answer:</p>
        <p>
          The first boss is the <strong className="text-white">Giant Spider Crab</strong> — a giant crustacean that
          surfaces at the <strong className="text-white">starter island&rsquo;s lighthouse tidepool</strong> when you cast
          an <strong className="text-white">Empty Beer Can</strong> as your lure. Beat it, trade the{' '}
          <strong className="text-white">Spider Crab Shell</strong> to the fisherman, and you receive the{' '}
          <strong className="text-white">Boat Keys</strong> — the gate to the whole archipelago. It is deliberately
          gentle: it freezes after its charge, leaving a long damage window.
        </p>
        <p className="text-xs text-gray-400">
          The full summon chain and reward details live in the{' '}
          <Link href="/bosses/spider-crab/" className="text-aqua hover:underline">complete Spider Crab guide</Link>. This page is the quick version for &ldquo;what is this boss and how do I start it.&rdquo;
        </p>
      </div>

      <div className="bg-coral/10 border border-coral/40 rounded-xl p-6 space-y-3 text-sm text-gray-300">
        <p className="font-bold text-white text-sm">⚠️ Patch 1.0.11 bug: the crab may float out of reach</p>
        <p>
          Since the September 1 update, players on Steam report the Spider Crab hovering in the air above the tidepool — unkillable and unbeatable that run. <strong className="text-white">Patch 1.0.12 (September 4) did not include a fix</strong>, and fresh reports kept landing through September 9, 2026. A community workaround: throw your boss bait behind the cockpit of the broken captain&apos;s boat and reel it in so the crab gets stuck in the captain&apos;s seat, where you can hit it — corroborated by repeated player posts (most recently September 9), though not everyone succeeds: one player saw the crab clip through the boat, and another won by fighting it underwater. The{' '}
          <Link href="/bosses/spider-crab/" className="text-aqua hover:underline">full Spider Crab guide</Link> tracks fix status, and the{' '}
          <Link href="/troubleshooting/" className="text-aqua hover:underline">troubleshooting hub</Link> covers related save and bug safety.
        </p>
      </div>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white">Summoning the First Boss (4 Steps)</h2>
        <ol className="list-decimal pl-5 space-y-3 bg-ocean-900/80 border border-ocean-800 rounded-xl p-6 text-xs leading-relaxed">
          <li><strong className="text-white">Buy a Beer</strong> from the fisherman on the starter island ($12 per IGN).</li>
          <li><strong className="text-white">Press Q to hand it over</strong> — he drinks it and hands back the Empty Beer Can, which attaches to your rod as a lure.</li>
          <li><strong className="text-white">Cast the can at the lighthouse tidepool</strong>. Fishing the spot normally does nothing — the can is what summons the crab.</li>
          <li><strong className="text-white">Fight</strong> — the Giant Spider Crab surfaces and the encounter begins.</li>
        </ol>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white">The Fight in One Paragraph</h2>
        <p className="text-gray-300 leading-relaxed">
          The documented mechanic is the freeze: when the crab charges, it ends its attack frozen and dizzy,
          and that window is your entire game plan — unload with the knife while it is down, back off when it
          recovers, repeat. Guides agree this boss is the gentlest in the game and the early-game knife ( IGN
          recommends saving $45 for exactly that) is enough damage. Exact HP, damage values, and phase
          percentages are not published by the developers or documented in any guide database — we no longer
          print them. This fight exists to teach the dodge-and-punish loop the later bosses demand.
        </p>
        <div className="bg-ocean-900/60 border border-ocean-800 rounded-xl p-5 text-xs space-y-2">
          <p className="font-bold text-white">Rewards</p>
          <p>Spider Crab Shell → trade to the fisherman for the <strong className="text-white">Boat Keys</strong>, which let you leave the starter island. (An earlier version of this page claimed a &ldquo;Boat Key Part #1 of 3&rdquo; system, 200 gold, and a 10% shield drop — none of that was sourced and it was removed.) The{' '}
            <Link href="/bosses/" className="text-aqua hover:underline">all-bosses hub</Link> tracks every later gate and the mini-boss tier (Old Pike, Blue Shark).
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white">Before You Summon It</h2>
        <ul className="list-disc pl-5 space-y-2 text-sm text-gray-300">
          <li><strong className="text-white">Buy the knife</strong> ($45 per IGN) — bare hands make the freeze windows feel far too short.</li>
          <li><strong className="text-white">Eat or carry food</strong> — the charge is the only real damage threat, but it hits harder than anything else on the starter island.</li>
          <li><strong className="text-white">In co-op</strong>, the{' '}
            <Link href="/multiplayer/" className="text-aqua hover:underline">co-op guide</Link> covers the shared wallet and what carries between saves; the freeze loop works the same with a crew.</li>
          <li><strong className="text-white">Lost gear during the fight?</strong> The{' '}
            <Link href="/troubleshooting/items-disappeared/" className="text-aqua hover:underline">items triage page</Link> is the recovery path — and since Patch 1.0.10, dropped ground items persist in saves.</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white">First Boss FAQ</h2>
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
          { label: 'IGN Wiki: How to Get the Boat Keys — How to Fish', href: 'https://www.ign.com/wikis/how-to-fish/How_to_Get_the_Boat_Keys', note: 'beer price and Q hand-in, dizzy-window tactic, shell-for-keys trade' },
          { label: 'Nerds Chalk: Spider Crab Fight — Requirements, Tips, and Boat Keys', href: 'https://nerdschalk.com/how-to-fish-spider-crab-boss/', note: 'the freeze-after-attack behavior unique to this boss' },
          { label: 'Destructoid: Complete How to Fish Walkthrough', href: 'https://www.destructoid.com/complete-how-to-fish-game-walkthrough-100-completion/', note: 'first-boss difficulty placement in full progression' },
          { label: 'Steam Discussions: "FLOATING CRABS" (Patch 1.0.11 bug reports)', href: 'https://steamcommunity.com/app/4001890/discussions/0/581681246928694953/', note: 'source of the post-1.0.11 floating-crab reports and the community workaround' },
        ]}
      />
      <FaqJsonLd faqs={faqs} />
    </div>
  );
}
