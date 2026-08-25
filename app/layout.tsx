import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  metadataBase: new URL('https://howtofish101.com'),
  title: {
    default: 'How to Fish Guide & Complete Wiki | Walkthrough, Bosses & Fish Database',
    template: '%s | How to Fish Wiki'
  },
  description: 'Master Dazed Games 1-4 player physics fishing hit How to Fish. Complete fish list, rare Drip Fish locations, Pufferfish & Magma Whale boss guides, boat keys, and best settings.',
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
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://howtofish101.com',
  },
  icons: {
    icon: '/favicon.svg',
  },
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
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
