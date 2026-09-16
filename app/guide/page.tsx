import Breadcrumb from '@/components/Breadcrumb';
import { ArticleJsonLd } from '@/components/JsonLd';
import Link from 'next/link';
import Sources from '@/components/Sources';

export const metadata = {
  title: 'Beginner Walkthrough & Early Game Guide',
  description: 'Step-by-step beginner guide for How to Fish. The clam loop, the Crab Rod and knife, Hot Dog bait, lure tiers, and the path to the Boat Keys.',
  alternates: { canonical: 'https://howtofish101.com/guide/' },
};

export default function GuidePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      <Breadcrumb items={[{ name: 'Beginner Guide', href: '/guide/' }]} />
      <ArticleJsonLd
        headline="How to Fish: Beginner Walkthrough & Survival Guide"
        description="From your first cast to the Boat Keys: the clam loop, rods and lures, boss basics, money tips, and the mistakes that get new players killed."
        url="https://howtofish101.com/guide/"
        datePublished="2026-08-26"
        dateModified="2026-09-16"
      />

      <div className="space-y-4">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          How to Fish: <span className="text-aqua">Beginner Walkthrough & Survival Guide</span>
        </h1>
        <p className="text-gray-300 text-sm leading-relaxed">
          After crashing your boat onto the starter archipelago, you have no keys, no rod, and an empty stomach. Follow this step-by-step checklist to survive, earn your first cash, and unlock the open sea.
        </p>
        <p className="text-xs text-gray-400">
          Learn better by watching? The{' '}
          <Link href="/videos/" className="text-aqua hover:underline">trailers &amp; gameplay videos page</Link>{' '}
          has the official trailers and a full-game community walkthrough.
        </p>
        <p className="text-xs text-gray-500">Last verified September 16, 2026 · Game version 1.0.12</p>
      </div>

      <div className="bg-ocean-900/80 border border-ocean-800 rounded-xl p-6 space-y-6 text-sm text-gray-300">
        <h2 className="text-xl font-bold text-white border-b border-ocean-800 pb-2">1. The Hunger &amp; Starter Clam Loop</h2>
        <p>
          Your character starts starving. Look down at the beach sand and press <kbd className="bg-ocean-950 px-2 py-0.5 rounded text-aqua font-mono border border-ocean-700">E</kbd> to pick up Clams.
          Eat raw clams to refill your hunger meter. Sell extras to the fisherman — IGN documents $1 per clam — for your first dollars.
        </p>

        <h2 className="text-xl font-bold text-white border-b border-ocean-800 pb-2">2. Purchasing the Crab Fishing Rod</h2>
        <p>
          Buy the <strong>Crab Fishing Rod</strong> from the fisherman once you have a few dollars (guide prices disagree slightly: G2A says $2, IGN says $3). It comes with the <strong>Free Lure</strong>, which catches the starter roster — Brown Crabs and Shrimp in the tidepools. A second rod, the plain <strong>Fishing Rod</strong>, unlocks the Free Lure&apos;s deeper roster later on (Mackerel, Gar, Pike, Goldfish on island 2).
        </p>

        <h2 className="text-xl font-bold text-white border-b border-ocean-800 pb-2">3. Subduing Catches with Knuckles &amp; Knife</h2>
        <p>
          Reeled-in creatures fight back. Unequip your rod and punch them with <strong>Brass Knuckles</strong>, and buy the <strong>Knife ($45)</strong> as soon as you can — IGN and G2A independently recommend it as the first real purchase, because aggressive catches punish bare fists.
        </p>

        <h2 className="text-xl font-bold text-white border-b border-ocean-800 pb-2">4. Upgrading Your Bait: Hot Dogs</h2>
        <ul className="list-disc pl-5 space-y-2 text-xs text-gray-300">
          <li><strong>Hot Dog bait</strong>: buyable and worth it — hooks <strong>Rock Crab and Lobster</strong> on the Crab Rod (a clear step up from Brown Crabs) and Piranha on the Fishing Rod.</li>
          <li><strong>Inspect items (key F)</strong>: check creature market values before selling — merchants do not hide prices, players just forget to look.</li>
          <li><strong>Drip creatures</strong>: never sell blue-glowing Drip catches to the shop; they feed the Casino prize machines for cosmetic skins instead.</li>
        </ul>

        <h2 className="text-xl font-bold text-white border-b border-ocean-800 pb-2">5. Lures Are the Real Progression</h2>
        <p>
          There is no weather or day/night system to track (players are still requesting one) — regular fish are determined by your <strong className="text-white">equipped lure</strong>. Each island step unlocks the next tier: Free Lure → Hot Dog → Beginner Lure (island 2) → Standard Lure $15 (island 3) → Professional Lure $50 (island 4) → Scientific Lure $500 (island 5). The full tier-by-tier roster lives in the{' '}
          <Link href="/lures/" className="text-aqua hover:underline">lures guide</Link> and the{' '}
          <Link href="/fish/" className="text-aqua hover:underline">fish database</Link>.
        </p>

        <h2 className="text-xl font-bold text-white border-b border-ocean-800 pb-2">6. Aggressive Water Wants the Knife</h2>
        <p>
          Some catches and creatures fight back hard — that is what the knife is for, and why the developers nerfed the Anglerfish in patch 1.0.10 (&ldquo;too annoying with a lot of health&rdquo;). An earlier version of this guide described nocturnal predators ramming your boat at night and a repelling &ldquo;Lantern Bait&rdquo;; no source documents either, and both claims were removed in our fact audit. If a catch boards you, punch or knife it; if you die, the{' '}
          <Link href="/guides/death/" className="text-aqua hover:underline">death guide</Link> covers what drops.
        </p>

        <h2 className="text-xl font-bold text-white border-b border-ocean-800 pb-2">7. Unlocking New Islands</h2>
        <p>
          The starter island is only the beginning. Beat the <Link href="/bosses/spider-crab/" className="text-aqua hover:underline">Spider Crab</Link>, trade its shell for the <strong>Boat Keys</strong>, and the archipelago opens island by island behind boss hand-ins — the full route is in the{' '}
          <Link href="/islands/" className="text-aqua hover:underline">island progression guide</Link>. Each island has its own biome, NPC quests, lure tier, and boss: the forest lake (piranha), the desert (Blue Shark, Grill, Pufferfish), the sky island (Tuna, Albatross), and the volcano (Goblin Shark and the final boss).
        </p>

        <h2 className="text-xl font-bold text-white border-b border-ocean-800 pb-2">Essential Beginner Mistakes to Avoid</h2>
        <ul className="list-disc pl-5 space-y-3 text-xs text-gray-300">
          <li>
            <strong>Selling Drip creatures to the shop</strong>: Drip catches are worth far more fed into the Casino prize machines as skins than their shop price. Never sell them to the regular merchant.
          </li>
          <li>
            <strong>Ignoring the hunger meter</strong>: your hunger depletes steadily, and at zero you burn health. Always carry clams or cooked creatures as emergency food — starving mid-boss-fight is a classic early wipe.
          </li>
          <li>
            <strong>Selling fish without checking value first</strong>: press <kbd className="bg-ocean-950 px-2 py-0.5 rounded text-aqua font-mono border border-ocean-700">F</kbd> to inspect before any sale, and make it a reflex.
          </li>
          <li>
            <strong>Skipping the knife purchase</strong>: the $45 knife is the single most important early buy after the rod. Without it, subduing aggressive catches costs health and food every time.
          </li>
          <li>
            <strong>Pre-selling trophies or odd drops</strong>: progression chains ask for boss hand-ins much later. The{' '}
            <Link href="/troubleshooting/items-disappeared/" className="text-aqua hover:underline">quest-item safety notes</Link> cover what never to sell.
          </li>
        </ul>
      </div>
      <div className="flex flex-wrap gap-3 text-xs text-gray-400">
        <Link href="/islands/" className="hover:text-aqua underline underline-offset-2">Island gates</Link>
        <span>·</span>
        <Link href="/money/" className="hover:text-aqua underline underline-offset-2">Money guide</Link>
        <span>·</span>
        <Link href="/lures/" className="hover:text-aqua underline underline-offset-2">Lures &amp; baits</Link>
        <span>·</span>
        <Link href="/guides/fishipedia/" className="hover:text-aqua underline underline-offset-2">Fishipedia checklist</Link>
        <span>·</span>
        <Link href="/troubleshooting/what-to-do-next/" className="hover:text-aqua underline underline-offset-2">Stuck? What to do next</Link>
      </div>

      <Sources
        items={[
          { label: 'IGN Wiki: How to Get the Boat Keys — How to Fish', href: 'https://www.ign.com/wikis/how-to-fish/How_to_Get_the_Boat_Keys', note: 'clam prices, rod and knife purchases, beer chain, shell-for-keys' },
          { label: 'G2A News: all fish, bosses, rods and bait by island', href: 'https://www.g2a.com/news/features/guide/how-to-fish-all-fish-bosses-rods-and-bait-by-island/', note: 'rod and lure tier structure' },
          { label: 'Official patch notes feed (app 4001890)', href: 'https://store.steampowered.com/feeds/news/app/4001890/', note: 'difficulty modes, anglerfish nerf, save-rule context' },
        ]}
      />
    </div>
  );
}
