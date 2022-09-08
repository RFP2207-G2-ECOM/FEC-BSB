import React, { useContext, useEffect, useState } from 'react';
import { CurrentSKUContext } from './AddToCart.jsx';

const QuantitySelect = () => {
  const { listOfQuantity, listOfSizes, curSize, curStyle, curQuantity, setCurQuantity, setAddNoQuant } = useContext(CurrentSKUContext);

  let index = listOfSizes.indexOf(curSize);
  let totalAmount = listOfQuantity[index];
  if (totalAmount > 15) {
    totalAmount = 15;
  } else if (totalAmount === undefined) {
    totalAmount = 0;
  }

  useEffect(() => {
    if (curQuantity > totalAmount) {
      setCurQuantity(totalAmount);
    }
  }, [curSize]);

  useEffect(()=> {
    setCurQuantity(0);
  }, [curStyle])

  let handleQuantityChange = (e)=>{
    let newQuantity = parseInt(e.target.value);
    if (e.target.value > totalAmount) {
      newQuantity = totalAmount;
    } else if (e.target.value < 0 ) {
      newQuantity = 0;
    }
    setCurQuantity(newQuantity);
    setAddNoQuant(false);
  };

  if (curSize === 'Select Size') {
    return (
      <div className='QuantityFormatter'>
        <input type='number' className='QuantitySelect' value={0} disabled ></input>
      </div>
    )
  } else {
    return (
      <div className='QuantityFormatter'>
        <input type='number' className='QuantitySelect' onChange={handleQuantityChange} value={curQuantity}></input>
      </div>
    )
  }
};

export default QuantitySelect;