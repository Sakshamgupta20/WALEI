import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";
const isGitHubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  // Enable static export for GitHub Pages
  output: "export",

  // Set basePath for GitHub Pages (change 'WALEI' to your repo name if different)
  basePath: isGitHubPages ? "/WALEI" : "",
  assetPrefix: isGitHubPages ? "/WALEI/" : "",

  // Disable image optimization for static export
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },

  // Trailing slashes for better compatibility with static hosting
  trailingSlash: true,
};

export default nextConfig;
