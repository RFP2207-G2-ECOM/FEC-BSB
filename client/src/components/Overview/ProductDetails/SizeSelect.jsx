import React, { useContext, useState, useEffect } from 'react';
import { CurrentSKUContext } from './AddToCart.jsx';

const SizeSelect = () => {
  const { listOfSizes, listOfSKUs, curSize, setCurSize, curSKU, curStyle, setCurSKU, setAddEmpty, setAddNoQuant } = useContext(CurrentSKUContext);

  const updateCurVals = (size)=> {
    setCurSize(size);
    let index = listOfSizes.indexOf(size);
    setCurSKU(listOfSKUs[index]);
    setAddEmpty(false);
  };

  useEffect(()=>{
    setCurSize('Select Size');
    setAddEmpty(false);
    setAddNoQuant(false);
  },[curStyle])

  let copyOfLoS = [...listOfSizes];
  copyOfLoS.shift();

  if (copyOfLoS.length) {
    return (
      <div className='SizeSelect'>
        {copyOfLoS.map((size, index) =>{
                if (size === 'Select Size') {
                  return (
                    <div className='SizeIconNull' key={index}></div>
                  )
                } else if (size === curSize) {
                  return (
                    <div className='SizeIconSelected' key={index} >
                      {size}
                    </div>
                  )
                } else if (size !== null) {
                  return (
                    <div className='SizeIconRegular' key={index} onClick={(e)=>{updateCurVals(size)}}>
                      {size}
                    </div>
                  )
                }
        })}
      </div>
    )
  } else if (copyOfLoS[0] === null || !copyOfLoS.length) {
      return(
        <div className='EmptySizes' >
          No Sizes Available
        </div>
      )
    }
};

export default SizeSelect;