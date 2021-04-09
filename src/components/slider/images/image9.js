// import React from "react"
// import { graphql, useStaticQuery } from "gatsby"
// import Background from "../background"

// const query = graphql`
//   {
//     file(relativePath: { eq: "s9.jpg" }) {
//       childImageSharp {
//         fluid(quality: 95) {
//           ...GatsbyImageSharpFluid
//         }
//       }
//     }
//   }
// `

// const Image9 = ({ img }) => {
//   const data = useStaticQuery(query)
//   return (
//     <div>
//       <Background img={data.file.childImageSharp.fluid}>
//         <p>
//           Diseases and disorders of the kidney, stomach, heart, skin, lungs,
//           eyes, muscles, bones plus different body organs and systems
//         </p>
//       </Background>
//     </div>
//   )
// }

// export default Image9
