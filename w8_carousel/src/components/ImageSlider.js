import { useState } from "react";
import ImageData from "./ImageData"
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const ImageSlider = () => {
  const [current, setCurrent] = useState(0)
  const length = ImageData.length

  const prevSlide = () => {
    current === 0 ? setCurrent(length - 1) : setCurrent(current - 1)
    // if (current === 0) {
    //   setCurrent(length - 1)
    // } else {
    //   setCurrent(current - 1)
    // }
  }
  const nextSlide = () => {
    current === length - 1 ? setCurrent(0) : setCurrent(current + 1)
    // if (current === length - 1) {
    //   setCurrent(0)
    // } else {
    //   setCurrent(current + 1)
    // }
  }

  return (
    <section className="slider">
      <IoIosArrowBack className="leftArrow" onClick={prevSlide} />
      <IoIosArrowForward className="rightArrow" onClick={nextSlide} />
      {ImageData.map((data, index) => {
        return (
          <div
            className={index === current ? "slide active" : "slide"}
            key={index}
          >
            {index === current &&
              (
                <div>
                  <img src={data.image} alt={data.title} className="image" />
                  <p>{data.title}</p>
                </div>
              )}
          </div>
        )
      })}
    </section>
  )
}

export default ImageSlider