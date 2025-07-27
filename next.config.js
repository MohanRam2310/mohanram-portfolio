/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true
  },
  images: {
    // Allow external domains for hero and case study images
    domains: [
      'images.unsplash.com',
      'upload.wikimedia.org',
      'raw.githubusercontent.com',
      'logos-world.net',
      'seeklogo.com',
      'cdn.jsdelivr.net'
    ]
  }
};

module.exports = nextConfig;