import React, { useRef, useEffect } from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import { gsap, Sine } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)

const AboutBlurb = () => {
  const bannerImages = useRef()
  const innitialClipPath = "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)"
  const finalClipPath = "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)"
  useEffect(() => {
    gsap.fromTo(
      ".banner-image",
      {
        clipPath: innitialClipPath,
        stagger: 0.2,
        scroller: ".smooth-scroll",
        scrub: true,
        start: "top bottom",
        end: "top top",
      },
      { clipPath: finalClipPath, duration: 1, stagger: 0.2, ease: Sine.easeOut }
    )
  }, [])

  return (
    <div className="about-blurb">
      <div className="container">
        <div className="inner-blurb">
          <div className="content">
            <h3>Ability to create</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercit
            </p>
            <div className="btn-row">
              <Link to="work">View services</Link>
            </div>
          </div>
          <div
            className="images"
            ref={bannerImages}
            style={{ border: "1px solid black" }}
          >
            <div className="top-right banner-image">
              <StaticImage src="../images/fist.png" alt="finst" />
            </div>
            <div className="bottom-left banner-image">
              <StaticImage src="../images/flower-mouth.png" alt="finst" />
            </div>
          </div>
        </div>
      </div>
      <div className="black-box"></div>
      <div className="black-box overlay"></div>
    </div>
  )
}

export default AboutBlurb
