import React, {  useEffect, useState } from "react";

const Deals = () => {
  const [data, setData] = useState([]);
  async function fetchDeal() {
    let res=await fetch("/ScrollData.json")
    let data=await res.json()
    setData(data.deals)
  }

  useEffect(() => {
    fetchDeal()
  }, []);
  //sdfew
  return (
    <div className="deals">
      <div className="deal-box">
        <div className="deal-heading">
          <div className="top-heading-text">Top Deals</div>
        </div>
        <div className="deal-container">
          <div className="deal-scroll">
            {/* map */}
            {data.map((x,i) => {
              return (
                <div className="deal-mainbox" key={i}>
                <div className="deal-main">
                  <a className="deal-main-box">
                    <div className="deal-main-container">
                      <div className="deal-pic">
                        <img src={x.image} alt="" />
                      </div>
                      <div className="deal-text">
                        <div className="deal-text-name">{x.name}</div>
                        <div className="deal-text-price">From ₹{x.price}</div>
                      </div>
                    </div>
                  </a>
                </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Deals;