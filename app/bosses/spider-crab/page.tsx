import Breadcrumb from '@/components/Breadcrumb';

export const metadata = {
  title: 'Giant Spider Crab Boss & Empty Beer Can Guide',
  description: 'How to summon and beat the Giant Spider Crab on starter lighthouse reef using the Empty Beer Can rage bait in How to Fish.',
};

export default function SpiderCrabPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      <Breadcrumb items={[{ name: 'Boss Battles', href: '/bosses/' }, { name: 'Spider Crab', href: '/bosses/spider-crab/' }]} />
      <h1 className="text-3xl font-extrabold text-white">Giant Spider Crab Boss Guide</h1>
      <div className="bg-ocean-900/80 border border-ocean-800 rounded-xl p-6 space-y-6 text-sm text-gray-300">
        <h2 className="text-xl font-bold text-white">Summoning with the Empty Beer Can</h2>
        <p>Buy a full beer from the tavern for $10, give it to the beach fisherman NPC, and cast the resulting empty can into the lighthouse tidepool.</p>
        <h2 className="text-xl font-bold text-white">Combat Strategy</h2>
        <p>Stay near the lighthouse pillar. Dodge the pincer dash and attack the exposed soft belly when it flips over.</p>
      </div>
    </div>
  );
}
