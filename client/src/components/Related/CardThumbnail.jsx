import React, { useContext, useState, useEffect } from 'react';
import { render } from 'react-dom';
import CardPictureDisplay from './CardPictureDisplay.jsx'
import CardThumbnailDisplay from './CardThumbnailDisplay.jsx'

const CardThumbnail = ({ listOfThumbnails, currentPic, setCurrentPic }) => {


  return (
    <div className='card-thumbnail-carousel'>
  {listOfThumbnails.map((thumbnail, index) => (
        <CardThumbnailDisplay index={index} thumbnail={thumbnail} currentPic={currentPic} setCurrentPic={setCurrentPic}  />
  ))}
  </div>
  )
}
export default CardThumbnail;