import Breadcrumb from '@/components/Breadcrumb';
import Link from 'next/link';
import { FaqJsonLd } from '@/components/JsonLd';
import Sources from '@/components/Sources';

export const metadata = {
  title: 'Best Settings, Performance Fixes & Black Screen Help',
  description: 'How to Fish settings and fixes: black screen launch options, overlay conflicts, audio stutter, Steam Deck configuration, and the quality-of-life gaps still present as of Patch 1.0.9.',
  alternates: { canonical: 'https://howtofish101.com/settings/' },
};

const faqs = [
  {
    q: 'Does How to Fish have recommended system requirements?',
    a: 'No. The official Steam page lists only a minimum spec — Windows 10 or newer, an Intel Core i5-5257U or Ryzen 3 1200, 8 GB RAM, a GTX 1050 or RX 460, broadband for co-op, and just 1 GB of storage. There is no separate “recommended” tier published, so treat any site showing one (RTX cards, 15 GB installs) as invented.'
  },
  {
    q: 'What should I try first for a black screen on launch?',
    a: 'Add -dx11 to your Steam launch options, test, and switch to -force-vulkan if that changes nothing. If the launch fails before any window appears — especially right after updating — check our error 0x11C7 guide, because Windows Smart App Control blocking the executable produces exactly that kind of silent-looking failure.'
  },
  {
    q: 'Why do my keybinds reset every time I restart the game?',
    a: 'Players have reported custom keybinds and some settings failing to persist across restarts on current builds. Nothing in the settings menus has fixed it yet as of Patch 1.0.9, so re-binding each session is unfortunately still the norm for affected setups — and worth reporting through Steam discussions with your setup details.'
  },
  {
    q: 'Is there a frame rate limiter?',
    a: 'Yes — cap the framerate in-game rather than forcing V-Sync, which adds input lag to casting and reeling timing. Note that Patch 1.0.5 changed how the lowest locked FPS behaves (the floor moved to 30), so very low caps are treated differently than before that patch.'
  },
];

export default function SettingsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      <Breadcrumb items={[{ name: 'Troubleshooting & Settings', href: '/settings/' }]} />
      <h1 className="text-3xl font-extrabold text-white">Best Settings &amp; Performance Fixes</h1>
      <p className="text-xs text-gray-500 -mt-4">Last verified August 27, 2026 · Game version 1.0.9</p>

      <div className="bg-ocean-900/80 border border-ocean-800 rounded-xl p-6 space-y-6 text-sm text-gray-300">
        <h2 className="text-xl font-bold text-white">First, Know Which Launch Problem You Have</h2>
        <ul className="list-disc pl-5 space-y-2 text-xs">
          <li><strong className="text-white">A security/Smart App Control popup, or nothing happens after clicking Play</strong> — that is usually Windows blocking the freshly updated executable, not a graphics problem. Follow the{' '}
            <Link href="/troubleshooting/error-0x11c7/" className="text-aqua hover:underline">error 0x11C7 fix</Link> first.
          </li>
          <li><strong className="text-white">The window opens but stays black</strong> — renderer trouble. Work through the launch options below.</li>
        </ul>

        <h2 className="text-xl font-bold text-white">Launch Options for Black Screens</h2>
        <p className="text-xs leading-relaxed">
          In Steam: right-click How to Fish → Properties → General → Launch Options. Standard Unity-engine troubleshooting says try{' '}
          <code className="bg-ocean-950 px-1.5 py-0.5 rounded text-aqua">-dx11</code> first, then{' '}
          <code className="bg-ocean-950 px-1.5 py-0.5 rounded text-aqua">-force-vulkan</code>, restarting between attempts. Players whose black screens began immediately after a game update often come back reporting the file-verification step below was what actually cleared it.
        </p>

        <h2 className="text-xl font-bold text-white">Verify Files &amp; Update GPU Drivers</h2>
        <p className="text-xs leading-relaxed">
          Before anything exotic: Steam → right-click How to Fish → Properties → Installed Files → <strong>Verify integrity of game files</strong>. It takes minutes and silently re-downloads anything corrupted or half-updated. Then bring your GPU driver current — NVIDIA via GeForce Experience or nvidia.com, AMD via Radeon Software. Update-day render glitches are far more often a stale driver clashing with a new engine version than a broken setting somewhere.</p>

        <h2 className="text-xl font-bold text-white">Disable Overlay Conflicts</h2>
        <p className="text-xs leading-relaxed">
          Third-party overlays are the most common cause of stutter we hear about, especially Discord’s game overlay and GeForce Experience’s in-game panel. Turn them off one at a time to isolate the culprit; the same advice sits on our{' '}
            <Link href="/game/system-requirements/" className="text-aqua hover:underline">system requirements page</Link>. If you still hit stutter with every overlay off, drop shadows and particle effects next — on minimum-and-nearby hardware those two dwarf everything else.
        </p>

        <h2 className="text-xl font-bold text-white">Audio Stutter First Step</h2>
        <p className="text-xs leading-relaxed">
          Check that your output device runs at 48,000 Hz in Windows Sound settings (Control Panel → Sound → Properties → Advanced). It is the community-standard first fix for crackling engine audio, worth thirty seconds before deeper digging.
        </p>

        <h2 className="text-xl font-bold text-white">What Hardware You Actually Need</h2>
        <p className="text-xs leading-relaxed">
          The official requirements are modest: Windows 10+, GTX 1050 / RX 460, 8 GB RAM, and 1 GB of free space. The store page publishes <strong>no recommended tier</strong> — anywhere showing RTX-class “recommended” hardware for this game is making it up. If your machine clears the minimum but dips during boss fights, the perf list below matters more than any upgrade. Full platform matrix lives on the{' '}
            <Link href="/game/system-requirements/" className="text-aqua hover:underline">system requirements guide</Link>.
        </p>

        <h2 className="text-xl font-bold text-white">Settings Worth Touching When Frames Dip</h2>
        <ul className="list-disc pl-5 space-y-2 text-xs">
          <li><strong className="text-white">Shadows first</strong> — biggest general lever for this kind of physics scene work, cheapest visual sacrifice.</li>
          <li><strong className="text-white">Particles/effects second</strong> — boss attacks and lava effects are heavy moments; some quality here hurts less mid-fight than shadow pop does.</li>
          <li><strong className="text-white">Cap frames in-game</strong> rather than enabling V-Sync — V-Sync’s latency tax makes reel timing feel worse even when it smooths motion.</li>
          <li><strong className="text-white">Mind the floor:</strong> since Patch 1.0.5 the game treats its minimum locked FPS differently (down to 30), so unusually low caps behave better than they used to.</li>
        </ul>

        <h2 className="text-xl font-bold text-white">Steam Deck Setup</h2>
        <p className="text-xs leading-relaxed">
          The Deck runs the game natively with a default layout, and Steam Input lets you remap freely — set camera sensitivity and invert axes in the options menu (axis inversion arrived in Patch 1.0.5). For longer sessions the practical recipe stays boring: cap framerate, drop shadows and particles one notch each, and only escalate further if a specific boss fight needs it. Note the game officially supports PlayStation controllers with correct glyphs too (fixed up in Patch 1.0.8), so Docked-Deck-plus-DualSense is a fully supported combo.
        </p>

        <h2 className="text-xl font-bold text-white">Co-op Connection Quick Checks</h2>
        <ul className="list-disc pl-5 space-y-2 text-xs">
          <li><strong className="text-white">Same version first:</strong> lobby mismatches usually mean someone has a pending Steam update. Restarting Steam clears most “invalid lobby code” states.</li>
          <li><strong className="text-white">Use the built-in diagnostic:</strong> Patch 1.0.9 added a Steam connection/relay readout on the main menu. If the indicator shows red there, the problem is upstream of settings — reboot the router or switch networks before blaming the session.</li>
          <li>For the full ordered playbook — invite failures, black screens on join, host swaps — see the{' '}
            <Link href="/troubleshooting/join-friends/" className="text-aqua hover:underline">cannot join friends guide</Link>.</li>
        </ul>
      </div>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white">Known Settings Gaps in Current Builds</h2>
        <p className="text-xs text-gray-400 leading-relaxed">
          So nobody wastes an evening hunting for options that do not exist — these come straight from recurring player reports on recent builds:
        </p>
        <ul className="list-disc pl-5 space-y-2 bg-ocean-900/80 border border-ocean-800 rounded-xl p-6 text-sm text-gray-300">
          <li><strong className="text-white">Custom keybinds may not persist</strong> between launches for some players (reported since late August).</li>
          <li><strong className="text-white">No aim-down-sights sensitivity option</strong> — sniper users flag this repeatedly because scope sensitivity cannot be tuned separately.</li>
          <li><strong className="text-white">Video and audio menus are thin</strong> — fewer sliders than the physics engine arguably deserves, and no eating-sound toggle despite requests.</li>
          <li><strong className="text-white">Performance complaints exist even on flagship rigs</strong> — screen tearing and stutters are reported on high-end GPUs, so imperfect framers are fighting the game, not their hardware.</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white">Settings FAQ</h2>
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
          { label: 'How to Fish on Steam (store page)', href: 'https://store.steampowered.com/app/4001890/How_to_Fish/', note: 'official minimum specifications quoted above' },
          { label: 'Official patch notes feed (app 4001890)', href: 'https://store.steampowered.com/feeds/news/app/4001890/', note: 'FPS-floor change (1.0.5), axis inversion (1.0.5), PS glyph fix (1.0.8), relay readout (1.0.9)' },
          { label: 'Steam Discussion: bad performance thread', href: 'https://steamcommunity.com/app/4001890/discussions/0/582806239606619650/', note: 'flagship-hardware stutter reports behind the known-gaps list' },
        ]}
      />
      <FaqJsonLd faqs={faqs} />
    </div>
  );
}