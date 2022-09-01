import React, { useState, useEffect } from "react"
import ReactDom from "react-dom"

import ReviewModalStarRating from "./ReviewModalStarRating.jsx"
import ReviewModalRecommended from "./ReviewModalRecommended.jsx"

import styles from "../../styles/Reviews/reviewModal.css"

const ReviewModal = ({ open, onClose, productName }) => {

  const [starRating, setStarRating] = useState(null)
  const [recommended, setRecommended] = useState(null)
  const [characteristics, setCharacteristics] = useState({})
  const [reviewSummary, setReviewSummary] = useState("")
  const [reviewBody, setReviewBody] = useState("")
  const [photos, setPhotos] = useState([])
  const [nickname, setNickname] = useState("")
  const [email, setEmail] = useState("")

  useEffect(() => {

  console.log('recommended changed!', recommended)
  },[recommended])

  if(!open) return null

  return ReactDom.createPortal (
    <>
      <div className="overlay-styles"></div>
      <div className="review-modal-styles">
        <div>Write Your Review</div>
        <div>{`About the ${productName}`}</div>
        <div>
          <div>Overall rating</div>
          <ReviewModalStarRating
            setStarRating={setStarRating}
          />
        </div>
        <div>
          <div>Do you recommend this product?</div>
          <ReviewModalRecommended
            setRecommended={setRecommended}
          />
        </div>
        <div>Charateristics</div>
        <div className="review-modal-summary">
          <div>Review Summary</div>
          <input
            type="text"
            maxLength="60"
            placeholder="Example: Best purchase ever!"
          >
          </input>
        </div>
        <div>
          <div>Review Body</div>
          <input
            type="text"
            minLength="50"
            placeholder="Why did you like the product or not?"
          >
          </input>
          <div>Minimum required characters left: ##</div>
        </div>
        <div>Upload your photos</div>
        <div>What is your nickname</div>
        <div>Your email</div>
        <button onClick={onClose}>Submit review</button>
        <button onClick={onClose}>Cancel</button>
      </div>
    </>,
    document.getElementById('portal')
  )
}

export default ReviewModal