import Breadcrumb from '@/components/Breadcrumb';
import Link from 'next/link';

export const metadata = {
  title: 'Troubleshooting: Saves, Items & Co-op',
  description: 'Fixes for common How to Fish problems: corrupted saves, items disappearing after loading, join black screens, and stuck progression after boss kills.',
  alternates: { canonical: 'https://howtofish101.com/troubleshooting/' },
};

const issues = [
  {
    href: '/troubleshooting/error-0x11c7/',
    icon: '🛡️',
    title: 'Error 0x11C7 — Game Will Not Launch',
    desc: 'Windows Smart App Control blocks the game exe before it starts. Verify files, reboot, and only then touch the security setting.',
  },
  {
    href: '/troubleshooting/save-file/',
    icon: '💾',
    title: 'Save Files: Location, Backups & Recovery',
    desc: 'Exact save folder paths for Windows and Steam Deck, a timestamped backup script, rollback steps, and what Patches 1.0.4–1.0.9 actually changed about saving.',
  },
  {
    href: '/troubleshooting/items-disappeared/',
    icon: '🎒',
    title: 'Items or Weapons Disappeared',
    desc: 'Weapons, boat, radar, or quest drops gone after a crash, death, or disconnect. The safe recovery order — and why you should stop saving immediately.',
  },
  {
    href: '/troubleshooting/cooked-weapons/',
    icon: '🔥',
    title: 'Burned (Cooked) Weapons & Gear',
    desc: 'Guns and rods char like fish near grills and lava, and skins stop applying. No official un-cook button as of Patch 1.0.9 — the community Cookness save fix, step by step.',
  },
  {
    href: '/troubleshooting/join-friends/',
    icon: '👥',
    title: 'Cannot Join Friends / Black Screen',
    desc: 'The ordered fix list that clears most join failures, plus session types since 1.0.5 and the new 1.0.9 relay readout.',
  },
  {
    href: '/troubleshooting/fish-not-biting/',
    icon: '🎣',
    title: 'Fish Not Biting?',
    desc: 'The regular rod only catches while you reel in slowly — the number-one cause behind “bait stopped working” reports, plus bait-tier checks.',
  },
  {
    href: '/troubleshooting/performance-stutter/',
    icon: '📈',
    title: 'Stuttering & 100% GPU?',
    desc: 'The in-game FPS limiter is unreliable — cap frames in your GPU driver instead. Tearing fixes, the 4090 stutter reports, and update-era checklists.',
  },
  {
    href: '/troubleshooting/what-to-do-next/',
    icon: '🧭',
    title: 'What Should I Do Next?',
    desc: 'Progression troubleshooter by game state: still on Island 1, cannot find Island 2 or 3, or defeated a boss and nothing changed.',
  },
];

export default function TroubleshootingPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      <Breadcrumb items={[{ name: 'Troubleshooting', href: '/troubleshooting/' }]} />
      <div>
        <h1 className="text-3xl font-extrabold text-white tracking-tight">How to Fish Troubleshooting</h1>
        <p className="text-gray-400 text-xs mt-2 leading-relaxed">
          Community-reported problems with official patch context. Every fix below starts by protecting your
          save data, because most losses in How to Fish get worse when players keep saving over them.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {issues.map((issue) => (
          <Link
            key={issue.href}
            href={issue.href}
            className="bg-ocean-900 border border-ocean-800 rounded-xl p-6 hover:border-aqua/50 transition-all group"
          >
            <div className="text-3xl mb-3">{issue.icon}</div>
            <h2 className="text-lg font-bold text-white group-hover:text-aqua transition-colors">{issue.title}</h2>
            <p className="text-xs text-gray-400 leading-relaxed mt-2">{issue.desc}</p>
          </Link>
        ))}
      </div>

      <div className="bg-ocean-900/80 border border-ocean-800 rounded-xl p-6 space-y-4 text-sm text-gray-300">
        <h2 className="text-xl font-bold text-white border-b border-ocean-800 pb-2">The Golden Rule for Every Bug</h2>
        <p>
          <strong>Stop creating new saves first.</strong> Close the game normally if possible, back up the
          entire save folder, and only then try a workaround. How to Fish writes saves on manual
          <em> Save</em>, <em>Main Menu</em>, <em>Quit</em>, and via an autosave roughly every minute — a crash
          does <strong>not</strong> create a fresh save, but reloading and re-saving repeatedly can overwrite
          the last good state. On Windows the save lives in
          <code className="bg-ocean-950 px-1.5 py-0.5 rounded text-aqua text-xs ml-1">%userprofile%\AppData\LocalLow\Dazed Games\How to Fish\Saves</code>.
        </p>
        <p className="text-xs text-gray-400">
          Patch context: 1.0.6 set the current save rules, 1.0.9 attempted a corruption fix, and 1.0.10 started writing dropped ground items into the save (up to 64). Player reports
          of missing equipment still appear after reconnects and deaths, so prevention beats recovery.
        </p>
      </div>
    </div>
  );
}
