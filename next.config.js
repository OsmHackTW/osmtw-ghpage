const isProd = process.env.NODE_ENV === 'production'

export default {
  // Use actual domain for production and localhost for development.
  assetPrefix: isProd ? 'https://osm.tw' : '',
  // `next export` has been removed in favor of 'output: export' in next.config.js ,
  // see: https://nextjs.org/docs/app/guides/static-exports
  output: 'export',
}