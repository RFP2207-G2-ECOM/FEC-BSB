import React, { useState, useEffect, createContext } from 'react';
import styles from '../../styles/Related/related.css';
import RelatedProductsTitle from './RelatedProductsTitle.jsx';
import YourOutfitTitle from './YourOutfitTitle.jsx';
import RelatedProductsList from './RelatedProductsList.jsx';
import YourOutfitList from './YourOutfitList.jsx'

const RelatedItemsAndComp = () => {

  return (
    <div className='related-items-and-comp-container'>
      <RelatedProductsTitle />
      <RelatedProductsList />
      <YourOutfitTitle />
      <YourOutfitList />
    </div>
  )
}

export default RelatedItemsAndComp;