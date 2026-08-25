import Breadcrumb from '@/components/Breadcrumb';
import Link from 'next/link';

export const metadata = {
  title: 'Colossal Pufferfish Boss Strategy & Weaknesses',
  description: 'How to summon and beat the Colossal Spiky Pufferfish boss in How to Fish. Dodge spike waves and claim the Puffer Spike Launcher.',
};

export default function PufferfishPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      <Breadcrumb items={[{ name: 'Boss Battles', href: '/bosses/' }, { name: 'Pufferfish Boss', href: '/bosses/pufferfish/' }]} />
      <h1 className="text-3xl font-extrabold text-white">Colossal Spiky Pufferfish Boss Fight</h1>
      <div className="bg-ocean-900/80 border border-ocean-800 rounded-xl p-6 space-y-6 text-sm text-gray-300">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 bg-ocean-950 p-4 rounded-lg text-xs">
          <div><span className="text-gray-400">Location:</span> <strong className="text-white block">Coral Maze Lagoon</strong></div>
          <div><span className="text-gray-400">HP Pool:</span> <strong className="text-coral-light block">1,500 HP</strong></div>
          <div><span className="text-gray-400">Required Bait:</span> <strong className="text-gold block">Hot Dog Feast</strong></div>
          <div><span className="text-gray-400">Key Weakness:</span> <strong className="text-aqua block">Mouth & Dorsal Fin</strong></div>
        </div>
        <h2 className="text-xl font-bold text-white">Phase 1: The Rolling Spike Rush</h2>
        <p>Position your boat behind large coral rocks. When the Pufferfish rolls forward, it gets wedged between rock arches for 4 seconds.</p>
        <h2 className="text-xl font-bold text-white">Phase 2: 360-Degree Spike Barrage</h2>
        <p>When the boss inflates to 3x size, submerge underwater or crouch inside your boat cabin until spikes pass.</p>
      </div>
    </div>
  );
}
