import React from 'react';

const FeatureAndMaterial = ({detail, index}) =>  {

  if (detail.feature && detail.value) {
    return (
      <div key={index} className='FeatureAndMaterial'>
        <div className='Feature'>{detail.feature}:</div>
        <div className='Material'>{detail.value}</div>
      </div>
    )
  } else if (detail.feature && !detail.value) {
    return (
      <div key={index} className='FeatureAndMaterial'>
        <div className='Material'>{detail.feature}</div>
      </div>
    )
  } else if (!detail.feature && detail.value) {
    return (
      <div key={index} className='FeatureAndMaterial'>
        <div className='Material'>{detail.value}</div>
      </div>
    )
  } else if (!detail.freature && !detail.value) {
    return;
  }
}

export default FeatureAndMaterial;