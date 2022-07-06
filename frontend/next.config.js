/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  images: {
    loader: 'imgix',
    path: 'https://purple-water-049be5703.1.azurestaticapps.net/'
  }
};

module.exports = nextConfig;
