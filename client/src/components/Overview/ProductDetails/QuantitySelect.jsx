import React, { useContext, useEffect, useState } from 'react';
import { CurrentSKUContext } from './AddToCart.jsx';

const QuantitySelect = () => {
  const { listOfQuantity, listOfSizes, curSize, setCurQuantity, setAddNoQuant } = useContext(CurrentSKUContext);
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
        <input type='number' className='QuantitySelect' onChange={handleQuantityChange} value={quantityDisplay}></input>
      </div>
    )
  }
};

export default QuantitySelect;