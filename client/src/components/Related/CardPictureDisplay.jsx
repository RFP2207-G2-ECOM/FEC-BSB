import React, { useContext, useState, useEffect } from 'react';
import { render } from 'react-dom';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import Card from './Card.jsx'
import CardThumbnail from './CardThumbnail.jsx'

const CardPictureDisplay = ({productStyle, deleteOutfit, onOpen, relatedProduct, hover}) => {
  const [ currentPic, setCurrentPic ] = useState(0);
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

  // render() {
  //   let cardButton = 'card-button'
  // };

  // hover? cardButton = 'card-button-isHover' : cardButton;

  if (currentPic === 0) {
    return (
      <>
        <img className='card-image' src={listOfPictures[currentPic]}/>
        {deleteOutfit === undefined &&
          <i className='fa fa-star-o fa-lg card-button' onClick={onOpen}></i>}
        {deleteOutfit &&
          <i className='fa fa-times-circle fa-lg card-button' onClick={()=>{deleteOutfit(relatedProduct.id)}}></i>}
          {hover &&
          <MdChevronLeft className='left-card-arrow-invis'/>}
          {hover &&
          <MdChevronRight className='right-card-arrow' onClick={handleRightClick} />}
          {hover &&
          <CardThumbnail currentPic={currentPic} listOfThumbnails={listOfThumbnails} setCurrentPic={setCurrentPic}/>}
      </>
    )
  } else if (currentPic === listOfPictures.length - 1) {
    return (
      <>
        <img className='card-image' src={listOfPictures[currentPic]}/>
        {deleteOutfit === undefined &&
          <i className='fa fa-star-o fa-lg card-button' onClick={onOpen}></i>}
        {deleteOutfit &&
          <i className='fa fa-times-circle fa-lg card-button' onClick={()=>{deleteOutfit(relatedProduct.id)}}></i>}
          {hover &&
          <MdChevronLeft className='left-card-arrow' onClick={handleLeftClick} />}
          {hover &&
          <CardThumbnail currentPic={currentPic} listOfThumbnails={listOfThumbnails} setCurrentPic={setCurrentPic}/>}
      </>
    )
  } else {
    return (
      <>
        <img className='card-image' src={listOfPictures[currentPic]}/>
        {deleteOutfit === undefined &&
          <i className='fa fa-star-o fa-lg card-button' onClick={onOpen}></i>}
        {deleteOutfit &&
          <i className='fa fa-times-circle fa-lg card-button' onClick={()=>{deleteOutfit(relatedProduct.id)}}></i>}
          {hover &&
          <MdChevronLeft className='left-card-arrow' onClick={handleLeftClick} />}
          {hover &&
          <MdChevronRight className='right-card-arrow' onClick={handleRightClick} />}
          {hover &&
          <CardThumbnail currentPic={currentPic} listOfThumbnails={listOfThumbnails} setCurrentPic={setCurrentPic}/>}
      </>
    )
  }
};

export default CardPictureDisplay;