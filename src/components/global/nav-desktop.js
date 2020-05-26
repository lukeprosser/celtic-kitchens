import React from "react"
import { Link } from "gatsby"

import "./nav-desktop.scss"

const NavDesktop = ({ title }) => {
  return (
    <nav className="nav-desktop">
      <Link className="nav-desktop-link" to="/portfolio">
        Portfolio
      </Link>
      <Link className="nav-desktop-link" to="/process">
        Process
      </Link>
      <h1 className="nav-desktop-brand">{title}</h1>
      <Link className="nav-desktop-link" to="/blog">
        Blog
      </Link>
      <Link className="nav-desktop-link" to="/contact">
        Contact
      </Link>
    </nav>
  )
}

export default NavDesktop
