import Breadcrumb from '@/components/Breadcrumb';
import Link from 'next/link';
import { FaqJsonLd, ArticleJsonLd } from '@/components/JsonLd';
import Sources from '@/components/Sources';

export const metadata = {
  title: 'First Boss in How to Fish: the Giant Spider Crab',
  description: 'The first boss in How to Fish is the Giant Spider Crab at the starter lighthouse. Summon it with the Empty Beer Can, dodge its charge, and win Boat Key Part #1 — quick guide with the full fight plan.',
  alternates: { canonical: 'https://howtofish101.com/bosses/first-boss/' },
};

const faqs = [
  {
    q: 'What is the first boss in How to Fish?',
    a: 'The Giant Spider Crab, fought at the starter island\'s lighthouse reef. It is the first of the game\'s five colossal bosses and, by broad agreement among guides and players, the easiest — later bosses do not share its self-stun behavior.'
  },
  {
    q: 'How do I summon the first boss?',
    a: 'Buy beer from the tavern NPC, give it to the beach drunk to receive the Empty Beer Can (the "Rage Bait"), then cast the can into the bubbling tidepool near the lighthouse. The Spider Crab emerges after a short cinematic — no other prep is required to trigger it.'
  },
  {
    q: 'What do you get for beating the first boss?',
    a: 'Boat Key Part #1 — the first piece of the three-part boat key you need to escape the archipelago — plus gold and a chance at the Spider Crab Shell Shield. It also completes the Lighthouse Keeper\'s opening quest line that starts the boss chain.'
  },
  {
    q: 'Is the first boss hard?',
    a: 'No — it is the tutorial-grade fight. It has 800 HP, and its charge attack crashes it into rocks and stuns it for about six seconds, giving you free damage windows. Later bosses are faster, do not freeze after attacks, and need real gear upgrades before you attempt them. One exception right now: since Patch 1.0.11 some players cannot fight it at all — see the bug question below.'
  },
  {
    q: 'Is the first boss broken after Patch 1.0.11?',
    a: 'For some players, yes. Since the September 1, 2026 update, multiple Steam threads report the Giant Spider Crab floating in the air above the tidepool, unkillable and out of reach — and 1.0.11 is still the newest patch, so the developer has not fixed it yet. A community-reported workaround: throw your boss bait behind the cockpit of the broken captain\'s boat and reel it in so the crab gets wedged in the captain\'s seat and becomes hittable again (unverified by our editors). The full Spider Crab guide tracks the bug and will drop the notice once a fix ships.'
  },
];

export default function FirstBossPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8 text-sm text-gray-300">
      <ArticleJsonLd
        headline="First Boss in How to Fish: the Giant Spider Crab"
        description="The first boss is the Giant Spider Crab at the starter lighthouse — summon it with the Empty Beer Can, dodge the charge, and win Boat Key Part #1."
        url="https://howtofish101.com/bosses/first-boss/"
        datePublished="2026-08-28"
        dateModified="2026-09-02"
      />
      <Breadcrumb items={[{ name: 'Boss Battles', href: '/bosses/' }, { name: 'First Boss', href: '/bosses/first-boss/' }]} />
      <h1 className="text-3xl font-extrabold text-white">The First Boss in How to Fish: Giant Spider Crab</h1>
      <p className="text-xs text-gray-500 -mt-4">Last verified September 2, 2026 · Game version 1.0.11 (known bug — see notice below)</p>

      <div className="bg-gold/10 border border-gold/40 rounded-xl p-6 space-y-3">
        <p className="font-bold text-white text-sm">The short answer:</p>
        <p>
          The first boss is the <strong className="text-white">Giant Spider Crab</strong> — a giant crustacean that
          surfaces at the <strong className="text-white">starter island&rsquo;s lighthouse reef</strong> once you throw an{' '}
          <strong className="text-white">Empty Beer Can</strong> into its bubbling tidepool. It has{' '}
          <strong className="text-white">800 HP</strong>, guards <strong className="text-white">Boat Key Part #1</strong>,
          and is deliberately gentle: it is the only boss that freezes after its charge, leaving a long damage window.
        </p>
        <p className="text-xs text-gray-400">
          Full loadout details, phase breakdown, and the reward table live in the{' '}
          <Link href="/bosses/spider-crab/" className="text-aqua hover:underline">complete Spider Crab guide</Link>. This page is the quick version for &ldquo;what is this boss and how do I start it.&rdquo;
        </p>
      </div>

      <div className="bg-coral/10 border border-coral/40 rounded-xl p-6 space-y-3 text-sm text-gray-300">
        <p className="font-bold text-white text-sm">⚠️ Patch 1.0.11 bug: the crab may float out of reach</p>
        <p>
          Since the September 1 update, players on Steam report the Spider Crab hovering in the air above the tidepool — unkillable and unbeatable that run. The developer has not shipped a fix yet (1.0.11 remains the newest patch as of September 2, 2026). A community-reported workaround: throw your boss bait behind the cockpit of the broken captain&apos;s boat and reel it in so the crab gets stuck in the captain&apos;s seat, where you can hit it — unverified by our editors, but it may save the run. The{' '}
          <Link href="/bosses/spider-crab/" className="text-aqua hover:underline">full Spider Crab guide</Link> tracks fix status, and the{' '}
          <Link href="/troubleshooting/" className="text-aqua hover:underline">troubleshooting hub</Link> covers related save and bug safety.
        </p>
      </div>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white">Summoning the First Boss (4 Steps)</h2>
        <ol className="list-decimal pl-5 space-y-3 bg-ocean-900/80 border border-ocean-800 rounded-xl p-6 text-xs leading-relaxed">
          <li><strong className="text-white">Buy a beer</strong> from the tavern NPC on the starter island.</li>
          <li><strong className="text-white">Give the beer to the beach drunk</strong> — he hands over the Empty Beer Can, the community&rsquo;s &ldquo;Rage Bait.&rdquo;</li>
          <li><strong className="text-white">Cast the can into the bubbling tidepool</strong> near the lighthouse. Nothing happens if you fish the spot normally — the can is what angers the crab.</li>
          <li><strong className="text-white">Wait out the short cinematic</strong> — the Giant Spider Crab climbs up and the fight begins.</li>
        </ol>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white">The Fight in One Paragraph</h2>
        <p className="text-gray-300 leading-relaxed">
          Sidestep its charge — it crashes into the rocks and stuns itself for about six seconds, and that freeze window is
          your entire game plan. Unload on the glowing joint plates with your knife or brass knuckles while it is down,
          repeat for a few cycles, and it folds. If you flip it, the{' '}
          <strong className="text-white">soft belly</strong> is the damage spot. Bring a sharpened knife, keep the crab rod
          and hot dogs in reserve for the summons chain afterwards, and do not overthink positioning: this fight is
          designed to teach the dodge-and-punish loop the later bosses demand, without punishing you for learning it.
        </p>
        <div className="bg-ocean-900/60 border border-ocean-800 rounded-xl p-5 text-xs space-y-2">
          <p className="font-bold text-white">Rewards</p>
          <p>Boat Key Part #1 · 200 gold · Spider Crab Shell Shield (10% drop chance). The key part starts your escape route — the other four bosses guard the remaining parts and coordinates, covered in the{' '}
            <Link href="/bosses/" className="text-aqua hover:underline">all-bosses hub</Link>.
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white">Before You Summon It</h2>
        <ul className="list-disc pl-5 space-y-2 text-sm text-gray-300">
          <li><strong className="text-white">Craft or buy a sharpened knife</strong> — bare hands make the freeze windows feel far too short.</li>
          <li><strong className="text-white">Eat or carry food</strong> — the charge clip is the only real damage threat, but it hurts far more than anything else you have met on the starter island.</li>
          <li><strong className="text-white">In co-op</strong>, bosses scale with the lobby — the{' '}
            <Link href="/multiplayer/" className="text-aqua hover:underline">co-op guide</Link> covers crew roles; a solo-style freeze loop still works, just with less room for errors.</li>
          <li><strong className="text-white">Lost gear during the fight?</strong> The{' '}
            <Link href="/troubleshooting/items-disappeared/" className="text-aqua hover:underline">items triage page</Link> is the recovery path — and since Patch 1.0.10, dropped ground items persist in saves.</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white">First Boss FAQ</h2>
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
          { label: 'Mobalytics: How to Fish — How to Beat the Spider Crab', href: 'https://mobalytics.gg/gamebase/guides/how-to-fish-spider-crab-boss/', note: 'confirms Spider Crab as the first boss and the Lighthouse Keeper quest completion' },
          { label: 'IGN Wiki: How to Get the Boat Keys — How to Fish', href: 'https://www.ign.com/wikis/how-to-fish/How_to_Get_the_Boat_Keys', note: 'first-boss-to-boat-key progression' },
          { label: 'NerdStalk: Spider Crab Fight — Requirements, Tips, and Boat Keys', href: 'https://nerdschalk.com/how-to-fish-spider-crab-boss/', note: 'the freeze-after-attack behavior unique to this boss' },
          { label: 'Destructoid: Complete How to Fish Walkthrough', href: 'https://www.destructoid.com/complete-how-to-fish-game-walkthrough-100-completion/', note: 'first-boss difficulty placement in full progression' },
          { label: 'Steam Discussions: "FLOATING CRABS" (Patch 1.0.11 bug reports)', href: 'https://steamcommunity.com/app/4001890/discussions/0/581681246928694953/', note: 'source of the post-1.0.11 floating-crab reports and the community workaround' },
        ]}
      />
      <FaqJsonLd faqs={faqs} />
    </div>
  );
}
