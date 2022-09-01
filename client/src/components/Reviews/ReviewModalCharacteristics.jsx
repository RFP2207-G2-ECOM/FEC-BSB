import React, { useState, useEffect, useContext } from "react"

import { ProductReviewsContext } from "../../contexts/product-reviews.context.jsx"

const ReviewModalCharacteristics = () => {

  let { metadata } = useContext(ProductReviewsContext)
  let characteristics = {...metadata.characteristics}

  console.log('characteristics:', Object.keys(characteristics))

  return (
    <>
      {Object.keys(characteristics).map((characteristic, i) => {
        return <div key={i}>{characteristic}</div>
      })}
    </>
  )
}

export default ReviewModalCharacteristics