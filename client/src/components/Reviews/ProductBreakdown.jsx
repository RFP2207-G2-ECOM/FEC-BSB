import React, { useState, useEffect, useContext } from "react"

import { ProductReviewsContext } from "../../contexts/product-reviews.context.jsx"

import ProductBreakdownCharacteristic from "./ProductBreakdownCharacteristic.jsx"

import styles from "../../styles/Reviews/productBreakdown.css";

const ProductBreakdown = () => {

  let { metadata } = useContext(ProductReviewsContext)
  let characteristicsObj = {...metadata.characteristics}

  console.log('this is metadata', metadata)

  return (
    <div className="ProductBreakdown-Container">
      {Object.keys(characteristicsObj).map((characteristic, i) =>
        <ProductBreakdownCharacteristic
          key={i}
          characteristic={characteristic}
          characteristicsObj={characteristicsObj}
        />
      )}
    </div>
  )
}


export default ProductBreakdown