
module.exports = {
    staticFileGlobs: [
      '/template.html',
      '/manifest.json',
      '/src/routes/',
      '/assets/'

    ],
    navigateFallback: '/index.html',
    navigateFallbackWhitelist: [/^(?!.*\.js$|\/data\/).*/]
  }