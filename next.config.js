const isProd = process.env.NODE_ENV === 'production'

export default {
  // Use actual domain for production and localhost for development.
  assetPrefix: isProd ? 'https://osm.tw' : '',
}