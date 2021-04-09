import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Background from "../background"

const query = graphql`
  {
    file(relativePath: { eq: "s7.jpeg" }) {
      childImageSharp {
        fluid(quality: 95) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const Image7 = ({ img }) => {
  const data = useStaticQuery(query)
  return (
    <div>
      <Background img={data.file.childImageSharp.fluid}>
        <p>Get the STC30 so that you renew your life</p>
      </Background>
    </div>
  )
}

export default Image7