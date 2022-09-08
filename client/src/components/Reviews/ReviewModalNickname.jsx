import React, { useState, useEffect } from "react"

const ReviewModalNickname = ( { setNickname } ) => {

  const [nicknameText, setNicknameText] = useState("backstreetFan1992") // preset added for product demo

  useEffect(() => {
    setNickname(nicknameText)
  }, [nicknameText])

  return (
    <>
      <div className="review-modal-section-header">What is your nickname</div>
      <input
        type="text"
        value={nicknameText}
        onChange={(e) => setNicknameText(e.target.value)}
      />
    </>
  )
}

export default ReviewModalNickname