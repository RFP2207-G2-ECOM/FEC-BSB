import React, {useState, useEffect, useContext} from "react";

const MoreReviewsButton = ({ moreReviews, setReviewsToRender, setMoreReviews, ratingsCount, loading }) => {

  const showAllReviews = () => {
    setReviewsToRender(4)
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