import Breadcrumb from '@/components/Breadcrumb';
export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-6 text-sm text-gray-300">
      <Breadcrumb items={[{ name: 'About Us', href: '/about/' }]} />
      <h1 className="text-3xl font-bold text-white">About How to Fish Wiki</h1>
      <p>How to Fish Wiki is an independent player-maintained resource dedicated to providing accurate data, walkthroughs, and boss tactics for the 2026 hit game by Dazed Games.</p>
    </div>
  );
}
