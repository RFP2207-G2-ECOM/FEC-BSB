import React from 'react';
import FeatureAndMaterial from './FeatureAndMaterial.jsx';

const FeatureContainer = (props) => {
  let features = props.features;
  return(
    <div className='FeatureDisplay'>
      {features.map((detail, index)=>{
        return (
          <div key={index}>
            <FeatureAndMaterial detail={detail} index={index} />
            <div className='FeatureSpacer'></div>
          </div>
        )
      })}
    </div>
  )
}

export default FeatureContainer;