import Breadcrumb from '@/components/Breadcrumb';
import FishTable from '@/components/FishTable';

export const metadata = {
  title: 'All 49 Fish Database & Rarity List',
  description: 'Complete database of all fish in How to Fish. Search values, bait preferences, weather conditions, and locations.',
};

export default function FishPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      <Breadcrumb items={[{ name: 'Fish Database', href: '/fish/' }]} />
      <div>
        <h1 className="text-3xl font-extrabold text-white tracking-tight">All 49 Marine Species Database</h1>
        <p className="text-gray-400 text-xs mt-1">Interactive encyclopedia with search, rarity badges, sell pricing, and preferred baits.</p>
      </div>
      <FishTable />
    </div>
  );
}
