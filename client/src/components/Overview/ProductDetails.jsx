import React from 'react';
import StarsAndReviews from './ProductDetails/StarsAndReviews.jsx';
import NameAndCategory from './ProductDetails/NameAndCategory.jsx';
import StyleContainer from './ProductDetails/StyleContainer.jsx';

const ProductDetails = () => {
  return (
    <div className='Product-Details'>
      <NameAndCategory />
      <StarsAndReviews />
      <StyleContainer />
    </div>
  )
};

export default ProductDetails;