import React from "react"
import { Link } from "gatsby"
import NavMobile from "./nav-mobile"
import NavDesktop from "./nav-desktop"

import "./header.scss"

const Header = ({ title }) => {
  return (
    <header className="header">
      <div className="container">
        <NavMobile title={title} />
        <NavDesktop title={title} />
      </div>
    </header>
  )
}

export default Header
