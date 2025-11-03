import React, { useState } from "react";
import "../Styles/StyleBodySection.css";
import Button from "../Elements/Button";

const BodySection = () => {
  const [phone, setPhone] = useState([]);
  const [phoneImg,setPhoneImg]=useState([])
  async function fetchPhone() {
    let response = await fetch("/ScrollData.json");
    let data = await response.json();
    setPhone(data.phone);
    setPhoneImg(data.imageBox)
  }
  useState(() => {
    fetchPhone();
  });

  return (
    <>
      <div className="Add">
        <a >
          <img
            src="https://rukminim2.flixcart.com/fk-p-flap/880/200/image/965f1b90f21c6b6a.jpeg?q=60"
            alt=""
          />
        </a>
      </div>
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
            {phone.map((x) => {
              return (
                <div className="phone-container">
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
                            Style="flex-shrink: 0;"
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
              phone.map((x)=>{
                return(
              <div className="phone-tab-main">
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
              <div className="phone-cards">
          {/* map */}
          <div className="phone-card-main">
            <img src="https://rukminim1.flixcart.com/fk-p-flap/640/340/image/c5d0453a8ad30643.jpg?q=60" alt="" />
          </div>
          <div className="phone-card-main">
            <img src="https://rukminim1.flixcart.com/fk-p-flap/640/340/image/c5d0453a8ad30643.jpg?q=60" alt="" />
          </div>
          <div className="phone-card-main">
            <img src="https://rukminim1.flixcart.com/fk-p-flap/640/340/image/c5d0453a8ad30643.jpg?q=60" alt="" />
          </div>
        </div>
      <div className="mobile">
        <div className="mobile-main">
          <div className="mobile-top">
            <div className="mobile-image-top">
              <div className="mobile-main-image">
                <picture>
                  <img
                    src="https://rukminim1.flixcart.com/www/920/300/promos/16/09/2025/2c784011-39e8-44bf-931b-502875b49c75.jpg?q=60"
                    alt=""
                  />
                </picture>
              </div>
              <div className="mobile-main-text">
                <div className="mobile-text">
                  <div className="mobile-text-main">
                    On everybody's list
                  </div>
                 <Button/>
                  {/* button */}
                </div>
              </div>
            </div>
          </div>
          <div className="mobile-bottom">
            <div className="mobile-bottom-main">
              {
                phoneImg.map((x)=>{
                  return(
                    <div className="mobile-pic-setting">
                {/* To be map */}
                <div className="mobile-container-box"> 
                  <div className="mobile-box">
                    <div className="mobile-image">
                      <img src={x.image} alt={x.name} />
                    </div>
                    <div className="mobile-box-text">
                      <div className="mobile-box-item">{x.name}</div>
                      <div className="mobile-box-heading">{x.offer}</div>
                    </div>
                  </div>

                </div>
              </div>
                  )
                })
              }
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default BodySection;