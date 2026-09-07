import Breadcrumb from '@/components/Breadcrumb';
import Link from 'next/link';
import Sources from '@/components/Sources';

export const metadata = {
  title: 'System Requirements & Platform Guide (Steam Deck Verified)',
  description: 'Official How to Fish PC requirements: Windows 10+, GTX 1050, 8 GB RAM, 1 GB storage. Steam Deck Verified and GeForce NOW supported since Patch 1.0.11 — plus controllers, languages, and console availability.',
  alternates: { canonical: 'https://howtofish101.com/game/system-requirements/' },
};

const languages = [
  'English', 'French', 'Italian', 'German', 'Spanish (Spain)', 'Japanese', 'Korean', 'Polish',
  'Portuguese (Brazil)', 'Russian', 'Simplified Chinese', 'Spanish (Latin America)', 'Swedish',
  'Traditional Chinese', 'Turkish', 'Ukrainian',
];

export default function SystemRequirementsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      <Breadcrumb items={[{ name: 'System Requirements', href: '/game/system-requirements/' }]} />
      <div>
        <h1 className="text-3xl font-extrabold text-white tracking-tight">How to Fish System Requirements & Platforms</h1>
        <p className="text-gray-400 text-sm mt-2">
          Everything below comes from the official Steam store page for How to Fish (Dazed Games, released August 20, 2026).
          Windows is the only native platform — but since Patch 1.0.11 the game is officially <strong>Steam Deck Verified</strong> and
          playable through GeForce NOW. Here is exactly what you need to run it and what platforms it does and does not support.
        </p>

        <Sources
          items={[
            {
              label: 'How to Fish on Steam',
              href: 'https://store.steampowered.com/app/4001890/How_to_Fish/',
              note: 'Official minimum and recommended specs, language list, and platform availability',
            },
            {
              label: 'Official announcement: “STEAM DECK VERIFIED, GEFORCE NOW & PATCH 1.0.11” (Sep 1, 2026)',
              href: 'https://store.steampowered.com/news/app/4001890/view/698774255287927884',
              note: 'source of the Steam Deck Verified rating and GeForce NOW support',
            },
          ]}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-ocean-900/80 border border-ocean-800 rounded-xl p-6">
          <h2 className="text-lg font-bold text-white mb-4">Minimum (Windows)</h2>
          <ul className="space-y-2.5 text-xs text-gray-300">
            <li><strong className="text-gray-100">OS:</strong> Windows 10 or newer (64-bit)</li>
            <li><strong className="text-gray-100">Processor:</strong> Intel Core i5-5257U, AMD Ryzen 3 1200, or equivalent</li>
            <li><strong className="text-gray-100">Memory:</strong> 8 GB RAM</li>
            <li><strong className="text-gray-100">Graphics:</strong> GeForce GTX 1050, AMD RX 460, or equivalent</li>
            <li><strong className="text-gray-100">Network:</strong> Broadband internet connection (for co-op)</li>
            <li><strong className="text-gray-100">Storage:</strong> 1 GB available space</li>
          </ul>
        </div>
        <div className="bg-ocean-900/80 border border-ocean-800 rounded-xl p-6">
          <h2 className="text-lg font-bold text-white mb-4">Good to Know</h2>
          <ul className="space-y-2.5 text-xs text-gray-300">
            <li>Steam lists only a minimum spec — the game targets modest hardware and the 1 GB install is tiny by modern standards.</li>
            <li>The store page has <strong>not</strong> published a separate recommended spec beyond &quot;64-bit Windows&quot;.</li>
            <li>A free demo is available on Steam, so you can benchmark your machine before buying.</li>
            <li>Cloud co-op needs an online connection; solo play works offline after activation.</li>
          </ul>
        </div>
      </div>

      <div className="bg-ocean-900/80 border border-ocean-800 rounded-xl p-6 space-y-5 text-sm text-gray-300">
        <h2 className="text-xl font-bold text-white border-b border-ocean-800 pb-2">Steam Deck &amp; GeForce NOW Support</h2>
        <p>
          Patch 1.0.11 (September 1, 2026) was announced under the headline{' '}
          <em>&ldquo;Steam Deck Verified, GeForce NOW &amp; Patch 1.0.11&rdquo;</em> — the game carries the{' '}
          <strong className="text-white">Steam Deck Verified</strong> badge, the highest of Steam&apos;s three
          compatibility ratings, and runs on <strong className="text-white">GeForce NOW</strong> cloud streaming.
          In practice: pick it up on Steam and it plays on your Deck with no Proton tinkering, and a
          laptop that fails the GTX 1050 minimum spec can stream it instead. For Deck-specific graphics
          settings and the launch black-screen fix, see the{' '}
          <Link href="/settings/" className="text-aqua hover:underline">best settings guide</Link>.
        </p>
        <p className="text-xs">
          A caveat for desktop Linux: the Verified badge covers SteamOS on the Deck, not every distro. A
          couple of Arch Linux users have reported the game instantly crashing on boot (
          <Link href="/troubleshooting/" className="text-aqua hover:underline">troubleshooting hub</Link>), and
          the developers have not published a native Linux build or distro-specific guidance. Windows and the
          Deck remain the reliably supported ways to play.
        </p>

        <h2 className="text-xl font-bold text-white border-b border-ocean-800 pb-2 pt-2">Platform Availability</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-ocean-950 text-gray-400 border-b border-ocean-800">
              <tr><th className="p-3">Platform</th><th className="p-3">Status</th><th className="p-3">Notes</th></tr>
            </thead>
            <tbody className="divide-y divide-ocean-800/50">
              <tr>
                <td className="p-3 font-bold text-white">Windows (Steam)</td>
                <td className="p-3 text-green-400">Available</td>
                <td className="p-3">Primary platform. Single-player, online co-op for 1-4 players, Steam Achievements, Family Sharing.</td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-white">Steam Deck</td>
                <td className="p-3 text-green-400">Verified</td>
                <td className="p-3">Official Steam Deck Verified rating since Patch 1.0.11 (Sep 1, 2026) — highest compatibility tier, no manual Proton setup needed.</td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-white">GeForce NOW</td>
                <td className="p-3 text-green-400">Supported</td>
                <td className="p-3">Cloud streaming support added with Patch 1.0.11 — an option for below-minimum-spec laptops.</td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-white">macOS / desktop Linux</td>
                <td className="p-3 text-red-400">No native build</td>
                <td className="p-3">No macOS version. Desktop Linux is not officially supported — isolated boot-crash reports from Arch users; the Verified rating covers SteamOS on the Deck only.</td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-white">PS5 / Xbox / Switch</td>
                <td className="p-3 text-red-400">Not announced</td>
                <td className="p-3">No console versions have been announced by Dazed Games, and there is no Game Pass version — the game is sold on Steam only.</td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-white">Controllers</td>
                <td className="p-3 text-green-400">Full support</td>
                <td className="p-3">Full controller support, including DualShock 4 and DualSense with PlayStation glyphs.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-xl font-bold text-white border-b border-ocean-800 pb-2 pt-2">Language Support</h2>
        <p className="text-xs">
          Steam lists 16 languages with full audio support — unusually generous for an indie physics fishing game:
        </p>
        <div className="flex flex-wrap gap-2">
          {languages.map((lang) => (
            <span key={lang} className="text-[11px] bg-ocean-950 border border-ocean-700 rounded-full px-2.5 py-1 text-gray-300">{lang}</span>
          ))}
        </div>

        <h2 className="text-xl font-bold text-white border-b border-ocean-800 pb-2 pt-2">Performance Tips</h2>
        <p className="text-xs">
          On minimum-spec hardware, close background launchers and disable third-party overlays (Discord, GeForce Experience) —
          they are the most common cause of stutter we see. For launch black screens and Steam Deck settings,
          see the <Link href="/settings/" className="text-aqua hover:underline">best settings &amp; black screen fix page</Link>.
        </p>
      </div>
    </div>
  );
}
