import React, { useContext } from 'react';
import { ProductContext } from '../../../contexts/product-info.context.jsx';
import FeatureAndMaterial from './FeatureAndMaterial.jsx';

const FeatureDescription = () => {
  const { product } = useContext(ProductContext);
  let features = product.features; // array of obj, each object has feature & value keys
  if (!features) {
    features = [];
  }
  if (features.length) {
    return (
      <div className='FeatureContainer'>
        <div className='FeatureAndMaterialTitle'>
          Features
        </div>
        <div className='FeatureDisplay'>
        {features.map((detail, index)=>{
          return (
            <div key={index}>
              <FeatureAndMaterial detail={detail} index={index} />
            </div>
          )
        })}
        </div>
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