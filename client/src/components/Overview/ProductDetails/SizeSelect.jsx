import React, { useContext } from 'react';
import { CurrentSKUContext } from './AddToCart.jsx';

const SizeSelect = (props) => {
  const { listOfSizes, curSize, setCurSize } = useContext(CurrentSKUContext);

  return (
    <select className='SizeSelect' onChange={(e) =>{setCurSize(e.target.value)}}>
       {listOfSizes.map((size, index) =>{
        return <option key={index}>{size}</option>
       })}
    </select>
  )

};

export default SizeSelect;