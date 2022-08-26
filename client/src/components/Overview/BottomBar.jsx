import React from 'react';
import ProductDescription from './BottomBar/ProductDescription.jsx'
import SocialMediaButtons from './BottomBar/SocialMediaButtons.jsx';

const BottomBar = () => {

  return(
    <div className='BottomBar'>
        <ProductDescription />
        <SocialMediaButtons />
    </div>
    )
}

export default BottomBar;