import React, { useState } from "react";
import HeaderTab from "../Header/HeaderTab";
import DetailText from "./DetailText";
import Footer from "../Footer/Footer";

const ProductDetailsTab = ({ product }) => {
  const [hover, setHover] = useState(null);

  const sidePic = [
    {
      id: 1,
      image:
        "https://rukminim2.flixcart.com/image/128/128/xif0q/watch/a/r/j/-original-imahgyc4hudwkpbu.jpeg?q=70&crop=false",
    },
    {
      id: 2,
      image:
        "https://rukminim2.flixcart.com/image/128/128/xif0q/watch/a/p/6/-original-imahgyc4xh9cfjhx.jpeg?q=70&crop=false",
    },
    {
      id: 3,
      image:
        "https://rukminim2.flixcart.com/image/128/128/xif0q/watch/m/c/f/-original-imahgyc4hh4wcwyp.jpeg?q=70&crop=false",
    },
    {
      id: 4,
      image:
        "https://rukminim2.flixcart.com/image/128/128/xif0q/watch/u/d/u/-original-imahgyc4dzg9wxrp.jpeg?q=70&crop=false",
    },
  ];

  const mainPic = [
    {
      id: 1,
      img: "https://rukminim2.flixcart.com/image/832/832/xif0q/watch/a/r/j/-original-imahgyc4hudwkpbu.jpeg?q=70&crop=false",
    },
    {
      id: 2,
      img: "https://rukminim2.flixcart.com/image/832/832/xif0q/watch/a/p/6/-original-imahgyc4xh9cfjhx.jpeg?q=70&crop=false",
    },
    {
      id: 3,
      img: "https://rukminim2.flixcart.com/image/832/832/xif0q/watch/m/c/f/-original-imahgyc4hh4wcwyp.jpeg?q=70&crop=false",
    },
    {
      id: 4,
      img: "https://rukminim2.flixcart.com/image/832/832/xif0q/watch/u/d/u/-original-imahgyc4dzg9wxrp.jpeg?q=70&crop=false",
    },
  ];
//sdfewsdf    sdfew
  const currentMain =
    mainPic.find((item) => item.id === hover)?.img || product.image;
  return (
    <div className="screen">
      <HeaderTab />
      <div className="screen-body">
        <div className="screen-watch">
          <div className="screen-watch-pic">
            <div className="screen-watch-pic-box">
              <div className="screen-pic">
                <div className="screen-pic-container-box">
                  <ul>
                    {sidePic.map((x) => (
                      <li
                      // fgrfgrdfgrefd    sdfewsdfewsdfew
                        className="screen-pic-box"
                        key={x.id}
                        onMouseOver={() => setHover(x.id)}
                        onMouseOut={() => setHover(null)}
                      >
                        <div
                          className={`screen-pic-boxs ${
                            hover === x.id ? "active-border" : ""
                          }`}
                        >
                          <img src={x.image} alt={`Thumbnail ${x.id}`} />
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="screen-pic-main">
                <div className="screen-pic-container">
                  <div className="screen-pic-container-block">
                    <img src={currentMain} alt="Main Watch" />
                  </div>
                </div>
              </div>
            </div>

            <div className="screen-like">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 20 16"
              >
                <path
                  d="M8.695 16.682C4.06 12.382 1 9.536 1 6.065 1 3.219 3.178 1 5.95 1c1.566 0 3.069.746 4.05 1.915C10.981 1.745 12.484 1 14.05 1 16.822 1 19 3.22 19 6.065c0 3.471-3.06 6.316-7.695 10.617L10 17.897l-1.305-1.215z"
                  fill="#2874F0"
                  stroke="#FFF"
                  fillRule="evenodd"
                  opacity=".9"
                ></path>
              </svg>
            </div>
          </div>

          <div className="screen-watch-btn">
            <ul>
              <li className="screen-text-watch-li">
                <button className="screen-text-watch-box">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 15"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.32 2.405H4.887C3 2.405 2.46.805 2.46.805L2.257.21C2.208.085 2.083 0 1.946 0H.336C.1 0-.064.24.024.46l.644 1.945L3.11 9.767c.047.137.175.23.32.23h8.418l-.493 1.958H3.768l.002.003c-.017 0-.033-.003-.05-.003-1.06 0-1.92.86-1.92 1.92s.86 1.92 1.92 1.92c.99 0 1.805-.75 1.91-1.712l5.55.076c.12.922.91 1.636 1.867 1.636 1.04 0 1.885-.844 1.885-1.885 0-.866-.584-1.593-1.38-1.814l2.423-8.832c.12-.433-.206-.86-.655-.86"
                      fill="#fff"
                    ></path>
                  </svg>
                  ADD TO CART
                </button>
              </li>
              <li className="screen-text-watch-li">
                <button className="screen-text-watch-boxs">
                  <div className="screen-thunber"></div>BUY NOW
                </button>
              </li>
            </ul>
          </div>
        </div>
        <DetailText product={product} />
      </div>
      <Footer></Footer>
    </div>
  );
};


export default ProductDetailsTab;
