import Breadcrumb from '@/components/Breadcrumb';
import Sources from '@/components/Sources';
import Link from 'next/link';

export const metadata = {
  title: 'Island Unlock Order & Progression Guide',
  description:
    'Every How to Fish island unlock in order: Spider Crab key, Piranha skeleton hand-in, Pufferfish gate, Albatross compass, and the final Deep Trench.',
  alternates: { canonical: 'https://howtofish101.com/islands/' },
};

const unlockChain = [
  {
    stage: '1',
    zone: 'Starter Island (Lighthouse)',
    unlockedBy: 'Game start — Beer Can quest chain',
    gate: 'Defeat the Spider Crab in the tidepool for Boat Key #1; hand in the trophy to open Island 2 coordinates',
  },
  {
    stage: '2',
    zone: 'Island 2 (Lake)',
    unlockedBy: 'Spider Crab trophy hand-in',
    gate: 'Finish the 3-Leech quest, defeat the Giant Piranha, hand the Skeleton to the lake lady for Island 3 coordinates',
  },
  {
    stage: '3',
    zone: 'Coral Maze Lagoon',
    unlockedBy: 'Island 3 coordinates',
    gate: 'Defeat the Colossal Pufferfish for Boat Key #2; hand in the Tail by the tree NPC, then sail to Casino Island',
  },
  {
    stage: '4',
    zone: 'Island 4 (Skies)',
    unlockedBy: 'Pufferfish Tail hand-in',
    gate: 'Catch a Tuna, bait the Albatross, hand in the Albatross Head for the Sky Compass',
  },
  {
    stage: '5',
    zone: 'Mount Inferno & Deep Trench',
    unlockedBy: 'Sky Compass',
    gate: 'Defeat the Magma Whale for Boat Key #3 — Turbine Engine and the open-ocean endgame unlock',
  },
];

export default function IslandsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      <Breadcrumb items={[{ name: 'Island Unlock Guide', href: '/islands/' }]} />
      <h1 className="text-3xl font-extrabold text-white">Island Unlock Order &amp; Progression Guide</h1>
      <div className="bg-ocean-900/80 border border-ocean-800 rounded-xl p-6 space-y-6 text-sm text-gray-300">
        <p>
          How to Fish does not hand you the archipelago. Each island sits behind a boss kill plus a
          hand-in, and skipping a step simply means the next marker never appears. This page maps the
          full five-stage unlock chain in order, so you can see exactly which gate you are standing at
          and what clears it.
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
          Boss HP values and bait chains for every gate live in the{' '}
          <Link href="/bosses/" className="text-aqua hover:underline">boss guides</Link>; boat key
          rewards and engine tiers are detailed in the{' '}
          <Link href="/boat/" className="text-aqua hover:underline">boat upgrades guide</Link>.
        </p>

        <h2 className="text-xl font-bold text-white border-b border-ocean-800 pb-2">Stage by Stage</h2>
        <div className="space-y-4">
          <div className="bg-ocean-950 p-4 rounded-lg border border-ocean-800">
            <h3 className="text-white font-bold text-sm mb-2">Stage 1 — Starter Island: the Beer Can chain</h3>
            <p className="text-xs text-gray-400">
              Buy beer, trade for the Empty Beer Can, and summon the{' '}
              <Link href="/bosses/spider-crab/" className="text-aqua hover:underline">Spider Crab</Link> in
              the lighthouse tidepool. The kill drops <strong className="text-white">Boat Key #1</strong> —
              hand the trophy in and the dock mechanic gets your engine turning. Without the hand-in the
              Island 2 marker stays off your map.
            </p>
          </div>
          <div className="bg-ocean-950 p-4 rounded-lg border border-ocean-800">
            <h3 className="text-white font-bold text-sm mb-2">Stage 2 — Island 2: leeches and the Piranha</h3>
            <p className="text-xs text-gray-400">
              The lake lady wants three leeches — ground pickups in the tall grass inland (see the <Link href="/guides/leeches/" className="text-aqua hover:underline">leech guide</Link>). The hand-in forges the
              Modified Leech bait that summons the{' '}
              <Link href="/bosses/giant-piranha/" className="text-aqua hover:underline">Giant Piranha</Link>.
              Keep the Skeleton — walking it back to the lake lady is the only way to receive the Island 3
              coordinates.
            </p>
          </div>
          <div className="bg-ocean-950 p-4 rounded-lg border border-ocean-800">
            <h3 className="text-white font-bold text-sm mb-2">Stage 3 — Coral Maze: the Pufferfish gate</h3>
            <p className="text-xs text-gray-400">
              Cook the Hot Dog Feast (5 Hot Dogs at any station — see the{' '}
              <Link href="/cooking/" className="text-aqua hover:underline">cooking guide</Link>) to summon
              the <Link href="/bosses/pufferfish/" className="text-aqua hover:underline">Colossal Pufferfish</Link>.
              The kill drops <strong className="text-white">Boat Key #2</strong>; hand the Tail to the tree
              NPC and the route to Casino Island opens.
            </p>
          </div>
          <div className="bg-ocean-950 p-4 rounded-lg border border-ocean-800">
            <h3 className="text-white font-bold text-sm mb-2">Stage 4 — Island 4 skies: the Albatross</h3>
            <p className="text-xs text-gray-400">
              A two-stage encounter: land a Tuna on the Professional Boss Lure, drop the fresh carcass in
              open ground, and the <Link href="/bosses/albatross/" className="text-aqua hover:underline">Albatross</Link>{' '}
              dives in. The Head is a quest item, not a trophy — the hand-in rewards the{' '}
              <strong className="text-white">Sky Compass</strong> that marks the route onward.
            </p>
          </div>
          <div className="bg-ocean-950 p-4 rounded-lg border border-ocean-800">
            <h3 className="text-white font-bold text-sm mb-2">Stage 5 — Deep Trench: the Magma Whale</h3>
            <p className="text-xs text-gray-400">
              Forge the Volcano Core at Mount Inferno (3 Obsidian Shards + 1 Magma Eel) to summon the{' '}
              <Link href="/bosses/magma-whale/" className="text-aqua hover:underline">Magma Whale</Link> in
              the Deep Volcanic Trench. The final kill drops <strong className="text-white">Boat Key #3</strong>,
              installs the Turbine Engine, and opens the open-ocean endgame.
            </p>
          </div>
        </div>

        <h2 className="text-xl font-bold text-white border-b border-ocean-800 pb-2">The Gates Are By Design</h2>
        <p>
          Two official patch notes confirm the island gates are intentional, not bugs. Patch{' '}
          <strong className="text-white">1.0.5</strong> fixed an issue where players could{' '}
          <em>travel to islands they had not yet unlocked</em> — closing a shortcut the developers never
          meant to exist. Patch <strong className="text-white">1.0.4</strong> separately fixed unclear
          pathing to the final island. If an island will not open for you, assume a missed hand-in first;
          the gates themselves are working as intended.
        </p>

        <h2 className="text-xl font-bold text-white border-b border-ocean-800 pb-2">Stuck at a Gate?</h2>
        <ul className="list-disc pl-5 space-y-2 text-xs text-gray-300">
          <li>Match your exact game state against the{' '}
            <Link href="/troubleshooting/what-to-do-next/" className="text-aqua hover:underline">progression troubleshooter</Link> —
            it covers every common block point by point.</li>
          <li>Missing marker after a kill? Reread the quest text and walk the drop back to the NPC — nine
            times out of ten the hand-in, not a grind, is the missing step.</li>
          <li>Cannot reach a zone at all? Check{' '}
            <Link href="/boat/" className="text-aqua hover:underline">boat keys and engines</Link> and the{' '}
            <Link href="/map/" className="text-aqua hover:underline">archipelago map</Link> for the hull
            and fuel requirements of volcanic waters.</li>
        </ul>

        <p className="text-xs text-gray-400">
          The unlock chain is community-tested in-game and cross-checked against each boss guide on this
          site. When a patch changes progression, this table is updated — see the{' '}
          <Link href="/updates/" className="text-aqua hover:underline">patch notes history</Link> for the
          latest game version.
        </p>

        <Sources
          items={[
            {
              label: 'How to Fish Patch 1.0.5 Notes (Steam)',
              href: 'https://steamcommunity.com/games/4001890/announcements/detail/711158520539513993',
              note: 'Fixed travel to not-yet-unlocked islands — confirms gates are by design',
            },
            {
              label: 'How to Fish Patch 1.0.4 Notes (Steam)',
              href: 'https://steamcommunity.com/games/4001890/announcements/detail/711158520539513916',
              note: 'Fixed unclear pathing to the final island',
            },
            {
              label: 'How to Fish on Steam',
              href: 'https://store.steampowered.com/app/4001890/How_to_Fish/',
              note: 'Game overview; unlock chain verified in-game by our editors',
            },
          ]}
        />
      </div>
    </div>
  );
}
