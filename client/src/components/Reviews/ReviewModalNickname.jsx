import React, { useState, useEffect } from "react"

const ReviewModalNickname = ( { setNickname } ) => {

  const [nicknameText, setNicknameText] = useState("")

  useEffect(() => {
    setNickname(nicknameText)
  }, [nicknameText])

  return (
    <>
      <div>What is your nickname</div>
      <input
        type="text"
        value={nicknameText}
        onChange={(e) => setNicknameText(e.target.value)}
      />
    </>
  )
}

export default ReviewModalNickname