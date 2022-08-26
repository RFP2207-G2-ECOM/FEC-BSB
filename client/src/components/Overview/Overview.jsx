import React from 'react';
import TopBar from './TopBar.jsx';

import ProductDisplay from './ProductDisplay.jsx';
import ProductDetails from './ProductDetails.jsx';
import BottomBar from './BottomBar.jsx';

import styles from '../../styles/Overview/Overview.css';

const Overview = () => {
  // Include TopBar with Logo and Search Bar
  return (
    <div className='Overview'>
    <TopBar />
    <div className='Overview-Container'>
      <ProductDisplay />
      <ProductDetails />
    </div>
    <BottomBar />

    </div>
  )
};

export default Overview;