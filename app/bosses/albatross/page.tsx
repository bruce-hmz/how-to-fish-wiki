import Breadcrumb from '@/components/Breadcrumb';
import Link from 'next/link';
import { FaqJsonLd } from '@/components/JsonLd';

export const metadata = {
  title: 'Albatross Boss Guide: Tuna Bait Chain',
  description: 'Spawn and beat the Albatross in How to Fish: catch the Tuna with a Professional Boss Lure on Island 4, bait the dive passes, and claim the Albatross Head.',
  alternates: { canonical: 'https://howtofish101.com/bosses/albatross/' },
};

const faqs = [
  { q: 'How do I spawn the Albatross in How to Fish?', a: 'The Albatross is a two-stage chain on Island 4: first catch a Tuna using the Professional Boss Lure, then drop the fresh Tuna carcass on open ground as bait. The bird arrives from the air within seconds.' },
  { q: 'Why is the Albatross not spawning for me?', a: 'The chain requires finishing the Pufferfish hand-in first. If the bird never comes, confirm your active quest log shows the Island 4 objective, use a fresh Tuna (not a stored one), and place the carcass in an open area away from buildings and trees.' },
  { q: 'What is the terrorizing bird in How to Fish?', a: 'The terrorizing bird is the community nickname for the Albatross, the giant bird boss of Island 4. Defeating it grants the Terrorizing Bird achievement and the Albatross Head quest item.' },
  { q: 'What do I do with the Albatross Head?', a: 'Keep it — it is a quest hand-in item, not a trophy. Delivering it to the next NPC advances the story route and rewards the Sky Compass, which marks the remaining flight-path secrets on your map.' },
];

export default function AlbatrossPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      <FaqJsonLd faqs={faqs} />
      <Breadcrumb items={[{ name: 'Boss Battles', href: '/bosses/' }, { name: 'Albatross', href: '/bosses/albatross/' }]} />
      <h1 className="text-3xl font-extrabold text-white">Albatross Boss Fight (Terrorizing Bird)</h1>
      <div className="bg-ocean-900/80 border border-ocean-800 rounded-xl p-6 space-y-6 text-sm text-gray-300">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 bg-ocean-950 p-4 rounded-lg text-xs">
          <div><span className="text-gray-400">Location:</span> <strong className="text-white block">Island 4 Skies</strong></div>
          <div><span className="text-gray-400">HP Pool:</span> <strong className="text-coral-light block">2,200 HP</strong></div>
          <div><span className="text-gray-400">Required Bait:</span> <strong className="text-gold block">Fresh Tuna Carcass</strong></div>
          <div><span className="text-gray-400">Key Weakness:</span> <strong className="text-aqua block">Wing joints (post-dive)</strong></div>
        </div>

        <h2 className="text-xl font-bold text-white">Spawn Chain: Lure the Tuna, Bait the Bird</h2>
        <p>
          The Albatross does not respond to a normal lure. The encounter is a two-stage chain on Island 4:
          first buy the <strong>Professional Boss Lure</strong>, hook and defeat a <strong>Tuna</strong> with
          it, then drop the fresh carcass on open ground. Seconds later the Albatross — the giant bird
          players call the <em>terrorizing bird</em> — swoops in from the air. Finish the earlier Pufferfish
          hand-in before attempting this chain, or the quest will not advance.
        </p>
        <p className="text-xs text-gray-400 border-l-2 border-gold/60 pl-3">
          Placement matters: bait in an open field with clear sky above. Carcasses dropped under trees or
          beside buildings can fail to trigger the arrival.
        </p>

        <h2 className="text-xl font-bold text-white">Phase 1: Committed Dive Passes</h2>
        <p>
          The Albatross fights like an aerial Spider Crab: every attack is a committed dive pass with a long
          recovery. Watch its shadow — when the shadow locks onto your position, the dive is coming. Strafe
          sideways at the last moment; the bird overshoots, skids, and spends 2-3 seconds recovering with its
          wing joints exposed. That recovery window is the only safe damage phase in the entire fight.
          Standing still or backing up in a straight line gets you caught by the follow-up swoop.
        </p>

        <h2 className="text-xl font-bold text-white">Phase 2: Grounded Rage &amp; Wind Gusts</h2>
        <p>
          Below 40% HP the bird stays grounded and alternates wing-slam shockwaves with knockback wind
          gusts. The shockwaves radiate outward — jump over the ring as it reaches you, then punish the slam
          recovery. Wind gusts push you toward cliff edges: keep your back to open terrain, never to a drop.
          This phase is a DPS check more than a dodge test, so save your best ammunition for it.
        </p>

        <h2 className="text-xl font-bold text-white">Recommended Gear Loadout</h2>
        <ul className="list-disc pl-5 space-y-2 text-xs text-gray-300">
          <li><strong>Professional Boss Lure</strong>: Non-negotiable — it is the only way to hook the Tuna that starts the chain.</li>
          <li><strong>Ranged Weapon with Ammo Reserve</strong>: The wing joints sit high; melee-only builds struggle to reach them safely.</li>
          <li><strong>Stamina Recovery Items</strong>: Constant strafing drains stamina; a mid-fight cramp near a cliff edge is fatal.</li>
          <li><strong>Cleared Landing Zone</strong>: Fight in an open field so the shadow telegraph is always visible.</li>
        </ul>

        <h2 className="text-xl font-bold text-white">Solo vs. Co-op Strategy</h2>
        <p>
          Solo: discipline wins — one punish window per dive, never two. In co-op, spread out so dive passes
          can only target one player at a time, and agree on a callout for Phase 2 shockwaves. Boss HP scales
          with crew size (up to 2.5x at four anglers), but the exposed recovery windows stay the same length,
          so overlapping fire trivializes the DPS check.
        </p>

        <h2 className="text-xl font-bold text-white">After the Fight: Keep the Head</h2>
        <p>
          The <strong>Albatross Head</strong> is a quest item, not a sellable trophy. Handing it in unlocks the
          Sky Compass and the <em>Terrorizing Bird</em> achievement. If it vanished after a crash or
          disconnect, read our <Link href="/troubleshooting/items-disappeared/" className="text-aqua hover:underline">items disappeared guide</Link> before
          saving again.
        </p>

        <div className="bg-ocean-950 border border-ocean-700 rounded-lg p-4 text-xs text-gray-400">
          <strong className="text-gold">Stuck on this fight?</strong> Patch 1.0.9 added Easy Mode: creatures
          have 25% less health and deal 50% less damage. Switch difficulty from the main menu or in-game via
          the <Link href="/settings/" className="text-aqua hover:underline">settings guide</Link>.
        </div>
      </div>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white">Albatross FAQ</h2>
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
