import Breadcrumb from '@/components/Breadcrumb';
import Link from 'next/link';
import { ArticleJsonLd, FaqJsonLd } from '@/components/JsonLd';

export const metadata = {
  title: 'What to Do Next: Progression Help',
  description: 'Stuck in How to Fish? Match your game state — Island 1, missing coordinates, or a boss kill that changed nothing — and get the exact next step.',
  alternates: { canonical: 'https://howtofish101.com/troubleshooting/what-to-do-next/' },
};

const faqs = [
  { q: 'What should I do next in How to Fish?', a: 'Reread the active quest text, keep any unusual boss or island item in your inventory, and return to the last quest NPC for a hand-in. Nearly every progression block is a missed hand-in, not a missing grind.' },
  { q: 'I defeated the Pufferfish and nothing happened. Now what?', a: 'The Pufferfish drops a Tail that must be handed in beside the tree NPC. Until that hand-in, the story will not advance no matter how much you fish.' },
  { q: 'How do I unlock Island 3?', a: 'Beat the Giant Piranha (second boss), keep the Giant Piranha Skeleton, and hand it back to the lake lady. She gives you the Island 3 coordinates.' },
];

export default function WhatToDoNextPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8 text-sm text-gray-300">
      <FaqJsonLd faqs={faqs} />
      <Breadcrumb items={[{ name: 'Troubleshooting', href: '/troubleshooting/' }, { name: 'What to Do Next', href: '/troubleshooting/what-to-do-next/' }]} />
      <ArticleJsonLd
        headline="What Should I Do Next? (Progression Troubleshooter)"
        description="Match your How to Fish game state — Island 1, missing coordinates, or a boss kill that changed nothing — and get the exact next step."
        url="https://howtofish101.com/troubleshooting/what-to-do-next/"
        datePublished="2026-08-27"
        dateModified="2026-08-27"
      />
      <h1 className="text-3xl font-extrabold text-white">What Should I Do Next? (Progression Troubleshooter)</h1>
      <p className="text-xs text-gray-500 -mt-2">Last verified August 27, 2026</p>

      <div className="bg-ocean-900/80 border border-ocean-800 rounded-xl p-6 space-y-6">
        <h2 className="text-xl font-bold text-white">The Universal Fix</h2>
        <p>
          Before anything else: <strong>reread the active quest</strong>, keep the latest unusual boss or
          island item, and <strong>return to the NPC for a hand-in</strong>. How to Fish progression is
          hand-in driven — random fishing never advances a stuck story. Nine times out of ten, the item
          sitting in your inventory is the key the quest is waiting for.
        </p>

        <h2 className="text-xl font-bold text-white">Find Your State</h2>
        <div className="space-y-4">
          <div className="bg-ocean-950 p-4 rounded-lg border border-ocean-800">
            <h3 className="text-white font-bold text-sm mb-2">Still on Island 1</h3>
            <p className="text-xs">The Beer Can chain opens everything: buy beer, trade it for the Empty Beer Can, and summon the <Link href="/bosses/spider-crab/" className="text-aqua hover:underline">Spider Crab</Link>. The boss reward starts the boat repair route.</p>
          </div>
          <div className="bg-ocean-950 p-4 rounded-lg border border-ocean-800">
            <h3 className="text-white font-bold text-sm mb-2">Cannot find Island 2 coordinates</h3>
            <p className="text-xs">Island 2 unlocks after the Spider Crab trophy hand-in. If the marker is missing, the NPC dialogue tree is not exhausted — talk to every NPC at the dock again.</p>
          </div>
          <div className="bg-ocean-950 p-4 rounded-lg border border-ocean-800">
            <h3 className="text-white font-bold text-sm mb-2">On Island 2, story stopped</h3>
            <p className="text-xs">The 3-Leech quest gates the <Link href="/bosses/giant-piranha/" className="text-aqua hover:underline">Giant Piranha</Link>. Leeches are ground pickups around the lake — three of them, handed to the lake lady.</p>
          </div>
          <div className="bg-ocean-950 p-4 rounded-lg border border-ocean-800">
            <h3 className="text-white font-bold text-sm mb-2">Defeated a boss, nothing changed</h3>
            <p className="text-xs">Every boss consumes its drop in a hand-in: Pufferfish Tail beside the tree, Giant Piranha Skeleton to the lake lady, Albatross Head to the next NPC. Check the objective, then walk the item back.</p>
          </div>
          <div className="bg-ocean-950 p-4 rounded-lg border border-ocean-800">
            <h3 className="text-white font-bold text-sm mb-2">Radar or coordinates missing</h3>
            <p className="text-xs">If the radar itself vanished rather than a marker, that is the known equipment-loss bug — follow the <Link href="/troubleshooting/items-disappeared/" className="text-aqua hover:underline">items disappeared guide</Link> before playing on.</p>
          </div>
        </div>

        <h2 className="text-xl font-bold text-white">The Hand-In Rule</h2>
        <p className="text-xs leading-relaxed">
          Quest text updates only after the hand-in completes — not at the kill, not at the pickup. Verify
          the objective text actually changed before you travel, sell, or re-fight anything. Selling a
          quest item by accident is the second most common block players report; if the shop already ate
          it, re-summon the boss for a fresh drop using each boss guide's bait chain.
        </p>
      </div>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white">Progression FAQ</h2>
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
