import React from 'react';

import Helpful from '../Helpful.jsx';
import Report from './Report.jsx';

const AInfo = () => {

  return (
    <div className='a-info-container'>
      <div className='user-info'>by User1337, May 1, 2019</div>
      <div className='pipe'>|</div>
      <Helpful />
      <Report />
    </div>
  )
}

export default AInfo;