import Breadcrumb from '@/components/Breadcrumb';
import FishTable from '@/components/FishTable';
import { FaqJsonLd } from '@/components/JsonLd';
import Sources from '@/components/Sources';

export const metadata = {
  title: 'Fish List: Every Species, Island & Lure (Verified)',
  description:
    'Searchable How to Fish fish database: which island each species lives on, which lure catches it, and documented sell values — cross-verified against two independent guide databases.',
  alternates: { canonical: 'https://howtofish101.com/fish/' },
};

const faqs = [
  {
    q: 'How many fish are in How to Fish?',
    a: 'Community catalogs track 49 creatures total: 38 regular species plus the 11 boss-class catches (Old Pike, Sunfish, Blue Shark, Pufferfish, Tuna, Albatross, Goblin Shark, the whales…). Every regular-species row below is cross-verified against two independent guide databases (G2A and Mobalytics), and sell values are only shown where a source recorded one.',
  },
  {
    q: "Why won't fish bite even when I use bait?",
    a: 'The most common cause reported by players is reeling technique. A slow, steady reel (hold the left mouse button) triggers far more hook-ups than fast clicking, and you switch to quick clicks only when the catch prompt appears. Rod type matters too: some rods respond best to slow cranking while others reward a sit-and-wait rhythm. If the technique is right, re-check that your lure matches the species — regular fish are determined by your equipped lure, not by your island.',
  },
  {
    q: 'What are Drip fish?',
    a: 'Drip creatures are glowing, color-shifted variants of the regular roster — a separate collection layer with its own achievement (Fishipedia, "find and kill all drip creatures"). A drip variant is caught with the same lure as its normal version; there is no separate drip lure. Drip catches feed the Casino prize machines, where they convert into cosmetic skins. Our Drip guide covers the known variants and hunting techniques in detail.',
  },
  {
    q: 'Do weather or time of day change what you catch?',
    a: 'No system like that is documented. Neither of the two guide databases that back this table lists any weather or time-of-day conditions — capture depends on your lure, your rod, and (for bosses) the summon item. Players have been requesting day/night cycles and dynamic weather as a future feature, which is a good sign it does not exist yet (September 2026, game version 1.0.12). An earlier version of this table carried a weather column; it was removed in our fact audit because no source supported it.',
  },
  {
    q: 'How do I get the Old Pike?',
    a: 'The Old Pike is not a regular rod catch — player guides (G2A, Game8) document it as a boss-class catch on Island 2, the forest island. The documented route is the Beginner Boss Lure, sold for $40 in item shops: cast it and keep trying, because the Sunfish shares the same lure pool and can bite first. The early-game alternative is to skip fishing entirely and buy the Shotgun for $150 to hunt it down directly. Treat these details as guide-documented rather than in-game verified — the same standard applied to every row in the table above. Boss-class catches are tracked in the boss hub.',
  },
];

export default function FishPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      <Breadcrumb items={[{ name: 'Fish Database', href: '/fish/' }]} />
      <div>
        <h1 className="text-3xl font-extrabold text-white tracking-tight">How to Fish — Fish List by Island &amp; Lure</h1>
        <p className="text-xs text-gray-500 mt-1">Last verified September 16, 2026 · Game version 1.0.12</p>
      </div>

      <div className="bg-ocean-900/80 border border-ocean-800 rounded-xl p-6 space-y-3 text-sm text-gray-300">
        <p>
          <strong className="text-white">How to use this table:</strong> regular fish in How to Fish are determined by your equipped <strong className="text-aqua">lure</strong>, not your current island — but each lure tier unlocks with an island step, so the island column tells you when a species becomes reachable. Every row&apos;s location and lure is cross-verified against two independent guide databases (the G2A island guide and the Mobalytics fish list). Sell values are shown only where the IGN fish table recorded one; everything else is honestly marked <em>undocumented</em> rather than guessed.
        </p>
        <p>
          The full lure tier list — including the four Boss Lures and quest baits like the Carrot and Modified Leech — lives in the <a href="/lures/" className="text-aqua hover:underline">lures &amp; baits guide</a>, and the 11 boss-class catches live in the <a href="/bosses/" className="text-aqua hover:underline">boss hub</a>.
        </p>
      </div>

      <FishTable />

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white">Lure Tiers Are the Progression</h2>
        <div className="bg-ocean-900/80 border border-ocean-800 rounded-xl divide-y divide-ocean-800/60 text-sm">
          <div className="p-4"><span className="font-bold text-white">Free Lure</span><span className="text-gray-400"> — comes on the Crab Rod and Fishing Rod. Starter crabs, shrimp, and the island-2 basics (Mackerel, Gar, Pike, Goldfish).</span></div>
          <div className="p-4"><span className="font-bold text-emerald-300">Hot Dog bait</span><span className="text-gray-400"> — buyable. Rock Crab and Lobster on the Crab Rod; Piranha on the Fishing Rod.</span></div>
          <div className="p-4"><span className="font-bold text-blue-300">Beginner Lure</span><span className="text-gray-400"> — island 2 tier: Piranha, Pike, Cod, Goby, Salmon, Perch, Triggerfish, Goldfish.</span></div>
          <div className="p-4"><span className="font-bold text-purple-300">Standard Lure ($15)</span><span className="text-gray-400"> — island 3 tier: Catfish, Clownfish, Sea Urchin, Boxfish, Bowlfish, Needlefish, Angelfish, Bluegill, Seahorse, Salmon.</span></div>
          <div className="p-4"><span className="font-bold text-amber-300">Professional Lure ($50)</span><span className="text-gray-400"> — island 4 tier: Bass, Eel, Red Snapper, Sengarat, Halibut, Tigerfish, Flying Fish, Voxelfish, Parrotfish, Dripper.</span></div>
          <div className="p-4"><span className="font-bold text-red-300">Scientific Lure ($500)</span><span className="text-gray-400"> — island 5 tier: Blobfish, Oarfish, Anglerfish, Stonefish, Superdwarf Fish (the highest documented sell value in the catalog).</span></div>
          <div className="p-4"><span className="font-bold text-cyan-300">Boss Lures &amp; quest baits</span><span className="text-gray-400"> — the 11 boss-class catches. <a href="/bosses/" className="text-aqua hover:underline">See the boss hub →</a></span></div>
        </div>
        <p className="text-sm text-gray-400">
          Players also report unusually tinted catches beyond the catalog — gold-toned and rainbow-named fish
          included. No drop rates for these coloring modifiers have been published anywhere reliable, so
          treat exact percentages you see elsewhere skeptically. One caveat worth knowing: some players crash
          when landing rainbow-named fish, a launch-week issue that patches have been chipping at — check our{' '}
          <a href="/updates/" className="text-aqua hover:underline">update history</a> and the{' '}
          <a href="/troubleshooting/" className="text-aqua hover:underline">troubleshooting hub</a> if it
          happens to you.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white">Fish Not Biting? Quick Checklist</h2>
        <ol className="list-decimal list-inside space-y-2 bg-ocean-900/80 border border-ocean-800 rounded-xl p-6 text-sm text-gray-300">
          <li>Reel slowly — hold the left mouse button instead of mashing it. Fast clicks are for the moment the catch prompt appears.</li>
          <li>Check your rod type. Players report different rod families want opposite rhythms: steady cranking versus letting the hook sit.</li>
          <li>Match the lure to the species — the table above is the verified mapping. The wrong tier simply will not produce the fish.</li>
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
          { label: 'G2A News: How to Fish — all fish, bosses, rods and bait by island', href: 'https://www.g2a.com/news/features/guide/how-to-fish-all-fish-bosses-rods-and-bait-by-island/', note: 'primary structure source for every row (retrieved September 16, 2026)' },
          { label: 'Mobalytics: How to Fish — All 49 Fish, Creatures and Lures', href: 'https://mobalytics.gg/gamebase/guides/how-to-fish-all-fish-creatures-lures', note: 'independent corroboration of every location + lure mapping' },
          { label: 'IGN Wiki: How to Fish — all-fish table', href: 'https://www.ign.com/wikis/how-to-fish', note: 'source of the documented sell values shown in the Sell column' },
          { label: 'Steam Discussion: “fish literally wont bite no matter what”', href: 'https://steamcommunity.com/app/4001890/discussions/0/582805931178592456/', note: 'reeling technique and rod-type behavior reported by players' },
          { label: 'Game8: The Old Pike Boss Guide', href: 'https://game8.co/games/How-to-Fish/archives/617342', note: 'Beginner Boss Lure ($40), shared Sunfish lure pool, and the $150 Shotgun alternative' },
          { label: 'Official patch notes feed (app 4001890)', href: 'https://store.steampowered.com/feeds/news/app/4001890/', note: 're-verification baseline for patch changes' },
        ]}
      />
      <FaqJsonLd faqs={faqs} />
    </div>
  );
}
