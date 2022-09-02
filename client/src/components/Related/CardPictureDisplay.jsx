import React, { useContext, useState, useEffect } from 'react';

import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

const CardPictureDisplay = ({productStyle}) => {
  const [ currentPic, setCurrentPic ] = useState(0); // curPic & setter
  const [ listOfPictures, SetListOfPictures ] = useState([]);
  const [ listOfThumbnails, setListOfThumbnails ] = useState([]);

  let handleLeftClick = (e) => {
    setCurrentPic(currentPic - 1);
  };
  let handleRightClick = (e) => {
    setCurrentPic(currentPic + 1);
  };

  useEffect(()=>{
    if (productStyle) {
      let currentStylePhotos = productStyle[0].photos;
      let listOfPhotos = [];
      let listOfThumbs = [];
      for (let i = 0; i < currentStylePhotos.length; i++) {
        listOfPhotos.push(currentStylePhotos[i].url);
        listOfThumbs.push(currentStylePhotos[i].thumbnail_url)
      }
      SetListOfPictures(listOfPhotos);
      setListOfThumbnails(listOfThumbs);
    }
  }, []);

  if (currentPic === 0) {
    return (
      <>
        <img className='card-image' src={listOfPictures[currentPic]}/>
          <MdChevronRight className='' onClick={handleRightClick} />
      </>
    )
  } else if (curCardPic === listOfCardPics.length - 1) {
    return (
      <>
        <img className='card-image' src={listOfPictures[currentPic]}/>
          <MdChevronLeft className='' onClick={handleLeftClick} />
      </>
    )
  } else {
    return (
      <>
        <img className='card-image' src={listOfPictures[currentPic]}/>
          <MdChevronLeft className='' onClick={handleLeftClick} />
          <MdChevronRight className='' onClick={handleRightClick} />
      </>
    )
  }
};

export default CardPictureDisplay;