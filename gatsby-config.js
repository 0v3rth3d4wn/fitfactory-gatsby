/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  /* Your site config here */
  siteMetadata: {
    // siteUrl: required (Gotcha: do not include a trailing slash at the end)
    siteUrl: process.env.SITE_URL,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-breadcrumb`,
      options: {
        // useAutoGen: required 'true' to use autogen
        useAutoGen: true,
        // autoGenHomeLabel: optional 'Home' is default
        autoGenHomeLabel: `Начало`,
        // exclude: optional, include this array to exclude paths you don't want to
        // generate breadcrumbs for (see below for details).
        exclude: [
          `**/dev-404-page/**`,
          `**/404/**`,
          `**/404.html`,
          `**/offline-plugin-app-shell-fallback/**`,
        ],
      },
    },
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        /*
         * The full URL of the WordPress site's GraphQL API.
         * Example : 'https://www.example-site.com/graphql'
         */
        // url: `https://admin.fitfactory.bg/graphql`,
        // url: `http://admin.fitfactory.test/graphql`,
        url: process.env.ADMIN_GRAPHQL_URL,
      },
    },
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          placeholder: `blurred`,
        },
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
  ],
}
