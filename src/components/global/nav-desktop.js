import React from "react"
import { Link } from "gatsby"

import "./nav-desktop.scss"

const NavDesktop = ({ title }) => {
  return (
    <nav className="nav-desktop">
      <Link
        className="nav-desktop-link"
        activeClassName="active"
        to="/portfolio"
      >
        Portfolio
      </Link>
      <Link className="nav-desktop-link" activeClassName="active" to="/process">
        Process
      </Link>
      <Link to="/">
        <h1 className="nav-desktop-brand">{title}</h1>
      </Link>
      <Link className="nav-desktop-link" activeClassName="active" to="/blog">
        Blog
      </Link>
      <Link className="nav-desktop-link" activeClassName="active" to="/contact">
        Contact
      </Link>
    </nav>
  )
}

export default NavDesktop
