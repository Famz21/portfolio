import { withSentryConfig } from '@sentry/nextjs';

/** @type {import('next').NextConfig} */
const nextConfig = {
    // Remove `output: 'export'` if you need Sentry for server-side features
    output: 'export', // Only use this if you're sure about static export
    typescript: {
        ignoreBuildErrors: true, // Ignore TypeScript errors during build
    },
};

// Sentry configuration
const sentryOptions = {
    // Suppresses source map uploading logs during build
    silent: true,

    // Organization and project details
    org: "dtu-bs",
    project: "javascript-nextjs",

    // Upload a larger set of source maps for prettier stack traces (increases build time)
    widenClientFileUpload: true,

    // Transpiles SDK to be compatible with IE11 (increases bundle size)
    transpileClientSDK: true,

    // Hides source maps from generated client bundles
    hideSourceMaps: true,

    // Automatically tree-shake Sentry logger statements to reduce bundle size
    disableLogger: true,

    // Enables automatic instrumentation of Vercel Cron Monitors
    automaticVercelMonitors: true,

    // Automatically annotate React components to show their full name in breadcrumbs and session replay
    reactComponentAnnotation: {
        enabled: true,
    },
};

// Export the final configuration
export default withSentryConfig(nextConfig, sentryOptions);