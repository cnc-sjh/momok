/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  devIndicators: {
    buildActivityPosition: 'bottom-right',
  },
  webpack5: true,
  webpack: (config) => {
    config.resolve.fallback = { fs: false,net:false,tls:false };
    return config;
  },
}

module.exports = nextConfig
