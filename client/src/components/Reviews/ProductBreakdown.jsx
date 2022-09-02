import React, { useState, useEffect, useContext } from "react"

import { ProductReviewsContext } from "../../contexts/product-reviews.context.jsx"

import ProductBreakdownCharacteristic from "./ProductBreakdownCharacteristic.jsx"

import styles from "../../styles/Reviews/productBreakdown.css";

const ProductBreakdown = () => {

  let { metadata } = useContext(ProductReviewsContext)
  let characteristics = {...metadata.characteristics}

  console.log('this is metadata', characteristics)

  return (
    <div className="ProductBreakdown-Container">
      {Object.keys(characteristics).map((characteristic, i) =>
        <ProductBreakdownCharacteristic
          key={i}
          characteristic={characteristic}
        />
      )}
    </div>
  )
}


export default ProductBreakdown