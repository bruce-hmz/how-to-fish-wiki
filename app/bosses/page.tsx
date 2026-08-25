import Breadcrumb from '@/components/Breadcrumb';
import Link from 'next/link';
import { BOSSES_DATABASE } from '@/lib/data';

export const metadata = {
  title: 'All Boss Battles, Summon Baits & Strategies',
  description: 'Complete boss fight guide for How to Fish. How to summon and defeat the Spider Crab, Colossal Pufferfish, and Volcanic Magma Whale.',
};

export default function BossesPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      <Breadcrumb items={[{ name: 'Boss Battles', href: '/bosses/' }]} />
      <div>
        <h1 className="text-3xl font-extrabold text-white tracking-tight">Colossal Marine Boss Battles</h1>
        <p className="text-gray-400 text-xs mt-1">Summon conditions, attack patterns, weak points, and unique trophy rewards.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {BOSSES_DATABASE.map((boss) => (
          <div key={boss.id} className="bg-ocean-900 border border-ocean-800 rounded-xl p-6 flex flex-col justify-between hover:border-coral/50 transition-all">
            <div className="space-y-3">
              <div className="text-3xl">👾</div>
              <h3 className="text-xl font-bold text-white">{boss.name}</h3>
              <p className="text-xs text-gray-400">Location: <span className="text-gray-300">{boss.location}</span></p>
              <p className="text-xs text-gray-400">Summon Bait: <span className="text-gold font-semibold">{boss.summonBait}</span></p>
              <p className="text-xs text-gray-400">HP: <span className="text-coral-light font-bold">{boss.hp}</span></p>
            </div>
            <Link 
              href={`/bosses/${boss.id}/`} 
              className="mt-6 bg-ocean-800 hover:bg-ocean-700 text-aqua text-xs font-bold py-2 rounded-lg text-center border border-ocean-700 transition-colors block"
            >
              View Strategy Guide →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
