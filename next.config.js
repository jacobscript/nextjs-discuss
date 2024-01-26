/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
      },
    ],
  },
};

module.exports = nextConfig;

// next.config.js
module.exports = {
  basePath: process.env.NODE_ENV === 'production' ? '/nextjs-discuss' : '',
}
