import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/global/layout"
import SEO from "../components/global/seo"

const Index = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Home" />
      <h1>{siteTitle}</h1>
      <p>Welcome to {siteTitle}</p>
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
