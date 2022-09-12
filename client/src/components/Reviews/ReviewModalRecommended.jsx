import React, { useState, useEffect } from "react"

const ReviewModalRecommended = ( { setRecommended } ) => {

  const [selectedOption, setSelectedOption] = useState(null)

  useEffect(() => {
    setRecommended(selectedOption)
  }, [selectedOption])

  return (
    <div className="review-modal-recommend-options">
      <div>
        <label htmlFor="review-modal-radio-yes">Yes</label>
        <input
          type="radio"
          id="review-modal-radio-yes"
          name="recommend"
          value="yes"
          checked={selectedOption === true}
          onChange={() => setSelectedOption(true)}
        />
      </div>
      <div>
        <label htmlFor="review-modal-radio-no">No</label>
        <input
          type="radio"
          id="review-modal-radio-no"
          name="recommend"
          value="no"
          checked={selectedOption === false}
          onChange={() => setSelectedOption(false)}
        />
      </div>
    </div>
  )
}

export default ReviewModalRecommended