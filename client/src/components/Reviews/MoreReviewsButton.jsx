import React, {useState, useEffect } from "react";

const MoreReviewsButton = ({ moreReviews, reviewsToRender, setReviewsToRender, setMoreReviews, ratingsCount, loading }) => {

  const showAllReviews = () => {
    setReviewsToRender(4)
    setMoreReviews(true)
  }

  return (
    <>
      { moreReviews === false &&
        ratingsCount - reviewsToRender > 0 &&
        <button
          className="more-reviews-button"
          onClick={showAllReviews}
        >MORE REVIEWS</button>
      }
    </>
  )
}

export default MoreReviewsButton;