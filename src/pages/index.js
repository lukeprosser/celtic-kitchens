import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/global/layout"
import SEO from "../components/global/seo"
import Slider from "../components/slider"

const Index = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Home" />
      <Slider />
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
  }
`
