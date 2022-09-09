import React, { useState } from "react"

const RatingsBreakdownFilter = ({ rating, totalReviews, ratingsObject, setStarFilters, starFilters }) => {

  const [filterStatus, setFilterStatus] = useState(false)
  const [hovering, setHovering] = useState(false)

  const ratings = (ratingsObject[rating] / totalReviews) * 100
  const fillStyle = {width: `${ratings}%`}

  const applyStarFilter = (e) => {
    if (!filterStatus) {
      setStarFilters([...starFilters, rating])
    } else {
      const index = starFilters.indexOf(rating)
      let tempFilters = [...starFilters]
      tempFilters.splice(index, 1)
      setStarFilters(tempFilters)
    }
    setFilterStatus(!filterStatus)
    console.log('starFilters:', starFilters)
  }

  let hoverStyle = {}
  hovering ? hoverStyle = {...hoverStyle, color: 'gray', cursor: 'pointer'} : hoverStyle = {...hoverStyle}

  let highlightStyle
  filterStatus ? highlightStyle = {
    backgroundColor: '#f5f4f4',
    width: '2.5em',
    height: '1em',
    padding: '3px',
    borderRadius: '5px',
    position: 'absolute',
    zIndex: '-1',
    top: '0',
    left: '0'
  } : highlightStyle = {}

  return (
    <div className="ratings-breakdown-filter">
      <div>
        <div
          className="ratings-breakdown-filter-button"
          value={rating}
          style={hoverStyle}
          onClick={applyStarFilter}
          onMouseEnter={() => setHovering(true)}
          onMouseLeave={() => setHovering(false)}
        >{`${rating} stars`}
        </div>
        <div
          className='ratings-breakdown-filter-highlight'
          style={highlightStyle}
        ></div>
      </div>
      <div className="ratings-breakdown-filter-bar">
        <div
          className="ratings-breakdown-filter-fill"
          style={fillStyle}
        >
          <span></span>
        </div>
        <span></span>
      </div>
      <div className='ratings-breakdown-filter-percentage'>{`${Math.round(ratings)}%`}</div>
    </div>
  )
}

export default RatingsBreakdownFilter