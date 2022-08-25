import React from "react"
import ReviewsList from "./ReviewsList.jsx"
import RatingsBreakdown from "./RatingsBreakdown.jsx"
import ProductBreakdown from "./ProductBreakdown.jsx"
import styles from "../../styles/Reviews/reviews.css"

class RatingsReviews extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    console.log(process.env.REACT_APP_github_token)
  }

  render() {
    return (
      <div className="RR-Container">
        <div className="rr-title">RATINGS & REVIEWS</div>
        <div className="Module-Container">
          <div className="Breakdown-Container">
            <RatingsBreakdown />
            <ProductBreakdown />
          </div>
          <ReviewsList />
        </div>
      </div>
    )
  }

}

export default RatingsReviews