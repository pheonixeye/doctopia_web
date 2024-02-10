/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    runtime: "edge-experimental",
  },
  reactStrictMode: true,
  swcMinify: true,
};

export default nextConfig;
