import React from 'react';
import StarsAndReviews from './ProductDetails/StarsAndReviews.jsx';
import NameAndCategory from './ProductDetails/NameAndCategory.jsx';
import Price from './ProductDetails/Price.jsx';
import StyleInfo from './ProductDetails/StyleInfo.jsx';
import StyleSelector from './ProductDetails/StyleSelector.jsx';
import AddToCart from './ProductDetails/AddToCart.jsx';

const ProductDetails = () => {
  return (
    <div className='Product-Details'>
      <NameAndCategory />
      <StarsAndReviews />
      <Price />
      <StyleInfo />
      <StyleSelector />
      <AddToCart />
    </div>
  )
};

export default ProductDetails;
