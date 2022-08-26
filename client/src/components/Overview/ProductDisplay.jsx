import React from 'react';
import PictureSelector from './ProductDisplay/PictureSelector.jsx';
import PictureDisplay from './ProductDisplay/PictureDisplay.jsx';

const ProductDisplay = () => {
  return (
    <div className='Layout Product-Display'>
      <PictureSelector />
      <PictureDisplay />
    </div>
  )
};

export default ProductDisplay;
// Stores the state

// Loads:
// SelectedPicture
// PictureSelectorWheel