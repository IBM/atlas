/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/Vincent-Patrick-Picone/ibm-technology-atlas",
  assetPrefix:
    process.env.NODE_ENV === "production"
      ? "/Vincent-Patrick-Picone/ibm-technology-atlas/"
      : "",
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;
