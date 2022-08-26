import React, { useState, useEffect, createContext, useContext } from 'react';
import RelatedItemsAndComp from './RelatedItemsAndComp.jsx';
import styles from '../../styles/Related/related.css';
import Card from './Card.jsx'
import { ProductStylesContext } from '../../contexts/product-styles.context.jsx';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

const RelatedProductsList = () => {

  const slideLeft = () => {
    var slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft - 200;
  };

  const slideRight = () => {
    var slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft + 200;
  };

  const { productStyles } = useContext(ProductStylesContext);
  const filterProduct = productStyles;
  const [product, setProduct] = useState(productStyles);
  return (
    //related-products-list-container w-full
    <div className='products-list'>
      <MdChevronLeft className='slide'    onClick={slideLeft} size={40} />
          <div id='slider' className='related-products-list-container'>
            {productStyles.map((style, key) => (
            <Card style={style} key={key} />
            ))}
          </div>
        <MdChevronRight className='slide' onClick={slideRight} size={40} />
    </div>
  )
}

export default RelatedProductsList;