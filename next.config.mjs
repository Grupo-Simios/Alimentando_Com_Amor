/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "api.qrserver.com" },
      { protocol: "http", hostname: "api.qrserver.com" },
      { protocol: "https", hostname: "i.imgur.com" },
      { protocol: "http", hostname: "i.imgur.com" },
    ],
  },
};

export default nextConfig;
