import Breadcrumb from '@/components/Breadcrumb';
import Link from 'next/link';

export const metadata = {
  title: 'Beginner Walkthrough & Early Game Guide',
  description: 'Step-by-step beginner guide for How to Fish. Master casting, starter island survival, crab farming, and knife upgrades.',
};

export default function GuidePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      <Breadcrumb items={[{ name: 'Beginner Guide', href: '/guide/' }]} />
      
      <div className="space-y-4">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          How to Fish: <span className="text-aqua">Beginner Walkthrough & Survival Guide</span>
        </h1>
        <p className="text-gray-300 text-sm leading-relaxed">
          After crashing your boat onto the starter archipelago, you have no keys, no rod, and an empty stomach. Follow this step-by-step checklist to survive, make your first $500, and unlock the open sea.
        </p>
      </div>

      <div className="bg-ocean-900/80 border border-ocean-800 rounded-xl p-6 space-y-6 text-sm text-gray-300">
        <h2 className="text-xl font-bold text-white border-b border-ocean-800 pb-2">1. The Hunger & Starter Clam Loop</h2>
        <p>
          Your character starts starving. Look down at the beach sand and press <kbd className="bg-ocean-950 px-2 py-0.5 rounded text-aqua font-mono border border-ocean-700">E</kbd> to pick up Clams.
          Hold <kbd className="bg-ocean-950 px-2 py-0.5 rounded text-aqua font-mono border border-ocean-700">Left Mouse Button</kbd> to eat raw clams and refill your hunger meter. Sell extra clams to the merchant NPC to make your first dollar.
        </p>

        <h2 className="text-xl font-bold text-white border-b border-ocean-800 pb-2">2. Purchasing the Crab Fishing Rod</h2>
        <p>
          Once you have $2, visit the beach kiosk and buy the <strong>Crab Fishing Rod</strong>. Stand at the shoreline, hold Right Click to cast bait into the tidepools, and Left Click to reel when a crab bites.
        </p>

        <h2 className="text-xl font-bold text-white border-b border-ocean-800 pb-2">3. Subduing Catches with Knuckles & Knife</h2>
        <p>
          When you reel a creature in, press <kbd className="bg-ocean-950 px-2 py-0.5 rounded text-aqua font-mono border border-ocean-700">X</kbd> to unequip your rod and start punching it with Brass Knuckles. Buy the Knife as soon as possible ($45) to dispatch larger aggressive catches without taking damage.
        </p>

        <h2 className="text-xl font-bold text-white border-b border-ocean-800 pb-2">4. Early Game Cash Optimization</h2>
        <ul className="list-disc pl-5 space-y-2 text-xs text-gray-300">
          <li><strong>Hot Dogs ($5 bait)</strong>: Attracts Striped Bass and Snappers worth $18 $25 each.</li>
          <li><strong>Inspect Items (Key F)</strong>: Check creature market values before selling.</li>
          <li><strong>Drip Creatures</strong>: NEVER sell blue glowing Drip Crabs to the shop; save them for the Casino Gachapon machine.</li>
        </ul>
      </div>
    </div>
  );
}
