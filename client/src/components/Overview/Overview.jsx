import React, { createContext, useContext, useState, useEffect } from 'react';
import { ProductStylesContext } from '../../contexts/product-styles.context.jsx';

import TopBar from './TopBar.jsx';
import ProductDisplay from './ProductDisplay.jsx';
import ProductDetails from './ProductDetails.jsx';
import BottomBar from './BottomBar.jsx';

import styles from '../../styles/Overview/Overview.css';

export const CurrentStylesContext = createContext({
  curStyle: {}
});

const Overview = () => {
  const { productStyles } = useContext(ProductStylesContext);
  const [ curStyle, setCurStyle ] = useState({});

  useEffect(()=> {
    if (productStyles.length){
      // console.log('productStyle has changed')
      let index = 0;
      for (let i = 0; i < productStyles.length; i++) {
        if (productStyles[i]['default?'] === true) {
          index = i;
          break;
        }
      }
      setCurStyle(productStyles[index]);
    }
  }, [productStyles])

  let currentStyle = { curStyle, setCurStyle };

  return (
    <div className='Overview'>
      <TopBar />
      <div className='Overview-Container'>
        <CurrentStylesContext.Provider value={currentStyle} >
          <ProductDisplay />
          <ProductDetails />
        </CurrentStylesContext.Provider>
      </div>
      <BottomBar />
    </div>
  )
};

export default Overview;