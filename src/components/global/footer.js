import React from "react"

const Footer = ({ title }) => {
  return (
    <footer className="footer">
      <div className="container">
        © {title} {new Date().getFullYear()}
        {` `} | Built by {` `}
        <a href="https://www.createdeluxe.com">CreateDeluxe</a>
      </div>
    </footer>
  )
}

export default Footer
