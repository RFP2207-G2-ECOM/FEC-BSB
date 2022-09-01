import React, { useState } from "react"
import ReactDom from "react-dom"

import styles from "../../styles/Reviews/reviewModal.css"

const ReviewModal = ({ open, onClose }) => {
  if(!open) return null

  return ReactDom.createPortal (
    <>
      <div className="overlay-styles"></div>
      <div className="review-modal-styles">
        <div>This is the review modal!</div>
        <button onClick={onClose}>Close Modal</button>
      </div>
    </>,
    document.getElementById('portal')
  )
}

export default ReviewModal