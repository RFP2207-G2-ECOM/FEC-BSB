import React from 'react';
import FeatureDescription from './BottomBar/FeatureDescription.jsx';
import ProductDescription from './BottomBar/ProductDescription.jsx';
import SocialMediaButtons from './BottomBar/SocialMediaButtons.jsx';

const BottomBar = () => {

  return(
    <div className='BottomBar'>
        <FeatureDescription />
        <ProductDescription />
        <SocialMediaButtons />
    </div>
    )
}

export default BottomBar;