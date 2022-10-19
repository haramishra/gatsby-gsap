import React, { useEffect, useRef } from "react"
import { StaticImage } from "gatsby-plugin-image"
import { useStaticQuery, graphql } from "gatsby"
import {gsap, Sine} from "gsap"



const Banner = () => {
  const innitialClipPath = "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)"
  const finalClipPath = "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)"
  useEffect(() => {
    gsap
    .fromTo(
      ".hero-image",
      { clipPath: innitialClipPath, stagger: 0.2 },
      { clipPath: finalClipPath, duration: 1, stagger: 0.2, ease: Sine.easeOut }
    )
    gsap.to(".scroll", {rotationX: 360, duration: 2})
    
  }, [])

  return (
    <div className="banner">
      <div className="container">
        <div className="row">
          <div className="side-image left hero-image">
            <StaticImage src="../images/diamonds.png" alt="image" />
          </div>
          <div className="main-text">I am Hara Prasad</div>
          <div className="main-image hero-image">
            <StaticImage src="../images/poppin-shades.png" alt="image" />
          </div>
          <div className="side-image right hero-image">
            <StaticImage src="../images/sexy-orange.png" alt="image" />
          </div>
        </div>
        <div className="scroll" style={{transform: "rotateX(180deg)"}}>
          <span>scroll down</span>
        </div>
      </div>
      <div className="fixed-misc" data-scroll-sticky>visual artist and photographer</div>
    </div>
  )
}

export default Banner
