const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  // Use actual domain for production and localhost for development.
  assetPrefix: isProd ? 'https://osm.tw' : '',
}