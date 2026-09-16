import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import Sources from '@/components/Sources';
import { ArticleJsonLd, FaqJsonLd } from '@/components/JsonLd';
import { CURRENT_GAME_VERSION } from '@/src/data/game';
import { getBoss, getFish, sourcesFor, lastVerified, lureNames, locationLabel } from '@/lib/entity-graph';

const boss = getBoss('old-pike');
const pike = getFish('pike');
const locationName = locationLabel(boss.facts.locationSlug);
const sources = sourcesFor([boss, pike]);
const verifiedAt = lastVerified([boss, pike]);

export const metadata = {
  title: 'How to Catch the Old Pike in How to Fish',
  description:
    'The Old Pike is a boss-class catch on Island 2 (Forest). Use the $40 Beginner Boss Lure — the Sunfish shares the pool and can bite first — or hunt it with the $150 Shotgun. Verified for 1.0.12.',
  alternates: { canonical: 'https://howtofish101.com/bosses/old-pike/' },
};

const faqs = [
  {
    q: 'Is the Old Pike the same as the regular Pike in How to Fish?',
    a: 'No — they are two separate catalog entries. The regular Pike is a normal fish on island 2, caught with the Free Lure or the Beginner Lure. The Old Pike is a boss-class catch: it needs the Beginner BOSS Lure (a different, $40 item), or the $150 Shotgun.',
  },
  {
    q: 'Can you catch the Old Pike without fishing?',
    a: 'Yes. Game8 documents a direct alternative: buy the $150 Shotgun and hunt the Old Pike with it instead of fishing for it. Both routes target the same island-2 forest/lake encounter.',
  },
  {
    q: 'Why do I keep hooking a Sunfish instead of the Old Pike?',
    a: 'The Sunfish shares the Beginner Boss Lure pool — both sources that document the lure state that the Sunfish can bite first. Keep casting the same lure on island 2; the Old Pike hooks from the same pool.',
  },
];

export default function OldPikePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      <ArticleJsonLd
        headline="How to Catch the Old Pike in How to Fish"
        description="Where to find the Old Pike (island 2, forest), the $40 Beginner Boss Lure route, the Sunfish shared-pool trap, and the $150 Shotgun alternative — verified against guide databases for game version 1.0.12."
        url="https://howtofish101.com/bosses/old-pike/"
        datePublished="2026-09-16"
        dateModified="2026-09-16"
      />
      <Breadcrumb
        items={[
          { name: 'Boss Battles', href: '/bosses/' },
          { name: 'The Old Pike', href: '/bosses/old-pike/' },
        ]}
      />
      <h1 className="text-3xl font-extrabold text-white">How to Catch the Old Pike in How to Fish</h1>
      <p className="text-xs text-gray-500 -mt-4">
        Last verified {verifiedAt} · Game version {CURRENT_GAME_VERSION}
      </p>

      <div className="bg-aqua/10 border border-aqua/40 rounded-xl p-6 space-y-3 text-sm">
        <p className="font-bold text-white">
          Quick answer: cast the $40 Beginner Boss Lure on Island 2 (Forest) and keep going — the Sunfish
          shares the lure pool and can bite first. No fishing? Buy the $150 Shotgun and hunt the Old Pike
          directly.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 bg-ocean-950 p-4 rounded-lg text-xs">
          <div>
            <span className="text-gray-400">Location:</span>{' '}
            <strong className="text-white block">{locationName}</strong>
          </div>
          <div>
            <span className="text-gray-400">Lure / bait:</span>{' '}
            <strong className="text-gold block">{lureNames(['beginner-boss-lure']).join('')} — $40</strong>
          </div>
          <div>
            <span className="text-gray-400">Alternative:</span>{' '}
            <strong className="text-white block">$150 Shotgun hunt</strong>
          </div>
          <div>
            <span className="text-gray-400">Required progression:</span>{' '}
            <strong className="text-white block">Reach island 2 (Boat Keys → first boss)</strong>
          </div>
          <div>
            <span className="text-gray-400">What counts as catching it:</span>{' '}
            <strong className="text-white block">Boss-class kill — “Eat a mini-boss” achievement</strong>
          </div>
          <div>
            <span className="text-gray-400">Game version:</span>{' '}
            <strong className="text-white block">{CURRENT_GAME_VERSION} · verified {verifiedAt}</strong>
          </div>
        </div>
      </div>

      <div className="bg-ocean-900/80 border border-ocean-800 rounded-xl p-6 space-y-6 text-sm text-gray-300">
        <h2 className="text-xl font-bold text-white">Where to Find the Old Pike</h2>
        <p>
          The Old Pike is a <strong className="text-white">boss-class catch on Island 2 — the forest island
          (lake)</strong>. That is the only location any guide database documents for it. It is an
          optional mini-boss, not a progression gate: the island-2 story chain that unlocks island 3 runs
          through the Giant Piranha (three-Leeches quest), and the Old Pike&apos;s kill unlocks nothing the
          sources name — it is hunted for the achievement and the catalog.
        </p>
        <p>
          To reach island 2 you first finish the starter-island chain: beer → Empty Beer Can → Spider Crab
          → Crab Shell trade → <strong className="text-white">Boat Keys</strong>. The full route is in the{' '}
          <Link href="/bosses/spider-crab/" className="text-aqua hover:underline">Spider Crab guide</Link>{' '}
          and the <Link href="/islands/" className="text-aqua hover:underline">island unlock guide</Link>.
        </p>

        <h2 className="text-xl font-bold text-white">What You Need</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong className="text-white">Beginner Boss Lure — $40</strong> (documented by Game8). This is
            the boss-class lure tier for island 2; see the{' '}
            <Link href="/lures/" className="text-aqua hover:underline">lures &amp; baits guide</Link> for
            the full tier list.
          </li>
          <li>
            <strong className="text-white">The $150 Shotgun</strong> — the documented non-fishing route:
            buy it and hunt the Old Pike directly (Game8).
          </li>
          <li>
            <strong className="text-white">Not needed:</strong> the regular Beginner Lure is a different,
            cheaper item that hooks normal island-2 fish (Pike, Cod, Goby, Perch, Triggerfish…) — it will
            not hook the Old Pike.
          </li>
        </ul>

        <h2 className="text-xl font-bold text-white">Step-by-Step</h2>
        <ol className="list-decimal list-inside space-y-2">
          <li>Clear the starter island and sail to island 2 with the Boat Keys.</li>
          <li>Buy the <strong className="text-white">Beginner Boss Lure ($40)</strong> from a shop.</li>
          <li>Cast anywhere in the forest island&apos;s water.</li>
          <li>Expect wrong-fish bites first: the{' '}
            <Link href="/bosses/" className="text-aqua hover:underline">Sunfish</Link> shares this lure
            pool and can bite before the Pike does.</li>
          <li>Keep casting the same lure — the Old Pike hooks from the same pool.</li>
          <li>
            Shotgun route instead: buy the <strong className="text-white">$150 Shotgun</strong> and hunt
            the Old Pike directly without fishing. The weapon list is in the{' '}
            <Link href="/weapons/" className="text-aqua hover:underline">weapons guide</Link>.
          </li>
        </ol>

        <h2 className="text-xl font-bold text-white">If the Old Pike Isn’t Appearing</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong className="text-white">Wrong lure tier:</strong> the Old Pike is not in the regular
            Beginner Lure roster — check that you bought the <em>Beginner Boss Lure</em> ($40), not the
            Beginner Lure.
          </li>
          <li>
            <strong className="text-white">Sunfish first:</strong> the Sunfish shares the Beginner Boss
            Lure pool and can bite before the Old Pike does — that is the documented behavior, not a bug.
          </li>
          <li>
            <strong className="text-white">Wrong island:</strong> no source places the Old Pike anywhere
            but island 2 — the first island and the later islands do not document it.
          </li>
        </ul>

        <h2 className="text-xl font-bold text-white">What to Do After Catching It</h2>
        <p>
          Eating a mini-boss is the official{' '}
          <Link href="/achievements/" className="text-aqua hover:underline">Competitive eating</Link>{' '}
          achievement (&ldquo;Eat a mini-boss&rdquo;, 17.3% global unlock). No unique quest or island gate
          uses the Old Pike — the island-2 gate is the Giant Piranha chain — so after the kill, either
          return to the mainland progress (three Leeches → Giant Piranha → island 3) or hunt the Sunfish,
          the second island-2 boss-class catch on the same lure pool. The next mini-boss up the ladder is
          the Blue Shark on island 3, hooked with the Standard Boss Lure.
        </p>

        <div className="bg-ocean-950 border border-ocean-700 rounded-lg p-4 text-xs text-gray-400">
          <strong className="text-gold">Related guides:</strong>{' '}
          <Link href="/bosses/" className="text-aqua hover:underline">boss hub</Link> ·{' '}
          <Link href="/fish/" className="text-aqua hover:underline">fish database</Link> (regular Pike
          row) · <Link href="/lures/" className="text-aqua hover:underline">lures &amp; baits</Link> ·{' '}
          <Link href="/islands/" className="text-aqua hover:underline">island progression</Link> ·{' '}
          <Link href="/weapons/" className="text-aqua hover:underline">weapons</Link> ·{' '}
          <Link href="/guides/fishipedia/" className="text-aqua hover:underline">Fishipedia checklist</Link>
        </div>

        <Sources
          items={sources.map((s) => ({
            label: s.name,
            href: s.url,
            note: `retrieved ${s.retrievedAt ?? '—'}`,
          }))}
        />
      </div>

      <section className="space-y-4">
        <h2 className="text-xl font-bold text-white">Old Pike FAQ</h2>
        <div className="bg-ocean-900/80 border border-ocean-800 rounded-xl divide-y divide-ocean-800/60 text-sm text-gray-300">
          {faqs.map((f) => (
            <div key={f.q} className="p-5 space-y-2">
              <h3 className="font-bold text-white">{f.q}</h3>
              <p>{f.a}</p>
            </div>
          ))}
        </div>
      </section>
      <FaqJsonLd faqs={faqs} />
    </div>
  );
}