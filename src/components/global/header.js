import React from "react"
import NavMobile from "./nav-mobile"
import NavDesktop from "./nav-desktop"

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
