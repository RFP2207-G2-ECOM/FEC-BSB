import React from 'react';
import Card from './Card.jsx'
import CardThumbnail from './CardThumbnail.jsx'
import { ImCross } from 'react-icons/im';
import CardPictureDisplay from './CardPictureDisplay.jsx';

const CardIcon = ({deleteOutfit, onOpen, hover, relatedProduct}) => {

  return (
    <>
      {!deleteOutfit && !hover &&
        <i className='fa fa-star-o fa-lg card-button' onClick={onOpen}></i>
      }
      {deleteOutfit && !hover &&
        <ImCross
          className='card-button'
          onClick={()=>deleteOutfit(relatedProduct.id)}
        />
      }
      {!deleteOutfit && hover &&
        <i className='fa fa-star-o fa-lg card-button-hover' onClick={onOpen}></i>
      }
      {deleteOutfit && hover &&
        <ImCross
          className='card-button-hover'
          onClick={()=>deleteOutfit(relatedProduct.id)}
        />
      }
    </>
  )
};

export default CardIcon;