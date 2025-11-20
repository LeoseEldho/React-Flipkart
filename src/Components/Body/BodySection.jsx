import React, {  useEffect, useState } from "react";
import Button from "../Elements/Button";
import PhoneItems from "./PhoneItems";
import TopSelection from "./TopSelection";
import Deals from "./Deals";

const BodySection = () => {
  const [phoneImg,setPhoneImg]=useState([])
  const [phone,setphone]=useState([])
  const [shoes,setshoes]=useState([])
  const [top,setTop]=useState([])
  const [rated,setrated]=useState([])
  async function fetchPhone() {
    let response = await fetch("/ScrollData.json");
    let data = await response.json();
    setPhoneImg(data.imageBox)
    setphone(data.phone)
    setshoes(data.shoes)
    setTop(data.shopPic)
    setrated(data.rated)
  }

  useEffect(() => {
    fetchPhone();
  },[]);

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
      <Deals/>
      <PhoneItems phone={phone}/>
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
        <TopSelection item={top}/>
            <div className="top-add">
      <div className="top-add-pic">
        <img src="https://rukminim1.flixcart.com/www/1060/1500/promos/26/09/2023/6c3c5fe2-c236-4fa2-8d97-595e1e01da01.jpg?q=60" alt="" />
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
                phoneImg.map((x,i)=>{
                  return(
                    <div className="mobile-pic-setting" key={i}>
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
      {shoes && shoes.length > 0 && (
        <div className="Phone-New">
          <PhoneItems phone={shoes}/>
        </div>
      )}
      <div className="Top">
        <TopSelection item={rated} />
      </div>
    </>
  );
};

export default BodySection;