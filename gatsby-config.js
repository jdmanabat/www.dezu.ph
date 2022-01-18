/* eslint-disable unicorn/prefer-module */
const dotenv = require('dotenv');

dotenv.config({ path: '.env' });

// Check what node environment is running for Sanity plugin
const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  siteMetadata: {
    siteUrl: 'https://dezu.netlify.app/',
  },
  flags: {
    DEV_SSR: true,
    FAST_DEV: true,
    PRESERVE_WEBPACK_CACHE: true,
  },
  plugins: [
    'gatsby-plugin-postcss',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-typescript',
    'gatsby-plugin-image',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    // {
    //   resolve: 'gatsby-plugin-google-gtag',
    //   options: {
    //     // You can add multiple tracking ids and a pageview event will be fired for all of them.
    //     trackingIds: [''],
    //     // This object gets passed directly to the gtag config command
    //     // This config will be shared across all trackingIds
    //     gtagConfig: {
    //       anonymize_ip: true,
    //     },
    //     // This object is used for configuration specific to this plugin
    //     pluginConfig: {
    //       // Puts tracking script in the head instead of the body
    //       head: false,
    //       // Setting this parameter is also optional
    //       respectDNT: true,
    //     },
    //   },
    // },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/favicon.png',
      },
    },
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        // Defaults used for gatsbyImageData and StaticImage
        defaults: {
          quality: 90,
        },
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
      __key: 'images',
    },
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: process.env.GATSBY_SANITY_PROJECT_ID,
        dataset: process.env.GATSBY_SANITY_DATASET,

        // Set to `true` in order for drafts to replace their published version. By default, drafts will be skipped.
        // overlayDrafts: !isProd,

        // Set to `true` to keep a listener open and update with the latest changes in realtime. If you add a `token` you will get all content updates down to each keypress.
        watchMode: !isProd,

        // Authentication token for fetching data from private datasets, or when using overlayDrafts
        token: process.env.SANITY_TOKEN,

        // If the Sanity GraphQL API was deployed using `--tag <name>`,
        // use `graphqlTag` to specify the tag name. Defaults to `default`.
        graphqlTag: 'default',
      },
    },
  ],
};
