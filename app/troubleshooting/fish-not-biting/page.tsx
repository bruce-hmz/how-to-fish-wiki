import Breadcrumb from '@/components/Breadcrumb';
import Link from 'next/link';
import { FaqJsonLd, ArticleJsonLd } from '@/components/JsonLd';
import Sources from '@/components/Sources';

export const metadata = {
  title: 'Fish Not Biting? The Regular Rod Needs a Slow Reel',
  description: 'Fish ignore your hook in How to Fish? The usual cause is rod technique — the regular rod only catches while you reel in slowly, unlike the sit-and-wait crab rod. Plus bait-tier checks and the co-op lure reports.',
  alternates: { canonical: 'https://howtofish101.com/troubleshooting/fish-not-biting/' },
};

const faqs = [
  {
    q: 'Why aren\'t fish biting my line in How to Fish?',
    a: 'In most reported cases the bait is fine and the rod technique is the problem. The regular rod you buy early on only hooks a fish while you are slowly reeling in — holding the line still and waiting for a bite works on a different rod style, so players who bought the second-island rod often report "bait stopped working" when the cast technique is what changed. Cast, then hold the reel-in and let the line come back slowly.'
  },
  {
    q: 'How is the regular rod different from the crab rod?',
    a: 'Players who compared both describe the regular rod as catch-while-reeling: nothing happens until you take the line in slowly, and once a fish is on you click rapidly to land it. The sit-and-wait approach — drop the hook and let it rest until a bite — is what the crab-style rod supports. If you switch between rods, switch techniques with them.'
  },
  {
    q: 'Why did fish stop biting after I finished a quest on the second island?',
    a: 'Several threads describe fish "stopping" right after buying the gun on island 2 or handing in the leech quest — but the replies that resolved those threads point back to the same reel-in technique rather than a broken quest flag. If the slow reel does not fix it, change lures, restart the game, and report it with a clip; the developers have not published any patch note about bite logic so far.'
  },
  {
    q: 'Do old lures stop working on new islands?',
    a: 'Islands are built around better bait tiers, so a starter lure can genuinely lose its audience on later islands — community island guides make carrying the correct lure tier a standing recommendation. Before blaming the rod or a bug, check the lure list for your current island and swap to the local tier.'
  },
];

export default function FishNotBitingPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8 text-sm text-gray-300">
      <ArticleJsonLd
        headline="Fish Not Biting in How to Fish? Why It Happens and the Fixes That Work"
        description="The regular rod only hooks fish while you reel in slowly — the number-one cause behind “fish won't bite” reports. Bait-tier checks, co-op reports, and when it might actually be a bug."
        url="https://howtofish101.com/troubleshooting/fish-not-biting/"
        datePublished="2026-08-28"
        dateModified="2026-08-28"
      />
      <Breadcrumb items={[{ name: 'Troubleshooting', href: '/troubleshooting/' }, { name: 'Fish Not Biting', href: '/troubleshooting/fish-not-biting/' }]} />
      <h1 className="text-3xl font-extrabold text-white">Fish Not Biting in How to Fish? Here&rsquo;s the Fix</h1>
      <p className="text-xs text-gray-500 -mt-4">Last verified August 28, 2026 · Game version 1.0.10</p>

      <div className="bg-ocean-900/80 border border-ocean-800 rounded-xl p-6 space-y-3">
        <p>
          &ldquo;Bait doesn&rsquo;t work&rdquo; threads piled up within days of launch: players bought the new rod on the
          second island, went back to their favorite fishing spot, and got nothing — no nibbles, no catches, for minutes at
          a time. The pattern across the solved threads is consistent: <strong className="text-white">the bait was never
          broken. The technique was.</strong>
        </p>
        <p>
          The single most common cause, confirmed across multiple independent threads: the regular rod only catches a fish
          <strong className="text-white"> while you are reeling in</strong>. If you cast and let the hook sit, nothing will
          ever bite it.
        </p>
      </div>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white">Fix #1 — Reel In Slowly (Regular Rod)</h2>
        <p className="text-gray-300 leading-relaxed">
          One thread laid out the two rod styles side by side, and the distinction explains nearly every
          &ldquo;stopped biting&rdquo; report: a player who bought the regular fishing rod instead of the crab fishing rod
          was letting the hook sit and wait — which &ldquo;works differently.&rdquo; The regular rod needs movement:
        </p>
        <ol className="list-decimal pl-5 space-y-3 bg-ocean-900/80 border border-ocean-800 rounded-xl p-6 text-xs leading-relaxed">
          <li><strong className="text-white">Cast toward open water</strong> as you normally would.</li>
          <li><strong className="text-white">Hold the reel-in (left click)</strong> and take the line back <em>slowly</em> — this is when bites happen on the regular rod.</li>
          <li><strong className="text-white">Feel or see the bite</strong>, then <strong className="text-white">click rapidly</strong> to land the fish — the same thread&rsquo;s advice for the hook-up moment is to click &ldquo;furiously.&rdquo;</li>
          <li><strong className="text-white">No luck on one retrieve?</strong> Cast again. A static hook will not suddenly produce a bite on this rod.</li>
        </ol>
        <div className="bg-ocean-900/60 border border-ocean-800 rounded-xl p-5 text-xs space-y-2">
          <p className="font-bold text-white">Rod technique cheat sheet</p>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead className="text-gray-400 uppercase border-b border-ocean-800">
                <tr>
                  <th className="py-2 pr-3">Rod</th>
                  <th className="py-2 pr-3">Technique that catches</th>
                  <th className="py-2">What doesn&rsquo;t</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-ocean-800/60 align-top">
                <tr>
                  <td className="py-2 pr-3 font-bold text-white">Regular rod</td>
                  <td className="py-2 pr-3">Slow, continuous reel-in; rapid clicks once hooked</td>
                  <td className="py-2">Dropping the hook and waiting for a bite</td>
                </tr>
                <tr>
                  <td className="py-2 pr-3 font-bold text-white">Crab-style rod</td>
                  <td className="py-2 pr-3">Sit-and-wait: leave the hook in the water until the bite</td>
                  <td className="py-2">Assuming both rods behave the same</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white">Fix #2 — Check the Bait You Have Equipped</h2>
        <p className="text-gray-300 leading-relaxed">
          The second-most common reply on &ldquo;fish won&rsquo;t bite&rdquo; threads is a question:{' '}
          <em className="text-gray-200">&ldquo;Tried changing your bait?&rdquo;</em> It is worth ruling out before anything
          else — bait you equipped minutes ago can still be the wrong tier for where you are standing.
        </p>
        <ul className="list-disc pl-5 space-y-2 text-sm text-gray-300">
          <li>One thread is titled <em>&ldquo;only 1 bait works on 2nd island&rdquo;</em> — and the resolution turned out to be the reel technique above, not the bait. That is how easy these two problems are to confuse.</li>
          <li>Islands are built around better bait tiers: a starter lure can genuinely go quiet on later islands. Match the local tier using our{' '}
            <Link href="/lures/" className="text-aqua hover:underline">lures &amp; bait guide</Link>.
          </li>
          <li>In co-op, one player reported the <em>standard lure</em> specifically producing no bites in a friend&rsquo;s game while other bait worked — an isolated report, but if only one lure misbehaves, swapping it out is the fastest test.</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white">When It Might Actually Be a Bug</h2>
        <p className="text-gray-300 leading-relaxed">
          A handful of reports describe fish stopping right after a progression event — buying the gun on island 2, or
          handing in the leech quest — with a restart not helping. Those threads read like the technique problem above, but
          they were never conclusively resolved, so treat a real bite-logic bug as possible but unconfirmed:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-sm text-gray-300">
          <li>Run the slow-reel checklist first — every &ldquo;solved&rdquo; outcome in these threads ended there.</li>
          <li>Swap both lure and rod once each. If everything catches except one combination, it is bait or technique, not your save.</li>
          <li>Verify game files in Steam (Properties → Installed Files) to rule out an install fault — the same first step we recommend for{' '}
            <Link href="/troubleshooting/error-0x11c7/" className="text-aqua hover:underline">launch errors</Link>.
          </li>
          <li>Still stuck? Post on the Steam forums with a short clip, and keep following the{' '}
            <Link href="/troubleshooting/save-file/" className="text-aqua hover:underline">save backup routine</Link> meanwhile — no patch so far has touched bite logic, and a future fix would arrive as a note in the{' '}
            <Link href="/updates/" className="text-aqua hover:underline">patch history</Link>.
          </li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white">Fish Not Biting FAQ</h2>
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
          { label: 'Steam Discussion: “fish literally wont bite no matter what” (Aug 21, 2026)', href: 'https://steamcommunity.com/app/4001890/discussions/0/582805931178592456/', note: 'source of the regular-rod vs crab-rod reel distinction and the “slowly reel” replies' },
          { label: 'Steam Discussion: “only 1 bait works on 2nd island” (Aug 23, 2026)', href: 'https://steamcommunity.com/app/4001890/discussions/0/582806239606590115/', note: 'source of the hold-left-click slow reel and furious hook-up clicks' },
          { label: 'Steam Discussion: “BAIT DOESNT WORK ON SECOND ISLAND FIX IT” (Aug 23, 2026)', href: 'https://steamcommunity.com/app/4001890/discussions/0/582806239606642047/', note: 'companion “bait is broken” report resolved by the same technique' },
          { label: 'G2A News: How to Fish — All Fish, Bosses, Rods and Bait by Island', href: 'https://www.g2a.com/news/features/guide/how-to-fish-all-fish-bosses-rods-and-bait-by-island/', note: 'lure-tier-per-island recommendation' },
        ]}
      />
      <FaqJsonLd faqs={faqs} />
    </div>
  );
}
