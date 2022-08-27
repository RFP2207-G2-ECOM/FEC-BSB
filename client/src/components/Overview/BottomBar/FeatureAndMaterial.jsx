import React from 'react';

const FeatureAndMaterial = ({detail, index}) =>  {
  return (
    <div key={index} className='FeatureAndMaterial'>
      <div key={0} className='Feature'>
        {detail.feature}
      </div>
      <div key={1} className='Material'>
        {detail.value}
      </div>
  </div>
  )
}

export default FeatureAndMaterial;