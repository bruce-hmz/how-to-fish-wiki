import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { WebSiteJsonLd, VideoGameJsonLd } from '@/components/JsonLd';

export const metadata: Metadata = {
  metadataBase: new URL('https://howtofish101.com'),
  title: {
    default: 'How to Fish Wiki: Walkthrough, Boss Guide & Fish List',
    template: '%s | How to Fish Wiki'
  },
  description: 'Complete How to Fish wiki: fish list & rarity database, Pufferfish & Magma Whale boss guides, boat keys, Drip Fish secrets, and beginner co-op tips.',
  keywords: [
    'how to fish',
    'how to fish game',
    'how to fish wiki',
    'how to fish guide',
    'how to fish pufferfish boss',
    'how to fish all fish',
    'how to fish drip fish',
    'how to fish map',
    'how to fish boat keys',
    'how to fish coop'
  ],
  authors: [{ name: 'How to Fish Community Anglers' }],
  openGraph: {
    siteName: 'How to Fish Wiki',
    locale: 'en_US',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'How to Fish Wiki — Complete Walkthrough & Fish Database' }],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://howtofish101.com',
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  verification: {
    google: 'bfdwwVIHII1JNt3C7uEu-9d23-qVHSuincNMZWS3V4w',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="flex flex-col min-h-screen">
        <WebSiteJsonLd />
        <VideoGameJsonLd />
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-Q28JM2EJQ2" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-Q28JM2EJQ2');
          `}
        </Script>
      </body>
    </html>
  );
}
