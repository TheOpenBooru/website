/** @type {import('next').NextConfig} */
const nextConfig = {
    typescript: {
      ignoreBuildErrors: true,
    },
    compiler: {
        styledComponents: true,
    },
    experimental: {
        images: {
            allowFutureImage: true
        }
    },
    reactStrictMode: true,
    swcMinify: true,
    images: {
        domains: [
            "safebooru.org",
            "static1.e621.net",
            "slate", "localhost", "192.168.0.82", 
            "r34proxy.openbooru.workers.dev", "api.openbooru.org",
        ]
    },
    env: {
        SITE_NAME: "Open Booru",
        SITE_DESCRIPTION: "The Open Booru, the free and open-source image board",
        API_URL: "https://api.openbooru.org",
        READ_ONLY: true,
    },
    webpack(config, options) {
        return config
    },
    async headers() {
        return [{
            source: "*",
            headers: [
                {
                    key:"X-Frame-Options",
                    value:"DENY",
                },
                {
                    key:"X-Content-Type-Options",
                    value:"nosniff",
                },
                {
                    key:"Referrer-Policy",
                    value:"strict-origin-when-cross-origin",
                },
            ]
        }]
    }
};

module.exports = nextConfig;
