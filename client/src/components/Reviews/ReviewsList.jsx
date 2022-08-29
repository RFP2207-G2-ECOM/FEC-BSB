import React, {useState, useEffect, useContext} from "react"
import { ProductContext } from '../../contexts/product-info.context.jsx';

import ReviewTile from "./ReviewTile.jsx"

const ReviewsList = ({ filteredReviews, ratings, setReviewSort}) => {

  const ratingsCount =
    Object.values(ratings)
    .reduce((a, b) => Number(a) + Number(b), 0);

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
        {filteredReviews.map(review =>
          <ReviewTile
            key={review.review_id}
            id={review.review_id}
            rating={review.rating}
            username={review.reviewer_name}
            date={review.date}
            summary={review.summary}
            body={review.body}
            photos={review.photos}
            recommend={review.recommend}
            response={review.response}
            helpful={review.helpfulness}
          />)}
      </div>
    </>
  )
}



export default ReviewsList