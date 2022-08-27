import React from 'react';

const AContainer = ({body}) => {
  return (
    <div className='a-container'>
      <div className='uc-a'>A:</div>
      <div className='question'>{body}</div>
    </div>
  )
}

export default AContainer;