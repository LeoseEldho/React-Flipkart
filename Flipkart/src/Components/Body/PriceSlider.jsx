import React, { useContext, useEffect, useState } from "react";
import { FilterContext } from "./Context/FilterContext";

const PriceFilter = ({
  min,
  max,
  minPrice,
  maxPrice,
  handleMinChange,
  handleMaxChange,
  setMin,
  setMax,
  setminPrice,
  setMaxPrice,
  clearPrice
}) => {
    const {priceSteps,filters}=useContext(FilterContext)
    const [price ,setPrice]=useState([])

    async function fetchPrice() {
        let res=await fetch("./ScrollData.json")
        let data= await res.json()
        setPrice(data.priceBox)
    }

    useEffect(()=>{
        fetchPrice()
    },[])
  return (
    <section className="tab-price">
        <div className="tab-price-box">
        <div className="tab-price-text">PRICE</div>
        {<div className="tab-price-text-clear" onClick={clearPrice}>CLEAR</div>}
        </div>
      <div className="tab-price-graph">
        <div className="tab-price-graph-main">
          <div className="graph-h"></div>
          <div className="graph-h"></div>
          <div className="graph-h"></div>
          <div className="graph-m"></div>
          <div className="graph-l"></div>
          <div className="graph-l"></div>
        </div>
      </div>

      <div className="price-slider-container">
        <div className="slider-range">
          <div
            className="slider-track"
            style={{
              left: `${
                (priceSteps.indexOf(min) / (priceSteps.length - 1)) * 100
              }%`,
              width: `${
                ((priceSteps.indexOf(max) - priceSteps.indexOf(min)) /
                  (priceSteps.length - 1)) *
                100
              }%`,
            }}
          />
          <input
            type="range"
            min="0"
            max={priceSteps.length - 1}
            value={priceSteps.indexOf(min)}
            onChange={handleMinChange}
            className="thumb thumb-left"
          />
          <input
            type="range"
            min="0"
            max={priceSteps.length - 1}
            value={priceSteps.indexOf(max)}
            onChange={handleMaxChange}
            className="thumb thumb-right"
          />
        </div>

        <div className="tab-price-ranges">
          {priceSteps.map((_, i) => (
            <div key={i} className="tab-price-range-dot">
              .
            </div>
          ))}
        </div>
      </div>

      {price.map((x, i) => (
        <div className="tab-price-price" key={i}>
          <div className="tab-price-min">
            <select
              className="tab-price-min-box"
              value={minPrice}
              onChange={(e) => {
                const val = e.target.value;
                setminPrice(val);
                setMin(val);
                if (priceSteps.indexOf(val) >= priceSteps.indexOf(max)) {
                  const next =
                    priceSteps[priceSteps.indexOf(val) + 1] || "20000+";
                  setMax(next);
                  setMaxPrice(next);
                }
              }}
            >
              {x.price[0]?.map((a, i) => (
                <option value={a} key={i}>
                  {a}
                </option>
              ))}
            </select>
          </div>

          <div className="tab-price-to">to</div>

          <div className="tab-price-max">
            <select
              className="tab-price-min-box"
              value={maxPrice}
              onChange={(e) => {
                const val = e.target.value;
                setMaxPrice(val);
                setMax(val);
                if (priceSteps.indexOf(val) <= priceSteps.indexOf(min)) {
                  const prev =
                    priceSteps[priceSteps.indexOf(val) - 1] || 0;
                  setMin(prev);
                  setminPrice(prev);
                }
              }}
            >
              {x.price[1]?.map((a, i) => (
                <option key={i} value={a}>
                  {a}
                </option>
              ))}
            </select>
          </div>
        </div>
      ))}
    </section>
  );
};

export default PriceFilter;
