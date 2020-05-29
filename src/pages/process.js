import React from "react"
import { graphql, Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faPencilRuler,
  faTape,
  faTags,
  faTruck,
  faTools,
} from "@fortawesome/free-solid-svg-icons"

import Layout from "../components/global/layout"
import SEO from "../components/global/seo"

import "./process.scss"

const Process = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Process" />
      <div className="process">
        <div className="process-content">
          <div className="page-intro">
            <div className="container">
              <h1 className="page-intro-header">The Design Process</h1>
              <p className="page-intro-blurb">
                At Celtic Kitchens, we pride ourselves on our communication and
                smooth delivery process. We'll work with you to create the
                kitchen of your dreams and keep you updated every step of the
                way.
              </p>
            </div>
          </div>
          <section className="page-section process-content-process-steps">
            <div className="container">
              <div className="process-content-process-steps-step">
                <h3>
                  <span className="process-content-process-steps-step-number">
                    1
                  </span>
                  Consultation
                </h3>
                <p>
                  Your initial kitchen design consultation is a free no
                  obligation service. You are invited to our showroom to discuss
                  all of your requirements with your personal designer who will
                  gather the information they need to understand your lifestyle
                  and the space you're looking to achieve.
                </p>
              </div>
              <div className="process-content-process-steps-step">
                <h3>
                  <span className="process-content-process-steps-step-number">
                    2
                  </span>
                  Design
                </h3>
                <p>
                  After your initial consultation, we will create professional
                  3D plans for you to review on our exclusive platform. This
                  part of the process is key as it will ensure that you are
                  comfortable with your design...plus it's the most fun!
                </p>
              </div>
              <div className="process-content-process-steps-step">
                <h3>
                  <span className="process-content-process-steps-step-number">
                    3
                  </span>
                  Quotation
                </h3>
                <p>
                  Once you have confirmed that you're happy with your design, we
                  will proceed to put together your bespoke package containing
                  all of the plans and information discussed during the
                  consultation. This will also include a fully transparent
                  breakdown of costs including all products and services.
                </p>
              </div>
              <div className="process-content-process-steps-step">
                <h3>
                  <span className="process-content-process-steps-step-number">
                    4
                  </span>
                  Production
                </h3>
                <p>
                  After the quote has been signed off, your order will be placed
                  and we will proceed with production. It is at this stage that
                  we will arrange to visit your home to carry out a detailed
                  survey and answer any additional questions that you might
                  have.
                </p>
              </div>
              <div className="process-content-process-steps-step">
                <h3>
                  <span className="process-content-process-steps-step-number">
                    5
                  </span>
                  Installation
                </h3>
                <p>
                  Once your new kitchen has been manufactured our team of
                  professional fitters will visit your property to carry out the
                  installation. With detailed product knowledge, they will
                  ensure the highest standard of fit and finish, and will also
                  carry out any additional construction work if outlined during
                  the planning stage.
                </p>
              </div>
              <div className="process-content-process-steps-step">
                <h3>
                  <span className="process-content-process-steps-step-number">
                    6
                  </span>
                  Follow-up
                </h3>
                <p>
                  We offer a 10-year guarantee on all of our kitchens, and our
                  service doesn't end after the installation. Our customer care
                  team will arrange a follow-up call with you after completion
                  to ensure that you are happy with the service and the quality
                  of your new kitchen.
                </p>
              </div>
            </div>
            <div className="process-content-cta">
              <div className="container">
                <p>Get in touch today to arrange a free consultation</p>
                <button className="button">
                  <Link to="/contact">Contact</Link>
                </button>
              </div>
            </div>
          </section>
          <section className="page-section process-content-usps">
            <div className="container">
              <div className="process-content-usps-usp">
                <FontAwesomeIcon
                  className="process-content-usps-usp-icon"
                  icon={faPencilRuler}
                />
                <p className="process-content-usps-usp-text">Bespoke design</p>
              </div>
              <div className="process-content-usps-usp">
                <FontAwesomeIcon
                  className="process-content-usps-usp-icon"
                  icon={faTape}
                />
                <p className="process-content-usps-usp-text">Home measuring</p>
              </div>
              <div className="process-content-usps-usp">
                <FontAwesomeIcon
                  className="process-content-usps-usp-icon"
                  icon={faTags}
                />
                <p className="process-content-usps-usp-text">Price matching</p>
              </div>
              <div className="process-content-usps-usp">
                <FontAwesomeIcon
                  className="process-content-usps-usp-icon"
                  icon={faTruck}
                />
                <p className="process-content-usps-usp-text">Home delivery</p>
              </div>
              <div className="process-content-usps-usp">
                <FontAwesomeIcon
                  className="process-content-usps-usp-icon"
                  icon={faTools}
                />
                <p className="process-content-usps-usp-text">Kitchen fitting</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  )
}

export default Process

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
