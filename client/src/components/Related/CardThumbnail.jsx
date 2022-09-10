import React, {useContext, useState, useEffect} from 'react';
import CardPictureDisplay from './CardPictureDisplay.jsx'
import CardThumbnailDisplay from './CardThumbnailDisplay.jsx'

const CardThumbnail = ({ listOfThumbnails, currentPic, setCurrentPic, productID }) => {

  return (
    <div id={`card-slider${productID}`} className='card-thumbnail-carousel'>
      {listOfThumbnails.map((thumbnail, index) => (
        <CardThumbnailDisplay
          index={index}
          key={index}
          thumbnail={thumbnail}
          currentPic={currentPic}
          setCurrentPic={setCurrentPic}
        />
      ))}
    </div>
  )
}
export default CardThumbnail;