import React from "react"

const ReviewTile = () => {
  return (
    <div className="ReviewTile-Container">
      <div className="rating">
        <i className="rating_star"></i>
        <i className="rating_star"></i>
        <i className="rating_star"></i>
        <i className="rating_star"></i>
        <i className="rating_star"></i>
      </div>
      <div>username, January 1, 2022</div>
      <div>summary line</div>
      <div>
        this is the body text. lorem ipsum so and so and so blah blah blah blah this is review text
      </div>
      <div>I recommend this product</div>
      <div>Response: I am responding to the review</div>
      <div>Helpful? Yes(10) | Report</div>
    </div>
  )
}



export default ReviewTile