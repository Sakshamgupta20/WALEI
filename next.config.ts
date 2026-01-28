import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_PAGES === "true";
const basePath = isGitHubPages ? "/WALEI" : "";

const nextConfig: NextConfig = {
  // Enable static export for GitHub Pages
  output: "export",

  // Set basePath for GitHub Pages
  basePath: basePath,
  assetPrefix: basePath ? `${basePath}/` : "",

  // Expose basePath to client components
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },

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
