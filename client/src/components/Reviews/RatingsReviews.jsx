import React from "react"
import ReviewsList from "./ReviewsList.jsx"
import RatingsBreakdown from "./RatingsBreakdown.jsx"
import ProductBreakdown from "./ProductBreakdown.jsx"

class RatingsReviews extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <>
        <div>Ratings and Reviews section goes here!</div>
        <h1>Ratings & Reviews</h1>
        <RatingsBreakdown />
        <ProductBreakdown />
        <ReviewsList />
      </>
    )
  }

}

export default RatingsReviews