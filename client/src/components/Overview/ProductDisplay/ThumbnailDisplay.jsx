import React, { useContext } from 'react';
import { CurrentPicContext } from '../ProductDisplay.jsx';

const ThumbnailDisplay = ({ thumbnail, index }) => {
  // console.log(thumbnail);

  const { curPic, setCurPic } = useContext(CurrentPicContext);

  let changeCurPic = (e) => {
    setCurPic(index);
  }

  if (index === curPic) {
    return (
      <div className='ThumbnailFrameSelected'>
        <img className='ThumbnailPic' src={thumbnail} onClick={changeCurPic}></img>
      </div>
    )
  } else {
    return (
      <div className='ThumbnailFrame'>
        <img className='ThumbnailPic' src={thumbnail} onClick={changeCurPic}></img>
      </div>
    )
  }
};

export default ThumbnailDisplay;