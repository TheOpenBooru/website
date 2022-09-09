/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    compress: true,
    compiler: {
        styledComponents: {
            ssr: true,
        }
    },
    experimental: {
        images: {
            allowFutureImage: true
        }
    },
    images: {
        domains: [
            "safebooru.org", "static1.e621.net",
            "slate", "localhost", "192.168.0.82", 
            "r34proxy.openbooru.workers.dev", "cdn.openbooru.org", "api.openbooru.org",
        ]
    },
    env: {
        SITE_NAME: "Open Booru",
        SITE_DESCRIPTION: "The Open Booru, the free and open-source image board",
        SITE_URL: "https://www.openbooru.org",
        API_URL: "https://api.openbooru.org",
        SERVER_API_KEY: null,
        READ_ONLY: false,
        PROMPT_AGE: false,
    },
    webpack(config, options) {
        return config
    },
    async headers() {
        return [{
            source: "/:path*",
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
