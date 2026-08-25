import { MetadataRoute } from 'next';
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://how-to-fish.wiki';
  const routes = ['', '/guide/', '/fish/', '/fish/drip-fish/', '/bosses/', '/bosses/pufferfish/', '/bosses/spider-crab/', '/bosses/magma-whale/', '/lures/', '/map/', '/boat/', '/multiplayer/', '/settings/', '/about/', '/privacy/', '/terms/', '/faq/'];
  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'daily',
    priority: route === '' ? 1.0 : (route.includes('fish') || route.includes('bosses') ? 0.9 : 0.8),
  }));
}
