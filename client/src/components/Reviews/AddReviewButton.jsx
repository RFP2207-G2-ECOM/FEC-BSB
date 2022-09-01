import React from "react"

const AddReviewButton = ({ setModalOpen }) => {
  return (
    <>
      <button
        className="add-a-review-button"
        onClick={() => setModalOpen(true)}
      >ADD A REVIEW
      </button>
    </>
  )
}

export default AddReviewButton