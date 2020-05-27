import React from "react"

// import "./hero.scss"
import "./slider.scss"

const auto = true
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

const Hero = () => {
  return (
    <div className="hero">
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
          <button className="button">Enquire</button>
        </div>
        <div className="slider-buttons">
          <button className="slider-buttons-prev" onClick={() => prevSlide()}>
            {"<"}
          </button>
          <button className="slider-buttons-next" onClick={() => nextSlide()}>
            {">"}
          </button>
        </div>
      </div>
    </div>
  )
}

export default Hero
