import { useState, useEffect } from 'react'

const images = ["/slide1.jpg", "/slide2.jpg", "/slide3.jpg"]

function Slideshow() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(prev => (prev + 1) % images.length)
    }, 3000)

    return () => clearInterval(timer)
  }, [])

  const changeSlide = (delta) => {
    setCurrent(prev => {
      let next = prev + delta
      if (next >= images.length) next = 0
      if (next < 0) next = images.length - 1
      return next
    })
  }

  return (
    <section className="slideshow-section">
      <div className="slideshow-wrapper">
        <img id="img-slide" src={images[current]} alt="Event slide" />
        <button className="slide-btn slide-btn-left" onClick={() => changeSlide(-1)}>&#10094;</button>
        <button className="slide-btn slide-btn-right" onClick={() => changeSlide(1)}>&#10095;</button>
      </div>
    </section>
  )
}

export default Slideshow
