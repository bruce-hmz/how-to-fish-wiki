import Link from 'next/link';
import FishTable from '@/components/FishTable';

export default function HomePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16">
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
            Welcome to the ultimate community database for Dazed Games 1-4 player physics fishing hit. 
            Stranded after a boat crash on a mysterious archipelago, survive, master casting, battle colossal marine titans, and find your missing boat keys.
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

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-ocean-900/70 border border-ocean-800 rounded-xl p-6 hover:border-aqua/50 transition-all">
          <div className="text-3xl mb-3">🎣</div>
          <h3 className="font-bold text-lg text-white mb-2">Physics-Based Angling</h3>
          <p className="text-gray-400 text-xs leading-relaxed mb-4">Master mouse sensitivity, rod flex, and line snap resistance. Punch or slash catches with knuckles to collect meat.</p>
          <Link href="/guide/" className="text-xs font-semibold text-aqua hover:underline">Read guide →</Link>
        </div>

        <div className="bg-ocean-900/70 border border-ocean-800 rounded-xl p-6 hover:border-coral/50 transition-all">
          <div className="text-3xl mb-3">⚔️</div>
          <h3 className="font-bold text-lg text-white mb-2">Colossal Boss Battles</h3>
          <p className="text-gray-400 text-xs leading-relaxed mb-4">Use specialized rage baits like empty beer cans and volcano cores to summon Spider Crabs, Spiky Pufferfish, and the Magma Whale.</p>
          <Link href="/bosses/" className="text-xs font-semibold text-coral-light hover:underline">View all bosses →</Link>
        </div>

        <div className="bg-ocean-900/70 border border-ocean-800 rounded-xl p-6 hover:border-gold/50 transition-all">
          <div className="text-3xl mb-3">🎰</div>
          <h3 className="font-bold text-lg text-white mb-2">Drip Fish & Casino</h3>
          <p className="text-gray-400 text-xs leading-relaxed mb-4">Capture glowing Drip creatures and feed them into the Casino Gachapon machine to gamble for exclusive weapon and boat skins.</p>
          <Link href="/fish/drip-fish/" className="text-xs font-semibold text-gold hover:underline">Drip fish guide →</Link>
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
        <FishTable />
      </section>
    </div>
  );
}
