/** @type {import('next').NextConfig} */

// This setup is for deploying to GitHub Pages.
// It automatically sets the correct base path and asset prefix.
const isGithubActions = process.env.GITHUB_ACTIONS || false;
let assetPrefix = '';
let basePath = '';

if (isGithubActions) {
  // It's important to replace 'portfolio' with your repository name.
  // This will be used as the base path for your assets.
  const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, '');
  assetPrefix = `/${repo}/`;
  basePath = `/${repo}`;
}

const nextConfig = {
  /* config options here */
  output: 'export',
  assetPrefix: assetPrefix,
  basePath: basePath,
  trailingSlash: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
    ],
  },
  devIndicators: {
    buildActivity: false,
  },
  experimental: {
    allowedDevOrigins: [
      '*.cloudworkstations.dev',
      '*.firebase.studio'
    ]
  }
};

module.exports = nextConfig;
