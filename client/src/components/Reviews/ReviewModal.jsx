import React, { useState } from "react"
import ReactDOM from "react-dom"

import styles from "../../styles/Reviews/reviewModal.css"

const ReviewModal = ({ open, onClose }) => {
  if(!open) return null

  return (
    <div
    >This is the review modal!
      <button onClick={onClose}>Close Modal</button>
    </div>
  )
}

export default ReviewModal