import React from 'react'
import Scroll from './Scroll'
import '../Styles/StyleScroll.css'
import Product from './Product'
import BodySection from './BodySection'
import Footer from '../Footer/Footer'
import Items from './Items'
import Header from '../Header/Header'

const Body = () => {
  return (
    <>
      <Header/>
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
