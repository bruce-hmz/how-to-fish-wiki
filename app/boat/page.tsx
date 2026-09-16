import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import { FaqJsonLd } from '@/components/JsonLd';
import Sources from '@/components/Sources';

export const metadata = {
  title: 'Boat Keys, Engine Upgrades & Missing-Boat Bug',
  description: 'How to get the Boat Keys in How to Fish (Spider Crab shell trade), what engine upgrades do, and what to do if your boat goes missing after an update.',
  alternates: { canonical: 'https://howtofish101.com/boat/' },
};

export default function BoatPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      <Breadcrumb items={[{ name: 'Boat Upgrades', href: '/boat/' }]} />
      <h1 className="text-3xl font-extrabold text-white">Boat Keys, Engine Upgrades &amp; the Missing-Boat Bug</h1>
      <p className="text-xs text-gray-500 -mt-4">Last verified September 16, 2026 · Game version 1.0.12</p>

      <div className="bg-ocean-900/80 border border-ocean-800 rounded-xl p-6 space-y-6 text-sm text-gray-300">
        <h2 className="text-xl font-bold text-white">How to Get the Boat Keys</h2>
        <p>
          The starter island&apos;s boat is locked behind one documented trade: defeat the{' '}
          <Link href="/bosses/spider-crab/" className="text-aqua hover:underline">Giant Spider Crab</Link>{' '}
          (summoned with the <Link href="/lures/" className="text-aqua hover:underline">Empty Beer Can</Link>),
          pick up the <strong className="text-white">Spider Crab Shell</strong> it drops, and hand the shell
          to the fisherman — he returns the <strong className="text-white">Boat Keys</strong>, and you can
          sail to the next island (per IGN&apos;s boat-keys walkthrough). Later islands open through boss
          hand-ins and progression items (the piranha skeleton, the pufferfish gate, the albatross chain) —
          the full route is mapped in the{' '}
          <Link href="/islands/" className="text-aqua hover:underline">island progression guide</Link>.
        </p>
        <p className="text-xs text-gray-500">
          Audit note: an earlier version of this page described a three-part &ldquo;Boat Key Part&rdquo;
          system dropping from three different bosses. Only the Spider Crab shell trade is documented — the
          rest of the gates are island unlocks, not key parts.
        </p>

        <h2 className="text-xl font-bold text-white">Engine Upgrades</h2>
        <p>
          Boat engines are real and upgradeable: the official{' '}
          <em>&ldquo;Getting an upgrade&rdquo;</em> achievement is &ldquo;Upgrade the engine on the
          boat&rdquo; (82.5% of players), and <em>&ldquo;I am speed&rdquo;</em> is &ldquo;Buy the best
          engine for the boat&rdquo; (51.4%). What is <strong>not</strong> documented anywhere reliable: the
          number of engine tiers, their prices, speed multipliers, or fuel mechanics. An earlier version of
          this page printed a full engine/hull/fuel pricing tree ($350 Outboard → $1,200 Diesel → $3,500
          Turbine, four hull tiers, $2 fuel) — none of it was sourced, and it was removed in our September
          2026 fact audit. When a guide database documents the real numbers, they will appear here with the
          source attached.
        </p>

        <h2 className="text-xl font-bold text-white">FAQ: Boat Missing After an Update?</h2>
        <p>
          If your boat vanished the moment you loaded in after a patch — you are not alone, and it is not something
          you did wrong. Players in one{' '}
          <a href="https://steamcommunity.com/app/4001890/discussions/0/581680664978545225/" className="text-aqua hover:underline" target="_blank" rel="noopener noreferrer">Steam thread</a>{' '}
          — still receiving new reports as of September 10, 2026 — have hit the same bug across multiple update
          cycles: it first appeared with the August 27 update batch and again after <strong>Patch 1.0.12</strong>
          (September 4, 2026), where a player on the volcano island loaded in with &ldquo;got the keys, but no boat
          for that,&rdquo; and on island 4, where a player&apos;s boat disappeared right after losing the tuna fight.
        </p>
        <p>
          What the reports have in common: the boat disappears right after loading in post-update, your progression
          unlocks (boat keys) are <strong>retained</strong> — the volcano reporter still had his keys — and there
          is <strong>no verified fix yet</strong>. Patch 1.0.12&apos;s notes do not mention the bug, so treat any
          &ldquo;guaranteed fix&rdquo; claims with suspicion.
        </p>
        <p>
          Things to try, in order (community workarounds, not editor-verified for this specific bug): quit to the main
          menu and reload your save first — a reply in the thread reports that after reloading, the boat
          &ldquo;should respawn&rdquo;; if you are on <strong>island 4</strong>, the boat is often not actually gone —
          a September 10 answer (from a player pointed there by another thread) reports it respawns{' '}
          <strong>hidden to the left of the dock stairs</strong>, away from the guns and the ammo shack, so sweep that
          spot before assuming the save is broken; if the boat is still missing, try the trick
          that fixes the related loading-screen bug — from the main menu choose <strong>Host Game → Session Type →
          Singleplayer</strong>, then load in. If none of that works, back up your save before further attempts (see the{' '}
          <Link href="/troubleshooting/save-file/" className="text-aqua hover:underline">save-file recovery guide</Link>),
          post in the Steam thread above so the devs can see the report count, and check{' '}
          <Link href="/updates/" className="text-aqua hover:underline">the patch history</Link> — a future fix will be
          listed there. General bug-handling rules live in our{' '}
          <Link href="/troubleshooting/" className="text-aqua hover:underline">troubleshooting hub</Link>.
        </p>

        <p className="text-xs text-gray-400 border-l-2 border-aqua/40 pl-3">Progression gates behind each boat step come from the <Link href="/bosses/" className="text-aqua hover:underline">boss hub</Link>; money for upgrades is covered in the <Link href="/money/" className="text-aqua hover:underline">money guide</Link>.</p>

        <Sources
          items={[
            {
              label: 'IGN Wiki: How to Get the Boat Keys — How to Fish',
              href: 'https://www.ign.com/wikis/how-to-fish/How_to_Get_the_Boat_Keys',
              note: 'the shell-for-keys trade',
            },
            {
              label: 'Steam Community global achievements (app 4001890)',
              href: 'https://steamcommunity.com/stats/4001890/achievements',
              note: 'official engine-upgrade achievements',
            },
            {
              label: 'Steam Discussion: "just loaded in after the update and my boat is missing"',
              href: 'https://steamcommunity.com/app/4001890/discussions/0/581680664978545225/',
              note: 'reports across the Aug 27 and Sep 4 updates plus fresh posts through September 10; source of the volcano-island "keys, but no boat" case, the island-4 tuna-fight-loss trigger, and the hidden-left-of-the-dock-stairs respawn answer',
            },
            {
              label: 'Official patch notes feed (app 4001890)',
              href: 'https://store.steampowered.com/feeds/news/app/4001890/',
              note: 're-verified September 16: Patch 1.0.12 (Sep 4) is still the newest update and does not mention the missing-boat bug',
            },
          ]}
        />
      </div>
      <FaqJsonLd faqs={[{
        q: 'Why is my boat missing after a How to Fish update?',
        a: 'It is a known recurring bug reported by several players after the August 27 update batch and again after Patch 1.0.12 (September 4, 2026) — including one player who loaded in with boat keys but no boat on the volcano island, and one whose boat vanished on island 4 right after losing the tuna fight. Your key unlocks are retained, and no verified fix exists yet. Quit to the main menu and reload your save first — a community reply reports the boat respawns after a reload; on island 4 the boat is often not gone at all but respawns hidden to the left of the dock stairs (away from the guns and ammo shack); if that fails, try Host Game → Session Type → Singleplayer from the main menu, then load in. Back up your save before further attempts and report the bug in the Steam forums.',
      }]} />
    </div>
  );
}
