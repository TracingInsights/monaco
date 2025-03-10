/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  compiler: {
    styledComponents: true,
  },
  basePath: "/monaco",
  output: "export",
};

module.exports = nextConfig;
