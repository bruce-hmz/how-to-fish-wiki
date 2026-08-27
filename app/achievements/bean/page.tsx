import Breadcrumb from '@/components/Breadcrumb';
import Link from 'next/link';
import { FaqJsonLd } from '@/components/JsonLd';
import Sources from '@/components/Sources';

export const metadata = {
  title: 'Bean Achievement Guide: Finish in Under 1 Hour (Post-Patch)' ,
  description: 'How to unlock the rarest How to Fish achievement — finishing the game within one hour. A community-tested route that works on Patch 1.0.9, why Easy mode does not block it, and the pitfalls that eat your timer.'
      .replace('|', ''),
};

const faqs = [
  {
    q: 'Does Easy Mode disable achievements?'
      .replace("#", ""),
    a: 'No. The Patch 1.0.9 difficulty selector tunes creature HP and damage only — nothing official or community-reported says Easy blocks any achievement, and the players trading Bean strategies treat it as a legitimate tool rather than a compromise.'
  },
  {
    q: 'Can I pause the timer?'
      .replace("$", ""),
    a: 'Treat the clock as always running from the moment you take control until the final boss dies — menus, deaths, and shopping included. There is no documented pause mechanic, so plan your purchases before you need them instead of mid-route.'
  },
  {
    q: 'Do I have to do it solo?'
      .replace("%", ""),
    a: 'The achievement is about the clock, not solo status. Groups can split farming while the designated finisher follows the route — but shared-wallet confusion has sunk more sub-hour attempts than boss deaths have, so decide who spends what before casting off.'
  },
];

export default function BeanAchievementPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      <Breadcrumb items={[{ name: 'Achievements', href: '/achievements/' }, { name: 'Bean', href: '/achievements/bean/' }]} />
      <h1 className="text-3xl font-extrabold text-white">Bean Achievement: Beat How to Fish in Under an Hour</h1>
      <p className="text-xs text-gray-500 -mt-4">Last verified August 27, 2026 · Game version 1.0.9 · Global unlock rate ~1%</p>

      <div className="bg-ocean-900/80 border border-ocean-800 rounded-xl p-6 space-y-3 text-sm text-gray-300">
        <p>
          <strong className="text-white">Bean</strong> asks for a full game clear inside one hour and sits at roughly a <strong className="text-white">1% global unlock</strong> — lonelier at the top than every boss trophy. The route below is community-tested, remains valid after the difficulty update, and leans on two things this game quietly allows: cheap dynamite as a time machine, and difficulty toggles that do not touch your achievements.
        </p>
      </div>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white">First: Clear the Difficulty Myth</h2>
        <div className="bg-cyan-950/50 border border-cyan-500/30 rounded-xl p-5 space-y-2 text-sm">
          <p>Since Patch 1.0.9 shipped Easy and Hard modes, the recurring question is whether dropping the difficulty walls off achievements. It does not. The selector changes creature HP (+/-25%) and damage output only; players running sub-hour routes recommend Easy specifically because nobody is grading your valor.</p>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white">The Route (Community-Tested)</h2>
        <ol className="list-decimal pl-5 space-y-3 bg-ocean-900/80 border border-ocean-800 rounded-xl p-6 text-xs leading-relaxed">
          <li><strong className="text-white">Opening five minutes:</strong> punch clams, sell everything including shells, buy the Crab Rod and Brass Knuckles immediately. Every unplanned minute on Island 1 is borrowed from the volcano later.</li>
          <li><strong className="text-white">Buy beer cans early and hoard them.</strong> Beer feeds both the Spider Crab summon chain and your bragging rights — and stockpiling before sailing means no shopping detours mid-run.</li>
          <li><strong className="text-white">Island gates in order:</strong> follow the <Link href="/islands/" className="text-aqua hover:underline">island progression page</Link> strictly. The fastest documented clears skip optional bait recipes entirely — you are hunting keys, not filling the logbook.</li>
          <li><strong className="text-white">Dynamite over duels:</strong> several bosses take explosive damage faster than rods take reel-time. Crews shaving their personal bests lean on explosives precisely where fights stall runs.</li>
          <li><strong className="text-white">Difficulty down before Island 3:</strong> switching to Easy pre-Pufferfish converts the two longest checks into formality fights.</li>
          <li><strong className="text-white">Final boss discipline:</strong> land the Magma Whale kill with whatever is equipped — but if you also chase the bare-fist achievement Handyman, know both wraps into the same kill window and budget ten extra seconds.</li>
        </ol>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white">Helping a Friend Get Theirs</h2>
        <p className="text-xs leading-relaxed">
          A common pattern since launch: one experienced player shepherds a newcomer through their hour. Two things keep helper-runs alive — let the <strong className="text-white">learner host</strong> so the save and credit belong to them, and resist fixing their mistakes yourself; the timer punishes politeness. If the attempt implodes past redemption, quitting early costs nothing except pride.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white">Timer Killers to Avoid</h2>
        <ul className="list-disc pl-5 space-y-2 bg-ocean-900/80 border border-ocean-800 rounded-xl p-6 text-xs">
          <li>Cooking detours for healing buffs — raw food heals fine when the clock outranks comfort.</li>
          <li>Gambling pit stops. Cosmetics do not exist inside the hour.</li>
          <li>Fighting Pufferfish without pre-positioning the boat by the coral arches — the spike barrages alone can tax three minutes of retries.</li>
          <li>Re-exploring after a death: your corpse run beats any shortcut rediscovery.</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white">Bean FAQ</h2>
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
          { label: 'Steam Discussion: “how to get bean achievement now?”', href: 'https://steamcommunity.com/app/4001890/discussions/0/582806239606510389/', note: 'post-patch validity question and the beer-cans consensus' },
          { label: 'Official patch notes feed (app 4001890)', href: 'https://store.steampowered.com/feeds/news/app/4001890/', note: 'difficulty-selector behavior introduced in 1.0.9' },
        ]}
      />
      <FaqJsonLd faqs={faqs} />
    </div>
  );
}