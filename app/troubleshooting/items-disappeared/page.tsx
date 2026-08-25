import Breadcrumb from '@/components/Breadcrumb';
import Link from 'next/link';
import { FaqJsonLd } from '@/components/JsonLd';

export const metadata = {
  title: 'Fix: Items Disappeared After Loading',
  description: 'How to Fish fix for weapons, radar, boat, and quest items vanishing after a save, crash, or co-op disconnect — recover without overwriting your save.',
  alternates: { canonical: 'https://howtofish101.com/troubleshooting/items-disappeared/' },
};

const faqs = [
  { q: 'Why did my weapons disappear in How to Fish?', a: 'Most reports involve a crash, death, or co-op disconnect followed by a reload — the save written in that window can miss equipment state. It is a known issue family; Patch 1.0.9 reduced (not eliminated) occurrences.' },
  { q: 'Can I get lost items back?', a: 'Sometimes. If the loss happened this session, immediately close the game normally and restore the last backup of the save folder. If you already saved over it, the items are gone — prevention (manual save before milestones) is the reliable strategy.' },
  { q: 'Are quest drops like the Giant Piranha Skeleton safe?', a: 'Quest items can vanish with the same bug. Never hand in, sell, or discard a boss trophy or unusual drop — check your active objective first. If it is gone, our boss guides list the re-fight route for each summon item.' },
];

export default function ItemsDisappearedPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8 text-sm text-gray-300">
      <FaqJsonLd faqs={faqs} />
      <Breadcrumb items={[{ name: 'Troubleshooting', href: '/troubleshooting/' }, { name: 'Items Disappeared', href: '/troubleshooting/items-disappeared/' }]} />
      <h1 className="text-3xl font-extrabold text-white">Items or Weapons Disappeared After Loading</h1>

      <div className="bg-ocean-900/80 border border-ocean-800 rounded-xl p-6 space-y-6">
        <h2 className="text-xl font-bold text-white">First: Stop Saving Immediately</h2>
        <p>
          Every additional save can overwrite the last state that still contained your gear. Close the game
          normally (Main Menu → Quit), then copy the entire
          <code className="bg-ocean-950 px-1.5 py-0.5 rounded text-aqua text-xs mx-1">LocalLow/DazedGames/HowToFish</code>
          folder somewhere safe <em>before</em> trying any workaround. This one habit separates recoverable
          losses from permanent ones.
        </p>

        <h2 className="text-xl font-bold text-white">Identify Your Symptom</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
          <div className="bg-ocean-950 p-4 rounded-lg border border-ocean-800">
            <strong className="text-white block mb-2">Only equipment is missing</strong>
            <p className="text-gray-400">Weapons, radar, or boat gone but the save slot looks normal. Compare against your last backup; the loss is usually a write during a crash window.</p>
          </div>
          <div className="bg-ocean-950 p-4 rounded-lg border border-ocean-800">
            <strong className="text-white block mb-2">Save slot is missing or generic</strong>
            <p className="text-gray-400">The slot itself regressed. Do not start a new game on top of it — restore a backup of the whole folder instead.</p>
          </div>
          <div className="bg-ocean-950 p-4 rounded-lg border border-ocean-800">
            <strong className="text-white block mb-2">Loss after death or disconnect</strong>
            <p className="text-gray-400">Note whether it was solo or co-op. Co-op host migrations are a distinct report category — the host's save usually wins.</p>
          </div>
          <div className="bg-ocean-950 p-4 rounded-lg border border-ocean-800">
            <strong className="text-white block mb-2">A quest or boss item vanished</strong>
            <p className="text-gray-400">Check the active objective before assuming loss — some hand-ins consume the item by design. If consumed by a bug, re-fight the boss for a fresh drop.</p>
          </div>
        </div>

        <h2 className="text-xl font-bold text-white">The Recovery Order</h2>
        <ol className="list-decimal pl-5 space-y-2 text-xs">
          <li>Exit without loading and saving again.</li>
          <li>Back up the save folder (see the <Link href="/troubleshooting/save-file/" className="text-aqua hover:underline">save bug guide</Link> for paths).</li>
          <li>Check whether the item is a quest hand-in — the objective text tells you if it was consumed on purpose.</li>
          <li>Restore the most recent backup from before the loss, and test on the copy first.</li>
          <li>Only re-earn what is unrecoverable: boss re-fight routes are in each <Link href="/bosses/" className="text-aqua hover:underline">boss guide</Link>.</li>
        </ol>

        <h2 className="text-xl font-bold text-white">Reduce Repeat Losses</h2>
        <p className="text-xs leading-relaxed">
          Manual save + quit before milestones (boss kills, hand-ins, big purchases). In co-op, let the host
          be the save authority. After any crash, resist the urge to &ldquo;quickly check&rdquo; your gear —
          back up first. And keep two rotating backups instead of one, so a silent corruption never costs
          you everything.
        </p>
      </div>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white">Lost Items FAQ</h2>
        <div className="bg-ocean-900/70 border border-ocean-800 rounded-xl p-6 space-y-5">
          {faqs.map((item) => (
            <div key={item.q} className="border-b border-ocean-800 pb-4 last:border-0 last:pb-0">
              <h3 className="text-white font-semibold mb-2 text-sm">{item.q}</h3>
              <p className="text-xs text-gray-400 leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
