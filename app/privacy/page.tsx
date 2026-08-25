import Breadcrumb from '@/components/Breadcrumb';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy – How to Fish Wiki',
  description:
    'Privacy policy for How to Fish Wiki. Learn how we handle analytics, cookies, third-party services, and your rights under GDPR and CCPA.',
  alternates: { canonical: 'https://howtofish101.com/privacy/' },
};

export default function PrivacyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8 text-sm text-gray-300">
      <Breadcrumb items={[{ name: 'Privacy Policy', href: '/privacy/' }]} />
      <h1 className="text-3xl font-bold text-white">Privacy Policy</h1>
      <p>Last updated: August 25, 2026</p>

      <section className="space-y-3 bg-ocean-900/80 border border-ocean-800 rounded-xl p-6">
        <h2 className="text-xl font-bold text-white">Information We Collect</h2>
        <p>
          How to Fish Wiki does not require account registration or collect personal information
          directly. We may automatically collect non-personally-identifiable usage data through
          analytics services, including pages visited, time on site, referring URLs, browser type,
          device type, and approximate geographic location (country/region level).
        </p>
      </section>

      <section className="space-y-3 bg-ocean-900/80 border border-ocean-800 rounded-xl p-6">
        <h2 className="text-xl font-bold text-white">Analytics &amp; Third-Party Services</h2>
        <p>
          We use Google Analytics to understand how visitors interact with our site. Google Analytics
          collects data via cookies and similar technologies. You can learn more about how Google
          uses your data at{' '}
          <a
            href="https://policies.google.com/privacy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-aqua hover:underline"
          >
            Google&apos;s Privacy Policy
          </a>.
        </p>
        <p>
          We may display advertisements through Google AdSense or other advertising networks in the
          future. These services may use cookies and web beacons to serve ads based on your prior
          visits to this and other websites. You can opt out of personalized advertising by visiting{' '}
          <a
            href="https://www.google.com/settings/ads"
            target="_blank"
            rel="noopener noreferrer"
            className="text-aqua hover:underline"
          >
            Google Ads Settings
          </a>.
        </p>
      </section>

      <section className="space-y-3 bg-ocean-900/80 border border-ocean-800 rounded-xl p-6">
        <h2 className="text-xl font-bold text-white">Cookies</h2>
        <p>
          Cookies are small text files stored on your device. We and our third-party partners use
          cookies for analytics and advertising purposes. Third-party ad networks may place cookies
          or web beacons on your browser to deliver targeted advertisements. You can control cookie
          behavior through your browser settings. Disabling cookies may affect site functionality.
        </p>
      </section>

      <section className="space-y-3 bg-ocean-900/80 border border-ocean-800 rounded-xl p-6">
        <h2 className="text-xl font-bold text-white">Your Rights (GDPR &amp; CCPA)</h2>
        <p>
          If you are located in the European Economic Area (EEA), you have rights under the General
          Data Protection Regulation (GDPR), including the right to access, correct, or delete your
          personal data, and the right to object to or restrict processing.
        </p>
        <p>
          If you are a California resident, the California Consumer Privacy Act (CCPA) grants you
          the right to know what personal information is collected, request its deletion, and opt out
          of the sale of personal information. We do not sell personal information.
        </p>
        <p>
          To exercise any of these rights, please contact us at the address below.
        </p>
      </section>

      <section className="space-y-3 bg-ocean-900/80 border border-ocean-800 rounded-xl p-6">
        <h2 className="text-xl font-bold text-white">Children&apos;s Privacy</h2>
        <p>
          This website is not directed at children under the age of 13. We do not knowingly collect
          personal information from children under 13 in compliance with the Children&apos;s Online
          Privacy Protection Act (COPPA). If you believe a child has provided us with personal
          information, please contact us so we can promptly remove it.
        </p>
      </section>

      <section className="space-y-3 bg-ocean-900/80 border border-ocean-800 rounded-xl p-6">
        <h2 className="text-xl font-bold text-white">Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. Changes will be posted on this page
          with a revised &ldquo;Last updated&rdquo; date. Your continued use of the site after
          changes constitutes acceptance of the updated policy.
        </p>
      </section>

      <section className="space-y-3 bg-ocean-900/80 border border-ocean-800 rounded-xl p-6">
        <h2 className="text-xl font-bold text-white">Contact</h2>
        <p>
          For privacy-related inquiries, please email{' '}
          <a href="mailto:privacy@howtofish101.com" className="text-aqua hover:underline">
            privacy@howtofish101.com
          </a>.
        </p>
      </section>
    </div>
  );
}
