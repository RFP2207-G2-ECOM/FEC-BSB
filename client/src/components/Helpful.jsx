import React, { useState, useEffect } from 'react';

const Helpful = ({helpful}) => {

  return (
    <>
      <div className='helpful'>Helpful?</div>
      <div className='yes-count'>Yes</div>
      <div className='helpful'>({helpful})</div>
      <div className='pipe'>|</div>
    </>
  )
}

export default Helpful;