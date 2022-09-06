import React, { useContext } from 'react';
import CardThumbnail from './CardThumbnail.jsx'

const CardThumbnailDisplay = ({ thumbnail, index, currentPic, setCurrentPic }) => {
  // console.log(thumbnail);

  let changeCurPic = (e) => {
    setCurrentPic(index);
  }

  if (index === currentPic) {
    return (
      <div className='ThumbnailFrameSelected' index={index}>
        <img className='ThumbnailPic' src={thumbnail} onClick={changeCurPic} index={index}></img>
      </div>
    )
  } else {
    return (
      <div className='ThumbnailFrame' index={index}>
        <img className='ThumbnailPic' src={thumbnail} onClick={changeCurPic} index={index}></img>
      </div>
    )
  }
};

export default CardThumbnailDisplay;