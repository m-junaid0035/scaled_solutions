/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // ✅ This disables ESLint checking during `next build`
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
