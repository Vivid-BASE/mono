import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',  // Enable static export for Cloudflare Pages
  images: {
    unoptimized: true,  // Disable image optimization for static export
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
