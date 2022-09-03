import React, { useContext, useState, useEffect } from 'react';
import { CurrentSKUContext } from './AddToCart.jsx';

const SizeSelect = () => {
  const { listOfSizes, curSize, setCurSize } = useContext(CurrentSKUContext);
  const [ curSizeDisplay, setCurSizeDisplay ] = useState();

  // console.log(listOfSizes);

  useEffect(()=> {
    setCurSizeDisplay(curSize);
  }, [curSize])

  let copyOfLoS = [...listOfSizes];
  copyOfLoS.shift();
  let totalSizes = (Math.ceil(copyOfLoS.length/6)*6);

  for (let j = copyOfLoS.length; j < totalSizes; j++) {
    copyOfLoS.push('Select Size');
  }

  var heightStyling = {
    'height': `calc(120px / ${Math.ceil(copyOfLoS.length/6)})`
  }

  if (copyOfLoS.length) {
    return (
      <div className='SizeSelect'>
        {copyOfLoS.map((size, index) =>{
                if (size === 'Select Size') {
                  return (
                    <div className='SizeIconNull' key={index}></div>
                  )
                } else if (size === curSizeDisplay) {
                  return (
                    <div className='SizeIconSelected' key={index} style={heightStyling} >
                      {size}
                    </div>
                  )
                } else if (size !== null) {
                  return (
                    <div className='SizeIconRegular' key={index} style={heightStyling} onClick={(e)=>{setCurSize(size)}}>
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