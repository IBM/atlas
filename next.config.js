/** @type {import('next').NextConfig} */

const path =
  process.env.NODE_ENV === "production"
    ? "/Vincent-Patrick-Picone/ibm-technology-atlas/"
    : undefined;

const nextConfig = {
  basePath: path,
  assetPrefix: path,
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;
