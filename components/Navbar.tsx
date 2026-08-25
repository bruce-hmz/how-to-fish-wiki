import Link from 'next/link';
export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-ocean-950/90 border-b border-ocean-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2 group">
            <span className="text-2xl">🎣</span>
            <span className="font-extrabold text-xl tracking-tight text-white group-hover:text-aqua transition-colors">
              How to Fish <span className="text-aqua font-normal text-xs border border-aqua/30 rounded px-1.5 py-0.5 ml-1">Wiki</span>
            </span>
          </Link>
          <nav className="hidden md:flex items-center space-x-5 text-xs font-semibold tracking-wide">
            <Link href="/guide/" className="text-gray-300 hover:text-aqua transition-colors">Guide</Link>
            <Link href="/fish/" className="text-gray-300 hover:text-aqua transition-colors">Fish List</Link>
            <Link href="/bosses/" className="text-gray-300 hover:text-aqua transition-colors">Bosses</Link>
            <Link href="/lures/" className="text-gray-300 hover:text-aqua transition-colors">Lures</Link>
            <Link href="/map/" className="text-gray-300 hover:text-aqua transition-colors">Map</Link>
            <Link href="/boat/" className="text-gray-300 hover:text-aqua transition-colors">Boat</Link>
            <Link href="/multiplayer/" className="text-gray-300 hover:text-aqua transition-colors">Co-op</Link>
            <Link href="/settings/" className="text-gray-300 hover:text-aqua transition-colors">Settings</Link>
          </nav>
          <div className="flex items-center space-x-3">
            <a href="https://store.steampowered.com/app/4001890/How_to_Fish/" target="_blank" rel="noopener noreferrer" className="bg-aqua hover:bg-aqua-dark text-ocean-950 font-bold px-3.5 py-1.5 rounded-lg text-xs transition-all shadow-md hover:scale-105">
              Steam ↗
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
