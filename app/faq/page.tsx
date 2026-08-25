import Breadcrumb from '@/components/Breadcrumb';
import { FaqJsonLd } from '@/components/JsonLd';

export const metadata = {
  title: 'Frequently Asked Questions',
  description: 'Answers to common questions about How to Fish: controller support, save files, progression caps, multiplayer, modding, and game length.',
  alternates: { canonical: 'https://howtofish101.com/faq/' },
};

const faqs = [
  { q: 'Is How to Fish cross-platform?', a: 'The game currently supports PC (Steam) and Steam Deck. Steam Deck players can co-op seamlessly with desktop PC players through Steam\'s native friend invite system.' },
  { q: 'How many fish exist in the game?', a: 'There are 49 unique fish and creature entries in the logbook, including 5 Legendary species and the rare Drip variants that can appear on any base species.' },
  { q: 'Does the game support controllers?', a: 'Yes. How to Fish has full native controller support for Xbox, PlayStation, and Steam Deck controllers. The UI automatically switches to gamepad mode when a controller is detected.' },
  { q: 'Where are save files located?', a: 'On Windows: C:\\Users\\[username]\\AppData\\LocalLow\\DazedGames\\HowToFish. On Steam Deck/Linux via Proton: ~/.steam/steam/steamapps/compatdata/4001890/pfx/drive_c/users/steamuser/AppData/LocalLow/DazedGames/HowToFish.' },
  { q: 'Is there a max level or progression cap?', a: 'The current level cap is 50. At max level you unlock the Golden Rod cosmetic and the ability to re-fight any boss at 2x difficulty for better loot drops.' },
  { q: 'Can you PvP against other players?', a: 'No. How to Fish is purely a co-op experience. There is no PvP mode — the developers have stated the game is designed around collaborative fishing and boss battles.' },
  { q: 'Is modding supported?', a: 'Not officially. The developers have not released mod tools, and installing unofficial mods may trigger Steam anti-cheat. Wait for official mod support announcements.' },
  { q: 'How long does it take to beat the game?', a: 'A focused playthrough of the main story (all 3 bosses + boat restoration) takes approximately 12-15 hours. Completing the full logbook and all achievements takes 40-60 hours.' },
  { q: 'What happens if I die?', a: 'You respawn at the last dock you visited. You lose 10% of your carried cash but keep all fish, gear, and upgrades. Items in your boat storage are never lost.' },
  { q: 'Can I play offline?', a: 'Yes, the single-player mode works fully offline. Only co-op multiplayer requires an internet connection.' },
];

export default function FAQPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-6 text-sm text-gray-300">
      <Breadcrumb items={[{ name: 'FAQ', href: '/faq/' }]} />
      <FaqJsonLd faqs={faqs} />
      <h1 className="text-3xl font-bold text-white">Frequently Asked Questions</h1>
      <div className="bg-ocean-900/80 border border-ocean-800 rounded-xl p-6 space-y-5">
        {faqs.map((item) => (
          <div key={item.q} className="border-b border-ocean-800 pb-4 last:border-0 last:pb-0">
            <h2 className="text-white font-semibold mb-2">{item.q}</h2>
            <p className="text-xs text-gray-400 leading-relaxed">{item.a}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
