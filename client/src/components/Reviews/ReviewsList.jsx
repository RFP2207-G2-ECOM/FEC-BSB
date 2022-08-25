import React from "react"
import ReviewTile from "./ReviewTile.jsx"

const ReviewsList = () => {
  return (
    <div className="ReviewsList-Container">
      <div>
        248 reviews, sorted by
        <select>
          <option value="relevant">relevant</option>
          <option value="newest">newest</option>
          <option value="helpful">helpful</option>
        </select>
      </div>
      <div>
        <ReviewTile />
      </div>
      <div className="Buttons-Container">
        <div className="more-reviews-button">MORE REVIEWS</div>
        <div className="add-a-review-button">ADD A REVIEW</div>
      </div>
    </div>
  )
}



export default ReviewsList