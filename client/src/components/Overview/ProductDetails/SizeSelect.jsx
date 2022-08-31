import React, { useContext, useState, useEffect } from 'react';
import { CurrentSKUContext } from './AddToCart.jsx';

const SizeSelect = () => {
  const { listOfSizes, curSize, setCurSize } = useContext(CurrentSKUContext);
  const [ curSizeDisplay, setCurSizeDisplay ] = useState(listOfSizes[1]);

  useEffect(()=> {
    setCurSizeDisplay(curSize);
  }, [curSize])

  return (
    <div className='SizeSelect'>
       {listOfSizes.map((size, index) =>{
        if (size === 'Select Size') {
          return
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
          } else if (size === null) {
            return(
              <div className='EmptySizes'>
                No Sizes Available
              </div>
            )
          }
       })}
    </div>
  )

};

export default SizeSelect;

// onChange={(e) =>{setCurSize(e.target.value)}}