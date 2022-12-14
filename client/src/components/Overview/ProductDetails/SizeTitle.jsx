import React, { useContext } from 'react';
import { CurrentSKUContext } from './AddToCart.jsx';

const SizeTitle = () => {
  const { curSize, listOfSizes, listOfQuantity, addEmpty, addNoQuant } = useContext(CurrentSKUContext);

  if (addEmpty) {
    return (
      <div className='SizeTitleContainer'>
        <div className='SoldOutWarning'>
          Please Select a Size
        </div>
      </div>
    )
  } else if (addNoQuant){
    return (
      <div className='SizeTitleContainer'>
        <div className='SizeTitle'>
            Size
          </div>
        <div className='SoldOutWarning'>
          (Choose a Quantity)
        </div>
      </div>
    )
  } else {
    return (
      <div className='SizeTitleContainer'>
          <div className='SizeTitle'>
            Size
          </div>
          {
          listOfQuantity[listOfSizes.indexOf(curSize)] === 0 || listOfQuantity[0] === null ?
            <div className='SoldOutWarning'>
              (Sold Out)
            </div>
          :
          listOfQuantity[listOfSizes.indexOf(curSize)] < 3 ?
            <div className='SizeWarning'>
            (Only a few left!)
            </div>
          :
            null
          }
      </div>
    )
  }

};

export default SizeTitle;