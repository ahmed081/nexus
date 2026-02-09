/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "standalone", // ✅ this generates .next/standalone

    typescript: {
        ignoreBuildErrors: true,
    },
    images: {
        unoptimized: true,
    },
};

export default nextConfig;
