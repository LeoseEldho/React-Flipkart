import React, { useEffect, useState } from "react";
import BodySection from "./BodySection";
const Items = () => {
  const [product, setProduct] = useState([]);
  async function fetchItems() {
    let response = await fetch("/ScrollData.json");
    let data = await response.json();
    setProduct(data.itemsPro);
  }
  useEffect(() => {
    fetchItems();
  });

  return (
    <>
      <div className="items">
        {product.map((x) => {
          return (
            <div className="items-box">
              <a href="">
                <div className="items-pic">
                  <img src={x.image} alt={x.product} />
                </div>
                {x.rating && (
                  <div className="items-line">
                    <div className="items-line-rating">
                      <div className="items-line-ratingno">{x.rating}</div>
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="#0E772D"
                      >
                        <path
                          d="m12.002 2.588 2.222 6.838h7.19l-5.816 4.227 2.222 6.839-5.818-4.227-5.817 4.227 2.222-6.84L2.59 9.427h7.19z"
                          stroke="#0E772D"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                      <div className="items-line-buyer">({x.buyer})</div>
                    </div>
                  </div>
                )}
                <div className="items-name">
                  <div className="items-name-product">{x.product}</div>
                  <div className="items-name-gender">{x.gender}</div>
                </div>
                <div className="items-rate">
                  <div className="items-rate-discount">{x.discount}</div>
                  <div className="items-rate-price">₹{x.price}</div>
                </div>
              </a>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Items;
