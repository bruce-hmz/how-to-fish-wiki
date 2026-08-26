import { MetadataRoute } from 'next';
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://howtofish101.com';
  const routes = ['', '/guide/', '/fish/', '/fish/drip-fish/', '/bosses/', '/bosses/pufferfish/', '/bosses/spider-crab/', '/bosses/magma-whale/', '/bosses/giant-piranha/', '/bosses/albatross/', '/lures/', '/map/', '/boat/', '/multiplayer/', '/settings/', '/casino/', '/trick-shots/', '/achievements/', '/game/system-requirements/', '/troubleshooting/', '/troubleshooting/save-file/', '/troubleshooting/items-disappeared/', '/troubleshooting/join-friends/', '/troubleshooting/error-0x11c7/', '/troubleshooting/what-to-do-next/', '/about/', '/privacy/', '/terms/', '/faq/'];
  return routes.map((route) => ({
    url: `${baseUrl}${route || '/'}`,
    lastModified: new Date(),
    changeFrequency: 'daily',
    priority: route === '' ? 1.0 : (route.includes('fish') || route.includes('bosses') ? 0.9 : 0.8),
  }));
}
