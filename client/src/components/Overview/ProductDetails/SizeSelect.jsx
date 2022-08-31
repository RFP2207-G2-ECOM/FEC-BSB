import React, { useContext, useState, useEffect } from 'react';
import { CurrentSKUContext } from './AddToCart.jsx';

const SizeSelect = () => {
  const { listOfSizes, curSize, setCurSize } = useContext(CurrentSKUContext);
  const [ curSizeDisplay, setCurSizeDisplay ] = useState(listOfSizes[1]);

  console.log(listOfSizes);

  useEffect(()=> {
    setCurSizeDisplay(curSize);
  }, [curSize])

  let copyOfLoS = [...listOfSizes];
  copyOfLoS.shift();
  let totalSizes = (Math.ceil(copyOfLoS.length/6)*6);

  for (let j = copyOfLoS.length; j < totalSizes; j++) {
    copyOfLoS.push('Select Size');
  }

  if (copyOfLoS.length) {
    return (
      <div className='SizeSelect'>
        {copyOfLoS.map((size, index) =>{
                if (size === 'Select Size') {
                  return (
                    <div className='SizeIconNull' key={index} ></div>
                  )
                } else if (size === curSizeDisplay) {
                  return (
                    <div className='SizeIconSelected' key={index} >
                      {size}
                    </div>
                  )
                } else if (size !== null) {
                  return (
                    <div className='SizeIconRegular' key={index} onClick={(e)=>{setCurSize(size)}}>
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