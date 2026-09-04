import Breadcrumb from '@/components/Breadcrumb';
import Link from 'next/link';
import { ArticleJsonLd, FaqJsonLd } from '@/components/JsonLd';
import Sources from '@/components/Sources';

export const metadata = {
  title: 'Save File Location, Backups & Lost Progress Recovery',
  description: 'Exactly where How to Fish stores its save files on Windows and Steam Deck, a backup routine that takes 30 seconds, how to roll back an older save, and what Patches 1.0.4–1.0.12 actually changed about saving.',
  alternates: { canonical: 'https://howtofish101.com/troubleshooting/save-file/' },
};

const BAT_LINES = [
  'set STAMP=%DATE:/=-%_%TIME::=-%',
  'set STAMP=%STAMP: =0%',
  'xcopy "%USERPROFILE%\\AppData\\LocalLow\\Dazed Games\\How to Fish\\Saves" "%USERPROFILE%\\HowToFishBackups\\%STAMP%" /E /I /H /Y',
];

const faqs = [
  {
    q: 'Where are How to Fish save files located?',
    a: 'On Windows they live in the Saves folder under your AppData\\LocalLow profile: C:\\Users\\[username]\\AppData\\LocalLow\\Dazed Games\\How to Fish\\Saves. On Steam Deck or Linux through Proton, the same folder sits inside the game’s compatdata prefix: ~/.steam/steam/steamapps/compatdata/4001890/pfx/drive_c/users/steamuser/AppData/LocalLow/Dazed Games/How to Fish/Saves.'
  },
  {
    q: 'Can I go back to an older save?',
    a: 'Only if you made a copy yourself. Patch 1.0.11 added automatic backups in case a save becomes corrupt, but the developers have not documented where those backups are stored or how to restore one, so there is still no browsable version history: the game keeps its current state (with an autosave roughly every minute since Patch 1.0.6) and every new save overwrites it. Rollback therefore means closing the game and Steam, copying an older backup over the live folder, and launching again — which is why the backup habit matters so much in this game.'
  },
  {
    q: 'Does How to Fish have Steam Cloud backups?',
    a: 'Yes — as of Patch 1.0.12 (September 4, 2026) save files are stored through Steam Cloud. Per the official notes, you play and exit the game once on the PC that has your saves to upload them. Treat the cloud as a safety net for PC failures and reinstalls, not as a version history: there is still nothing to browse or roll back to, which is what the manual backup routine is for. And if Steam ever shows a sync-conflict prompt between a local and cloud copy, compare timestamps carefully and preserve both versions before choosing one.'
  },
  {
    q: 'My save will not load at all — what now?',
    a: 'Run the recovery order on this page: stop loading attempts, close the game normally, copy the entire folder, then verify game files in Steam and try once more. Patch 1.0.6 added a validation step before loading, and Patch 1.0.11 made that check permanent on every load (with backups kept when a file does turn out corrupt), which means badly damaged data is more likely to be refused than half-loaded — but it cannot repair the file. If the save still fails, report it to the developers and wait rather than deleting anything.'
  },
];

export default function SaveFilePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8 text-sm text-gray-300">
      <Breadcrumb items={[{ name: 'Troubleshooting', href: '/troubleshooting/' }, { name: 'Save File Bug', href: '/troubleshooting/save-file/' }]} />
      <ArticleJsonLd
        headline="How to Fish Saves: Location, Backups & Recovery"
        description="Where How to Fish stores saves on Windows and Steam Deck, a 30-second backup routine, rollback steps, and what every patch changed about saving."
        url="https://howtofish101.com/troubleshooting/save-file/"
        datePublished="2026-08-27"
        dateModified="2026-09-05"
      />
      <h1 className="text-3xl font-extrabold text-white">How to Fish Saves: Location, Backups &amp; Recovery</h1>
      <p className="text-xs text-gray-500 -mt-4">Last verified September 5, 2026 · Game version 1.0.12</p>

      <div className="bg-coral/10 border border-coral/40 rounded-xl p-5 space-y-2">
        <p className="font-bold text-white text-sm">If gear is missing right now, three rules first:</p>
        <ol className="list-decimal list-inside space-y-1 text-xs">
          <li><strong className="text-white">Stop loading and re-saving.</strong> Every new write can overwrite the last healthy copy.</li>
          <li><strong className="text-white">Close the game normally</strong> (Main Menu → Quit) instead of alt-F4.</li>
          <li><strong className="text-white">Copy the entire save folder</strong> somewhere safe before trying anything below.</li>
        </ol>
      </div>

      <div className="bg-cyan-950/60 border border-cyan-500/40 rounded-xl p-5 space-y-2">
        <p className="font-bold text-cyan-300 text-sm">Patch 1.0.11 (September 1, 2026) built the safety net players asked for:</p>
        <p className="text-xs leading-relaxed">
          Save files are now <strong className="text-white">always checked for corruption before loading</strong>, and the game
          now <strong className="text-white">keeps its own backups in case a save becomes corrupt</strong> — both verbatim from the
          official patch notes. Two honest limits before you rely on it: Dazed Games has not documented where those automatic
          backups are stored or how to browse and restore one, and a file that is already broken on an older build is not
          retroactively repaired by updating. The manual backup habit below remains the only recovery path you fully control.
        </p>
      </div>

      <div className="bg-cyan-950/60 border border-cyan-500/40 rounded-xl p-5 space-y-2">
        <p className="font-bold text-cyan-300 text-sm">Patch 1.0.12 (September 4, 2026) moved saves into Steam Cloud:</p>
        <p className="text-xs leading-relaxed">
          Verbatim from the official notes: <strong className="text-white">&ldquo;Save files are now stored through Steam Cloud.
          Play and exit How to Fish on the pc you&apos;ve saved them on once to upload them to the cloud.&rdquo;</strong> In practice:
          after updating, run the game and quit normally once, and your local saves upload to your Steam account — from then on
          they follow the account instead of living only in that one LocalLow folder. Two limits keep this from replacing the
          manual routine: the cloud holds your <em>current</em> saves, not a version history you can roll back through, and builds
          older than 1.0.12 have no cloud storage at all — so if you ever play an older version, your own backup copies are still
          the only safety net. Keep doing both.
        </p>
      </div>

      <div className="bg-ocean-900/80 border border-ocean-800 rounded-xl p-6 space-y-6">
        <h2 className="text-xl font-bold text-white">Where Your Saves Live</h2>
        <div className="bg-ocean-950 p-4 rounded-lg text-xs space-y-2">
          <p><strong className="text-white">Windows:</strong></p>
          <code className="text-aqua break-all">%USERPROFILE%\AppData\LocalLow\Dazed Games\How to Fish\Saves</code>
          <p className="pt-2"><strong className="text-white">Steam Deck / Linux (Proton):</strong></p>
          <code className="text-aqua break-all">~/.steam/steam/steamapps/compatdata/4001890/pfx/drive_c/users/steamuser/AppData/LocalLow/Dazed Games/How to Fish/Saves</code>
        </div>
        <ul className="list-disc pl-5 space-y-2 text-xs">
          <li>The fastest way there: press <strong>Win+R</strong>, paste <code className="text-aqua">%userprofile%\AppData\LocalLow</code>, hit Enter, and open the <em>Dazed Games</em> folder.</li>
          <li>If your install spells the folder differently, do not hunt blindly — make a fresh in-game save, then sort LocalLow by “Date modified” and open whatever changed seconds ago. A search for “Dazed” also covers spelling variants.</li>
          <li>Copy <strong>the whole folder</strong>, not individual files you think look important — until each file type is documented, keeping them together is the safe move.</li>
        </ul>

        <h2 className="text-xl font-bold text-white">A 30-Second Backup Habit</h2>
        <p className="text-xs leading-relaxed">
          Before boss fights, island jumps, or any co-op night, double-click a one-line script instead of trusting memory:
        </p>
        <div className="bg-ocean-950 p-4 rounded-lg text-xs space-y-2">
          <p><strong className="text-white">backup-how-to-fish.bat</strong></p>
          <code className="block whitespace-pre-wrap text-aqua break-all">{BAT_LINES.join(String.fromCharCode(10))}</code>
          <p className="text-gray-500 pt-1">Each run stamps a fresh copy into C:\Users\you\HowToFishBackups. Attach it to a desktop shortcut and run it before risky sessions. If your folder spells differently (see tip above), adjust the source path on the third line.</p>
        </div>
        <p className="text-xs leading-relaxed">
          Keep at least one backup <em>outside</em> the game folders so a reinstall or verify-integrity pass can’t sweep it away, and resist pruning old copies while launch-month patches continue — yesterday’s dull Tuesday save has rescued more crews than any tool.
        </p>

        <h2 className="text-xl font-bold text-white">Rolling Back to an Older Save</h2>
        <ol className="list-decimal pl-5 space-y-2 text-xs">
          <li>Quit How to Fish, then quit Steam entirely so nothing touches the folder mid-copy.</li>
          <li>Rename today’s live <code>Saves</code> folder to <code>Saves_broken_YYYY-MM-DD</code> instead of deleting it.</li>
          <li>Put the older backup back under its original name (<code>Saves</code>).</li>
          <li>Launch the game <em>once</em>. If the world looks right, press <strong>Save</strong>, return to Main Menu, and quit properly so the restored state commits cleanly.</li>
          <li>If the game refuses the save (a real possibility — see the timeline below), stop iterating guesses against the restored file while your other copy sits only one experiment away from being overwritten too.</li>
        </ol>

        <h2 className="text-xl font-bold text-white">What Each Patch Changed About Saving</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead className="bg-ocean-950/80 text-gray-400 uppercase border-b border-ocean-800">
              <tr>
                <th className="px-3 py-2">Patch</th>
                <th className="px-3 py-2">Save change</th>
                <th className="px-3 py-2">What it means for you</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-ocean-800/60">
              <tr>
                <td className="px-3 py-2 font-bold text-white">1.0.4</td>
                <td className="px-3 py-2">Special characters in server names could corrupt saves — blocked.</td>
                <td className="px-3 py-2">Stick to plain letters and numbers when naming servers.</td>
              </tr>
              <tr>
                <td className="px-3 py-2 font-bold text-white">1.0.6</td>
                <td className="px-3 py-2">Crashes no longer write a save. Saving happens on <strong>Save</strong>, <strong>Main Menu</strong>, and <strong>Quit</strong>; saves are validated before loading.</td>
                <td className="px-3 py-2">Progress made minutes before a crash is simply gone — not hidden. Controlled exits matter more than ever.</td>
              </tr>
              <tr>
                <td className="px-3 py-2 font-bold text-white">1.0.9</td>
                <td className="px-3 py-2">Another anti-corruption attempt (“hopefully fixed” per the notes).</td>
                <td className="px-3 py-2">A prevention fix. It does not retroactively repair an already-broken file or resurrect vanished gear — reports still arrive on current builds.</td>
              </tr>
              <tr>
                <td className="px-3 py-2 font-bold text-white">1.0.10</td>
                <td className="px-3 py-2">Ground-dropped items are now written into the save file — up to 64, prioritizing weapons, tools, quest items and creatures.</td>
                <td className="px-3 py-2">Saves got bigger and dropped gear now survives session boundaries. The path, backup routine, and rollback steps on this page are unchanged.</td>
              </tr>
              <tr>
                <td className="px-3 py-2 font-bold text-white">1.0.11</td>
                <td className="px-3 py-2">Saves are checked for corruption before every load, and the game keeps its own backups in case a save becomes corrupt.</td>
                <td className="px-3 py-2">Built-in protection finally exists — but with no documented way to browse or restore the automatic backups, the manual copies on this page are still your real safety net.</td>
              </tr>
              <tr>
                <td className="px-3 py-2 font-bold text-white">1.0.12</td>
                <td className="px-3 py-2">Saves are now stored through Steam Cloud — play and exit the game once on the PC that has your saves to upload them.</td>
                <td className="px-3 py-2">Your progress now follows your Steam account instead of one machine. The cloud is not a rollback history, and pre-1.0.12 builds don&apos;t use it — the backup habit on this page still covers what the cloud can&apos;t.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-xl font-bold text-white">The Safe Recovery Order (When Something Already Broke)</h2>
        <ol className="list-decimal pl-5 space-y-2 text-xs">
          <li><strong>Stop saving.</strong> Don’t load, re-save, or “quickly test” fixes in-game.</li>
          <li><strong>Close the game normally</strong> (Main Menu → Quit) if it is still running.</li>
          <li><strong>Copy the entire save folder</strong> to a safe location before touching anything.</li>
          <li><strong>Verify game files</strong> in Steam (Properties → Installed Files → Verify) to rule out a bad install.</li>
          <li><strong>Test on a copy, never the original</strong> — if a workaround writes junk into the file, your backup is still clean.</li>
        </ol>

        <h2 className="text-xl font-bold text-white">Prevention Habits</h2>
        <p className="text-xs leading-relaxed">
          Before big milestones — boss kills, quest hand-ins, boat upgrades — press a manual <strong>Save</strong>, then exit through Main Menu or Quit so the write completes beyond doubt. In co-op, agree on who saves and when: rejoining guests have seen inventory roll backwards when they expected a mirror of their last visit. One honest limitation worth internalizing after Patch 1.0.6: a crash costs you everything since the last completed save. Treating Save → Menu → Quit as part of the trip home beats treating it as optional ceremony.
        </p>

        <p className="text-xs text-gray-400 border-l-2 border-coral/60 pl-3">
          If weapons, radar, or boat parts are missing but the world loads fine, switch to our{' '}
          <Link href="/troubleshooting/items-disappeared/" className="text-aqua hover:underline">items disappeared guide</Link> — it pairs with the backup steps on this page.
        </p>
      </div>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white">Save &amp; Backup FAQ</h2>
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
          { label: 'Steam Discussion: FIXED “Equipping weapons boots you to homescreen and loses progress”', href: 'https://steamcommunity.com/app/4001890/discussions/0/582806239606635788/', note: 'source for the AppData\\LocalLow\\Dazed Games\\How to Fish\\Saves path' },
          { label: 'Steam Discussion: “Saved game and lost everything?”', href: 'https://steamcommunity.com/app/4001890/discussions/0/582805931178592050/', note: 'typical loss pattern described by affected players' },
          { label: 'Steam Discussion: “Save issue” — game saves deleted themselves', href: 'https://steamcommunity.com/app/4001890/discussions/0/581681246928691506/', note: 'recent loss report that motivated the Patch 1.0.11 section' },
          { label: 'Official patch notes feed (app 4001890)', href: 'https://store.steampowered.com/feeds/news/app/4001890/', note: 'basis of the patch timeline above, including 1.0.11’s corruption check and automatic backups and 1.0.12’s Steam Cloud storage' },
        ]}
      />
      <FaqJsonLd faqs={faqs} />
    </div>
  );
}