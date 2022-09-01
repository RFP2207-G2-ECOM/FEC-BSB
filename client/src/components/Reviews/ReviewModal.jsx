import React, { useState, useEffect } from "react"
import ReactDom from "react-dom"

import ReviewModalBody from "./ReviewModalBody.jsx"
import ReviewModalCharacteristicsList from "./ReviewModalCharacteristicsList.jsx"
import ReviewModalEmail from "./ReviewModalEmail.jsx"
import ReviewModalNickname from "./ReviewModalNickname.jsx"
import ReviewModalRecommended from "./ReviewModalRecommended.jsx"
import ReviewModalStarRating from "./ReviewModalStarRating.jsx"
import ReviewModalSummary from "./ReviewModalSummary.jsx"
import useReviewSubmit from "./useReviewSubmit.js"

import styles from "../../styles/Reviews/reviewModal.css"

const ReviewModal = ({ open, onClose, productName }) => {

  const [starRating, setStarRating] = useState(null)
  const [recommended, setRecommended] = useState(null)
  const [characteristics, setCharacteristics] = useState({})
  const [reviewSummary, setReviewSummary] = useState(null)
  const [reviewBody, setReviewBody] = useState(null)
  const [photos, setPhotos] = useState([])
  const [nickname, setNickname] = useState(null)
  const [email, setEmail] = useState(null)
  const [submitPressed, setSubmitPressed] = useState(false)

  const {
    loading, error
  } = useReviewSubmit(submitPressed, starRating, recommended, characteristics, reviewSummary, reviewBody, photos, nickname, email
  )

  useEffect(() => {
  console.log('email changed!', email)
  },[email])

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
        <div>
          <div>Charateristics</div>
          <ReviewModalCharacteristicsList
            setCharacteristics={setCharacteristics}
          />
        </div>
        <div className="review-modal-summary">
          <ReviewModalSummary
            setReviewSummary={setReviewSummary}
          />
        </div>
        <div className="review-modal-body">
          <ReviewModalBody
            setReviewBody={setReviewBody}
          />
        </div>
        <div>Upload your photos</div>
        <div className="review-modal-nickname">
          <ReviewModalNickname
            setNickname={setNickname}
          />
        </div>
        <div>
          <ReviewModalEmail
            setEmail={setEmail}
          />
        </div>
        <button onClick={onClose}>Submit review</button>
        <button onClick={onClose}>Cancel</button>
      </div>
    </>,
    document.getElementById('portal')
  )
}

export default ReviewModal