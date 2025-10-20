import React from 'react'
import Scroll from './Scroll'
import '../Styles/StyleScroll.css'
import Product from './Product'
import BodySection from './BodySection'
import Footer from '../Footer/Footer'
import Items from './Items'
import Header from '../Header/Header'
import NewScroll from './NewScroll'
import ScrollTwo from './ScrollTwo'

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
    <Items/>
    <Footer/>
    </>
  )
}
export default Body
