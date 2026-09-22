import Breadcrumb from '@/components/Breadcrumb';
import Link from 'next/link';
import { FaqJsonLd } from '@/components/JsonLd';
import Sources from '@/components/Sources';

export const metadata = {
  title: 'Killscore Multipliers: Documented Values & 5x Guide',
  description: 'How to Fish Killscore modifiers with community-documented values, an explicit 5x achievement target, and clearly labeled illustrative payout math.',
  alternates: { canonical: 'https://howtofish101.com/trick-shots/' },
};

const modifiers = [
  { name: "360 Spin", value: "1.5x", how: "Complete a full 360-degree rotation before firing, hipfire only." },
  { name: "Headshot", value: "1.25x", how: "Land the killing shot on the creature's head." },
  { name: "Last Bullet", value: "1.25x", how: "Get the kill with the final round left in the magazine." },
  { name: "No Scope", value: "1.2x", how: "Fire from the hip without aiming down sights." },
  { name: "Point Blank", value: "1.1x", how: "Finish the kill right against the creature." },
]

const faqs = [
  {
    q: 'Can Killscore go above 5x?'
      .replace("#", ""),
    a: 'The official achievement confirms 5x as a target, but the game does not publish a complete multiplier table. Five modifier values are community-documented, while Killsteal, Fly Fishing, Overkill, and Finally have undisclosed values. Layered kills may go higher, but values above 5x are not independently verified here.'
  },
  {
    q: 'Does Killscore stack with cooking?'
      .replace("$", ""),
    a: 'They are separate reported levers on the final sale price. Killscore comes from how stylishly you killed; community guides report a cooking bonus of up to 1.5x. Use the combination as an experiment in your own save rather than a guaranteed payout.'
  },
  {
    q: 'What weapon makes trick shots easiest?'
      .replace("%", ""),
    a: 'The shotgun. Every gun in the game is hitscan — bullets land exactly where the crosshair points with no travel or drop — so forgiveness comes down to pellet spread. Up close, a shotgun spin-and-shoot lands the 360 window far more often than precise weapons.'
  },
];

export default function TrickShotsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8 text-sm text-gray-300">
      <FaqJsonLd faqs={faqs} />
      <Breadcrumb items={[{ name: 'Trick Shots', href: '/trick-shots/' }]} />
      <h1 className="text-3xl font-extrabold text-white">Trick Shots &amp; Killscore Multipliers</h1>
      <p className="text-xs text-gray-500 -mt-4">Updated September 22, 2026 · Mechanics reviewed for game version 1.0.12 · Values are community-documented unless labeled official</p>

      <div className="bg-ocean-900/80 border border-ocean-800 rounded-xl p-6 space-y-6">
        <h2 className="text-xl font-bold text-white">What Killscore Changes</h2>
        <p className="text-xs leading-relaxed">
          Killscore is a post-kill value modifier: finish a creature with flair — spins, headshots, distance, improvised tools — and its sell price rises before you ever reach a merchant. It is an economy engine first and a style system second. Community guides report that it can combine with cooking, but the exact interaction is not an official formula. Two achievements frame the range: <em>Noob</em> wants a kill with no multiplier at all, <em>Impressive</em> wants you to hit 5x.
        </p>

        <h2 className="text-xl font-bold text-white">Community-Documented Modifiers</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead className="bg-ocean-950/90 text-gray-400 uppercase border-b border-ocean-800">
              <tr><th className="px-3 py-2">Modifier</th><th className="px-3 py-2">Value</th><th className="px-3 py-2">How to trigger</th></tr>
            </thead>
            <tbody className="divide-y divide-ocean-800/60 align-top">
              {modifiers.map((m) => (
                <tr key={m.name}>
                  <td className="px-3 py-2 font-bold text-white">{m.name}</td>
                  <td className="px-3 py-2 text-gold font-semibold">{m.value}</td>
                  <td className="px-3 py-2">{m.how}</td>
                </tr>
              ))}
              <tr>
                <td className="px-3 py-2 font-bold text-white">Killsteal / Fly Fishing / Overkill / Finally</td>
                <td className="px-3 py-2 text-gold font-semibold">Stacking</td>
                <td className="px-3 py-2">Values undisclosed. Killsteal lands the blow on someone else's fight; Fly Fishing strikes an airborne target; Overkill far outdamages the remaining health; Finally rides on the closing shot.</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-gray-500 leading-relaxed">
          The table above is a community report, not a complete official formula. The examples below assume the listed factors multiply; use the in-game result as authoritative, especially for undisclosed modifiers and any total above the 5x achievement target.
        </p>

        <h2 className="text-xl font-bold text-white">Worked Payout Examples</h2>
        <ul className="list-disc pl-5 space-y-2 text-xs">
          <li><strong className="text-white">Illustrative assumption:</strong> if the listed factors multiply, an $18 Triggerfish with 360 + Headshot + Last Bullet is 18 × 1.5 × 1.25 × 1.25 ≈ <strong>$42</strong>.</li>
          <li>Under the same assumption, a documented $350 Parrotfish would be ≈ <strong>$820</strong>.</li>
          <li>If the community-reported 1.5x cooking factor also applies, that illustrative Parrotfish total would be ≈ <strong>$1,230</strong>; this is not a guaranteed in-game payout.</li>
        </ul>
        <p className="text-[11px] text-gray-500">Arithmetic uses the documented factor table above; underlying sell prices come from our fish database. Treat edge-case rounding in-game as authoritative.</p>

        <h2 className="text-xl font-bold text-white">An Attempted 5x Route: Seagull Hunting</h2>
        <ol className="list-decimal pl-5 space-y-2 text-xs leading-relaxed">
          <li>Equip a hitscan gun — shotgun for close work, sniper when you want distance credit.</li>
          <li>Find a low-health airborne seagull hovering over water.</li>
          <li>Line up a long-range headshot: range + head + aerial target layers Fly Fishing, Headshot, and distance-flavored bonuses in one squeeze.</li>
          <li>Fire mid-spin if you dare — 360 stacks on top and pushes marginal attempts over the line.</li>
        </ol>
        <p className="text-xs leading-relaxed">
          Need the opposite — a completely flat kill for <em>Noob</em>? Pick a motionless ground creature and empty your magazine from plain range: no spins, no headshots, no last-bullet drama. Flatness is the achievement. And if your seagull ambitions are explosive rather than stylish, the <Link href="/achievements/everyones-dream/" className="text-aqua hover:underline">Everyone’s dream achievement guide</Link> swaps the sniper for a stick of dynamite (see the <Link href="/guides/dynamite/" className="text-aqua hover:underline">dynamite guide</Link> for the blast rules).
        </p>

        <h2 className="text-xl font-bold text-white">Where to Practice</h2>
        <p className="text-xs leading-relaxed">
          Never practice on bosses. The ideal dojo is a lone starter-beach critter whittled to a sliver — plenty are cataloged in the <Link href="/fish/" className="text-aqua hover:underline">fish database</Link> — so failures cost seconds, not ammo runs. Once triggers feel automatic, graduate to live targets during normal play and let the practice pay for itself.
        </p>
      </div>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white">Trick Shots FAQ</h2>
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
          { label: 'Nerds Chalk: Killscore multipliers full list', href: 'https://nerdschalk.com/how-killscore-multipliers-work-in-how-to-fish/', note: 'source of the modifier values and stacking behavior above' },
          { label: 'Official patch notes feed (app 4001890)', href: 'https://store.steampowered.com/feeds/news/app/4001890/', note: 'checked each patch for balance changes to scoring' },
        ]}
      />
    </div>
  );
}
