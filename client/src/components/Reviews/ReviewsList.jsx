import React, { useState, useEffect, useContext, useRef, useCallback } from "react"
import { ProductContext } from '../../contexts/product-info.context.jsx';

import ReviewTile from "./ReviewTile.jsx"

const ReviewsList = ({ hasMore, filteredReviews, loading, ratingsCount, setReviewSort, setPageNumber}) => {

  const change = (e) => {
    setReviewSort(e.target.value)
  }

  return (
    <>
      <div>
        {ratingsCount} reviews, sorted by
        <select onChange={change}>
          <option value="relevant">relevant</option>
          <option value="newest">newest</option>
          <option value="helpful">helpful</option>
        </select>
      </div>
      <div>
        {filteredReviews.map((review, index, array) =>
          <ReviewTile
            key={review.review_id}
            id={review.review_id}
            array={array}
            index={index}
            loading={loading}
            hasMore={hasMore}
            rating={review.rating}
            username={review.reviewer_name}
            date={review.date}
            summary={review.summary}
            body={review.body}
            photos={review.photos}
            recommend={review.recommend}
            response={review.response}
            helpful={review.helpfulness}
            setPageNumber={setPageNumber}
          />
        )}
      </div>
    </>
  )
}



export default ReviewsList