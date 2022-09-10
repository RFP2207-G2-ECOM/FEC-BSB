import React, { useContext, useState, useEffect } from 'react';
import { render } from 'react-dom';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import Card from './Card.jsx'
import CardThumbnail from './CardThumbnail.jsx'
import { ImCross } from 'react-icons/im';
import { ProductContext } from '../../contexts/product-info.context.jsx';

const CardPictureDisplay = ({productStyle, deleteOutfit, onOpen, relatedProduct, hover}) => {

  const { productID: PID, setProductID } = useContext(ProductContext);
  const [ currentPic, setCurrentPic ] = useState(0);
  const [ listOfPictures, SetListOfPictures ] = useState([]);
  const [ listOfThumbnails, setListOfThumbnails ] = useState([]);

  let handleLeftClick = (e) => {
    //adding related product ID to card slider ID for uniqueness
    var slider = document.getElementById(`card-slider${relatedProduct.id}`);
    slider.scrollLeft = slider.scrollLeft - 40;
    setCurrentPic(currentPic - 1);
  };

  let handleRightClick = (e) => {
    var slider = document.getElementById(`card-slider${relatedProduct.id}`);
    slider.scrollLeft = slider.scrollLeft + 40;
    setCurrentPic(currentPic + 1);
  };

  useEffect(()=>{
    if (productStyle) {
      let currentStylePhotos = productStyle[0].photos;
      let listOfPhotos = [];
      let listOfThumbs = [];
      for (let i = 0; i < currentStylePhotos.length; i++) {
        let currStylePhotos = currentStylePhotos[i].thumbnail_url
        if (currentStylePhotos[i].url === null) {
          //adding new picture incase url is null
          listOfPhotos.push('https://tinyurl.com/At-sunglasses');
          listOfThumbs.push('https://tinyurl.com/At-sunglasses')
        } else if (currStylePhotos[0] === 'u'){
          //Getting rid of 'uhttp', incorrect URL
          listOfPhotos.push(currentStylePhotos[i].url);
          listOfThumbs.push(currentStylePhotos[i].thumbnail_url.slice(1))
        } else {
          listOfPhotos.push(currentStylePhotos[i].url);
          listOfThumbs.push(currentStylePhotos[i].thumbnail_url)
        }
      }
      SetListOfPictures(listOfPhotos);
      setListOfThumbnails(listOfThumbs);
    }
  }, [productStyle]);

  const changeCurrProd = () => {
    setProductID(relatedProduct.id)
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    })
    slider.scrollLeft = 0;
  }

  if (currentPic === 0) {
    return (
      <>
        <img className='card-image' src={listOfPictures[currentPic]} onClick={changeCurrProd}/>
        {deleteOutfit === undefined && hover === false &&
          <i className='fa fa-star-o fa-lg card-button' onClick={onOpen}></i>}
        {deleteOutfit && hover === false &&
          <ImCross className='card-button' onClick={()=>deleteOutfit(relatedProduct.id)}/>}
        {deleteOutfit === undefined && hover &&
          <i className='fa fa-star-o fa-lg card-button-hover' onClick={onOpen}></i>}
        {deleteOutfit && hover &&
          <ImCross className='card-button-hover' onClick={()=>deleteOutfit(relatedProduct.id)}/>}
          {hover &&
          <MdChevronLeft className='left-card-arrow-invis'/>}
          {hover && listOfPictures.length > 1 &&
          <MdChevronRight className='right-card-arrow' onClick={handleRightClick}/>}
          {hover && listOfPictures.length > 1 &&
          <CardThumbnail currentPic={currentPic} listOfThumbnails={listOfThumbnails} setCurrentPic={setCurrentPic} productID={relatedProduct.id}/>}
      </>
    )
  } else if (currentPic === listOfPictures.length - 1) {
    return (
      <>
        <img className='card-image' src={listOfPictures[currentPic]} onClick={changeCurrProd}/>
        {deleteOutfit === undefined && hover === false &&
          <i className='fa fa-star-o fa-lg card-button' onClick={onOpen}></i>}
        {deleteOutfit && hover === false &&
          <ImCross className='card-button' onClick={()=>deleteOutfit(relatedProduct.id)}/>}
        {deleteOutfit === undefined && hover &&
          <i className='fa fa-star-o fa-lg card-button-hover' onClick={onOpen}></i>}
        {deleteOutfit && hover &&
          <ImCross className='card-button-hover' onClick={()=>deleteOutfit(relatedProduct.id)}/>}
          {hover &&
          <MdChevronLeft className='left-card-arrow' onClick={handleLeftClick}/>}
          {hover && listOfPictures.length > 1 &&
          <MdChevronRight className='right-card-arrow-invis'/>}
          {hover && listOfPictures.length > 1 &&
          <CardThumbnail currentPic={currentPic} listOfThumbnails={listOfThumbnails} setCurrentPic={setCurrentPic} productID={relatedProduct.id}/>}
      </>
    )
  } else {
    return (
      <>
        <img className='card-image' src={listOfPictures[currentPic]} onClick={changeCurrProd}/>
        {deleteOutfit === undefined && hover === false &&
          <i className='fa fa-star-o fa-lg card-button' onClick={onOpen}></i>}
        {deleteOutfit && hover === false &&
          <ImCross className='card-button' onClick={()=>deleteOutfit(relatedProduct.id)}/>}
        {deleteOutfit === undefined && hover &&
          <i className='fa fa-star-o fa-lg card-button-hover' onClick={onOpen}></i>}
        {deleteOutfit && hover &&
          <ImCross className='card-button-hover' onClick={()=>deleteOutfit(relatedProduct.id)}/>}
          {hover &&
          <MdChevronLeft className='left-card-arrow' onClick={handleLeftClick}/>}
          {hover && listOfPictures.length > 1 &&
          <MdChevronRight className='right-card-arrow' onClick={handleRightClick}/>}
          {hover && listOfPictures.length > 1 &&
          <CardThumbnail currentPic={currentPic} listOfThumbnails={listOfThumbnails} setCurrentPic={setCurrentPic} productID={relatedProduct.id}/>}
      </>
    )
  }
};

export default CardPictureDisplay;