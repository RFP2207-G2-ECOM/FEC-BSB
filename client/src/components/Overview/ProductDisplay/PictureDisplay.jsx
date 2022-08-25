import React from 'react';
import MainPic from './PictureDisplay/MainPic.jsx';
import ScrollLeftArrow from './PictureDisplay/ScrollLeftArrow.jsx';
import ScrollRightArrow from './PictureDisplay/ScrollRightArrow.jsx';

const SelectedPicture = () => {
  return (
    <div className='Layout Selected-Picture'>
      <ScrollLeftArrow />
      <MainPic />
      <ScrollRightArrow />
    </div>
  )
};

export default SelectedPicture;
// Zoom-In/Expanded View Functionality