import React, { useState, useEffect } from "react"

const ReviewModalNickname = ( { setNickname } ) => {

  const [nicknameText, setNicknameText] = useState('')

  useEffect(() => {
    setNickname(nicknameText)
  }, [nicknameText])

  return (
    <>
      <div className="review-modal-section-header">What is your nickname</div>
      <input
        type="text"
        value={nicknameText}
        className='review-modal-nickname-input'
        onChange={(e) => setNicknameText(e.target.value)}
      />
    </>
  )
}

export default ReviewModalNickname