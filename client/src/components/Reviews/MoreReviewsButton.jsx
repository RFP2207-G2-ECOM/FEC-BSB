import React, {useState, useEffect, useContext} from "react";

const MoreReviewsButton = ({ moreReviews, setReviewCount, setMoreReviews, ratingsCount, loading }) => {

  const showAllReviews = () => {
    setReviewCount(4)
    setMoreReviews(true)
  }

  return (
    <>
      { moreReviews === false &&
        <button
          className="more-reviews-button"
          onClick={showAllReviews}
        >MORE REVIEWS</button>
      }
    </>
  )
}

export default MoreReviewsButton;