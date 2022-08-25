import React from "react"

class ReviewTile extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="ReviewTile-Container">
        <div>stars</div>
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


}



export default ReviewTile