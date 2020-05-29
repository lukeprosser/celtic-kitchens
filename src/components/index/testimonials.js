import React from "react"

import "./testimonials.scss"

const Testimonials = () => {
  return (
    <section className="page-section testimonials">
      <div className="container">
        <h2 className="page-section-header">What our customers say</h2>
        <div className="testimonials-content">
          <div className="testimonials-content-item">
            <p className="testimonials-content-item-quote">
              "Outstanding quality, I couldn't believe the final result. Thank
              you so much to David and the team!""
            </p>
            <p className="testimonials-content-item-customer">
              - Barbara Smith
            </p>
          </div>
          <div className="testimonials-content-item">
            <p className="testimonials-content-item-quote">
              "Who knew a kitchen would completely transform our home? Really
              inspiring design and top quality!"
            </p>
            <p className="testimonials-content-item-customer">- Kevin James</p>
          </div>
          <div className="testimonials-content-item">
            <p className="testimonials-content-item-quote">
              "Great communication throughout the process, highly recommended."
            </p>
            <p className="testimonials-content-item-customer">- Steve Owen</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
