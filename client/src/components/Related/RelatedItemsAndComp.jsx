import React, { useState, useEffect, createContext } from 'react';
import Card from './Card.jsx';
import styles from '../../styles/Related/related.css';
import RelatedProductsTitle from './RelatedProductsTitle.jsx';
import YourOutfitTitle from './YourOutfitTitle.jsx';
import RelatedProductsList from './RelatedProductsList.jsx';
import YourOutfitList from './YourOutfitList.jsx'

const RelatedItemsAndComp = () => {

  return (
    <div className='related-items-and-comp-container'>
      <div>
      <RelatedProductsTitle />
      <RelatedProductsList />
      </div>
{/* <div>
<YourOutfitTitle />
      <YourOutfitList />
</div> */}
    </div>
  )
}

export default RelatedItemsAndComp;