import React from 'react';
import StarsAndReviews from './ProductDetails/StarsAndReviews.jsx';
import NameAndCategory from './ProductDetails/NameAndCategory.jsx';
import Price from './ProductDetails/Price.jsx';

const ProductDetails = () => {
  return (
    <div className='Product-Details'>
      <NameAndCategory />
      <StarsAndReviews />
      <Price />

    </div>
  )
};

export default ProductDetails;

// Loads:
// Styles & Selector
// AddToCart
{/* <StylesAndSelector />
<AddToCart /> */}