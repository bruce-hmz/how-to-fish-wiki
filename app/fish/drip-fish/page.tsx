import Breadcrumb from '@/components/Breadcrumb';
import Link from 'next/link';
import { FaqJsonLd } from '@/components/JsonLd';
import Sources from '@/components/Sources';

export const metadata = {
  title: 'Drip Fish Guide: Every Confirmed Catch & Gachapon Use',
  description: 'How to Fish Drip creatures explained: confirmed variants like the Voxelfish hunt, why Island 1 feels more generous, real RNG talk without made-up percentages, and how the Casino gachapon pays out.'
      .replace('|', ''),
  alternates: { canonical: 'https://howtofish101.com/fish/drip-fish/' },
};

const faqs = [
  {
    q: 'What exactly are Drip creatures?'
      .replace("#", ""),
    a: 'Glowing, color-shifted versions of regular catches that count toward their own collection layer. They are tied to the Casino Island gachapon rather than ordinary selling — trading one in spins for exclusive cosmetic skins.'
  },
  {
    q: 'Why am I getting fewer Drip fish on later islands?'
      .replace("$", ""),
    a: 'You are not doing anything wrong. The most detailed public report we have describes about ten Drip catches on the first island and roughly five spread across the remaining three — first-island abundance appears normal, not a bug. Odds were never published, so all anyone can offer is directionally better lure quality and patience.'
  },
  {
    q: 'Is there a pity system or bonus weekend for Drip drops?'
      .replace("%", ""),
    a: 'Nothing like that has ever been confirmed. No drop-rate table, no bad-luck protection, no double-reward windows appear anywhere in official notes. Guides repeating exact spawn percentages are dressing guesses up as data.'
  },
  {
    q: 'I collected every Drip fish but the achievement didn’t unlock — why?',
    a: 'A player reported exactly this in early September 2026 with no fix posted in the thread. Before assuming a bug: Patch 1.0.5 already fixed one version of this achievement (it secretly required all Drips plus one extra), so first make sure your game is fully updated. Second, remember the Fishipedia tracks regular and Drip entries separately — a “complete-feeling” list can hide a gap like the Drip Goby, which has no well-documented catch yet. If the log truly shows every entry, restart the game and give it a day; this game’s achievement families have historically unlocked late. More checks live in our achievements troubleshooting guide.'
  },
];

export default function DripFishPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      <Breadcrumb items={[{ name: 'Fish Database', href: '/fish/' }, { name: 'Drip Fish Guide', href: '/fish/drip-fish/' }]} />
      <h1 className="text-3xl font-extrabold text-white">Drip Fish: Confirmed Catches, Odds Talk &amp; Gachapon</h1>
      <p className="text-xs text-gray-500 -mt-4">Last verified September 3, 2026 · Game version 1.0.11</p>

      <div className="bg-ocean-900/80 border border-ocean-800 rounded-xl p-6 space-y-3 text-sm text-gray-300">
        <div className="bg-cyan-950/60 border border-cyan-500/40 rounded-lg p-4">
          <h2 className="font-bold text-cyan-300 mb-1">What is a Drip Creature?</h2>
          <p className="text-xs text-gray-300">Drip creatures are glowing blue color-shifted variants of regular species — a separate rarity layer above Legendary in spirit, built for collectors and the Casino gachapon rather than the sell market. Unlike everything else in the logbook, their appeal is almost entirely cosmetic: selling a Drip catch is famously a waste.</p>
        </div>
        <p className="text-xs leading-relaxed">
          An honesty note before anything else: <strong className="text-white">Dazed Games has never published Drip odds</strong>, spawn tables, or a complete variant list. Everything below separates what is verified in play from what players merely report.
        </p>
      </div>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white">Confirmed Drip Entries</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs bg-ocean-900/70 rounded-xl overflow-hidden border-collapse">
            <thead className="bg-ocean-950/90 text-gray-400 uppercase border-b border-ocean-800">
              <tr><th className="px-3 py-2">Entry</th><th className="px-3 py-2">Habitat</th><th className="px-3 py-2">Bait</th><th className="px-3 py-2">Shop value*</th></tr>
            </thead>
            <tbody className="divide-y divide-ocean-800/60 align-top">
              <tr>
                <td className="px-3 py-2 font-bold text-cyan-300">Drip Rock Crab</td>
                <td className="px-3 py-2">Secret tidepools (rain)</td>
                <td className="px-3 py-2">Rainbow Clam</td>
                <td className="px-3 py-2">$5</td>
              </tr>
              <tr>
                <td className="px-3 py-2 font-bold text-cyan-300">Drip Fish</td>
                <td className="px-3 py-2">Volcano undersea vent (thunderstorm)</td>
                <td className="px-3 py-2">Beer / special lure</td>
                <td className="px-3 py-2">$250</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-gray-500">*Sell values shown for completeness — the entire point of these two is feeding the gachapon instead. Details live on the <Link href="/casino/" className="text-aqua hover:underline">Casino guide</Link>; general rarity tiers are on the <Link href="/fish/" className="text-aqua hover:underline">fish list</Link>.</p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white">Community-Sighted Variants</h2>
        <p className="text-xs text-gray-400 leading-relaxed">
          Collectors hunting the full set keep surfacing additional named Drips. These lack entry-level documentation, so treat the locations as leads to test, not guarantees:
        </p>
        <ul className="list-disc pl-5 space-y-2 bg-ocean-900/80 border border-ocean-800 rounded-xl p-6 text-sm text-gray-300">
          <li><strong className="text-white">Drip Goldfish</strong> — reported around islands 2–3, with the “Catching every drip fish” thread placing them behind the drip slot machine.</li>
          <li><strong className="text-white">Drip Voxelfish</strong> — the wall many 100%-chasers hit (full rundown below).</li>
          <li><strong className="text-white">Drip Goby</strong> — named by collectors as part of the set, but no reliable public location report exists yet.</li>
          <li><strong className="text-white">First-island density quirk</strong> — the same players logging “ten Drips on island one, five across the rest” suggest your early hours are disproportionately generous. Do not over-index on late-game sessions feeling broken.</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white">The Drip Voxelfish Wall: Real, Rare, Not Bugged</h2>
        <div className="bg-ocean-900/80 border border-ocean-800 rounded-xl p-6 space-y-3 text-sm text-gray-300">
          <p className="text-xs leading-relaxed">
            <strong className="text-white">Yes, the Drip Voxelfish exists and is catchable</strong> — when a player asked
            point-blank on Steam whether it was bugged, the reply that settled it was simple: <em>“yes, we fished it today.”</em>{' '}
            Two separate threads (16+ replies, still active through early September) are dedicated to this one catch, with
            hunters reporting five-hour grinds on end. Community consensus: <strong className="text-white">it is RNG, not a bug</strong> —
            the meanest roll in the Drip pool.
          </p>
          <p className="text-xs leading-relaxed">
            How to hunt it: Drip variants use <strong className="text-white">the same lure, rod, or trigger as their normal
            version</strong> — there is no separate Drip lure. The normal Voxelfish is a Professional Lure catch, which is why
            the documented hunts all look the same: <strong className="text-white">Island 4, Professional Lure, and patience</strong>.
            No odds have ever been published, so nobody can tell you it takes 40 casts or 400 — only that it has repeatedly
            taken hours.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs bg-ocean-950/70 rounded-lg overflow-hidden border-collapse">
              <thead className="bg-ocean-950/90 text-gray-400 uppercase border-b border-ocean-800">
                <tr><th className="px-3 py-2">Drip variant</th><th className="px-3 py-2">Where players report it</th><th className="px-3 py-2">Status</th></tr>
              </thead>
              <tbody className="divide-y divide-ocean-800/60 align-top">
                <tr>
                  <td className="px-3 py-2 font-bold text-cyan-300">Drip Goldfish</td>
                  <td className="px-3 py-2">Islands 2–3, behind the drip slot machine</td>
                  <td className="px-3 py-2">Multiple players confirm</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 font-bold text-cyan-300">Drip Voxelfish</td>
                  <td className="px-3 py-2">Island 4 with the Professional Lure (same lure as the normal Voxelfish)</td>
                  <td className="px-3 py-2">Confirmed catchable; heavy RNG</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 font-bold text-cyan-300">Drip Goby</td>
                  <td className="px-3 py-2">—</td>
                  <td className="px-3 py-2">No reliable public report yet</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs leading-relaxed">
            One trap for 100%-chasers: the Fishipedia tracks <strong className="text-white">all 49 regular and 49 Drip creatures
            separately</strong> — catching the Drip Voxelfish does not fill the normal Voxelfish entry, and vice versa. You need
            both. And if you thought fish were the end of it: at least one hunter reports Drip boss variants exist too (500+
            regular crabs, still no Drip Crab Boss).
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white">Straight Talk About Odds</h2>
        <div className="bg-ocean-900/80 border border-ocean-800 rounded-xl p-6 space-y-3 text-sm text-gray-300">
          <p className="text-xs leading-relaxed">
            The honest answer to “how do I raise my Drip rate” is short: <strong className="text-white">use the best lure you can afford and keep casting</strong>. That is the whole confirmed playbook — players consensus points to better lures helping, while every precise number circulating online (% chances, time-of-day windows, hidden multipliers) has no published basis.
          </p>
          <p className="text-xs leading-relaxed">
          Popular myths worth ignoring: guaranteed pity timers after dry streaks, double-reward weekends, coordinate-specific spawn charms. None trace back to official notes or reproducible testing — someone in a comment section had one lucky night.
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white">Feeding the Gachapon Instead of the Merchant</h2>
        <div className="bg-ocean-900/80 border border-ocean-800 rounded-xl p-6 space-y-3 text-sm text-gray-300">
          <p className="text-xs leading-relaxed">
            Drip catches trade into the Casino Island capsule machine for exclusive cosmetics — knuckle skins, weapon wraps, boat trims — the kind of flair nobody can buy with raw cash. One known bug family here: some players see <strong className="text-white">blank squares where prize previews should render</strong> on the machine interface. The community workaround is cycling your held item until icons repaint; permanent fixes have been landing patch by patch (
            <Link href="/updates/" className="text-aqua hover:underline">update history</Link>).
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white">Drip FAQ</h2>
        <div className="bg-ocean-900/80 border border-ocean-800 rounded-xl divide-y divide-ocean-800/60 text-sm text-gray-300">
          {faqs.map((f) => (
            <div key={f.q} className="p-5 space-y-2">
              <h3 className="font-bold text-white">{f.q}</h3>
              <p>{f.a}</p>
            </div>
          ))}
        </div>
        <p className="text-xs text-gray-400">
          Achievement still locked after all that? Our{' '}
          <Link href="/achievements/" className="text-aqua hover:underline">achievements &amp; collector bugs guide</Link> covers
          the full kill-all-creatures blocker list.
        </p>
      </section>

      <Sources
        items={[
          { label: 'Steam Discussion: “Catching every drip fish”', href: 'https://steamcommunity.com/app/4001890/discussions/0/582806239606641006/', note: 'Voxelfish hunt, Island 4 Professional Lure report, goldfish slot-machine location' },
          { label: 'Steam Discussion: “Does the drippy Voxelfish exist?”', href: 'https://steamcommunity.com/app/4001890/discussions/0/582806239606534846/', note: 'confirmed catchable (“we fished it today”) and drip boss-variant mention' },
          { label: 'Steam Discussion: “I did collect all the drip fish but i didnt get the achivment”', href: 'https://steamcommunity.com/app/4001890/discussions/0/581681246928692020/', note: 'achievement-not-unlocking report behind the FAQ' },
          { label: 'Mobalytics: How to Fish — All 49 Fish, Creatures and Lures', href: 'https://mobalytics.gg/gamebase/guides/how-to-fish-all-fish-creatures-lures', note: 'Fishipedia tracks 49 regular + 49 Drip entries separately; Drip uses the same lure as the normal version' },
          { label: 'Steam Discussion: “I’m getting zero drip fish”', href: 'https://steamcommunity.com/app/4001890/discussions/0/582806239606702906/', note: 'first-island abundance pattern and unpublished-odds confirmation' },
          { label: 'Official patch notes feed (app 4001890)', href: 'https://store.steampowered.com/feeds/news/app/4001890/', note: 'no Drip odds have ever appeared here — checked each patch' },
        ]}
      />
      <FaqJsonLd faqs={faqs} />
    </div>
  );
}