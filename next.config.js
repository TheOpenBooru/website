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
        SITE_NAME: "Open Booru",
        SITE_DESCRIPTION: "",
        API_URL: "https://api.openbooru.org",
    },
};

module.exports = nextConfig;
