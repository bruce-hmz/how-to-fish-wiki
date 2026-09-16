import Breadcrumb from '@/components/Breadcrumb';
import Link from 'next/link';
import { FaqJsonLd } from '@/components/JsonLd';
import Sources from '@/components/Sources';

export const metadata = {
  title: 'Albatross Boss Guide: Tuna Bait Chain',
  description: 'Spawn and beat the Albatross (terrorizing bird) in How to Fish: catch the Tuna with a Professional Boss Lure on Island 4, use it as bait, and defend the scared islanders.',
  alternates: { canonical: 'https://howtofish101.com/bosses/albatross/' },
};

const faqs = [
  { q: 'How do I spawn the Albatross in How to Fish?', a: 'The Albatross is a two-stage chain on Island 4: first catch a Tuna using the Professional Boss Lure, then use the defeated Tuna as bait. The bird arrives from the air.' },
  { q: 'Why is the Albatross not spawning for me?', a: 'Confirm you are on island 4 with the Professional Boss Lure (not the regular Professional Lure — the Tuna is a boss-class catch and needs the boss version), and that you have finished the earlier island gates. If the bird never comes, the usual cause is using a regular fish as bait instead of the Tuna.' },
  { q: 'What is the terrorizing bird in How to Fish?', a: 'The terrorizing bird is the Albatross, the giant bird boss of Island 4. The official achievement wording is "Defend the scared islanders from the terrorizing bird" (Terrorizing bird, 42.8% of players).' },
  { q: 'The Albatross soft-locked my game — how do I recover?', a: 'One player reported the fight soft-locking their save; the community fix circulating on Reddit is to open Saves/local.txt, Ctrl+F the albatross quest item, and remove or repair that entry. Treat this as a last resort — hand-editing save files risks corruption — and note that patches since 1.0.11 keep automatic save backups (see our save file guide) to fall back on. If a quest item vanished rather than soft-locking, the items disappeared guide covers that case.' },
];

export default function AlbatrossPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      <FaqJsonLd faqs={faqs} />
      <Breadcrumb items={[{ name: 'Boss Battles', href: '/bosses/' }, { name: 'Albatross', href: '/bosses/albatross/' }]} />
      <h1 className="text-3xl font-extrabold text-white">Albatross Boss Fight (Terrorizing Bird)</h1>
      <p className="text-xs text-gray-500 -mt-4">Last verified September 16, 2026 · Game version 1.0.12</p>

      <div className="bg-ocean-900/80 border border-ocean-800 rounded-xl p-6 space-y-6 text-sm text-gray-300">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 bg-ocean-950 p-4 rounded-lg text-xs">
          <div><span className="text-gray-400">Location:</span> <strong className="text-white block">Island 4 (Sky)</strong></div>
          <div><span className="text-gray-400">Required bait:</span> <strong className="text-gold block">A defeated Tuna</strong></div>
          <div><span className="text-gray-400">Unlocks:</span> <strong className="text-aqua block">Route to Island 5 + achievement</strong></div>
          <div><span className="text-gray-400">HP:</span> <strong className="text-white block">Undocumented</strong></div>
        </div>

        <h2 className="text-xl font-bold text-white">Spawn Chain: Catch the Tuna, Bait the Bird</h2>
        <p>
          The Albatross does not respond to a normal lure. The encounter is a two-stage chain on Island 4:
          first hook and defeat a <strong>Tuna</strong> with the <strong>Professional Boss Lure</strong> (the
          Tuna is itself a boss-class catch — the regular Professional Lure will not do), then use the Tuna
          as bait. The Albatross — the giant bird players call the <em>terrorizing bird</em> — swoops in
          from the air. Both guide databases document this chain; the Tuna was also{' '}
          <Link href="/updates/" className="text-aqua hover:underline">nerfed slightly</Link> in patch 1.0.12.
        </p>

        <h2 className="text-xl font-bold text-white">Community Tactics: Surviving the Dive</h2>
        <p>
          The most common complaint about this fight is timing out — even fully-upgraded squads report
          running out of time before the kill, so burst damage into every recovery window beats sustained
          plinking. These are the tactics players are actually beating the bird with, straight from the
          community (September 2026):
        </p>
        <ul className="list-disc pl-5 space-y-2 text-xs text-gray-300">
          <li><strong>Interrupt the dive with buildings</strong>: fight around the pier where you sell fish —
            running inside the building as the dive starts interrupts the attack, and positioning under the
            bridge works the same way.</li>
          <li><strong>Casino hide-and-snipe</strong>: hide inside the casino, then step out to take sniper
            potshots while the bird recovers, and repeat.</li>
          <li><strong>Shotgun solo with cooked-fish bait</strong>: scatter a couple of dynamites&rsquo; worth
            of cooked fish across the grassy center — the gulls that harass you each grab one and stop
            grabbing more. Stand in the middle, side-step the dropping attack, wait for the lunge, and blast
            point-blank. This is the solo kill that a player video on Reddit demonstrates.</li>
          <li><strong>Weapon notes from the same threads</strong>: the SMG is repeatedly named as the
            comfortable pick for this boss, with shotguns as the main alternative — matched to the ammo and
            range you actually have, not to a fixed &ldquo;best&quot; list.</li>
        </ul>

        <h2 className="text-xl font-bold text-white">What We Removed</h2>
        <p className="text-xs text-gray-400 leading-relaxed">
          An earlier version of this page described exact HP (2,200), phase thresholds (40%), wing-joint
          weak points, a &ldquo;Sky Compass&rdquo; reward, and stamina-management mechanics. None of that
          appears in any guide database, patch note, or player thread we can source — the verified chain is
          the Tuna bait plus the tactics above, and the fight&apos;s reward is progression to island 5 with
          the Terrorizing bird achievement. The unsupported specifics were removed in our September 2026
          fact audit.
        </p>

        <div className="bg-ocean-950 border border-ocean-700 rounded-lg p-4 text-xs text-gray-400">
          <strong className="text-gold">Stuck on this fight?</strong> Patch 1.0.9 added Easy Mode: creatures
          have 25% less health and deal 50% less damage. Switch difficulty from the main menu or in-game via
          the <Link href="/difficulty/" className="text-aqua hover:underline">difficulty guide</Link>.
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

      <Sources
        items={[
          {
            label: 'G2A News: all fish, bosses, rods and bait by island',
            href: 'https://www.g2a.com/news/features/guide/how-to-fish-all-fish-bosses-rods-and-bait-by-island/',
            note: 'Tuna-as-bait chain for the Albatross',
          },
          {
            label: 'Mobalytics: How to Fish — All 49 Fish, Creatures and Lures',
            href: 'https://mobalytics.gg/gamebase/guides/how-to-fish-all-fish-creatures-lures',
            note: 'independent corroboration: Professional Boss Lure hooks the Tuna; Albatross takes the Tuna',
          },
          {
            label: 'Steam Community global achievements (app 4001890)',
            href: 'https://steamcommunity.com/stats/4001890/achievements',
            note: 'official Terrorizing bird achievement wording and unlock rate',
          },
          {
            label: 'Steam Discussion: Boss health/timers — SMG for albatross',
            href: 'https://steamcommunity.com/app/4001890/discussions/0/581680664978608620/',
            note: 'community weapon picks per boss',
          },
        ]}
      />
    </div>
  );
}
