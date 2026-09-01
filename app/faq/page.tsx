import Breadcrumb from '@/components/Breadcrumb';
import Link from 'next/link';
import { FaqJsonLd } from '@/components/JsonLd';
import Sources from '@/components/Sources';

export const metadata = {
  title: 'Frequently Asked Questions',
  description: 'Straight answers about How to Fish: platforms, controllers, saves, game length, the endgame volcanic rod, PvP, modding, and offline play — each tied to deeper guides.',
  alternates: { canonical: 'https://howtofish101.com/faq/' },
};

const faqs = [
  {
    q: 'Is How to Fish cross-platform?',
    a: 'The game runs on PC (Steam) and Steam Deck, and Steam Deck players can co-op with desktop PC players through Steam’s native friend invite system. There are no console or mobile versions yet.'
  },
  {
    q: 'How many fish exist in the game?',
    a: 'Community catalogs count 49 unique logbook entries across six rarity tiers, including Legendary species and Drip variants. Our fish database publishes species one at a time as their spawn conditions get verified.',
    link: { href: '/fish/', label: 'fish database' },
  },
  {
    q: 'Does the game support controllers?',
    a: 'Yes — full native controller support for Xbox, PlayStation, and Steam Deck layouts, including correct PlayStation glyphs since Patch 1.0.8.',
    link: { href: '/settings/', label: 'settings & Steam Deck setup' },
  },
  {
    q: 'Where are save files located?' ,
    a: 'On Windows they live in C:\\Users\\[username]\\AppData\\LocalLow\\Dazed Games\\How to Fish\\Saves. On Steam Deck or Linux via Proton, the same folder sits inside the game’s compatdata prefix.',
    link: { href: '/troubleshooting/save-file/', label: 'save file location & backups' },
  },
  {
    q: 'Is there a max level cap?',
    a: 'No official level-cap number has ever been published — pages quoting “level 50” are guessing. What is confirmed: the Legendary Volcanic Rod drops from the final boss fight rather than any level milestone, and combat difficulty is tuned through the Easy/Hard modes introduced in Patch 1.0.9.',
    link: { href: '/bosses/magma-whale/', label: 'Magma Whale rewards' },
  },
  {
    q: 'Can you PvP against other players?',
    a: 'No. How to Fish is co-op only — there is no PvP mode anywhere in the game. What co-op does have is an optional friendly-fire toggle, explosives that do not check whose feet are in the blast, and a slap-to-revive system for when that goes wrong — see our friendly fire guide for the toggle and its reported bugs. The closest thing to actual player conflict is sharing a wallet, which crews famously have feelings about.'
  },
  {
    q: 'Is modding supported?',
    a: 'Not officially. No mod tools ship with the game, but a community Nexus Mods section exists with quality-of-life tweaks (including one that disables weapon-cooking entirely). Mods are unofficial: they can break on any patch, so weigh convenience against the annoyance.',
    link: { href: '/troubleshooting/cooked-weapons/', label: 'an example of what mods get used for' },
  },
  {
    q: 'How long does it take to beat?',
    a: 'Community reports vary: first story clears commonly land somewhere around 4–8 hours depending on crew size and how much the fishing minigame distracts you. Completionist goals — every achievement, the full logbook chase, all bosses on Hard — stretch far beyond that, and nobody outside Dazed Games has published an official figure. Speedrunners have showcased sub-half-hour all-bosses routes, which tells you how much pace can swing.',
    link: { href: '/troubleshooting/what-to-do-next/', label: 'progression help by game state' },
  },
  {
    q: 'What happens when I die?',
    a: 'You respawn at the last dock you visited rather than losing your session. Budget for deaths like any fishing trip — cheap backup weapons beat grieving a lost loadout — and if equipment goes missing after a reload instead of a death, that is a different bug class entirely.',
    link: { href: '/troubleshooting/items-disappeared/', label: 'items disappeared triage' },
  },
  {
    q: 'Can I play offline?',
    a: 'Yes. Single-player works fully offline once activated; only online co-op needs an internet connection.'
  },
  {
    q: 'Is How to Fish worth playing solo?',
    a: 'Yes, with tuned expectations. The campaign is completable alone — speedrunners clear it in under half an hour — and since Patch 1.0.9 the Easy mode trims boss health and damage for the walls that previously punished small crews. What you lose is crowd-chaos comedy; what you keep is the whole progression loop.' ,
  },
  {
    q: 'Why does money sometimes not register when I sell fish fast?',
    a: 'Players have reported a selling bug where rapid-fire selling fails to credit cash. Slow down to single sells and confirm each transaction totals up; treat repeatable occurrences as bug-report material rather than a mechanic.' ,
  },
];

const deepDives = [
  { href: '/money/', label: 'Money-making guide with real numbers' },
  { href: '/troubleshooting/save-file/', label: 'Save file location & rollback' },
  { href: '/troubleshooting/cooked-weapons/', label: 'Un-cooking burned weapons' },
  { href: '/achievements/', label: 'All 28 achievements checklist' },
  { href: '/difficulty/', label: 'Easy vs Normal vs Hard, verified' },
];

export default function FAQPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-6 text-sm text-gray-300">
      <Breadcrumb items={[{ name: 'FAQ', href: '/faq/' }]} />
      <h1 className="text-3xl font-bold text-white">Frequently Asked Questions</h1>
      <p className="text-xs text-gray-500 -mt-2">Answers checked August 27, 2026 · Game version 1.0.9</p>
      <div className="bg-ocean-900/80 border border-ocean-800 rounded-xl p-6 space-y-5">
        {faqs.map((item) => (
          <div key={item.q} className="border-b border-ocean-800 pb-4 last:border-0 last:pb-0">
            <h2 className="text-white font-semibold mb-2">{item.q}</h2>
            <p className="text-xs text-gray-400 leading-relaxed">{item.a}</p>
            {item.link ? (
              <Link href={item.link.href} className="inline-block mt-2 text-xs text-aqua hover:underline">
                {item.link.label} →
              </Link>
            ) : null}
          </div>
        ))}
      </div>
      <section className="space-y-3">
        <h2 className="text-lg font-bold text-white">Deeper Guides</h2>
        <div className="flex flex-wrap gap-3">
          {deepDives.map((d) => (
            <Link key={d.href} href={d.href} className="bg-ocean-900 border border-ocean-800 rounded-lg px-4 py-2 text-xs hover:border-aqua/60 transition-colors">{d.label}</Link>
          ))}
        </div>
      </section>
      <Sources
        items={[
          { label: 'How to Fish on Steam (store page)', href: 'https://store.steampowered.com/app/4001890/How_to_Fish/', note: 'platforms, controller support, and co-op basics' },
          { label: 'Official patch notes feed (app 4001890)', href: 'https://store.steampowered.com/feeds/news/app/4001890/', note: 'difficulty modes, PS glyph fix, and other version facts' },
          { label: 'Nexus Mods — How To Fish', href: 'https://www.nexusmods.com/games/howtofish/mods', note: 'community mod section referenced in the modding answer' },
        ]}
      />
      <FaqJsonLd faqs={faqs} />
    </div>
  );
}