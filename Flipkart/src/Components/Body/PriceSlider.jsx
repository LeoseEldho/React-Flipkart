import { useState } from "react";
import "../Styles/PriceSlider.css";

function PriceSlider() {
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(20000);

  const handleMinChange = (e) => {
    const value = Math.min(Number(e.target.value), max - 100);
    setMin(value);
  };

  const handleMaxChange = (e) => {
    const value = Math.max(Number(e.target.value), min + 100);
    setMax(value);
  };

  return (
    <div className="price-slider-container">
      <div className="slider-inputs">
        <span>₹{min.toLocaleString()}</span>
        <span>₹{max.toLocaleString()}</span>
      </div>

      <div className="slider-range">
        <input
          type="range"
          min="0"
          max="20000"
          step="100"               
          value={min}
          onChange={handleMinChange}
          className="thumb thumb-left"
        />
        <input
          type="range"
          min="0"
          max="20000"
          step="100"               
          value={max}
          onChange={handleMaxChange}
          className="thumb thumb-right"
        />
        <div
          className="slider-track"
          style={{
            left: `${(min / 20000) * 100}%`,
            right: `${100 - (max / 20000) * 100}%`,
          }}
        />
      </div>
    </div>
  );
}

export default PriceSlider;
//ytdg   6ut6tuj
erdtfy5rtfy
ytetydtydeytd
wythdthn   fghfghj   erdtfghyuitgyhuifghjnmk  sdfsdf