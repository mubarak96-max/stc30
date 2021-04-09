import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Background from "../background"

const query = graphql`
  {
    file(relativePath: { eq: "s6.jpg" }) {
      childImageSharp {
        fluid(quality: 95) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const Image6 = ({ img }) => {
  const data = useStaticQuery(query)
  return (
    <div>
      <Background img={data.file.childImageSharp.fluid}>
        <p>Since 2015, the STC30 has been proven in more than 120 countries</p>
      </Background>
    </div>
  )
}

export default Image6
