import React from "react"
import { Link } from "gatsby"

import "./nav-mobile.scss"

const toggleMenu = () => {
  const navMobLinks = document.querySelector(".nav-mobile-links")
  navMobLinks.classList.toggle("active")
}

const NavMobile = ({ title }) => {
  return (
    <nav className="nav-mobile">
      <Link to="/">
        <h1 className="nav-mobile-brand">{title}</h1>
      </Link>
      <div
        className="nav-mobile-menu"
        onClick={() => toggleMenu()}
        onKeyDown={() => toggleMenu()}
        role="button"
        tabIndex="0"
      >
        <span className="nav-mobile-menu-bar1"></span>
        <span className="nav-mobile-menu-bar2"></span>
        <span className="nav-mobile-menu-bar3"></span>
      </div>
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
    </nav>
  )
}

export default NavMobile
