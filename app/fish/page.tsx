import Breadcrumb from '@/components/Breadcrumb';
import FishTable from '@/components/FishTable';

export const metadata = {
  title: 'All 49 Fish Database & Rarity List',
  description: 'Complete database of all fish in How to Fish. Search values, bait preferences, weather conditions, and locations.',
  alternates: { canonical: 'https://howtofish101.com/fish/' },
};

export default function FishPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      <Breadcrumb items={[{ name: 'Fish Database', href: '/fish/' }]} />
      <div>
        <h1 className="text-3xl font-extrabold text-white tracking-tight">All 49 Marine Species Database</h1>
        <p className="text-gray-400 text-xs mt-1">Interactive encyclopedia with search, rarity badges, sell pricing, and preferred baits.</p>
      </div>
      <div className="bg-ocean-900/80 border border-ocean-800 rounded-xl p-6 space-y-3 text-sm text-gray-300">
        <p>
          The logbook in How to Fish tracks 49 unique marine species across six rarity tiers: Common, Uncommon,
          Rare, Epic, Legendary, and Drip. Every species has its own sell value, preferred bait, habitat, and
          weather window — this database consolidates all of them into one searchable table so you can complete
          your collection faster.
        </p>
        <p>
          Filter by rarity to plan money-making runs, or search by name to check where a specific catch spawns.
          High-value species such as the Golden Seahorse and Magma Eel only appear under strict conditions, so
          cross-check the weather column before you cast. Drip variants can roll on any species during night
          storms — see the Drip Fish guide for the full spawn rules and gachapon rewards.
        </p>
      </div>
      <FishTable />
    </div>
  );
}
