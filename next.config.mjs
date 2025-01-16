/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export', // Only use this if you're sure about static export
    typescript: {
        ignoreBuildErrors: true, // Ignore TypeScript errors during build
    },
};

export default nextConfig;