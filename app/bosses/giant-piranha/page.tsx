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
  { q: 'Where do Leeches spawn on Island 2?', a: 'Leeches are ground pickups scattered around the Island 2 lake shore and damp forest floor, not fishing catches. Look for dark, wriggling spots near the waterline — you need exactly three for the quest.' },
  { q: 'What do I get for beating the Giant Piranha?', a: 'The Giant Piranha Skeleton is the key drop. Carry it back to the quest NPC to receive the Island 3 coordinates, plus about 1,500 cash from the hand-in.' },
  { q: 'Why does the Giant Piranha escape my fight?', a: 'The boss has an escape bar that refills while it is ignored. If you spend too long clearing the small piranha adds, the boss breaks away and you must re-cast the Modified Leech. Clear only enough adds to open a firing lane.' },
];

export default function GiantPiranhaPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      <FaqJsonLd faqs={faqs} />
      <Breadcrumb items={[{ name: 'Boss Battles', href: '/bosses/' }, { name: 'Giant Piranha', href: '/bosses/giant-piranha/' }]} />
      <h1 className="text-3xl font-extrabold text-white">Giant Piranha Boss Fight (Second Boss)</h1>
      <div className="bg-ocean-900/80 border border-ocean-800 rounded-xl p-6 space-y-6 text-sm text-gray-300">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 bg-ocean-950 p-4 rounded-lg text-xs">
          <div><span className="text-gray-400">Location:</span> <strong className="text-white block">Island 2 Lake</strong></div>
          <div><span className="text-gray-400">HP Pool:</span> <strong className="text-coral-light block">1,200 HP</strong></div>
          <div><span className="text-gray-400">Required Bait:</span> <strong className="text-gold block">Modified Leech</strong></div>
          <div><span className="text-gray-400">Key Weakness:</span> <strong className="text-aqua block">Mouth (jump recovery)</strong></div>
        </div>
        <p className="text-[11px] text-gray-500">
          HP and damage figures are community-tested and can shift between patches — see the{' '}
          <Link href="/updates/" className="text-gray-400 hover:text-aqua underline underline-offset-2">official patch notes history</Link>{' '}
          for balance changes.
        </p>

        <h2 className="text-xl font-bold text-white">How to Spawn It: The 3-Leech Quest</h2>
        <p>
          Unlike the Spider Crab, the Giant Piranha is gated behind a quest chain rather than a shop lure. On
          Island 2, the lady by the lake asks for Leeches. These are <strong>ground pickups</strong>, not catches —
          search the damp shorelines and forest floor around the lake for dark, wriggling spawns. You need
          exactly three. Hand them all in and she returns a <strong>Modified Leech</strong>, the only bait that
          triggers the encounter. Cast it into the lake and the water erupts.
        </p>
        <p className="text-xs text-gray-400 border-l-2 border-gold/60 pl-3">
          Common mistake: following an older guide that says five Leeches. The quest counts 3/3 — extra pickups
          are just sellable meat.
        </p>

        <h2 className="text-xl font-bold text-white">Phase 1: Leap Attacks &amp; Piranha Swarms</h2>
        <p>
          The Giant Piranha spends Phase 1 circling the lake and launching itself at you in long leaps. The
          telegraph is a half-second pause plus a splash — sidestep <em>sideways</em> at the splash instead of
          backing up, because its leap distance covers retreat easily. Each missed leap leaves the boss
          beached for about three seconds with its mouth gaping: that is your damage window. Meanwhile,
          smaller piranhas spawn continuously and harass your legs.
        </p>

        <h2 className="text-xl font-bold text-white">Phase 2: The Escape Bar Race</h2>
        <p>
          Below 50% HP the boss stops committing to leaps and starts circling with an <strong>escape bar</strong>
          filling above its head. If the bar refills completely, the Giant Piranha breaks away and you must
          re-cast the Modified Leech to restart the fight (at full HP). The trap is over-farming the small
          piranha adds — clear <em>just enough</em> to open a clean firing lane, then pour damage into the boss.
          Hit-and-run tactics beat a defensive standoff here.
        </p>

        <h2 className="text-xl font-bold text-white">Recommended Gear Loadout</h2>
        <ul className="list-disc pl-5 space-y-2 text-xs text-gray-300">
          <li><strong>Upgraded Firearm or Harpoon</strong>: Sustained ranged damage wins the escape-bar race. The knife alone is too slow in Phase 2.</li>
          <li><strong>Healing Items x3+</strong>: Small piranha bites chip health fast. Do not start the fight on empty pockets.</li>
          <li><strong>Medium Rod</strong>: Lets you yank small piranhas out of the water for quick cash between attempts.</li>
          <li><strong>Ammo Reserve</strong>: Running dry mid-Phase 2 is the most common solo wipe.</li>
        </ul>

        <h2 className="text-xl font-bold text-white">Solo vs. Co-op Strategy</h2>
        <p>
          Solo: stay mobile, sidestep leaps, and burst the mouth window. In co-op the boss HP scales up to 2.5x
          with four anglers — assign one player to add-control with a knife while the others focus fire the
          boss. The escape bar drains with sustained damage, so overlapping fire from multiple players makes
          Phase 2 much easier than solo.
        </p>

        <h2 className="text-xl font-bold text-white">After the Fight: The Skeleton Matters</h2>
        <p>
          Keep the <strong>Giant Piranha Skeleton</strong> — do not sell it. Carrying it back to the quest NPC
          completes the hand-in and unlocks the <Link href="/map/" className="text-aqua hover:underline">Island 3 coordinates</Link>.
          This is the only progression path forward, so a lost skeleton means re-fighting the boss. If you
          died mid-hand-in, check our <Link href="/troubleshooting/items-disappeared/" className="text-aqua hover:underline">items disappeared guide</Link> before
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
            label: 'How to Fish on Steam',
            href: 'https://store.steampowered.com/app/4001890/How_to_Fish/',
            note: 'Official game info; fight phases verified in-game by our editors',
          },
        ]}
      />
    </div>
  );
}
