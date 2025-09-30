import '../Styles/StyleScroll.css'
import React, { useEffect, useState } from 'react'

const Scroll = () => {
  const [Alldata, setAlldata] = useState([])
  const [activeIndex, setActiveIndex] = useState(0)

  async function scrollImage() {
    try {
      let response = await fetch('/ScrollData.json')
      let data = await response.json()
      setAlldata(data.slider || [])
    } catch (err) {
      console.error("Failed to load scroll data:", err)
    }
  }

  useEffect(() => {
    scrollImage()
  }, [])
//suijkjk
//ghyftufchgfytd
  useEffect(() => {
    if (Alldata.length > 0) {
      const interval = setInterval(() => {
        setActiveIndex(prev => (prev + 1) % Alldata.length)
      }, 3000)

      return () => clearInterval(interval)
    }
  }, [Alldata])
//fhgfhklckfyfhdrtld  tsdfhubcjs  ifyghpkf,l csdfjlkc
  return (
    <div className='scroll-section'>
      <div className='scroll-section-main'>
        <div className='scroll-section-sub'>
          {Alldata.map((x, index) => (
            <div
              className={`scroll-card ${index === activeIndex ? "active" : ""}`}
              key={index}
              onClick={() => setActiveIndex(index)}
            >
              <div className='scroll-card-main'>
                <a href="">
                  <div className='scroll-card-img'>
                    <picture>
                      <img src={x.image} alt={`slide-${index}`} />
                    </picture>
                  </div>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/*kv mvhjvbv jhv */}
        <div className='scroll-button'>
          {Alldata.map((_, index) => (
            <div
              key={index}
              className={`scroll-width ${index === activeIndex ? "active-bar" : ""}`}
              onClick={() => setActiveIndex(index)}
            ></div>
          ))}
        </div>
      </div>
    </div>
  )
}
//ssdnjcbjs
export default Scroll
