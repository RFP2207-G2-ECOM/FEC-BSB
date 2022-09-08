import React, { useState, useEffect } from "react"
import { MdStar } from "react-icons/md"

import styles from "../../styles/Reviews/starRating.css"

const ReviewModalStarRating = ( { setStarRating } ) => {
  const [rating, setRating] = useState(4) /// preset to 4 for demo
  const [hoverRating, setHoverRating] = useState(null)
  const [hovering, setHovering] = useState(false)

  const descriptors = [
    "Poor",
    "Fair",
    "Average",
    "Good",
    "Great"
  ]

  let descriptorRendered
  let style
  if (hovering) {
    descriptorRendered = descriptors[hoverRating -1]
    style={visibility: 'visible'}
  } else if (rating) {
    descriptorRendered = descriptors[rating - 1]
    style={visibility: 'visible'}
  } else {
    descriptorRendered = "whitespace"
    style={visibility: 'hidden'}
  }

  useEffect(() => {
    setStarRating(rating)
  }, [rating])

  return (
    <div>
      <div>
        {[...Array(5)].map((star, i) => {
          const ratingValue = i + 1

          let starsFilled = "#ccc"
          if (hovering) {
            ratingValue <= hoverRating ? starsFilled = "000" : starsFilled = "#ccc"
          } else if (rating) {
            ratingValue <= rating ? starsFilled = "000" : starsFilled = "#ccc"
          }

          return (
            <label
              onMouseOver={() => setHoverRating(ratingValue)}
              onMouseEnter={() => setHovering(true)}
              onMouseLeave={() => setHovering(false)}
              key={ratingValue}
            >
              <input
                className='modalStar'
                type='radio'
                name='rating'
                value={ratingValue}
                onClick={() => setRating(ratingValue)}
              />
              <MdStar
                className="modalStar"
                color={starsFilled}
              />
            </label>
          )
        })}
      </div>
      {
        <div style={style}>{descriptorRendered}</div>
      }
    </div>
  )
}

export default ReviewModalStarRating