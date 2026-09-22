import Breadcrumb from '@/components/Breadcrumb';
import Link from 'next/link';
import { ArticleJsonLd, FaqJsonLd } from '@/components/JsonLd';
import Sources from '@/components/Sources';

export const metadata = {
  title: 'Cannot Join Friends: Lobby Fixes',
  description: 'How to Fish co-op fixes in order: join black screens, version mismatch, invisible lobbies, and session types — plus what Patches 1.0.4 through 1.0.11 changed about connecting.' ,
  alternates: { canonical: 'https://howtofish101.com/troubleshooting/join-friends/' },
};

const faqs = [
  {
    q: 'Is the join black screen ever going away for good?'
      .replace("*", ""),
    a: 'Patch 1.0.4 shipped the first dedicated fix, and players reported far fewer occurrences afterward — launch-week threads describe being “literally forced to refund” over it, while later posts say updates cleared it. It is not fully extinct: half-joined dead sessions still happen after crashes, which is why the leave-and-recreate step below stays first.'
  },
  {
    q: 'How many players can actually play together?',
    a: 'A lobby holds up to 8 anglers since Patch 1.0.4. The official notes establish the lobby cap; they do not publish a separate boss-scaling rule for eight players, so treat combat balance as undocumented.'
  },
  {
    q: 'Does joining mid-boss-fight break anything?'
      .replace("@", ""),
    a: 'Joining during a boss encounter is not documented as a connection fix or a supported way to change boss scaling. Have the host finish the current encounter or return to the lobby before troubleshooting the join itself.'
  },
  {
    q: 'Version mismatch that will not go away — anything left to try?',
    a: 'One player in the Steam version-mismatch thread reports that reinstalling the Steam client itself cleared a stubborn "Disconnected: version mismatch" that survived restarts and file verification. That is a nuclear last resort — keep your steamapps folder or game installs may need re-downloading — and it is community-reported, not an official fix. Exhaust every step in the checklist above before reaching for it.'
  },
];

export default function JoinFriendsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8 text-sm text-gray-300">
      <Breadcrumb items={[{ name: 'Troubleshooting', href: '/troubleshooting/' }, { name: 'Cannot Join Friends', href: '/troubleshooting/join-friends/' }]} />
      <ArticleJsonLd
        headline="Cannot Join Friends in How to Fish: Lobby Fixes"
        description="Ordered co-op fixes for join black screens, version mismatch, and invisible lobbies — plus what Patches 1.0.4 through 1.0.11 changed."
        url="https://howtofish101.com/troubleshooting/join-friends/"
        datePublished="2026-08-27"
        dateModified="2026-09-22"
      />
      <h1 className="text-3xl font-extrabold text-white">Cannot Join Friends: Lobby &amp; Black Screen Fixes</h1>
      <p className="text-xs text-gray-500 -mt-4">Updated September 22, 2026 · Mechanics reviewed for game version 1.0.12</p>

      <div className="bg-coral/10 border border-coral/40 rounded-xl p-5 space-y-2">
        <p className="font-bold text-white text-sm">Start with the branch that matches what you see:</p>
        <ol className="list-decimal list-inside space-y-1 text-xs">
          <li><strong className="text-white">Version mismatch:</strong> compare the patch number on both title screens, finish Steam updates, then retry.</li>
          <li><strong className="text-white">Invite accepted but black screen:</strong> both players quit to desktop; the host creates a fresh lobby and sends a new invite.</li>
          <li><strong className="text-white">Host creation stays stuck:</strong> have a friend create the lobby and join that room instead; this is a community workaround, not a guaranteed fix.</li>
        </ol>
      </div>

      <div className="bg-ocean-900/80 border border-ocean-800 rounded-xl p-6 space-y-6">
        <h2 className="text-xl font-bold text-white">What Each Patch Changed About Connecting</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead className="bg-ocean-950/90 text-gray-400 uppercase border-b border-ocean-800">
              <tr><th className="px-3 py-2">Patch</th><th className="px-3 py-2">Session change</th><th className="px-3 py-2">What it means today</th></tr>
            </thead>
            <tbody className="divide-y divide-ocean-800/60 align-top">
              <tr>
                <td className="px-3 py-2 font-bold text-white">1.0.4</td>
                <td className="px-3 py-2">Lobby cap raised to 8; first dedicated attack on the join black screen; gray-screen-at-launch fix.</td>
                <td className="px-3 py-2">The notorious launch-week failure got its real fix early — but stale sessions still wedge.</td>
              </tr>
              <tr>
                <td className="px-3 py-2 font-bold text-white">1.0.5</td>
                <td className="px-3 py-2">Private lobbies and session-type switching arrived (game restart applies the new type).</td>
                <td className="px-3 py-2">An invisible lobby usually means invite-only privacy, not a broken connection.</td>
              </tr>
              <tr>
                <td className="px-3 py-2 font-bold text-white">1.0.9</td>
                <td className="px-3 py-2">Main menu gained a Steam connection / relay debug readout.</td>
                <td className="px-3 py-2">Use the readout as a diagnostic signal, then continue with the version, invite, and host checks below.</td>
              </tr>
              <tr>
                <td className="px-3 py-2 font-bold text-white">1.0.10</td>
                <td className="px-3 py-2">&ldquo;Increased time allowed to connect&rdquo;; removed chat rich text that griefers were exploiting.</td>
                <td className="px-3 py-2">The classic instant-kick-back-to-menu on join got a wider connection window — if you are still on an older build, updating alone may fix it.</td>
              </tr>
              <tr>
                <td className="px-3 py-2 font-bold text-white">1.0.11</td>
                <td className="px-3 py-2">&ldquo;Hopefully fixed inventory bug on join, making players invisible.&rdquo;</td>
                <td className="px-3 py-2">Joiners spawning without visible gear is a known bug with an official fix — both players should be on 1.0.11 or newer.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-xl font-bold text-white">Symptom Quick Table</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead className="bg-ocean-950/90 text-gray-400 uppercase border-b border-ocean-800">
              <tr><th className="px-3 py-2">What you see</th><th className="px-3 py-2">Likely cause</th><th className="px-3 py-2">Action</th></tr>
            </thead>
            <tbody className="divide-y divide-ocean-800/60 align-top">
              <tr>
                <td className="px-3 py-2">Invite accepted → screen dims forever</td>
                <td className="px-3 py-2">Dead half-joined session</td>
                <td className="px-3 py-2">Both players quit fully; host recreates the lobby and sends a fresh invite. If it repeats, try having the other player host.</td>
              </tr>
              <tr>
                <td className="px-3 py-2">Kicked back to main menu seconds after loading</td>
                <td className="px-3 py-2">Version mismatch or stale code</td>
                <td className="px-3 py-2">Compare build numbers on both title screens; let Steam finish pending updates; then retry once.</td>
              </tr>
              <tr>
                <td className="px-3 py-2">Friend’s lobby not visible anywhere</td>
                <td className="px-3 py-2">Privacy set to invite-only (added 1.0.5)</td>
                <td className="px-3 py-2">Host flips session type or sends a direct invite — invisible-to-search is by design now.</td>
              </tr>
              <tr>
                <td className="px-3 py-2">Joined the lobby, but your weapons/inventory are invisible</td>
                <td className="px-3 py-2">Join-invisibility bug (officially fixed in 1.0.11)</td>
                <td className="px-3 py-2">Update both clients to 1.0.11+, then rejoin once. If it recurs on current builds, treat it as a fresh bug report.</td>
              </tr>
              <tr>
                <td className="px-3 py-2">Random disconnects, gear state rolls back</td>
                <td className="px-3 py-2">Connection drop mid-save window</td>
                <td className="px-3 py-2">Treat gear like any loss event: <Link href="/troubleshooting/items-disappeared/" className="text-aqua hover:underline">triage before saving</Link>.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-xl font-bold text-white">The Full Checklist, Fastest First</h2>
        <ol className="list-decimal pl-5 space-y-2 text-xs leading-relaxed">
          <li>Check versions first: both title screens must show the same patch number. Finish queued Steam updates before retrying.</li>
          <li>For a dim or black join screen, quit the game on every machine, relaunch, and have the host create a fresh lobby.</li>
          <li>If host creation itself stays stuck, have another player host and send a new invite; this workaround has community reports but no official guarantee.</li>
          <li>Open the main-menu <strong>relay readout (new in 1.0.9)</strong>. Record whether it reports a connection problem; it does not identify a single cause by itself.</li>
          <li>Swap the host role once. This is a diagnostic retry; the game does not publish a NAT requirement or a guaranteed best host.</li>
          <li>Restart the whole Steam client on the affected machine, then retry once. The cause can be in the client, the session, or the current build.</li>
          <li>Verify game files (Properties → Installed Files) on whichever end joins-but-never-loads.</li>
          <li>Session type confusion after changing privacy? The change applies on a game restart — flip it, quit fully, relaunch.</li>
          <li>If the join succeeds but equipment or progress is missing, stop saving and follow the <Link href="/troubleshooting/items-disappeared/" className="text-aqua hover:underline">items-disappeared triage</Link>; use the <Link href="/troubleshooting/save-file/" className="text-aqua hover:underline">save recovery guide</Link> before restoring anything.</li>
        </ol>

        <h2 className="text-xl font-bold text-white">Session Types Since 1.0.5</h2>
        <p className="text-xs leading-relaxed">
          Public sessions accept browsers and strangers; friends-only opens invites to your list; invite-only hides the lobby from everything except direct invites. Anti-griefer behavior tightened in the same era — randoms can no longer wreck your save the way launch-week horror stories described, and invaders who do slip in get shown the door faster. For crew roles, loot sharing, and boss scaling math, the 
          <Link href="/multiplayer/" className="text-aqua hover:underline">co-op guide</Link> has the deep dive.
        </p>
      </div>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white">Co-op Connection FAQ</h2>
        <div className="bg-ocean-900/80 border border-ocean-800 rounded-xl divide-y divide-ocean-800/60 text-sm text-gray-300">
          {faqs.map((f) => (
            <div key={f.q} className="p-5 space-y-2">
              <h3 className="font-bold text-white">{f.q}</h3>
              <p>{f.a}</p>
            </div>
          ))}
        </div>
      </section>

      <Sources
        items={[
          { label: 'Official patch notes feed (app 4001890)', href: 'https://store.steampowered.com/feeds/news/app/4001890/', note: 'basis of the 1.0.4 / 1.0.5 / 1.0.9 / 1.0.10 / 1.0.11 session changes above' },
          { label: 'Steam Discussion: “Black screen when joining friends”', href: 'https://steamcommunity.com/app/4001890/discussions/0/582805931178508963/', note: 'launch-week severity and the community workaround order' },
          { label: 'Steam Discussion: “Version Mismatch”', href: 'https://steamcommunity.com/app/4001890/discussions/0/582805931178540460/', note: 'source of the community reinstall-Steam last resort' },
          { label: 'PATCH 1.0.5 announcement', href: 'https://store.steampowered.com/news/app/4001890/view/711158520539513992', note: 'private lobbies and session-type switching details' },
        ]}
      />
      <FaqJsonLd faqs={faqs} />
    </div>
  );
}
