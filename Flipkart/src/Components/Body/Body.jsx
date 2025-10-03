import React from 'react'
import Scroll from './Scroll'
import '../Styles/StyleScroll.css'
import Product from './Product'
import BodySection from './BodySection'
import Footer from '../Footer/Footer'
import Items from './Items'

const Body = () => {
  return (
    <>
    <div className='body-section'>
      <Scroll/>
      <Product/>
      <BodySection/>
    </div>
    <Items/>
    <Footer/>
    </>
  )
}

export default Body
