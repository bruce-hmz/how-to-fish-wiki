import Breadcrumb from '@/components/Breadcrumb';
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
        items={ACHIEVEMENTS.map((a) => ({ name: a.name, url: 'https://howtofish101.com/achievements/' }))}
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
          <strong>Everyone&apos;s dream</strong> (4.1% — kill a seagull with dynamite).
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
      </div>
    </div>
  );
}
