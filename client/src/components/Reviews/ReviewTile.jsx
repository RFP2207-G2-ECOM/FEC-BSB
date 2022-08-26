import React from "react"
import StarRating from "./StarRating.jsx"
import QuarterStars from "./StarRating2.jsx"
import StaticRating from "./StarRating3.jsx"

const ReviewTile = ({ id, rating, username, date, summary, body, recommend, response, helpfulness }) => {

  const dateOptions = {year: 'numeric', month: 'long', day: 'numeric'}
  const dateConverted = new Date(date.substring(0,10)).toLocaleString(undefined, dateOptions)

  return (
    <div className="ReviewTile-Container">
      <div className="rating"><StaticRating rating={rating}/></div>
      <div>{username}, {dateConverted}</div>
      <div>{summary}</div>
      <div>{body}</div>
      {recommend === true &&
        <div>I recommend this product</div>
      }
      {response !== null &&
        <div>{response}</div>
      }
      <div>Helpful? Yes({helpfulness}) | Report</div>
    </div>
  )
}



export default ReviewTile