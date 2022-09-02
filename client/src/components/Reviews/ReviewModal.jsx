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

  const [starRating, setStarRating] = useState(null)
  const [recommended, setRecommended] = useState(null)
  const [characteristics, setCharacteristics] = useState({})
  const [reviewSummary, setReviewSummary] = useState(null)
  const [reviewBody, setReviewBody] = useState(null)
  const [photos, setPhotos] = useState([])
  const [nickname, setNickname] = useState(null)
  const [email, setEmail] = useState(null)
  const [submitPressed, setSubmitPressed] = useState(false)
  const [files, setFiles] = useState([])

  const {
    loading, error
  } = useReviewSubmit(onClose, submitPressed, setSubmitPressed, starRating, recommended, characteristics, reviewSummary, reviewBody, photos, nickname, email)

  useEffect(() => {
    console.log('files:', files)
  }, [files])

  if(!open) return null

  return ReactDom.createPortal (
    <>
      <div className="overlay-styles" onClick={onClose}></div>
      <div className="review-modal-styles Review-Modal-Container">
        <div className="review-modal-header">
          <h1>Write Your Review</h1>
          <h2>{`About the ${productName}`}</h2>
        </div>
        <div className="review-modal-star-rating">
          <div className="review-modal-section-header">Overall rating</div>
          <ReviewModalStarRating
            setStarRating={setStarRating}
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
            onChange={(e) => setFiles(e.target.value)}
          />
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