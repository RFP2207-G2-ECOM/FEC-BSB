import React, { useContext, useEffect } from 'react';
import { CurrentSKUContext } from './AddToCart.jsx';

const QuantitySelect = () => {
  const { listOfQuantity, setCurQuantity, curSize, listOfSizes } = useContext(CurrentSKUContext);

  let index = listOfSizes.indexOf(curSize);
  let totalAmount = listOfQuantity[index];
  if (totalAmount > 15) {
    totalAmount = 15;
  } else if (totalAmount === undefined) {
    totalAmount = 0;
  }

  totalAmount = Array.from(Array(totalAmount + 1).keys());
  totalAmount[0] = '-';

  if (curSize === 'Select Size') {
    return (
      <select className='QuantitySelect' disabled>
        {totalAmount.map((quantity, index) =>{
          return <option key={index} >{quantity}</option>
        })}
      </select>
    )
  } else {
    return (
      <select className='QuantitySelect' onChange={(e)=>{setCurQuantity(e.target.value)}}>
        {totalAmount.map((quantity, index) =>{
          return <option key={index} >{quantity}</option>
        })}
      </select>
    )
  }
};

export default QuantitySelect;