import Breadcrumb from '@/components/Breadcrumb';
import Link from 'next/link';
import { FaqJsonLd } from '@/components/JsonLd';
import Sources from '@/components/Sources';

export const metadata = {
  title: 'Can You Die in How to Fish? Every Way to Die & What You Lose',
  description:
    'Yes — fish, hunger, night raids, your own dynamite, and your friends can all kill you in How to Fish. How the downed-and-slap-revive system works, where you respawn, and what actually happens to your gear when you die.',
  alternates: { canonical: 'https://howtofish101.com/guides/death/' },
};

const faqs = [
  {
    q: 'Can a fish actually kill you?',
    a: 'Yes. Reviews of the game make a point of it: plenty of the bigger fish fight back, boss fish like the Giant Piranha actively hunt players, and nighttime brings aggressive fish that ram your boat and leap onto the deck. A low hunger bar makes any of these hits dramatically more dangerous.',
  },
  {
    q: 'Where do you respawn when you die?',
    a: 'You respawn at a dock rather than losing your session — early on, that is the starter island dock after a night ambush. Deaths are meant to be budgeted, not feared: cheap backup weapons beat grieving a lost loadout.',
  },
  {
    q: 'Do you lose your weapons when you die?',
    a: 'Sometimes. Death is one of the windows where a save can be written without your equipment state, and gear dropped on the ground used to despawn after save/load cycles. Since Patch 1.0.10, up to 64 ground items persist — prioritizing weapons, tools, and quest items — so sweeping back to where you died has a real chance of recovering your kit.',
  },
  {
    q: 'Can your own dynamite kill you?',
    a: 'Yes — the blast does not spare the thrower. Guide write-ups are blunt about misjudged radius kills, which is also why dynamite is the leading cause of friendly-fire incidents in co-op crews.',
  },
];

export default function DeathGuidePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      <Breadcrumb items={[{ name: 'Guide', href: '/guide/' }, { name: 'Death', href: '/guides/death/' }]} />
      <h1 className="text-3xl font-extrabold text-white">Can You Die in How to Fish?</h1>
      <p className="text-xs text-gray-500 -mt-4">Last verified September 1, 2026 · Game version 1.0.10</p>

      <div className="bg-ocean-900/80 border border-ocean-800 rounded-xl p-6 space-y-3 text-sm text-gray-300">
        <p>
          The premise is a boat crash, a mysterious archipelago, and a to-do list of fishing, shooting, surviving, and
          gambling — so yes, you can die, and you will. Reviewers who sank dozens of hours into the game report dying
          <em> a lot</em>, often purely to their own idiocy. This page is the honest list of everything on the islands
          that can kill you, what the downed-and-revive system does about it, and what a death actually costs you.
        </p>
      </div>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white">Every Documented Way to Die</h2>
        <div className="bg-ocean-900/80 border border-ocean-800 rounded-xl p-6 space-y-3 text-sm text-gray-300">
          <ul className="list-disc pl-5 space-y-2">
            <li><strong className="text-white">Hunger.</strong> Your hunger meter drains steadily, and at zero you lose health rapidly — starvation during a boss fight is the classic early-game wipe. Carry emergency food; the <Link href="/guide/" className="text-aqua hover:underline">beginner walkthrough</Link> recommends 5–10 raw clams at all times.</li>
            <li><strong className="text-white">Fish that fight back.</strong> Bigger fish do not wait at the end of a rod politely — reviewers single out boss fights where the fish hunts you, like the <Link href="/bosses/giant-piranha/" className="text-aqua hover:underline">Giant Piranha</Link> flopping across the shallows spewing smaller piranhas at the crew.</li>
            <li><strong className="text-white">Night raids.</strong> Nighttime is not cosmetic: aggressive nocturnal fish ram your hull and leap onto the deck, and a single solid hit on an already-drained health bar can knock you out and send you back to a dock.</li>
            <li><strong className="text-white">Bosses.</strong> Every boss from the <Link href="/bosses/" className="text-aqua hover:underline">Spider Crab to the Magma Whale</Link> can end you; HP scaling in co-op makes careless crews feed revives to the slap economy.</li>
            <li><strong className="text-white">Your own dynamite.</strong> The blast radius does not check whose feet are in it — misjudged sticks are a documented self-kill and the opening move of most <Link href="/multiplayer/friendly-fire/" className="text-aqua hover:underline">friendly-fire highlight reels</Link>.</li>
            <li><strong className="text-white">Your friends.</strong> There is a friendly-fire toggle, and explosives, shotguns, and physics do the rest. Griefing by strangers has been getting patched out; griefing by friends is a feature.</li>
          </ul>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white">Downed vs. Dead: the Slap-Revive Layer</h2>
        <div className="bg-ocean-900/80 border border-ocean-800 rounded-xl p-6 space-y-3 text-sm text-gray-300">
          <p>
            In co-op, running out of health usually means you are <strong className="text-white">downed</strong>, not
            out: any surviving teammate can run over and slap you back to life — reviewers call it one of the funniest
            revive mechanics in games. Two consequences for how you play:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong className="text-white">Never let the last player get greedy.</strong> Once the whole crew is down, the safety net is gone — solo players have no slapper at all.</li>
            <li><strong className="text-white">Watch the sky.</strong> Seagulls have been seen picking up downed bodies, which is funny right up until the revive target is halfway to another island.</li>
          </ul>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white">What a Death Actually Costs You</h2>
        <div className="bg-cyan-950/50 border border-cyan-500/30 rounded-xl p-5 space-y-2 text-sm">
          <ol className="list-decimal pl-5 space-y-2">
            <li><strong className="text-white">You respawn at a dock</strong> — the session continues. Budget deaths like any fishing trip instead of rage-quitting over them.</li>
            <li><strong className="text-white">Your kit may be on the ground where you fell.</strong> The <Link href="/troubleshooting/items-disappeared/" className="text-aqua hover:underline">missing-items guide</Link> documents how death windows can drop carried equipment; since Patch 1.0.10, up to 64 ground items persist, prioritizing weapons, tools, and quest items. Sweep outward from where you died before re-buying.</li>
            <li><strong className="text-white">Re-buy cheap when the corpse run fails.</strong> Boss guides keep cheap re-buy routes per island for exactly this — the Spider Crab knife loop is the famous one. Re-earning is the fallback; a <Link href="/troubleshooting/save-file/" className="text-aqua hover:underline">save backup</Link> made <em>before</em> the loss is the only true undo.</li>
          </ol>
          <p className="text-xs text-gray-500">
            What we deliberately do not claim: exact corpse-despawn timers or hunger-damage rates. No patch note or
            guide we verified pins those numbers, and we would rather leave the blanks than fill them in.
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white">Death FAQ</h2>
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
          { label: 'GamingOnLinux — “How to Fish is another brilliantly funny online co-op game”', href: 'https://www.gamingonlinux.com/2026/08/how-to-fish-is-another-brilliantly-funny-online-co-op-game/', note: 'fish that fight back, slap-to-revive, seagull body-snatching, death frequency' },
          { label: 'Game8 — How to Fish Beginner’s Guide', href: 'https://game8.co/games/How-to-Fish/archives/616926', note: 'hunger and health management' },
          { label: 'NerdsChalk — Everyone’s Dream dynamite guide', href: 'https://nerdschalk.com/kill-seagull-with-dynamite-how-to-fish/', note: 'blast radius self-damage' },
          { label: 'Official patch notes feed (app 4001890)', href: 'https://store.steampowered.com/feeds/news/app/4001890/', note: '1.0.10 ground-item persistence (64 items, weapon/tool/quest priority)' },
        ]}
      />
      <FaqJsonLd faqs={faqs} />
    </div>
  );
}
