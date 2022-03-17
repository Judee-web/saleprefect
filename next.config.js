const withPlugins = require('next-compose-plugins')
const optimizedImages = require('next-optimized-images')

module.exports = {
    eslint: {
      // Warning: This allows production builds to successfully complete even if
      // your project has ESLint errors.
      ignoreDuringBuilds: true,
    },
  }
// module.exports = withPlugins([optimizedImages])
