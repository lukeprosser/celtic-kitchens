import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/global/layout"
import SEO from "../components/global/seo"
import Slider from "../components/slider"
import About from "../components/index/about"
import Brands from "../components/index/brands"
import Testimonials from "../components/index/testimonials"
import Location from "../components/index/location"

const Index = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Home" />
      <Slider location={location} />
      <About />
      <Brands brandLogos={data.brandLogos} />
      <Testimonials />
      <Location googleMap={data.googleMap} />
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
    brandLogos: allFile(filter: { relativeDirectory: { eq: "brand-logos" } }) {
      edges {
        node {
          id
          childImageSharp {
            fluid(maxWidth: 200) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
    googleMap: file(relativePath: { eq: "location/googlemap.png" }) {
      childImageSharp {
        fluid(maxWidth: 680) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
