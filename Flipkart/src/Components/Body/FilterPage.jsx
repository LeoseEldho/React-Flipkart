import React from 'react'
import "../Styles/StyleFilter.css";
const FilterPage = () => {
  return (
    <div className='filter-container'>
        <div className="filter-body">
            <div className="filter-body-container">
                <div className="filter-list"></div>
                <div className="filter-filter"></div>
            </div>
        </div>
    <div className='filter'>
      <a className="filter-back">
        <svg width="19" height="16" viewBox="0 0 19 16" xmlns="http://www.w3.org/2000/svg"><path d="M17.556 7.847H1M7.45 1L1 7.877l6.45 6.817" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"></path></svg>
      </a>
      <div className="filter-text">
        <h1>Filters</h1>
      </div>
    </div>
    <div className="filter-apply"></div>
    </div>
  )
}
//kjb
export default FilterPage
