module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    // appDir: true,
    fontLoaders: [{ loader: '@next/font/google', options: { subsets: ['latin'] } }],
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.ytimg.com',
        port: '',
      },
    ],
  },
};
