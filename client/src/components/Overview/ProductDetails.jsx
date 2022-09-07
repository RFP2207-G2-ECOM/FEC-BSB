import React from 'react';
import StarsAndReviews from './ProductDetails/StarsAndReviews.jsx';
import NameAndCategory from './ProductDetails/NameAndCategory.jsx';
import StyleInfo from './ProductDetails/StyleInfo.jsx';
import StyleSelector from './ProductDetails/StyleSelector.jsx';
import AddToCart from './ProductDetails/AddToCart.jsx';
import ProductDescription from './ProductDetails/ProductDescription.jsx'
import FeatureDescription from './ProductDetails/FeatureDescription.jsx';
import SocialMediaButtons from './ProductDetails/SocialMediaButtons.jsx';


const ProductDetails = () => {
  return (
    <div className='Product-Details'>
      <NameAndCategory />
      <StarsAndReviews />
      <StyleInfo/>
      <StyleSelector />
      <AddToCart />
      <ProductDescription />
      <FeatureDescription />
      <SocialMediaButtons />
    </div>
  )
};

export default ProductDetails;