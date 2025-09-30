import React from 'react'
import Scroll from './Scroll'
import '../Styles/StyleScroll.css'
import Product from './Product'
import BodySection from './BodySection'

const Body = () => {
  return (
    <div className='body-section'>
      <Scroll/>
      <Product/>
      <BodySection/>
    </div>
  )
}

export default Body
