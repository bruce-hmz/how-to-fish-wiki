import Breadcrumb from '@/components/Breadcrumb';
import Link from 'next/link';

export const metadata = {
  title: 'Rare Drip Fish & Casino Gachapon Guide',
  description: 'Where to find rare glowing Drip Fish in How to Fish, how to use them in the Casino capsule machine, and unlock legendary weapon skins.',
};

export default function DripFishPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      <Breadcrumb items={[{ name: 'Fish Database', href: '/fish/' }, { name: 'Drip Fish Guide', href: '/fish/drip-fish/' }]} />
      <h1 className="text-3xl font-extrabold text-white">Rare Drip Fish & Casino Gachapon Guide</h1>
      <div className="bg-ocean-900/80 border border-ocean-800 rounded-xl p-6 space-y-6 text-sm text-gray-300">
        <div className="bg-cyan-950/60 border border-cyan-500/40 rounded-lg p-4">
          <h3 className="font-bold text-cyan-300 mb-1">What is a Drip Creature?</h3>
          <p className="text-xs text-gray-300">Drip creatures are iridescent blue glowing variants of normal fish and crabs. They have a ~3% natural spawn rate during rain and thunderstorms.</p>
        </div>
        <h2 className="text-xl font-bold text-white">Where to Catch the Drip Fish</h2>
        <p>Head to the volcanic hydrothermal vents at coordinates (X: 420, Y: -180). Use Beer or Rainbow Lure during rainy weather.</p>
        <h2 className="text-xl font-bold text-white">The Casino Island Gachapon Machine</h2>
        <p>Do NOT sell Drip fish for cash ($5 $250). Take them to Casino Island and feed them into the capsule machine to win exclusive Knuckle skins, Golden Rod handles, and Boat neon trims.</p>
      </div>
    </div>
  );
}
