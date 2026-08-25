import Breadcrumb from '@/components/Breadcrumb';

export const metadata = {
  title: 'Boat Keys Location & Engine Upgrades',
  description: 'Where to find lost boat keys in How to Fish. Complete upgrade tree for engine horsepower, fuel tank capacity, and hull armor.',
};

export default function BoatPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      <Breadcrumb items={[{ name: 'Boat Upgrades', href: '/boat/' }]} />
      <h1 className="text-3xl font-extrabold text-white">Boat Keys Location & Engine Upgrades</h1>
      <div className="bg-ocean-900/80 border border-ocean-800 rounded-xl p-6 space-y-6 text-sm text-gray-300">
        <h2 className="text-xl font-bold text-white">Locating the Lost Starter Boat Keys</h2>
        <p>After defeating the Giant Spider Crab, inspect the trophy drop to extract <strong>Boat Key Part #1</strong>. Trade it to the mechanic on the dock to unlock engine ignition.</p>
        <h2 className="text-xl font-bold text-white">Boat Upgrade Milestones</h2>
        <ul className="list-disc pl-5 space-y-2 text-xs">
          <li><strong>Tier 1 Twin Outboard Motor ($350)</strong>: Doubles cruising speed to cross open ocean waters.</li>
          <li><strong>Tier 2 Deep-Water Sonar Radar ($750)</strong>: Reveals underwater fish swarm shadows and depth contours.</li>
          <li><strong>Tier 3 Heat-Shielded Titanium Hull ($2,000)</strong>: Enables boat navigation through volcanic lava streams.</li>
        </ul>
      </div>
    </div>
  );
}
