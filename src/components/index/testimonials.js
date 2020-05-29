import React from "react"

import "./testimonials.scss"

const Testimonials = () => {
  return (
    <section className="page-section testimonials">
      <div className="container">
        <h2 className="page-section-header">What our customers say</h2>
        <div className="testimonials-content">
          <div className="testimonials-content-item">
            <p>
              "Outstanding quality, I couldn't believe the final result. Thank
              you so much to David and the team!""
            </p>
            <p>- Barbara Smith</p>
          </div>
          <div className="testimonials-content-item">
            <p>
              "Who knew a kitchen would completely transform our home? Really
              inspiring design and top quality!"
            </p>
            <p>- Kevin James</p>
          </div>
          <div className="testimonials-content-item">
            <p>
              "Great communication throughout the process, highly recommended."
            </p>
            <p>- Steve Owen</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
