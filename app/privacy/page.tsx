import Breadcrumb from '@/components/Breadcrumb';
export default function PrivacyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-6 text-sm text-gray-300">
      <Breadcrumb items={[{ name: 'Privacy Policy', href: '/privacy/' }]} />
      <h1 className="text-3xl font-bold text-white">Privacy Policy</h1>
      <p>We respect your privacy. This website does not sell personal data or track private information. Standard aggregated analytics may be collected to improve site speed and guide quality.</p>
    </div>
  );
}
