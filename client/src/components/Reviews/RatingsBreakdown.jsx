import React, { useState, useEffect, useContext } from "react"
import StaticRating from "../StarRating.jsx"
import { ProductReviewsContext } from "../../contexts/product-reviews.context.jsx"

import styles from "../../styles/Reviews/ratingsBreakdown.css"

const RatingsBreakdown = () => {

  let { metadata } = useContext(ProductReviewsContext)
  let ratings = {...metadata.ratings}

  console.log('this is metadata:', metadata)

  const [averageRating, setAverageRating] = useState(0)

  useEffect(() => {
    if (metadata.ratings) {
      const sum = Object.values(ratings)
        .reduce((a, b) => Number(a) + Number(b), 0)
      const average = Object.values(ratings)
        .reduce((a, b, i) =>  Number(a) + Number(b) * (i + 1) ) / sum
      setAverageRating(average)
    }
  }, [ratings])

  return (
    <div className="RatingsBreakdown-Container">
      <div className="ratingsBreakdown-header">
        <div className="ratingsBreakdown-average">{Math.round(averageRating * 10) / 10}</div>
        <div className="ratingsBreakdown-stars">
          <StaticRating
            rating={averageRating}
          />
        </div>
      </div>
      <div className="ratingsBreakdown-recommended"></div>
    </div>
  )
}


export default RatingsBreakdown