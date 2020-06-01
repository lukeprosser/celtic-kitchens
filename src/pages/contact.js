import React from "react"
import { graphql } from "gatsby"
import Image from "gatsby-image"

import Layout from "../components/global/layout"
import SEO from "../components/global/seo"
import Location from "../components/index/location"

import "./contact.scss"

const Contact = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Contact" />
      <div className="contact">
        <div className="contact-content">
          <div className="page-intro">
            <div className="container">
              <h1 className="page-intro-header">Contact</h1>
              <p className="page-intro-blurb">
                If you wish to enquire about your dream kitchen or would like to
                arrange a visit to our showroom for a consultation, get in touch
                with us today and one of our friendly team members will get back
                to you as soon as possible.
              </p>
            </div>
          </div>
          <section className="page-section contact-content-wrapper">
            <div className="container">
              <div className="contact-content-blurb">
                <h2 className="page-section-header">Get in touch</h2>
                <p>
                  Please feel free to send us a message via the contact form and
                  our team will be notified straight away.
                </p>
              </div>
              <div className="contact-content-form-wrapper">
                <div className="contact-content-image-wrapper">
                  <Image fluid={data.office.childImageSharp.fluid} />
                </div>
                <form
                  className="contact-content-form"
                  name="contact-form"
                  method="POST"
                  data-netlify="true"
                  data-netlify-honeypot="bot-field"
                >
                  <input type="hidden" name="form-name" value="contact-form" />
                  <div className="contact-content-form-group">
                    <label className="contact-content-form-label">Name</label>
                    <input
                      className="contact-content-form-input"
                      type="text"
                      name="name"
                      placeholder="Full name"
                      required
                    />
                  </div>
                  <div className="contact-content-form-group">
                    <label className="contact-content-form-label">Email</label>
                    <input
                      className="contact-content-form-input"
                      type="email"
                      name="email"
                      placeholder="Email address"
                      required
                    />
                  </div>
                  <div className="contact-content-form-group full-width">
                    <label className="contact-content-form-label">
                      Message
                    </label>
                    <textarea
                      className="contact-content-form-message"
                      name="message"
                      rows="4"
                      placeholder="Message"
                      required
                    ></textarea>
                  </div>
                  <div className="contact-content-form-group full-width">
                    <button
                      className="contact-content-form-submit button"
                      type="submit"
                      name="submit"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </section>
          <Location googleMap={data.googleMap} />
        </div>
      </div>
    </Layout>
  )
}

export default Contact

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    office: file(relativePath: { eq: "office.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1080) {
          ...GatsbyImageSharpFluid
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
