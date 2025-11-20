import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const Product = () => {
  const [prod, setprod] = useState([]);
  const [prodTwo,setprodTwo]=useState([]);

  async function productFetch() {
    try {
      let response = await fetch("/ScrollData.json");
      let data = await response.json();
      setprod(data.product || []);
      setprodTwo(data.productSec || []);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    productFetch()
   }, []);

  return (
    <Link className="product-section-main" to={"/productPage"}>
    <div className="product-section-main">
      <div className="product-section">
        <div className="product-scroll">
          <div className="product-main">
            <div className="product">
              <div className="product-one">
                <div className="product-item">
                  <div className="product-items">
                    <div className="product-items-pic">
                      <div className="product-items-image">
                        <div className="product-items-image-box">
                          <img
                            className="item-product"
                            src="data:image/webp;base64,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"
                            alt=""
                          />
                          <img
                            className="items-product"
                            src="data:image/webp;base64,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"
                            alt=""
                          />
                          <img
                            className="item-product-sec"
                            src="/pic/download.webp"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                    <div className="product-items-text">Flipkart Minutes</div>
                  </div>
                </div>
              </div>
             {
              prod.map((x,i)=>{
                return(
                  <div className="product-one" key={i}>
                <div className="product-item">
                  <div className="product-items">
                    <div className="product-items-pic">
                      <div className="product-items-image">
                        <div className="product-items-image-boxs">
                         <img className="small-img" src={x.image} alt="" />
                        </div>
                      </div>
                    </div>
                    <div className="product-items-text">{x.tiltle}</div>
                  </div>
                </div>
              </div>
                )
              })
             }
            </div>
            <div className="product">
             {
              prodTwo.map((x,i)=>{
                return(
                   <div className="product-two" key={i}>
                <div className="product-item">
                  <div className="product-items">
                    <div className="product-items-pic">
                      <div className="product-items-image">
                        <div className="product-items-image-boxs">
                         <img className="small-img" src={x.image} alt="" />
                        </div>
                      </div>
                    </div>
                    <div className="product-items-text">{x.title}</div>
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
    </div>
    </Link>
  );
};

export default Product;
