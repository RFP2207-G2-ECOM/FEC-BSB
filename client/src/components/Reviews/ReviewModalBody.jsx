import React, { useState, useEffect } from "react"

const ReviewModalBody = ( { setReviewBody } ) => {

  const [bodyText, setBodyText] = useState("This is truly a life-changing product. I cannot express in simple words how much I love this thing. If I could only make a small change, I\'d ask that it come with a pepperoni pizza") /// preset added for product demo

  let charactersLeft
  bodyText.length >= 50 ? charactersLeft = 0 : charactersLeft = 50 - bodyText.length

  useEffect(() => {
    setReviewBody(bodyText)
  }, [bodyText])

  return (
    <>
      <div className="review-modal-section-header">Review Body</div>
      <textarea
        className='review-modal-body-input'
        type="text"
        minLength="50"
        placeholder="Why did you like the product or not?"
        value={bodyText}
        onChange={(e) => setBodyText(e.target.value)}
      >
      </textarea>
      <div className='review-modal-body-subText'>{`Minimum required characters left: ${charactersLeft}`}</div>
    </>
  )
}

export default ReviewModalBody