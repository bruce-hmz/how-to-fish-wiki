import Breadcrumb from '@/components/Breadcrumb';

export const metadata = {
  title: '1-4 Player Co-op & Multiplayer Guide',
  description: 'How to host and play 1-4 player co-op in How to Fish. Crew roles, boat controls, and boss scaling mechanics.',
};

export default function MultiplayerPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      <Breadcrumb items={[{ name: 'Co-op Guide', href: '/multiplayer/' }]} />
      <h1 className="text-3xl font-extrabold text-white">1-4 Player Co-op & Multiplayer Guide</h1>
      <div className="bg-ocean-900/80 border border-ocean-800 rounded-xl p-6 space-y-6 text-sm text-gray-300">
        <p>How to Fish shines in online co-op. Form a crew of up to 4 anglers to manage boat navigation, fish simultaneously, and defeat colossal bosses together.</p>
        <h2 className="text-xl font-bold text-white">Crew Roles & Tactics</h2>
        <ul className="list-disc pl-5 space-y-2 text-xs">
          <li><strong>The Captain</strong>: Steers the vessel, navigates currents, and maneuvers during boss attacks.</li>
          <li><strong>The Angler</strong>: Uses specialized lures to hook the boss and maintain tension.</li>
          <li><strong>The Gunner / Harpooner</strong>: Equips ranged weapons to stagger marine creatures when reeled close.</li>
        </ul>
      </div>
    </div>
  );
}
