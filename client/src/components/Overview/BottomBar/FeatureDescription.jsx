import React, { useContext } from 'react';
import { ProductContext } from '../../../contexts/product-info.context.jsx';
import FeatureContainer from './FeatureContainer.jsx';
import FeatureTitle from './FeatureTitle.jsx';

const FeatureDescription = () => {
  const { product } = useContext(ProductContext);
  let features = product.features; // array of obj, each object has feature & value keys
  if (!features) {
    features = [];
  }
  if (features.length) {
    return (
      <div className='FeatureContainer'>
        <FeatureTitle/>
        <FeatureContainer features={features}/>
      </div>
    );
  } else {
    return;
  }
}

export default FeatureDescription;

{/* <div key={index} className='FeatureAndMaterial'>
<div className='Feature'>
  {obj.feature}
</div>
<div className='Material'>
  {obj.value}
</div>
</div> */}