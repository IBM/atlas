/** @type {import('next').NextConfig} */
const nextConfig = {
  assetPrefix:
    process.env.NODE_ENV === "production" ? "/ibm-technology-atlas/" : "",
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;
