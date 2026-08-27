import Breadcrumb from '@/components/Breadcrumb';
import Link from 'next/link';
import Sources from '@/components/Sources';

export const metadata = {
  title: 'Beginner Walkthrough & Early Game Guide',
  description: 'Step-by-step beginner guide for How to Fish. Master casting, starter island survival, crab farming, and knife upgrades.',
  alternates: { canonical: 'https://howtofish101.com/guide/' },
};

export default function GuidePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      <Breadcrumb items={[{ name: 'Beginner Guide', href: '/guide/' }]} />
      
      <div className="space-y-4">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          How to Fish: <span className="text-aqua">Beginner Walkthrough & Survival Guide</span>
        </h1>
        <p className="text-gray-300 text-sm leading-relaxed">
          After crashing your boat onto the starter archipelago, you have no keys, no rod, and an empty stomach. Follow this step-by-step checklist to survive, make your first $500, and unlock the open sea.
        </p>
        <p className="text-xs text-gray-400">
          Learn better by watching? The{' '}
          <Link href="/videos/" className="text-aqua hover:underline">trailers &amp; gameplay videos page</Link>{' '}
          has the official trailers and a full-game community walkthrough.
        </p>
        <p className="text-xs text-gray-500">Last verified August 27, 2026 · Game version 1.0.9</p>
      </div>

      <div className="bg-ocean-900/80 border border-ocean-800 rounded-xl p-6 space-y-6 text-sm text-gray-300">
        <h2 className="text-xl font-bold text-white border-b border-ocean-800 pb-2">1. The Hunger & Starter Clam Loop</h2>
        <p>
          Your character starts starving. Look down at the beach sand and press <kbd className="bg-ocean-950 px-2 py-0.5 rounded text-aqua font-mono border border-ocean-700">E</kbd> to pick up Clams.
          Hold <kbd className="bg-ocean-950 px-2 py-0.5 rounded text-aqua font-mono border border-ocean-700">Left Mouse Button</kbd> to eat raw clams and refill your hunger meter. Sell extra clams to the merchant NPC to make your first dollar.
        </p>

        <h2 className="text-xl font-bold text-white border-b border-ocean-800 pb-2">2. Purchasing the Crab Fishing Rod</h2>
        <p>
          Once you have $2, visit the beach kiosk and buy the <strong>Crab Fishing Rod</strong>. Stand at the shoreline, hold Right Click to cast bait into the tidepools, and Left Click to reel when a crab bites.
        </p>

        <h2 className="text-xl font-bold text-white border-b border-ocean-800 pb-2">3. Subduing Catches with Knuckles & Knife</h2>
        <p>
          When you reel a creature in, press <kbd className="bg-ocean-950 px-2 py-0.5 rounded text-aqua font-mono border border-ocean-700">X</kbd> to unequip your rod and start punching it with Brass Knuckles. Buy the Knife as soon as possible ($45) to dispatch larger aggressive catches without taking damage.
        </p>

        <h2 className="text-xl font-bold text-white border-b border-ocean-800 pb-2">4. Early Game Cash Optimization</h2>
        <ul className="list-disc pl-5 space-y-2 text-xs text-gray-300">
          <li><strong>Hot Dogs ($5 bait)</strong>: Attracts Striped Bass and Snappers worth $18–$25 each.</li>
          <li><strong>Inspect Items (Key F)</strong>: Check creature market values before selling.</li>
          <li><strong>Drip Creatures</strong>: NEVER sell blue glowing Drip Crabs to the shop; save them for the Casino Gachapon machine.</li>
        </ul>

        <h2 className="text-xl font-bold text-white border-b border-ocean-800 pb-2">5. Upgrading to the Deep-Sea Rod</h2>
        <p>
          Once you have around $150 saved up, visit the Pier Merchant on the south dock of the starter island and purchase the <strong>Deep-Sea Rod</strong>. This is a significant upgrade over the starter Crab Fishing Rod — it doubles your casting range, lets you fish in deeper water beyond the shallows, and pushes you past the shore roster into deeper species — sell values step up accordingly, and every verified price is documented on the fish list.
        </p>
        <p>
          The Deep-Sea Rod also increases your line tension threshold, meaning you can reel in larger catches without your line snapping. Pair it with Hot Dog bait for best results — you will start hooking Red Snappers and Striped Bass consistently. The rod is essential before attempting your first boss fight, as the Spider Crab requires sustained reeling during its stagger window.
        </p>

        <h2 className="text-xl font-bold text-white border-b border-ocean-800 pb-2">6. Weather & Time System</h2>
        <p>
          How to Fish uses a dynamic day-night cycle with a full weather system that directly affects spawns and gameplay. Each in-game day lasts roughly 20 real-time minutes, cycling through Dawn, Day, Dusk, and Night phases. Different fish appear during different phases: Different phases favor different catches — the fish list tags each entry — and nighttime is when aggressive biters and the glowing Drip layer come out.
        </p>
        <p>
          <strong>Rain</strong> is your best friend as a beginner. Rain gates shallow-water Drip encounters outright — the tidepool Drip Rock Crab only shows in it — and players consistently report rarer bites during wet weather, though exact percentages have never been published. <strong>Thunderstorms</strong> push the bonus even higher but also make the ocean rougher, requiring better boat handling. Ignore “special storm” rumors that guarantee legendary spawns — no such event appears in any patch note or reproducible playthrough. Watch the sky, fish what the weather gives, and let the odds work.
        </p>

        <h2 className="text-xl font-bold text-white border-b border-ocean-800 pb-2">7. Surviving Night Predators</h2>
        <p>
          Nighttime in How to Fish is not just a visual change — it introduces aggressive nocturnal fish that actively attack your boat and character. Anglerfish and other aggressive nocturnals will ram your hull or leap onto the deck. If your hunger meter is running low, a single solid hit can knock you out and force a respawn back at the starter island dock.
        </p>
        <p>
          Always keep a <strong>Knife</strong> equipped when fishing at night. The Knife dispatches aggressive boarders in a handful of hits compared to a full fist-fight. For additional safety, equip <strong>Lantern Bait</strong> ($15, shop-bought — see the lures & baits guide) on a secondary cast: its glowing field is the community pick for calmer nights. Exact repel timing is feel, not documented fact.
        </p>

        <h2 className="text-xl font-bold text-white border-b border-ocean-800 pb-2">8. Unlocking New Islands</h2>
        <p>
          The starter island is only the beginning. To explore the wider archipelago, you need to repair your wrecked boat by collecting the three <strong>Boat Key Parts</strong> guarded along a five-boss chain — the other two bosses pay out coordinates and quest items instead. The key line looks like this:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-xs text-gray-300">
          <li><strong>Key Part #1 (Spider Crab)</strong>: Unlocks basic engine ignition so you can leave the starter island and reach the Coral Maze Lagoon.</li>
          <li><strong>Key Part #2 (Colossal Pufferfish)</strong>: Upgrades your navigation system, granting access to Casino Island and the outer reef zones.</li>
          <li><strong>Key Part #3 (Magma Whale)</strong>: Installs the final propulsion module, opening the Deep Volcanic Trench and endgame areas.</li>
        </ul>
        <p>
          Each island has a unique biome with exclusive fish species, NPCs, and side quests. The Coral Maze Lagoon features tropical reef fish and underwater cave systems. Casino Island has the Gachapon machine and competitive fishing tournaments. Mount Inferno Caldera is a volcanic lake with fire-resistant species and the game's toughest challenges. Take time to fully explore each area before pushing to the next — missed side content often holds the best gear upgrades.
        </p>

        <h2 className="text-xl font-bold text-white border-b border-ocean-800 pb-2">Essential Beginner Mistakes to Avoid</h2>
        <ul className="list-disc pl-5 space-y-3 text-xs text-gray-300">
          <li>
            <strong>Selling Drip Fish to the shop</strong>: Drip creatures look tempting at $5–$250 shop value, but they are worth far more when fed into the Casino Gachapon machine. A single Drip Crab can yield a legendary weapon skin worth thousands. Never sell them to the regular merchant.
          </li>
          <li>
            <strong>Ignoring the hunger meter</strong>: Your character hunger depletes steadily, and at zero hunger you lose health rapidly. Always carry 5–10 raw Clams or cooked fish as emergency food. Starvation during a boss fight is the most common cause of early-game wipes.
          </li>
          <li>
            <strong>Selling fish without checking value first</strong>: Press <kbd className="bg-ocean-950 px-2 py-0.5 rounded text-aqua font-mono border border-ocean-700">F</kbd> to inspect any item before selling. Value rarely matches looks, and our fish database documents the verified ones — make the inspect key a reflex before every sale.
          </li>
          <li>
            <strong>Skipping the Knife purchase</strong>: The $45 Knife is the single most important early buy after the Crab Rod. Without it, you take unavoidable damage subduing aggressive catches, waste food healing, and cannot survive night predators. Buy it before upgrading anything else.
          </li>
          <li>
            <strong>Rushing to deeper waters too early</strong>: Deep-water zones have aggressive fish that can sink an un-upgraded boat. Make sure you have at least the Deep-Sea Rod, a Knife, and Tier 1 boat engine before venturing past the starter island reef line. The ocean does not forgive underprepared anglers.
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
        <Link href="/troubleshooting/what-to-do-next/" className="hover:text-aqua underline underline-offset-2">Stuck? What to do next</Link>
      </div>

      <Sources
        items={[
          { label: 'How to Fish on Steam (store page)', href: 'https://store.steampowered.com/app/4001890/How_to_Fish/', note: 'starter-loop and progression basics' },
          { label: 'Official patch notes feed (app 4001890)', href: 'https://store.steampowered.com/feeds/news/app/4001890/', note: 'difficulty modes and save-rule context' },
        ]}
      />
    </div>
  );
}
