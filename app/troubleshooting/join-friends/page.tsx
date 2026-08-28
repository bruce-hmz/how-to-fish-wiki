import Breadcrumb from '@/components/Breadcrumb';
import Link from 'next/link';
import { ArticleJsonLd, FaqJsonLd } from '@/components/JsonLd';
import Sources from '@/components/Sources';

export const metadata = {
  title: 'Cannot Join Friends: Lobby Fixes',
  description: 'How to Fish co-op fixes in order: join black screens, version mismatch, invisible lobbies, and session types — plus what Patches 1.0.4, 1.0.5 and 1.0.9 changed about connecting.' ,
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
    a: 'A lobby holds up to 8 anglers since Patch 1.0.4, but balance is tuned around the classic crew: boss HP tops out at the 4-player multiplier. Expecting eight people to get a fair fight is not what the cap was built for.'
  },
  {
    q: 'Does joining mid-boss-fight break anything?'
      .replace("@", ""),
    a: 'Boss health locks the moment the Rage Bait is cast based on who was present. Late arrivals do not inflate it — but they also do not shrink a fight that spawned understaffed, so a duo summoning before the third friend arrives will carry the 2x pool into the whole encounter.'
  },
];

export default function JoinFriendsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8 text-sm text-gray-300">
      <Breadcrumb items={[{ name: 'Troubleshooting', href: '/troubleshooting/' }, { name: 'Cannot Join Friends', href: '/troubleshooting/join-friends/' }]} />
      <ArticleJsonLd
        headline="Cannot Join Friends in How to Fish: Lobby Fixes"
        description="Ordered co-op fixes for join black screens, version mismatch, and invisible lobbies — plus what Patches 1.0.4, 1.0.5 and 1.0.9 changed."
        url="https://howtofish101.com/troubleshooting/join-friends/"
        datePublished="2026-08-27"
        dateModified="2026-08-27"
      />
      <h1 className="text-3xl font-extrabold text-white">Cannot Join Friends: Lobby &amp; Black Screen Fixes</h1>
      <p className="text-xs text-gray-500 -mt-4">Last verified August 27, 2026 · Game version 1.0.9</p>

      <div className="bg-coral/10 border border-coral/40 rounded-xl p-5 space-y-2">
        <p className="font-bold text-white text-sm">The three fixes that clear most cases:</p>
        <ol className="list-decimal list-inside space-y-1 text-xs">
          <li><strong className="text-white">Everyone quits to desktop and relaunches</strong> — the joiner <em>and</em> the host.</li>
          <li><strong className="text-white">Host recreates the lobby and sends a brand-new invite</strong> (dead half-joined sessions never revive).</li>
          <li><strong className="text-white">Still stuck? Swap hosts</strong> — NAT asymmetry makes one of you consistently the better server.</li>
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
                <td className="px-3 py-2">Before blaming your router, open the game: a red relay indicator pinpoints network trouble upstream of every setting below.</td>
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
                <td className="px-3 py-2">Quit out fully; host recreates lobby; use a fresh invite. Rejoining the corpse never works.</td>
              </tr>
              <tr>
                <td className="px-3 py-2">Kicked back to main menu seconds after loading</td>
                <td className="px-3 py-2">Version mismatch or stale code</td>
                <td className="px-3 py-2">Compare build numbers on both title screens; let Steam finish pending updates; reboot Steam itself.</td>
              </tr>
              <tr>
                <td className="px-3 py-2">Friend’s lobby not visible anywhere</td>
                <td className="px-3 py-2">Privacy set to invite-only (added 1.0.5)</td>
                <td className="px-3 py-2">Host flips session type or sends a direct invite — invisible-to-search is by design now.</td>
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
          <li>Quit to desktop on <strong>every machine</strong>, relaunch, retry once through a fresh invite.</li>
          <li>If that failed: host deletes the lobby entirely, creates anew, invites again. One retry, not five — hammering a wedged session deepens it.</li>
          <li>Check versions: identical patch number on both title screens. If the guest’s Steam shows a queued update, finish it before the next attempt.</li>
          <li>Open the main-menu <strong>relay readout (new in 1.0.9)</strong>. Red means the route to Steam networking is unhealthy — switch networks or reboot the router rather than reconfiguring the game.</li>
          <li>Swap the host role once. The better-uploaded player should serve; wired Ethernet beats Wi-Fi for the hosting side specifically.</li>
          <li>Restart the whole Steam client on the affected machine — remaining stuck cases live in client cache, not the game.</li>
          <li>Verify game files (Properties → Installed Files) on whichever end joins-but-never-loads.</li>
          <li>Session type confusion after changing privacy? The change applies on a game restart — flip it, quit fully, relaunch.</li>
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
          { label: 'Official patch notes feed (app 4001890)', href: 'https://store.steampowered.com/feeds/news/app/4001890/', note: 'basis of the 1.0.4 / 1.0.5 / 1.0.9 session changes above' },
          { label: 'Steam Discussion: “Black screen when joining friends”', href: 'https://steamcommunity.com/app/4001890/discussions/0/582805931178508963/', note: 'launch-week severity and the community workaround order' },
          { label: 'PATCH 1.0.5 announcement', href: 'https://store.steampowered.com/news/app/4001890/view/711158520539513992', note: 'private lobbies and session-type switching details' },
        ]}
      />
      <FaqJsonLd faqs={faqs} />
    </div>
  );
}