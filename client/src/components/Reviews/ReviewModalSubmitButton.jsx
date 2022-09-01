import React from "react"

const ReviewModalSubmitButton = ( { setSubmitPressed }) => {

  return (
    <>
      <button onClick={() => setSubmitPressed(true)}>Submit review</button>
    </>
  )
}

export default ReviewModalSubmitButton