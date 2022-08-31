import React, { useState, useEffect, useContext } from "react"
import StaticRating from "../StarRating.jsx"
import { ProductReviewsContext } from "../../contexts/product-reviews.context.jsx"
import RatingsBreakdownFilter from "./RatingsBreakdownFilter.jsx"

import styles from "../../styles/Reviews/ratingsBreakdown.css"

const RatingsBreakdown = () => {

  let { metadata } = useContext(ProductReviewsContext)

  console.log('this is metadata:', metadata)

  const [averageRating, setAverageRating] = useState(0)
  const [recommended, setRecommended] = useState(0)
  const [ratingsObject, setRatingsObject] = useState({})

  useEffect(() => {
    if (metadata.ratings) {
      const totalReviews = Object.values(metadata.ratings)
        .reduce((a, b) => Number(a) + Number(b), 0)
      const average = Object.values(metadata.ratings)
        .reduce((a, b, i) =>  Number(a) + Number(b) * (i + 1) ) / totalReviews
      const recommendedRate = metadata.recommended.true / totalReviews

      setAverageRating(average)
      setRecommended(recommendedRate)
      setRatingsObject(metadata.ratings)
    }
  }, [metadata])

  return (
    <div className="RatingsBreakdown-Container">
      <div className="ratingsBreakdown-header">
        <div className="ratingsBreakdown-average">
          {Math.round(averageRating * 10) / 10}
        </div>
        <div className="ratingsBreakdown-stars">
          <StaticRating
            rating={averageRating}
          />
        </div>
      </div>
      <div className="ratingsBreakdown-recommended">
        {`${Math.round(recommended * 100)}% of reviews recommend this product`}
      </div>
      <div className="Ratings-Visual-Container">
        {[5, 4, 3, 2, 1].map(rating => {
          <RatingsBreakdownFilter
            rating={rating}
          />
        })}
      </div>
    </div>
  )
}


export default RatingsBreakdown