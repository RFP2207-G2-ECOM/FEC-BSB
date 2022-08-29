import React, { useState, useContext, useEffect } from 'react';
import Price from './Price.jsx';
import StyleInfo from './StyleInfo.jsx';
import StyleSelector from './StyleSelector.jsx';
import AddToCart from './AddToCart.jsx';

import { ProductStylesContext } from '../../../contexts/product-styles.context.jsx';

const StyleContainer = () => {

  const { productStyles } = useContext(ProductStylesContext); // Array type, you can map over this
  const [ selectedStyle, setSelectedStyle ] = useState({});

  console.log(productStyles);

  useEffect(()=> {
    if (productStyles.length === 0){
      setSelectedStyle({});
    } else {
      let index = 0;
      for (let i = 0; i < productStyles.length; i++) {
        if (productStyles[i]['default?'] === true) {
          index = i;
        }
      }
      setSelectedStyle(productStyles[2]);
    }
  }, [productStyles])



  // console.log('selectedStyle', selectedStyle);

  return (
    <div className='StyleContainer'>
      <Price basePrice={selectedStyle.original_price} salePrice={selectedStyle.sale_price}/>
      <StyleInfo />
      <StyleSelector />
      <AddToCart />
    </div>
  )
}

export default StyleContainer;