import React, { useState, useEffect, useContext } from "react"

import { ProductReviewsContext } from "../../contexts/product-reviews.context.jsx"

import ReviewModalCharacteristic from "./ReviewModalCharacteristic.jsx"

const ReviewModalCharacteristicsList = () => {

  let { metadata } = useContext(ProductReviewsContext)
  let characteristics = {...metadata.characteristics}

  console.log('characteristics:', Object.keys(characteristics))

  return (
    <>
      {Object.keys(characteristics).map((characteristic, i) =>
         <ReviewModalCharacteristic
          key={i}
          characteristic={characteristic}
        />
        // return <div key={i}>{characteristic}</div>
      )}
    </>
  )
}

export default ReviewModalCharacteristicsList