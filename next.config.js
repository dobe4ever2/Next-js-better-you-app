/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/Next-js-better-you-app',
  assetPrefix: '/Next-js-better-you-app/',
  images: {
    loader: 'akamai',
    path: '',
  },
  output: 'export',  // Add this line
}

module.exports = nextConfig
