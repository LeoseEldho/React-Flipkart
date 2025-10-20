import React, { useEffect, useState } from 'react'
import '../Styles/StyleBodySection.css'
const ProductpageTab = () => {
    const [item,setItem]=useState([])

    async function fetchCategorie() {
        let res= await fetch("./ScrollData.json")
        let data=await res.json()
        setItem(data.categories)
    }
    console.log(item)
    useEffect(()=>{
        fetchCategorie()
    },[])
  return (
    <div className='tab'>
        <div className="tab-header">
        <div className="tab-header-items">
        <div className="tab-gap"></div>
        <div className="tab-header-item">
            <div className="tab-logo">
                <div className="tab-logo-box">
                    <a href="">
                        <img width="75" src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png" alt="Flipkart" title="Flipkart" ></img>
                    </a>
                    <a href="" className='tab-logo-box-text'>
                        Explore
                        <span className='tab-logo-box-text-span'>Plus</span>
                        <img width="10" src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/plus_aef861.png"></img>
                    </a>
                </div>
            </div>
            <div className="tab-button">
                <form className='header-tab-button'>
                    <div className="header-tab-button-box">
                        <div className="tab-button-box">
                            <input type="text" placeholder='wrist watch for men' />
                        </div>
                        <div className="tab-button-box-icon">
                            <svg width="20" height="20" viewBox="0 0 17 18" xmlns="http://www.w3.org/2000/svg"><g fill="#2874F1" ><path d="m11.618 9.897l4.225 4.212c.092.092.101.232.02.313l-1.465 1.46c-.081.081-.221.072-.314-.02l-4.216-4.203"></path><path d="m6.486 10.901c-2.42 0-4.381-1.956-4.381-4.368 0-2.413 1.961-4.369 4.381-4.369 2.42 0 4.381 1.956 4.381 4.369 0 2.413-1.961 4.368-4.381 4.368m0-10.835c-3.582 0-6.486 2.895-6.486 6.467 0 3.572 2.904 6.467 6.486 6.467 3.582 0 6.486-2.895 6.486-6.467 0-3.572-2.904-6.467-6.486-6.467"></path></g></svg>
                        </div>
                    </div>
                    <div></div>
                </form>
            </div>
            <div className="tab-login">
                <div className="tab-login-box">
                    <a href="">Login</a>
                </div>
            </div>
            <div className="tab-header-box">
                <a href="" className='tab-header-box-text'><span>Become a Seller</span></a>
            </div>
            <div className="tab-header-box">
                <div className="tab-header-box-container">
                    <div className="tab-header-box-container-text">More</div>
                </div>
                <svg width="4.7" height="8" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#fff"></path></svg>
            </div>
            <div className="tab-header-box">
                <div className="tab-header-cart">
                    <a href="">
                        <svg  width="14" height="14" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path  d="M15.32 2.405H4.887C3 2.405 2.46.805 2.46.805L2.257.21C2.208.085 2.083 0 1.946 0H.336C.1 0-.064.24.024.46l.644 1.945L3.11 9.767c.047.137.175.23.32.23h8.418l-.493 1.958H3.768l.002.003c-.017 0-.033-.003-.05-.003-1.06 0-1.92.86-1.92 1.92s.86 1.92 1.92 1.92c.99 0 1.805-.75 1.91-1.712l5.55.076c.12.922.91 1.636 1.867 1.636 1.04 0 1.885-.844 1.885-1.885 0-.866-.584-1.593-1.38-1.814l2.423-8.832c.12-.433-.206-.86-.655-.86" fill="#fff"></path></svg>
                        <span>Cart</span>
                    </a>
                </div>
            </div>
        </div>
        <div className="tab-gap"></div>
        </div>
        <div className="tab-header-position"></div>
        </div>
      <div className="tab-categories">
        <div className="tab-categories-item">
         {/* map */}
        {
            item.map((x)=>{
                return(
            
            <span className="tab-categories-box">
            {x.name}
            <svg width="4.7" height="8" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" ><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#fff" ></path></svg>
            </span>
                )
            })
        }
        <a className="tab-categories-box">Flights</a> 
         <div className="tab-categories-box">Offer Zone</div>
         </div>
      </div>
      <div className="tab-main">
        <div className="tab-main-shape">
            <div className="tab-filter">
                <div className="tab-filter-main">
                    <div className="tab-filter-sections">
                        <section className='tab-filter-section-title'>
                            <span>Filters</span>
                        </section>
                        <div className="tab-categories">
                            <div className="tab-filter-box">
                                <div className="tab-categories-title">CATEGORIES</div>
                                <div className='tab-categories-text'>
                                    <svg width="10" height="10" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" ><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#fff" ></path></svg>
                                    <a href="" className='tab-categories-text-text'>Watches</a>
                                </div>
                                <div className='tab-categories-text'>
                                    <a href="" className='tab-categories-text-a'>Wrist Watches</a>
                                </div>
                            </div>
                        </div>
                        <section className='tab-price'>
                        <div className=".tab-price-text">PRICE</div>    
                        <div className="tab-price-graph">
                            <div className="tab-price-graph-main">
                                <div className="graph-h"></div>
                                <div className="graph-h"></div>
                                <div className="graph-h"></div>
                                <div className="graph-m"></div>
                                <div className="graph-l"></div>
                                <div className="graph-l"></div>
                            </div>
                        </div>
                        <div>
                            <div className="tab-price-range">
                                <div className="tab-price-left"></div>
                                <div className="tab-price-right"></div>
                                <div className="tab-price-line"></div>
                                <div className="tab-price-strick"></div>
                            </div>
                            <div className="tab-price-ranges"></div>    
                        </div>
                        <div className="tab-price-price"></div>
                        </section>  
                        <section className="tab-assured"></section>
                        <div className="tab-filter-box"></div>
                    </div>
                    <div className="tab-filter-section">
                        <a className="tab-filter-pic">
                            <span className="tab-filter-pic-text">Need help?</span>
                            <div className="tab-filter-pic-heading"><span>Help me decide</span>
                            <svg width="16" height="27" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#fff" ></path></svg>
                            </div>
                            <img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/buying-guide-illustration_4dd325.png" alt="" />
                        </a>
                    </div>
                </div>

            </div>

            <div className="tab-product"></div>
        </div>
        <div></div>
        <div></div>
      </div>
    </div>
  )
}
//asdhukjb  sdfhukjb
export default ProductpageTab
