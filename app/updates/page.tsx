import Breadcrumb from '@/components/Breadcrumb';
import Sources from '@/components/Sources';
import Link from 'next/link';

export const metadata = {
  title: 'Patch Notes & Update History (1.0.4–1.0.9)',
  description:
    'Every How to Fish patch 1.0.4–1.0.9 explained: difficulty modes, save fixes, boss nerfs, 8-player lobbies, and controller fixes.',
  alternates: { canonical: 'https://howtofish101.com/updates/' },
};

const ANN = 'https://steamcommunity.com/games/4001890/announcements/detail/';

const patches = [
  {
    version: 'Patch 1.0.9',
    date: 'August 24, 2026',
    url: ANN + '711158520539514352',
    sections: [
      {
        title: 'New',
        items: [
          'Difficulty option added in the main menu and in-game: Easy, Normal (default, same as before), and Hard.',
          'Easy mode: all creatures have 25% less health and deal 50% less damage.',
          'Hard mode: all creatures have 25% more health and deal 25% more damage.',
          'Steam connection debug in the main menu — red relay text means the connection failed during initialization (see the Community Discord #common-bugs channel for fixes).',
        ],
      },
      {
        title: 'Fixes',
        items: [
          'Save file corruption hopefully fixed. If loading saves or equipping weapons still crashes the game, the Discord has guides for removing broken saves.',
        ],
      },
    ],
  },
  {
    version: 'Patch 1.0.8',
    date: 'August 24, 2026',
    url: ANN + '711158520539514106',
    sections: [
      {
        title: 'Fixes',
        items: [
          'PlayStation controller glyphs now display correctly.',
          'Fire sizzling sound is linked to the FX volume slider, so it actually changes with the setting.',
        ],
      },
    ],
  },
  {
    version: 'Patch 1.0.6',
    date: 'August 23, 2026',
    url: ANN + '711158520539514081',
    sections: [
      {
        title: 'Fixes',
        items: [
          'The game checks the save file before loading it — fake servers named "Game Name" no longer appear in the server list.',
          'The game no longer saves when the application crashes. Saves now happen when you press the Save, Main Menu, or Quit buttons, plus an autosave every minute.',
        ],
      },
    ],
  },
  {
    version: 'Patch 1.0.5',
    date: 'August 22, 2026',
    url: ANN + '711158520539513993',
    sections: [
      {
        title: 'New',
        items: [
          'Option to invert the X and Y look axes.',
          'Option to host a private lobby, joinable only through invite.',
          'Option to change session type in server settings while in-game (requires a restart after changing).',
        ],
      },
      {
        title: 'Changes',
        items: ['Minimum locked FPS lowered from 50 to 30.'],
      },
      {
        title: 'Fixes',
        items: [
          'You can no longer travel to islands without unlocking them first (sorry, speedrunners).',
          'Skins in the slot machines are no longer invisible while rolling on 4K resolutions.',
          'The all-drip-creatures achievement (Fishipedia) now unlocks correctly — it previously required finding all + 1.',
          'Griefers can no longer instantly end the game when joining a lobby.',
        ],
      },
    ],
  },
  {
    version: 'Patch 1.0.4',
    date: 'August 21, 2026',
    url: ANN + '711158520539513916',
    sections: [
      {
        title: 'Changes',
        items: [
          'Support for up to 8-player lobbies (up from 4).',
          'Pufferfish boss nerfed.',
          'Magma Whale boss nerfed.',
          'The intended path up to the final island is easier to see.',
        ],
      },
      {
        title: 'Fixes',
        items: [
          'Black screen when trying to join a lobby (hopefully fixed).',
          'Gray screen when starting the game (hopefully fixed) by no longer forcing fullscreen mode.',
          'Permanent boss timer no longer stays on screen.',
          'Underwater effects no longer persist in the main menu after leaving while underwater.',
          'Permanent revive text no longer stays when a dead player self-revives while being held.',
          'Special characters in server names are blocked — they break the save file.',
          'The bare-hands final-boss achievement (Handyman) now unlocks for everyone in the session.',
        ],
      },
    ],
  },
];

export default function UpdatesPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      <Breadcrumb items={[{ name: 'Patch Notes', href: '/updates/' }]} />
      <h1 className="text-3xl font-extrabold text-white">How to Fish Patch Notes &amp; Update History</h1>
      <div className="bg-ocean-900/80 border border-ocean-800 rounded-xl p-6 space-y-6 text-sm text-gray-300">
        <p>
          How to Fish launched on August 20, 2026 and hit{' '}
          <strong className="text-white">1 million players in its first two days</strong>. Dazed Games has shipped
          rapid patches ever since — six updates in the first five days, covering boss balance, save-file
          protection, difficulty modes, and multiplayer fixes. This page summarizes every official patch note with
          a link to the original Steam announcement.
        </p>

        {patches.map((p) => (
          <article key={p.version} className="border border-ocean-800 rounded-lg overflow-hidden">
            <header className="bg-ocean-950 px-5 py-4 flex items-baseline justify-between gap-4 flex-wrap">
              <h2 className="text-xl font-bold text-white">{p.version}</h2>
              <span className="text-xs text-gray-400">{p.date}</span>
            </header>
            <div className="px-5 py-4 space-y-4">
              {p.sections.map((s) => (
                <div key={s.title}>
                  <h3 className="text-xs font-bold text-aqua tracking-wider uppercase mb-2">{s.title}</h3>
                  <ul className="list-disc pl-5 space-y-1.5 text-xs text-gray-300">
                    {s.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
              <a
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-xs text-aqua hover:underline"
              >
              Official announcement on Steam ↗
              </a>
            </div>
          </article>
        ))}

        <div className="border border-gold/30 bg-gold/5 rounded-lg px-5 py-4">
          <h2 className="text-xl font-bold text-gold mb-2">Milestone: 1 Million Fishermen in 2 Days</h2>
          <p className="text-xs text-gray-300">
            On August 23, 2026 — two days after launch — Dazed Games announced the game had passed 1 million
            players, confirming that more content and bug fixes are on the way. The{' '}
            <a href="https://steamcommunity.com/games/4001890/announcements/detail/711158520539514066" target="_blank" rel="noopener noreferrer" className="text-aqua hover:underline">
              original announcement
            </a>{' '}
            is on the Steam community hub.
          </p>
        </div>

        <h2 className="text-xl font-bold text-white border-b border-ocean-800 pb-2">What the Patches Mean for You</h2>
        <ul className="list-disc pl-5 space-y-2 text-xs text-gray-300">
          <li>
            <strong>Struggling with a boss?</strong> Patch 1.0.9 added an Easy difficulty that cuts creature damage
            by half — no shame in switching, then switching back.
          </li>
          <li>
            <strong>Lost progress or weapons?</strong> The save rules changed in 1.0.6 and corruption was addressed
            in 1.0.9 — see the{' '}
            <Link href="/troubleshooting/save-file/" className="text-aqua hover:underline">save bug recovery guide</Link>.
          </li>
          <li>
            <strong>Playing with a big group?</strong> Patch 1.0.4 raised lobby capacity to 8 players — our{' '}
            <Link href="/multiplayer/" className="text-aqua hover:underline">co-op guide</Link> covers crew roles and boss HP scaling.
          </li>
          <li>
            <strong>Black or gray screen on launch or join?</strong> Both were patched in 1.0.4; current workarounds
            live on the{' '}
            <Link href="/settings/" className="text-aqua hover:underline">settings &amp; black screen page</Link>.
          </li>
        </ul>

        <Sources
          items={[
            {
              label: 'How to Fish — Steam community announcements',
              href: 'https://steamcommunity.com/app/4001890',
              note: 'All patch notes 1.0.4–1.0.9, quoted from the official announcements',
            },
          ]}
        />
      </div>
    </div>
  );
}
