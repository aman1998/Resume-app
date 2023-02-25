export const reactStrictMode = true;
export const swcMinify = true;
export const experimental = {
  // appDir: true,
  fontLoaders: [{ loader: '@next/font/google', options: { subsets: ['latin'] } }],
};
export const images = {
  remotePatterns: [
    {
      protocol: 'https',
      hostname: 'firebasestorage.googleapis.com',
      port: '',
    },
  ],
};
