import React from 'react';
import ProductDisplay from './ProductDisplay.jsx';
import ProductDetails from './ProductDetails.jsx';
import SocialMediaButtons from './SocialMediaButtons.jsx';

import styles from '../../styles/Overview/Overview.css';

const Overview = () => {
  return (
    <div className='Overview'>

    <div className='Overview-Container'>
      <ProductDisplay />
      <ProductDetails />
    </div>

    <div className='SMB'>
        <div className='BtnSpacer'>

        </div>
        <SocialMediaButtons />
    </div>
    </div>
  )
};

export default Overview;