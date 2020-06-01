import React, { Component } from "react"
import { graphql } from "gatsby"
import Image from "gatsby-image"
import Carousel, { Modal, ModalGateway } from "react-images"

import Layout from "../components/global/layout"
import SEO from "../components/global/seo"

import "./portfolio.scss"

/*
  react-images Carousel reads images in the following format:
  const images = [{ source: 'path/to/image-1.jpg' }, { source: 'path/to/image-2.jpg' }];
*/

class Portfolio extends Component {
  state = { selectedIndex: 0, modalIsOpen: false }
  toggleModal = selectedIndex => {
    this.setState(state => ({ modalIsOpen: !state.modalIsOpen, selectedIndex }))
  }

  render() {
    const siteTitle = this.props.data.site.siteMetadata.title
    const location = this.props.location

    const galleryImages = this.props.data.kitchens.edges
    const carouselImages = galleryImages.map(image => ({
      source: image.node.childImageSharp.fluid.src,
    }))

    const { selectedIndex, modalIsOpen } = this.state

    return (
      <Layout location={location} title={siteTitle}>
        <SEO title="Portfolio" />
        <div className="portfolio">
          <div className="portfolio-content">
            <div className="page-intro">
              <div className="container">
                <h1 className="page-intro-header">Portfolio</h1>
                <p className="page-intro-blurb">
                  We take pride in tailoring our kitchen designs to the needs of
                  our customers. Please feel free to browse a selection of
                  recent work below - we hope it inspires you to create your
                  very own dream design!
                </p>
              </div>
            </div>
            <section className="page-section portfolio-content-gallery">
              <div className="container">
                <div className="portfolio-content-gallery-images">
                  {galleryImages.map((image, i) => (
                    <div
                      className="portfolio-content-gallery-images-image-wrapper"
                      key={image.node.id}
                      onClick={() => this.toggleModal(i)}
                    >
                      <Image
                        fluid={image.node.childImageSharp.fluid}
                        className="portfolio-content-gallery-images-image"
                        imgStyle={{
                          transition: `all 500ms ease`,
                        }}
                      />
                    </div>
                  ))}
                </div>
                <div className="portfolio-content-gallery-modal">
                  <ModalGateway>
                    {modalIsOpen ? (
                      <Modal onClose={this.toggleModal}>
                        <Carousel
                          currentIndex={selectedIndex}
                          views={carouselImages}
                        />
                      </Modal>
                    ) : null}
                  </ModalGateway>
                </div>
              </div>
            </section>
          </div>
        </div>
      </Layout>
    )
  }
}

export default Portfolio

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    kitchens: allFile(filter: { relativeDirectory: { eq: "kitchens" } }) {
      edges {
        node {
          id
          childImageSharp {
            fluid(maxWidth: 1280) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
