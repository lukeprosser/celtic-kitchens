import React from "react"
import { Link } from "gatsby"

import "./Header.scss"

const Header = ({ title }) => {
  return (
    <header className="header">
      <div className="header-mobile">
        <h1 className="header-brand">{title}</h1>
        <nav className="header-mobile-nav">
          <Link className="header-nav-link" to="/portfolio">
            Portfolio
          </Link>
          <Link className="header-nav-link" to="/process">
            Process
          </Link>
          <Link className="header-nav-link" to="/blog">
            Blog
          </Link>
          <Link className="header-nav-link" to="/contact">
            Contact
          </Link>
        </nav>
        <span className="header-mobile-menu"></span>
      </div>
      <div className="header-desktop">
        <Link className="header-nav-link" to="/portfolio">
          Portfolio
        </Link>
        <Link className="header-nav-link" to="/process">
          Process
        </Link>
        <h1 className="header-brand">{title}</h1>
        <Link className="header-nav-link" to="/blog">
          Blog
        </Link>
        <Link className="header-nav-link" to="/contact">
          Contact
        </Link>
      </div>
    </header>
  )
}

export default Header
