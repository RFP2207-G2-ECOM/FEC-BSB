import React, { useContext } from 'react';
import { CurrentSKUContext } from './AddToCart.jsx';

const SizeSelect = (props) => {
  const { listOfSizes, curSize, setCurSize } = useContext(CurrentSKUContext);
  // let listOfSizes = props.listOfSizes;
  // let curSize = props.curSize;

  console.log('List Of Sizes', listOfSizes);
  console.log('curSize', curSize);
  // console.log('setCurSize', setCurSize);

  let sizeSelect = (e) =>{
    console.log(e);
  }

  return (
    <select className='SizeSelect'>
       {listOfSizes.map((size, index) =>{
        return <option key={index} onClick={sizeSelect}>{size}</option>
       })}
    </select>
  )

};

export default SizeSelect;