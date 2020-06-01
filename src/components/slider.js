import React from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons"

import "./slider.scss"

const Slider = () => {
  const auto = false // To do
  const intervalTime = 5000
  let slideInterval

  const prevSlide = () => {
    const slides = document.querySelectorAll(".slider-slides .slider-slide")
    // Get current class
    const current = document.querySelector(".slider-current")
    // Remove current class
    current.classList.remove("slider-current")

    // Check for previous slide
    if (current.previousElementSibling) {
      // Add current class to previous sibling
      current.previousElementSibling.classList.add("slider-current")
    } else {
      // Add current class to last
      slides[slides.length - 1].classList.add("slider-current")
    }

    if (auto) {
      clearInterval(slideInterval)
      slideInterval = setInterval(nextSlide, intervalTime)
    }
  }

  const nextSlide = () => {
    const slides = document.querySelectorAll(".slider-slides .slider-slide")
    // Get current class
    const current = document.querySelector(".slider-current")
    // Remove current class
    current.classList.remove("slider-current")

    // Check for next slide
    if (current.nextElementSibling) {
      // Add current class to next sibling
      current.nextElementSibling.classList.add("slider-current")
    } else {
      // Add current class to start
      slides[0].classList.add("slider-current")
    }

    if (auto) {
      clearInterval(slideInterval)
      slideInterval = setInterval(nextSlide, intervalTime)
    }
  }

  // Auto scroll
  if (auto) {
    // Run next slide at interval time
    slideInterval = setInterval(nextSlide, intervalTime)
  }

  return (
    <section className="hero">
      <div className="slider">
        <div className="slider-slides">
          <div className="slider-slide slider-current"></div>
          <div className="slider-slide"></div>
          <div className="slider-slide"></div>
          <div className="slider-slide"></div>
          <div className="slider-slide"></div>
        </div>
        <div className="slider-content">
          <h2>Your kitchen, your way</h2>
          <p>Give us a call or visit our showroom today</p>
          <button className="button">
            <Link to="/contact">Enquire</Link>
          </button>
        </div>
        <div className="slider-buttons">
          <button className="slider-buttons-prev" onClick={() => prevSlide()}>
            <FontAwesomeIcon icon={faArrowLeft} />
          </button>
          <button className="slider-buttons-next" onClick={() => nextSlide()}>
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>
      </div>
    </section>
  )
}

export default Slider
