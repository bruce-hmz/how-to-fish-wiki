import Breadcrumb from '@/components/Breadcrumb';
export default function TermsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-6 text-sm text-gray-300">
      <Breadcrumb items={[{ name: 'Terms of Service', href: '/terms/' }]} />
      <h1 className="text-3xl font-bold text-white">Terms of Service</h1>
      <p>By using this guide, you agree to use our data and tools for non-commercial player assistance. All trademarks belong to their respective copyright holders.</p>
    </div>
  );
}
