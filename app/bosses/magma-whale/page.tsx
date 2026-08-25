import Breadcrumb from '@/components/Breadcrumb';

export const metadata = {
  title: 'Volcanic Magma Whale Final Boss Strategy',
  description: 'Beat the final Magma Whale boss in Mount Inferno crater. Bare hand achievement strategy and golden rod reward in How to Fish.',
};

export default function MagmaWhalePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      <Breadcrumb items={[{ name: 'Boss Battles', href: '/bosses/' }, { name: 'Magma Whale', href: '/bosses/magma-whale/' }]} />
      <h1 className="text-3xl font-extrabold text-white">Volcanic Magma Whale (Final Boss)</h1>
      <div className="bg-ocean-900/80 border border-ocean-800 rounded-xl p-6 space-y-6 text-sm text-gray-300">
        <h2 className="text-xl font-bold text-white">Summit Lava Lake Access</h2>
        <p>Upgrade your boat with heat-resistant plating to traverse the lava canal to Mount Inferno crater.</p>
        <h2 className="text-xl font-bold text-white">Defeating with Bare Hands (Achievement)</h2>
        <p>Whittle its 4,000 HP down using rifle/harpoon, then unequip all weapons and land the final hit with bare fists to unlock the secret achievement.</p>
      </div>
    </div>
  );
}
