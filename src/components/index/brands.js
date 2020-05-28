import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

import "./brands.scss"

const Brands = ({ brandLogos }) => {
  console.log("brandLogos", brandLogos)
  return (
    <section className="page-section brands">
      <div className="container">
        <div className="brands-content">
          <Image fluid={brandLogos.childImageSharp.fluid} alt="Siemens" />
        </div>
      </div>
    </section>
  )
}

// Brands.propTypes = {
//   data: PropTypes.object.isRequired,
// }

export default Brands
