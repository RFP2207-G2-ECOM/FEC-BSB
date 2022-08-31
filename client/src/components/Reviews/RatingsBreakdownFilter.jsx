import React, { useState } from "react"

const RatingsBreakdownFilter = ({ rating, totalReviews, ratingsObject, setStarFilters, starFilters }) => {

  const [filterStatus, setFilterStatus] = useState(false)

  const ratings = (ratingsObject[rating] / totalReviews) * 100
  const fillStyle = {width: `${ratings}%`}

  let selectStyle = {backgroundColor: "white"}

  const applyStarFilter = (e) => {
    setFilterStatus(!filterStatus)
    if (filterStatus) {
      setStarFilters([...starFilters, rating])
      selectStyle = {backgroundColor: "blue"}
    } else {
      const index = starFilters.indexOf(rating)
      const newFilters = starFilters.splice(index, 1)
      setStarFilters(newFilters)
      selectStyle = {backgroundColor: "white"}
    }
  }

  return (
    <div className="ratings-breakdown-filter">
      <div
        className="ratings-breakdown-filter-button"
        value={rating}
        style={selectStyle}
        onClick={applyStarFilter}
      >{`${rating} stars`}</div>
      <div className="ratings-breakdown-filter-bar">
        <div
          className="ratings-breakdown-filter-fill"
          style={fillStyle}
        >
          <span></span>
        </div>
        <span></span>
      </div>
    </div>
  )
}

export default RatingsBreakdownFilter