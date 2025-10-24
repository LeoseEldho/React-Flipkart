import React, { useEffect, useState } from "react";
import "../Styles/StyleNewScroll.css";

const NewScroll = () => {
  const [scroll, setScroll] = useState([]);
  async function scrollFetch() {
    let res = await fetch("./ScrollData.json");
    let data = await res.json();
    setScroll(data.Scrollnew);
  }

  useEffect(() => {
    scrollFetch();
  }, []);

  return (
    <div className="new-scroll">
         <div className="main-newscroll">
      {/* map */}
      {scroll.map((x) => {
        return (
         
            <a href="">
              <div className="newscroll-pic">
                <img
                  alt="Minutes"
                  src={x.image}
                ></img>
              </div>
              <span className="newscroll-text">{x.text}</span>
            </a>
         
        );
      })}
      <div className="main-newscroll-line"></div>
    </div>
     </div>
  );
};

export default NewScroll;