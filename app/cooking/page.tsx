import Breadcrumb from '@/components/Breadcrumb';
import Sources from '@/components/Sources';
import Link from 'next/link';

export const metadata = {
  title: 'Cooking & Grill Guide: What Is Verified',
  description:
    'How the grill works in How to Fish: cooking creatures, the water-dip uncook fix from Patch 1.0.10, the drip parrotfish cook fix, and the community-reported cook-before-selling bonus — plus the bait recipes we removed as fabricated.',
  alternates: { canonical: 'https://howtofish101.com/cooking/' },
};

export default function CookingPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      <Breadcrumb items={[{ name: 'Cooking & Grill', href: '/cooking/' }]} />
      <h1 className="text-3xl font-extrabold text-white">Cooking &amp; Grill Guide</h1>
      <p className="text-xs text-gray-500 -mt-4">Last verified September 16, 2026 · Game version 1.0.12</p>

      <div className="bg-ocean-900/80 border border-ocean-800 rounded-xl p-6 space-y-6 text-sm text-gray-300">
        <p>
          Cooking in How to Fish does two jobs: it turns creatures into food (the game tracks hunger, and
          eating — including burnt and mini-boss catches — has its own achievements), and community guides
          consistently report a <strong className="text-white">cook-before-selling bonus</strong> on sale
          price. The grill itself is a real progression object: the{' '}
          <em>Grillmaster</em> achievement (&ldquo;Start the grill&rdquo;, 73.1% of players) unlocks when you
          bring the <Link href="/bosses/" className="text-aqua hover:underline">Blue Shark</Link> catch to
          the Grillmaster NPC on island 3.
        </p>

        <h2 className="text-xl font-bold text-white border-b border-ocean-800 pb-2">What Is Officially Verified</h2>
        <ul className="list-disc pl-5 space-y-2 text-xs text-gray-300">
          <li><strong className="text-white">Grills exist and cook creatures</strong> — official achievements reference eating burnt creatures (<em>Yummy in my tummy</em>) and mini-bosses (<em>Competitive eating</em>).</li>
          <li><strong className="text-white">Patch 1.0.10 — water uncooks weapons:</strong> &ldquo;Weapons and tools now get cleaned from cooking when dipped in water.&rdquo; Leave gear on or near a grill and it chars; dip it to fix (see the <Link href="/troubleshooting/cooked-weapons/" className="text-aqua hover:underline">cooked weapon rescue guide</Link>).</li>
          <li><strong className="text-white">Patch 1.0.11 — drip parrotfish cook fix:</strong> &ldquo;Fixed drip parrotfish not being cookable.&rdquo;</li>
          <li><strong className="text-white">Cooking affects sale price</strong> — editorial guides (Mobalytics, Sportskeeda) document the cook-before-selling consensus; Nerds Chalk puts the bonus at up to 1.5x. That 1.5x figure is single-source: treat it as directional, and compare prices in your own save before planning around it.</li>
        </ul>

        <h2 className="text-xl font-bold text-white border-b border-ocean-800 pb-2">Boss Fight Food</h2>
        <p>
          Eating creatures mid-fight is a real, community-documented lever — the post-1.0.12 Giant Piranha
          thread recommends literally eating the small piranha adds to keep food and health up. The{' '}
          <Link href="/bosses/giant-piranha/" className="text-aqua hover:underline">piranha guide</Link> has
          the full quote. Exact heal values per cooked creature are not documented anywhere reliable.
        </p>

        <h2 className="text-xl font-bold text-white border-b border-ocean-800 pb-2">Fabricated Recipes We Removed</h2>
        <p className="text-xs text-gray-400 leading-relaxed">
          An earlier version of this page listed crafting recipes — &ldquo;Hot Dog Feast = 5 Hot Dogs&rdquo;
          (claimed Pufferfish summon), &ldquo;Squid Tentacle = 1 Hot Dog + 2 Earthworms&rdquo;, and
          &ldquo;Volcano Core = 3 Obsidian Shards + 1 Magma Eel&rdquo; (claimed final-boss summon) — plus a
          Burnt Bait failure mechanic. None of these recipes appear in any guide database, patch note, or
          player thread we can source. The verified boss summons are quest items instead: the{' '}
          <Link href="/bosses/pufferfish/" className="text-aqua hover:underline">Carrot</Link> for the
          Pufferfish and the{' '}
          <Link href="/bosses/magma-whale/" className="text-aqua hover:underline">Bowhead Whale bait
          chain</Link> for the final boss. If a crafting system exists in-game, no public source documents
          it, and we will not print one.
        </p>

        <Sources
          items={[
            {
              label: 'Patch 1.0.10 official notes (Steam)',
              href: 'https://store.steampowered.com/news/app/4001890/view/698774255287927072',
              note: 'water-dip uncook for cooked weapons',
            },
            {
              label: 'Patch 1.0.11 official notes (Steam)',
              href: 'https://store.steampowered.com/news/app/4001890/view/698774255287927884',
              note: 'drip parrotfish cookability fix',
            },
            {
              label: 'Steam Community global achievements (app 4001890)',
              href: 'https://steamcommunity.com/stats/4001890/achievements',
              note: 'Grillmaster, Yummy in my tummy, Competitive eating — official cooking-adjacent achievements',
            },
            {
              label: 'Nerds Chalk: Killscore multipliers list',
              href: 'https://nerdschalk.com/how-killscore-multipliers-work-in-how-to-fish/',
              note: 'single-source 1.5x cook bonus figure',
            },
          ]}
        />
      </div>
    </div>
  );
}
