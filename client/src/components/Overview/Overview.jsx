import React from 'react';
import ProductDisplay from './ProductDisplay.jsx';
import ProductDetails from './ProductDetails.jsx';

import styles from '../../styles/Overview/Overview.css';

const Overview = () => {
  return (
    <div class='Overview-Container'>
      <div class='Layout Product-Display'>
      <p>Product Display will go here</p>
      </div>
      <div class='Layout Product-Details'>
      <ProductDetails />
      <p>Product Details will go here</p>
      </div>
    </div>
  )
};

export default Overview;

// ProductDisplay
// ProductDetails