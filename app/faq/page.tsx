import Breadcrumb from '@/components/Breadcrumb';
export default function FAQPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-6 text-sm text-gray-300">
      <Breadcrumb items={[{ name: 'FAQ', href: '/faq/' }]} />
      <h1 className="text-3xl font-bold text-white">Frequently Asked Questions</h1>
      <div className="space-y-4">
        <div><h3 className="text-white font-semibold">Is How to Fish cross-platform?</h3><p className="text-xs text-gray-400">Yes, PC (Steam) and Steam Deck players can seamlessly co-op together.</p></div>
        <div><h3 className="text-white font-semibold">How many fish exist in the game?</h3><p className="text-xs text-gray-400">There are 49 unique fish and creature entries in the logbook.</p></div>
      </div>
    </div>
  );
}
