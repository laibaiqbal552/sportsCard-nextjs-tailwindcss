/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    newNextLinkBehavior: true,
    images: {
      allowFutureImage: true,
      // domains: ['images.unsplash.com'],
    },
  },
}

module.exports = nextConfig
