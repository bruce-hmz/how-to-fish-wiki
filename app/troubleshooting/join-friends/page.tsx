import Breadcrumb from '@/components/Breadcrumb';
import Link from 'next/link';

export const metadata = {
  title: 'Cannot Join Friends: Lobby & Black Screen Fixes',
  description: 'How to Fish co-op fixes: join black screens, version mismatch, private lobbies, and player limits. What Patches 1.0.4 and 1.0.5 changed about sessions.',
  alternates: { canonical: 'https://howtofish101.com/troubleshooting/join-friends/' },
  openGraph: {
    title: 'How to Fish: Cannot Join Friends — Lobby & Black Screen Fixes',
    description: 'How to Fish co-op fixes: join black screens, version mismatch, private lobbies, and player limits. What Patches 1.0.4 and 1.0.5 changed about sessions.',
    url: 'https://howtofish101.com/troubleshooting/join-friends/',
  },
};

export default function JoinFriendsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8 text-sm text-gray-300">
      <Breadcrumb items={[{ name: 'Troubleshooting', href: '/troubleshooting/' }, { name: 'Cannot Join Friends', href: '/troubleshooting/join-friends/' }]} />
      <h1 className="text-3xl font-extrabold text-white">Cannot Join Friends: Lobby &amp; Black Screen Fixes</h1>

      <div className="bg-ocean-900/80 border border-ocean-800 rounded-xl p-6 space-y-6">
        <h2 className="text-xl font-bold text-white">What the Patches Changed</h2>
        <ul className="list-disc pl-5 space-y-2 text-xs">
          <li><strong>Patch 1.0.4</strong>: lobbies expanded up to 8 players and an attempted fix for the lobby black screen.</li>
          <li><strong>Patch 1.0.5</strong>: added private lobby controls and session-type options (public friends-only, etc.).</li>
          <li><strong>Design note</strong>: the Steam page still markets the co-op campaign as 1-4 anglers — the 8-player cap applies to lobby size, not balanced party content.</li>
        </ul>

        <h2 className="text-xl font-bold text-white">The Join Checklist (Do This in Order)</h2>
        <ol className="list-decimal pl-5 space-y-2 text-xs">
          <li><strong>Fully close and relaunch</strong> the game on every machine — not just the joining player.</li>
          <li><strong>Confirm identical versions</strong>: host and guest must be on the same patch number shown on the title screen.</li>
          <li><strong>Host creates the lobby first</strong> with the intended session type and privacy, then sends a fresh invite.</li>
          <li><strong>Join from the invite itself</strong>, not from a stale lobby code saved earlier in the session.</li>
        </ol>

        <h2 className="text-xl font-bold text-white">Black or Gray Screen on Join</h2>
        <p>
          The classic failure: you accept an invite, the screen dims, and nothing loads. The session is stuck
          in a half-joined state. <strong>Leave the failed session and have the host recreate the lobby</strong> —
          spamming rejoin on a dead session wedges it further. If it recurs, swap who hosts; NAT
          configurations differ and one player is often a better host than the other. A restart of the
          Steam client itself fixes the remaining cases.
        </p>

        <h2 className="text-xl font-bold text-white">Player Count &amp; Session Types</h2>
        <p className="text-xs leading-relaxed">
          Since Patch 1.0.4 a lobby holds up to 8 players; boss HP scaling tops out at the classic 4-angler
          tier (2.5x). If you cannot see a friend's lobby at all, check the privacy setting added in 1.0.5 —
          private lobbies are invite-only and invisible to quick-join. Our
          <Link href="/multiplayer/" className="text-aqua hover:underline"> co-op guide</Link> covers roles,
          scaling, and loot sharing in detail.
        </p>

        <h2 className="text-xl font-bold text-white">Still Failing?</h2>
        <p className="text-xs leading-relaxed">
          Version mismatch after a fresh patch is the top cause — Steam sometimes defers client updates while
          the host already patched. Restart Steam completely, verify game files, and compare the build number
          on both title screens before blaming your connection. Gear lost during a disconnect crash? Follow
          the <Link href="/troubleshooting/items-disappeared/" className="text-aqua hover:underline">items disappeared recovery order</Link> before saving again.
        </p>
      </div>
    </div>
  );
}
