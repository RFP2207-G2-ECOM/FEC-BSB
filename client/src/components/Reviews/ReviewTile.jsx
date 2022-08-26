import React from "react"

import StaticRating from "../StarRating.jsx"
import PosterTag from "../PosterTag.jsx"

const ReviewTile = ({ id, rating, username, date, summary, body, recommend, response, helpfulness }) => {

  // const dateOptions = {year: 'numeric', month: 'long', day: 'numeric'}
  // const dateConverted = new Date(date.substring(0,10)).toLocaleString(undefined, dateOptions)

  return (
    <div className="ReviewTile-Container">
      <div className="rating"><StaticRating key={id} rating={rating}/></div>
      <div><PosterTag username={username} date={date}/></div>
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