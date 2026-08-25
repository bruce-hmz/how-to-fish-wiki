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
