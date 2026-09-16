import Breadcrumb from '@/components/Breadcrumb';
import Sources from '@/components/Sources';
import Link from 'next/link';

export const metadata = {
  title: 'Weapons Guide: What Is Verified (Knife, Shotgun, Dynamite)',
  description:
    'The verified How to Fish arsenal: the $45 knife, the $150 shotgun, dynamite and the own-explosives rule, attachments, and the Fully equipped achievement — plus the fabricated weapons we removed.',
  alternates: { canonical: 'https://howtofish101.com/weapons/' },
};

const verifiedWeapons = [
  {
    name: 'Bare Fists',
    type: 'Melee (default)',
    unlock: 'Available from the start',
    use: 'Emergency self-defense and the Handyman achievement (kill the final boss bare-handed, 1.7% of players)',
    source: 'Official achievements',
  },
  {
    name: 'Knife',
    type: 'Melee',
    unlock: 'Island 1 shop — $45 (IGN + G2A agree)',
    use: 'The recommended early weapon: subdues reeled-in catches and handles aggressive boarders in a few hits',
    source: 'IGN, G2A',
  },
  {
    name: 'Brass Knuckles',
    type: 'Melee',
    unlock: 'Early shop purchase (speedrun routes buy rod + knuckles + beer immediately)',
    use: 'Starter upgrade over bare fists for punching catches',
    source: 'Community speedrun thread',
  },
  {
    name: 'Shotgun',
    type: 'Ranged',
    unlock: '$150 (Game8) — also the documented Old Pike hunting tool',
    use: 'Community favorite for the piranha boss (max it first post-1.0.12) and the solo albatross kill',
    source: 'Game8; Steam threads',
  },
  {
    name: 'SMG',
    type: 'Ranged',
    unlock: 'Shop purchase (island/price undocumented)',
    use: 'Repeatedly named the comfortable pick for the albatross fight',
    source: 'Steam thread',
  },
  {
    name: 'Sniper rifle',
    type: 'Ranged',
    unlock: 'Shop purchase (island/price undocumented)',
    use: 'Long-range tool for the casino hide-and-snipe albatross tactic and 360-no-scope practice',
    source: 'Steam threads; achievement guides',
  },
  {
    name: 'Dynamite',
    type: 'Explosive (consumable)',
    unlock: 'Shop purchase (price undocumented; ~$25 per stick is unconfirmed)',
    use: 'Add clearout in the piranha fight; reliable final-boss damage since the 1.0.12 fix; the Everyone\'s dream seagull achievement',
    source: 'Steam threads; patch notes',
  },
];

export default function WeaponsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      <Breadcrumb items={[{ name: 'Weapons', href: '/weapons/' }]} />
      <h1 className="text-3xl font-extrabold text-white">Weapons Guide — Verified Only</h1>
      <p className="text-xs text-gray-500 -mt-4">Last verified September 16, 2026 · Game version 1.0.12</p>

      <div className="bg-ocean-900/80 border border-ocean-800 rounded-xl p-6 space-y-6 text-sm text-gray-300">
        <p>
          How to Fish ships melee, ranged, and explosive tools, and weapon skins are a whole collection
          layer. This page lists only what sources actually document — the weapon itself, a price when one
          was recorded, and the community&apos;s fight-specific picks. Damage values are not published by
          the developers and are not listed at all.
        </p>

        <h2 className="text-xl font-bold text-white border-b border-ocean-800 pb-2">The Documented Arsenal</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-ocean-950 text-gray-400 border-b border-ocean-800">
              <tr>
                <th className="p-3">Weapon</th>
                <th className="p-3">Type</th>
                <th className="p-3">How to Get It</th>
                <th className="p-3">Best Use</th>
                <th className="p-3">Source</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-ocean-800/50">
              {verifiedWeapons.map((w) => (
                <tr key={w.name}>
                  <td className="p-3 font-bold text-white">{w.name}</td>
                  <td className="p-3">{w.type}</td>
                  <td className="p-3">{w.unlock}</td>
                  <td className="p-3">{w.use}</td>
                  <td className="p-3 text-gray-500">{w.source}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="text-xl font-bold text-white border-b border-ocean-800 pb-2">Attachments Are Real</h2>
        <p>
          The <Link href="/achievements/" className="text-aqua hover:underline">Fully equipped</Link>{' '}
          achievement (49.8% of players) asks you to apply all attachments to a single weapon, and the
          official 1.0.11 patch notes prove the attachment economy: the iron sight was removed as a
          purchasable (&ldquo;players only ever bought it by mistake&rdquo;), and downgrading from suppressor
          to compensator was blocked. Scopes, suppressors, and compensators exist; the cheapest platform to
          complete the achievement on is not documented.
        </p>

        <h2 className="text-xl font-bold text-white border-b border-ocean-800 pb-2">What We Removed</h2>
        <p className="text-xs text-gray-400 leading-relaxed">
          An earlier version of this page carried a &ldquo;Harpoon Gun ($200, 45 damage)&rdquo;, a
          &ldquo;Titanium Harpoon&rdquo; endgame upgrade, a &ldquo;Rifle&rdquo; with a fixed loadout order,
          Hull Armor purchases, and per-boss weapon prescriptions with damage math. None of it traced to a
          guide database, patch note, or player thread — the real documented ranged meta is the
          shotgun/SMG/sniper picks above. The fabricated entries were removed in our September 2026 fact
          audit, not hedged.
        </p>

        <p className="text-xs text-gray-400">
          For the bait side of the loadout equation, see the{' '}
          <Link href="/lures/" className="text-aqua hover:underline">lures &amp; baits guide</Link>; for
          crew weapon roles check the{' '}
          <Link href="/multiplayer/" className="text-aqua hover:underline">co-op guide</Link>. One hazard
          loadouts skip too often: gear parked on a grill comes back <em>cooked</em>, which blocks skins
          until you clear the burn state (see the{' '}
          <Link href="/troubleshooting/cooked-weapons/" className="text-aqua hover:underline">cooked weapon rescue guide</Link>).
        </p>

        <Sources
          items={[
            {
              label: 'Steam Community Achievements — How to Fish',
              href: 'https://steamcommunity.com/stats/4001890/achievements',
              note: 'Fully equipped, Handyman, Everyone\'s dream descriptions and global unlock rates',
            },
            {
              label: 'IGN Wiki: How to Get the Boat Keys',
              href: 'https://www.ign.com/wikis/how-to-fish/How_to_Get_the_Boat_Keys',
              note: 'the $45 knife recommendation',
            },
            {
              label: 'Game8: The Old Pike Boss Guide',
              href: 'https://game8.co/games/How-to-Fish/archives/617342',
              note: 'the $150 shotgun',
            },
            {
              label: 'Steam Discussion: Boss health/timers',
              href: 'https://steamcommunity.com/app/4001890/discussions/0/581680664978608620/',
              note: 'SMG-for-albatross / shotgun-main community weapon picks',
            },
            {
              label: 'Patch 1.0.11 official notes (Steam)',
              href: 'https://store.steampowered.com/news/app/4001890/view/698774255287927884',
              note: 'attachment-economy proof: iron sight removal, suppressor/compensator rule',
            },
          ]}
        />
      </div>
    </div>
  );
}
