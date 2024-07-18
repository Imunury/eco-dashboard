/** @type {import('next').NextConfig} */
// const nextConfig = {}

module.exports = {
  async rewrites() {
    return {
      fallback: [
        {
          source: "/:path*",
          destination: "https://eco-dashboard-kappa.vercel.app",
        },
      ],
    };
  },
};
