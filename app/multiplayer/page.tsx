import Breadcrumb from '@/components/Breadcrumb';
import Link from 'next/link';

export const metadata = {
  title: '1-4 Player Co-op & Multiplayer Guide',
  description: 'How to host and play 1-4 player co-op in How to Fish. Crew roles, boat controls, and boss scaling mechanics.',
  alternates: { canonical: 'https://howtofish101.com/multiplayer/' },
};

export default function MultiplayerPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      <Breadcrumb items={[{ name: 'Co-op Guide', href: '/multiplayer/' }]} />
      <h1 className="text-3xl font-extrabold text-white">1-4 Player Co-op & Multiplayer Guide</h1>
      <div className="bg-ocean-900/80 border border-ocean-800 rounded-xl p-6 space-y-6 text-sm text-gray-300">
        <p>How to Fish shines in online co-op. Form a crew of up to 4 anglers to manage boat navigation, fish simultaneously, and defeat colossal bosses together.</p>

        <h2 className="text-xl font-bold text-white">Hosting & Joining Games</h2>
        <p>
          To host a co-op session, open the pause menu and select <strong>Host Game</strong>. You can invite friends directly through Steam friend invites, or generate a 6-digit lobby code that anyone can use to join via the <strong>Join Game</strong> menu. The host player world save is used for the session — guest progress (inventory, unlocks) is synced to their own save file, but world state changes (boss kills, NPC interactions) only persist on the host save. Sessions support 2–4 players with the host always present.
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
          <li><strong>The Captain</strong>: Steers the vessel, navigates currents, and maneuvers during boss attacks.</li>
          <li><strong>The Angler</strong>: Uses specialized lures to hook the boss and maintain tension.</li>
          <li><strong>The Fighter</strong>: Equips ranged weapons (Harpoon Gun, Rifle) to deal damage to bosses and dispatch aggressive fish that board the boat. The Fighter also manages subduing reeled-in catches with the Knife.</li>
          <li><strong>The Engineer</strong>: Monitors hull integrity, repairs damage mid-fight using the Repair Kit ($100 from dock shops), manages fuel levels, and operates the Sonar Radar to call out hazards. In boss fights, the Engineer patches hull breaches that would otherwise sink the boat.</li>
        </ul>
        <p>
          Roles are informal — any player can perform any action. But in boss fights especially, having dedicated roles prevents the chaos of everyone trying to steer or everyone fishing while the boat takes damage. Assign roles before engaging bosses.
        </p>

        <h2 className="text-xl font-bold text-white">Boss HP Scaling Table</h2>
        <p>
          Boss health pools scale with the number of players present when the Rage Bait is cast. Players who join mid-fight do not change the scaling — it locks at the moment of summoning.
        </p>
        <div className="overflow-x-auto mt-4">
          <table className="w-full text-left text-xs">
            <thead className="bg-ocean-950 text-gray-400 border-b border-ocean-800">
              <tr><th className="p-3">Boss</th><th className="p-3">1P (Base)</th><th className="p-3">2P (1.5x)</th><th className="p-3">3P (2x)</th><th className="p-3">4P (2.5x)</th></tr>
            </thead>
            <tbody className="divide-y divide-ocean-800/50">
              <tr><td className="p-3 font-bold text-white">Spider Crab</td><td className="p-3">800</td><td className="p-3">1,200</td><td className="p-3">1,600</td><td className="p-3">2,000</td></tr>
              <tr><td className="p-3 font-bold text-white">Pufferfish</td><td className="p-3">1,500</td><td className="p-3">2,250</td><td className="p-3">3,000</td><td className="p-3">3,750</td></tr>
              <tr><td className="p-3 font-bold text-white">Magma Whale</td><td className="p-3">3,000</td><td className="p-3">4,500</td><td className="p-3">6,000</td><td className="p-3">7,500</td></tr>
<tr><td className="p-3 font-bold text-white">Giant Piranha</td><td className="p-3">1,200</td><td className="p-3">1,800</td><td className="p-3">2,400</td><td className="p-3">3,000</td></tr>
<tr><td className="p-3 font-bold text-white">Albatross</td><td className="p-3">2,200</td><td className="p-3">3,300</td><td className="p-3">4,400</td><td className="p-3">5,500</td></tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-xl font-bold text-white">Loot Sharing Rules</h2>
        <p>
          How to Fish uses a generous loot sharing system in co-op. Key quest items like Boat Key Parts are awarded to all players simultaneously — no fighting over drops. Gold rewards from boss kills and fish sales are split evenly among all crew members. However, rare cosmetic drops (weapon skins, boat skins, trophies) are rolled independently for each player, meaning everyone has their own chance at rare loot regardless of group size.
        </p>
        <p>
          Fish caught during co-op belong to whichever player reeled them in. There is no steal mechanic — if one Angler hooks a fish, only they can reel and sell it. This prevents griefing but also means passive players earn less income.
        </p>

        <h2 className="text-xl font-bold text-white">Common Co-op Strategies</h2>
        <ul className="list-disc pl-5 space-y-2 text-xs text-gray-300">
          <li><strong>Fish Farming Convoy</strong>: Two boats fishing side-by-side in a rich hotspot. One player uses Golden Minnow bait to attract legendary fish while others use standard bait. The legendary attraction aura benefits nearby boats within a 20-meter radius.</li>
          <li><strong>Boss Rush Duo</strong>: The most efficient boss-farming composition. One Captain-Fighter, one Angler-Engineer. The Captain baits boss attacks while the Angler maintains hook tension for stagger damage multipliers.</li>
          <li><strong>Full Crew Exploration</strong>: With 4 players, assign one as a dedicated Explorer who dives into underwater caves and secret locations while the rest fish from the boat. The Explorer can discover hidden merchants and treasure chests that surface players miss.</li>
          <li><strong>Split Island Farming</strong>: In a 3–4 player crew, split across different islands to farm simultaneously. Fish and items can be traded between players by dropping items on shared boats at docks.</li>
        </ul>

        <p className="text-xs text-gray-400 leading-relaxed border-l-2 border-aqua/40 pl-3">
          Connection-side trouble — invites that never load, black screens on join, session privacy, or the
          1.0.9 relay readout showing red — lives in our 
          <Link href="/troubleshooting/join-friends/" className="text-aqua hover:underline">cannot-join-friends fix list</Link>.
        </p>
      </div>
    </div>
  );
}
