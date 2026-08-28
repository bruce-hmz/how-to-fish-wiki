import Breadcrumb from '@/components/Breadcrumb';
import Link from 'next/link';
import { ArticleJsonLd, FaqJsonLd } from '@/components/JsonLd';
import Sources from '@/components/Sources';

export const metadata = {
  title: 'Fix: Items & Weapons Disappeared — Triage and Recovery',
  description: 'Weapons, radar, or quest items vanished in How to Fish? Triage your loss type first — burned vs despawned vs physically flung — then follow the recovery ladder and patch-by-patch loss table without overwriting your save.',
  alternates: { canonical: 'https://howtofish101.com/troubleshooting/items-disappeared/' },
};

const faqs = [
  {
    q: 'Why did my weapons disappear in How to Fish?',
    a: 'Most reports involve a crash, death, co-op disconnect, or a game update followed by a reload — the save written in that window can miss equipment state. Patch 1.0.4 stopped server-name corruption, Patch 1.0.6 made crashes stop writing saves entirely, and Patch 1.0.9 added another anti-corruption pass, yet post-update wipes and reload losses still appear in community threads on current builds.'
  },
  {
    q: 'Can I get lost items back?',
    a: 'Sometimes — the deciding factor is whether a copy of the save folder exists from before the loss. Close the game normally, copy the folder, then restore the most recent backup and test once. Without any backup, physics-flung gear may still be findable in the world (check near where you died), but save-state losses are unrecoverable and re-earning is the only path.'
  },
  {
    q: 'Are quest drops like the Giant Piranha skeleton safe to hand in?',
    a: 'Hand-in objectives consume the item by design, so an empty pocket after turning something in is usually correct — check the active objective text before assuming a bug. What you should never do is sell or discard a boss trophy or unusual drop preemptively: several progression chains ask for them much later.'
  },
  {
    q: 'Do updates really wipe inventories?',
    a: 'There are credible reports: crews describe losing fully upgraded weapons on the volcano island right after an update and grinding to re-earn them. The habit that survives update days is boring — back up the save folder the moment a patch finishes downloading, before launching the game.'
  },
];


export default function ItemsDisappearedPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8 text-sm text-gray-300">
      <ArticleJsonLd
        headline="Fix: Items & Weapons Disappeared — Triage and Recovery"
        description="Triage burned vs despawned vs physically flung gear in How to Fish, then follow the recovery ladder and patch-by-patch loss table."
        url="https://howtofish101.com/troubleshooting/items-disappeared/"
        datePublished="2026-08-27"
        dateModified="2026-08-28"
      />
      <FaqJsonLd faqs={faqs} />
      <Breadcrumb items={[{ name: 'Troubleshooting', href: '/troubleshooting/' }, { name: 'Items Disappeared', href: '/troubleshooting/items-disappeared/' }]} />
      <h1 className="text-3xl font-extrabold text-white">Items or Weapons Disappeared After Loading</h1>
      <p className="text-xs text-gray-500 -mt-4">Last verified August 28, 2026 · Game version 1.0.10</p>

      <div className="bg-coral/10 border border-coral/40 rounded-xl p-5 space-y-2">
        <p className="font-bold text-white text-sm">Before anything else:</p>
        <ol className="list-decimal list-inside space-y-1 text-xs">
          <li><strong className="text-white">Stop loading and saving.</strong> Every new write can bury the last state that still had your gear.</li>
          <li><strong className="text-white">Close through Main Menu → Quit</strong>, not alt-F4.</li>
          <li><strong className="text-white">Copy the whole save folder</strong> — paths and script are in the{' '}<Link href="/troubleshooting/save-file/" className="text-aqua hover:underline">save file location guide</Link>.</li>
        </ol>
      </div>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white">Step 1 — Name Your Loss</h2>
        <p className="text-xs text-gray-400 leading-relaxed">
          “My items disappeared” covers three very different problems in this game, and each has its own best move:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
          <div className="bg-ocean-950 p-4 rounded-lg border border-coral/40">
            <strong className="text-white block mb-2">🔥 It’s there, just charred</strong>
            <p className="text-gray-400 mb-2">Blackened gun or rod, skins refuse to apply. Nothing was lost — the item carries a burn state.</p>
            <Link href="/troubleshooting/cooked-weapons/" className="text-aqua hover:underline">Un-cook it →</Link>
          </div>
          <div className="bg-ocean-950 p-4 rounded-lg border border-ocean-700">
            <strong className="text-white block mb-2">🪨 It flew somewhere physical</strong>
            <p className="text-gray-400 mb-2">Explosions and even seagulls have sent weapons sailing across the map. Since Patch 1.0.10, up to 64 ground items persist in saves — go look before saving again. Older builds despawn them on save/load.</p>
            <span className="text-gray-500">See Step 3 checks below</span>
          </div>
          <div className="bg-ocean-950 p-4 rounded-lg border border-aqua/40">
            <strong className="text-white block mb-2">💾 It’s gone from the save itself</strong>
            <p className="text-gray-400 mb-2">Missing after a reload, disconnect, or game update. This is a save-state loss — the recovery ladder below is your path.</p>
            <a href="#recovery-ladder" className="text-aqua hover:underline">Jump to recovery →</a>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white">Step 2 — Known Loss Patterns by Patch Era</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse bg-ocean-900/70 rounded-xl overflow-hidden">
            <thead className="bg-ocean-950/90 text-gray-400 uppercase border-b border-ocean-800">
              <tr>
                <th className="px-3 py-2">Loss pattern</th>
                <th className="px-3 py-2">Status as of 1.0.10</th>
                <th className="px-3 py-2">Best move</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-ocean-800/60 align-top">
              <tr>
                <td className="px-3 py-2">Corrupt saves caused by special characters in server names</td>
                <td className="px-3 py-2 text-emerald-300">Fixed in 1.0.4</td>
                <td className="px-3 py-2">Keep server names plain and this vector stays closed.</td>
              </tr>
              <tr>
                <td className="px-3 py-2">A crash writing over your good save mid-session</td>
                <td className="px-3 py-2 text-emerald-300">Fixed in 1.0.6</td>
                <td className="px-3 py-2">Progress since the last completed save is lost by design now — treat controlled exits as armor.</td>
              </tr>
              <tr>
                <td className="px-3 py-2">Gear missing after reloading a working save</td>
                <td className="px-3 py-2 text-yellow-300">Reported all week, incl. post-fix builds</td>
                <td className="px-3 py-2">Restore pre-loss backup; otherwise re-earn. Report if reproducible.</td>
              </tr>
              <tr>
                <td className="px-3 py-2">Whole inventory wiped after downloading an update (“all our fully upgraded guns are gone”)</td>
                <td className="px-3 py-2 text-yellow-300">Launch-week reports, no official fix note</td>
                <td className="px-3 py-2">Backup on every patch day, then let others beta-test for an hour.</td>
              </tr>
              <tr>
                <td className="px-3 py-2">Ground-dropped items despawning after save/load cycles</td>
                <td className="px-3 py-2 text-emerald-300">Fixed in 1.0.10</td>
                <td className="px-3 py-2">Up to 64 ground items now persist, prioritizing weapons, tools, quest items and creatures. The cap is real — tidy big drop piles, since low-priority items still fall off.</td>
              </tr>
              <tr>
                <td className="px-3 py-2">Death during a boss run costing carried equipment (the Spider Crab knife loop)</td>
                <td className="px-3 py-2 text-red-300">Live by design/reports mixed</td>
                <td className="px-3 py-2">Boss guides list cheap re-buy routes per island — budget for them.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="recovery-ladder" className="space-y-4 scroll-mt-20">
        <h2 className="text-2xl font-bold text-white">Step 3 — The Recovery Ladder</h2>
        <ol className="list-decimal pl-5 space-y-3 bg-ocean-900/80 border border-ocean-800 rounded-xl p-6 text-xs leading-relaxed">
          <li><strong className="text-white">Confirm it’s really gone.</strong> Quest hand-ins consume drops by design — read the active objective first. Boats parked off-shore and chests/store inventories are separate from pocket inventory.</li>
          <li><strong className="text-white">Sweep the world before saving.</strong> If the loss involved physics — explosions, hills, birds making off with rods — search outward from where you last stood. Pre-1.0.10 builds autosaved the area empty and whatever lay there stopped existing; 1.0.10 now saves up to 64 ground items (prioritizing weapons, tools, quest items and creatures), so a sweep has a real chance of paying off.</li>
          <li><strong className="text-white">Restore from your most recent pre-loss backup</strong> using the rollback steps in the{' '}
            <Link href="/troubleshooting/save-file/" className="text-aqua hover:underline">save file guide</Link>. Keep today’s broken folder renamed alongside it; partial relapses happen.
          </li>
          <li><strong className="text-white">No backup?</strong> Verify game files in Steam once (Properties → Installed Files) to rule out an install fault, accept that save-state losses are final, and re-earn deliberately: boss summon chains are documented per boss, and quest hand-ins reset cleanly.</li>
          <li><strong className="text-white">Report reproducible patterns</strong> to the developers with your save attached if possible — the repeated update-wipe reports are what got earlier corruption fixes prioritized.</li>
        </ol>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white">Repeat-Loss Prevention</h2>
        <ul className="list-disc pl-5 space-y-2 text-sm text-gray-300">
          <li><strong className="text-white">Patch-day protocol:</strong> when Steam downloads an update, copy the save folder <em>before</em> pressing play.</li>
          <li><strong className="text-white">Milestone saves:</strong> manual Save → Main Menu after boss kills, purchases, and quest hand-ins.</li>
          <li><strong className="text-white">Two rotating backups</strong>, not one — a silently damaged file copied twice in a row shouldn’t erase both copies.</li>
          <li><strong className="text-white">Co-op:</strong> host owns the world state; guests rejoining have seen inventory roll backwards, so agree who triggers real saves.</li>
          <li><strong className="text-white">Hot-zone discipline:</strong> Patch 1.0.10 keeps up to 64 ground items in the save (prioritized: weapons, tools, quest items, creatures) — better, but the cap is real, so don’t treat the world as infinite storage, and keep nothing spare riding through Mount Inferno in your pockets.</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white">Lost Items FAQ</h2>
        <div className="bg-ocean-900/80 border border-ocean-800 rounded-xl divide-y divide-ocean-800/60 text-sm text-gray-300">
          {faqs.map((f) => (
            <div key={f.q} className="p-5 space-y-2">
              <h3 className="font-bold text-white">{f.q}</h3>
              <p>{f.a}</p>
            </div>
          ))}
        </div>
      </section>

      <Sources
        items={[
          { label: 'Official announcement: “FANART & PATCH 1.0.10” (Aug 27, 2026)', href: 'https://steamcommunity.com/games/4001890/announcements/detail/698774255287927073', note: 'source of ground-item persistence (up to 64) in the status column' },
          { label: 'Steam Discussion: “All equipment gone after update”', href: 'https://steamcommunity.com/app/4001890/discussions/0/582806239606623297/', note: 'post-update wipe reports referenced above' },
          { label: 'Steam Discussion: “Saved game and lost everything?”', href: 'https://steamcommunity.com/app/4001890/discussions/0/582805931178592050/', note: 'reload-loss pattern' },
          { label: 'Steam Discussion: “Seagull stole my rod?”', href: 'https://steamcommunity.com/app/4001890/discussions/0/582806523877558441/', note: 'the physical-loss pattern referenced above' },
          { label: 'Official patch notes feed (app 4001890)', href: 'https://store.steampowered.com/feeds/news/app/4001890/', note: 'basis of the status column above' },
        ]}
      />
    </div>
  );
}