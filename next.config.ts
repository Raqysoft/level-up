import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { hostname: "randomuser.me" },
      { hostname: "lh3.googleusercontent.com" },
    ],
  },
  /* config options here */
};

export default nextConfig;
