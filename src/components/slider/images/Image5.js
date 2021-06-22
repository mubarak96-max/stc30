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

const Image5 = () => {
  const data = useStaticQuery(query)
  return (
    <div>
      <Background img={data.file.childImageSharp.fluid}>
        <h1>SuperLife STC30</h1>
        <h3>Giving you a new lease of life</h3>
        <p>
          STC30 is the origin of treatment in curing and prevention of diseases
          from the cellular level. It can treat and manage more than 140 health
          complications with no side effects even those formerly classified as
          incurable. The STC30 will renewrevitalize and regenerate your life.
          Your life is safe with the STC30.
        </p>
      </Background>
    </div>
  )
}

export default Image5
