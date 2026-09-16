import Breadcrumb from '@/components/Breadcrumb';
import Sources from '@/components/Sources';
import Link from 'next/link';

export const metadata = {
  title: 'Island Unlock Order & Progression Guide',
  description:
    'Every How to Fish island unlock in order: the Spider Crab shell trade for the Boat Keys, the Piranha skeleton hand-in, the Pufferfish gate, the Albatross chain, and the volcano island finale.',
  alternates: { canonical: 'https://howtofish101.com/islands/' },
};

const unlockChain = [
  {
    stage: '1',
    zone: 'Island 1 — Lighthouse (starter)',
    unlockedBy: 'Game start',
    gate: 'Beer → Empty Beer Can → defeat the Spider Crab → trade the shell to the fisherman for the Boat Keys',
  },
  {
    stage: '2',
    zone: 'Island 2 — Forest (lake)',
    unlockedBy: 'Boat Keys',
    gate: 'Finish the 3-Leech quest, defeat the Giant Piranha, hand the Skeleton back for the Island 3 unlock',
  },
  {
    stage: '3',
    zone: 'Island 3 — Desert',
    unlockedBy: 'Piranha skeleton hand-in',
    gate: 'Summon the Pufferfish with the Carrot, defeat it, and hand in the bone-in tail piece (not meat chunks) to the seated NPC; the Blue Shark boss catch (Standard Boss Lure) unlocks the Grill via the Grillmaster',
  },
  {
    stage: '4',
    zone: 'Island 4 — Sky (the Rocks)',
    unlockedBy: 'Pufferfish gate',
    gate: 'Catch the Tuna on the Professional Boss Lure, use it as bait, and defeat the Albatross',
  },
  {
    stage: '5',
    zone: 'Island 5 — Volcano',
    unlockedBy: 'Albatross chain',
    gate: 'Fish Bucket → Bowhead Whale → Mutated Bowhead Whale (the final boss) finishes the game; the Goblin Shark is the parallel Scientific Boss Lure catch',
  },
];

export default function IslandsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      <Breadcrumb items={[{ name: 'Island Unlock Guide', href: '/islands/' }]} />
      <h1 className="text-3xl font-extrabold text-white">Island Unlock Order &amp; Progression Guide</h1>
      <p className="text-xs text-gray-500 -mt-4">Last verified September 16, 2026 · Game version 1.0.12</p>

      <div className="bg-ocean-900/80 border border-ocean-800 rounded-xl p-6 space-y-6 text-sm text-gray-300">
        <p>
          How to Fish does not hand you the archipelago. Each island sits behind a boss kill plus a
          hand-in, and skipping a step simply means the next marker never appears. This page maps the
          verified unlock chain in order, so you can see exactly which gate you are standing at and what
          clears it.
        </p>

        <h2 className="text-xl font-bold text-white border-b border-ocean-800 pb-2">The Five-Stage Unlock Chain</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-ocean-950 text-gray-400 border-b border-ocean-800">
              <tr>
                <th className="p-3">Stage</th>
                <th className="p-3">Island / Zone</th>
                <th className="p-3">Unlocked By</th>
                <th className="p-3">Gate to Clear</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-ocean-800/50">
              {unlockChain.map((row) => (
                <tr key={row.stage}>
                  <td className="p-3 font-bold text-aqua">{row.stage}</td>
                  <td className="p-3 font-bold text-white">{row.zone}</td>
                  <td className="p-3">{row.unlockedBy}</td>
                  <td className="p-3">{row.gate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-gray-400">
          Summon items and fight tactics for every gate live in the{' '}
          <Link href="/bosses/" className="text-aqua hover:underline">boss guides</Link>; which lure catches
          which fish on each island is the{' '}
          <Link href="/fish/" className="text-aqua hover:underline">fish database</Link>; the casino side
          island (island 6, roulette and prize machines) is covered in the{' '}
          <Link href="/casino/" className="text-aqua hover:underline">casino guide</Link>.
        </p>

        <h2 className="text-xl font-bold text-white border-b border-ocean-800 pb-2">Stage by Stage</h2>
        <div className="space-y-4">
          <div className="bg-ocean-950 p-4 rounded-lg border border-ocean-800">
            <h3 className="text-white font-bold text-sm mb-2">Stage 1 — Lighthouse: the beer chain</h3>
            <p className="text-xs text-gray-400">
              Buy beer, hand it over for the Empty Beer Can, and summon the{' '}
              <Link href="/bosses/spider-crab/" className="text-aqua hover:underline">Spider Crab</Link> at
              the lighthouse tidepool. Trade the dropped shell to the fisherman for the{' '}
              <strong className="text-white">Boat Keys</strong> — the whole starter gate in one trade (per
              IGN&apos;s walkthrough).
            </p>
          </div>
          <div className="bg-ocean-950 p-4 rounded-lg border border-ocean-800">
            <h3 className="text-white font-bold text-sm mb-2">Stage 2 — Forest island: leeches and the Piranha</h3>
            <p className="text-xs text-gray-400">
              The lake lady wants three leeches — ground pickups in the tall grass inland (see the <Link href="/guides/leeches/" className="text-aqua hover:underline">leech guide</Link>). The hand-in forges the
              Modified Leech bait that summons the{' '}
              <Link href="/bosses/giant-piranha/" className="text-aqua hover:underline">Giant Piranha</Link>.
              Walking the Skeleton back to the quest NPC is the only way to unlock Island 3.
            </p>
          </div>
          <div className="bg-ocean-950 p-4 rounded-lg border border-ocean-800">
            <h3 className="text-white font-bold text-sm mb-2">Stage 3 — Desert island: the Pufferfish gate</h3>
            <p className="text-xs text-gray-400">
              Use the <strong className="text-white">Carrot</strong> as quest bait to summon the{' '}
              <Link href="/bosses/pufferfish/" className="text-aqua hover:underline">Pufferfish</Link> —
              not a crafted bait; the old &ldquo;Hot Dog Feast&rdquo; claim was fabricated and removed. The
              island also hosts the Blue Shark boss catch and the Grill unlock.
            </p>
          </div>
          <div className="bg-ocean-950 p-4 rounded-lg border border-ocean-800">
            <h3 className="text-white font-bold text-sm mb-2">Stage 4 — Sky island: the Albatross</h3>
            <p className="text-xs text-gray-400">
              A two-stage encounter: land the{' '}
              <Link href="/bosses/albatross/" className="text-aqua hover:underline">Tuna on the Professional
              Boss Lure</Link>, then use the Tuna as bait so the Albatross dives in. Community tactics for
              the fight live in its guide.
            </p>
          </div>
          <div className="bg-ocean-950 p-4 rounded-lg border border-ocean-800">
            <h3 className="text-white font-bold text-sm mb-2">Stage 5 — Volcano island: the final chain</h3>
            <p className="text-xs text-gray-400">
              Fish Bucket summons the Bowhead Whale; the Bowhead Whale is the bait for the{' '}
              <Link href="/bosses/magma-whale/" className="text-aqua hover:underline">Mutated Bowhead
              Whale</Link> — the final boss that finishes the game. The Goblin Shark (Scientific Boss Lure)
              is the parallel boss catch here, and the Scientific Lure&apos;s $1,700 Superdwarf Fish is the
              best documented money catch.
            </p>
          </div>
        </div>

        <h2 className="text-xl font-bold text-white border-b border-ocean-800 pb-2">The Gates Are By Design</h2>
        <p>
          Two official patch notes confirm the island gates are intentional, not bugs. Patch{' '}
          <strong className="text-white">1.0.5</strong> fixed an issue where players could{' '}
          <em>travel to islands they had not yet unlocked</em> — closing a shortcut the developers never
          meant to exist. Patch <strong className="text-white">1.0.4</strong> separately made the intended
          path up to the final island easier to see. If an island will not open for you, assume a missed
          hand-in first; the gates themselves are working as intended.
        </p>

        <h2 className="text-xl font-bold text-white border-b border-ocean-800 pb-2">Stuck at a Gate?</h2>
        <ul className="list-disc pl-5 space-y-2 text-xs text-gray-300">
          <li>Match your exact game state against the{' '}
            <Link href="/troubleshooting/what-to-do-next/" className="text-aqua hover:underline">progression troubleshooter</Link> —
            it covers every common block point by point.</li>
          <li>Missing marker after a kill? Reread the quest text and walk the drop back to the NPC — nine
            times out of ten the hand-in, not a grind, is the missing step.</li>
          <li>Boat trouble? The{' '}
            <Link href="/boat/" className="text-aqua hover:underline">boat guide</Link> covers the keys and
            the missing-after-update bug.</li>
        </ul>

        <h2 className="text-xl font-bold text-white border-b border-ocean-800 pb-2">Will There Be More Islands?</h2>
        <p>
          Players who finish the five stages keep asking when a new island arrives. The developers addressed
          it directly in the patch 1.0.12 notes, calling it &ldquo;probably the last bugfix patch before
          starting to work on content updates&rdquo; and saying they had started talking about content
          updates, &ldquo;which we will start working on next week.&rdquo; No new island has been announced
          yet — the <Link href="/updates/" className="text-aqua hover:underline">patch notes history</Link>{' '}
          is where any announcement will land first.
        </p>

        <p className="text-xs text-gray-500">
          Audit note (September 2026): this page previously named stage 3 the &ldquo;Coral Maze
          Lagoon&rdquo; and stage 5 &ldquo;Mount Inferno / Deep Volcanic Trench&rdquo;, claimed a
          &ldquo;Boat Key Part #2/#3&rdquo; reward system, and repeated the Hot Dog Feast and Volcano Core
          summon recipes. None of that appears in any external source; the chain above is the verified
          version.
        </p>

        <Sources
          items={[
            {
              label: 'G2A News: all fish, bosses, rods and bait by island',
              href: 'https://www.g2a.com/news/features/guide/how-to-fish-all-fish-bosses-rods-and-bait-by-island/',
              note: 'island-by-island boss and lure structure (retrieved September 16, 2026)',
            },
            {
              label: 'Mobalytics: How to Fish — All 49 Fish, Creatures and Lures',
              href: 'https://mobalytics.gg/gamebase/guides/how-to-fish-all-fish-creatures-lures',
              note: 'independent corroboration of the island/lure/boss mapping',
            },
            {
              label: 'IGN Wiki: How to Get the Boat Keys — How to Fish',
              href: 'https://www.ign.com/wikis/how-to-fish/How_to_Get_the_Boat_Keys',
              note: 'the stage-1 shell-for-keys trade',
            },
            {
              label: 'How to Fish Patch 1.0.5 Notes (Steam)',
              href: 'https://steamcommunity.com/games/4001890/announcements/detail/711158520539513993',
              note: 'Fixed travel to not-yet-unlocked islands — confirms gates are by design',
            },
            {
              label: 'How to Fish Patch 1.0.4 Notes (Steam)',
              href: 'https://steamcommunity.com/games/4001890/announcements/detail/711158520539513916',
              note: 'made the intended path to the final island easier to see',
            },
          ]}
        />
      </div>
    </div>
  );
}
