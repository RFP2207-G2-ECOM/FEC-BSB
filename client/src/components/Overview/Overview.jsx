import React from 'react';
import ProductDisplay from './ProductDisplay.jsx';
import ProductDetails from './ProductDetails.jsx';

import styles from '../../styles/Overview/Overview.css';

const Overview = () => {
  return (
    <div class='Overview-Container'>
      <ProductDisplay />
      <ProductDetails />
    </div>
  )
};

export default Overview;

// ProductDisplay
// ProductDetails