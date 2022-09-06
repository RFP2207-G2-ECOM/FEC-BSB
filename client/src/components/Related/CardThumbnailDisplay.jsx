import React, { useContext } from 'react';
import CardThumbnail from './CardThumbnail.jsx'

const CardThumbnailDisplay = ({ thumbnail, index, currentPic, setCurrentPic }) => {
  // console.log(thumbnail);

  let changeCurPic = (e) => {
    setCurrentPic(index);
  }

  if (index === currentPic) {
    return (
      <div className='card-thumbnail-frame-selected' index={index}>
        <img className='card-thumbnail-pic' src={thumbnail} onClick={changeCurPic} index={index}></img>
      </div>
    )
  } else {
    return (
      <div className='card-thumbnail-frame' index={index}>
        <img className='card-thumbnail-pic' src={thumbnail} onClick={changeCurPic} index={index}></img>
      </div>
    )
  }
};

export default CardThumbnailDisplay;