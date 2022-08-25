import React from "react"
import ReviewTile from "./ReviewTile.jsx"

class ReviewsList extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        This is the list of Reviews!
        <div>
          <ReviewTile />
        </div>
      </div>
    )
  }
}


export default ReviewsList