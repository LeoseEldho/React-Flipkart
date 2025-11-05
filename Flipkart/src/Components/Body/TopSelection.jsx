import React from 'react'
const TopSelection = ({item}) => {
  return (
    <div className='top'>
      <div className="top-heading">
        <div className="top-heading-text">Top Selection</div>
        <div className="top-heading-btn"><svg width="16" height="16" fill="none" viewBox="0 0 17 17"><path d="m6.627 3.749 5 5-5 5" stroke="#FFFFFF" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"></path></svg></div>
      </div>

      <div className="top-container">
        {/* map Items */}
    {
      item.map((x)=>{
        return(
                  <div className="top-box">
            <div className="top-box-main">
                <div className="top-pic">
                    <div className="top-pic-box"><img src={x.image} alt="" /></div>
                </div>
                <div className="top-text">
                    <div className="top-text-name">{x.name}</div>
                    <div className="top-collection">{x.top}</div>
                </div>
            </div>
        </div>
        )
      })
    }
      </div>
    </div>
  )
}

export default TopSelection
