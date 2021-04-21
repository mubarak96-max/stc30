module.exports = {
  siteMetadata: {
    title: `STEM CELL STC30`,
    siteUrl: `https://www.stemcellstc30.xyz/`,
    description: `STC30 a breakthrough in medical science with the stem cell technology, the origin of stem cell treatment in curing and prevention of diseases. A plant-based stem cell which uses stem cells to manage, prevent or address several health complications manufactured by Mibelle Bio Chemistry in Zurich Switzerland and distributed worldwide by SuperLifeWorld based in Malaysia. The STC30 can treat more than 140 diseases even those formerly known as incurable.`,
    author: `mubarak mutesasira`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-advanced-sitemap`,
    `gatsby-plugin-robots-txt`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Stem Cell STC30`,
        short_name: `STC30`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `minimal-ui`,
        icon: `src/images/logo.jpg`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    // `gatsby-plugin-offline`,
  ],
}
