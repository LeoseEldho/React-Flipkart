import React from "react";

const DetailText = ({product}) => {
  return (
    <>
      <div className="screen-text-body">
        <div className="screen-body-text">
          <div className="screen-body-navigation">
            <div className="screen-body-navigation-text">
              <a href="">Home</a>
              <svg
                width="16"
                height="27"
                viewBox="0 0 16 27"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z"
                  fill="#a5a0a0ff"
                ></path>
              </svg>
            </div>
            <div className="screen-body-navigation-text">
              <a href="">Watch</a>
              <svg
                width="16"
                height="27"
                viewBox="0 0 16 27"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z"
                  fill="#a5a0a0ff"
                ></path>
              </svg>
            </div>
            <div className="screen-body-navigation-text">
              <a href="">Wrist Watch</a>
              <svg
                width="16"
                height="27"
                viewBox="0 0 16 27"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z"
                  fill="#a5a0a0ff"
                ></path>
              </svg>
            </div>
          </div>
          <div className="screen-body-share">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18">
              <path
                d="M14.78 5.883L9.032 0v3.362C3.284 4.202.822 8.404 0 12.606 2.053 9.666 4.927 8.32 9.032 8.32v3.446l5.748-5.883z"
                fill="#c2c2c2"
                fillRule="evenodd"
              ></path>
            </svg>
            <div className="screen-body-share-text">Share</div>
          </div>
        </div>
        <div className="screen-body-content">
          <div className="screen-body-content-name">
            <h1 className="screen-body-content-name-text">
              <div>{product.name}</div>{" "}
              <span>
               {product.details}
              </span>
            </h1>
            <div className="screen-body-content-name-price">
              <div>
                <div className="screen-body-price">₹{product.Price}</div>
                <div className="screen-body-dicount">₹ {product.discount}</div>
                <div className="screen-body-off">{product.off}% off</div>
              </div>
              <div className="screen-body-icon">
                <svg
                  width="20"
                  height="20"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <defs>
                    <circle id="b" cx="8" cy="8" r="8"></circle>
                    <filter
                      id="a"
                      width="130%"
                      height="130%"
                      x="-15%"
                      y="-8.8%"
                      filterUnits="objectBoundingBox"
                    >
                      <feMorphology
                        in="SourceAlpha"
                        operator="dilate"
                        radius=".4"
                        result="shadowSpreadOuter1"
                      ></feMorphology>
                      <feOffset
                        dy="1"
                        in="shadowSpreadOuter1"
                        result="shadowOffsetOuter1"
                      ></feOffset>
                      <feGaussianBlur
                        in="shadowOffsetOuter1"
                        result="shadowBlurOuter1"
                        stdDeviation=".5"
                      ></feGaussianBlur>
                      <feComposite
                        in="shadowBlurOuter1"
                        in2="SourceAlpha"
                        operator="out"
                        result="shadowBlurOuter1"
                      ></feComposite>
                      <feColorMatrix
                        in="shadowBlurOuter1"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"
                      ></feColorMatrix>
                    </filter>
                  </defs>
                  <g fill="none" fillRule="evenodd">
                    <g transform="translate(2 1)">
                      <use fill="#000" filter="url(#a)" ></use>
                      <use
                        fill="#0f0c0cff"
                        stroke="#000"
                        strokeOpacity=".3"
                        strokeWidth=".8"
                        xlinkHref="#b"
                      ></use>
                    </g>
                    <text
                      fill="#1D1D1D"
                      fontFamily="Roboto-Medium, Roboto"
                      fontSize="11"
                      fontWeight="400"
                      opacity=".59"
                      transform="translate(2 1)"
                    >
                      <tspan x="6.6" y="12.2">
                        i
                      </tspan>
                    </text>
                  </g>
                </svg>
              </div>
            </div>
            <div className="screen-body-content-name-review">
              Be the first to Review this product
            </div>
          </div>
        </div>
        <div className="screen-body-content">
          <div className="screen-body-content-offer">
            <span>Available offers</span>
          </div>
          <div className="screen-body-content-offers">
            <div>
              <span className="body-content-offer">
                <img
                  src="https://rukminim2.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90"
                  alt=""
                />
                <li>
                  <span className="body-content-offer-text">Bank Offer</span>
                  <span>
                    5% cashback on Axis Bank Flipkart Debit Card up to ₹750
                  </span>
                  <div className="body-content-offer-tc">T&C</div>
                </li>
              </span>
              <span className="body-content-offer">
                <img
                  src="https://rukminim2.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90"
                  alt=""
                />
                <li>
                  <span className="body-content-offer-text">Bank Offer</span>
                  <span>
                    5% cashback on Flipkart SBI Credit Card upto ₹4,000 per calendar quarter
                  </span>
                  <div className="body-content-offer-tc">T&C</div>
                </li>
              </span>
              <span className="body-content-offer">
                <img
                  src="https://rukminim2.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90"
                  alt=""
                />
                <li>
                  <span className="body-content-offer-text">Bank Offer</span>
                  <span>
                    Flat ₹50 off on Flipkart Bajaj Finserv Insta EMI Card. Min Booking Amount: ₹2,500
                  </span>
                  <div className="body-content-offer-tc">T&C</div>
                </li>
              </span>
              <span className="body-content-offer">
                <img
                  src="https://rukminim2.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90"
                  alt=""
                />
                <li>
                  <span className="body-content-offer-text">Bank Offer</span>
                  <span>
                    5% cashback on Flipkart Axis Bank Credit Card upto ₹4,000 per statement quarter
                  </span>
                  <div className="body-content-offer-tc">T&C</div>
                </li>
              </span>
            </div>
            <button className="body-offers-button">
              <span>+3 more offers</span>
            </button>
          </div>
        </div>
        <div className="screen-body-content">
            <div className="screen-body-warrenty">
                <div>Warrenty</div>
                <span>NA</span>
            </div>
        </div>
        <div className="screen-body-text">
            <div className="screen-body-text-box">
                <div className="screen-body-textbox">
                    <div className="screen-body-textbox-container">
                        <div className="screen-body-delivary-box">
                            <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48ZWxsaXBzZSBjeD0iOSIgY3k9IjE0LjQ3OCIgZmlsbD0iI0ZGRTExQiIgcng9IjkiIHJ5PSIzLjUyMiIvPjxwYXRoIGZpbGw9IiMyODc0RjAiIGQ9Ik04LjYwOSA3LjAxYy0xLjA4IDAtMS45NTctLjgyNi0xLjk1Ny0xLjg0NSAwLS40ODkuMjA2LS45NTguNTczLTEuMzA0YTIuMDIgMi4wMiAwIDAgMSAxLjM4NC0uNTRjMS4wOCAwIDEuOTU2LjgyNSAxLjk1NiAxLjg0NCAwIC40OS0uMjA2Ljk1OS0uNTczIDEuMzA1cy0uODY0LjU0LTEuMzgzLjU0ek0zLjEzIDUuMTY1YzAgMy44NzQgNS40NzkgOC45MjIgNS40NzkgOC45MjJzNS40NzgtNS4wNDggNS40NzgtOC45MjJDMTQuMDg3IDIuMzEzIDExLjYzNCAwIDguNjA5IDAgNS41ODMgMCAzLjEzIDIuMzEzIDMuMTMgNS4xNjV6Ii8+PC9nPjwvc3ZnPg=="></img>
                        <span>Deliver to</span>
                        </div>
                        <div className="screen-body-pincode">
                            <input placeholder="Enter delivery pincode" type="text"></input>
                            <span>Check</span>
                        </div>
                    </div>
                </div>
                <div className="screen-body-textDelivary">
                    <div className="screen-textdelivary-delivary">Delivery by <span>4 Nov, Tuesday</span></div>
                    <div className="screen-textdelivary-view">View Details</div>
                </div>
            </div>
            <div className="screen-body-text-container">
                <div className="screen-body-text-container-data">
                    <div className="screen-body-text-container-data-text">Services</div>
                    <ul>
                        <li className="screen-data-text">
                            <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTcgLjc1bC02Ljc1IDN2NC41YzAgNC4xNjIgMi44OCA4LjA1NSA2Ljc1IDkgMy44Ny0uOTQ1IDYuNzUtNC44MzggNi43NS05di00LjVMNyAuNzV6bS0xLjUgMTJsLTMtMyAxLjA1OC0xLjA1N0w1LjUgMTAuNjI3bDQuOTQzLTQuOTQyTDExLjUgNi43NWwtNiA2eiIgZmlsbD0iIzIxNzVGRiIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+" alt="" />
                            <div>NA</div>
                        </li>
                        <li className="screen-data-text">
                            <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTcgLjc1bC02Ljc1IDN2NC41YzAgNC4xNjIgMi44OCA4LjA1NSA2Ljc1IDkgMy44Ny0uOTQ1IDYuNzUtNC44MzggNi43NS05di00LjVMNyAuNzV6bS0xLjUgMTJsLTMtMyAxLjA1OC0xLjA1N0w1LjUgMTAuNjI3bDQuOTQzLTQuOTQyTDExLjUgNi43NWwtNiA2eiIgZmlsbD0iIzIxNzVGRiIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+" alt="" />
                            <div>Cash on Delivery available ?</div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="screen-body-delivary">
            <div className="body-delivary-box-pa">
                <div className="padd-body">
                    <div className="body-seller">Seller</div>
                    <div>
                        <div className="body-seller-name">{product.name} <span>{product.rating} <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMyIgaGVpZ2h0PSIxMiI+PHBhdGggZmlsbD0iI0ZGRiIgZD0iTTYuNSA5LjQzOWwtMy42NzQgMi4yMy45NC00LjI2LTMuMjEtMi44ODMgNC4yNTQtLjQwNEw2LjUuMTEybDEuNjkgNC4wMSA0LjI1NC40MDQtMy4yMSAyLjg4Mi45NCA0LjI2eiIvPjwvc3ZnPg=="></img></span></div>
                        <div className="body-date"><div>10 days return policy</div></div>
                        <div className="body-other">See other sellers</div>
                    </div>
                </div>
            </div>
            <div className="body-delivary-box-padd">
              <div className="body-delivary-box-padd-box">Product Details</div>
              <span><img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNCIgaGVpZ2h0PSIxNCI+PHBhdGggZmlsbD0iIzg3ODc4NyIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTQgOEg4djZINlY4SDBWNmg2VjBoMnY2aDZ6Ii8+PC9zdmc+"/></span>
            </div>
            <div className="body-delivary-box">
              <div className="body-delivary-box-container">
                <div className="body-delivary-text">Be the first one to rate</div>
                <span></span>
                </div>
                
                </div>
            <div className="body-delivary-box">
              <div className="body-delivary-question">
                <span>Be the first to ask about this product</span>
                <button>Post Your Question</button>
              </div>
            </div>
        </div>
      </div>
      
    </>
  );
};

export default DetailText;
