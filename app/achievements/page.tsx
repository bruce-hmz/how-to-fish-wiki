import Breadcrumb from '@/components/Breadcrumb';
import Link from 'next/link';
import AchievementChecklist from '@/components/AchievementChecklist';
import { ItemListJsonLd } from '@/components/JsonLd';
import Sources from '@/components/Sources';
import { ACHIEVEMENTS } from '@/lib/achievements';

export const metadata = {
  title: 'All 28 Achievements List & Checklist',
  description: 'Every How to Fish achievement with real Steam unlock rates. Tick them off in your browser and see which trophies are genuinely rare.',
  alternates: { canonical: 'https://howtofish101.com/achievements/' },
};

export default function AchievementsPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      <Breadcrumb items={[{ name: 'Achievements', href: '/achievements/' }]} />
      <ItemListJsonLd
        name="How to Fish achievements"
        items={ACHIEVEMENTS.map((a) => ({ name: a.name, url: `https://howtofish101.com/achievements/#${a.slug}` }))}
      />
      <div>
        <h1 className="text-3xl font-extrabold text-white tracking-tight">All 28 Achievements & Completion Checklist</h1>
        <p className="text-gray-400 text-sm mt-2 max-w-3xl">
          How to Fish ships with 28 Steam achievements. Below is the complete list with the official descriptions
          and the global unlock percentage straight from Steam — so you can see exactly how rare each trophy really is.
          Click any row to tick it off; progress is saved locally in your browser.
        </p>

        <Sources
          items={[
            {
              label: 'Steam Community Achievements — How to Fish',
              href: 'https://steamcommunity.com/stats/4001890/achievements',
              note: 'All 28 global unlock percentages, captured August 26, 2026',
            },
            {
              label: 'How to Fish on Steam',
              href: 'https://store.steampowered.com/app/4001890/How_to_Fish/',
              note: 'Official achievement icons and descriptions',
            },
            {
              label: 'Steam Discussion: “bugged fish”',
              href: 'https://steamcommunity.com/app/4001890/discussions/0/581680664978603492/',
              note: 'perch log entry staying blacked out despite catching the drip version; special perch named as the last Collector blocker',
            },
            {
              label: 'Reddit r/HowToFish: “Bugged achievement?”',
              href: 'https://www.reddit.com/r/HowToFish/comments/1w0f91h/bugged_achievement/',
              note: 'kill-all-creatures checklist fully checked off without the achievement unlocking',
            },
          ]}
        />
      </div>

      <AchievementChecklist />

      <div className="bg-ocean-900/80 border border-ocean-800 rounded-xl p-6 space-y-4 text-sm text-gray-300">
        <h2 className="text-xl font-bold text-white border-b border-ocean-800 pb-2">Hardest Achievements</h2>
        <p>
          The numbers above make the difficulty gap obvious. Story beats like <strong>Getting started</strong> (98.3%)
          and <strong>Drip</strong> (96.4%) unlock for almost everyone, while the true grind sits at the bottom of the
          table: <strong>Bean</strong> (1.0% — finish the whole game in under one hour), <strong>Fishipedia</strong>
          (1.4% — kill every drip creature), <strong>Handyman</strong> (1.7% — beat the final boss bare-handed), and
          <strong>Everyone&apos;s dream</strong> (4.1% — kill a seagull with dynamite). Chasing that 1% Bean yourself?
          <Link href="/achievements/bean/" className="text-aqua hover:underline">our dedicated Bean route guide</Link>
          covers the clock-safe path as of Patch 1.0.9. Chasing the rest of the rare wall? Deeper coverage:
          <Link href="/fish/drip-fish/" className="text-aqua hover:underline">Fishipedia drip hunting</Link>
          · <Link href="/bosses/magma-whale/" className="text-aqua hover:underline">Handyman bare-fist finale</Link>
          · <Link href="/money/" className="text-aqua hover:underline">Rich Millionaire income planning</Link>
          · <Link href="/difficulty/" className="text-aqua hover:underline">Easy-mode fast boss takedowns for Easy (10 seconds)</Link>
          · <Link href="/achievements/everyones-dream/" className="text-aqua hover:underline">the dynamite seagull setup behind Everyone's dream</Link>.
        </p>
        <p>
          Completionist runs land in the middle: <strong>Collector</strong> (10.8%) needs every creature in the logbook,
          and <strong>Easy</strong> (20.5%) asks for a boss kill within 10 seconds — only realistic with a fully
          upgraded late-game loadout. Check our boss guides for the phase-by-phase routes that make both farmable.
        </p>
        <h2 className="text-xl font-bold text-white border-b border-ocean-800 pb-2 pt-2">Hidden Achievement Notes</h2>
        <p>
          <strong>Who stole my beer</strong> is the first side quest most players stumble into: find the beer thief near
          the starter island and bring the evidence to the lighthouse keeper. <strong>Let me go</strong> unlocks by
          letting a seagull pick you up — stand still on an open beach and wait. <strong>I&apos;m the bird now</strong>
          asks you to make the boat fly, which ties into the volcano physics: max engine, full speed up the caldera ramp.
        </p>
        <h2 className="text-xl font-bold text-white border-b border-ocean-800 pb-2 pt-2">Checked Everything but the Achievement Won&apos;t Unlock?</h2>
        <p>
          Two independent reports describe the same completionist problem. On Steam (August 28), a player hunting
          <strong> Collector</strong> — find and kill all the creatures (10.8%) — had the logbook&apos;s perch entry stay
          blacked out even after catching and killing the species, drip version included; the entry later cleared on its
          own. On Reddit (August 31), a player reports the checklist fully checked off with no achievement popping.
          Neither report produced an official fix, but both players&apos; logs eventually registered — so before assuming
          a permanent bug: re-enter the world, re-catch the species you think is done, and only save after the log entry
          visually fills in. The save-protection order in the{' '}
          <Link href="/troubleshooting/" className="text-aqua hover:underline">troubleshooting hub</Link> applies before
          any retry spree.
        </p>
        <p>
          The most-reported blocker is the <strong>special perch</strong>. Players down to their last creature say the
          perch variant is the one they can&apos;t get — one was fishing Islands 2 and 3 with beginner bait without luck
          before it eventually appeared. The honest caveat: no reliable, reproducible method for forcing the special
          perch has been documented anywhere — the players who unblocked it never stated how — so treat any
          &ldquo;guaranteed farm&rdquo; claims skeptically. The community loop that actually works is in our{' '}
          <Link href="/creatures/rare-variants/" className="text-aqua hover:underline">rare variants guide</Link> (vary
          bait and weather, progress islands before grinding), and the{' '}
          <Link href="/fish/" className="text-aqua hover:underline">fish database</Link> tracks what is confirmed about
          each species so far.
        </p>
      </div>
    </div>
  );
}
