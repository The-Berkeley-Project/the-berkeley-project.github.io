import type { NextConfig } from "next";

const repoName = "the-berkeley-project.github.io";
const isProduction = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isProduction ? `/${repoName}` : undefined,
  assetPrefix: isProduction ? `/${repoName}/` : undefined,
  trailingSlash: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.berkeleyproject.org",
      },
    ],
  },
};

export default nextConfig;
