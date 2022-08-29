import React, {useState, useEffect, useContext} from "react"
import { ProductContext } from '../../contexts/product-info.context.jsx';

import ReviewTile from "./ReviewTile.jsx"

const ReviewsList = ({ filteredReviews, ratings}) => {

  const ratingsCount =
    Object.values(ratings)
    .reduce((a, b) => Number(a) + Number(b), 0);

  return (
    <div className="ReviewsList-Container">
      <div>
        {ratingsCount} reviews, sorted by
        <select>
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
      <div className="Buttons-Container">
        <button className="more-reviews-button">MORE REVIEWS</button>
        <button className="add-a-review-button">ADD A REVIEW</button>
      </div>
    </div>
  )
}



export default ReviewsList