import Breadcrumb from '@/components/Breadcrumb';
import Link from 'next/link';
import { FaqJsonLd } from '@/components/JsonLd';

export const metadata = {
  title: 'Co-op & Multiplayer Guide (Up to 8 Players)',
  description: 'How to host and play online co-op in How to Fish — lobbies hold up to 8 players since Patch 1.0.4. Crew roles, boss scaling, the shared crew wallet, and what carries over between saves.',
  alternates: { canonical: 'https://howtofish101.com/multiplayer/' },
};

const faqs = [
  {
    q: 'Can you split money in co-op?',
    a: 'No. How to Fish pools all gold into one shared crew wallet — fish sales, boss rewards, and purchases all draw on the same balance, and there is no separate-money option in the lobby or settings. Players have been asking for separate wallets since August ("day 2 of asking for seperate money accounts"), mostly because in big lobbies one crewmate can spend the shared funds before the group agrees on what to buy. Until the developers add an option, the fix is social: agree purchase rules before you set sail — who buys boat upgrades, and what needs a group vote. Note that caught fish still belong to whoever reeled them in, so individual contributions differ even though the wallet does not.',
  },
  {
    q: 'If I join a friend\'s game, does my progression carry over?',
    a: 'Mostly no. A player-tested answer on the Steam forums (September 2026) puts it plainly: "items and money dont carry over to other saves — skins do carry over to other saves." So don\'t expect to bring your equipped weapons and gear into a friend\'s world, but cosmetic skins you have unlocked stay with you. The host\'s world save governs the session either way — world-state changes like boss kills persist only on the host\'s save.',
  },
];

export default function MultiplayerPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      <FaqJsonLd faqs={faqs} />
      <Breadcrumb items={[{ name: 'Co-op Guide', href: '/multiplayer/' }]} />
      <h1 className="text-3xl font-extrabold text-white">Co-op &amp; Multiplayer Guide (Up to 8 Players)</h1>
      <div className="bg-ocean-900/80 border border-ocean-800 rounded-xl p-6 space-y-6 text-sm text-gray-300">
        <p>How to Fish shines in online co-op. Form a crew of up to 8 anglers (the lobby cap was raised from 4 to 8 in Patch 1.0.4) to manage boat navigation, fish simultaneously, and defeat colossal bosses together.</p>

        <h2 className="text-xl font-bold text-white">Hosting &amp; Joining Games</h2>
        <p>
          To host a co-op session, open the pause menu and select <strong>Host Game</strong>. You can invite friends directly through Steam friend invites, or generate a 6-digit lobby code that anyone can use to join via the <strong>Join Game</strong> menu. The host player world save is used for the session — guest progress (inventory, unlocks) is synced to their own save file, but world state changes (boss kills, NPC interactions) only persist on the host save. Sessions support 2–8 players with the host always present.
        </p>
        <p className="text-xs text-gray-400">
          Note: Patch 1.0.4 raised the lobby cap from 4 to{' '}
          <Link href="/updates/" className="text-aqua hover:underline">8 players</Link>
          , so big groups can now fish together. The strategies below are written for the classic 1–4 player crew,
          but the crew-role logic scales directly to bigger lobbies.
        </p>
        <p>
          Connection requires all players to be on the same game version. If someone cannot connect, verify that everyone has updated to the latest patch through Steam. Port forwarding is not required — the game uses Steam relay servers for matchmaking.
        </p>

        <h2 className="text-xl font-bold text-white">Crew Roles in Detail</h2>
        <ul className="list-disc pl-5 space-y-2 text-xs text-gray-300">
          <li><strong>The Captain</strong>: Steers the vessel and maneuvers during boss attacks.</li>
          <li><strong>The Angler</strong>: Uses the lure tiers to keep income flowing while others fight.</li>
          <li><strong>The Fighter</strong>: Handles ranged weapons to deal damage to bosses and dispatch aggressive fish that board the boat — the community's documented picks live in the weapons guide.</li>
        </ul>
        <p>
          Roles are informal — any player can perform any action. But in boss fights especially, having dedicated roles prevents the chaos of everyone trying to steer or everyone fishing while the boat takes damage. Assign roles before engaging bosses.
        </p>

        <h2 className="text-xl font-bold text-white">What We Do Not Print: Boss HP Scaling</h2>
        <p>
          Boss HP scaling numbers circulate online, but the developers have never published a scaling table,
          and no guide database documents one — an earlier version of this page carried a per-player
          multiplier table (1.5x/2x/2.5x) that was unsourced and has been removed. What is verifiable:
          fights are tuned for crews (the official difficulty modes from 1.0.9 change creature health and
          damage outright), and the{' '}
          <Link href="/difficulty/" className="text-aqua hover:underline">difficulty guide</Link> is the
          reliable lever when a fight stalls.
        </p>

        <h2 className="text-xl font-bold text-white">Loot &amp; Money Rules That Are Verified</h2>
        <p>
          Money is pooled: all gold lands in one shared crew wallet (see the FAQ below — there is no
          separate-wallet option). Items and money do not carry over to other saves, but skins do
          (community-tested, September 2026). The host&apos;s world save governs the session — world-state
          changes like boss kills persist only on the host&apos;s save.
        </p>

        <p className="text-xs text-gray-400 leading-relaxed border-l-2 border-aqua/40 pl-3">
          Playing completely alone instead? Our{' '}
          <Link href="/difficulty/" className="text-aqua hover:underline">difficulty guide</Link> has a straight
          answer on whether How to Fish is good solo — beatable, but every crew role falls on one player.
        </p>

        <p className="text-xs text-gray-400 leading-relaxed border-l-2 border-aqua/40 pl-3">
          Connection-side trouble — invites that never load, black screens on join, session privacy, or the
          1.0.9 relay readout showing red — lives in our
          <Link href="/troubleshooting/join-friends/" className="text-aqua hover:underline">cannot-join-friends fix list</Link>.
        </p>

        <h2 className="text-xl font-bold text-white">Co-op Money &amp; Progression FAQ</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-bold text-white text-sm">Can you split money in co-op?</h3>
            <p className="text-xs leading-relaxed mt-1">
              No — the wallet is shared. All gold lands in one crew balance and there is no separate-money
              option, a feature players have been requesting since August. Set purchase rules with your crew
              before big upgrades so one player isn&rsquo;t spending for everyone.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-white text-sm">If I join a friend&rsquo;s game, does my progression carry over?</h3>
            <p className="text-xs leading-relaxed mt-1">
              Items and money don&rsquo;t carry over to other saves; skins do (community-tested answer, September
              2026). Your gear stays tied to the save it was earned on, so don&rsquo;t expect to bring your endgame
              arsenal into a friend&rsquo;s world.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
