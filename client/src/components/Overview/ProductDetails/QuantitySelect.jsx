import React, { useContext, useEffect, useState } from 'react';
import { CurrentSKUContext } from './AddToCart.jsx';

const QuantitySelect = () => {
  const { listOfQuantity, listOfSizes, setCurQuantity, curSize } = useContext(CurrentSKUContext);
  const [ quantityDisplay, setQuantityDisplay ] = useState(1);

  let index = listOfSizes.indexOf(curSize);
  let totalAmount = listOfQuantity[index];
  if (totalAmount > 15) {
    totalAmount = 15;
  } else if (totalAmount === undefined) {
    totalAmount = 0;
  }

  useEffect(() => {
    if (quantityDisplay > totalAmount) {
      setQuantityDisplay(totalAmount);
      setCurQuantity(totalAmount);
    }
  }, [curSize]);

  let handleQuantityChange = (e)=>{
    let newQuantity = e.target.value;
    if (e.target.value > totalAmount) {
      newQuantity = totalAmount;
    } else if (e.target.value < 1 ) {
      newQuantity = 1;
    }
    setQuantityDisplay(newQuantity);
    setCurQuantity(newQuantity);
  };


  if (curSize === 'Select Size') {
    return (
      <input type='number' className='QuantitySelect' value={0} disabled ></input>
    )
  } else {
    return (
      <input type='number' className='QuantitySelect' onChange={handleQuantityChange} value={quantityDisplay}></input>
    )
  }
};

export default QuantitySelect;