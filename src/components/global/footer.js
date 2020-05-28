import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faTwitterSquare,
  faFacebookSquare,
  faInstagramSquare,
} from "@fortawesome/free-brands-svg-icons"

import "./footer.scss"

const Footer = ({ title }) => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-content-item">
            © {title} {new Date().getFullYear()}
          </div>
          <div className="footer-content-item">
            Built by {` `}
            <a href="https://www.createdeluxe.com">CreateDeluxe</a>
          </div>
          <div className="footer-content-item">
            <div className="footer-content-item-social">
              <a
                className="footer-content-item-social-link"
                href="https://twitter.com/"
              >
                <FontAwesomeIcon icon={faTwitterSquare} />
              </a>
              <a
                className="footer-content-item-social-link"
                href="https://www.facebook.com/"
              >
                <FontAwesomeIcon icon={faFacebookSquare} />
              </a>
              <a
                className="footer-content-item-social-link"
                href="https://www.instagram.com/"
              >
                <FontAwesomeIcon icon={faInstagramSquare} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
