import Breadcrumb from '@/components/Breadcrumb';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service – How to Fish Wiki',
  description:
    'Terms of service for How to Fish Wiki. Understand acceptable use, intellectual property, disclaimers, and liability limitations.',
  alternates: { canonical: 'https://howtofish101.com/terms/' },
};

export default function TermsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8 text-sm text-gray-300">
      <Breadcrumb items={[{ name: 'Terms of Service', href: '/terms/' }]} />
      <h1 className="text-3xl font-bold text-white">Terms of Service</h1>
      <p>Last updated: August 25, 2026</p>

      <section className="space-y-3 bg-ocean-900/80 border border-ocean-800 rounded-xl p-6">
        <h2 className="text-xl font-bold text-white">Acceptance of Terms</h2>
        <p>
          By accessing or using How to Fish Wiki (&ldquo;the Site&rdquo;), you agree to be bound by
          these Terms of Service. If you do not agree with any part of these terms, you should not
          use the Site. We reserve the right to update these terms at any time, and your continued
          use of the Site constitutes acceptance of any changes.
        </p>
      </section>

      <section className="space-y-3 bg-ocean-900/80 border border-ocean-800 rounded-xl p-6">
        <h2 className="text-xl font-bold text-white">Intellectual Property</h2>
        <p>
          &ldquo;How to Fish&rdquo; and all related game assets, characters, logos, and trademarks
          are the property of Dazed Games. This website is an unofficial, fan-made resource and is
          not affiliated with or endorsed by Dazed Games.
        </p>
        <p>
          Original content created by How to Fish Wiki—including guides, analysis, and
          commentary—is protected by copyright. You may share links to our pages freely, but
          reproducing substantial portions of our content without permission is prohibited.
        </p>
      </section>

      <section className="space-y-3 bg-ocean-900/80 border border-ocean-800 rounded-xl p-6">
        <h2 className="text-xl font-bold text-white">User Conduct</h2>
        <p>When using this Site, you agree not to:</p>
        <ul className="list-disc list-inside space-y-1">
          <li>Use the Site for any unlawful purpose or in violation of any applicable laws</li>
          <li>Attempt to interfere with the proper functioning of the Site</li>
          <li>Scrape, crawl, or otherwise extract content in bulk without written permission</li>
          <li>Misrepresent your affiliation with the Site or its operators</li>
          <li>Use the Site to distribute malware, spam, or other harmful content</li>
        </ul>
      </section>

      <section className="space-y-3 bg-ocean-900/80 border border-ocean-800 rounded-xl p-6">
        <h2 className="text-xl font-bold text-white">Disclaimer of Warranties</h2>
        <p>
          The Site and all content are provided &ldquo;as is&rdquo; and &ldquo;as available&rdquo;
          without warranties of any kind, either express or implied. We do not guarantee the
          accuracy, completeness, or timeliness of any information on the Site. Game data may change
          with updates, and there may be a delay before our guides reflect the latest changes.
        </p>
      </section>

      <section className="space-y-3 bg-ocean-900/80 border border-ocean-800 rounded-xl p-6">
        <h2 className="text-xl font-bold text-white">Limitation of Liability</h2>
        <p>
          To the fullest extent permitted by law, How to Fish Wiki and its operators shall not be
          liable for any indirect, incidental, special, consequential, or punitive damages arising
          from your use of the Site, including but not limited to loss of data, loss of profits, or
          damages resulting from reliance on any information provided on the Site.
        </p>
      </section>

      <section className="space-y-3 bg-ocean-900/80 border border-ocean-800 rounded-xl p-6">
        <h2 className="text-xl font-bold text-white">Changes to These Terms</h2>
        <p>
          We may revise these Terms of Service at any time by posting updated terms on this page.
          The &ldquo;Last updated&rdquo; date at the top indicates when the most recent changes were
          made. It is your responsibility to review these terms periodically.
        </p>
      </section>

      <section className="space-y-3 bg-ocean-900/80 border border-ocean-800 rounded-xl p-6">
        <h2 className="text-xl font-bold text-white">Contact</h2>
        <p>
          If you have questions about these terms, please email{' '}
          <a href="mailto:legal@howtofish101.com" className="text-aqua hover:underline">
            legal@howtofish101.com
          </a>.
        </p>
      </section>
    </div>
  );
}
