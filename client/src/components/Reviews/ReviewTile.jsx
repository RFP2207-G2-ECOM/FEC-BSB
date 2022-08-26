import React from "react"

const ReviewTile = ({ rating, username, date, summary, body, recommend, response, helpfulness }) => {

  return (
    <div className="ReviewTile-Container">
      <div className="rating">{rating} Stars!</div>
      <div>{username}, {date}</div>
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