import React, { useContext } from 'react';
import { CurrentSKUContext } from './AddToCart.jsx';

const SizeSelect = () => {
  const { listOfSizes, setCurSize } = useContext(CurrentSKUContext);
  // console.log(listOfSizes);

  if (listOfSizes[0] === null) {
    return (
      <select className='SizeSelect' disabled></select>
    )
  } else {
    return (
      <select className='SizeSelect' onChange={(e) =>{setCurSize(e.target.value)}}>
        {listOfSizes.map((size, index) =>{
          return <option key={index}>{size}</option>
        })}
      </select>
    )
  }
};

export default SizeSelect;