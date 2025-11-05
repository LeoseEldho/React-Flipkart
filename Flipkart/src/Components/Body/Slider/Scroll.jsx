import React, { useEffect, useState } from 'react'
import "../../Styles/StyleScroll.css"


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
  
  useEffect(()=>{
    if(Alldata.length>0){
      const intervel=setInterval(()=>{
        setActiveIndex(prev=>(prev+1)% Alldata.length)
      },3000)
      return ()=> clearInterval(intervel)
    }
  },[Alldata.length])
  return (
    <div className='scroll-section'>
      <div className='scroll-section-main'>
        <div className='scroll-section-sub'>

          {Alldata.map((x, index) => (
            <div key={index}
              className={`scroll-card ${index===activeIndex?'active':''}` }>

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

        {/* To Be Map */}
        <div className='scroll-button'>
          {Alldata.map((_, index) => (
            <div
              key={index}
              className={`scroll-width ${index === activeIndex ? "active-bar" : "bar"}`}
              onClick={() => setActiveIndex(index)}
            ></div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Scroll
