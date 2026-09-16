import Link from 'next/link';
import FishTable from '@/components/FishTable';
import { FaqJsonLd } from '@/components/JsonLd';

export const metadata = {
  title: 'How to Fish Wiki — Verified Fish, Bosses, Lures & Progression',
  description:
    'Source-checked How to Fish guides: the verified 38-species fish database with islands and lures, every boss summon chain from the Spider Crab to the Mutated Bowhead Whale, patch notes to 1.0.12, and troubleshooting for real player bugs.',
  alternates: { canonical: 'https://howtofish101.com/' },
};

const homeFaqs = [
  {
    q: 'What is How to Fish?',
    a: 'How to Fish is a 1-4 player physics-based fishing survival game by Dazed Games. After a boat crash strands you on a mysterious archipelago, you scavenge clams, buy rods and lures, battle colossal marine bosses, and trade your way island by island toward the final boss.',
  },
  {
    q: 'How many fish are in How to Fish?',
    a: 'Community catalogs track 49 creatures: 38 regular species plus 11 boss-class catches, each with drip variants tracked separately. Regular fish are determined by your equipped lure — Free, Beginner, Standard, Professional, and Scientific tiers unlock with island progression. Our fish database lists every verified species, island, and lure pairing.',
  },
  {
    q: 'How do you beat the Pufferfish boss?',
    a: 'Summon it with a Carrot as quest bait on the desert island (island 3), then fight it with your best weapon and cooked food on hand. It was nerfed in the official Patch 1.0.4, and Easy mode (Patch 1.0.9) cuts creature health and damage if you are stuck. Our Pufferfish guide has the verified details.',
  },
  {
    q: 'Is How to Fish multiplayer?',
    a: 'Yes, the game supports drop-in online co-op through Steam invites, and since Patch 1.0.4 lobbies can hold up to 8 players (up from 4). Money pools into one shared crew wallet; items and money do not carry between saves, but skins do.',
  },
  {
    q: 'What platforms is How to Fish on?',
    a: 'How to Fish is available on Windows PC through Steam, is Steam Deck Verified, and runs on GeForce NOW (both official since Patch 1.0.11). Console and mobile versions have not been announced.',
  },
  {
    q: 'How long does it take to beat How to Fish?',
    a: 'Community reports vary: first clears land around 4–8 hours through the boss chain and boat restoration, and the official Bean achievement asks you to finish within one hour. Completionists chasing every achievement and the full logbook should plan days, not hours — no official figure exists.',
  },
];

export default function HomePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16">
      <FaqJsonLd faqs={homeFaqs} />

      <section className="relative overflow-hidden rounded-2xl bg-gradient-to-b from-ocean-800/80 to-ocean-950 border border-ocean-700/60 p-8 sm:p-12 shadow-2xl">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center space-x-2 bg-aqua/10 border border-aqua/30 rounded-full px-3 py-1 text-xs font-semibold text-aqua">
            <span>Viral Hit</span>
            <span>•</span>
            <span>373,971 Peak Concurrent Players</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            How to Fish <span className="text-aqua">Complete Walkthrough & Wiki</span>
          </h1>

          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
            Welcome to the ultimate community database for Dazed Games&apos; 1-4 player physics fishing hit.
            Stranded after a boat crash on a mysterious archipelago, you survive, master casting, battle colossal
            marine titans, and trade your way island by island to the final boss. This wiki covers every species,
            boss fight, lure, and island — with every gameplay fact source-checked.
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            <Link href="/guide/" className="bg-aqua hover:bg-aqua-dark text-ocean-950 font-bold px-5 py-2.5 rounded-lg text-sm transition-all shadow-lg hover:scale-105">
              Beginner Walkthrough
            </Link>
            <Link href="/fish/" className="bg-ocean-800 hover:bg-ocean-700 text-white font-bold px-5 py-2.5 rounded-lg text-sm border border-ocean-600 transition-all hover:scale-105">
              Fish Database & Rarity Guide
            </Link>
            <Link href="/bosses/pufferfish/" className="bg-coral/20 hover:bg-coral/30 text-coral-light font-bold px-5 py-2.5 rounded-lg text-sm border border-coral/40 transition-all">
              Pufferfish Boss Strategy
            </Link>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-white">Straight from the Game</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { src: '/images/screenshots/shot-1.webp', alt: 'How to Fish gameplay — casting a rod at the island dock with the equipment rack and NPC hut' },
            { src: '/images/screenshots/shot-2.webp', alt: 'Fighting the spiky Pufferfish boss with damage numbers in How to Fish' },
            { src: '/images/screenshots/shot-3.webp', alt: 'Reeling in a catch on a tropical beach in How to Fish' },
            { src: '/images/screenshots/shot-4.webp', alt: 'Cooking catches on the beach grill in How to Fish' },
            { src: '/images/screenshots/shot-5.webp', alt: 'The shack interior with weapons and tools mounted on the wall in How to Fish' },
            { src: '/images/screenshots/shot-6.webp', alt: 'Climbing a palm tree in the tropical islands of How to Fish' },
          ].map((shot) => (
            <div key={shot.src} className="rounded-xl overflow-hidden border border-ocean-800 hover:border-aqua/50 transition-all">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={shot.src} alt={shot.alt} width={640} height={360} loading="lazy" className="w-full h-auto" />
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-white">What Is How to Fish?</h2>
        <div className="bg-ocean-900/70 border border-ocean-800 rounded-xl p-6 space-y-4 text-sm text-gray-300 leading-relaxed">
          <p>
            How to Fish is an indie survival fishing game developed by Dazed Games and released on Steam on
            August 20, 2026. It exploded in popularity thanks to its chaotic physics engine — rods flex, lines
            snap, catches fight back, and up to eight players can trip over each other on the same tiny boat.
            It passed 1 million players in two days and peaked at over 373,000 concurrent players, making it
            one of the year&apos;s biggest viral hits.
          </p>
          <p>
            The premise is simple: your boat crashes on a mysterious archipelago and you need the Boat Keys to
            properly set sail. To get them, you learn to fish, upgrade your gear, defeat the Giant Spider Crab
            — then fight island by island through the Giant Piranha, the Pufferfish, the Albatross, and the
            final boss, the Mutated Bowhead Whale. Along the way you&apos;ll fill a 49-creature logbook,
            discover glowing Drip variants, and gamble catches at the Casino island&apos;s prize machines.
          </p>
          <p>
            This wiki exists to answer one question thoroughly: how to fish, fight, and survive the game&apos;s
            archipelago. Every gameplay fact on it is source-checked against official patch notes, Steam
            data, and at least two independent guide databases — see our editorial policy.
          </p>
          <p>
            Progression follows a satisfying loop: sell catches for cash, buy better lures and knives, unlock
            deeper fishing grounds, and repeat. Early sessions revolve around clams and shallow-water crabs;
            mid-game opens up the desert-island roster and the grill; the endgame is the volcano island —
            the Goblin Shark, the Superdwarf Fish, and the final boss chain. Each milestone nudges you toward
            the next lure tier, so the loop never stalls.
          </p>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-white">Core Gameplay: Fishing, Bosses & Secrets</h2>
        <p className="text-xs text-gray-400 -mt-3">Three pillars define the loop — master them in order.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-ocean-900/70 border border-ocean-800 rounded-xl p-6 hover:border-aqua/50 transition-all">
            <div className="text-3xl mb-3">🎣</div>
            <h3 className="font-bold text-lg text-white mb-2">Physics-Based Angling</h3>
            <p className="text-gray-400 text-xs leading-relaxed mb-4">
              Master mouse sensitivity, rod flex, and line snap resistance. Punch or slash catches with knuckles
              to collect meat, then upgrade to the $45 knife for aggressive species. Lure choice dictates the
              catch — Free, Beginner, Standard, Professional, and Scientific tiers unlock with the islands.
            </p>
            <Link href="/guide/" className="text-xs font-semibold text-aqua hover:underline">Read the fishing guide →</Link>
          </div>

          <div className="bg-ocean-900/70 border border-ocean-800 rounded-xl p-6 hover:border-coral/50 transition-all">
            <div className="text-3xl mb-3">⚔️</div>
            <h3 className="font-bold text-lg text-white mb-2">Colossal Boss Battles</h3>
            <p className="text-gray-400 text-xs leading-relaxed mb-4">
              Quest items summon the bosses: the Empty Beer Can calls the Spider Crab, the Modified Leech the
              Giant Piranha, the Carrot the Pufferfish, and a defeated Tuna or Bowhead Whale bait the island-4
              and final fights. Beat each gate to unlock the next island.
            </p>
            <Link href="/bosses/" className="text-xs font-semibold text-coral-light hover:underline">View all boss guides →</Link>
          </div>

          <div className="bg-ocean-900/70 border border-ocean-800 rounded-xl p-6 hover:border-gold/50 transition-all">
            <div className="text-3xl mb-3">🎰</div>
            <h3 className="font-bold text-lg text-white mb-2">Drip Fish & Casino</h3>
            <p className="text-gray-400 text-xs leading-relaxed mb-4">
              Catch glowing Drip creatures — rare color-shifted variants caught with the same lure as their
              normal version — and feed them into the Casino prize machines for exclusive weapon and boat
              skins. Never sell them to the shop; odds are unpublished but the skins are the whole point.
            </p>
            <Link href="/fish/drip-fish/" className="text-xs font-semibold text-gold hover:underline">Drip fish guide →</Link>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-white">Quick-Start Tips for New Anglers</h2>
        <div className="bg-ocean-900/70 border border-ocean-800 rounded-xl p-6 space-y-4 text-sm text-gray-300 leading-relaxed">
          <p>
            If you just crashed onto the starter beach, follow this order — it takes roughly 30 minutes and
            sets up your entire run:
          </p>
          <ol className="list-decimal pl-5 space-y-2 text-xs">
            <li><strong>Eat clams first</strong> — press E on beach sand to pick them up, hold left-click to eat. Your hunger bar drains fast and starving anglers catch nothing.</li>
            <li><strong>Buy the Crab Rod ($2–3)</strong> from the fisherman. It comes with the Free Lure for the starter roster.</li>
            <li><strong>Save for the Knife ($45)</strong> before any other upgrade — IGN and G2A both recommend it. Catches thrash and damage you; the knife subdues them safely.</li>
            <li><strong>Learn the value key (F)</strong> — inspect every catch before selling.</li>
            <li><strong>Never sell Drip creatures</strong> — blue glowing variants belong in the Casino prize machines, not the shop.</li>
            <li><strong>Upgrade by lure tier</strong> — the fish you catch are determined by your equipped lure, not the island you stand on.</li>
            <li><strong>Summon the Spider Crab early</strong> — trade its shell for the Boat Keys and the archipelago opens.</li>
          </ol>
          <p>
            For the full route with island unlocks, lure tiers, and boss chains, read the
            complete <Link href="/guide/" className="text-aqua hover:underline">beginner walkthrough</Link>.
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <div className="flex justify-between items-end">
          <div>
            <h2 className="text-2xl font-bold text-white">Interactive Marine Species Database</h2>
            <p className="text-xs text-gray-400">Search island, lure, and documented sell values for every verified species.</p>
          </div>
          <Link href="/fish/" className="text-xs text-aqua font-semibold hover:underline">View full database →</Link>
        </div>
        <p className="text-xs text-gray-400 -mt-2">
          Every entry lists the island, the lure that catches it, and the sell value where a source recorded
          one. Filter by island to plan your logbook completion route — every row is cross-verified against
          two independent guide databases.
        </p>
        <FishTable />
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-white">Popular Guides & Walkthroughs</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <Link href="/bosses/pufferfish/" className="bg-ocean-900/70 border border-ocean-800 rounded-xl p-5 hover:border-coral/50 transition-all">
            <h3 className="font-bold text-white text-sm mb-1">Pufferfish Boss Guide</h3>
            <p className="text-xs text-gray-400">The Carrot summon on the desert island, and the gate to island 4.</p>
          </Link>
          <Link href="/bosses/spider-crab/" className="bg-ocean-900/70 border border-ocean-800 rounded-xl p-5 hover:border-coral/50 transition-all">
            <h3 className="font-bold text-white text-sm mb-1">Spider Crab Boss Guide</h3>
            <p className="text-xs text-gray-400">First boss — the beer chain, the floating-crab bug, and the Boat Keys trade.</p>
          </Link>
          <Link href="/bosses/magma-whale/" className="bg-ocean-900/70 border border-ocean-800 rounded-xl p-5 hover:border-coral/50 transition-all">
            <h3 className="font-bold text-white text-sm mb-1">Final Boss Guide</h3>
            <p className="text-xs text-gray-400">The Mutated Bowhead Whale — bait chain, community tactics, and the Handyman run.</p>
          </Link>
          <Link href="/fish/drip-fish/" className="bg-ocean-900/70 border border-ocean-800 rounded-xl p-5 hover:border-gold/50 transition-all">
            <h3 className="font-bold text-white text-sm mb-1">Drip Fish Guide</h3>
            <p className="text-xs text-gray-400">Every community-sighted variant, honest odds talk, and hunting techniques.</p>
          </Link>
          <Link href="/boat/" className="bg-ocean-900/70 border border-ocean-800 rounded-xl p-5 hover:border-aqua/50 transition-all">
            <h3 className="font-bold text-white text-sm mb-1">Boat Keys & Upgrades</h3>
            <p className="text-xs text-gray-400">The shell-for-keys trade, engine achievements, and the missing-boat bug.</p>
          </Link>
          <Link href="/multiplayer/" className="bg-ocean-900/70 border border-ocean-800 rounded-xl p-5 hover:border-aqua/50 transition-all">
            <h3 className="font-bold text-white text-sm mb-1">Co-op Crew Guide</h3>
            <p className="text-xs text-gray-400">8-player lobbies, the shared wallet, and what carries between saves.</p>
          </Link>
          <Link href="/bosses/giant-piranha/" className="bg-ocean-900/70 border border-ocean-800 rounded-xl p-5 hover:border-coral/50 transition-all">
            <h3 className="font-bold text-white text-sm mb-1">Giant Piranha Boss Guide</h3>
            <p className="text-xs text-gray-400">3-Leech Island 2 quest, escape-bar race, and the skeleton that unlocks Island 3.</p>
          </Link>
          <Link href="/achievements/" className="bg-ocean-900/70 border border-ocean-800 rounded-xl p-5 hover:border-gold/50 transition-all">
            <h3 className="font-bold text-white text-sm mb-1">All 28 Achievements</h3>
            <p className="text-xs text-gray-400">Real Steam unlock rates, rarity tiers, and a browser checklist for 100% completion.</p>
          </Link>
          <Link href="/game/system-requirements/" className="bg-ocean-900/70 border border-ocean-800 rounded-xl p-5 hover:border-aqua/50 transition-all">
            <h3 className="font-bold text-white text-sm mb-1">System Requirements</h3>
            <p className="text-xs text-gray-400">Official PC specs, controller and language support, and console availability.</p>
          </Link>
          <Link href="/weapons/" className="bg-ocean-900/70 border border-ocean-800 rounded-xl p-5 hover:border-coral/50 transition-all">
            <h3 className="font-bold text-white text-sm mb-1">Weapons &amp; Attachments</h3>
            <p className="text-xs text-gray-400">Every weapon ranked, boss loadout cheatsheet, and the Fully equipped achievement route.</p>
          </Link>
          <Link href="/updates/" className="bg-ocean-900/70 border border-ocean-800 rounded-xl p-5 hover:border-aqua/50 transition-all">
            <h3 className="font-bold text-white text-sm mb-1">Patch Notes &amp; Updates</h3>
            <p className="text-xs text-gray-400">Every official patch 1.0.4–1.0.12: boss nerfs, difficulty modes, Steam Cloud saves, 8-player lobbies.</p>
          </Link>
          <Link href="/difficulty/" className="bg-ocean-900/70 border border-ocean-800 rounded-xl p-5 hover:border-coral/50 transition-all">
            <h3 className="font-bold text-white text-sm mb-1">Difficulty Modes Guide</h3>
            <p className="text-xs text-gray-400">Exact Easy, Normal, and Hard modifiers from Patch 1.0.9, and which mode fits your run.</p>
          </Link>
          <Link href="/troubleshooting/error-0x11c7/" className="bg-ocean-900/70 border border-ocean-800 rounded-xl p-5 hover:border-aqua/50 transition-all">
            <h3 className="font-bold text-white text-sm mb-1">Error 0x11C7 Fix</h3>
            <p className="text-xs text-gray-400">Smart App Control blocking the launch? The safe fix order before disabling security.</p>
          </Link>
          <Link href="/troubleshooting/what-to-do-next/" className="bg-ocean-900/70 border border-ocean-800 rounded-xl p-5 hover:border-aqua/50 transition-all">
            <h3 className="font-bold text-white text-sm mb-1">What to Do Next</h3>
            <p className="text-xs text-gray-400">Progression troubleshooter for stuck runs — find your state, get the exact next step.</p>
          </Link>
          <Link href="/troubleshooting/save-file/" className="bg-ocean-900/70 border border-ocean-800 rounded-xl p-5 hover:border-aqua/50 transition-all">
            <h3 className="font-bold text-white text-sm mb-1">Save Bug &amp; Lost Items</h3>
            <p className="text-xs text-gray-400">What Patch 1.0.9 fixed, the autosave rules, and the safe recovery order.</p>
          </Link>
          <Link href="/islands/" className="bg-ocean-900/70 border border-ocean-800 rounded-xl p-5 hover:border-aqua/50 transition-all">
            <h3 className="font-bold text-white text-sm mb-1">Island Unlock Order</h3>
            <p className="text-xs text-gray-400">The five-stage chain from Starter Island to the Deep Trench endgame.</p>
          </Link>
          <Link href="/cooking/" className="bg-ocean-900/70 border border-ocean-800 rounded-xl p-5 hover:border-coral/50 transition-all">
            <h3 className="font-bold text-white text-sm mb-1">Cooking &amp; Grill Recipes</h3>
            <p className="text-xs text-gray-400">Every station recipe, boss-summon feasts, and cooked-fish healing food.</p>
          </Link>
          <Link href="/game/launch/" className="bg-ocean-900/70 border border-ocean-800 rounded-xl p-5 hover:border-gold/50 transition-all">
            <h3 className="font-bold text-white text-sm mb-1">Launch Report</h3>
            <p className="text-xs text-gray-400">1M players in 10 days, 268K concurrent peak, and the two-dev story.</p>
          </Link>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-white">How to Fish FAQ</h2>
        <div className="bg-ocean-900/70 border border-ocean-800 rounded-xl p-6 space-y-5">
          {homeFaqs.map((item) => (
            <div key={item.q} className="border-b border-ocean-800 pb-4 last:border-0 last:pb-0">
              <h3 className="text-white font-semibold mb-2 text-sm">{item.q}</h3>
              <p className="text-xs text-gray-400 leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
