import React from 'react'

const PhoneItems = ({phone}) => {
  return (
    <>
     <div className="phone">
        <div className="phone-main">
          <div className="phone-text">
            <div className="phone-texts">
              <div>Suggested For You</div>
            </div>
            <div className="phone-texts-tb">
              <div>Best deals on smartphones</div>
            </div>
            <div className="phone-icon">
              <div>
                <svg width="17" height="17" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M1 8H14"
                    stroke="#FFFFFF"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M10 3.5L14.5 8L10 12.5"
                    stroke="#FFFFFF"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
          <div className="phone-area">
            {phone.map((x,ind) => {
              return (
                <div className="phone-container" key={ind}>
                  <a >
                    <div className="phone-pic">
                      <div>
                        <div className="phone-pic-image">
                          <picture>
                            <img src={x.image} alt="" />
                          </picture>
                        </div>
                        <div className="phone-pic-setting">
                          <div></div>
                        </div>
                      </div>
                    </div>
                    <div className="phone-line">
                      <div>
                        <div className="phone-rating">{x.rating}</div>
                        <div className="phone-star">
                          <svg
                            width="12"
                            height="12"
                            viewBox="0 0 24 24"
                            fill="#0E772D"
                            // Style="flex-shrink: 0;"
                          >
                            <path
                              d="m12.002 2.588 2.222 6.838h7.19l-5.816 4.227 2.222 6.839-5.818-4.227-5.817 4.227 2.222-6.84L2.59 9.427h7.19z"
                              stroke="#0E772D"
                              strokeWidth="1.6"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="phone-details">
                      <div className="phone-name">{x.brand}</div>
                      <div className="phone-price">
                        <div className="phone-cost">₹{x.price}</div>
                        <div className="phone-total">{x.og}</div>
                      </div>
                    </div>
                  </a>
                </div>
              );
            })}
          </div>
            <div className="phone-tab">
            {
              phone.map((x,i)=>{
                return(
              <div className="phone-tab-main" key={i}>
                <div className="phone-tab-main-box">
                  <a href="">
                    <div className="phonetab-box">
                      <div className="phonetab-pic">
                        <img src={x.image} alt="" />
                      </div>

                      <div className="phonetab-details">
                        <div className="phonetab-name">{x.name}</div>
                        <div className="phonetab-price">From ₹{x.price}*</div>
                    </div>
                    </div>
                  </a>
                </div>
              </div>
                )
              })
            }
            </div>

        </div>
      </div>
      
    </>
  )
}

export default PhoneItems
