import React from "react"
import { GoPlus } from "react-icons/go";

const AddReviewButton = ({ moreReviews, setModalOpen }) => {

  return (
    <>
      <button
        className="add-a-review-button button1"
        onClick={() => setModalOpen(true)}
      >
        <span className='add-a-review-text'>
          <span>ADD A REVIEW</span>
          <span className='add-a-review-icon'><GoPlus /></span>
        </span>
      </button>
    </>
  )
}

export default AddReviewButton