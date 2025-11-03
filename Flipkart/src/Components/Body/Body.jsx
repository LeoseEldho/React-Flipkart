import React from 'react'
import ScrollTwo from './Slider/ScrollTwo'
import '../Styles/StyleScroll.css'
import Product from './Product'
import BodySection from './BodySection'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import NewScroll from './NewScroll'

import Scroll from './Slider/Scroll'

const Body = () => {
  return (
    <>
    <Header/>
    <NewScroll/>
    <div className="body-section-main">
    <div className='body-section'>
      <Scroll/>
      <ScrollTwo/>
      <Product/>
      <BodySection/>
    </div>
    </div>
    <Footer/>
    </>
  )
}
export default Body
