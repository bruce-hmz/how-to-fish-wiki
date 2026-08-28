import { MetadataRoute } from 'next';

const baseUrl = 'https://howtofish101.com';

// Routes touched by the Patch 1.0.10 freshness sprint, August 28, 2026.
const UPDATED_2026_08_28 = new Set([
  '/updates/',
  '/troubleshooting/cooked-weapons/',
  '/troubleshooting/items-disappeared/',
  '/troubleshooting/fish-not-biting/',
  '/troubleshooting/',
]);

// Routes reworked in the August 27, 2026 content sprint (save/recovery funnel,
// money guide, fish list rebuild, settings overhaul, FAQ alignment).
const UPDATED_2026_08_27 = new Set([
  '/',
  '/fish/',
  '/money/',
  '/faq/',
  '/settings/',
  '/troubleshooting/',
  '/troubleshooting/save-file/',
  '/troubleshooting/items-disappeared/',
  '/troubleshooting/join-friends/',
  '/troubleshooting/cooked-weapons/',
]);

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ['', '/guide/', '/fish/', '/fish/drip-fish/', '/bosses/', '/bosses/pufferfish/', '/bosses/spider-crab/', '/bosses/magma-whale/', '/bosses/giant-piranha/', '/bosses/albatross/', '/lures/', '/weapons/', '/money/', '/map/', '/boat/', '/islands/', '/cooking/', '/multiplayer/', '/settings/', '/difficulty/', '/casino/', '/trick-shots/', '/achievements/', '/achievements/bean/', '/game/system-requirements/', '/game/launch/', '/updates/', '/videos/', '/troubleshooting/', '/troubleshooting/save-file/', '/troubleshooting/items-disappeared/', '/troubleshooting/cooked-weapons/', '/troubleshooting/join-friends/', '/troubleshooting/fish-not-biting/', '/troubleshooting/error-0x11c7/', '/troubleshooting/what-to-do-next/', '/about/', '/editorial-policy/', '/privacy/', '/terms/', '/faq/'];
  return routes.map((route) => ({
    url: `${baseUrl}${route || '/'}`,
    lastModified: UPDATED_2026_08_28.has(route || '/')
      ? '2026-08-28'
      : UPDATED_2026_08_27.has(route || '/')
        ? '2026-08-27'
        : '2026-08-26',
    changeFrequency: route === '' || route === '/updates/' ? 'daily' : 'weekly',
    priority: route === '' ? 1.0 : (route.includes('fish') || route.includes('bosses') ? 0.9 : 0.8),
  }));
}