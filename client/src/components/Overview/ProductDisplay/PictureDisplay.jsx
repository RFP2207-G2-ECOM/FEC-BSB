import React, { useContext } from 'react';
import { CurrentPicContext } from '../ProductDisplay.jsx';

const SelectedPicture = () => {

  const { curPic, listOfPics, setCurPic } = useContext(CurrentPicContext);
  console.log(curPic);
  console.log(listOfPics);

  let handleLeftClick = (e) => {
    setCurPic(curPic - 1);
  };
  let handleRightClick = (e) => {
    setCurPic(curPic + 1);
  };

  // -------------------------------
  // handle on click of main photo, modal pop-up
  // -------------------------------
  if (curPic === 0) {
    return (
      <div className='Selected-Picture'>
        <img className='MainPic' src={listOfPics[curPic]}></img>
        <div className='PicInterface'>
        <div className='ZoomInBox' onClick={()=>{console.log('Zoom In PopUp')}}></div> {/* Add Zoom-In on Click here */}
          <div className='Arrow-Right' onClick={handleRightClick} >&gt;</div>
        </div>
      </div>
    )
  } else if (curPic === listOfPics.length - 1) {
    return (
      <div className='Selected-Picture'>
        <img className='MainPic' src={listOfPics[curPic]}></img>
        <div className='PicInterface'>
          <div className='Arrow-Left' onClick={handleLeftClick}>&lt;</div>
          <div className='ZoomInBox' onClick={()=>{console.log('Zoom In PopUp')}}></div> {/* Add Zoom-In on Click here */}
        </div>
      </div>
    )
  } else { // implies must not be at the edge
    return (
      <div className='Selected-Picture'>
        <img className='MainPic' src={listOfPics[curPic]}></img>
        <div className='PicInterface'>
          <div className='Arrow-Left' onClick={handleLeftClick} >&lt;</div>
          <div className='ZoomInBox' onClick={()=>{console.log('Zoom In PopUp')}}></div> {/* Add Zoom-In on Click here */}
          <div className='Arrow-Right' onClick={handleRightClick} >&gt;</div>
        </div>
      </div>
    )
  }
};

export default SelectedPicture;
// Zoom-In/Expanded View Functionality