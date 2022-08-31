import React, { useState, useEffect, useContext } from "react"
import StaticRating from "../StarRating.jsx"
import { ProductReviewsContext } from "../../contexts/product-reviews.context.jsx"
import RatingsBreakdownFilter from "./RatingsBreakdownFilter.jsx"

import styles from "../../styles/Reviews/ratingsBreakdown.css"

const RatingsBreakdown = ({ setStarFilters, starFilters }) => {

  const { metadata } = useContext(ProductReviewsContext)

  const [totalReviews, setTotalReviews] = useState(0)
  const [averageRating, setAverageRating] = useState(0)
  const [recommended, setRecommended] = useState(0)
  const [ratingsObject, setRatingsObject] = useState({})

  useEffect(() => {
    if (metadata.ratings) {
      const totalReviewCount = Object.values(metadata.ratings)
        .reduce((a, b) => Number(a) + Number(b), 0)
      const average = Object.values(metadata.ratings)
        .reduce((a, b, i) =>  Number(a) + Number(b) * (i + 1) ) / totalReviewCount
      const recommendedRate = metadata.recommended.true / totalReviewCount

      setTotalReviews(totalReviewCount)
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
      <div className="Ratings-Filter-Container">
        {[5, 4, 3, 2, 1].map(rating =>
          <RatingsBreakdownFilter
            key={rating}
            rating={rating}
            totalReviews={totalReviews}
            ratingsObject={ratingsObject}
            starFilters={starFilters}
            setStarFilters={setStarFilters}
          />
        )}
      </div>
    </div>
  )
}


export default RatingsBreakdown