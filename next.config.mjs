/** @type {import('next').NextConfig} */
const nextConfig = {
  // runtime: "edge",
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos",
        port: "",
        pathname: "/**/**",
      },
    ],
  },
};

export default nextConfig;
