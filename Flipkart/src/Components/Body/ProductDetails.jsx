import React from 'react'
import "../Styles/StyleProductDetails.css"
const ProductDetails = () => {
   
  return (
    <div className='details'>
    <div className="details-header">
    <a href="" className='detail-header-arrow'>
        <svg width="24" height="24" fill="none" viewBox="0 0 32 32"><path d="M27 16H5M14 7l-9 9 9 9" stroke="#333333ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
    </a>
    <a href="" className='detail-header-button'>
        <div className="detail-header-arrow">
            <svg width="24" height="24" viewBox="0 0 256 256"><path fill="none" d="M0 0h256v256H0z"></path><circle cx="116" cy="116" r="84" fill="none" stroke="#333333ff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></circle><path fill="none" stroke="#333333ff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" d="M175.4 175.4 224 224"></path></svg>
        </div>
        <div className="detail-header-button-text">Search for products</div>
    </a>
    <div className="detail-header-cart" ><svg width="24" height="24" viewBox="0 0 256 256"><path fill="none" d="M0 0h256v256H0z"></path><path d="M184 184H69.8L41.9 30.6a8 8 0 0 0-7.8-6.6H16" fill="none" stroke="#333333ff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"></path><circle cx="80" cy="204" r="20" fill="none" stroke="#333333ff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"></circle><circle cx="184" cy="204" r="20" fill="none" stroke="#333333ff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"></circle><path d="M62.5 144h125.6a15.9 15.9 0 0 0 15.7-13.1L216 64H48" fill="none" stroke="#333333ff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"></path></svg></div>
    </div>
    <div className="detail-add">
        <div className="detail-add-box">
            <div className="detail-add-box-pic">
                <img src="https://rukminim1.flixcart.com/image/80/80/xif0q/watch/o/4/r/-original-imahfwzftt8cx7a4.jpeg?q=60" alt="" />
            </div>
            <div className="detail-add-box-text">
                <div className="detail-add-box-text-title">TIMEX Silver Dial Stainless Steel Analog Watch  - For Men TW000G916</div>
                <div className="detail-add-box-text-details">
                    <svg width="12" height="12" fill="none" viewBox="0 0 12 12"><path d="M6 1.875v8.25M2.625 6.75 6 10.125 9.375 6.75" stroke="#008b37ff" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                    <div className="detail-add-text">51%</div>
                    <div className="detail-add-discount">1,995</div>
                    <div className="detail-add-price">₹979</div>
                </div>
            </div>
        </div>
        <div className="detail-add-add">
            <div className="detail-add-add-box">AD</div>
        </div>
    </div>
    <div className="detail-product">
        <div className="detail-product-pic">
            <div className="detail-product-pic-box">
                <div className="detail-product-main">
                    <img src="https://rukminim1.flixcart.com/image/960/1280/xif0q/watch/t/w/i/-original-imahfsz9bqgqdxzd.jpeg?q=60" alt="" />
                </div>
            </div>
            <div className="detail-product-box"></div>
            <div className="detail-product-rating"></div>
        </div>
        <div className="detail-product-scroll"></div>
    </div>
    </div>
  )
}

export default ProductDetails