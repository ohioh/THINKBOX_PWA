
module.exports = {
    staticFileGlobs: [
      '/index.html',
      '/manifest.json',
      '/routes/',
      '/assets/'

    ],
    navigateFallback: '/index.html',
    navigateFallbackWhitelist: [/^(?!.*\.js$|\/data\/).*/]
  }