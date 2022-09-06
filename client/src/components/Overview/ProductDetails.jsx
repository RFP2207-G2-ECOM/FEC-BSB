import React from 'react';
import StarsAndReviews from './ProductDetails/StarsAndReviews.jsx';
import NameAndCategory from './ProductDetails/NameAndCategory.jsx';
import StyleInfo from './ProductDetails/StyleInfo.jsx';
import StyleSelector from './ProductDetails/StyleSelector.jsx';
import AddToCart from './ProductDetails/AddToCart.jsx';


const ProductDetails = () => {
  return (
    <div className='Product-Details'>
      <NameAndCategory />
      <StarsAndReviews />
      <StyleInfo/>
      <StyleSelector />
      <AddToCart />
    </div>
  )
};

export default ProductDetails;