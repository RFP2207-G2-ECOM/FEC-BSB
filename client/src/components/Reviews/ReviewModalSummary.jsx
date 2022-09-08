import React, { useState, useEffect } from "react"

const ReviewModalSummary = ( { setReviewSummary } ) => {

  const [summaryText, setSummaryText] = useState("WOW! what a fantastic product!!") /// added preset for product demo

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
        onChange={(e) => setSummaryText(e.target.value)}
      >
      </input>
    </>
  )
}

export default ReviewModalSummary