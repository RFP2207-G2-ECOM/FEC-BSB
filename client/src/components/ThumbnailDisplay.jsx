import React, { useContext } from 'react';

const ThumbnailDisplay = ({ thumbnail, index, curPic, setCurPic }) => {
  // console.log(thumbnail);

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