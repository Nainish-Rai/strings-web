/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["scontent.cdninstagram.com", "static.cdninstagram.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.cdninstagram.com",
      },
      {
        protocol: "https",
        hostname: "**.fbcdn.net",
      },
    ],
  },
};

module.exports = nextConfig;
