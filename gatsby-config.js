module.exports = {
  siteMetadata: {
    title: 'The Ridge Market & Cafe',
  },
  plugins: [
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-styled-components`,
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'the-ridge-cafe',
        short_name: 'ridge-cafe',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#d82c2c',
        display: 'minimal-ui',
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Montserrat'],
        },
      },
    },
  ],
}
