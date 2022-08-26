import React, { useState } from "react"
import { MdStar } from "react-icons/md"

import styles from "../../styles/Reviews/starRating.css"

const StarRating = () => {
  const [rating, setRating] = useState(null)

  return (
    <div>
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1

        return (
          <label>
            <input
              type='radio'
              name='rating'
              value={ratingValue}
              onClick={() => setRating(ratingValue)}
            />
            <MdStar
              className="star"
              color={ratingValue <= rating ? "0000ff" : "#808080"}
            />
          </label>
        )
      })}
    </div>
  )
}

export default StarRating