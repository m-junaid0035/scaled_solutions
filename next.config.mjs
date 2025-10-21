import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // ✅ This disables ESLint checking during `next build`
    ignoreDuringBuilds: true,
  },
};
export default withNextIntl(nextConfig);
