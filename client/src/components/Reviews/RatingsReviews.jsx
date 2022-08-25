import React, {useState} from "react"
import ReviewsList from "./ReviewsList.jsx"
import RatingsBreakdown from "./RatingsBreakdown.jsx"
import ProductBreakdown from "./ProductBreakdown.jsx"
import styles from "../../styles/Reviews/reviews.css"

const RatingsReviews = () => {

  return (
    <div className="RR-Container">
      <div className="rr-title">RATINGS & REVIEWS</div>
      <div className="Module-Container">
        <div className="Breakdown-Container">
          <RatingsBreakdown />
          <ProductBreakdown />
        </div>
        <ReviewsList />
      </div>
    </div>
  )
}



export default RatingsReviews