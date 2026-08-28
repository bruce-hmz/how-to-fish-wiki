import Breadcrumb from '@/components/Breadcrumb';
import Link from 'next/link';
import { ArticleJsonLd, FaqJsonLd } from '@/components/JsonLd';
import Sources from '@/components/Sources';

export const metadata = {
  title: 'Error 0x11C7 Fix: Smart App Control',
  description: 'How to Fish fails to launch with error 0x11C7 when Windows Smart App Control blocks the exe. Verify Steam files first, then adjust the security setting safely.',
  alternates: { canonical: 'https://howtofish101.com/troubleshooting/error-0x11c7/' },
};

const faqs = [
  {
    q: 'What does How to Fish error 0x11C7 mean?',
    a: '0x11C7 is not a How to Fish crash code — it is a Windows application-control block. The game process is stopped before it ever starts because Windows Smart App Control (or an enterprise app-control policy) does not trust the executable. That is why double-clicking produces an instant error instead of a splash screen.',
  },
  {
    q: 'Why did Smart App Control start blocking a game that used to run?',
    a: 'Smart App Control is cloud-based and re-evaluates files as reputation data changes. A game update, a fresh download, or a modified executable hash can flip a previously-trusted file to untrusted. If How to Fish patched recently (1.0.4 through 1.0.9 all shipped quickly after launch), the new exe may simply not have enough good reputation signals yet.',
  },
  {
    q: 'Is error 0x11C7 related to Patch 1.0.9?',
    a: 'No patch note has ever referenced 0x11C7. The timing correlation players report usually comes from the exe being replaced by the update, which triggers a fresh Smart App Control evaluation. Treat every "game stopped launching after update" report as a trust problem to diagnose, not a bug in a specific patch.',
  },
  {
    q: 'What should I try first?',
    a: 'In Steam, right-click How to Fish, open Properties, go to Local Files, and run Verify Integrity of Game Files. This replaces any corrupted or partially-downloaded executable — the most common benign cause. Then reboot: Smart App Control decisions are cached, and a restart clears the block state for files that verified clean.',
  },
  {
    q: 'Should I disable Smart App Control?',
    a: 'Only if you accept the trade-off, and do it knowing it cannot be re-enabled without resetting Windows. The setting lives under Settings, Privacy & Security, Windows Security, App & browser control, Smart App Control. Setting it to Off removes the block but weakens protection for every app, not just this game. If you prefer to keep it on, add a Steam-library exclusion in Windows Security and verify the game files instead.',
  },
  {
    q: 'The game still will not launch. What next?',
    a: 'Check Windows Security Protection history for the exact blocked file path — if it is not the game exe, the real culprit is an antivirus or overlay injecting into the process. Run a clean boot, reinstall to a non-system-drive Steam library, and confirm no Group Policy application-control rules apply (common on managed PCs). If a security tool names the file explicitly, whitelist it there before touching Smart App Control again.',
  },
];

export default function Error0x11c7Page() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      <Breadcrumb items={[
        { name: 'Troubleshooting', href: '/troubleshooting/' },
        { name: 'Error 0x11C7', href: '/troubleshooting/error-0x11c7/' },
      ]} />
      <ArticleJsonLd
        headline="How to Fish Error 0x11C7: Smart App Control Blocks the Game"
        description="Fix the 0x11C7 launch error by verifying Steam files first, then adjusting Windows Smart App Control — the security-policy block behind the crash."
        url="https://howtofish101.com/troubleshooting/error-0x11c7/"
        datePublished="2026-08-26"
        dateModified="2026-08-27"
      />
      <FaqJsonLd faqs={faqs} />
      <div>
        <h1 className="text-3xl font-extrabold text-white tracking-tight">How to Fish Error 0x11C7: Smart App Control Blocks the Game</h1>
        <p className="text-xs text-gray-500 mt-2">Last verified August 27, 2026</p>
        <p className="text-gray-400 text-sm mt-2">
          You click Play, the process flashes, and Windows reports error 0x11C7. This is a security-policy block, not a
          game bug — and the fix order matters if you do not want to lower your whole system&apos;s defenses.
        </p>

        <Sources
          items={[
            {
              label: 'Smart App Control frequently asked questions — Microsoft Support',
              href: 'https://support.microsoft.com/en-us/windows/security/threat-malware-protection/smart-app-control-frequently-asked-questions',
              note: 'Official Microsoft documentation on Smart App Control behavior',
            },
            {
              label: 'App & browser control in the Windows Security app — Microsoft Support',
              href: 'https://support.microsoft.com/en-us/windows/security/windows-security/app-browser-control-in-the-windows-security-app',
              note: 'Where to find the Smart App Control toggle',
            },
          ]}
        />
      </div>

      <div className="bg-ocean-900/80 border border-ocean-800 rounded-xl p-6 space-y-5 text-sm text-gray-300">
        <h2 className="text-xl font-bold text-white border-b border-ocean-800 pb-2">What Error 0x11C7 Actually Means</h2>
        <p>
          The 0x11C7 failure appears when Windows application control stops <code className="text-aqua">How to Fish.exe</code> before
          the first frame. Smart App Control — the reputation-based gate that ships enabled on fresh Windows 11 installs —
          evaluates every downloaded executable, and indie games repackaged by frequent patches sometimes lack the
          reputation history to pass automatically. Enterprise machines can hit the same code through Group Policy
          application-control rules instead.
        </p>
        <p>
          The diagnostic tell is timing: a genuine game crash shows a splash screen or a crash reporter. 0x11C7 is
          instant, because the OS vetoed the launch. Your save data is untouched — nothing ran far enough to touch it.
        </p>

        <h2 className="text-xl font-bold text-white border-b border-ocean-800 pb-2 pt-2">Safe Fix Order</h2>
        <ol className="list-decimal pl-5 space-y-3 text-xs">
          <li>
            <strong>Verify game files in Steam</strong> (Properties → Local Files → Verify Integrity of Game Files).
            A truncated download is the cheapest possible cause and takes two minutes to rule out.
          </li>
          <li>
            <strong>Reboot Windows.</strong> Application-control verdicts are cached per file per session; verified
            executables frequently launch normally after a restart.
          </li>
          <li>
            <strong>Check Protection History</strong> in Windows Security. It names the exact blocked file. If the path is
            not the game executable, you are chasing the wrong enemy — whitelist that file in the tool that flagged it.
          </li>
          <li>
            <strong>Reinstall into a non-system-drive library</strong> if verification keeps failing on the same file.
          </li>
          <li>
            <strong>Only then, consider Smart App Control.</strong> Turn it off via Settings → Privacy &amp; Security →
            Windows Security → App &amp; browser control → Smart App Control → Off. Remember: it cannot be switched back on
            without resetting Windows, so everything on this list above is worth exhausting first.
          </li>
        </ol>

        <h2 className="text-xl font-bold text-white border-b border-ocean-800 pb-2 pt-2">FAQ</h2>
        <div className="space-y-4">
          {faqs.map((f) => (
            <div key={f.q}>
              <h3 className="font-bold text-white text-sm">{f.q}</h3>
              <p className="text-xs text-gray-400 mt-1">{f.a}</p>
            </div>
          ))}
        </div>

        <h2 className="text-xl font-bold text-white border-b border-ocean-800 pb-2 pt-2">Related Fixes</h2>
        <p className="text-xs">
          For generic launch failures without an error code, see <Link href="/settings/" className="text-aqua hover:underline">black screen &amp; best settings</Link>.
          If co-op lobbies are the problem instead, the <Link href="/troubleshooting/join-friends/" className="text-aqua hover:underline">cannot join friends guide</Link> covers
          version mismatches and lobby black screens.
        </p>
      </div>
    </div>
  );
}
