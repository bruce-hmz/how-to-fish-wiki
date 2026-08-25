import Breadcrumb from '@/components/Breadcrumb';

export const metadata = {
  title: 'Best Settings & Black Screen Fix',
  description: 'Troubleshooting guide for How to Fish. Fix launch black screens, audio stutter bugs, and configure optimal Steam Deck 60 FPS graphics.',
  alternates: { canonical: 'https://howtofish101.com/settings/' },
};

export default function SettingsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      <Breadcrumb items={[{ name: 'Troubleshooting & Settings', href: '/settings/' }]} />
      <h1 className="text-3xl font-extrabold text-white">Black Screen Fix & Steam Deck Settings</h1>
      <div className="bg-ocean-900/80 border border-ocean-800 rounded-xl p-6 space-y-6 text-sm text-gray-300">
        <h2 className="text-xl font-bold text-white">1. Black Screen on Launch Fix</h2>
        <p>Add <code>-dx11</code> or <code>-force-vulkan</code> to your Steam Launch Options if encountering a black screen on startup.</p>
        <h2 className="text-xl font-bold text-white">2. Audio Stutter & Bug Fix</h2>
        <p>Ensure your audio output sample rate is set to 48,000 Hz (24-bit studio quality) in Windows Sound settings.</p>
        <h2 className="text-xl font-bold text-white">3. Steam Deck 60 FPS Configuration</h2>
        <p>Set Water Physics Quality to Medium, Shadows to Low, and Cap Frame Rate at 60 FPS for smooth handheld play.</p>

        <h2 className="text-xl font-bold text-white">4. Verify Game Files & Update Drivers</h2>
        <p>
          If the game crashes on startup or behaves erratically, start with these two steps before anything else. In Steam, right-click How to Fish in your library, go to <strong>Properties → Local Files → Verify Integrity of Game Files</strong>. This checks for corrupted or missing files and re-downloads them automatically. The process takes 2–5 minutes depending on your connection speed.
        </p>
        <p>
          Next, update your GPU drivers. For NVIDIA cards, download the latest Game Ready driver from the GeForce Experience app or the NVIDIA website. For AMD, use the Radeon Software auto-update. Outdated drivers are the number one cause of graphical glitches, texture pop-in, and the infamous &quot;pink water&quot; bug.
        </p>

        <h2 className="text-xl font-bold text-white">5. Disable Overlay Conflicts</h2>
        <p>
          Third-party overlays frequently conflict with How to Fish rendering. If you experience stuttering, frame drops, or the black screen issue persists after trying launch options, disable these overlays one at a time to identify the culprit: Discord overlay (Settings → Game Overlay → toggle off), GeForce Experience overlay (Settings → In-Game Overlay → off), and Steam overlay (right-click game → Properties → uncheck &quot;Enable Steam Overlay&quot;). The game has its own built-in FPS counter (toggle with F3) so external overlays are rarely needed.
        </p>

        <h2 className="text-xl font-bold text-white">6. Recommended PC Specs</h2>
        <div className="overflow-x-auto mt-4">
          <table className="w-full text-left text-xs">
            <thead className="bg-ocean-950 text-gray-400 border-b border-ocean-800">
              <tr><th className="p-3">Component</th><th className="p-3">Minimum</th><th className="p-3">Recommended</th></tr>
            </thead>
            <tbody className="divide-y divide-ocean-800/50">
              <tr><td className="p-3 font-bold text-white">OS</td><td className="p-3">Windows 10 (64-bit)</td><td className="p-3">Windows 11 (64-bit)</td></tr>
              <tr><td className="p-3 font-bold text-white">CPU</td><td className="p-3">Intel i5-8400 / AMD Ryzen 5 2600</td><td className="p-3">Intel i7-10700 / AMD Ryzen 7 3700X</td></tr>
              <tr><td className="p-3 font-bold text-white">GPU</td><td className="p-3">GTX 1060 6GB / RX 580</td><td className="p-3">RTX 3060 / RX 6700 XT</td></tr>
              <tr><td className="p-3 font-bold text-white">RAM</td><td className="p-3">8 GB</td><td className="p-3">16 GB</td></tr>
              <tr><td className="p-3 font-bold text-white">Storage</td><td className="p-3">15 GB HDD</td><td className="p-3">15 GB SSD</td></tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-xl font-bold text-white">7. Steam Deck Control Mappings</h2>
        <p>
          How to Fish supports Steam Deck natively with a default controller layout optimized for handheld play. Here are the key mappings:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-xs text-gray-300">
          <li><strong>Left Stick</strong>: Move character / Steer boat</li>
          <li><strong>Right Stick</strong>: Camera control / Aim rod cast direction</li>
          <li><strong>Right Trigger</strong>: Cast rod / Reel in (hold)</li>
          <li><strong>Left Trigger</strong>: Aim harpoon / Scope</li>
          <li><strong>A Button</strong>: Interact / Pick up items / Eat food</li>
          <li><strong>X Button</strong>: Unequip rod / Switch to melee weapon</li>
          <li><strong>Y Button</strong>: Open inventory</li>
          <li><strong>B Button</strong>: Cancel / Back / Dive underwater</li>
          <li><strong>Left Bumper</strong>: Cycle bait left</li>
          <li><strong>Right Bumper</strong>: Cycle bait right</li>
          <li><strong>D-Pad Up</strong>: Use consumable (food, fuel can)</li>
          <li><strong>Back Grip (L4)</strong>: Toggle Sonar overlay</li>
          <li><strong>Back Grip (R4)</strong>: Boat boost (Shift equivalent)</li>
        </ul>
        <p>
          You can customize the layout through Steam Input. The community-recommended &quot;Angler Pro&quot; layout moves cast and reel to the back grips for more comfortable extended fishing sessions.
        </p>

        <h2 className="text-xl font-bold text-white">8. Network & Co-op Connection Troubleshooting</h2>
        <ul className="list-disc pl-5 space-y-2 text-xs text-gray-300">
          <li><strong>Cannot find lobby</strong>: Ensure both players are on the same game version. Check for pending Steam updates. Restart Steam if the lobby code says &quot;invalid&quot; — this is usually a relay server cache issue.</li>
          <li><strong>High latency / rubberbanding</strong>: The host player connection quality determines the session experience. If the host has poor upload speed (&lt;5 Mbps), they should hand host duties to the player with the best connection. Use a wired Ethernet connection when possible.</li>
          <li><strong>Desync during boss fights</strong>: Known issue in patch 1.2 and earlier. Update to the latest version. If desync persists, have all players exit to menu and rejoin the lobby — progress within the current session is preserved.</li>
          <li><strong>Steam Deck to PC connection</strong>: Works seamlessly on the same Wi-Fi network. For cross-network play, ensure the Steam Deck has a stable 5GHz Wi-Fi connection. 2.4GHz connections frequently cause packet loss during boss encounters.</li>
        </ul>

        <h2 className="text-xl font-bold text-white">9. Performance Optimization</h2>
        <p>
          If you are hitting frame drops, especially in the Volcanic Trench or during boss fights with particle-heavy attacks, try these settings adjustments:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-xs text-gray-300">
          <li><strong>Shadows: Low or Off</strong> — Saves 15–20% GPU load. Shadow quality has minimal impact on gameplay visibility.</li>
          <li><strong>Motion Blur: Off</strong> — Reduces input lag perception and saves a few FPS. Most competitive players disable this immediately.</li>
          <li><strong>Water Physics: Medium</strong> — The largest single performance lever. Ultra water physics is beautiful but costs 25% GPU. Medium looks nearly identical at 60 FPS.</li>
          <li><strong>Particle Density: Medium</strong> — Reduces boss attack particle counts. Lava and spike effects on Low look noticeably worse, so Medium is the sweet spot.</li>
          <li><strong>View Distance: High</strong> — Keep this at High or Ultra. Lower settings cause fish swarms and island landmarks to pop in late, which hurts navigation and fishing efficiency.</li>
          <li><strong>V-Sync: Off</strong> — Use an in-game frame cap (60 or 120) instead. V-Sync adds input lag that makes rod reeling timing harder.</li>
        </ul>
      </div>
    </div>
  );
}
