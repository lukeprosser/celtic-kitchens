import React from "react"
import { Link } from "gatsby"

import "./nav-mobile.scss"

const NavMobile = ({ title }) => {
  return (
    <nav className="nav-mobile">
      <h1 className="nav-mobile-brand">{title}</h1>
      <div className="nav-mobile-links">
        <Link className="nav-mobile-link" to="/portfolio">
          Portfolio
        </Link>
        <Link className="nav-mobile-link" to="/process">
          Process
        </Link>
        <Link className="nav-mobile-link" to="/blog">
          Blog
        </Link>
        <Link className="nav-mobile-link" to="/contact">
          Contact
        </Link>
      </div>
      <span className="nav-mobile-menu"></span>
    </nav>
  )
}

export default NavMobile
