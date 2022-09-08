import React from "react"
import { GoPlus } from "react-icons/go";

const AddReviewButton = ({ moreReviews, setModalOpen }) => {

  let style
  moreReviews ? style = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    border: '1px solid black',
    backgroundColor: 'white',
    padding: '5px',
    fontWeight: 'bold',
  } : style = {}

  return (
    <>
      <button
        className="add-a-review-button button1"
        style={style}
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