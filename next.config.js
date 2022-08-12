/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    compiler: {
        styledComponents: true,
    },
    images: {
        domains: ["api.openbooru.org"],
    },
    env: {
        APIURL: 'https://api.openbooru.org',
    },
};

module.exports = nextConfig;
