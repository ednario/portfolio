/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'media.licdn.com' },
      { protocol: 'https', hostname: 'media.graphassets.com' },
      { protocol: 'https', hostname: 'us-west-2.graphassets.com' },
      { protocol: 'https', hostname: '*.graphassets.com' },
    ],
  },
}

module.exports = nextConfig
