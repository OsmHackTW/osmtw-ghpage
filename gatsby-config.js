module.exports = {
  siteMetadata: {
    title: 'OpenStreetMap Taiwan 開放街圖台灣',
    author: '開放街圖台灣社群',
    description: 'Website of the OpenStreetMap Taiwan Community 台灣開放街圖社群網站',
  },
  pathPrefix: '/osmtw-ghpage',
  plugins: [
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-136100516-1',
      },
    },
    'gatsby-plugin-postcss',
    'gatsby-plugin-sharp',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/assets/images/logo.png',
      }, icons: [
        {
          src: `/favicons/android-chrome-192x192.png`,
          sizes: `192x192`,
          type: `image/png`,
        },
        {
          src: `/favicons/android-chrome-512x512.png`,
          sizes: `512x512`,
          type: `image/png`,
        },
      ],
    },
    'gatsby-plugin-mdx',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/assets/images',
      },
      __key: 'images',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: './src/pages/',
      },
      __key: 'pages',
    },
    {
      resolve: "gatsby-source-custom-api",
      options: {
        url: "https://osmcal.org/api/v2/events/?in=TW",
        rootKey: 'events',
        schemas: {
          events: `
            name: String,
            url: String,
            date: date,
            location: location,
            cancelled: Boolean,
          `,
          date: `
              start: String,
              end: String,
              human: String,
              human_short: String,
              whole_day: Boolean,
          `,
          location: `
              short: String,
              detailed: String,
              venue: String,
          `
        }
      }
    },
  ],
};
