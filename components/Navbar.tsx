'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { href: '/guide/', label: 'Guide' },
    { href: '/fish/', label: 'Fish List' },
    { href: '/bosses/', label: 'Bosses' },
    { href: '/lures/', label: 'Lures' },
    { href: '/map/', label: 'Map' },
    { href: '/boat/', label: 'Boat' },
    { href: '/multiplayer/', label: 'Co-op' },
    { href: '/settings/', label: 'Settings' },
  ];

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
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="text-gray-300 hover:text-aqua transition-colors">
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center space-x-3">
            <button
              type="button"
              className="md:hidden text-gray-300 hover:text-aqua transition-colors text-2xl leading-none"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              onClick={() => setMenuOpen((prev) => !prev)}
            >
              {menuOpen ? '✕' : '☰'}
            </button>
            <a href="https://store.steampowered.com/app/4001890/How_to_Fish/" target="_blank" rel="noopener noreferrer" className="bg-aqua hover:bg-aqua-dark text-ocean-950 font-bold px-3.5 py-1.5 rounded-lg text-xs transition-all shadow-md hover:scale-105">
              Steam ↗
            </a>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <nav className="md:hidden border-t border-ocean-800 bg-ocean-950/95 backdrop-blur-md">
          <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col space-y-2 text-sm font-semibold tracking-wide">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-300 hover:text-aqua transition-colors py-1.5"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
