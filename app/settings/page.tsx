import Breadcrumb from '@/components/Breadcrumb';

export const metadata = {
  title: 'Black Screen Fix & Steam Deck Best Settings',
  description: 'Troubleshooting guide for How to Fish. Fix launch black screens, audio stutter bugs, and configure optimal Steam Deck 60 FPS graphics.',
};

export default function SettingsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      <Breadcrumb items={[{ name: 'Troubleshooting & Settings', href: '/settings/' }]} />
      <h1 className="text-3xl font-extrabold text-white">Black Screen Fix & Steam Deck Settings</h1>
      <div className="bg-ocean-900/80 border border-ocean-800 rounded-xl p-6 space-y-6 text-sm text-gray-300">
        <h2 className="text-xl font-bold text-white">1. Black Screen on Launch Fix</h2>
        <p>Add <code>-dx11</code> or <code>-force-vulkan</code> to your Steam Launch Options if encountering a black screen on startup.</p>
        <h2 className="text-xl font-bold text-white">2. Audio Stutter & Bug Fix</h2>
        <p>Ensure your audio output sample rate is set to 48,000 Hz (24-bit studio quality) in Windows Sound settings.</p>
        <h2 className="text-xl font-bold text-white">3. Steam Deck 60 FPS Configuration</h2>
        <p>Set Water Physics Quality to Medium, Shadows to Low, and Cap Frame Rate at 60 FPS for smooth handheld play.</p>
      </div>
    </div>
  );
}
