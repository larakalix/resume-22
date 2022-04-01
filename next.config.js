/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    env: {
        NEXT_DATO_CMS_TOKEN: process.env.NEXT_DATO_CMS_TOKEN,
        NEXT_TITLE: process.env.NEXT_TITLE,
    },
    images: {
        domains: ["www.datocms-assets.com"],
    },
};

module.exports = nextConfig;
