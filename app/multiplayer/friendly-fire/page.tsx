import Breadcrumb from '@/components/Breadcrumb';
import Link from 'next/link';
import { FaqJsonLd } from '@/components/JsonLd';
import Sources from '@/components/Sources';

export const metadata = {
  title: 'Friendly Fire & Slap Revives: Co-op Chaos Explained',
  description:
    'How friendly fire works in How to Fish: the friendly-fire toggle in host settings, the reported bug where turning it off does not stop team damage, slap-to-revive downed teammates, and the anti-griefer patches that protect your lobby.',
  alternates: { canonical: 'https://howtofish101.com/multiplayer/friendly-fire/' },
};

const faqs = [
  {
    q: 'Can you turn off friendly fire in How to Fish?',
    a: 'There is a friendly-fire selection box in the settings, and multiple players have reported two separate problems with it: the box can be impossible to press with certain controllers (one crew had to swap to mouse and keyboard), and turning it off has not reliably stopped team damage for everyone. One limit is now official: since Patch 1.0.11 you die from your own explosives even with friendly fire disabled — that part is intentional, not a bug.',
  },
  {
    q: 'How do you revive a downed teammate?',
    a: 'Run over and slap them — reviewers describe it as picking a downed friend up and slapping them in the face a few times until they are back on their feet. It is exactly as dignified as it sounds, and it is the core reason co-op boss fights stay winnable while everyone is laughing.',
  },
  {
    q: 'Is there PvP in How to Fish?',
    a: 'No. The game is co-op only — there is no versus mode. Friendly fire is chaos inside a shared team, not a competitive mode, and the closest thing to real conflict remains the shared wallet.',
  },
  {
    q: 'How do I stop griefers from ruining a lobby?',
    a: 'Host a private lobby joinable only by invite (added in Patch 1.0.4). The developers have also shipped anti-griefer fixes since — Patch 1.0.6 stopped joiners instantly ending the game, and Patch 1.0.10 removed a chat rich-text exploit and widened the join window. Our join-friends troubleshooting guide walks through the full setup.',
  },
];

export default function FriendlyFirePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      <Breadcrumb items={[{ name: 'Multiplayer', href: '/multiplayer/' }, { name: 'Friendly Fire', href: '/multiplayer/friendly-fire/' }]} />
      <h1 className="text-3xl font-extrabold text-white">Friendly Fire &amp; Slap Revives in How to Fish</h1>
      <p className="text-xs text-gray-500 -mt-4">Last verified September 4, 2026 · Game version 1.0.11</p>

      <div className="bg-ocean-900/80 border border-ocean-800 rounded-xl p-6 space-y-3 text-sm text-gray-300">
        <p>
          In most co-op games, friendly fire is a settings footnote. Here it is half the highlight reel: shotguns in
          crowded coves, <Link href="/guides/dynamite/" className="text-aqua hover:underline">dynamite throws</Link> that
          catch a friend instead of a fish, and a revive system that asks you to physically slap your fallen crewmate
          back to life. This page covers what the friendly-fire toggle actually does, the bug players are reporting
          with it, and how the developers have been pushing griefers out of the game.
        </p>
      </div>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white">The Friendly-Fire Toggle Exists — With Caveats</h2>
        <div className="bg-ocean-900/80 border border-ocean-800 rounded-xl p-6 space-y-3 text-sm text-gray-300">
          <p>
            The settings menu includes a friendly-fire selection box, so crews who want a no-team-damage session have
            an official switch to reach for. Two problems show up in the community thread tracking it:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong className="text-white">Controller input:</strong> one host with a Steam controller could not press the selection box at all — the crew only reached the setting after swapping to mouse and keyboard. It fits a broader pattern reviewers noted about option menus that make it hard to tell what you are selecting.</li>
            <li><strong className="text-white">Off is not always off:</strong> the same thread reports turning friendly fire off without team damage actually stopping, confirmed by additional players replying to the thread. Treat team-damage immunity as unreliable on current builds and keep blast radius discipline as your real protection.</li>
          </ul>
          <p>
            <strong className="text-white">Patch 1.0.11 settled the explosives half of this.</strong> The official
            notes state: &ldquo;You will now die from your own explosives even with friendly fire disabled.&rdquo; In
            other words, the toggle was never meant to shield you from your own dynamite — that is deliberate design,
            so keep blast-radius discipline even in a no-friendly-fire lobby. The separate report that the toggle
            fails to stop team damage <em>between players</em> remains unaddressed in any patch note.
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white">Slap-to-Revive: the Best Revive Mechanic in Co-op</h2>
        <div className="bg-ocean-900/80 border border-ocean-800 rounded-xl p-6 space-y-3 text-sm text-gray-300">
          <p>
            When a player goes down, a surviving teammate can run over, pick them up, and slap them in the face a few
            times to bring them back — a revive loop reviewers have called one of the funniest in games. The details
            that matter in a boss fight:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong className="text-white">Someone has to still be up.</strong> The slap revive needs a living slapper — which is why boss guides (see the <Link href="/bosses/" className="text-aqua hover:underline">boss hub</Link>) tell full crews to play defensively once only one player remains.</li>
            <li><strong className="text-white">The sky is not safe either.</strong> Seagulls have been observed swooping down and making off with downed players&apos; bodies. Patch 1.0.4 also had to clean up stale revive text left behind by a self-revive-while-being-held quirk — evidence of just how chaotic the downed state can get.</li>
            <li><strong className="text-white">Solo has no such safety net.</strong> Downed with no crew around means the respawn rules take over — see <Link href="/guides/death/" className="text-aqua hover:underline">what happens when you die</Link>.</li>
          </ul>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white">Griefers, and the Patches That Fight Them</h2>
        <div className="bg-cyan-950/50 border border-cyan-500/30 rounded-xl p-5 space-y-2 text-sm">
          <ul className="list-disc pl-5 space-y-2">
            <li><strong className="text-white">Patch 1.0.4</strong> — added the private-lobby option (invite-only joins) and support for up to 8-player lobbies.</li>
            <li><strong className="text-white">Patch 1.0.6</strong> — griefers can no longer instantly end the game when joining a lobby.</li>
            <li><strong className="text-white">Patch 1.0.10</strong> — removed the chat rich-text exploit and increased the allowed connection time, the two fixes behind most remaining join/disconnect griefing reports.</li>
          </ul>
          <p>
            If your lobby keeps getting wrecked by strangers, the fix is boring and effective: host private, invite
            deliberately. Our <Link href="/troubleshooting/join-friends/" className="text-aqua hover:underline">join-friends guide</Link> covers
            the setup, and every official change is logged in <Link href="/updates/" className="text-aqua hover:underline">patch history</Link>.
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white">Friendly Fire FAQ</h2>
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
          { label: 'Steam Discussion: “Friendly fire won’t turn off?”', href: 'https://steamcommunity.com/app/4001890/discussions/0/582806239606627189/', note: 'toggle location, controller-input failure, off-toggle not stopping team damage' },
          { label: 'GamingOnLinux — “How to Fish is another brilliantly funny online co-op game”', href: 'https://www.gamingonlinux.com/2026/08/how-to-fish-is-another-brilliantly-funny-online-co-op-game/', note: 'slap-to-revive description, seagull body-snatching, option-menu usability' },
          { label: 'Official patch notes feed (app 4001890)', href: 'https://store.steampowered.com/feeds/news/app/4001890/', note: '1.0.4 private lobbies, 1.0.6 griefer fix, 1.0.10 chat-exploit removal, 1.0.11 own-explosives rule' },
        ]}
      />
      <FaqJsonLd faqs={faqs} />
    </div>
  );
}
