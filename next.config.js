/** @type {import('next').NextConfig} */

let withBundleAnalyzer = require("@next/bundle-analyzer")({
    enabled: process.env.ANALYZE === "true",
});

const basePath = '/llm';

const nextConfig = {
  basePath,
  trailingSlash: true,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  agentRules: false,
  reactStrictMode: false,
  productionBrowserSourceMaps: true,
  // Always static HTML export for Cloudflare Pages / any static host.
  // Dev-only file-write tooling lives outside the App Router (see scripts/dev-schematic-api.mjs).
  output: 'export',
};

module.exports = withBundleAnalyzer(nextConfig);
