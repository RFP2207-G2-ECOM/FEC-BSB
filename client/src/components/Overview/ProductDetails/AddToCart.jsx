import React, { createContext, useContext, useState, useEffect } from 'react';
import { CurrentStylesContext } from '../Overview.jsx'

import SizeTitle from './SizeTitle.jsx';
import SizeSelect from "./SizeSelect.jsx";
import QuantitySelect from "./QuantitySelect.jsx";
import CartButton from './CartButton.jsx';

export const CurrentSKUContext = createContext({
});

const AddToCart = () => {
  const { curStyle } = useContext(CurrentStylesContext);

  let SKUs= [];
  let quantity = [];
  let sizes = [];

  let [ listOfSKUs, setListOfSKUs ] = useState([]);
  let [ listOfSizes, setListOfSizes ] = useState([]);
  let [ listOfQuantity, setListOfQuantity ] = useState([]);

  let [ curSKU, setCurSKU ] = useState('Fake SKU');
  let [ curSize, setCurSize ] = useState('Select Size');
  let [ curQuantity, setCurQuantity ] = useState(1);
  let [ addEmpty, setAddEmpty ] = useState(false);

  useEffect(()=> {
    if (Object.keys(curStyle).length) {
      SKUs = Object.entries(curStyle.skus);
      for (let i = 0; i < SKUs.length; i++) {
        let quantityAndSize = Object.values(SKUs[i][1]);
        SKUs[i] = SKUs[i][0];
        quantity.push(quantityAndSize[0]);
        sizes.push(quantityAndSize[1]);
      }

      if (sizes[0] !== null) {
      SKUs.unshift('Fake SKU');
      quantity.unshift('-');
      sizes.unshift('Select Size');
      }
      setListOfSKUs([...SKUs]);
      setListOfSizes([...sizes]);
      setListOfQuantity([...quantity]);
    }
  }, [curStyle]);

  // Data is formatted as array with each index matching
  //  listOfSizes={listOfSizes} curSize={curSize} setCurSize={setCurSize}
  let value = { listOfSKUs, listOfSizes, listOfQuantity, curSKU, curSize, curQuantity, addEmpty, setCurSKU, setCurSize, setCurQuantity, setAddEmpty };

  return (
    <div className='AddToCart'>
      <CurrentSKUContext.Provider value={value} >
        <SizeTitle />
        <div className='SizeRows'>
          <SizeSelect />
        </div>
        <div className='QuantityAndCartRow'>
          <QuantitySelect />
          <CartButton />
        </div>
      </CurrentSKUContext.Provider>
    </div>
  )

}

export default AddToCart;