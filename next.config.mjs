/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  reactStrictMode: true,
  trailingSlash: true,
  async redirects() {
    return [
      {
        // www was serving a full 200 duplicate of the apex site (verified in
        // production, 2026-09-16). Force one permanent host so only
        // https://howtofish101.com is ever indexed.
        source: '/:path*',
        has: [{ type: 'host', value: 'www.howtofish101.com' }],
        destination: 'https://howtofish101.com/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
