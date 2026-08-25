import Breadcrumb from '@/components/Breadcrumb';
import Link from 'next/link';
import { FaqJsonLd } from '@/components/JsonLd';

export const metadata = {
  title: 'Trick Shots & Killscore Multipliers: 1.5x to 5x',
  description: 'How to Fish killscore explained: the confirmed 1.5x and 5x multipliers, how trick shots raise kill money, the 360 no scope method, and where to practice safely.',
  alternates: { canonical: 'https://howtofish101.com/trick-shots/' },
  openGraph: {
    title: 'How to Fish Trick Shots & Killscore Multipliers',
    description: 'How to Fish killscore explained: the confirmed 1.5x and 5x multipliers, how trick shots raise kill money, the 360 no scope method, and where to practice safely.',
    url: 'https://howtofish101.com/trick-shots/',
  },
};

const faqs = [
  { q: 'What is killscore in How to Fish?', a: 'Killscore is the money multiplier applied to a kill. Landing a kill with a trick movement — like a full spin or an unscoped shot — raises the multiplier and the payout. The achievement list confirms a 5x top tier.' },
  { q: 'What multipliers are confirmed?', a: 'Two values are confirmed by achievements: Noob (a kill with no multiplier) and Impressive (reaching a 5x killscore multiplier). Community reports consistently support 1.5x as the common trick-shot tier.' },
  { q: 'How do I do a 360 no scope?', a: 'Perform a full 360-degree rotation and land the kill without scoping. Practice on a weak isolated creature with its health lowered first, so it survives until your final shot.' },
];

export default function TrickShotsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8 text-sm text-gray-300">
      <FaqJsonLd faqs={faqs} />
      <Breadcrumb items={[{ name: 'Trick Shots', href: '/trick-shots/' }]} />
      <h1 className="text-3xl font-extrabold text-white">Trick Shots &amp; Killscore Multipliers</h1>

      <div className="bg-ocean-900/80 border border-ocean-800 rounded-xl p-6 space-y-6">
        <h2 className="text-xl font-bold text-white">What Killscore Changes</h2>
        <p>
          The official Steam description is blunt: trick shots increase the money earned from kills. Every
          kill gets scored on how you performed it — a plain shot is worth the base value, while kills
          finished during or right after a stunt (spins, no-scope hits, cooking combos) multiply the
          payout. Two achievements anchor the scale: <em>Noob</em> for a kill with no multiplier, and
          <em> Impressive</em> for reaching a <strong>5x killscore multiplier</strong>.
        </p>

        <h2 className="text-xl font-bold text-white">The Confirmed Values</h2>
        <ul className="list-disc pl-5 space-y-2 text-xs">
          <li><strong>1.5x</strong>: the common trick-shot tier — a single clean stunt modifier on the finishing blow.</li>
          <li><strong>5x</strong>: the confirmed top tier, tied to the Impressive achievement.</li>
          <li><strong>Unconfirmed</strong>: elaborate stacking formulas beyond 5x quoted online are player theories, not official values.</li>
        </ul>

        <h2 className="text-xl font-bold text-white">The 360 No Scope Method</h2>
        <ol className="list-decimal pl-5 space-y-2 text-xs">
          <li>Lower a weak, isolated creature's health with normal shots first.</li>
          <li>Create space — you need room for a full rotation without obstructions.</li>
          <li>Spin a complete 360, then release the kill shot <strong>without scoping in</strong>.</li>
          <li>The kill must land while the rotation register is still active; hesitate and it decays to a normal shot.</li>
        </ol>

        <h2 className="text-xl font-bold text-white">Where to Practice</h2>
        <p className="text-xs leading-relaxed">
          Never practice on bosses: huge health pools, expensive ammo, and erratic movement make it
          impossible to tell whether your input or the fight broke the attempt. The ideal target is a lone
          low-tier creature on a starter beach — see the <Link href="/fish/" className="text-aqua hover:underline">fish database</Link> for
          weak species — whittled to a sliver of health. One clean rotation, one finishing shot, instant
          feedback in the payout number.
        </p>

        <h2 className="text-xl font-bold text-white">Why It Pays</h2>
        <p className="text-xs leading-relaxed">
          Trick shots turn routine kills into an economy tool: a 5x multiplier on mid-value catches
          out-earns most <Link href="/guide/" className="text-aqua hover:underline">grinding routes</Link> once
          you can land them consistently. Pair practice sessions with normal play — attempt stunts only on
          targets you were killing anyway, and your hourly income climbs without a dedicated grind.
        </p>
      </div>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white">Trick Shots FAQ</h2>
        <div className="bg-ocean-900/70 border border-ocean-800 rounded-xl p-6 space-y-5">
          {faqs.map((item) => (
            <div key={item.q} className="border-b border-ocean-800 pb-4 last:border-0 last:pb-0">
              <h3 className="text-white font-semibold mb-2 text-sm">{item.q}</h3>
              <p className="text-xs text-gray-400 leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
