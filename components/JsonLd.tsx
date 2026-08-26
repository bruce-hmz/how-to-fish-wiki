export function WebSiteJsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'How to Fish Wiki',
    url: 'https://howtofish101.com',
    description:
      'Complete wiki and walkthrough for How to Fish by Dazed Games. Fish database, boss guides, boat keys, and co-op tips.',
    publisher: {
      '@type': 'Organization',
      name: 'How to Fish Community Anglers',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function FaqJsonLd({ faqs }: { faqs: { q: string; a: string }[] }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function VideoGameJsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'VideoGame',
    name: 'How to Fish',
    url: 'https://howtofish101.com',
    image: 'https://howtofish101.com/og-image.jpg',
    description:
      'A 1-4 player physics based fishing simulator by Dazed Games. Crash onto a mysterious archipelago, learn to fish, battle colossal marine bosses, and collect three boat keys to escape.',
    genre: ['Action', 'Casual', 'Indie', 'Simulation'],
    gamePlatform: ['PC', 'Windows'],
    operatingSystem: 'Windows 10',
    applicationCategory: 'Game',
    datePublished: '2026-08-20',
    inLanguage: 'en',
    playMode: ['SinglePlayer', 'CoOp'],
    numberOfPlayers: {
      '@type': 'QuantitativeValue',
      minValue: 1,
      maxValue: 4,
    },
    developer: { '@type': 'Organization', name: 'Dazed Games' },
    publisher: { '@type': 'Organization', name: 'Dazed Games' },
    sameAs: 'https://store.steampowered.com/app/4001890/How_to_Fish/',
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function ItemListJsonLd({ name, items }: { name: string; items: { name: string; url: string }[] }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name,
    numberOfItems: items.length,
    itemListElement: items.map((item, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      name: item.name,
      url: item.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
