import Breadcrumb from '@/components/Breadcrumb';

export const metadata = {
  title: 'All Lures & Baits Unlock Guide',
  description: 'Full list of lures, baits, and rage attractors in How to Fish. Learn unlock requirements, costs, and fish affinities.',
};

export default function LuresPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      <Breadcrumb items={[{ name: 'Lures & Baits', href: '/lures/' }]} />
      <h1 className="text-3xl font-extrabold text-white">All Lures & Baits Guide</h1>
      <div className="bg-ocean-900/80 border border-ocean-800 rounded-xl p-6 space-y-4 text-sm text-gray-300">
        <p>Choosing the right bait dictates bite speed and rarity. Starter clams attract crabs, while Hot Dogs attract high-yield commercial fish.</p>
        <div className="overflow-x-auto mt-4">
          <table className="w-full text-left text-xs">
            <thead className="bg-ocean-950 text-gray-400 border-b border-ocean-800">
              <tr><th className="p-3">Bait Name</th><th className="p-3">Cost</th><th className="p-3">Target Species</th><th className="p-3">Special Effect</th></tr>
            </thead>
            <tbody className="divide-y divide-ocean-800/50">
              <tr><td className="p-3 font-bold text-white">Clam Meat</td><td className="p-3">Free</td><td className="p-3">Crabs, Shrimps</td><td className="p-3">Starter food & bait</td></tr>
              <tr><td className="p-3 font-bold text-white">Earthworm</td><td className="p-3">$1</td><td className="p-3">Bluegill, Perch</td><td className="p-3">High bite frequency</td></tr>
              <tr><td className="p-3 font-bold text-white">Hot Dog</td><td className="p-3">$5</td><td className="p-3">Red Snapper, Bass</td><td className="p-3">Attracts fast carnivores</td></tr>
              <tr><td className="p-3 font-bold text-white">Empty Beer Can</td><td className="p-3">$10</td><td className="p-3">Spider Crab Boss</td><td className="p-3">Summons boss</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
