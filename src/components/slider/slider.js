import React from "react"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from "react-responsive-carousel"
import Image1 from "../slider/images/Image1"
import Image2 from "../slider/images/Image2"
import Image3 from "../slider/images/Image3"
import Image4 from "../slider/images/Image4"
import Image5 from "../slider/images/Image5"
import Image6 from "../slider/images/Image6"
import Image7 from "../slider/images/Image7"
import Image8 from "../slider/images/Image8"
// import Image9 from "../slider/images/Image9"

const Slider = () => {
  return (
    <div className="carousel-wrapper">
      <Carousel
        infiniteLoop
        autoPlay
        transitionTime={300}
        interval={4000}
        showArrows={true}
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
      >
        <Image1 />
        <Image2 />
        <Image3 />
        <Image4 />
        <Image5 />
        <Image6 />
        <Image7 />
        <Image8 />
        {/* <Image9 /> */}
      </Carousel>
    </div>
  )
}

export default Slider
