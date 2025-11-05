import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
//sfewsdfewsdfew
  return (
    <div className="new-scroll">
         <div  className="main-newscroll"   >
      {/* map */}
      {scroll.map((x,i) => {
        return (
         
            <Link  to="/productPage" key={i}>
              <div className="newscroll-pic">
                <img
                  alt="Minutes"
                  src={x.image}
                ></img>
              </div>
              <span className="newscroll-text">{x.text}</span>
            </Link>
         
        );
      })}
      <div className="main-newscroll-line"></div>
    </div>
     </div>
  );
};

export default NewScroll;