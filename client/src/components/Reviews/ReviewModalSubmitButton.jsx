import React from "react"

const ReviewModalSubmitButton = ( { setSubmitPressed }) => {

  return (
    <>
      <button className='button1' onClick={() => setSubmitPressed(true)}>Submit review</button>
    </>
  )
}

export default ReviewModalSubmitButton