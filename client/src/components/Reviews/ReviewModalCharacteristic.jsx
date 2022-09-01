import React, { useState } from "react"

const ReviewModalCharacteristic = ( { characteristic }) => {

  const [selection, setSelection] = useState(null)
  const [hoverSelection, setHoverSelection] = useState(null)
  const [hovering, setHovering] = useState(false)

  const descriptors = {
    Size: ["A size too small", "1/2 a size too small", "Perfect", "1/2 a size too big", "A size too wide"],
    Width: ["Too Narrow", "Slightly Narrow", "Perfect", "Slightly wide", "Too wide"],
    Comfort: ["Uncomfortable", "Slightly uncomfortable", "Ok", "Comfortable", "Perfect"],
    Quality: ["Poor", "Below Average", "What I expected", "Pretty Great", "Perfect"],
    Length: ["Runs short", "Runs slightly short", "Perfect", "Runs slightly long", "Runs Long"],
    Fit: ["Runs tight", "Runs slightly tight", "Perfect", "Runs slightly long", "Runs long"]
  }

  return (
    <>
      <div>{characteristic}</div>
      <div>None Selected</div>
      {
        [...Array(5)].map((button, i) => {
          return (
            <label
              key={i}
            >
              <input
                type="radio"
                id={`${characteristic}-${i + 1}`}
                name={characteristic}
              />
            </label>
          )
        })
      }
    </>
  )
}

export default ReviewModalCharacteristic
