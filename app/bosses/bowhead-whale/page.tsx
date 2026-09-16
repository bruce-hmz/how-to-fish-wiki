import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import Sources from '@/components/Sources';
import { ArticleJsonLd, FaqJsonLd } from '@/components/JsonLd';
import { CURRENT_GAME_VERSION } from '@/src/data/game';
import {
  getBoss,
  getRelatedQuests,
  sourcesFor,
  lastVerified,
  locationLabel,
} from '@/lib/entity-graph';

const bowhead = getBoss('bowhead-whale');
const finalBoss = getBoss('mutated-bowhead-whale');
const chainQuests = getRelatedQuests(bowhead);
const sources = sourcesFor([bowhead, finalBoss, ...chainQuests]);
const verifiedAt = lastVerified([bowhead, finalBoss, ...chainQuests]);
const locationName = locationLabel(bowhead.facts.locationSlug);

export const metadata = {
  title: 'How to Catch the Bowhead Whale & Get the Fish Bucket',
  description:
    'The Fish Bucket is the island-5 quest item that summons the Bowhead Whale — which is itself the bait for the final boss. Location, progression, and what the sources do and do not document. Verified for 1.0.12.',
  alternates: { canonical: 'https://howtofish101.com/bosses/bowhead-whale/' },
};

const faqs = [
  {
    q: 'How do I get the Fish Bucket in How to Fish?',
    a: 'Both guide databases document the Fish Bucket as the island-5 quest item that summons the Bowhead Whale. The step-by-step acquisition route (which quest or NPC grants it) is not documented by any source in our registry, so we do not print one — treat any specific "how to get it" recipe from another site as unverified until a source documents the step.',
  },
  {
    q: 'Is the Bowhead Whale the final boss of How to Fish?',
    a: 'No. The Bowhead Whale is the regular island-5 encounter you summon with the Fish Bucket. The final boss is the Mutated Bowhead Whale, summoned by using the Bowhead Whale as bait — defeating it finishes the game ("We are so back", 28.5% global unlock).',
  },
  {
    q: 'Does dynamite work on the Bowhead Whale?',
    a: 'Community reports say the regular bowhead whale "just blows up with dynamite" — treat that as a player tactic, not an official mechanic. The official 1.0.12 explosive fix concerns the final boss specifically (explosives now work when it lands on its tail).',
  },
];

export default function BowheadWhalePage() {
  const finalBossLink = (
    <Link href="/bosses/magma-whale/" className="text-aqua hover:underline">
      Mutated Bowhead Whale guide
    </Link>
  );

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      <ArticleJsonLd
        headline="How to Catch the Bowhead Whale & Get the Fish Bucket"
        description="The Fish Bucket summons the Bowhead Whale on island 5 — the last step before the final boss. What is verified, what the sources leave undocumented, and the progression chain behind it. Game version 1.0.12."
        url="https://howtofish101.com/bosses/bowhead-whale/"
        datePublished="2026-09-16"
        dateModified="2026-09-16"
      />
      <Breadcrumb
        items={[
          { name: 'Boss Battles', href: '/bosses/' },
          { name: 'Bowhead Whale', href: '/bosses/bowhead-whale/' },
        ]}
      />
      <h1 className="text-3xl font-extrabold text-white">How to Catch the Bowhead Whale &amp; Get the Fish Bucket</h1>
      <p className="text-xs text-gray-500 -mt-4">
        Last verified {verifiedAt} · Game version {CURRENT_GAME_VERSION}
      </p>

      <div className="bg-aqua/10 border border-aqua/40 rounded-xl p-6 space-y-3 text-sm">
        <p className="font-bold text-white">
          Quick answer: the <strong>Fish Bucket</strong> is the island-5 quest item that summons the{' '}
          <strong>Bowhead Whale</strong>. Defeat it and use the whale itself as bait for the Mutated
          Bowhead Whale — the final boss. The sources document what the bucket does; the exact quest step
          that grants it is not documented anywhere we verify against.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 bg-ocean-950 p-4 rounded-lg text-xs">
          <div>
            <span className="text-gray-400">Location:</span>{' '}
            <strong className="text-white block">{locationName}</strong>
          </div>
          <div>
            <span className="text-gray-400">Required item / summon:</span>{' '}
            <strong className="text-gold block">Fish Bucket (quest item)</strong>
          </div>
          <div>
            <span className="text-gray-400">How to get the Fish Bucket:</span>{' '}
            <strong className="text-white block">Acquisition route not documented by verified sources</strong>
          </div>
          <div>
            <span className="text-gray-400">Progression requirement:</span>{' '}
            <strong className="text-white block">Reach island 5 (Albatross chain)</strong>
          </div>
          <div>
            <span className="text-gray-400">Why it matters:</span>{' '}
            <strong className="text-white block">The whale is the final boss’s bait</strong>
          </div>
          <div>
            <span className="text-gray-400">Game version:</span>{' '}
            <strong className="text-white block">{CURRENT_GAME_VERSION} · verified {verifiedAt}</strong>
          </div>
        </div>
      </div>

      <div className="bg-ocean-900/80 border border-ocean-800 rounded-xl p-6 space-y-6 text-sm text-gray-300">
        <h2 className="text-xl font-bold text-white">How to Get the Fish Bucket</h2>
        <p>
          What the verified sources say — G2A&apos;s island guide and Mobalytics&apos; fish list both list
          the <strong className="text-gold">Fish Bucket</strong> as the island-5 quest bait/item, and the
          quest chain &ldquo;Fish Bucket → Bowhead Whale → Mutated Bowhead Whale → Finish&rdquo; starts
          with it. It is the documented trigger for the Bowhead Whale encounter — see the{' '}
          <Link href="/lures/" className="text-aqua hover:underline">quest-baits table</Link> and the{' '}
          <Link href="/islands/" className="text-aqua hover:underline">
            island 5 progression step
          </Link>.
        </p>
        <div className="bg-coral/10 border border-coral/40 rounded-lg p-4 text-xs space-y-2">
          <p className="font-bold text-white">⚠️ Honest gap: the acquisition step</p>
          <p>
            Neither source documents <em>where the Fish Bucket comes from</em> — which NPC or quest hands
            it over is unverified in our registry. We are not printing a route for it. If another site
            gives you a specific recipe, treat it as unverified until a source we trust documents the
            step. This page answers the verified half of the chain: what the bucket does, where it is
            used, and what comes after.
          </p>
        </div>

        <h2 className="text-xl font-bold text-white">How to Find the Bowhead Whale</h2>
        <p>
          The Bowhead Whale lives on <strong className="text-white">Island 5 — the volcano island</strong>,
          the last island in the unlock chain. You reach island 5 by clearing the island-4 chain: catch
          the Tuna on the Professional Boss Lure, use it as bait for the Albatross, and defeat it — the{' '}
          <Link href="/bosses/albatross/" className="text-aqua hover:underline">Albatross guide</Link>{' '}
          covers that fight. Once on island 5, the Fish Bucket summons the whale.
        </p>
        <p>
          Note the naming trap players hit: this is the <strong className="text-white">regular Bowhead
          Whale</strong>, a normal-encounter whale — not the final boss. The final boss is the Mutated
          Bowhead Whale, a separate entity summoned with the whale itself as bait.
        </p>

        <h2 className="text-xl font-bold text-white">How to Catch It</h2>
        <p>
          The documented chain (G2A + Mobalytics): use the Fish Bucket to summon the regular Bowhead
          Whale, then defeat it. Community reports add that the regular bowhead &ldquo;just blows up with
          dynamite&rdquo; — a player tactic, not an official mechanic; the official 1.0.12 explosive fix
          concerns the <em>final boss</em>, not this encounter. HP values and damage numbers for the
          whale are not documented anywhere we verify against.
        </p>

        <h2 className="text-xl font-bold text-white">Why the Bowhead Whale Matters</h2>
        <p>
          The Bowhead Whale <strong className="text-white">is the bait for the final boss</strong>. The
          Mutated Bowhead Whale is summoned with a defeated Bowhead Whale, and beating it finishes the
          game (&ldquo;We are so back&rdquo; achievement, 28.5% global unlock). That makes this catch the
          last gate before the ending — and the bare-hands kill variant ({finalBossLink}, Handyman, 1.7%)
          starts from this same summon.
        </p>

        <h2 className="text-xl font-bold text-white">What to Do Next</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            Use the defeated Bowhead Whale as bait to summon the{' '}
            <strong className="text-white">Mutated Bowhead Whale</strong> — full fight guide:{' '}
            {finalBossLink}.
          </li>
          <li>
            The island-5 parallel boss-class catch is the{' '}
            <strong className="text-white">Goblin Shark</strong> on the Scientific Boss Lure — no
            dedicated guide yet; the <Link href="/bosses/" className="text-aqua hover:underline">boss
            hub</Link> has its facts.
          </li>
          <li>
            Track every remaining creature with the{' '}
            <Link href="/guides/fishipedia/" className="text-aqua hover:underline">
              Fishipedia checklist
            </Link>.
          </li>
        </ul>

        <h2 className="text-xl font-bold text-white">Troubleshooting</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong className="text-white">Can’t find the Fish Bucket:</strong> the acquisition route is
            the documented gap above — we do not have a verified answer, and we won’t invent one.
          </li>
          <li>
            <strong className="text-white">“Which whale is this?”:</strong> if it came from the Fish
            Bucket, it is the regular Bowhead Whale. The final boss only appears when you use the whale
            as bait.
          </li>
          <li>
            <strong className="text-white">Wrong island:</strong> the chain starts on island 5 — the
            bucket is not documented on any earlier island.
          </li>
        </ul>

        <div className="bg-ocean-950 border border-ocean-700 rounded-lg p-4 text-xs text-gray-400">
          <strong className="text-gold">Related guides:</strong>{' '}
          <Link href="/bosses/" className="text-aqua hover:underline">boss hub</Link> ·{' '}
          <Link href="/lures/" className="text-aqua hover:underline">lures &amp; quest baits</Link> ·{' '}
          <Link href="/islands/" className="text-aqua hover:underline">island progression</Link> ·{' '}
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
        <h2 className="text-xl font-bold text-white">Bowhead Whale &amp; Fish Bucket FAQ</h2>
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