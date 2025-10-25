import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "../Styles/StyleProductPage.css";
import { FilterContext } from "./Context/FilterContext";
import ProductpageTab from "./ProductpageTab";

const ProductPage = () => {
  const { filters, sort: contextSort, setSort} = useContext(FilterContext);
  const [pic, setPic] = useState([]);
  const [product, setproduct] = useState([]);
  const [popup, setpopup] = useState(false);
  const [select, setSelect] = useState(contextSort || "Relavance");
  const [result, setResult] = useState([]);

  async function fetchPic() {
    try {
      let res = await fetch("/ScrollData.json");
      let data = await res.json();
      setPic(data.stickers || []);
      setproduct(data.ProductPagee || []);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    // sorting   
    let sorted = [...product];
    if (select == "Relavance") {
      sorted = [...product];
    } else if (select == "Low") {
      sorted = [...product].sort(
        (x, y) => x.price.replace(/,/g, "") - y.price.replace(/,/g, "")
      );
    } else if (select == "High") {
      sorted = [...product].sort(
        (x, y) => y.price.replace(/,/g, "") - x.price.replace(/,/g, "")
      );
    } else if (select == "Popularity") {
      sorted = [...product].sort(
        (x, y) => parseFloat(y.rating) - parseFloat(x.rating)
      );
    }

    // Filter
    if (filters.Brand?.length > 0) {
      sorted = sorted.filter((x) =>
        filters.Brand.includes(x.Brand || x.name)
      );
    }
    if(filters["strap Color"]?.length>0){
      sorted=sorted.filter((x)=>
      filters["strap Color"].includes(x["strap Color"]))
    }
    if (filters["strap Material"]?.length > 0) {
      sorted = sorted.filter((x) =>
        filters["strap Material"].includes(x["strap Material"])
      );
    }
    if (filters.Type?.length > 0) {
      sorted = sorted.filter((x) => filters.Type.includes(x.Type));
    }
    if (filters["Dial Shape"]?.length > 0) {
      sorted = sorted.filter((x) =>
        filters["Dial Shape"].includes(x["Dial Shape"])
      );
    }
    if (filters.price?.length > 0) {
      sorted = sorted.filter((x) => {
        const productPrice = parseFloat(x.price.replace(/,/g, ""));
        return filters.price.some((range) => {
          if (range.includes("500 and Below")) return productPrice <= 500;
          if (range.includes("501 - Rs. 2000"))
            return productPrice >= 501 && productPrice <= 2000;
          if (range.includes("2001 - Rs. 5000"))
            return productPrice >= 2001 && productPrice <= 5000;
          if (range.includes("5001 - Rs. 10000"))
            return productPrice >= 5001 && productPrice <= 10000;
          return false;
        });
      });
    }
    setResult(sorted);
  }, [product, select, filters]);

  useEffect(() => {
    fetchPic();
  }, []);

  const handleSortChange = (selectedSort) => {
    setSelect(selectedSort);
    setSort(selectedSort);
    setpopup(false);
  };
  return (
    <>
    <div className="watch-mobile">
      <div className="watches">
        <div className="watches-header">
          <div className="watches-head">
            <Link href="" className="watch-back" to="/">
              <svg
                width="19"
                height="16"
                viewBox="0 0 19 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.556 7.847H1M7.45 1L1 7.877l6.45 6.817"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                ></path>
              </svg>
            </Link>
            <a href="" className="watch-logo">
              <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/logo_lite-ea579c.png" />
            </a>
            <div className="watch-head">
              <h1>Wrist Watches</h1>
            </div>
            <a href="" className="watch-back">
              <svg
                height="30"
                viewBox="0 0 32 32"
                width="30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M32.0012 0H0.0012207V32H32.0012V0Z"></path>
                <path
                  d="M15.0012 21.9999C18.8671 21.9999 22.0011 18.8659 22.0011 14.9999C22.0011 11.134 18.8671 8 15.0012 8C11.1352 8 8.00122 11.134 8.00122 14.9999C8.00122 18.8659 11.1352 21.9999 15.0012 21.9999Z"
                  stroke="#111112"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M19.9524 19.95L24.0024 24"
                  stroke="#111112"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </a>
            <a href="" className="watch-back">
              <svg
                width="20"
                height="20"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M24 23H8.56185C8.32766 23 8.1009 22.9178 7.9211 22.7678C7.7413 22.6177 7.61987 22.4093 7.57797 22.1789L4.2402 3.82112C4.19831 3.5907 4.07688 3.3823 3.89708 3.23225C3.71728 3.08219 3.49052 3 3.25633 3H1"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M9 28C10.3807 28 11.5 26.8807 11.5 25.5C11.5 24.1193 10.3807 23 9 23C7.61929 23 6.5 24.1193 6.5 25.5C6.5 26.8807 7.61929 28 9 28Z"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M24 28C25.3807 28 26.5 26.8807 26.5 25.5C26.5 24.1193 25.3807 23 24 23C22.6193 23 21.5 24.1193 21.5 25.5C21.5 26.8807 22.6193 28 24 28Z"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M5 8H26.8018C26.9483 8 27.0929 8.03218 27.2256 8.09425C27.3583 8.15633 27.4757 8.2468 27.5695 8.35925C27.6634 8.4717 27.7314 8.6034 27.7687 8.74504C27.8061 8.88667 27.8119 9.03478 27.7857 9.17889L26.1493 18.1789C26.1074 18.4093 25.986 18.6177 25.8062 18.7678C25.6264 18.9178 25.3996 19 25.1654 19H7"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </a>
            <a href="" className="watch-login">
              <span>Login</span>
            </a>
          </div>
        </div>
        {/* sort  Area*/}
        <div className="sort-filter">
          <div className="sort-filter-container">
            <div className="sort-filter-container-box">
              <div className="watch-sort" onClick={() => setpopup(!popup)}>
                <div className="watch-sort-box">
                  <svg width="20" height="20" viewBox="0 0 256 256">
                    <path fill="none" d="M0 0h256v256H0z"></path>
                    <path
                      fill="none"
                      stroke="#111112"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="12"
                      d="m144 168 40 40 40-40M184 112v96M48 128h72M48 64h136M48 192h56"
                    ></path>
                  </svg>
                  <div className="watch-sort-box-text">Sort</div>
                </div>
              </div>
              <div className="watch-line"></div>
              <div className="watch-sort">
                <Link
                  className="watch-sort-box"
                  to="/filterpage"
                >
                  <svg width="20" height="20" viewBox="0 0 256 256">
                    <path fill="none" d="M0 0h256v256H0z"></path>
                    <path
                      fill="none"
                      stroke="#111112"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="12"
                      d="M148 172H40M216 172h-28"
                    ></path>
                    <circle
                      cx="168"
                      cy="172"
                      r="20"
                      fill="none"
                      stroke="#111112"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="12"
                    ></circle>
                    <path
                      fill="none"
                      stroke="#111112"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="12"
                      d="M84 84H40M216 84h-92"
                    ></path>
                    <circle
                      cx="104"
                      cy="84"
                      r="20"
                      fill="none"
                      stroke="#111112"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="12"
                    ></circle>
                  </svg>
                  <div className="watch-sort-box-text">Filter</div>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="stickers">
          <div className="sticker-scroll">
            <div className="sticker-scroll-box">
              <div className="sticker-container">
                {/* Map */}
                {pic.map((x, ind) => {
                  return (
                    <div className="sticker-main-box" key={ind}>
                      <div className="sticker-pic">
                        {" "}
                        <img src={x.image}></img>
                      </div>
                      <div className="sticker-text">
                        <span>{x.text}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="watch-add">
        <img
          src="https://rukminim1.flixcart.com/fk-p-image/750/334/cf-chitrakaar-prod/3b82c3342a930b9a438b6c7922668da9.jpeg?q=60"
          alt=""
        />
      </div>
      <div className="watch-product">
        {result.map((x, index) => (
          <div key={index} className="watch-flex">
            <div className="watch-product-main">
              {/* map */}
              <div className="product-watch">
                <div className="watch-box">
                  <div className="watch-items">
                    <div className="watch-item-box">
                      <div className="watch-item-pic">
                        <img src={x.image} alt={x.name} />
                        <div className="back-ground"></div>
                      </div>
                      <div className="watch-rating-box">
                        <div className="watch-rating-box-container">
                          <div className="watch-rating-count">{x.rating}</div>
                          <div className="watch-rating-star">
                            <img
                              src="https://rukminim1.flixcart.com/www/24/24/promos/15/12/2024/a72b6403-9a02-41f8-b683-a78d9f54a61e.png?q=60"
                              alt=""
                            />
                          </div>
                          <div className="watch-rating-users">| {x.users}</div>
                        </div>
                      </div>
                    </div>
                    <div className="watch-item-text">
                      <div className="watch-item-text-name">
                        <div>{x.name}</div>
                      </div>
                      <div className="watch-item-text-detail">
                        <div>{x.details}</div>
                      </div>
                      <div className="watch-item-text-price">
                        <div className="watch-item-priceoffer">
                          <svg
                            width="14"
                            height="14"
                            viewBox="0 0 12 12"
                            fill="none"
                          >
                            <path
                              d="M6.73461 1V8.46236L9.5535 5.63352L10.5876 6.65767L5.99384 11.2415L1.41003 6.65767L2.42424 5.63352L5.25307 8.46236V1H6.73461Z"
                              fill="#4BB550"
                            ></path>
                          </svg>
                          <div className="watch-item-priceoffer-text">
                            {x.off}%
                          </div>
                        </div>
                        <div className="watch-item-priceog">₹{x.discount}</div>
                        <div className="watch-item-pricesale">₹{x.price}</div>
                      </div>
                      <div className="watch-item-text-offer">
                        <div className="watch-textoffer-pic">
                          <img
                            src="https://rukminim1.flixcart.com/www/76/32/promos/30/08/2023/59dc7885-72bf-4135-9099-025f074b0eb1.png?q=90"
                            alt=""
                          />
                        </div>
                        <div className="watch-textoffer-price"> ₹{x.bank} </div>
                        <div className="watch-textoffer-bank">
                          with Bank offer
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="watch-cart">
                    <div className="watch-cart-item">
                      <img
                        src="https://rukminim1.flixcart.com/www/40/40/promos/30/06/2025/ca99011a-0436-4c4c-a3e6-3a5d6ef01f75.png?q=60"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div className="watch-box-add">AD</div>
              </div>
              <div></div>
            </div>
            <div
              className="product-gap"
              style={{ display: index % 2 == 0 ? "block" : "none" }}
            ></div>
          </div>
        ))}
      </div>
      {/* sort  */}
      {popup && (
        <div className="sort-box">
          <div className="sort-box-text">SORT BY</div>
          <div className="sort-margin"></div>
          <div
            className="sort-box-selection"
            onClick={() => setSelect("Relavance") || setpopup(!popup)}
          >
            <div className="sort-selection-name">
              <div>Relavance</div>
            </div>
            <div className="sort-selection-box">
              <img
                src={
                  select == "Relavance"
                    ? "https://rukminim1.flixcart.com/www/32/32/promos/28/04/2022/7c0ab296-0784-44d3-be1b-7aaa4c36d990.png?q=90"
                    : "https://rukminim1.flixcart.com/www/32/32/promos/28/04/2022/7b036604-c843-4bb5-af27-7c675bf60f67.png?q=60"
                }
                alt=""
                height="16"
                width="16"
              ></img>
            </div>
          </div>
          {/* map */}
          <div
            className="sort-box-selection"
            onClick={() => {
              setSelect("Popularity");
              setpopup(!popup);
            }}
          >
            <div className="sort-selection-name">
              <div>Popularity</div>
            </div>
            <div className="sort-selection-box">
              <img
                src={
                  select == "Popularity"
                    ? "https://rukminim1.flixcart.com/www/32/32/promos/28/04/2022/7c0ab296-0784-44d3-be1b-7aaa4c36d990.png?q=90"
                    : "https://rukminim1.flixcart.com/www/32/32/promos/28/04/2022/7b036604-c843-4bb5-af27-7c675bf60f67.png?q=60"
                }
                alt=""
                height="16"
                width="16"
              ></img>
            </div>
          </div>
          <div
            className="sort-box-selection"
            onClick={() => {
              handleSortChange("Low");
            }}
          >
            <div className="sort-selection-name">
              <div>Price-- Low to High</div>
            </div>
            <div className="sort-selection-box">
              <img
                src={
                  select == "Low"
                    ? "https://rukminim1.flixcart.com/www/32/32/promos/28/04/2022/7c0ab296-0784-44d3-be1b-7aaa4c36d990.png?q=90"
                    : "https://rukminim1.flixcart.com/www/32/32/promos/28/04/2022/7b036604-c843-4bb5-af27-7c675bf60f67.png?q=60"
                }
                alt=""
                height="16"
                width="16"
              ></img>
            </div>
          </div>
          <div
            className="sort-box-selection"
            onClick={() => {
              handleSortChange("High");
            }}
          >
            <div className="sort-selection-name">
              <div>Price-- High to Low</div>
            </div>
            <div className="sort-selection-box">
              <img
                src={
                  select == "High"
                    ? "https://rukminim1.flixcart.com/www/32/32/promos/28/04/2022/7c0ab296-0784-44d3-be1b-7aaa4c36d990.png?q=90"
                    : "https://rukminim1.flixcart.com/www/32/32/promos/28/04/2022/7b036604-c843-4bb5-af27-7c675bf60f67.png?q=60"
                }
                alt=""
                height="16"
                width="16"
              ></img>
            </div>
          </div>
          <div
            className="sort-box-selection"
            onClick={() => {
              handleSortChange("Newest");
            }}
          >
            <div className="sort-selection-name">
              <div>Newest Frist</div>
            </div>
            <div className="sort-selection-box">
              <img
                src={
                  product == "Newest"
                    ? "https://rukminim1.flixcart.com/www/32/32/promos/28/04/2022/7c0ab296-0784-44d3-be1b-7aaa4c36d990.png?q=90"
                    : "https://rukminim1.flixcart.com/www/32/32/promos/28/04/2022/7b036604-c843-4bb5-af27-7c675bf60f67.png?q=60"
                }
                alt=""
                height="16"
                width="16"
              ></img>
            </div>
          </div>
        </div>
      )}
      <div className="filter-box"></div>
      {popup && <div className="overlay" onClick={() => setpopup(false)}></div>}
    </div>
    <ProductpageTab/>
    </>
  );
};

export default ProductPage;
