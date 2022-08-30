import React, { createContext, useContext, useState, useEffect } from 'react';
import { CurrentStylesContext } from '../Overview.jsx'

import SizeSelect from "./SizeSelect.jsx";
import QuantitySelect from "./QuantitySelect.jsx";

export const CurrentSKUContext = createContext({
  curSKU: {}
});

const AddToCart = () => {
  const { curStyle } = useContext(CurrentStylesContext);
  // console.log('AddToCart', curStyle);
  let SKUs= [];
  let quantity = [];
  let sizes = [];

  let [ listOfSKUs, setListOfSKUs ] = useState([]);
  let [ listOfSizes, setListOfSizes ] = useState([]);
  let [ listOfQuantity, setListOfQuantity ] = useState([]);
  let [ curSKU, setCurSKU ] = useState('Fake SKU');
  let [ curSize, setCurSize ] = useState('Select Size');
  let [ curQuantity, setCurQuantity ] = useState('-');

  useEffect(()=> {
    if (Object.keys(curStyle).length) {
    SKUs = Object.entries(curStyle.skus);
    for (let i = 0; i < SKUs.length; i++) {
      let quantityAndSize = Object.values(SKUs[i][1]);
      SKUs[i] = SKUs[i][0];
      quantity.push(quantityAndSize[0]);
      sizes.push(quantityAndSize[1]);
    }
    SKUs.unshift('Fake SKU');
    quantity.unshift('-');
    sizes.unshift('Select Size');
    console.log('SKUs', SKUs);
    // console.log('quantity', quantity);
    // console.log('sizes', sizes);
    setListOfSKUs([...SKUs]);
    setListOfSizes([...sizes]);
    setListOfQuantity([...quantity]);
    }
  }, [curStyle]);

  // Data is formatted as array with each index matching
  //  listOfSizes={listOfSizes} curSize={curSize} setCurSize={setCurSize}

  let value = { listOfSKUs, listOfSizes, listOfQuantity, curSKU, curSize, curQuantity, setCurSKU, setCurSize, setCurQuantity };

  return (
    <div className='AddToCart'>
      <CurrentSKUContext.Provider value={value} >
        <div className='SizeAndQuanitityRow'>
          <SizeSelect />
          <QuantitySelect />
        </div>
      </CurrentSKUContext.Provider>
      <div className='CartAndFavRow'>
        <button className='CartButton'>Add To Cart!</button>
        <button className='FavButton'>Favorite</button>
      </div>
    </div>
  )
}

export default AddToCart;