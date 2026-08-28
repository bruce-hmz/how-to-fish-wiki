import Breadcrumb from '@/components/Breadcrumb';
import Link from 'next/link';
import { ArticleJsonLd, FaqJsonLd } from '@/components/JsonLd';
import Sources from '@/components/Sources';

export const metadata = {
  title: 'Cooked Weapon Fix: Water-Dip Un-Cook (Official)',
  description: 'Patch 1.0.10 adds the official fix: dip a cooked gun or rod in water to clean the burn state. Includes the pre-1.0.10 save-file method (Cookness 0.0) as a legacy fallback, plus prevention tips.',
  alternates: { canonical: 'https://howtofish101.com/troubleshooting/cooked-weapons/' },
};


const faqs = [
  {
    q: 'Is there an official way to un-cook weapons?',
    a: 'Yes, as of Patch 1.0.10 (August 27, 2026): “Weapons and tools now get cleaned from cooking when dipped in water.” Find any water source — the sea around your boat counts — and dip the charred item to clean the burn state. If a dunk does not clear it fully, repeat the dip. The save-file method lower on this page is now a legacy fallback, mainly useful for old saves or stubborn cases.'
  },
  {
    q: 'Does the fix work on fishing rods too?',
    a: 'The 1.0.10 note explicitly covers “weapons and tools”, and rods are tools in How to Fish terms. The burn state itself is stored as a Cookness value on the item, which is why the legacy save edit applied to guns, rods, and anything else the game decided to cook. After a dip, confirm in-game that the item accepts skins again before relying on it.'
  },
  {
    q: 'Do I still need the save-file edit?',
    a: 'Usually not. Try the water dip first — it is official, instant, and cannot damage anything. The Cookness edit is only worth reaching for if the dip somehow fails, you are on a pre-1.0.10 version, or you are restoring an old save. If you do edit, back the folder up first and change only the Cookness numbers.'
  },
  {
    q: 'My weapon fell into lava and vanished entirely — will this bring it back?',
    a: 'No. Both fixes cover items that still exist but carry a burned state. Gear that despawned — dropped off a cliff, lost under the map, gone after a crash — is a different problem class. Note that since 1.0.10, ground-dropped items persist in saves (up to 64, prioritized), so a “vanished” item may now be sitting where you dropped it: check the items disappeared recovery flow.'
  },
];

export default function CookedWeaponsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8 text-sm text-gray-300">
      <ArticleJsonLd
        headline="How to Un-Cook a Weapon in How to Fish"
        description="Dip a cooked gun or rod in water — the official Patch 1.0.10 fix — plus the legacy Cookness save edit and prevention tips."
        url="https://howtofish101.com/troubleshooting/cooked-weapons/"
        datePublished="2026-08-27"
        dateModified="2026-08-28"
      />
      <Breadcrumb items={[{ name: 'Troubleshooting', href: '/troubleshooting/' }, { name: 'Cooked Weapons', href: '/troubleshooting/cooked-weapons/' }]} />
      <h1 className="text-3xl font-extrabold text-white">How to Un-Cook a Weapon in How to Fish</h1>
      <p className="text-xs text-gray-500 -mt-4">Last verified August 28, 2026 · Game version 1.0.10</p>

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
        <h2 className="text-2xl font-bold text-white">The Official Fix (Patch 1.0.10): Dip It in Water</h2>
        <p className="text-gray-300 leading-relaxed">
          Patch 1.0.10 shipped on August 27, 2026 with the line players had been asking for since launch week:{' '}
          <em className="text-gray-200">“Weapons and tools now get cleaned from cooking when dipped in water.”</em>{' '}
          No save editing, no mod, no rebuy — the game itself now washes the char off.
        </p>
        <ol className="list-decimal pl-5 space-y-3 bg-ocean-900/80 border border-ocean-800 rounded-xl p-6 text-xs leading-relaxed">
          <li><strong className="text-white">Take the cooked item in hand</strong> (or make sure it is the active tool).</li>
          <li><strong className="text-white">Find water</strong> — the sea next to your boat works, as does any lake or pond on the islands.</li>
          <li><strong className="text-white">Dip the item in.</strong> The burn state cleans on contact with the water.</li>
          <li><strong className="text-white">Inspect the result.</strong> If the model still looks charred or skins still will not apply, dip it again — then fall back to the legacy save method below.</li>
        </ol>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white">Legacy Fix: Reset Cookness to 0.0 (Pre-1.0.10)</h2>
        <p className="text-gray-300 leading-relaxed">
          Before 1.0.10 there was no in-game way to un-cook an item, so players edited the save directly. Saves store the burn level on each item as a value called{' '}
          <code className="text-aqua bg-ocean-950 px-1 rounded">Cookness</code>, and saves are plain text. The water dip makes this obsolete for most players, but it remains useful for old saves, stubborn burns, or anyone playing a pre-1.0.10 build:
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
          <li><strong className="text-white">Buy a replacement</strong> — mostly obsolete now that the water dip exists, but still the route if an item is both cooked <em>and</em> lost. You inherit the rebuy cost for all upgrades and attachments.</li>
          <li><strong className="text-white">Mods</strong> — a Nexus Mods page called “No More Roasted Guns” disables weapon-cooking altogether. It predates 1.0.10, so try the official dip first. Officially unsupported; the same cautions we list about unofficial mods in the{' '}
            <Link href="/faq/" className="text-aqua hover:underline">FAQ</Link> apply.
          </li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white">Keeping Your Gear Un-Toasted</h2>
        <ul className="list-disc pl-5 space-y-2 text-sm text-gray-300">
          <li>Treat the <strong className="text-white">Mount Inferno climb</strong> as a hands-free section: leave spare guns on the boat and carry what you must.</li>
          <li>Cooking food batches? Park weapons a healthy distance from the station first — the grill can’t tell dinner from defense.</li>
          <li>Now that water cleans gear, a dunk after a volcano run is cheap insurance — but prevention still beats swimming after your shotgun.</li>
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
          { label: 'Official announcement: “FANART & PATCH 1.0.10” (Aug 27, 2026)', href: 'https://steamcommunity.com/games/4001890/announcements/detail/698774255287927073', note: 'source of the water-dip un-cook note and ground-item persistence' },
          { label: 'Steam Discussion: “Uncook a weapon” (answer marked by the topic author)', href: 'https://steamcommunity.com/app/4001890/discussions/0/582806239606593107/', note: 'source of the legacy Cookness = 0.0 method' },
          { label: 'Steam Discussion: “PLEASE make it so I can un-cook my weapons”', href: 'https://steamcommunity.com/app/4001890/discussions/0/582805931178584225/', note: 'feature-request thread the 1.0.10 note answers' },
          { label: 'Nexus Mods: No More Roasted Guns', href: 'https://www.nexusmods.com/howtofish/mods/49', note: 'community mod alternative' },
        ]}
      />
      <FaqJsonLd faqs={faqs} />
    </div>
  );
}
