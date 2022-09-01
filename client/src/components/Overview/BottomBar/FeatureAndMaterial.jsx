import React from 'react';

const FeatureAndMaterial = ({detail, index}) =>  {

  if (detail.feature && detail.value) {
    return (
      <div key={index} className='FeatureAndMaterial'>
        <p className='Feature-Spacer'></p>
        <div key={0} className='Feature'>
          {detail.feature}:
        </div>
        <p className='FeatureMaterialSpacer'></p>
        <div key={1} className='Material'>
          {detail.value}
        </div>
        <p className='Feature-Spacer'></p>
      </div>
    )
  } else if (detail.feature && !detail.value) {
    return (
      <div key={index} className='FeatureNoMaterial'>
        <p className='Feature-Spacer'></p>
        <div key={0} className='Material'>
          {detail.feature}
        </div>
        <p className='Feature-Spacer'></p>
      </div>
    )
  } else if (!detail.feature && detail.value) {
    return (
      <div key={index} className='MaterialNoFeature'>
        <p className='Feature-Spacer'></p>
        <div key={1} className='Material'>
          {detail.value}
        </div>
        <p className='Feature-Spacer'></p>
      </div>
    )
  } else if (!detail.freature && !detail.value) {
    return;
  }
}

export default FeatureAndMaterial;