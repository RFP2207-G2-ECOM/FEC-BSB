import React from 'react';
import FeatureDescription from './BottomBar/FeatureDescription.jsx';
import ProductDescription from './BottomBar/ProductDescription.jsx';
import SocialMediaButtons from './BottomBar/SocialMediaButtons.jsx';

const BottomBar = () => {

  return(
    <div className='BottomBar'>
        <SocialMediaButtons />
        <ProductDescription />
        <FeatureDescription />
    </div>
    )
}

export default BottomBar;