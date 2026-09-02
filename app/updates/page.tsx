import Breadcrumb from '@/components/Breadcrumb';
import Sources from '@/components/Sources';
import Link from 'next/link';

import { ArticleJsonLd } from '@/components/JsonLd';

export const metadata = {
  title: 'Patch Notes & Update History (1.0.4–1.0.11)',
  description:
    'Every How to Fish patch 1.0.4–1.0.11 explained: Steam Deck Verified and GeForce NOW support, save corruption checks and backups, the own-explosives rule, difficulty modes, boss nerfs, and 8-player lobbies.',
  alternates: { canonical: 'https://howtofish101.com/updates/' },
};

const ANN = 'https://steamcommunity.com/games/4001890/announcements/detail/';

const patches = [
  {
    version: 'Patch 1.0.11',
    date: 'September 1, 2026',
    url: 'https://store.steampowered.com/news/app/4001890/view/698774255287927884',
    affects: [
      { href: '/game/system-requirements/', label: 'Steam Deck & GeForce NOW' },
      { href: '/settings/', label: 'Toggle & hold options' },
      { href: '/troubleshooting/save-file/', label: 'Save corruption check & backups' },
      { href: '/multiplayer/friendly-fire/', label: 'Own-explosives rule' },
      { href: '/fish/drip-fish/', label: 'Drip parrotfish cooking fix' },
      { href: '/bosses/first-boss/', label: 'First boss bug (reported after this patch)' },
    ],
    sections: [
      {
        title: 'New',
        items: [
          'How to Fish is now playable through GeForce NOW.',
          'How to Fish is now fully Steam Deck Verified.',
          'Added an option to use toggle for aiming.',
          'Added an option to use toggle for sprinting.',
          'Added an option to hold to attack.',
          'Added an option to toggle nametags.',
        ],
      },
      {
        title: 'Changes',
        items: [
          "Save files are now always checked that they're not corrupt before loading.",
          'Save files now have backups in case of becoming corrupt.',
          'The roulette table on island 6 moved slightly — its old position was annoying to bet from.',
          'Item dots changed color to make dropped weapons easier to find: weapons are now orange, dead players are turquoise.',
          'You will now die from your own explosives even with friendly fire disabled.',
          'Iron sight removed as a purchasable — players only ever bought it by mistake, which also removed their expensive attachments.',
          'You can no longer downgrade from suppressor to compensator.',
        ],
      },
      {
        title: 'Fixes',
        items: [
          'Hopefully fixed the inventory bug on join that made players invisible.',
          'Items now need to have been held once before they can be sold.',
          'Fixed drip parrotfish not being cookable.',
          'Fixed hands sometimes teleporting instead of moving smoothly to a picked-up item.',
        ],
      },
    ],
  },
  {
    version: 'Patch 1.0.10',
    date: 'August 27, 2026',
    url: 'https://store.steampowered.com/news/app/4001890/view/698774255287927072',
    affects: [
      { href: '/troubleshooting/cooked-weapons/', label: 'Water-dip uncook added' },
      { href: '/troubleshooting/items-disappeared/', label: 'Ground items now persist' },
    ],
    sections: [
      {
        title: 'Changes',
        items: [
          "Weapons and tools now get cleaned from cooking when dipped in water.",
          "Ground-dropped items are now included in the save file — up to 64 total items persist between sessions, prioritizing weapons, tools, quest items and creatures.",
          "Nerfed the anglerfish slightly — it was too annoying with a lot of health.",
        ],
      },
      {
        title: 'Fixes',
        items: [
          'No more rich text in chat — griefers were exploiting it.',
          'Explosion velocity is capped so items no longer fly so far they disappear.',
          'Roulette table: fixed infinite ticking at high values, the ball should no longer clip through the wheel, and leaving mid-game no longer breaks roulette for the next session.',
          'Increased the time allowed to connect, hopefully lowering the risk of being disconnected instantly.',
          'Removed the X marker on the radar — it marked where you last died and was just confusing.',
          'Hopefully fixed items falling through the level when loading a game or joining a lobby.',
        ],
      },
      {
        title: 'Community',
        items: [
          "A new fanart forum opened in the community Discord.",
        ],
      },
    ],
  },
  {
    version: 'Patch 1.0.9',
    date: 'August 24, 2026',
    url: ANN + '711158520539514352',
    affects: [
      { href: '/difficulty/', label: 'Difficulty modes guide' }, 
      { href: '/bosses/', label: 'Boss strategy pages (difficulty context)' }, 
      { href: '/troubleshooting/save-file/', label: 'Save file guide' }, 
      { href: '/troubleshooting/join-friends/', label: 'Connection fixes (relay readout)' }, 
      { href: '/achievements/bean/', label: 'Bean route (Easy mode note)' },
    ],
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
    affects: [
      { href: '/settings/', label: 'Settings & Deck setup' }, 
      { href: '/game/system-requirements/', label: 'Controller support matrix' },
    ],
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
    affects: [
      { href: '/troubleshooting/save-file/', label: 'Save rules changed here' }, 
      { href: '/troubleshooting/items-disappeared/', label: 'Gear-loss triage' },
    ],
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
    affects: [
      { href: '/troubleshooting/join-friends/', label: 'Private lobbies & session types' }, 
      { href: '/multiplayer/', label: 'Co-op guide' }, 
      { href: '/settings/', label: 'FPS floor & axis inversion' }, 
      { href: '/casino/', label: 'Slot-machine skin fix' }, 
      { href: '/islands/', label: 'Island-unlock exploit closed' }, 
      { href: '/achievements/', label: 'Collection achievement fix' },
    ],
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
    affects: [
      { href: '/bosses/pufferfish/', label: 'Pufferfish nerf context' }, 
      { href: '/bosses/magma-whale/', label: 'Whale nerf context' }, 
      { href: '/multiplayer/', label: '8-player lobby guide' }, 
      { href: '/troubleshooting/join-friends/', label: 'Join black-screen fix' }, 
      { href: '/troubleshooting/save-file/', label: 'Server-name corruption fix' },
    ],
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
      <ArticleJsonLd
        headline="How to Fish Patch Notes & Update History"
        description="Every official How to Fish patch from 1.0.4 to 1.0.11 — Steam Deck Verified, save backups, difficulty modes, ground-item persistence, and the water-dip un-cook."
        url="https://howtofish101.com/updates/"
        datePublished="2026-08-26"
        dateModified="2026-09-03"
      />
      <Breadcrumb items={[{ name: 'Patch Notes', href: '/updates/' }]} />
      <h1 className="text-3xl font-extrabold text-white">How to Fish Patch Notes &amp; Update History</h1>
      <div className="bg-ocean-900/80 border border-ocean-800 rounded-xl p-6 space-y-6 text-sm text-gray-300">
        <p>
          How to Fish launched on August 20, 2026 and hit{' '}
          <strong className="text-white">1 million players in its first two days</strong>. Dazed Games has shipped
          rapid patches ever since — seven updates in the first eight days, covering boss balance, save-file
          protection, ground-item persistence, an official water-dip uncook, difficulty modes, and multiplayer fixes. This page summarizes every official patch note with
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

              {p.affects && p.affects.length > 0 && (
                <div className="pt-1">
                  <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">Guides affected by this patch:</span>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {p.affects.map((a) => (
                      <Link key={a.href + a.label} href={a.href} className="text-[11px] bg-ocean-950 border border-ocean-700 rounded-full px-2.5 py-1 text-gray-300 hover:border-aqua/60 hover:text-white transition-colors">{a.label}</Link>
                    ))}
                  </div>
                </div>
              )}
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
            <strong>Burned a weapon or dropped gear on the ground?</strong> Both got fixes in Patch
            1.0.10 — water now cleans cooked weapons, and up to 64 ground items persist in saves. See the
            <Link href="/troubleshooting/cooked-weapons/" className="text-aqua hover:underline">un-cook guide</Link> or the
            <Link href="/troubleshooting/items-disappeared/" className="text-aqua hover:underline">items triage page</Link>.
          </li>
          <li>
            <strong>Struggling with a boss?</strong> Patch 1.0.9 added an Easy difficulty that cuts creature damage
            by half — no shame in switching, then switching back. Full details in the{' '}
            <Link href="/difficulty/" className="text-aqua hover:underline">difficulty modes guide</Link>.
          </li>
          <li>
            <strong>Lost progress or weapons?</strong> The save rules changed in 1.0.6, corruption was addressed in
            1.0.9, and Patch 1.0.11 added a corruption check on every load plus automatic backups — see the{' '}
            <Link href="/troubleshooting/save-file/" className="text-aqua hover:underline">save bug recovery guide</Link>.
          </li>
          <li>
            <strong>First boss floating and unkillable since 1.0.11?</strong> That is a live bug being reported by many
            players, not your setup — status and a community workaround are in our{' '}
            <Link href="/bosses/first-boss/" className="text-aqua hover:underline">first boss guide</Link>.
          </li>
          <li>
            <strong>On Steam Deck or GeForce NOW?</strong> Both are officially supported since Patch 1.0.11 — details in
            our{' '}
            <Link href="/game/system-requirements/" className="text-aqua hover:underline">system requirements &amp; platforms page</Link>.
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
              note: 'All patch notes 1.0.4–1.0.11, quoted from the official announcements',
            },
            {
              label: 'Official patch notes RSS feed (app 4001890)',
              href: 'https://store.steampowered.com/feeds/news/app/4001890/',
              note: 'Verbatim source for Patches 1.0.10 and 1.0.11',
            },
          ]}
        />
      </div>
    </div>
  );
}
