import Link from 'next/link';
import FishTable from '@/components/FishTable';
import { FaqJsonLd } from '@/components/JsonLd';

const homeFaqs = [
  {
    q: 'What is How to Fish?',
    a: 'How to Fish is a 1-4 player physics-based fishing survival game by Dazed Games. After a boat crash strands you on a mysterious archipelago, you scavenge clams, craft rods, battle colossal marine bosses, and collect three boat keys to escape.',
  },
  {
    q: 'How many fish are in How to Fish?',
    a: 'The logbook tracks 49 unique species across six rarity tiers: Common, Uncommon, Rare, Epic, Legendary, and Drip. Each species has its own preferred bait, habitat, weather window, and sell value.',
  },
  {
    q: 'How do you beat the Pufferfish boss?',
    a: 'Summon it with a Hot Dog Feast rage bait at Coral Maze Lagoon, then target the mouth and dorsal fin during Phase 1, dodge spike waves in Phase 2, and burst down the enrage phase at 30% HP with a knife loadout.',
  },
  {
    q: 'Is How to Fish multiplayer?',
    a: 'Yes, the game supports drop-in 1-4 player online co-op through Steam invites. Boss HP scales with crew size (up to 2.5x at four players), and loot is shared equally among all anglers.',
  },
  {
    q: 'What platforms is How to Fish on?',
    a: 'How to Fish is available on Windows PC through Steam. A free demo lets you sample the opening islands before buying, and your progress carries over to the full game. Console and mobile versions have not been announced.',
  },
  {
    q: 'How long does it take to beat How to Fish?',
    a: 'A focused solo run takes roughly 6-8 hours: collect the three boat keys, defeat all three bosses, and repair your escape vessel. Completionists chasing the full 49-species logbook, every Drip creature, and all rod upgrades should plan for 15-20 hours.',
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
            <span>268,000+ Concurrent Anglers</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            How to Fish <span className="text-aqua">Complete Walkthrough & Wiki</span>
          </h1>

          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
            Welcome to the ultimate community database for Dazed Games&apos; 1-4 player physics fishing hit.
            Stranded after a boat crash on a mysterious archipelago, you survive, master casting, battle colossal
            marine titans, and recover your three missing boat keys. This wiki covers every species, boss fight,
            lure, island, and hidden secret — written by anglers, for anglers.
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            <Link href="/guide/" className="bg-aqua hover:bg-aqua-dark text-ocean-950 font-bold px-5 py-2.5 rounded-lg text-sm transition-all shadow-lg hover:scale-105">
              Beginner Walkthrough
            </Link>
            <Link href="/fish/" className="bg-ocean-800 hover:bg-ocean-700 text-white font-bold px-5 py-2.5 rounded-lg text-sm border border-ocean-600 transition-all hover:scale-105">
              All 49 Fish Database
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
            How to Fish is an indie survival fishing game developed by Dazed Games and released on Steam in 2026.
            It exploded in popularity thanks to its chaotic physics engine — rods flex, lines snap, catches fight
            back, and up to four players can trip over each other on the same tiny boat. Within weeks of launch it
            peaked at over 268,000 concurrent players, making it one of the year&apos;s biggest viral hits.
          </p>
          <p>
            The premise is simple: your boat crashes on a storm-lashed archipelago and scatters three keys across
            the islands. To escape, you must learn to fish, upgrade your gear, defeat three colossal guardians —
            the Spider Crab, the Spiky Pufferfish, and the Magma Whale — and repair your vessel. Along the way
            you&apos;ll fill a 49-species logbook, discover glowing Drip creatures, and gamble catches at the
            Casino Island gachapon machine.
          </p>
          <p>
            This wiki exists to answer one question thoroughly: how to fish, fight, and survive the game's
            storm-lashed archipelago. Every guide below is tested in-game and updated as patches roll out.
          </p>
          <p>
            Progression follows a satisfying loop: sell catches for cash, buy stronger rods and knives, unlock
            deeper fishing grounds, and repeat. Early sessions revolve around clams and shallow-water crabs;
            mid-game opens up hot dog bass runs, night beer baiting, and the gachapon casino; the endgame is a
            hunt for Legendary specimens like the Sunken Crew and the three glowing Drip species hidden in
            fog-shrouded corners of the map. Each milestone nudges you toward the next tool tier, so the loop
            never stalls.
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
              to collect meat, then upgrade to the $45 knife for aggressive species. Bait choice dictates bite
              speed — clams for crabs, hot dogs for bass, beer for rare night spawns.
            </p>
            <Link href="/guide/" className="text-xs font-semibold text-aqua hover:underline">Read the fishing guide →</Link>
          </div>

          <div className="bg-ocean-900/70 border border-ocean-800 rounded-xl p-6 hover:border-coral/50 transition-all">
            <div className="text-3xl mb-3">⚔️</div>
            <h3 className="font-bold text-lg text-white mb-2">Colossal Boss Battles</h3>
            <p className="text-gray-400 text-xs leading-relaxed mb-4">
              Use specialized rage baits like empty beer cans and volcano cores to summon the Spider Crab,
              Spiky Pufferfish, and Magma Whale. Each fight has three phases with escalating attack patterns.
              Defeating all three bosses yields the boat keys needed to finish the story.
            </p>
            <Link href="/bosses/" className="text-xs font-semibold text-coral-light hover:underline">View all boss guides →</Link>
          </div>

          <div className="bg-ocean-900/70 border border-ocean-800 rounded-xl p-6 hover:border-gold/50 transition-all">
            <div className="text-3xl mb-3">🎰</div>
            <h3 className="font-bold text-lg text-white mb-2">Drip Fish & Casino</h3>
            <p className="text-gray-400 text-xs leading-relaxed mb-4">
              Capture glowing Drip creatures — rare blue variants that only spawn at night during rain — and feed
              them into the Casino Gachapon machine to gamble for exclusive weapon and boat skins. Never sell
              them to the shop; the gachapon payout is worth ten times more.
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
            <li><strong>Buy the Crab Rod ($2)</strong> from the beach kiosk. Right-click casts into tidepools; left-click reels when a crab bites.</li>
            <li><strong>Save for the Knife ($45)</strong> before any other upgrade. Large catches thrash and damage you; the knife subdues them safely.</li>
            <li><strong>Learn the value key (F)</strong> — inspect every catch before selling. Some trash-looking species sell for $80+.</li>
            <li><strong>Never sell Drip creatures</strong> — blue glowing variants belong in the Casino gachapon, not the shop.</li>
            <li><strong>Fish dawn and dusk</strong> — the spawn table rotates by time of day. Rain windows boost rare rates by 40%.</li>
            <li><strong>Summon the Spider Crab early</strong> — it drops your first boat key and unlocks the repair dock.</li>
          </ol>
          <p>
            For the full route with island unlocks, weather systems, and night-predator survival, read the
            complete <Link href="/guide/" className="text-aqua hover:underline">beginner walkthrough</Link>.
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <div className="flex justify-between items-end">
          <div>
            <h2 className="text-2xl font-bold text-white">Interactive Marine Species Database</h2>
            <p className="text-xs text-gray-400">Search value, preferred bait, weather requirements, and rarity tiers across all 49 species.</p>
          </div>
          <Link href="/fish/" className="text-xs text-aqua font-semibold hover:underline">View full database →</Link>
        </div>
        <p className="text-xs text-gray-400 -mt-2">
          Every entry lists sell value, habitat, preferred bait, and the weather window that triggers the spawn.
          Filter by rarity tier to plan your logbook completion route — Legendary species like the Magma Eel
          only appear during storms at the Volcanic Trench.
        </p>
        <FishTable />
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-white">Popular Guides & Walkthroughs</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <Link href="/bosses/pufferfish/" className="bg-ocean-900/70 border border-ocean-800 rounded-xl p-5 hover:border-coral/50 transition-all">
            <h3 className="font-bold text-white text-sm mb-1">Pufferfish Boss Guide</h3>
            <p className="text-xs text-gray-400">Hot Dog Feast summon, spike-wave dodging, and the Puffer Spike Launcher drop.</p>
          </Link>
          <Link href="/bosses/spider-crab/" className="bg-ocean-900/70 border border-ocean-800 rounded-xl p-5 hover:border-coral/50 transition-all">
            <h3 className="font-bold text-white text-sm mb-1">Spider Crab Boss Guide</h3>
            <p className="text-xs text-gray-400">First boat key fight — claw swipes, burrow attacks, and shell-slam counters.</p>
          </Link>
          <Link href="/bosses/magma-whale/" className="bg-ocean-900/70 border border-ocean-800 rounded-xl p-5 hover:border-coral/50 transition-all">
            <h3 className="font-bold text-white text-sm mb-1">Magma Whale Boss Guide</h3>
            <p className="text-xs text-gray-400">Final boss at the Deep Trench — Volcano Core bait and legendary rod reward.</p>
          </Link>
          <Link href="/fish/drip-fish/" className="bg-ocean-900/70 border border-ocean-800 rounded-xl p-5 hover:border-gold/50 transition-all">
            <h3 className="font-bold text-white text-sm mb-1">Drip Fish Locations</h3>
            <p className="text-xs text-gray-400">Night-rain spawn conditions, every variant, and gachapon reward tiers.</p>
          </Link>
          <Link href="/boat/" className="bg-ocean-900/70 border border-ocean-800 rounded-xl p-5 hover:border-aqua/50 transition-all">
            <h3 className="font-bold text-white text-sm mb-1">Boat Keys & Upgrades</h3>
            <p className="text-xs text-gray-400">Where each key drops, engine upgrade tree, and fuel management tips.</p>
          </Link>
          <Link href="/multiplayer/" className="bg-ocean-900/70 border border-ocean-800 rounded-xl p-5 hover:border-aqua/50 transition-all">
            <h3 className="font-bold text-white text-sm mb-1">Co-op Crew Guide</h3>
            <p className="text-xs text-gray-400">Crew roles, boss HP scaling table, and loot-sharing rules for 4-player crews.</p>
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
