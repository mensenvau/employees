/** @type {import('next').NextConfig} */

const nextConfig = {
    reactStrictMode: false,
    images: {},
    env: {
        BASE_URL: process.env.BASE_URL
    }
}

module.exports = nextConfig
