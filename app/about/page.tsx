import Breadcrumb from '@/components/Breadcrumb';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us – How to Fish Wiki',
  description:
    'Learn about How to Fish Wiki, an independent community resource for the 2026 fishing game by Dazed Games. Our mission, coverage, and how to get in touch.',
  alternates: { canonical: 'https://howtofish101.com/about/' },
};

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8 text-sm text-gray-300">
      <Breadcrumb items={[{ name: 'About Us', href: '/about/' }]} />
      <h1 className="text-3xl font-bold text-white">About How to Fish Wiki</h1>

      <section className="space-y-3 bg-ocean-900/80 border border-ocean-800 rounded-xl p-6">
        <h2 className="text-xl font-bold text-white">Who We Are</h2>
        <p>
          How to Fish Wiki is an independent, community-maintained resource built by players, for
          players. We are <strong className="text-white">not affiliated with, endorsed by, or
          officially connected to Dazed Games</strong> in any way. Our team is made up of dedicated
          anglers who fell in love with the game and wanted a single, reliable place to find
          everything about it.
        </p>
      </section>

      <section className="space-y-3 bg-ocean-900/80 border border-ocean-800 rounded-xl p-6">
        <h2 className="text-xl font-bold text-white">Our Mission</h2>
        <p>
          We aim to provide the most accurate, up-to-date game data available anywhere online. Every
          stat, strategy, and guide is cross-checked through community testing so you can trust the
          information you find here.
        </p>
      </section>

      <section className="space-y-3 bg-ocean-900/80 border border-ocean-800 rounded-xl p-6">
        <h2 className="text-xl font-bold text-white">What We Cover</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>A growing fish database with verified locations, bait preferences, and rarity tiers</li>
          <li>Boss encounter strategies with phase breakdowns and recommended loadouts</li>
          <li>Comprehensive lure guides covering crafting, upgrades, and effectiveness charts</li>
          <li>Map &amp; hotspot guides with navigation tips for every biome and secret area</li>
          <li>Co-op and multiplayer tactics for tackling endgame content with friends</li>
          <li>Settings optimization and troubleshooting for common technical issues</li>
        </ul>
      </section>

      <section className="space-y-3 bg-ocean-900/80 border border-ocean-800 rounded-xl p-6">
        <h2 className="text-xl font-bold text-white">How We Source Our Data</h2>
        <p>
          Our guides are built on a combination of community testing, in-game data mining, and
          direct player contributions. When game updates change mechanics or stats, we verify the
          new values before publishing. If you spot an error or have data to share, we&apos;d love
          to hear from you.
        </p>
      </section>

      <section className="space-y-3 bg-ocean-900/80 border border-ocean-800 rounded-xl p-6">
        <h2 className="text-xl font-bold text-white">Contact</h2>
        <p>
          Have a question, suggestion, or correction? Reach us at{' '}
          <a href="mailto:contact@howtofish101.com" className="text-aqua hover:underline">
            contact@howtofish101.com
          </a>.
        </p>
      </section>

      <section className="space-y-3 bg-ocean-900/80 border border-ocean-800 rounded-xl p-6">
        <h2 className="text-xl font-bold text-white">Disclaimer</h2>
        <p>
          &ldquo;How to Fish&rdquo; and all related game assets, characters, and trademarks are the
          property of Dazed Games. This website is an unofficial, fan-made resource created for
          informational and educational purposes. We do not claim ownership of any game content or
          intellectual property belonging to Dazed Games.
        </p>
      </section>
    </div>
  );
}
