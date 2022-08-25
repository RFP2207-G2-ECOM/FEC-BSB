import React from 'react';
import RelatedItemsAndComp from './RelatedItemsAndComp.jsx';
import styles from '../../styles/Related/related.css';
import RelatedProductsList from './RelatedProductsList.jsx';
import YourOutfitList from './YourOutfitList.jsx';
import CardButton from './CardButton.jsx';

const Card = () => {
  return (
    <div className='card-container'>
      <button className='card-button'>Star</button>
      <div className='card-image'>IMAGE</div>
      <div className='card-product-info'>Product Info</div>
    </div>
  )
}

export default Card;