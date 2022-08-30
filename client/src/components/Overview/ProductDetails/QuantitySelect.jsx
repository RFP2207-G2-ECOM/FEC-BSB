import React, { useContext } from 'react';
import { CurrentSKUContext } from './AddToCart.jsx';

const QuantitySelect = () => {
  const { listOfQuantity, curQuantity, setCurQuantity, curSize, listOfSizes } = useContext(CurrentSKUContext);
  console.log('List Of Quantity', listOfQuantity);
  console.log('curSize', curSize);
  // console.log('setCurSize', setCurQuantity);

  let index = listOfSizes.indexOf(curSize);
  console.log(index);
  console.log('current possible quantity', listOfQuantity[index]);

  // create an array of 1-quantity
  // for (let i = 0; i < )

  if (curSize === 'Select Size') {
    return (
      <select className='QuantitySelect' disabled>
        {listOfQuantity.map((quantity, index) =>{
          return <option key={index} >{quantity}</option>
        })}
      </select>
    )
  } else {
    return (
      <select className='QuantitySelect'>
        {listOfQuantity.map((quantity, index) =>{
          return <option key={index} >{quantity}</option>
        })}
      </select>
    )
  }
};

export default QuantitySelect;