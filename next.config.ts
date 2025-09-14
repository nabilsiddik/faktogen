import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'woodmart.xtemos.com',
      }
    ],
  },
};

export default nextConfig;
