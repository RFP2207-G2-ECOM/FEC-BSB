import React, { useState } from 'react'
import { ImCross } from "react-icons/im";

import styles from "../../styles/Reviews/activeFilters.css";

const ActiveFiltersView = ( { starFilters, setStarFilters } ) => {

  const closeStarFilter = (filter) => {
    const index = starFilters.indexOf(filter)
    let tempFilters = [...starFilters]
    tempFilters.splice(index, 1)
    setStarFilters(tempFilters)
  }

  return (
    <div className='reviews-active-filters-container'>
      <div>Active Filters</div>
      <div className='reviews-active-filters-container-box'>
        {starFilters.map(filter =>
        <div
        key={filter}
        className='review-active-filters-tile-container'
        >
          <div>{`${filter} stars`}</div>
          <div
            className='review-active-filters-tile-x'
            onClick={() => {closeStarFilter(filter)}}
          ><ImCross /></div>
        </div>
        )}
      </div>
    </div>
  )
}

export default ActiveFiltersView