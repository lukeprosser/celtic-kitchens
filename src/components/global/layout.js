import React from "react"
import Header from "./header"
import Footer from "./footer"

// import { rhythm, scale } from "../../utils/typography"
import "./layout.scss"

const Layout = ({ location, title, children }) => {
  return (
    <div
      style={{
        minHeight: `100vh`,
        display: `flex`,
        flexDirection: `column`,
        // marginLeft: `auto`,
        // marginRight: `auto`,
        // maxWidth: rhythm(24),
        // padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
      }}
    >
      <Header title={title} />
      <main>{children}</main>
      <Footer title={title} />
    </div>
  )
}

export default Layout
