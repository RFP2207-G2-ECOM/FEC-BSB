import React from 'react';

import Helpful from '../Helpful.jsx';
import Report from './Report.jsx';

const ResponseInfo = () => {

  return (
    <div className='r-info-container'>
      <div className='user-info'>by User1337, May 1, 2019</div>
      <div className='pipe'>|</div>
      <Helpful />
      <Report />
    </div>
  )
}

export default ResponseInfo;