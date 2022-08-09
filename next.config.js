/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
        domains: ["api.openbooru.org"],
    },
};

module.exports = nextConfig;
