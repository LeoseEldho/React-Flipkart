import React, { useContext, useEffect, useState } from "react";
import "../Styles/StyleFilter.css";
import { Link, useNavigate } from "react-router-dom";
import { FilterContext } from "./Context/FilterContext";

const FilterPage = () => {
  const {filters,setFilters,setSort,defaultFilters}=useContext(FilterContext)

  const [key, setkey] = useState([]);
  const [item, setitem] = useState(0);

  async function fetchKey() {
    let res = await fetch("./ScrollData.json");
    let data = await res.json();
    setkey(data.filterKey);
  }

  useEffect(() => {
    fetchKey();
  }, []); 

//filter    
  const [click, setClick] = useState({ ...defaultFilters, ...filters });

  const filterProduct = (category, value) => {
    setClick((prev) => {
      const current = prev[category] || [];
      const alreadySelected = current.includes(value);

      const updateCategory = alreadySelected
        ? current.filter((v) => v !== value)
        : [...current, value];

      return {
        ...prev,
        [category]: updateCategory,
      };
    });
  };

  const navigate=useNavigate()
  //Apply filters 
  const filterApply = () => {
    setFilters(click)
    navigate("/productPage")
  };

  // Clear filters 
  const clearFliter = () => {
    setClick(defaultFilters);
    setFilters(defaultFilters)
    setSort("Relavance")
    navigate("/productPage")
  }
  return (
    <div className="filter-container">
      <div className="filter-body">
        <div className="filter-body-container">
          <div className="filter-list">
            <div className="filter-list-main">
              <div className="filter-list-scroll">
                {/* map  */}
                {key.map((x, index) => {
                  let clickCount=click[x.name]?.length||" "
                  return (
                    <div 
                      className="filter-list-box-main"
                      key={index}
                      onClick={() => setitem(index)}
                    >
                      <div
                        className="filter-box-sub"
                        style={{
                          backgroundColor:
                            item == index
                              ? "rgba(255,255,255,1.00)"
                              : " rgb(241, 243, 246) ",
                        }}
                      >
                        <div
                          className="filter-box-sub-text"
                          style={{ color: item == index ? "Blue" : "black" }}
                        >
                          {x.name}
                        </div>
                       { <div className="filter-count" >{clickCount}</div>}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="filter-list-line"></div>
          </div>
          <div className="filter-filter">
            <div className="filter-filter-container">
              {/* search */}
              <div
                className="filter-filter-search"
                style={{ display: key[item]?.search == true ? "flex" : "none" }}
              >
                <div className="filter-filter-search-icon">
                  <img
                    src="https://rukminim2.flixcart.com/www/36/36/promos/05/02/2019/2c3684ce-966a-43b1-b93b-35d288875e8e.png?q=60"
                    alt=""
                  />
                </div>
                <input
                  placeholder="Search Brand"
                  autoCapitalize="sentences"
                  autoComplete="on"
                  autoCorrect="on"
                  dir="auto"
                  spellCheck="true"
                  type="text"
                ></input>
              </div>
              <div className="filter-scroll-main">
                <div className="filter-scroll-sub">
                  <div className="filter-scroll-sub-box">
                    <div className="filter-scroll-sub-text">
                      Popular Filters
                    </div>
                  </div>
                </div>
                {key[item]?.value.map((value, ind) => {
                  return (
                    <div key={ind}>
                      <div className="filter-scroll-box">
                        <div className="filter-scroll-box-container">
                          <div
                            className="filter-scroll-box-container-icon"
                            key={ind}>
                            <img
                              onClick={()=>filterProduct (key[item].name, value)}
                              src={click[key[item].name]?.includes(value)?"https://static-assets-web.flixcart.com/www/linchpin/batman-returns/cross-platform-images/images/checked-b672f083.png"
                                :"https://static-assets-web.flixcart.com/www/linchpin/batman-returns/cross-platform-images/images/unchecked-58d79d4f.png"
                              }/>
                          </div>
                          <div className="filter-scroll-box-container-text">
                            <div>{value}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="filter-filter-line"></div>
          </div>
        </div>
      </div>
      <div className="filter">
        <Link className="filter-back" to="/productPage" >
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
        <div className="filter-text">
          <h1>Filters</h1>
        </div>
        {Object.values(click).some((arr)=>arr.length>0) &&<a className="filter-clear" onClick={clearFliter}><span>Clear Filters</span></a>}
      </div>
      <div className="filter-apply">
        <div className="filter-apply-main">
          <div className="filter-apply-count">
            <div className="filter-apply-count-no">67,328</div>
            <div className="filter-apply-count-text">products found</div>
          </div>
          <div className="filter-apply-btn" onClick={filterApply}>
            <div className="filter-apply-btn-text">Apply</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterPage;
