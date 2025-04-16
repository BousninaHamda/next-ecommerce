import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'files.stripe.com',
        protocol: 'https',
        port: '',
      },
    ],
  },
};

export default nextConfig;
