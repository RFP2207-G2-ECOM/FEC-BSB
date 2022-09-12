import React, { useState, useEffect } from "react"

const ReviewModalSummary = ( { setReviewSummary } ) => {

  const [summaryText, setSummaryText] = useState('')

  useEffect(() => {
    setReviewSummary(summaryText)
  }, [summaryText])

  return (
    <>
      <div className="review-modal-section-header">Review Summary</div>
      <input
        type="text"
        maxLength="60"
        placeholder="Example: Best purchase ever!"
        value={summaryText}
        className='review-modal-summary-input'
        onChange={(e) => setSummaryText(e.target.value)}
      >
      </input>
    </>
  )
}

export default ReviewModalSummary