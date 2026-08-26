import Breadcrumb from '@/components/Breadcrumb';
import Sources from '@/components/Sources';
import Link from 'next/link';

export const metadata = {
  title: 'Cooking & Grill Recipes Guide',
  description:
    'Every How to Fish cooking station recipe: Hot Dog Feast, Squid Tentacle, Volcano Core, plus cooked fish healing food for boss fights.',
  alternates: { canonical: 'https://howtofish101.com/cooking/' },
};

export default function CookingPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      <Breadcrumb items={[{ name: 'Cooking & Grill', href: '/cooking/' }]} />
      <h1 className="text-3xl font-extrabold text-white">Cooking &amp; Grill Recipes Guide</h1>
      <div className="bg-ocean-900/80 border border-ocean-800 rounded-xl p-6 space-y-6 text-sm text-gray-300">
        <p>
          Cooking in How to Fish does two jobs: it turns caught fish into healing food for boss fights, and it
          combines basic baits into the advanced boss-summoning lures you cannot buy anywhere. Every station
          works the same way, so once you have cooked one recipe you have cooked them all.
        </p>

        <h2 className="text-xl font-bold text-white border-b border-ocean-800 pb-2">How Cooking Works</h2>
        <ul className="list-disc pl-5 space-y-2 text-xs text-gray-300">
          <li>Place 2–5 ingredients directly on the station grill.</li>
          <li>Press <kbd className="bg-ocean-950 px-2 py-0.5 rounded text-aqua font-mono border border-ocean-700">E</kbd> to cook.</li>
          <li>A valid combination produces the crafted item; a failed recipe produces <strong>Burnt Bait</strong> — worthless, but nothing is lost.</li>
          <li>Stations exist on the starter island dock, in the Coral Maze (after the Spider Crab), and at the Mount Inferno forge.</li>
        </ul>

        <h2 className="text-xl font-bold text-white border-b border-ocean-800 pb-2">All Known Recipes</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-ocean-950 text-gray-400 border-b border-ocean-800">
              <tr>
                <th className="p-3">Recipe</th>
                <th className="p-3">Ingredients</th>
                <th className="p-3">Station</th>
                <th className="p-3">Used For</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-ocean-800/50">
              <tr>
                <td className="p-3 font-bold text-white">Hot Dog Feast</td>
                <td className="p-3">5 Hot Dogs</td>
                <td className="p-3">Any cooking station</td>
                <td className="p-3">Rage bait that summons the <Link href="/bosses/pufferfish/" className="text-aqua hover:underline">Colossal Pufferfish</Link></td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-white">Squid Tentacle</td>
                <td className="p-3">1 Hot Dog + 2 Earthworms</td>
                <td className="p-3">Coral Maze station</td>
                <td className="p-3">Deep-water lure for Swordfish and Marlin</td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-white">Volcano Core</td>
                <td className="p-3">3 Obsidian Shards + 1 Magma Eel</td>
                <td className="p-3">Mount Inferno forge only</td>
                <td className="p-3">Summons the <Link href="/bosses/magma-whale/" className="text-aqua hover:underline">Magma Whale</Link> final boss</td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-white">Cooked Fish</td>
                <td className="p-3">Any raw fish</td>
                <td className="p-3">Any cooking station</td>
                <td className="p-3">Healing food — restores health mid-fight</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-gray-400">
          Full bait affinities and biome pairings live in the{' '}
          <Link href="/lures/" className="text-aqua hover:underline">lures &amp; baits guide</Link>; this page
          focuses on the station recipes themselves.
        </p>

        <h2 className="text-xl font-bold text-white border-b border-ocean-800 pb-2">Boss Fight Food: Why Cooked Fish Matters</h2>
        <p>
          Raw clams keep the hunger meter topped up, but <strong className="text-white">cooked fish is your
          in-combat healing</strong>. Boss fights run long — the Pufferfish takes 5–8 minutes even with a clean
          run — and chip damage adds up. Bring at least <strong className="text-white">10 cooked fish</strong> to
          any boss attempt; on <Link href="/difficulty/" className="text-aqua hover:underline">Hard mode</Link>{' '}
          (25% more creature damage) pack more, because the survival margin per mistake shrinks accordingly.
        </p>
        <p>
          Cook a batch before you leave the dock, not mid-fight: stations are safe zones, and bosses do not
          follow you onto the pier. If you run dry mid-attempt, retreat, cook, and re-engage — boss health does
          not reset.
        </p>

        <h2 className="text-xl font-bold text-white border-b border-ocean-800 pb-2">Recipe Sources &amp; Verification</h2>
        <p className="text-xs text-gray-400">
          Recipe combinations on this page are community-tested in-game and cross-checked against the bait guide
          and boss summon chains. Boss summon recipes (Hot Dog Feast, Volcano Core) are tied to the quest chains
          described in the{' '}
          <Link href="/bosses/" className="text-aqua hover:underline">boss guides</Link>. If a patch changes a
          recipe, we update this table — see the{' '}
          <Link href="/updates/" className="text-aqua hover:underline">patch notes history</Link> for the latest
          game version.
        </p>

        <Sources
          items={[
            {
              label: 'How to Fish on Steam',
              href: 'https://store.steampowered.com/app/4001890/How_to_Fish/',
              note: 'Game mechanics overview; recipes verified in-game by our editors',
            },
          ]}
        />
      </div>
    </div>
  );
}
