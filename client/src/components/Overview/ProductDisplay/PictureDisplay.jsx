import React, { useContext, useState } from 'react';
import { CurrentPicContext } from '../ProductDisplay.jsx';

import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';

import ZoomInModal from '../../ZoomInModal.jsx';

const SelectedPicture = () => {

  const { curPic, listOfPics, setCurPic } = useContext(CurrentPicContext);
  const [ isZoomIn, setIsZoomIn ] = useState(false);

  // console.log(curPic);
  // console.log(listOfPics);

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
          <div className='ZoomInBox' onClick={() => (setIsZoomIn(true))} ></div> {/* onClick={() => (setIsZoomIn(true))} */}
          <BsChevronRight className='Arrow-Right' onClick={handleRightClick} />
        </div>
        <ZoomInModal open={isZoomIn} onClose={()=>setIsZoomIn(false)}
          curPic={curPic} listOfPics={listOfPics} setCurPic={setCurPic} />
      </div>
    )
  } else if (curPic === listOfPics.length - 1) {
    return (
      <div className='Selected-Picture'>
        <img className='MainPic' src={listOfPics[curPic]}></img>
        <div className='PicInterface'>
          <BsChevronLeft className='Arrow-Left' onClick={handleLeftClick} />
          <div className='ZoomInBox' onClick={() => (setIsZoomIn(true))} ></div>
        </div>
          <ZoomInModal open={isZoomIn} onClose={()=>setIsZoomIn(false)}
          curPic={curPic} listOfPics={listOfPics} setCurPic={setCurPic} />
      </div>
    )
  } else { // implies must not be at the edge
    return (
      <div className='Selected-Picture'>
        <img className='MainPic' src={listOfPics[curPic]}></img>
        <div className='PicInterface'>
          <BsChevronLeft className='Arrow-Left' onClick={handleLeftClick} />
          <div className='ZoomInBox' onClick={() => (setIsZoomIn(true))} ></div>
          <BsChevronRight className='Arrow-Right' onClick={handleRightClick} />
          <ZoomInModal open={isZoomIn} onClose={()=>setIsZoomIn(false)}
          curPic={curPic} listOfPics={listOfPics} setCurPic={setCurPic} />
        </div>
      </div>
    )
  }
};

export default SelectedPicture;
// Zoom-In/Expanded View Functionality