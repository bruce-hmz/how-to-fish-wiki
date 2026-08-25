import Breadcrumb from '@/components/Breadcrumb';

export const metadata = {
  title: 'Rare Drip Fish & Casino Gachapon Guide',
  description: 'Where to find rare glowing Drip Fish in How to Fish, how to use them in the Casino capsule machine, and unlock legendary weapon skins.',
  alternates: { canonical: 'https://howtofish101.com/fish/drip-fish/' },
  openGraph: {
    title: 'Rare Drip Fish & Casino Gachapon Guide',
    description: 'Where to find rare glowing Drip Fish in How to Fish, how to use them in the Casino capsule machine, and unlock legendary weapon skins.',
    url: 'https://howtofish101.com/fish/drip-fish/',
  },
};

export default function DripFishPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      <Breadcrumb items={[{ name: 'Fish Database', href: '/fish/' }, { name: 'Drip Fish Guide', href: '/fish/drip-fish/' }]} />
      <h1 className="text-3xl font-extrabold text-white">Rare Drip Fish & Casino Gachapon Guide</h1>
      <div className="bg-ocean-900/80 border border-ocean-800 rounded-xl p-6 space-y-6 text-sm text-gray-300">
        <div className="bg-cyan-950/60 border border-cyan-500/40 rounded-lg p-4">
          <h3 className="font-bold text-cyan-300 mb-1">What is a Drip Creature?</h3>
          <p className="text-xs text-gray-300">Drip creatures are iridescent blue glowing variants of normal fish and crabs. They have a ~3% natural spawn rate during rain and thunderstorms, making them one of the rarest catch categories in the game. Unlike Legendary fish, Drip variants can appear on ANY species — from common Clams to the elusive Magma Eel.</p>
        </div>

        <h2 className="text-xl font-bold text-white">Drip Fish Spawn Conditions</h2>
        <ul className="list-disc pl-5 space-y-2 text-xs">
          <li><strong>Time requirement</strong>: Drip creatures only spawn between 8 PM and 4 AM in-game time (nighttime window)</li>
          <li><strong>Weather requirement</strong>: Rain or thunderstorm active — clear weather has 0% Drip spawn rate</li>
          <li><strong>Location bonus</strong>: Hydrothermal vents and deep-water zones have a 2x Drip spawn multiplier</li>
          <li><strong>Bait influence</strong>: Beer Bait and Rainbow Lure increase Drip odds by roughly 40%</li>
        </ul>

        <h2 className="text-xl font-bold text-white">Where to Catch Drip Fish</h2>
        <p>Head to the volcanic hydrothermal vents at coordinates (X: 420, Y: -180). Use Beer or Rainbow Lure during rainy weather. The Coral Maze Lagoon at night during storms is another hotspot — both zones consistently produce Drip catches for patient anglers.</p>

        <h2 className="text-xl font-bold text-white">All Drip Fish Variants</h2>
        <p>Every species in the logbook has a Drip variant. The most sought-after include:</p>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-ocean-950 text-gray-400 border-b border-ocean-800">
              <tr><th className="p-3">Drip Variant</th><th className="p-3">Base Species</th><th className="p-3">Gachapon Value</th><th className="p-3">Best Location</th></tr>
            </thead>
            <tbody className="divide-y divide-ocean-800">
              <tr><td className="p-3 text-cyan-300 font-semibold">Drip Crab</td><td className="p-3">Rock Crab</td><td className="p-3">Low tier</td><td className="p-3">Starter Island tidepools</td></tr>
              <tr><td className="p-3 text-cyan-300 font-semibold">Drip Eel</td><td className="p-3">Magma Eel</td><td className="p-3">High tier</td><td className="p-3">Volcanic Trench</td></tr>
              <tr><td className="p-3 text-cyan-300 font-semibold">Drip Bass</td><td className="p-3">Striped Bass</td><td className="p-3">Mid tier</td><td className="p-3">Coral Reef Atoll</td></tr>
              <tr><td className="p-3 text-cyan-300 font-semibold">Drip Pufferfish</td><td className="p-3">Spiky Pufferfish</td><td className="p-3">High tier</td><td className="p-3">Coral Maze Lagoon</td></tr>
              <tr><td className="p-3 text-cyan-300 font-semibold">Drip Whale</td><td className="p-3">Magma Whale (rare)</td><td className="p-3">Legendary tier</td><td className="p-3">Deep Trench</td></tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-xl font-bold text-white">The Casino Island Gachapon Machine</h2>
        <p>Do NOT sell Drip fish for cash ($5–$250). Take them to Casino Island and feed them into the capsule machine to win exclusive Knuckle skins, Golden Rod handles, and Boat neon trims.</p>

        <h3 className="font-bold text-white pt-2">How the Gachapon Works</h3>
        <p>The capsule machine consumes one Drip creature per spin. The reward tier depends on the base species rarity:</p>
        <ul className="list-disc pl-5 space-y-2 text-xs">
          <li><strong>Common Drip (Crab, Clam)</strong>: Basic Knuckle skin colors, 10% boat trim chance</li>
          <li><strong>Uncommon Drip (Bass, Snapper)</strong>: Metallic rod handles, 25% neon trim chance</li>
          <li><strong>Rare Drip (Eel, Pufferfish)</strong>: Animated skin effects, 50% neon trim chance</li>
          <li><strong>Legendary Drip (Whale, Kraken)</strong>: Golden Rod full skin, guaranteed neon trim + exclusive title</li>
        </ul>

        <h3 className="font-bold text-white pt-2">Reward Tier Strategy</h3>
        <p>Save your high-tier Drip creatures for double-reward weekends (in-game Saturday/Sunday). The Gachapon has a hidden pity system: after 20 spins without a Legendary reward, the next spin guarantees at least a Rare tier item.</p>
      </div>
    </div>
  );
}
