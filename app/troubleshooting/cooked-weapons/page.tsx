import Breadcrumb from '@/components/Breadcrumb';
import Link from 'next/link';
import { FaqJsonLd } from '@/components/JsonLd';
import Sources from '@/components/Sources';

export const metadata = {
  title: 'Cooked Weapon Fix: Un-Cook Guns & Rods',
  description: 'Accidentally burned your gun, fishing rod, or gear in How to Fish? As of Patch 1.0.9 there is no official un-cook button — here is the community save-file fix (set Cookness back to 0.0), step by step, plus prevention tips.',
  alternates: { canonical: 'https://howtofish101.com/troubleshooting/cooked-weapons/' },
};

const faqs = [
  {
    q: 'Is there an official way to un-cook weapons?',
    a: 'Not yet. Through Patch 1.0.9 the developers have not shipped an in-game way to clean a charred gun or rod, and the request threads asking for one — some players suggest a “cooler” station — remain open. The save-file method below mirrors what the community uses today.'
  },
  {
    q: 'Does the Cookness fix work on fishing rods too?',
    a: 'Yes. The burn state is stored as a Cookness value on the item itself, so it applies wherever that value appears in your save — guns, rods, anything the game decided to cook. After editing, confirm in-game that the item accepts skins again or looks un-charred before relying on it.'
  },
  {
    q: 'Can this corrupt my save or get me banned?',
    a: 'Save files are plain text on your own machine, and there are no reports of punishments for touching your local save values. The real risk is human error: a bad search-and-replace can wreck a file faster than the volcano ever did. That is why the steps below insist on a fresh folder backup first, and why you should change only the Cookness numbers — nothing else.'
  },
  {
    q: 'My weapon fell into lava and vanished entirely — will this bring it back?',
    a: 'No. This page fixes items that still exist in your inventory but carry a burned state. Gear that despawned — dropped off a cliff, lost under the map, gone after a crash — is a different problem class, and needs the items disappeared recovery flow instead.'
  },
];

export default function CookedWeaponsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8 text-sm text-gray-300">
      <Breadcrumb items={[{ name: 'Troubleshooting', href: '/troubleshooting/' }, { name: 'Cooked Weapons', href: '/troubleshooting/cooked-weapons/' }]} />
      <h1 className="text-3xl font-extrabold text-white">How to Un-Cook a Weapon in How to Fish</h1>
      <p className="text-xs text-gray-500 -mt-4">Last verified August 27, 2026 · Game version 1.0.9</p>

      <div className="bg-ocean-900/80 border border-ocean-800 rounded-xl p-6 space-y-3">
        <p>
          How to Fish’s grills do not judge what you put on them. Leave a gun next to the sizzle, drag it up Mount Inferno, or drop it in lava and the game will char it like yesterday’s catch — complete with the burned model. Players keep discovering this the hard way on the volcano island, where simply carrying a weapon through the crater can leave it roasted.
        </p>
        <p>
          The annoying part is not the look — a cooked weapon still shoots — it is that <strong className="text-white">skins can no longer be applied</strong>, so your cosmetics are stuck behind the char until you clear the burn state.
        </p>
      </div>

      <div className="bg-coral/10 border border-coral/40 rounded-xl p-5 space-y-2">
        <p className="font-bold text-white text-sm">First, triage which loss you actually have:</p>
        <ul className="list-disc list-inside space-y-1 text-xs">
          <li><strong className="text-white">Item in inventory, blackened model, skins blocked</strong> → you have a <em>burn state</em>. This page fixes it.</li>
          <li><strong className="text-white">Item gone completely</strong> (despawned, under the map, missing after a crash) → different problem: switch to the{' '}<Link href="/troubleshooting/items-disappeared/" className="text-aqua hover:underline">items disappeared guide</Link>.</li>
        </ul>
      </div>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white">Is There an Official Fix?</h2>
        <p className="text-gray-300 leading-relaxed">
          No — through Patch 1.0.9 there is no in-game way to un-cook an item, and buying a replacement means re-buying every upgrade and attachment on top of it. Community threads asking for a proper solution have been running since launch week.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white">The Community Fix: Reset Cookness to 0.0</h2>
        <p className="text-gray-300 leading-relaxed">
          Saves store the burn level on each item as a value called <code className="text-aqua bg-ocean-950 px-1 rounded">Cookness</code>, and saves are plain text — which makes the burn state a two-minute edit. This is the workaround players use while waiting for an official solution:
        </p>
        <ol className="list-decimal pl-5 space-y-3 bg-ocean-900/80 border border-ocean-800 rounded-xl p-6 text-xs leading-relaxed">
          <li><strong className="text-white">Quit How to Fish, then quit Steam entirely</strong> so nothing rewrites the file mid-edit.</li>
          <li><strong className="text-white">Open the saves folder:</strong> press <strong>Win+R</strong> and paste{' '}
            <code className="text-aqua break-all">%userprofile%\AppData\LocalLow\Dazed Games\How to Fish\Saves</code>{' '}
            (Steam Deck/Linux equivalents are covered in the{' '}
            <Link href="/troubleshooting/save-file/" className="text-aqua hover:underline">save file location guide</Link>).
          </li>
          <li><strong className="text-white">Make a backup first.</strong> Copy the entire folder somewhere outside the game directory. Thirty seconds here beats regretting it later.</li>
          <li><strong className="text-white">Pick the newest file.</strong> Sort by date modified and open the most recent save in Notepad or any text editor — no special tools needed.</li>
          <li><strong className="text-white">Find every Cookness value</strong> (Ctrl+F) and set each one to <code className="text-aqua">0.0</code>. Change only those numbers — rename nothing, delete nothing.</li>
          <li><strong className="text-white">Save the file and launch the game once.</strong> Check the weapon visually and test whether skins apply again.</li>
          <li><strong className="text-white">If anything looks wrong, restore your backup</strong> rather than experimenting further against the live file.
          </li>
        </ol>
        <div className="bg-ocean-900/60 border border-ocean-800 rounded-xl p-5 space-y-2 text-xs">
          <p className="font-bold text-white">Playing co-op?</p>
          <p>Sessions write through the host, so run this on whichever machine hosts the world — after making one deliberate manual save first so you know exactly which file just changed. Guests should coordinate with the host instead of editing their own copy blindly.</p>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white">Alternatives Worth Knowing</h2>
        <ul className="list-disc pl-5 space-y-2 text-sm text-gray-300">
          <li><strong className="text-white">Buy a replacement</strong> — the straightforward route, but you inherit the rebuy cost for all upgrades and attachments. Fine early, painful late.</li>
          <li><strong className="text-white">Wait for an official solution</strong> — the ask has been loud enough since launch week that a dedicated anti-burn feature (community suggestion: a cooler) would not be a surprise addition. This page gets updated when patches change the answer.</li>
          <li><strong className="text-white">Mods</strong> — a Nexus Mods page called “No More Roasted Guns” disables weapon-cooking altogether. Officially unsupported; the same cautions we list about unofficial mods in the{' '}
            <Link href="/faq/" className="text-aqua hover:underline">FAQ</Link> apply.
          </li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white">Keeping Your Gear Un-Toasted</h2>
        <ul className="list-disc pl-5 space-y-2 text-sm text-gray-300">
          <li>Treat the <strong className="text-white">Mount Inferno climb</strong> as a hands-free section: leave spare guns on the boat and carry what you must.</li>
          <li>Cooking food batches? Park weapons a healthy distance from the station first — the grill can’t tell dinner from defense.</li>
          <li>The same Save → Main Menu → Quit discipline from the{' '}
            <Link href="/troubleshooting/save-file/" className="text-aqua hover:underline">save file guide</Link> protects you here too: if something bad happens with gear, a controlled exit keeps the damage from being auto-committed.
          </li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white">Cooked Weapon FAQ</h2>
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
          { label: 'Steam Discussion: “Uncook a weapon” (answer marked by the topic author)', href: 'https://steamcommunity.com/app/4001890/discussions/0/582806239606593107/', note: 'source of the Cookness = 0.0 method' },
          { label: 'Steam Discussion: “PLEASE make it so I can un-cook my weapons”', href: 'https://steamcommunity.com/app/4001890/discussions/0/582805931178584225/', note: 'feature-request thread referenced above' },
          { label: 'Nexus Mods: No More Roasted Guns', href: 'https://www.nexusmods.com/howtofish/mods/49', note: 'community mod alternative' },
          { label: 'Official patch notes feed (app 4001890)', href: 'https://store.steampowered.com/feeds/news/app/4001890/', note: 'baseline for the Patch 1.0.9 status described here' },
        ]}
      />
      <FaqJsonLd faqs={faqs} />
    </div>
  );
}