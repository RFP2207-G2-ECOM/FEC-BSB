import React, { useState, useEffect } from "react"

const ReviewModalEmail = ( { setEmail } ) => {

  const [emailText, setEmailText] = useState("")

  useEffect(() => {
    setEmail(emailText)
  }, [emailText])

  return (
    <>
      <div className="review-modal-section-header">Your email</div>
      <input
        type="text"
        value={emailText}
        onChange={(e) => setEmailText(e.target.value)}
      />
    </>
  )
}

export default ReviewModalEmail