import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/global/layout"
import SEO from "../components/global/seo"
import Slider from "../components/slider"
import About from "../components/index/about"
import Brands from "../components/index/brands"

const Index = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Home" />
      <Slider />
      <About />
      <Brands brandLogos={data.siemens} />
    </Layout>
  )
}

export default Index

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    siemens: file(relativePath: { eq: "brand-logos/siemens.png" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

// export const brandLogos = graphql`
//   query {
//     siemens: file(relativePath: { eq: "brand-logos/siemens.png" }) {
//       childImageSharp {
//         fluid(maxWidth: 500) {
//           ...GatsbyImageSharpFluid
//         }
//       }
//     }
//   }
// `
