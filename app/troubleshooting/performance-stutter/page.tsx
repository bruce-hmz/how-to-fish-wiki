import Breadcrumb from '@/components/Breadcrumb';
import Link from 'next/link';
import { FaqJsonLd, ArticleJsonLd } from '@/components/JsonLd';
import Sources from '@/components/Sources';

export const metadata = {
  title: 'Fix Stuttering & 100% GPU Usage in How to Fish',
  description: 'How to Fish pushing your GPU to 100% or stuttering on a high-end PC? The in-game FPS limiter is unreliable — cap frames in your GPU driver instead. Plus the mouse-polling-rate fix for lag on fast flicks, tearing fixes, and what changed after recent patches.',
  alternates: { canonical: 'https://howtofish101.com/troubleshooting/performance-stutter/' },
};

const faqs = [
  {
    q: 'Why is How to Fish using 100% of my GPU?',
    a: 'The game renders uncapped frames: with the in-game limiter unreliable, it pushes as many FPS as the hardware allows, which pins utilization (and fan noise) at maximum. The accepted fix from the community: set a maximum frame rate in your GPU driver — NVIDIA Control Panel (Max Frame Rate) or AMD Adrenalin — instead of inside the game. One player measured utilization dropping from 90%+ to about 15% after capping in the driver.'
  },
  {
    q: 'Does the in-game FPS cap work?',
    a: 'Multiple players report it does not hold: one set the in-game cap to 60 and still measured 400+ FPS with V-Sync toggled as well. Treat the in-game limiter as unreliable on current builds and set your cap in the NVIDIA Control Panel or AMD Adrenalin. A resolution drop is an emergency fallback — it cut load immediately for a 3080 Ti owner.'
  },
  {
    q: 'Why am I stuttering with a high-end PC (even an RTX 4090)?',
    a: 'Screen tearing and stutter have been reported on flagship hardware — one 4090 / Ryzen 9800X3D owner sees it with and without V-Sync and frame limits — while other players with mid-range cards run the game smoothly at high settings, so it is not a pure hardware ceiling. Driver-side frame caps smooth out pacing for many, and one owner resolved stutter after the next game update. No single universal fix is confirmed yet; no patch note has claimed a performance fix so far.'
  },
  {
    q: 'Will a patch fix the performance issues?',
    a: 'The developers have been shipping frequent patches (see our patch history), but none of the notes through 1.0.12 mention client-side optimization — 1.0.12\u2019s only FPS-related line fixes a multiplayer issue where the FishNet library capped your max FPS on lobby join. Reports also show the problem shifting between updates — lag that appeared after one August update cleared for one player after the next one — so updating to the current build and verifying game files are worthwhile first steps, followed by the driver-side cap.'
  },
  {
    q: 'Why does the game lag when I flick my mouse quickly?',
    a: 'This is a distinct pattern from general stutter, and it has a community-verified fix: a very high mouse polling rate. Players running gaming mice at 8000 Hz saw huge FPS drops on fast flicks, and setting the polling rate down to 1000 Hz resolved it ("fixed mine") — another player in the same thread paired 125 Hz polling with a 125 FPS driver cap. See Fix #4 below.'
  },
];

export default function PerformanceStutterPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8 text-sm text-gray-300">
      <ArticleJsonLd
        headline="Fix Stuttering & 100% GPU Usage in How to Fish"
        description="The in-game FPS limiter is unreliable — cap frames in your GPU driver instead. Verified by measured player reports, plus tearing fixes and patch-history context."
        url="https://howtofish101.com/troubleshooting/performance-stutter/"
        datePublished="2026-08-28"
        dateModified="2026-09-10"
      />
      <Breadcrumb items={[{ name: 'Troubleshooting', href: '/troubleshooting/' }, { name: 'Performance & Stutter', href: '/troubleshooting/performance-stutter/' }]} />
      <h1 className="text-3xl font-extrabold text-white">How to Fish Performance: Fix 100% GPU, Stuttering &amp; Tearing</h1>
      <p className="text-xs text-gray-500 -mt-4">Last verified September 10, 2026 · Game version 1.0.12</p>

      <div className="bg-coral/10 border border-coral/40 rounded-xl p-5 space-y-2">
        <p className="font-bold text-white text-sm">First, which problem do you actually have?</p>
        <ul className="list-disc list-inside space-y-1 text-xs">
          <li><strong className="text-white">GPU pinned at 90–100%, fans roaring, even at the menu</strong> → it is the uncapped framerate. Fix #1 below solves it in two minutes.</li>
          <li><strong className="text-white">Regular stutters or screen tearing while playing</strong> → Fix #2, with honest notes on what works and what is still unresolved.</li>
          <li><strong className="text-white">Ran fine before, laggy since a game update</strong> → Fix #3: update-era checklist.</li>
          <li><strong className="text-white">Runs fine until you flick the mouse fast, then frames crater</strong> → Fix #4: mouse polling rate.</li>
        </ul>
      </div>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white">Fix #1 — Cap FPS in Your GPU Driver (Not In-Game)</h2>
        <p className="text-gray-300 leading-relaxed">
          This is the accepted answer on the game&rsquo;s own forums, and it comes with before/after numbers. The
          in-game limiter does not hold — one player set it to 60 FPS and still measured <strong className="text-white">400+ FPS</strong>,
          with V-Sync on top. The game keeps rendering every frame your hardware can push, so utilization sits at 90–100%
          and the card cooks itself.
        </p>
        <ol className="list-decimal pl-5 space-y-3 bg-ocean-900/80 border border-ocean-800 rounded-xl p-6 text-xs leading-relaxed">
          <li><strong className="text-white">NVIDIA:</strong> open NVIDIA Control Panel → Manage 3D Settings → Program Settings → How to Fish → enable <strong>Max Frame Rate</strong> and set it to your monitor&rsquo;s refresh rate (or 60).</li>
          <li><strong className="text-white">AMD:</strong> open AMD Adrenalin → Gaming → How to Fish → enable <strong>Frame Rate Target Control</strong> (or Radeon Chill) with the same target.</li>
          <li><strong className="text-white">Launch the game</strong> and check utilization in the driver overlay: a capped setup should show the GPU loafing instead of pegging.</li>
          <li><strong className="text-white">Emergency fallback:</strong> drop the resolution — a 3080 Ti owner went from &ldquo;jet engine at 4K&rdquo; to comfortable play at 1080p even before capping.</li>
        </ol>
        <div className="bg-ocean-900/60 border border-ocean-800 rounded-xl p-5 text-xs space-y-2">
          <p><strong className="text-white">Measured result from the thread:</strong> &ldquo;Changing my GPU&rsquo;s max frame rate worked for me. I&rsquo;m now at 15% GPU utilization and not 90+.&rdquo;</p>
          <p className="text-gray-400">Aim for a cap at or below your monitor refresh — frame rates far above it only add heat and tearing. Our{' '}
            <Link href="/settings/" className="text-aqua hover:underline">settings guide</Link> covers the rest of the options menu, including the 30 FPS floor behavior for very low caps.
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white">Fix #2 — Stuttering and Screen Tearing on a Strong PC</h2>
        <p className="text-gray-300 leading-relaxed">
          The honest picture from the forums: tearing and stutter get reported even on a{' '}
          <strong className="text-white">RTX 4090 with a Ryzen 9800X3D</strong>, with or without V-Sync and frame limits —
          while other players with mid-range hardware report flawless high-setting play. That split means it is not your PC
          being weak, but also not a guaranteed bug on every machine. What the reports support:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-sm text-gray-300">
          <li><strong className="text-white">Cap frames in the driver first</strong> (Fix #1) — smoothing frame pacing is the single most-repeated improvement, and uncapped rendering amplifies tearing.</li>
          <li><strong className="text-white">Prefer G-Sync / FreeSync</strong> over in-game V-Sync if your monitor supports it — the community suggestion for tearing with less input lag, which matters for casting and reeling timing.</li>
          <li><strong className="text-white">Try a different display mode</strong> — borderless windowed versus fullscreen changes the compositor path and has helped tearing in other Unity games; treat it as an experiment, not a verified fix.</li>
          <li><strong className="text-white">One unconfirmed pattern:</strong> a single thread saw NVIDIA laptop GPUs stutter while an AMD desktop did not. Interesting, but one data point — do not buy hardware over it.</li>
        </ul>
        <p className="text-xs text-gray-400">
          No patch note through 1.0.12 claims client-side optimization or limiter fixes — 1.0.12&rsquo;s only FPS line fixes the multiplayer lobby-join cap. If stutter is your only symptom, the driver cap plus patience for the next patch is the current state of the art.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white">Fix #3 — It Ran Fine Until an Update</h2>
        <p className="text-gray-300 leading-relaxed">
          Several players date their lag to a specific August update — one reports a machine that &ldquo;ran fine on
          Friday&rdquo; lagging by Saturday while other AAA titles stayed smooth. The encouraging part of that same
          thread: after the next game update, the affected machine &ldquo;now runs fine.&rdquo; The checklist:
        </p>
        <ol className="list-decimal pl-5 space-y-3 bg-ocean-900/80 border border-ocean-800 rounded-xl p-6 text-xs leading-relaxed">
          <li><strong className="text-white">Update to the current build</strong> — patches have been landing every day or two; check{' '}
            <Link href="/updates/" className="text-aqua hover:underline">the patch history</Link> for the latest.</li>
          <li><strong className="text-white">Verify game files</strong> (Steam → Properties → Installed Files → Verify) — one affected player confirmed doing this; harmless and rules out a bad download.</li>
          <li><strong className="text-white">Re-apply the driver-side cap</strong> after driver or game reinstalls — program-specific profiles can reset.</li>
          <li><strong className="text-white">Still lagging?</strong> Add your hardware and timing to the forum threads — the repeated post-update pattern is what gets optimization onto the developers&rsquo; radar.</li>
        </ol>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white">Fix #4 — FPS Drops on Fast Mouse Flicks? Lower Your Polling Rate</h2>
        <p className="text-gray-300 leading-relaxed">
          A separate, very specific stutter pattern from everything above: the game runs fine until you whip the mouse
          around, then frames crater for a moment. An August thread with exactly this complaint — <em>&ldquo;whenever I
          flick or move my mouse quickly, lags and I get a huge FPS drop&rdquo;</em>, even with frames already capped via
          the GPU driver — came back in September with a verified fix: <strong className="text-white">the mouse&rsquo;s
          polling rate</strong>.
        </p>
        <ol className="list-decimal pl-5 space-y-3 bg-ocean-900/80 border border-ocean-800 rounded-xl p-6 text-xs leading-relaxed">
          <li><strong className="text-white">Open your mouse&rsquo;s software</strong> (Logitech G HUB, Razer Synapse, etc.) — or your motherboard&rsquo;s USB settings for dongle mice — and find the <strong>polling rate</strong> setting. High-end gaming mice default to 1000–8000 Hz.</li>
          <li><strong className="text-white">Set it to 1000 Hz or lower.</strong> The player running 8000 Hz dropped it to 1000 and reported it fixed (&ldquo;If you have the polling rate of your mouse at 8000hz put it on 1000, fixed mine&rdquo;); another reply in the same thread pairs 125 Hz polling with a 125 FPS driver cap.</li>
          <li><strong className="text-white">Retest the flick motion in-game</strong> — the drop-on-flick pattern should be gone; if it persists, cap frames in the driver per Fix #1 and re-check.</li>
        </ol>
        <p className="text-xs text-gray-400">
          Why it works: every polling cycle is a CPU interrupt the game has to service. At 8000 Hz that is eight times
          the interrupt load of a standard 1000 Hz mouse, which is felt most when the view moves fast. This fix is
          community-verified for this game, not official — no patch note mentions polling.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white">Performance FAQ</h2>
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
          { label: 'Steam Discussion: “GPU cooker?” (accepted answer, Aug 2026)', href: 'https://steamcommunity.com/app/4001890/discussions/0/582806523877554180/', note: 'source of the broken in-game limiter reports, the 60→400+ FPS measurement, and the 90%→15% utilization fix' },
          { label: 'Steam Discussion: “bad performance.” (Aug 2026)', href: 'https://steamcommunity.com/app/4001890/discussions/0/582806239606619650/', note: '4090 stutter report, post-update lag onset and resolution, NVIDIA-vs-AMD anecdote' },
          { label: 'Steam Discussion: FPS drop on fast mouse flicks (Aug 2026, bumped Sep 9)', href: 'https://steamcommunity.com/app/4001890/discussions/0/581680664978568596/', note: 'source of the mouse-polling-rate fix (8000 Hz → 1000 Hz, "fixed mine") and the 125 Hz + driver-cap pairing' },
          { label: 'XModHub: How to Fish Low FPS Fix — Complete PC Performance Guide', href: 'https://www.xmodhub.com/info/guides/how-to-fish-low-fps-fix/', note: 'independent guide recommending the same NVIDIA Control Panel 60 FPS cap' },
          { label: 'Official patch notes feed (app 4001890)', href: 'https://store.steampowered.com/feeds/news/app/4001890/', note: 'no client-side optimization fixes through Patch 1.0.12 (its one FPS line is the multiplayer lobby-join cap)' },
        ]}
      />
      <FaqJsonLd faqs={faqs} />
    </div>
  );
}
