import React from 'react';

import AddAnswer from './AddAnswer.jsx';
import Helpful from './Helpful.jsx';

const QContainer = () => {

  return (
    <div className='q-container'>
      <div className='q-or-a'>Q:</div>
      <div className='question'>This is a test question?</div>
      <Helpful />
      <AddAnswer />
    </div>
  )
}

export default QContainer;