import React, {useState, useEffect, useContext} from "react";

const MoreReviewsButton = ({setReviewCount, ratingsCount}) => {

  const [visible, setVisible] = useState(true)

  const showAllReviews = () => {
    setReviewCount(4)
    if(!loading) {
      setVisible(false)
    }
  }

  return (
    <>
      { visible === true &&
        <button
          className="more-reviews-button"
          onClick={showAllReviews}
        >MORE REVIEWS</button>
      }
    </>
  )
}

export default MoreReviewsButton;