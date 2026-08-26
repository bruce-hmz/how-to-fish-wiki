import Breadcrumb from '@/components/Breadcrumb';
import Sources from '@/components/Sources';
import Link from 'next/link';

export const metadata = {
  title: 'Launch Report: 1M Players in 2 Days',
  description:
    'How to Fish launched August 20, 2026 on Steam at $7.99. The full launch story: 1M players in 2 days, 268K concurrent anglers, and six patches in five days.',
  alternates: { canonical: 'https://howtofish101.com/game/launch/' },
};

export default function LaunchPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      <Breadcrumb items={[{ name: 'Launch Report', href: '/game/launch/' }]} />
      <h1 className="text-3xl font-extrabold text-white">How to Fish Launch Report</h1>
      <div className="bg-ocean-900/80 border border-ocean-800 rounded-xl p-6 space-y-6 text-sm text-gray-300">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 bg-ocean-950 p-4 rounded-lg text-xs">
          <div><span className="text-gray-400">Release:</span> <strong className="text-white block">August 20, 2026</strong></div>
          <div><span className="text-gray-400">Developer:</span> <strong className="text-white block">Dazed Games</strong></div>
          <div><span className="text-gray-400">Platform:</span> <strong className="text-white block">Steam (PC)</strong></div>
          <div><span className="text-gray-400">Price:</span> <strong className="text-gold block">$7.99</strong></div>
        </div>

        <h2 className="text-xl font-bold text-white border-b border-ocean-800 pb-2">A Million Fishermen in Two Days</h2>
        <p>
          How to Fish launched on Steam on August 20, 2026 and passed{' '}
          <strong className="text-white">1 million players within 48 hours</strong> — a milestone Dazed Games
          announced on August 23. The game also peaked above{' '}
          <strong className="text-white">268,000 concurrent players</strong>, an extraordinary number for a
          budget-priced indie physics fishing game, and one of the biggest launches of its genre on Steam this
          year.
        </p>
        <p>
          The price point helped: at <strong className="text-white">$7.99</strong> — discounted to $4.95 during
          the launch window — it is an easy impulse buy for groups, and the 1-4 player co-op (raised to{' '}
          <Link href="/updates/" className="text-aqua hover:underline">8-player lobbies in Patch 1.0.4</Link>)
          turned it into a party game that streamers carried through word of mouth.
        </p>

        <h2 className="text-xl font-bold text-white border-b border-ocean-800 pb-2">The Game Behind the Numbers</h2>
        <p>
          How to Fish is a physics-based fishing simulator: you crash onto a mysterious archipelago, learn to
          fish to survive, and battle colossal marine bosses — a giant Spider Crab, a spiked Pufferfish, a Giant
          Piranha, a terrorizing Albatross, and the final Volcanic Magma Whale — collecting three boat key parts
          to escape. The 1-4 player co-op and meme-friendly physics moments (boat flips, trick shots, seagull
          dynamite) made it clip perfectly for social feeds. Start with our{' '}
          <Link href="/guide/" className="text-aqua hover:underline">beginner walkthrough</Link> or watch the{' '}
          <Link href="/videos/" className="text-aqua hover:underline">official trailers</Link>.
        </p>

        <h2 className="text-xl font-bold text-white border-b border-ocean-800 pb-2">Two Developers, Six Patches in Five Days</h2>
        <p>
          Dazed Games is a tiny studio — the patch notes are personally signed by Carl-Vilhelm and Melvin, the
          two developers. They responded to launch traffic with one of the fastest patch cadences on Steam: six
          updates in the first five days, from Patch 1.0.4 on August 21 through Patch 1.0.9 on August 24. The
          fixes addressed save-file corruption, join-screen blackouts, controller glyphs, boss balance, and
          added <Link href="/difficulty/" className="text-aqua hover:underline">difficulty modes</Link> within
          the first week — see the full{' '}
          <Link href="/updates/" className="text-aqua hover:underline">patch notes history</Link>.
        </p>

        <h2 className="text-xl font-bold text-white border-b border-ocean-800 pb-2">What Comes Next</h2>
        <p>
          In the 1-million-players announcement, Dazed Games confirmed two things: more content is coming, and
          bug fixing continues. No dated roadmap has been published yet — when new patches land, we track them
          in the <Link href="/updates/" className="text-aqua hover:underline">update history</Link>.
        </p>

        <Sources
          items={[
            {
              label: 'How to Fish on Steam',
              href: 'https://store.steampowered.com/app/4001890/How_to_Fish/',
              note: 'Release date, pricing, and game description',
            },
            {
              label: '1 MILLION FISHERMEN IN 2 DAYS — official announcement',
              href: 'https://steamcommunity.com/games/4001890/announcements/detail/711158520539514066',
              note: 'Player milestone and post-launch commitment',
            },
            {
              label: 'How to Fish — Steam community announcements',
              href: 'https://steamcommunity.com/app/4001890',
              note: 'Patch cadence 1.0.4–1.0.9 and developer signatures',
            },
          ]}
        />
      </div>
    </div>
  );
}
