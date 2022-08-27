import React, { useState, useEffect, createContext, useContext } from 'react';
import RelatedItemsAndComp from './RelatedItemsAndComp.jsx';
import styles from '../../styles/Related/related.css';
import RelatedProductsList from './RelatedProductsList.jsx';
import YourOutfitList from './YourOutfitList.jsx';


const Card = ({style}) => {
  const [styleItems, setStyle] = useState(style);

  useEffect(()=>{
    setStyle(style);
  },[style])

  return (
    // <div className='card-container'>
    //   <button className='card-button'>Star</button>
    <div className='card-container'>
      {styleItems &&
        <img
          className='card-image'
          src={styleItems.photos[0].thumbnail_url}
          alt='/'
        />
        }
        <i className='fa fa-star-o fa-lg card-button'></i>
    </div>
  )
  }

export default Card;