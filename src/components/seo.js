/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function SEO({ description, title, keywords }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )

  return (
    <Helmet htmlAttributes={{ lang: "en" }} title={title}>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta property="og:title" content="STEM CELL THERAPY STC30"></meta>
      <meta property="og:type" content="article" />
      <meta property="og:image" content="/s2.jpeg" />
      <meta property="og:url" content="https://stemcellstc30.xyz/" />
      <meta name="twitter:title" content=" STEM CELL THERAPY STC30" />
      <meta
        name="twitter:description"
        content=" STC30 a breakthrough in medical science with the stem cell technology, the origin of stem cell treatment in curing and prevention of diseases. A plant-based stem cell which uses stem cells to manage, prevent or address several health complications  manufactured by Mibelle Bio Chemistry in Zurich Switzerland and distributed worldwide by SuperLifeWorld based in Malaysia."
      />
      <meta name="twitter:image" content="/s2.jpeg" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="google-site-verification" content="ulNrJZk3EYKKHxPIRzPylM-8X-hwNu6dETdY9NQvTvo" />
    </Helmet>
  )
}

export default SEO
