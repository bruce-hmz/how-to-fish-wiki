import Link from 'next/link';
export default function Footer() {
  return (
    <footer className="bg-ocean-950 border-t border-ocean-800 text-gray-400 text-sm mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-3">
              <span className="text-xl">🎣</span>
              <span className="font-bold text-white text-base">How to Fish Wiki</span>
            </div>
            <p className="text-xs text-gray-400 leading-relaxed mb-3">
              Community guide, fish database, and walkthrough for Dazed Games 1-4 player physics fishing simulator.
            </p>
            <p className="text-xs text-aqua font-semibold">🎮 268,000+ Concurrent Anglers</p>
          </div>
          <div>
            <div className="font-bold text-white mb-3 text-xs tracking-wider uppercase">Guides & Bosses</div>
            <ul className="space-y-2 text-xs">
              <li><Link href="/guide/" className="hover:text-aqua transition-colors">Beginner Walkthrough</Link></li>
              <li><Link href="/fish/" className="hover:text-aqua transition-colors">All 49 Fish Database</Link></li>
              <li><Link href="/fish/drip-fish/" className="hover:text-aqua transition-colors">Rare Drip Fish & Casino</Link></li>
              <li><Link href="/bosses/pufferfish/" className="hover:text-aqua transition-colors">Pufferfish Boss Fight</Link></li>
              <li><Link href="/achievements/" className="hover:text-aqua transition-colors">All 28 Achievements</Link></li>
              <li><Link href="/weapons/" className="hover:text-aqua transition-colors">Weapons & Attachments</Link></li>
              <li><Link href="/game/system-requirements/" className="hover:text-aqua transition-colors">System Requirements</Link></li>
            </ul>
          </div>
          <div>
            <div className="font-bold text-white mb-3 text-xs tracking-wider uppercase">Exploration</div>
            <ul className="space-y-2 text-xs">
              <li><Link href="/map/" className="hover:text-aqua transition-colors">Archipelago Interactive Map</Link></li>
              <li><Link href="/boat/" className="hover:text-aqua transition-colors">Boat Keys & Motor Upgrades</Link></li>
              <li><Link href="/lures/" className="hover:text-aqua transition-colors">Best Lures & Baits</Link></li>
              <li><Link href="/multiplayer/" className="hover:text-aqua transition-colors">4-Player Co-op Guide</Link></li>
            </ul>
          </div>
          <div>
            <div className="font-bold text-white mb-3 text-xs tracking-wider uppercase">Legal & Support</div>
            <ul className="space-y-2 text-xs">
              <li><Link href="/about/" className="hover:text-aqua transition-colors">About Us</Link></li>
              <li><Link href="/editorial-policy/" className="hover:text-aqua transition-colors">Editorial Policy</Link></li>
              <li><Link href="/privacy/" className="hover:text-aqua transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms/" className="hover:text-aqua transition-colors">Terms of Service</Link></li>
              <li><Link href="/faq/" className="hover:text-aqua transition-colors">FAQ</Link></li>
              <li><Link href="/settings/" className="hover:text-aqua transition-colors">Black Screen & Bug Fixes</Link></li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-ocean-900 text-xs text-center text-gray-500">
          <p>© 2026 How to Fish Wiki & Community Guide. Game content & assets belong to Dazed Games.</p>
        </div>
      </div>
    </footer>
  );
}
