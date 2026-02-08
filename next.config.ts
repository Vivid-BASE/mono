import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ryzm.imgee.io',
        pathname: '/sites/**',
      },
    ],
  },
};

export default nextConfig;
