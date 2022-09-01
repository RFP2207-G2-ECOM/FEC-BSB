import React, { useContext } from 'react';
import { CurrentPicContext } from '../ProductDisplay.jsx';

const PictureSelector = () => {

  const { curPic, listOfThumbnails, setCurPic } = useContext(CurrentPicContext);
  // console.log(curPic);
  // console.log(listOfThumbnails);

  return (
    <div className='Layout Picture-Selector'>
      <button className='Layout Scroll-Up-Down Arrow-Up'>
        ^
      </button>

      <p>Selector Wheel Here</p>
      {/*Create Selector Wheel Here*/}

      <button className='Layout Scroll-Up-Down Arrow-Down'>
      V
      </button>
    </div>
  )
};

export default PictureSelector;