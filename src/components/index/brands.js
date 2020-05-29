import React from "react"
import PropTypes from "prop-types"
import Image from "gatsby-image"

import "./brands.scss"

const Brands = ({ brandLogos }) => {
  const images = brandLogos.edges

  return (
    <section className="page-section brands">
      <div className="container">
        <div className="brands-content">
          {images.map(image => (
            <Image
              className="brands-content-logo"
              key={image.node.id}
              fluid={image.node.childImageSharp.fluid}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

Brands.propTypes = {
  brandLogos: PropTypes.object.isRequired,
}

export default Brands
