import React, { useState, useEffect } from "react"

const ReviewModalCharacteristic = ( { characteristic, characteristicsObj, id, setCharacteristicsObj }) => {

  const [selection, setSelection] = useState(3) /// preset to 3 for demo

  const descriptors = {
    Size: ["A size too small", "1/2 a size too small", "Perfect", "1/2 a size too big", "A size too wide"],
    Width: ["Too Narrow", "Slightly Narrow", "Perfect", "Slightly wide", "Too wide"],
    Comfort: ["Uncomfortable", "Slightly uncomfortable", "Ok", "Comfortable", "Perfect"],
    Quality: ["Poor", "Below Average", "What I expected", "Pretty Great", "Perfect"],
    Length: ["Runs short", "Runs slightly short", "Perfect", "Runs slightly long", "Runs Long"],
    Fit: ["Runs tight", "Runs slightly tight", "Perfect", "Runs slightly long", "Runs long"]
  }

  let descriptorRendered = "None Selected"
  if (selection) {
    descriptorRendered = descriptors[characteristic][selection - 1]
  }

  useEffect(() => {
    if(selection) {
      setCharacteristicsObj({...characteristicsObj, [id]: selection})
    }
  }, [selection])

  return (
    <div>
      <div className='characteristic-header'>{characteristic}</div>
      <div className='characteristic-scale'>
        <div className='characteristic-scale-selected'>{descriptorRendered}</div>
        <div className='characteristic-scale-buttons'>
        {
          [...Array(5)].map((button, i) => {

            return (
              <label key={i}>
                <input
                  type="radio"
                  id={`${characteristic}-${i + 1}`}
                  name={characteristic}
                  value={i}
                  onClick={() => setSelection(i+1)}
                  checked={i === selection-1} // preset to option 3 checked for demo
                  onChange={() => selection = 1} // added so not console error during demo
                />
              </label>
            )
          })
        }
        </div>
        <div className='characteristic-scale-footer'>
          <div>{descriptors[characteristic][0]}</div>
          <div>{descriptors[characteristic][4]}</div>
        </div>
      </div>
    </div>
  )
}

export default ReviewModalCharacteristic
