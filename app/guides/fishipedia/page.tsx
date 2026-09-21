import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import FishipediaChecklist from '@/components/FishipediaChecklist';
import Sources from '@/components/Sources';
import { ArticleJsonLd, FaqJsonLd } from '@/components/JsonLd';
import { FISHIPEDIA_GROUPS, FISHIPEDIA_TOTALS } from '@/lib/fishipedia';
import { getRelatedQuests, sourcesFor, lastVerified, guideHref } from '@/lib/entity-graph';
import { BOSSES, FISH, CURRENT_GAME_VERSION } from '@/src/data/game';

const verifiedAt = lastVerified([...FISH, ...BOSSES]);
const sources = sourcesFor([...FISH, ...BOSSES]);

export const metadata = {
  title: 'How to Complete the Fishipedia — Missing Creature Checklist',
  description:
    'The Fishipedia achievement ("find and kill all drip creatures", 1.4%) spans 49 creatures — 38 regular fish plus 11 boss-class. Full checklist with location and lure for every missing entry, verified for 1.0.12.',
  alternates: { canonical: 'https://howtofish101.com/guides/fishipedia/' },
};

const faqs = [
  {
    q: 'How many creatures do I need for the Fishipedia in How to Fish?',
    a: '49. The achievement tracks the drip variants of every creature in the catalog: 38 regular fish plus 11 boss-class catches. Every creature has a Drip variant, and each is catchable with the same lure as its normal version — there is no separate drip lure.',
  },
  {
    q: 'Does catching a normal creature count for the Fishipedia?',
    a: 'No — the two completion achievements track different things. Collector is "Find and kill all the creatures" (10.8% global unlock); Fishipedia is "Find and kill all drip creatures" (1.4%). A regular catch does not progress the drip counter.',
  },
  {
    q: "Why won't the Fishipedia achievement unlock?",
    a: 'First make sure the game is on patch 1.0.5 or newer: the official 1.0.5 notes fixed the Fishipedia unlock, which previously required all drip creatures plus one extra. If every drip slot is filled and it still will not pop, see the Drip Fish guide and the achievements guide, which track the remaining reported cases.',
  },
  {
    q: 'Which creature is most commonly the last one missing?',
    a: 'The special perch variant is the most-reported last missing entry in Collector-style runs, and no verified acquisition method for it exists. The Goby was added to the verified catalog in the September 2026 audit, and the Bowlfish’s species status rests on a single source — all three are flagged in the checklist below.',
  },
];

export default function FishipediaPage() {
  const { total, fish, boss, fishipediaAchievement, collectorAchievement, dripRule } = FISHIPEDIA_TOTALS;

  // Boss-class rows that are part of a documented quest/chain (for the
  // quest-gated triage block) — derived from the data layer, not hand-written.
  const questGated = BOSSES.map((b) => ({ boss: b, quests: getRelatedQuests(b) })).filter(
    (row) => row.quests.length > 0
  );

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      <ArticleJsonLd
        headline="How to Complete the Fishipedia — Missing Creature Checklist"
        description="Find the exact creature you are missing: the full 49-creature checklist (38 regular fish + 11 boss-class), grouped by island, with the verified location and lure for every entry and the quest chains behind the boss summons."
        url="https://howtofish101.com/guides/fishipedia/"
        datePublished="2026-09-16"
        dateModified="2026-09-16"
      />
      <Breadcrumb
        items={[
          { name: 'Guides', href: '/guide/' },
          { name: 'Fishipedia Checklist', href: '/guides/fishipedia/' },
        ]}
      />
      <h1 className="text-3xl font-extrabold text-white">How to Complete the Fishipedia in How to Fish</h1>
      <p className="text-xs text-gray-500 -mt-4">
        Last verified {verifiedAt} · Game version {CURRENT_GAME_VERSION}
      </p>

      <div className="bg-aqua/10 border border-aqua/40 rounded-xl p-6 space-y-3 text-sm">
        <p className="font-bold text-white">
          Quick answer: the Fishipedia achievement asks you to “find and kill all drip creatures” —{' '}
          {fishipediaAchievement.globalPercent}% of players have it. It spans {total} creatures (
          {fish} regular fish + {boss} boss-class), and every one of them has a Drip variant. Catch each
          drip variant <strong>with the same lure as its normal version</strong> — there is no separate
          drip lure. Missing one? Use the checklist below: find your island, check the lure, close the
          gap.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 bg-ocean-950 p-4 rounded-lg text-xs">
          <div>
            <span className="text-gray-400">Total creatures:</span>{' '}
            <strong className="text-white block">{total}</strong>
          </div>
          <div>
            <span className="text-gray-400">Normal fish:</span>{' '}
            <strong className="text-white block">{fish}</strong>
          </div>
          <div>
            <span className="text-gray-400">Boss / special:</span>{' '}
            <strong className="text-white block">{boss}</strong>
          </div>
          <div>
            <span className="text-gray-400">Game version:</span>{' '}
            <strong className="text-white block">{CURRENT_GAME_VERSION} · verified {verifiedAt}</strong>
          </div>
        </div>
        <p className="text-xs text-gray-300">
          Counter note: {collectorAchievement.name} (“{collectorAchievement.description}”,{' '}
          {collectorAchievement.globalPercent}%) tracks the regular catalog;{' '}
          {fishipediaAchievement.name} (“{fishipediaAchievement.description}”,{' '}
          {fishipediaAchievement.globalPercent}%) is the drip layer. They are separate achievements.
        </p>
      </div>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white">Fishipedia Checklist</h2>
        <p className="text-sm text-gray-400">
          All {total} creatures, grouped by island in progression order. {dripRule} The ⓘ marks carry the
          data layer&apos;s own caveats (single-source or still-pending facts).
        </p>
        <p className="text-sm text-gray-400">
          Search it, filter it by island, and tick off what you have caught — the checklist remembers your
          ticks in this browser so you can come back and carry on where you stopped.
        </p>
        <FishipediaChecklist groups={FISHIPEDIA_GROUPS} total={total} />
        <p className="text-xs text-gray-500">
          The checklist is generated from the verified game-data layer — every row above is a real catalog
          entry with provenance. “Guide unavailable” means no dedicated page exists yet; the location and
          catch method in the row are the full documented answer.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white">Missing a Fishipedia Entry?</h2>
        <div className="bg-ocean-900/80 border border-ocean-800 rounded-xl p-6 space-y-6 text-sm text-gray-300">
          <h3 className="text-xl font-bold text-white">Missing early-game creatures (islands 1–2)</h3>
          <ul className="list-disc pl-5 space-y-2 text-xs">
            <li>
              <strong className="text-white">Goby</strong> was added to the verified catalog in the
              September 2026 audit — it was in the guide databases but missing from this site before.
              Catch it on island 2 with the <em>Beginner Lure</em>. Its Drip Goby variant has no reliable
              public catch report yet.
            </li>
            <li>
              <strong className="text-white">Pike</strong> (regular fish) vs{' '}
              <strong className="text-white">The Old Pike</strong> (boss-class) are two different entries:
              the Pike takes the Free or Beginner Lure; the Old Pike needs the Beginner{' '}
              <em>Boss</em> Lure or the $150 Shotgun —{' '}
              <Link href="/bosses/old-pike/" className="text-aqua hover:underline">full Old Pike guide</Link>.
            </li>
            <li>
              <strong className="text-white">Sunfish</strong> is boss-class, not a regular fish — it
              shares the Beginner Boss Lure pool with the Old Pike.
            </li>
          </ul>

          <h3 className="text-xl font-bold text-white">Missing island-specific creatures (islands 3–4)</h3>
          <ul className="list-disc pl-5 space-y-2 text-xs">
            <li>
              Island 3 (desert) rows all take the <em>Standard Lure</em>; island 4 (sky) rows all take the{' '}
              <em>Professional Lure</em>. If you are fishing the wrong tier, the fish cannot appear.
            </li>
            <li>
              <strong className="text-white">Bowlfish</strong> is flagged in the data layer: only
              Mobalytics lists it (G2A lists just Boxfish) — its species status rests on a single source.
            </li>
            <li>
              Rows like <strong className="text-white">Bass, Eel, Red Snapper, Bluegill</strong> were
              corrected in the September 2026 audit — older copy placed them in fabricated zones. The
              island + lure in this checklist are the verified versions.
            </li>
          </ul>

          <h3 className="text-xl font-bold text-white">Missing boss / special creatures</h3>
          <p className="text-xs">
            All {boss} boss-class entries are in the checklist with their island and trigger. The four
            story gates (Spider Crab, Giant Piranha, Pufferfish, Albatross) and the two whales each have
            dedicated guides. Blue Shark, Tuna, Goblin Shark and Sunfish have their verified facts in the{' '}
            <Link href="/bosses/" className="text-aqua hover:underline">boss hub</Link> but no dedicated
            page yet — their rows above are the full documented answer.
          </p>

          <h3 className="text-xl font-bold text-white">Missing quest-gated creatures</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-ocean-950 text-gray-400 border-b border-ocean-800">
                <tr>
                  <th className="p-3">Creature</th>
                  <th className="p-3">Quest chain (verified)</th>
                  <th className="p-3">Guide</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-ocean-800/50">
                {questGated.map(({ boss, quests }) => (
                  <tr key={boss.slug}>
                    <td className="p-3 font-bold text-white">{boss.name}</td>
                    <td className="p-3 text-gray-300">{quests[0].name}</td>
                    <td className="p-3">
                      {guideHref(boss.slug) ? (
                        <Link href={guideHref(boss.slug)!} className="text-aqua hover:underline">
                          Guide →
                        </Link>
                      ) : (
                        <span className="text-gray-600">—</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500">
            Quest names come from the verified quest layers — e.g. &ldquo;Fish Bucket → Bowhead Whale →
            Mutated Bowhead Whale → Finish&rdquo;. A creature you cannot reach is usually a gate you
            have not cleared: see the{' '}
            <Link href="/islands/" className="text-aqua hover:underline">island unlock order</Link> and{' '}
            <Link href="/troubleshooting/what-to-do-next/" className="text-aqua hover:underline">
              what to do next
            </Link>.
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white">Commonly Missed Creatures</h2>
        <div className="bg-ocean-900/80 border border-ocean-800 rounded-xl divide-y divide-ocean-800/60 text-sm text-gray-300">
          <div className="p-5">
            <h3 className="font-bold text-white">Special Perch</h3>
            <p>
              Repeatedly reported as the last missing entry in completion runs, with no verified
              acquisition method for the variant — the data layer flags it and this site won’t print a
              fake farm. The regular Perch is on island 2 with the Beginner Lure.
            </p>
          </div>
          <div className="p-5">
            <h3 className="font-bold text-white">Goby</h3>
            <p>
              Only added to the verified catalog in the September 2026 audit — it genuinely exists (island
              2, Beginner Lure) but is easy to overlook because older lists lacked it. The Drip Goby is
              the harder variant: no reliable catch report yet.
            </p>
          </div>
          <div className="p-5">
            <h3 className="font-bold text-white">Bowlfish vs Boxfish</h3>
            <p>
              The data layer carries a single-source caveat on Bowlfish (Mobalytics lists it; G2A lists
              only Boxfish). If your log shows exactly one of the two, that matches the unresolved
              species question — progress to island 3 and fish the Standard Lure tier.
            </p>
          </div>
          <div className="p-5">
            <h3 className="font-bold text-white">The whale naming trap</h3>
            <p>
              Bowhead Whale and Mutated Bowhead Whale are two entries: the Fish Bucket summons the
              regular one on island 5, and the whale itself is the final boss’s bait. Track both —{' '}
              <Link href="/bosses/bowhead-whale/" className="text-aqua hover:underline">
                Bowhead guide
              </Link>{' '}
              ·{' '}
              <Link href="/bosses/magma-whale/" className="text-aqua hover:underline">
                final boss guide
              </Link>.
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white">Fishipedia Not Updating?</h2>
        <div className="bg-ocean-900/80 border border-ocean-800 rounded-xl p-6 space-y-3 text-sm text-gray-300">
          <ul className="list-disc pl-5 space-y-2 text-xs">
            <li>
              <strong className="text-white">Update the game.</strong> Official patch 1.0.5 fixed the
              Fishipedia unlock (it previously required all drip creatures plus one extra). Nothing about
              the achievement changed in 1.0.10–1.0.12.
            </li>
            <li>
              <strong className="text-white">Check which counter you are grinding.</strong> Collector (“find
              and kill all the creatures”, {collectorAchievement.globalPercent}%) and Fishipedia (“find and
              kill all drip creatures”, {fishipediaAchievement.globalPercent}%) are separate achievements —
              a normal catch does not move the drip counter.
            </li>
            <li>
              <strong className="text-white">Drip entries use the normal lure.</strong> If you are grinding
              with a specialized “drip” loadout, stop — the same lure as the normal version is the only
              documented method.
            </li>
            <li>
              <strong className="text-white">If every slot looks filled and it still won’t pop,</strong>{' '}
              see the <Link href="/fish/drip-fish/" className="text-aqua hover:underline">Drip Fish
              guide</Link> and the{' '}
              <Link href="/achievements/" className="text-aqua hover:underline">achievements guide</Link>,
              which track the remaining reported unlock cases.
            </li>
          </ul>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white">Related Guides</h2>
        <div className="flex flex-wrap gap-3 text-xs text-gray-400 pt-1">
          <Link href="/fish/" className="hover:text-aqua underline underline-offset-2">Fish database</Link>
          <span>·</span>
          <Link href="/bosses/" className="hover:text-aqua underline underline-offset-2">Boss hub</Link>
          <span>·</span>
          <Link href="/lures/" className="hover:text-aqua underline underline-offset-2">Lures &amp; quest baits</Link>
          <span>·</span>
          <Link href="/fish/drip-fish/" className="hover:text-aqua underline underline-offset-2">Drip Fish deep-dive</Link>
          <span>·</span>
          <Link href="/creatures/rare-variants/" className="hover:text-aqua underline underline-offset-2">Rare variants</Link>
          <span>·</span>
          <Link href="/islands/" className="hover:text-aqua underline underline-offset-2">Island unlock order</Link>
          <span>·</span>
          <Link href="/achievements/" className="hover:text-aqua underline underline-offset-2">Achievements</Link>
          <span>·</span>
          <Link href="/troubleshooting/" className="hover:text-aqua underline underline-offset-2">Troubleshooting</Link>
        </div>
        <Sources
          items={sources.map((s) => ({
            label: s.name,
            href: s.url,
            note: `retrieved ${s.retrievedAt ?? '—'}`,
          }))}
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold text-white">Fishipedia FAQ</h2>
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