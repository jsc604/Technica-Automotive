/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['images.unsplash.com', "d1hv7ee95zft1i.cloudfront.net"],
  },
}

module.exports = nextConfig
