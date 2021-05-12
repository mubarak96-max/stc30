import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Background from "../background"

const query = graphql`
  {
    file(relativePath: { eq: "s1.jpg" }) {
      childImageSharp {
        fluid(quality: 95) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const Image1 = ({ img }) => {
  const data = useStaticQuery(query)
  return (
    <div>
      <Background img={data.file.childImageSharp.fluid}>yyyuuuueess</Background>
    </div>
  )
}

export default Image1
