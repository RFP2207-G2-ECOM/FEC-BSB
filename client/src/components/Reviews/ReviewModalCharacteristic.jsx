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

  /// don't forget to add 1 to selection when you set state for characteristics

  return (
    <>
      <div>{characteristic}</div>
      <div>None Selected</div>
      {
        [...Array(5)].map((button, i) => {
          let checkedOption = false
          if (hovering) {
            hoverSelection === i ? checkedOption = true : checkedOption = false
          } else if (selection) {
            selection === i ? checkedOption = true : checkedOption = false
          }

          return (
            <label
              key={i}
              onMouseOver={() => setHoverSelection(i)}
              onMouseEnter={() => setHovering(true)}
              onMouseLeave={() => setHovering(false)}
            >
              <input
                type="radio"
                id={`${characteristic}-${i + 1}`}
                name={characteristic}
                checked={checkedOption}
                onChange={() => setSelection(i)}
              />
            </label>
          )
        })
      }
    </>
  )
}

export default ReviewModalCharacteristic
