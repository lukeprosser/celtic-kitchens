// Gatsby supports TypeScript natively!
import React from "react"
import { PageProps, Link, graphql } from "gatsby"

import Layout from "../components/global/layout"
import SEO from "../components/global/seo"
import { rhythm } from "../utils/typography"

import "./blog.scss"

type Data = {
  site: {
    siteMetadata: {
      title: string
    }
  }
  allMarkdownRemark: {
    edges: {
      node: {
        excerpt: string
        frontmatter: {
          title: string
          date: string
          description: string
        }
        fields: {
          slug: string
        }
      }
    }[]
  }
}

const BlogIndex = ({ data, location }: PageProps<Data>) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Blog" />
      <div className="blog">
        <div className="blog-content">
          <div className="page-intro">
            <div className="container">
              <h1 className="page-intro-header">The Blog</h1>
              <p className="page-intro-blurb">
                All of the latest news, updates and advice from the Celtic
                Kitchens team.
              </p>
            </div>
          </div>
          <section className="page-section blog-content-blog-posts">
            <div className="container">
              {posts.map(({ node }) => {
                const title = node.frontmatter.title || node.fields.slug
                return (
                  <article key={node.fields.slug}>
                    <header
                      className="blog-content-blog-posts-header"
                      style={{
                        marginBottom: rhythm(1 / 4),
                      }}
                    >
                      <h3 className="blog-content-blog-posts-title">
                        <Link
                          className="blog-content-blog-posts-title-link"
                          style={{ boxShadow: `none` }}
                          to={node.fields.slug}
                        >
                          {title}
                        </Link>
                      </h3>
                      <small className="blog-content-blog-posts-date">
                        {node.frontmatter.date}
                      </small>
                    </header>
                    <section>
                      <p
                        dangerouslySetInnerHTML={{
                          __html: node.frontmatter.description || node.excerpt,
                        }}
                      />
                    </section>
                  </article>
                )
              })}
            </div>
          </section>
        </div>
      </div>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
