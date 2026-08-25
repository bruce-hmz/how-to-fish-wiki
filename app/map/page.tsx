import Breadcrumb from '@/components/Breadcrumb';

export const metadata = {
  title: 'Archipelago Interactive Map & Hotspots',
  description: 'Complete map of How to Fish archipelago. Coordinates for all islands, merchant docks, boat repair bays, and secret deep trenches.',
  alternates: { canonical: 'https://howtofish101.com/map/' },
  openGraph: {
    title: 'Archipelago Interactive Map & Hotspots',
    description: 'Complete map of How to Fish archipelago. Coordinates for all islands, merchant docks, boat repair bays, and secret deep trenches.',
    url: 'https://howtofish101.com/map/',
  },
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
          <div className="bg-ocean-950 p-4 rounded-lg border border-ocean-800">
            <h3 className="font-bold text-white text-base mb-1">5. Coral Reef Atoll</h3>
            <p className="text-xs text-gray-400">A ring-shaped reef surrounding a shallow turquoise lagoon. Home to tropical species like Parrot Wrasse, Clownfish, and the rare Golden Seahorse. The atoll has an underwater cave system accessible by diving — inside you will find the Coral Merchant who sells the Rainbow Lure and unique cosmetic shell accessories.</p>
          </div>
          <div className="bg-ocean-950 p-4 rounded-lg border border-ocean-800">
            <h3 className="font-bold text-white text-base mb-1">6. Volcanic Trench</h3>
            <p className="text-xs text-gray-400">A deep oceanic rift south of Mount Inferno where superheated water glows orange. Requires Heat-Shielded Hull to survive. Contains Magma Eels, Lava Carp, and the Obsidian Shards needed for the Volcano Core boss bait. Depth reaches 800 meters — the deepest point in the game.</p>
          </div>
          <div className="bg-ocean-950 p-4 rounded-lg border border-ocean-800">
            <h3 className="font-bold text-white text-base mb-1">7. Mangrove Swamp</h3>
            <p className="text-xs text-gray-400">A dense tidal wetland east of Casino Island with tangled root systems and murky water. Visibility is low, making navigation tricky. Unique catches include Mudskipper, Swamp Eel, and the elusive Ghost Catfish. The swamp also hides a secret NPC vendor who sells Lantern Bait at a 50% discount.</p>
          </div>
        </div>

        <h2 className="text-xl font-bold text-white border-b border-ocean-800 pb-2">Navigation Tips</h2>
        <ul className="list-disc pl-5 space-y-2 text-xs text-gray-300">
          <li><strong>Sonar Radar</strong>: Purchased as a Tier 2 boat upgrade ($750). Reveals underwater fish swarm shadows, depth contours, and sandbar locations on your minimap. Essential for finding deep-water fishing hotspots and avoiding hull damage from shallow obstacles.</li>
          <li><strong>Compass HUD</strong>: Always enabled in the top-center of your screen. Islands are marked with icons once discovered. Use compass bearings when navigating in fog or storms when visibility drops to near zero.</li>
          <li><strong>Avoiding Sandbars</strong>: Shallow sandbars are invisible without Sonar and will ground your boat for 10 seconds if you hit one. During this time, aggressive fish can attack freely. Stick to marked channels between islands or use the Sonar overlay to spot them.</li>
          <li><strong>Current Channels</strong>: Certain water lanes between islands have strong currents that boost or slow your boat speed. Ride favorable currents (shown as blue arrows on the Sonar map) to save fuel on long journeys.</li>
        </ul>

        <h2 className="text-xl font-bold text-white border-b border-ocean-800 pb-2">Secret Locations & Hidden Caves</h2>
        <p>
          The archipelago is full of hidden caves and secret areas that do not appear on any map. Finding them rewards rare items, unique fish, and NPC encounters:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-xs text-gray-300">
          <li><strong>Lighthouse Basement</strong>: Dive beneath the starter island lighthouse to find a flooded basement with a treasure chest containing the Brass Knuckle upgrade (doubles punch damage).</li>
          <li><strong>Coral Cave Network</strong>: Enter through a narrow gap on the east wall of the Coral Maze Lagoon. Inside is a luminescent cavern with exclusive Glowfin Tuna and a Pearl Merchant who buys fish at 2x normal price.</li>
          <li><strong>Sunken Ship Graveyard</strong>: Located at coordinates (X: 650, Y: -300) in the open ocean between Casino Island and Mount Inferno. Dive down to find 3 wrecked ships, each containing a treasure chest with random loot including rare weapon skins and Drip Fish eggs.</li>
          <li><strong>Hermit Island</strong>: A tiny unmarked island at the map edge (X: 999, Y: 100). A single NPC hermit lives here and sells the Golden Minnow bait — the only bait that guarantees legendary fish catches.</li>
        </ul>

        <h2 className="text-xl font-bold text-white border-b border-ocean-800 pb-2">Weather-Dependent Accessibility</h2>
        <p>
          Some areas are only accessible during certain weather conditions. The <strong>Mangrove Swamp</strong> floods during rain, opening deeper channels that let you reach the inner swamp where Ghost Catfish spawn. During storms, the <strong>Volcanic Trench</strong> erupts with new lava vents that reveal hidden Obsidian Shard deposits. The <strong>Sunken Ship Graveyard</strong> only becomes visible during low tide events (occur every 3rd in-game day), when the water level drops enough to expose the ship masts above the surface. Plan your exploration around the weather cycle for maximum discovery.
        </p>
      </div>
    </div>
  );
}
