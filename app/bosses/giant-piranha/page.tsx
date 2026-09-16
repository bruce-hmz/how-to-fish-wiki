import Breadcrumb from '@/components/Breadcrumb';
import Link from 'next/link';
import { FaqJsonLd } from '@/components/JsonLd';
import Sources from '@/components/Sources';

export const metadata = {
  title: 'Giant Piranha Boss Guide: Leech Quest',
  description: 'Beat the Giant Piranha in How to Fish: finish the 3-Leech quest on Island 2, earn the Modified Leech bait, and claim the skeleton for Island 3 access.',
  alternates: { canonical: 'https://howtofish101.com/bosses/giant-piranha/' },
};

const faqs = [
  { q: 'How do I spawn the Giant Piranha in How to Fish?', a: 'Collect three Leeches from the ground on Island 2, hand all three to the lady by the lake, and she gives you a Modified Leech. Equip it as bait and cast into the lake to start the fight.' },
  { q: 'Where do Leeches spawn on Island 2?', a: 'Leeches are ground pickups in the tall grass inland on Island 2 — not fishing catches and not at the waterline. Look for dark, wriggling spots away from the shore; you need exactly three for the quest. Our leech guide covers the radar red-dot trick and the fixes when none spawn.' },
  { q: 'What do I get for beating the Giant Piranha?', a: 'The Giant Piranha Skeleton is the key drop. Carry it back to the quest NPC to unlock Island 3.' },
];

export default function GiantPiranhaPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      <FaqJsonLd faqs={faqs} />
      <Breadcrumb items={[{ name: 'Boss Battles', href: '/bosses/' }, { name: 'Giant Piranha', href: '/bosses/giant-piranha/' }]} />
      <h1 className="text-3xl font-extrabold text-white">Giant Piranha Boss Fight (Island 2 Gate)</h1>
      <p className="text-xs text-gray-500 -mt-4">Last verified September 16, 2026 · Game version 1.0.12 (rebalanced — see notice below)</p>

      <div className="bg-ocean-900/80 border border-ocean-800 rounded-xl p-6 space-y-6 text-sm text-gray-300">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 bg-ocean-950 p-4 rounded-lg text-xs">
          <div><span className="text-gray-400">Location:</span> <strong className="text-white block">Island 2 — the lake</strong></div>
          <div><span className="text-gray-400">Required bait:</span> <strong className="text-gold block">Modified Leech</strong></div>
          <div><span className="text-gray-400">Unlocks:</span> <strong className="text-aqua block">Island 3 (skeleton hand-in)</strong></div>
          <div><span className="text-gray-400">HP:</span> <strong className="text-white block">Undocumented</strong></div>
        </div>

        <div className="bg-coral/10 border border-coral/40 rounded-xl p-5 space-y-2">
          <p className="font-bold text-white text-sm">⚠️ Patch 1.0.12 rebalanced this fight (September 4, 2026)</p>
          <p className="text-xs leading-relaxed">
            The official 1.0.12 notes list a plain <strong className="text-white">&ldquo;Rebalanced piranha&rdquo;</strong>, and a
            post-patch Steam thread reports the fight got harder, not easier: <em>&ldquo;after todays balancing patch, we cant beat
            him. Up to 4 friends, we run out of time, every time.&rdquo;</em> What worked for that crew, straight from the same thread:
            max out the shotgun first, <strong className="text-white">eat the small piranhas</strong> to keep food and health up
            mid-fight, and spend dynamite on the swarm adds so your shots stay on the boss.
          </p>
        </div>

        <h2 className="text-xl font-bold text-white">How to Spawn It: The 3-Leech Quest</h2>
        <p>
          Unlike the Spider Crab, the Giant Piranha is gated behind a quest chain rather than a shop lure. On
          Island 2, the lady by the lake asks for Leeches. These are <strong>ground pickups</strong>, not catches —
          search the tall grass inland, away from the shoreline, for dark, wriggling spawns. You need
          exactly three. Hand them all in and she returns a <strong>Modified Leech</strong>, the only bait that
          triggers the encounter. Cast it into the lake and the water erupts.
        </p>
        <p className="text-xs text-gray-400 border-l-2 border-gold/60 pl-3">
          Common mistake: searching the shoreline. Leeches spawn in the grass inland (the Island 2 radar marks them with red dots). Also ignore older guides that say five Leeches. The quest counts 3/3 — extra pickups
          are just sellable meat. Full details in the <Link href="/guides/leeches/" className="text-aqua hover:underline">leech guide</Link>.
        </p>

        <h2 className="text-xl font-bold text-white">Fighting It: What Is Actually Documented</h2>
        <p>
          The verified facts: small piranhas swarm you during the fight (eating them is both crowd control
          and food, per the post-1.0.12 thread), the shotgun is the community&apos;s weapon of choice, and
          dynamite on the adds keeps your ammunition on the boss. This fight is also the &ldquo;mini-boss&rdquo;
          tier the game&apos;s <em>Competitive eating</em> achievement winks at. What is <strong>not</strong>{' '}
          documented anywhere reliable: the boss&apos;s HP, its damage values, phase thresholds, or the
          &ldquo;escape bar&rdquo; behavior an earlier version of this page described — those specifics were
          unsigned and were removed in our September 2026 fact audit rather than hedged.
        </p>

        <h2 className="text-xl font-bold text-white">After the Fight: The Skeleton Matters</h2>
        <p>
          Keep the <strong>Giant Piranha Skeleton</strong> — do not sell it. Carrying it back to the quest NPC
          completes the hand-in and unlocks the{' '}
          <Link href="/map/" className="text-aqua hover:underline">Island 3 coordinates</Link>.
          This is the only progression path forward, so a lost skeleton means re-fighting the boss. If you
          died mid-hand-in, check our{' '}
          <Link href="/troubleshooting/items-disappeared/" className="text-aqua hover:underline">items disappeared guide</Link> before
          saving over the loss.
        </p>

        <div className="bg-ocean-950 border border-ocean-700 rounded-lg p-4 text-xs text-gray-400">
          <strong className="text-gold">Stuck on this fight?</strong> Patch 1.0.9 added Easy Mode: creatures
          have 25% less health and deal 50% less damage. Switch difficulty from the main menu or in-game via
          the <Link href="/difficulty/" className="text-aqua hover:underline">difficulty guide</Link>.
        </div>
      </div>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white">Giant Piranha FAQ</h2>
        <div className="bg-ocean-900/70 border border-ocean-800 rounded-xl p-6 space-y-5">
          {faqs.map((item) => (
            <div key={item.q} className="border-b border-ocean-800 pb-4 last:border-0 last:pb-0">
              <h3 className="text-white font-semibold mb-2 text-sm">{item.q}</h3>
              <p className="text-xs text-gray-400 leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <Sources
        items={[
          {
            label: 'G2A News: all fish, bosses, rods and bait by island',
            href: 'https://www.g2a.com/news/features/guide/how-to-fish-all-fish-bosses-rods-and-bait-by-island/',
            note: 'Modified Leech quest chain and skeleton hand-in',
          },
          {
            label: 'Mobalytics: How to Fish — All 49 Fish, Creatures and Lures',
            href: 'https://mobalytics.gg/gamebase/guides/how-to-fish-all-fish-creatures-lures',
            note: 'independent corroboration of the quest-bait structure',
          },
          {
            label: 'Patch 1.0.12 official notes (Steam News, September 4, 2026)',
            href: 'https://store.steampowered.com/news/app/4001890/view/698774889153168485',
            note: 'source of the verbatim "Rebalanced piranha" change',
          },
          {
            label: 'Steam Discussion: post-1.0.12 piranha difficulty reports',
            href: 'https://steamcommunity.com/app/4001890/discussions/0/581681298840706905/',
            note: 'source of the post-patch difficulty quote and the shotgun/small-piranha/dynamite tactics',
          },
        ]}
      />
    </div>
  );
}
