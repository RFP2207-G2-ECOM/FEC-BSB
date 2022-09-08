import React, { useState, useEffect, createContext } from 'react';
import RelatedItemsAndComp from './RelatedItemsAndComp.jsx';
import styles from '../../styles/Related/related.css';

const RelatedProductsTitle = () => {
  return (
    <div className='related-title-container'>
      RECOMMENDED PRODUCTS
    </div>
  )
}

export default RelatedProductsTitle;