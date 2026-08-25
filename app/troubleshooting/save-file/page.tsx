import Breadcrumb from '@/components/Breadcrumb';
import Link from 'next/link';

export const metadata = {
  title: 'Save Bug Fix: Corruption, Autosave & Lost Progress',
  description: 'How to Fish save bug explained: what Patch 1.0.9 actually fixed, the Patch 1.0.6 save rules, where saves live, and the safe recovery order when weapons or progress disappear.',
  alternates: { canonical: 'https://howtofish101.com/troubleshooting/save-file/' },
  openGraph: {
    title: 'How to Fish Save Bug Fix: Corruption, Autosave & Lost Progress',
    description: 'What Patch 1.0.9 actually fixed, the Patch 1.0.6 save rules, where saves live, and the safe recovery order when weapons or progress disappear.',
    url: 'https://howtofish101.com/troubleshooting/save-file/',
  },
};

export default function SaveFilePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8 text-sm text-gray-300">
      <Breadcrumb items={[{ name: 'Troubleshooting', href: '/troubleshooting/' }, { name: 'Save File Bug', href: '/troubleshooting/save-file/' }]} />
      <h1 className="text-3xl font-extrabold text-white">Save Bug: Corruption, Autosave &amp; Lost Progress</h1>

      <div className="bg-ocean-900/80 border border-ocean-800 rounded-xl p-6 space-y-6">
        <h2 className="text-xl font-bold text-white">What Patch 1.0.9 Actually Fixed</h2>
        <p>
          The 1.0.9 patch notes say save-file corruption is <em>&ldquo;hopefully fixed&rdquo;</em> — that
          wording matters. It is a <strong>prevention fix</strong>, not a recovery guarantee. New saves are
          far less likely to corrupt, but the patch does not retroactively repair an already-broken file or
          reconstruct equipment that vanished before you updated. Player reports of gear disappearing after
          reconnects and deaths still appear on current builds.
        </p>

        <h2 className="text-xl font-bold text-white">The Patch 1.0.6 Save Rules (Still Current)</h2>
        <ul className="list-disc pl-5 space-y-2 text-xs">
          <li>Saving happens on <strong>manual Save</strong>, returning to the <strong>Main Menu</strong>, and on <strong>Quit</strong>.</li>
          <li><strong>Autosave runs roughly every 60 seconds</strong> during normal play.</li>
          <li>A <strong>crash does not create a fresh save</strong> — your last written state survives.</li>
          <li>Corollary: reloading and re-saving repeatedly after a loss can overwrite the last good state.</li>
        </ul>

        <h2 className="text-xl font-bold text-white">Where Saves Live</h2>
        <div className="bg-ocean-950 p-4 rounded-lg text-xs space-y-2">
          <p><strong className="text-white">Windows:</strong></p>
          <code className="text-aqua break-all">C:\Users\[username]\AppData\LocalLow\DazedGames\HowToFish</code>
          <p className="pt-2"><strong className="text-white">Steam Deck / Linux (Proton):</strong></p>
          <code className="text-aqua break-all">~/.steam/steam/steamapps/compatdata/4001890/pfx/drive_c/users/steamuser/AppData/LocalLow/DazedGames/HowToFish</code>
        </div>

        <h2 className="text-xl font-bold text-white">The Safe Recovery Order</h2>
        <ol className="list-decimal pl-5 space-y-2 text-xs">
          <li><strong>Stop saving.</strong> Do not load, re-save, or &ldquo;quickly test&rdquo; fixes in-game.</li>
          <li><strong>Close the game normally</strong> (Main Menu → Quit) if it is still running.</li>
          <li><strong>Copy the entire save folder</strong> to a safe location before touching anything.</li>
          <li><strong>Verify game files</strong> in Steam (Properties → Installed Files → Verify) to rule out a bad install.</li>
          <li><strong>Test on a copy, never the original</strong> — if a workaround writes junk into the file, your backup is still clean.</li>
        </ol>

        <h2 className="text-xl font-bold text-white">Prevention Habits</h2>
        <p className="text-xs leading-relaxed">
          Before big milestones — boss kills, quest hand-ins, boat upgrades — use a manual save and quit to
          desktop. That gives you a clean restore point that no autosave loop can overwrite. If you play
          co-op, agree with your crew on who saves and when; mid-session crashes are the most common
          corruption vector players report.
        </p>

        <p className="text-xs text-gray-400 border-l-2 border-coral/60 pl-3">
          If weapons, radar, or boat parts are already missing, switch to our
          <Link href="/troubleshooting/items-disappeared/" className="text-aqua hover:underline"> items disappeared guide</Link> —
          the recovery flow there protects quest drops too.
        </p>
      </div>
    </div>
  );
}
