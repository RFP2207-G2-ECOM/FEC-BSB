import React, { useState, useEffect, useContext } from "react"

import { ProductReviewsContext } from "../../contexts/product-reviews.context.jsx"

import ReviewModalCharacteristic from "./ReviewModalCharacteristic.jsx"

const ReviewModalCharacteristicsList = ( { setCharacteristics }) => {

  let { metadata } = useContext(ProductReviewsContext)
  let characteristicValues = {...metadata.characteristics}

  const [characteristicsObj, setCharacteristicsObj] = useState({})

  useEffect(() => {
    setCharacteristics(characteristicsObj)
  }, [characteristicsObj])

  return (
    <>
      {Object.keys(characteristicValues).map((characteristic, i) =>
         <ReviewModalCharacteristic
          key={i}
          characteristic={characteristic}
          id={characteristicValues[characteristic].id}
          characteristicsObj={characteristicsObj}
          setCharacteristicsObj={setCharacteristicsObj}
        />
        // return <div key={i}>{characteristic}</div>
      )}
    </>
  )
}

export default ReviewModalCharacteristicsList