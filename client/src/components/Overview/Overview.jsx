import React from 'react';
import ProductDisplay from './ProductDisplay.jsx';
import ProductDetails from './ProductDetails.jsx';
import BottomBar from './BottomBar.jsx';

import styles from '../../styles/Overview/Overview.css';

const Overview = () => {
  return (
    <div className='Overview'>

    <div className='Overview-Container'>
      <ProductDisplay />
      <ProductDetails />
    </div>
    <BottomBar />

    </div>
  )
};

export default Overview;