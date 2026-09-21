import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import Sources from '@/components/Sources';
import { ArticleJsonLd, FaqJsonLd } from '@/components/JsonLd';
import {
  CURRENT_GAME_VERSION,
  DRIP_SYSTEM_FACTS,
  FISH_BY_SLUG,
  LURE_BY_SLUG,
  LOCATION_BY_SLUG,
  SOURCE_BY_ID,
} from '@/src/data/game';
import { lastVerified, lureNames, locationLabel, sourcesFor } from '@/lib/entity-graph';

// Every fact on this page is read from the verified data layer — nothing is
// hand-typed here. See docs/GAMEPLAY_FACT_AUDIT.md for the sourcing rules.
const triggerfish = FISH_BY_SLUG['triggerfish'];
const beginnerLure = LURE_BY_SLUG['beginner-lure'];
const bossLure = LURE_BY_SLUG['beginner-boss-lure'];
const location = LOCATION_BY_SLUG[triggerfish.facts.locationSlug];

const locationName = locationLabel(triggerfish.facts.locationSlug);
const island = location.facts.islandNumber;
const lureName = lureNames(triggerfish.facts.lureSlugs).join(' + ');
const verifiedAt = lastVerified([triggerfish, beginnerLure]);
const sellValue = triggerfish.facts.sellValueUsd;
const sellValueSourceId = triggerfish.facts.sellValueSourceId;

// The page cites the entity sources plus the sell-value source (IGN), so the
// Sources block can never drift from the entities' own provenance.
const entitySources = sourcesFor([triggerfish, beginnerLure]);
const sources =
  sellValueSourceId && !entitySources.some((s) => s.id === sellValueSourceId)
    ? [...entitySources, SOURCE_BY_ID[sellValueSourceId]]
    : entitySources;

export const metadata = {
  title: 'How to Catch Triggerfish in How to Fish (Beginner Lure, Island 2)',
  description:
    'Triggerfish in the How to Fish game is an Island 2 (Forest) catch on the Beginner Lure — the same tier that hooks Cod, Goby and Perch. The Drip Triggerfish uses that same lure: no separate drip bait, no weather or time gate. Verified for 1.0.12.',
  alternates: { canonical: 'https://howtofish101.com/fish/triggerfish/' },
};

const faqs = [
  {
    q: 'Is the Triggerfish in How to Fish the same as a real triggerfish?',
    a: 'No. This page is about the Triggerfish creature in the video game How to Fish by Dazed Games, not about real-world saltwater triggerfish. In-game it is a regular island-2 catch with a documented sell value and a Drip variant — nothing here is real-world fishing advice.',
  },
  {
    q: 'What lure catches the Triggerfish?',
    a: 'The Beginner Lure. The verified data layer maps Triggerfish to exactly one lure, and the lure table records the Beginner Lure as the island-2 (Forest) tier. It is not on the Free Lure starter roster, and the $40 Beginner Boss Lure is a different tier — that one hooks The Old Pike and the Sunfish, not the regular island-2 fish.',
  },
  {
    q: 'How do you catch the Drip Triggerfish?',
    a: 'The same way as the normal one: Drip variants are caught with the same lure as their normal version, so the Drip Triggerfish is an island-2 Beginner Lure catch with no separate drip bait. No drop rate, weather condition, time-of-day window, pity timer or special bait is documented for any Drip creature — treat any exact percentage you see elsewhere as unpublished guesswork.',
  },
];

export default function TriggerfishPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      <ArticleJsonLd
        headline="How to Catch Triggerfish in How to Fish"
        description="Where the Triggerfish lives (island 2, Forest), the Beginner Lure that catches it, the boss-lure trap to avoid, and how the Drip Triggerfish works — verified against the site's game-data layer for version 1.0.12."
        url="https://howtofish101.com/fish/triggerfish/"
        datePublished="2026-09-16"
        dateModified="2026-09-16"
      />
      <Breadcrumb
        items={[
          { name: 'Fish Database', href: '/fish/' },
          { name: 'Triggerfish', href: '/fish/triggerfish/' },
        ]}
      />
      <h1 className="text-3xl font-extrabold text-white">How to Catch Triggerfish in How to Fish</h1>
      <p className="text-xs text-gray-500 -mt-4">
        Last verified {verifiedAt} · Game version {CURRENT_GAME_VERSION}
      </p>
      <p className="text-xs text-gray-400">
        This is the Triggerfish creature in the video game <em>How to Fish</em> (Dazed Games) — a regular
        island-2 catch. It is not a guide to real-world triggerfish.
      </p>

      <div className="bg-aqua/10 border border-aqua/40 rounded-xl p-6 space-y-3 text-sm">
        <p className="font-bold text-white">
          Quick answer: equip the <strong>Beginner Lure</strong> and fish <strong>{locationName}</strong>.
          Triggerfish is a regular fish — no summon item, no boss fight. It shares the Beginner Lure roster
          with Piranha, Pike, Cod, Goby, Salmon, Perch and Goldfish, so expect other bites first. The Drip
          Triggerfish uses that same lure: there is no separate drip bait.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 bg-ocean-950 p-4 rounded-lg text-xs">
          <div>
            <span className="text-gray-400">Location:</span>{' '}
            <strong className="text-white block">{locationName}</strong>
          </div>
          <div>
            <span className="text-gray-400">Required lure:</span>{' '}
            <strong className="text-gold block">{lureName}</strong>
          </div>
          <div>
            <span className="text-gray-400">Catch type:</span>{' '}
            <strong className="text-white block">Regular fish (not boss-class)</strong>
          </div>
          <div>
            <span className="text-gray-400">Progression:</span>{' '}
            <strong className="text-white block">Island {island} — the Beginner Lure tier</strong>
          </div>
          <div>
            <span className="text-gray-400">Drip Triggerfish:</span>{' '}
            <strong className="text-white block">Same lure, island {island} — no separate drip bait</strong>
          </div>
          <div>
            <span className="text-gray-400">Game version:</span>{' '}
            <strong className="text-white block">{CURRENT_GAME_VERSION} · verified {verifiedAt}</strong>
          </div>
        </div>
        {sellValue !== undefined ? (
          <p className="text-xs text-gray-300">
            Documented sell value: <strong className="text-white">${sellValue}</strong>. Single source (IGN
            fish table) — treat it as indicative, not exact.
          </p>
        ) : null}
      </div>

      <div className="bg-ocean-900/80 border border-ocean-800 rounded-xl p-6 space-y-6 text-sm text-gray-300">
        <h2 className="text-xl font-bold text-white">Where to Find Triggerfish</h2>
        <p>
          Triggerfish is recorded at <strong className="text-white">{locationName}</strong> — island {island},
          the forest island with the lake. That is the only location either structure source places it in, and
          the two independent guide databases behind this site&apos;s data layer (the G2A island guide and the
          Mobalytics fish list) agree on it.
        </p>
        <p>
          It is a <strong className="text-white">regular fish</strong>, not a boss-class catch: there is no
          summon item, no quest hand-in and no fight attached to it. It simply comes up from the island-{island}{' '}
          water while the right lure is equipped. The full per-species table is in the{' '}
          <Link href="/fish/" className="text-aqua hover:underline">fish database</Link>, and how island{' '}
          {island} fits into the wider unlock order is covered in the{' '}
          <Link href="/islands/" className="text-aqua hover:underline">island progression guide</Link>.
        </p>

        <h2 className="text-xl font-bold text-white">How to Catch Triggerfish</h2>
        <ol className="list-decimal list-inside space-y-2">
          <li>
            <strong className="text-white">Equip the {lureName}.</strong> The data layer maps Triggerfish to
            that one lure — the lure table lists it as the island-{island} (Forest) tier, alongside Piranha,
            Pike, Cod, Goby, Salmon, Perch and Goldfish.
          </li>
          <li>
            <strong className="text-white">Fish island {island} water.</strong> Island {island} is the only
            location recorded for this creature.
          </li>
          <li>
            <strong className="text-white">Keep casting through wrong-fish bites.</strong> Every species on
            the Beginner Lure roster comes from the same pool, so Cod, Goby or Perch landing first is normal
            behaviour, not a sign you are in the wrong place.
          </li>
          <li>
            <strong className="text-white">Sell or keep it.</strong> The documented sell value is ${sellValue}{' '}
            (IGN, single source). If you are hunting the collection layers instead, tick it off in the{' '}
            <Link href="/guides/fishipedia/" className="text-aqua hover:underline">
              Fishipedia checklist
            </Link>{' '}
            — and remember the regular entry and the Drip entry are two separate slots.
          </li>
        </ol>
        <p className="text-xs text-gray-400">
          No weather condition, time-of-day window or special bait is recorded for Triggerfish anywhere in the
          verified data layer. The old weather/time column was removed from this site&apos;s fish table during
          the September 2026 fact audit precisely because no source documents such a system — if a guide tells
          you to wait for a specific sky, it is guessing.
        </p>

        <h2 className="text-xl font-bold text-white">How to Catch Drip Triggerfish</h2>
        <p>
          The Drip Triggerfish follows the one drip rule the data layer actually documents:{' '}
          <strong className="text-white">{DRIP_SYSTEM_FACTS.rule}</strong> So the hunt is island {island} with
          the {lureName}, exactly like the regular catch — there is no separate &ldquo;drip lure&rdquo; to buy.
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong className="text-white">Every creature has a Drip variant.</strong> The data layer records{' '}
            {DRIP_SYSTEM_FACTS.dripVariantCount} Drip variants across a{' '}
            {DRIP_SYSTEM_FACTS.totalCatalogSize}-creature catalog, so a Drip Triggerfish is part of the set.
          </li>
          <li>
            <strong className="text-white">It fills its own slot.</strong> The Drip layer is tracked by the{' '}
            {DRIP_SYSTEM_FACTS.trackedBy}. A regular Triggerfish does not fill the Drip entry, and the Drip
            Triggerfish does not fill the regular one.
          </li>
          <li>
            <strong className="text-white">Not documented:</strong> any drop rate or spawn rate, any weather or
            time requirement, any pity timer, and any special bait. No source in the data layer carries a
            Drip-Triggerfish-specific catch report either — this site will not print a number nobody published.
          </li>
        </ul>
        <p>
          The wider Drip system — what is confirmed, what players report, and the community hunting techniques —
          is covered in the{' '}
          <Link href="/fish/drip-fish/" className="text-aqua hover:underline">Drip Fish guide</Link>, and the
          full 49-entry Drip checklist is the{' '}
          <Link href="/guides/fishipedia/" className="text-aqua hover:underline">Fishipedia page</Link>.
        </p>

        <h2 className="text-xl font-bold text-white">Why Triggerfish Is Not Appearing</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong className="text-white">You are on the wrong lure tier.</strong> Triggerfish is a Beginner
            Lure catch only. It is not on the Free Lure starter roster, and the later Standard, Professional and
            Scientific tiers belong to other islands.
          </li>
          <li>
            <strong className="text-white">You bought the {bossLure.name} by mistake.</strong> That is the $
            {bossLure.facts.priceUsd} boss tier, and the lure table records what it hooks: The Old Pike and the
            Sunfish — the two share that pool, so it can bite first. It is not the regular island-{island}{' '}
            roster. See the{' '}
            <Link href="/lures/" className="text-aqua hover:underline">lures &amp; baits guide</Link> for the
            tiers side by side.
          </li>
          <li>
            <strong className="text-white">You are fishing the wrong island.</strong> No source records
            Triggerfish anywhere except island {island}. The full tier list is on the{' '}
            <Link href="/fish/" className="text-aqua hover:underline">fish database</Link>.
          </li>
          <li>
            <strong className="text-white">You are watching the wrong counter.</strong> The regular Triggerfish
            and the Drip Triggerfish are separate entries — landing one leaves the other empty. Check which
            slot you are actually missing in the{' '}
            <Link href="/guides/fishipedia/" className="text-aqua hover:underline">checklist</Link>.
          </li>
          <li>
            <strong className="text-white">Nothing is biting at all.</strong> If the rod has gone completely
            quiet rather than just giving you the wrong species, that is a different problem — start with the{' '}
            <Link href="/troubleshooting/fish-not-biting/" className="text-aqua hover:underline">
              fish not biting checklist
            </Link>
            .
          </li>
        </ul>

        <div className="bg-ocean-950 border border-ocean-700 rounded-lg p-4 text-xs text-gray-400">
          <strong className="text-gold">Related guides:</strong>{' '}
          <Link href="/fish/" className="text-aqua hover:underline">fish database</Link> ·{' '}
          <Link href="/lures/" className="text-aqua hover:underline">lures &amp; baits</Link> ·{' '}
          <Link href="/fish/drip-fish/" className="text-aqua hover:underline">Drip Fish deep-dive</Link> ·{' '}
          <Link href="/guides/fishipedia/" className="text-aqua hover:underline">Fishipedia checklist</Link> ·{' '}
          <Link href="/islands/" className="text-aqua hover:underline">island progression</Link> ·{' '}
          <Link href="/bosses/old-pike/" className="text-aqua hover:underline">Old Pike catch guide</Link>
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
        <h2 className="text-xl font-bold text-white">Triggerfish FAQ</h2>
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
