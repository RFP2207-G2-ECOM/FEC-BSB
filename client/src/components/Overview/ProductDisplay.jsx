import React from 'react';
import PictureSelector from './ProductDisplay/PictureSelector.jsx';
import SelectedPicture from './ProductDisplay/SelectedPicture.jsx';

const ProductDisplay = () => {
  return (
    <div class='Layout Product-Display'>
      <PictureSelector />
      <SelectedPicture />
    </div>
  )
};

export default ProductDisplay;
// Stores the state

// Loads:
// SelectedPicture
// PictureSelectorWheel