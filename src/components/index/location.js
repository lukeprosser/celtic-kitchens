import React from "react"
import Image from "gatsby-image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPhone } from "@fortawesome/free-solid-svg-icons"

import "./location.scss"

const Location = ({ googleMap }) => {
  return (
    <section className="page-section location">
      <div className="container">
        <div className="location-content">
          <div className="location-content-address">
            <h2 className="page-section-header">Where to find us</h2>
            <p className="location-content-address-detail">Celtic Kitchens</p>
            <p className="location-content-address-detail">
              Unit 10A Springvale Industrial Park
            </p>
            <p className="location-content-address-detail">Cardiff</p>
            <p className="location-content-address-detail">CF10 4CP</p>
            <p className="location-content-address-detail">
              <FontAwesomeIcon icon={faPhone} /> 02920 431236
            </p>
          </div>
          <div className="location-content-map">
            <Image
              className="location-content-map-image"
              fluid={googleMap.childImageSharp.fluid}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Location
