import Breadcrumb from '@/components/Breadcrumb';
import FishTable from '@/components/FishTable';
import { FaqJsonLd } from '@/components/JsonLd';
import Sources from '@/components/Sources';

export const metadata = {
  title: 'Fish List & Rarity Guide — Species, Baits & Weather Windows',
  description: 'Searchable How to Fish fish database with verified sell values, habitats, preferred baits and weather windows — plus how the six rarity tiers and Drip variants actually work.',
  alternates: { canonical: 'https://howtofish101.com/fish/' },
};

const faqs = [
  {
    q: 'How many fish are in How to Fish?',
    a: 'Community catalogs track 49 marine species in the logbook, spread across six rarity tiers: Common, Uncommon, Rare, Epic, Legendary, and Drip. Rather than republish unverified lists, this database adds entries one at a time as each habitat, bait, and weather condition is confirmed through playtesting and cross-checked sources. The verification standard is described in our editorial policy.',
  },
  {
    q: "Why won't fish bite even when I use bait?",
    a: 'The most common cause reported by players is reeling technique. A slow, steady reel (hold the left mouse button) triggers far more hook-ups than fast clicking, and you switch to quick clicks only when the catch prompt appears. Rod type matters too: some rods respond best to slow cranking while others reward a sit-and-wait rhythm. If the technique is right, re-check that your bait matches both the habitat and the weather window of the species you are targeting.'
  },
  {
    q: 'What are Drip fish?',
    a: 'Drip is the rarest tier in the logbook: glowing, color-shifted versions of regular species. The Drip Rock Crab and the legendary Drip Fish are the best-known examples. Drip catches feed the Casino Island gachapon machine, where they convert into exclusive cosmetic skins. Our Drip Fish guide covers spawn windows and known variants in detail. Hunting the per-species rare variants the store listing asks for is a separate system — see the rare variants guide.'
  },
  {
    q: 'Do weather and time of day really change what you catch?',
    a: 'Yes. Every species keys to specific conditions, and several high-value catches only appear inside strict windows — Striped Bass bite in foggy open water, and the Electric Eel shows up at the sunken shipwreck at night. When bites dry up, checking the weather column below is usually faster than swapping gear.'
  },
];

export default function FishPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      <Breadcrumb items={[{ name: 'Fish Database', href: '/fish/' }]} />
      <div>
        <h1 className="text-3xl font-extrabold text-white tracking-tight">How to Fish List &amp; Rarity Guide</h1>
        <p className="text-gray-400 text-xs mt-1">Interactive species table with search, rarity badges, sell pricing, habitats, preferred baits, and weather windows.</p>
      </div>

      <div className="bg-ocean-900/80 border border-ocean-800 rounded-xl p-6 space-y-3 text-sm text-gray-300">
        <p>
          <strong className="text-white">Catalog status:</strong> community catalogs track <strong className="text-aqua">49 marine species</strong> across six rarity tiers. The table now carries two tiers: <strong className="text-white">11 verified entries</strong> (habitat, bait, and weather cross-checked through playthroughs) and <strong className="text-white">30 community-documented entries</strong> marked with a ~ symbol — 26 of them cross-checked against two independent sources (G2A island guide + IGN all-fish table, Game8, or a walkthrough) (the whisperofthehouse walkthrough), the rest single-source. Sell values and weather windows remain pending in-game verification across the community tier. The remaining gap to 49 is bosses (tracked in the <a href="/bosses/" className="text-aqua hover:underline">boss hub</a>) and variants still being reconciled across sources.
        </p>
        <p>
          Every species has its own sell value, preferred bait, habitat, and weather window, so planning catches around those four columns is how money-making runs get efficient. Filter by rarity to prioritize expensive catches, or search by name to check where something spawns before wasting a trip. Drip variants behave differently from everything else — see the sections below this table.
        </p>
      </div>

      <FishTable />

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white">Rarity Tiers Explained</h2>
        <div className="bg-ocean-900/80 border border-ocean-800 rounded-xl divide-y divide-ocean-800/60 text-sm">
          <div className="p-4"><span className="font-bold text-white">Common</span><span className="text-gray-400"> — beach and shallow-water staples like crabs and shrimp. Low sell value, no special conditions. Your early-game income comes from these.</span></div>
          <div className="p-4"><span className="font-bold text-emerald-300">Uncommon</span><span className="text-gray-400"> — first tier that starts caring about bait quality, such as Red Snapper on coral reefs.</span></div>
          <div className="p-4"><span className="font-bold text-blue-300">Rare</span><span className="text-gray-400"> — condition-gated species like the night-only Electric Eel at the sunken shipwreck. Expect dedicated trips.</span></div>
          <div className="p-4"><span className="font-bold text-purple-300">Epic</span><span className="text-gray-400"> — high-value game fish such as the Golden Tuna in far outer waters. Strong rods and upgraded reels recommended.</span></div>
          <div className="p-4"><span className="font-bold text-amber-300">Legendary</span><span className="text-gray-400"> — rarest natural spawns (Kraken Spawn among them), usually gated behind deep-water zones and an upgraded boat.</span></div>
          <div className="p-4"><span className="font-bold text-cyan-300">Drip</span><span className="text-gray-400"> — glowing color-shifted variants that exist outside the normal value ladder and feed the Casino gachapon. </span><a href="/fish/drip-fish/" className="text-aqua hover:underline">Read the Drip Fish guide →</a></div>
        </div>
        <p className="text-sm text-gray-400">
          Players also report unusually tinted catches beyond the six official tiers — gold-toned and rainbow-named fish included. No drop rates for these coloring modifiers have been published anywhere reliable, so treat exact percentages you see elsewhere skeptically. One caveat worth knowing: some players crash when landing rainbow-named fish, a launch-week issue that patches have been chipping at — check our{' '}
          <a href="/updates/" className="text-aqua hover:underline">update history</a> and the{' '}
          <a href="/troubleshooting/" className="text-aqua hover:underline">troubleshooting hub</a> if it happens to you.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white">How Bait, Habitat &amp; Weather Work Together</h2>
        <div className="bg-ocean-900/80 border border-ocean-800 rounded-xl p-6 space-y-3 text-sm text-gray-300">
          <p>
            A species only bites when bait, location, and conditions line up. The starter loop walks you through the first links of that chain — clams for shrimp, shrimp for bigger predators — in our{' '}
            <a href="/guide/" className="text-aqua hover:underline">beginner walkthrough</a>. From there, the full list of buyable and craftable baits lives in the{' '}
            <a href="/lures/" className="text-aqua hover:underline">lures &amp; baits guide</a>.
          </p>
          <p>
            Habitats open up as islands unlock, so if a listed location keeps coming up empty, you may simply not have unlocked its zone yet — the{' '}
            <a href="/islands/" className="text-aqua hover:underline">island progression guide</a> maps which zone opens when. Some of the most valuable &quot;bait&quot; targets are not fish at all but boss summon items; those are covered per-boss in the{' '}
            <a href="/bosses/" className="text-aqua hover:underline">boss hub</a>.
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white">Fish Not Biting? Quick Checklist</h2>
        <ol className="list-decimal list-inside space-y-2 bg-ocean-900/80 border border-ocean-800 rounded-xl p-6 text-sm text-gray-300">
          <li>Reel slowly — hold the left mouse button instead of mashing it. Fast clicks are for the moment the catch prompt appears.</li>
          <li>Check your rod type. Players report different rod families want opposite rhythms: steady cranking versus letting the hook sit.</li>
          <li>Match the three columns: right bait for the species, right biome, right weather window. Two out of three still means no bites.</li>
          <li>If nothing works at all — or bites stop completely mid-session after an event — treat it as a possible bug and head to the{' '}<a href="/troubleshooting/" className="text-aqua hover:underline">troubleshooting hub</a>.</li>
        </ol>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white">Fish FAQ</h2>
        <div className="bg-ocean-900/80 border border-ocean-800 rounded-xl divide-y divide-ocean-800/60 text-sm text-gray-300">
          {faqs.map((f) => (
            <div key={f.q} className="p-5 space-y-2">
              <h3 className="font-bold text-white">{f.q}</h3>
              <p>{f.a}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="flex flex-wrap gap-3 text-xs text-gray-400 pt-2">
        <a href="/achievements/" className="hover:text-aqua underline underline-offset-2">Collection achievements</a>
        <span>·</span>
        <a href="/casino/" className="hover:text-aqua underline underline-offset-2">Casino &amp; gachapon</a>
        <span>·</span>
        <a href="/fish/drip-fish/" className="hover:text-aqua underline underline-offset-2">Drip Fish deep-dive</a>
      </div>

      <Sources
        items={[
          { label: 'Steam Discussion: “fish literally wont bite no matter what”', href: 'https://steamcommunity.com/app/4001890/discussions/0/582805931178592456/', note: 'reeling technique and rod-type behavior reported by players' },
          { label: 'Steam Discussion: “I’m getting zero drip fish”', href: 'https://steamcommunity.com/app/4001890/discussions/0/582806239606702906/', note: 'basis for treating exact Drip odds as unpublished' },
          { label: 'Steam Discussion: rainbow fish crash reports', href: 'https://steamcommunity.com/app/4001890/discussions/0/582806523877546439/', note: 'launch-week issue referenced above' },
          { label: 'G2A News: How to Fish — all fish, bosses, rods and bait by island', href: 'https://www.g2a.com/news/features/guide/how-to-fish-all-fish-bosses-rods-and-bait-by-island/', note: 'source attributed to all ~-marked community entries' },
          { label: 'Official patch notes feed (app 4001890)', href: 'https://store.steampowered.com/feeds/news/app/4001890/', note: 're-verification baseline for patch changes' },
        ]}
      />
      <FaqJsonLd faqs={faqs} />
    </div>
  );
}
