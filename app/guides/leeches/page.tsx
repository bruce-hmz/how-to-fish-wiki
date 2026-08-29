import Breadcrumb from '@/components/Breadcrumb';
import Link from 'next/link';
import { FaqJsonLd, ArticleJsonLd } from '@/components/JsonLd';
import Sources from '@/components/Sources';

export const metadata = {
  title: 'How to Get Leeches in How to Fish (Island 2 Quest)',
  description: 'Where to find the three leeches for the Island 2 lady-by-the-lake quest: tall grass inland (not the shoreline), the radar red-dot trick, the talk-to-her-fully fix when none spawn, and what the Modified Leech unlocks.',
  alternates: { canonical: 'https://howtofish101.com/guides/leeches/' },
};

const faqs = [
  {
    q: 'Where do leeches spawn in How to Fish?',
    a: 'On Island 2 (Forest), in the tall grass inland — not at the water\'s edge. Multiple guides are explicit that leeches are land pickups found away from the lake, sitting in grass as small dark wriggling spots you pick up with the interact prompt. You need exactly three for the quest.'
  },
  {
    q: 'Why are no leeches spawning for me?',
    a: 'The most common cause reported on the forums: the quest had not actually started. Talk to the lady by the lake all the way to the end of her dialogue, then search again — new leeches spawn once her conversation is fully exhausted. If they still will not appear (some players hit this after dying to the boss mid-quest), reload your last save to reset the spawns.'
  },
  {
    q: 'Is there an easy way to spot leeches?',
    a: 'Buy the radar sold on Island 2 — players report it marks each leech as a red dot, which turns the hunt from pixel-hunting grass into following pings. It also tracks other ground pickups, so it stays useful after the quest.'
  },
  {
    q: 'Do I need more than three leeches?',
    a: 'No — the quest counts 3/3, and older guides saying five are outdated. Extra leeches you pick up along the way are just sellable meat, so there is no reason to hoard a fourth unless you want the pocket change.'
  },
];

export default function LeechesPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8 text-sm text-gray-300">
      <ArticleJsonLd
        headline="How to Get Leeches in How to Fish (Island 2 Quest)"
        description="Where the three leeches spawn on Island 2, the radar red-dot trick, the full-dialogue fix when none spawn, and how the Modified Leech bait unlocks the Giant Piranha fight."
        url="https://howtofish101.com/guides/leeches/"
        datePublished="2026-08-29"
        dateModified="2026-08-29"
      />
      <Breadcrumb items={[{ name: 'Islands', href: '/islands/' }, { name: 'Leech Quest', href: '/guides/leeches/' }]} />
      <h1 className="text-3xl font-extrabold text-white">How to Get Leeches in How to Fish</h1>
      <p className="text-xs text-gray-500 -mt-4">Last verified August 29, 2026 · Game version 1.0.10</p>

      <div className="bg-gold/10 border border-gold/40 rounded-xl p-6 space-y-3">
        <p>
          <strong className="text-white">The short answer:</strong> leeches are <strong className="text-white">ground
          pickups in the tall grass on Island 2 (Forest)</strong> — inland, not by the water. You need exactly three, and
          handing them to the lady by the lake gets you the <strong className="text-white">Modified Leech</strong>, the
          bait that starts the{' '}
          <Link href="/bosses/giant-piranha/" className="text-aqua hover:underline">Giant Piranha boss fight</Link>.
          They are not caught with a rod, no matter how long you fish the lake.
        </p>
      </div>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white">Start the Quest: The Lady by the Lake</h2>
        <p className="text-gray-300 leading-relaxed">
          On Island 2, find the lady sitting on the rock by the lake — walkthroughs place her northwest of the
          lighthouse, out on the Forest Island&rsquo;s lake shore. Talk to her until her dialogue is fully exhausted:
          this is what arms the spawn table. Players who skipped the last dialogue beat have reported empty grass, so
          finish the conversation even if it feels over earlier.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white">Where to Find the Leeches</h2>
        <ol className="list-decimal pl-5 space-y-3 bg-ocean-900/80 border border-ocean-800 rounded-xl p-6 text-xs leading-relaxed">
          <li><strong className="text-white">Head inland, away from the shoreline.</strong> Guides are explicit: leeches sit in the tall grass on land, not near the water — searching the beach is the classic time-waster.</li>
          <li><strong className="text-white">Look for small dark wriggling spots</strong> in the grass and walk into them to pick up. Each character can carry them like any ground item.</li>
          <li><strong className="text-white">Optional: buy the Island 2 radar.</strong> Players report it paints each leech as a red dot, ending the grass-squinting entirely — worth it if you also want ground-item tracking afterwards.</li>
          <li><strong className="text-white">Collect three</strong> — the quest tracks 3/3, and anything extra is sellable meat.</li>
          <li><strong className="text-white">Return and hand all three to the lady</strong> — she forges the Modified Leech bait for the{' '}
            <Link href="/bosses/giant-piranha/" className="text-aqua hover:underline">Giant Piranha</Link> summon.
          </li>
        </ol>
        <div className="bg-coral/10 border border-coral/40 rounded-xl p-5 text-xs space-y-2">
          <p className="font-bold text-white">Two outdated tips to ignore</p>
          <p>Older guides and comments mention <strong>five</strong> leeches — the live quest counts 3/3, and extras are just meat.</p>
          <p>And despite the name, <strong>you do not fish leeches out of the lake</strong>. They are land pickups; casting into the water for them wastes bait and time.</p>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white">If Leeches Still Will Not Spawn</h2>
        <p className="text-gray-300 leading-relaxed">
          A dedicated forum thread covers the annoying case — dialogue done, grass searched, nothing. The community
          fix order:
        </p>
        <ol className="list-decimal pl-5 space-y-3 bg-ocean-900/80 border border-ocean-800 rounded-xl p-6 text-xs leading-relaxed">
          <li><strong className="text-white">Re-talk to the lady completely</strong> — the spawn trigger is tied to finishing her dialogue, and partially-skipped conversations are the top reported cause.</li>
          <li><strong className="text-white">Reload your last save.</strong> Reports of &ldquo;leeches stopped spawning after I died to the boss mid-quest&rdquo; resolve on a reload — which is exactly why the{' '}
            <Link href="/troubleshooting/save-file/" className="text-aqua hover:underline">save backup routine</Link> matters before boss attempts.
          </li>
          <li><strong className="text-white">Check co-op state.</strong> In multiplayer, pickups are shared world state — if a crewmate already grabbed a leech, the remaining spawns reflect what is left. A guest reconnecting with rolled-back inventory is a known pattern in our{' '}
            <Link href="/troubleshooting/items-disappeared/" className="text-aqua hover:underline">items triage guide</Link>.
          </li>
        </ol>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white">What the Leeches Unlock</h2>
        <p className="text-gray-300 leading-relaxed">
          The hand-in is not the end — it is the gate to Island 3. The lady trades your three leeches for the{' '}
          <strong className="text-white">Modified Leech</strong>, the only bait the Giant Piranha responds to. Casting it
          into the lake starts the fight; beating it drops the Giant Piranha skeleton, which walks back to the same lady
          for the Island 3 coordinates. The full phase-by-phase fight is in the{' '}
          <Link href="/bosses/giant-piranha/" className="text-aqua hover:underline">Giant Piranha boss guide</Link>, and the
          whole progression ladder is on the{' '}
          <Link href="/islands/" className="text-aqua hover:underline">islands page</Link>.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white">Leech Quest FAQ</h2>
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
          { label: 'Steam Discussion: “Where to find leeches” (Aug 2026)', href: 'https://steamcommunity.com/app/4001890/discussions/0/582805931178490047/', note: 'source of the radar red-dot tip and regular ground respawns' },
          { label: 'Steam Discussion: “leeches not spawning” (Aug 2026)', href: 'https://steamcommunity.com/app/4001890/discussions/0/582805931178562048/', note: 'source of the full-dialogue fix and the reload-after-death respawn reset' },
          { label: 'GamesRadar: How to get Leeches in How to Fish', href: 'https://www.gamesradar.com/games/co-op/how-to-fish-leeches/', note: 'leeches are grass pickups, not catches' },
          { label: 'Destructoid: Complete How to Fish Walkthrough', href: 'https://www.destructoid.com/complete-how-to-fish-game-walkthrough-100-completion/', note: 'lady-by-the-lake location northwest of the lighthouse' },
        ]}
      />
      <FaqJsonLd faqs={faqs} />
    </div>
  );
}
