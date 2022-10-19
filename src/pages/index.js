import React, { useRef, useEffect } from "react"
import Banner from "../components/banner"
import Header from "../components/header"
import AboutBlurb from "../components/aboutBlurb"
import LocomotiveScroll from "locomotive-scroll"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const IndexPage = () => {
  const scrollRef = useRef()

  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      smartphone: {
        smooth: true,
      },
    })
    locomotiveScroll.on("scroll", ScrollTrigger.update)

    ScrollTrigger.scrollerProxy(scrollRef.current, {
      scrollTop(value) {
        return arguments.length
          ? locomotiveScroll.scrollTo(value, 0, 0)
          : locomotiveScroll.scroll.instance.scroll.y
      }, // we don't have to define a scrollLeft because we're only scrolling vertically.
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        }
      },
    })
    // locomotiveScroll.destroy()

    // setTimeout(function () {
    //   locomotiveScroll.init()
    // }, 100)
    // locomotiveScroll.update()
    // // Exposing to the global scope for ease of use.
    // window.scroll = locomotiveScroll

    // locomotiveScroll.on("scroll", func => {
    //   // Update `data-direction` with scroll direction.
    //   document.documentElement.setAttribute("data-direction", func.direction)
    // })
  }, [])

  return (
    <div ref={scrollRef}>
      <Header />
      <Banner />
      <AboutBlurb />
    </div>
  )
}

export default IndexPage
