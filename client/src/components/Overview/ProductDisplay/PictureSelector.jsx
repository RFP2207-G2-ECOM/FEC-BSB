import React from 'react';
import ScrollUpArrow from './PictureSelector/ScrollUpArrow.jsx';
import ScrollDownArrow from './PictureSelector/ScrollDownArrow.jsx';


const PictureSelector = () => {
  return (
    <div className='Layout Picture-Selector'>
      <ScrollUpArrow />

      <p>Selector Wheel Here</p>
      {/*Create Selector Wheel Here*/}

      <ScrollDownArrow />
    </div>
  )
};

export default PictureSelector;