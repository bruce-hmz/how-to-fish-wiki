import Breadcrumb from '@/components/Breadcrumb';

export const metadata = {
  title: 'Archipelago Interactive Map & Hotspots',
  description: 'Complete map of How to Fish archipelago. Coordinates for all islands, merchant docks, boat repair bays, and secret deep trenches.',
};

export default function MapPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      <Breadcrumb items={[{ name: 'Archipelago Map', href: '/map/' }]} />
      <h1 className="text-3xl font-extrabold text-white">Archipelago Island Map & Hotspots</h1>
      <div className="bg-ocean-900/80 border border-ocean-800 rounded-xl p-6 space-y-6 text-sm text-gray-300">
        <p>The game takes place across 5 main islands and outer reef zones. Use your boat's Sonar Radar to avoid shallow sandbars.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-ocean-950 p-4 rounded-lg border border-ocean-800">
            <h3 className="font-bold text-white text-base mb-1">1. Starter Island (Lighthouse)</h3>
            <p className="text-xs text-gray-400">Safe harbor with shopkeeper NPC, clam beaches, and the Spider Crab tidepool.</p>
          </div>
          <div className="bg-ocean-950 p-4 rounded-lg border border-ocean-800">
            <h3 className="font-bold text-white text-base mb-1">2. Coral Maze Lagoon</h3>
            <p className="text-xs text-gray-400">Home of the Colossal Pufferfish and high-tier tropical species.</p>
          </div>
          <div className="bg-ocean-950 p-4 rounded-lg border border-ocean-800">
            <h3 className="font-bold text-white text-base mb-1">3. Casino & Gachapon Atoll</h3>
            <p className="text-xs text-gray-400">Trade rare Drip creatures for cosmetic weapon wraps and boat customizations.</p>
          </div>
          <div className="bg-ocean-950 p-4 rounded-lg border border-ocean-800">
            <h3 className="font-bold text-white text-base mb-1">4. Mount Inferno Caldera</h3>
            <p className="text-xs text-gray-400">Volcanic crater lake housing the final Magma Whale titan.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
