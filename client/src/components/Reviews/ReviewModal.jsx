import React, { useEffect, useState } from "react"
import ReactDom from "react-dom"
import { ImCross } from "react-icons/im";

import ReviewModalBody from "./ReviewModalBody.jsx"
import ReviewModalCharacteristicsList from "./ReviewModalCharacteristicsList.jsx"
import ReviewModalEmail from "./ReviewModalEmail.jsx"
import ReviewModalNickname from "./ReviewModalNickname.jsx"
import ReviewModalRecommended from "./ReviewModalRecommended.jsx"
import ReviewModalStarRating from "./ReviewModalStarRating.jsx"
import ReviewModalSubmitButton from "./ReviewModalSubmitButton.jsx"
import ReviewModalSummary from "./ReviewModalSummary.jsx"
import useReviewSubmit from "./useReviewSubmit.js"

import styles from "../../styles/Reviews/reviewModal.css"

const ReviewModal = ({ open, onClose, productName }) => {

  const [characteristics, setCharacteristics] = useState({})
  const [email, setEmail] = useState(null)
  const [files, setFiles] = useState([])
  const [nickname, setNickname] = useState(null)
  const [recommended, setRecommended] = useState(null)
  const [reviewBody, setReviewBody] = useState(null)
  const [reviewSummary, setReviewSummary] = useState(null)
  const [starRating, setStarRating] = useState(null)
  const [submitPressed, setSubmitPressed] = useState(false)

  const { loadingModal, error } = useReviewSubmit(
    characteristics,
    onClose,
    email,
    files,
    nickname,
    recommended,
    reviewBody,
    reviewSummary,
    setSubmitPressed,
    starRating,
    submitPressed
  )

  if(!open) return null

  return ReactDom.createPortal (
    <>
      <div className="overlay-styles" onClick={onClose}></div>
      <div className="review-modal-styles Review-Modal-Container review-modal-class">
        <div className="review-modal-header">
          <h1>Write Your Review</h1>
          <h2>{`About the ${productName}`}</h2>
        </div>
        <div className="review-modal-star-rating">
          <div className="review-modal-section-header">Overall rating</div>
          <ReviewModalStarRating
            setStarRating={setStarRating}
            error={error}
          />
        </div>
        <div>
          <div className="review-modal-section-header">Do you recommend this product?</div>
          <ReviewModalRecommended
            setRecommended={setRecommended}
          />
        </div>
        <div className='review-modal-characteristics'>
          <div className="review-modal-section-header">Charateristics</div>
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
        <div className='review-modal-photos'>
          <div className='review-modal-section-header'>Upload Photos</div>
          <input
            label='photoUpload'
            type='file'
            multiple
            onChange={(e) => setFiles([...e.target.files])}
          />
          <div className='review-modal-photo-subText'>You can upload up to five photos</div>
        </div>
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
        <ReviewModalSubmitButton
          setSubmitPressed={setSubmitPressed}
        />
        <span className='review-modal-exit-icon' onClick={onClose}><ImCross /></span>
      </div>
    </>,
    document.getElementById('portal')
  )
}

export default ReviewModal