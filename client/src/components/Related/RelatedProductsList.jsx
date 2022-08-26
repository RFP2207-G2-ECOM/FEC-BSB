import React, { useState, useEffect, createContext, useContext } from 'react';
import RelatedItemsAndComp from './RelatedItemsAndComp.jsx';
import styles from '../../styles/Related/related.css';
import Card from './Card.jsx'
import { ProductStylesContext } from '../../contexts/product-styles.context.jsx';

const RelatedProductsList = () => {
  const { productStyles } = useContext(ProductStylesContext);
  const filterProduct = productStyles;
  const [product, setProduct] = useState(productStyles);
  return (
    //related-products-list-container w-full
    <div id='silder' className='related-products-list-container'>
      {productStyles.map((style, key) => (
      <Card style={style} key={key} />
      ))}
    </div>
  )
}

export default RelatedProductsList;