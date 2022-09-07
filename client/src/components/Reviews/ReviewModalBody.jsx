import React, { useState, useEffect } from "react"

const ReviewModalBody = ( { setReviewBody } ) => {

  const [bodyText, setBodyText] = useState("")

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