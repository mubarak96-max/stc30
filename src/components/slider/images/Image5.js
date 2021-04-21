import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Background from "../background"

const query = graphql`
  {
    file(relativePath: { eq: "s5.jpg" }) {
      childImageSharp {
        fluid(quality: 95) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const Image5 = ({ img }) => {
  const data = useStaticQuery(query)
  return (
    <div>
      <Background img={data.file.childImageSharp.fluid}></Background>
    </div>
  )
}

export default Image5
