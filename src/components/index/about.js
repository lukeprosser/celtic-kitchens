import React from "react"

import "./about.scss"

const About = () => {
  return (
    <section className="page-section about">
      <div className="container">
        <h2 className="page-section-header">Welcome to Celtic Kitchens</h2>
        <div className="about-content">
          <p className="about-content-item">
            Established in South Wales, UK, Celtic Kitchens have been providing
            luxury designer kitchens for almost 20 years. Since our beginnings
            we have supported eco-friendly manufacturing and sustainability is
            at the heart of everything that we do.
          </p>
          <p className="about-content-item">
            We create bespoke designs tailored to your needs, and source our
            high quality rigid kitchens from Germany. With over 1,000 colours
            available at our local factory, products can be customised to
            enhance any property and suit a range of budgets.
          </p>
          <p className="about-content-item">
            We are proud to have served thousands of satisfied customers over
            the years, and the majority of our new business is generated through
            personal recommendation and word-of-mouth. So why not book an
            appointment at our friendly showroom today?
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
