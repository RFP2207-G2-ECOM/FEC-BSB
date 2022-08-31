import React, { useContext } from 'react';
import { CurrentSKUContext } from './AddToCart.jsx';

const CartButton = () => {
  const { listOfSKUs, listOfSizes, curSKU, curSize, curQuantity, setCurSKU } = useContext(CurrentSKUContext);

  // handle situations where there is no sizes, just quantity
  let handleCartSubmit = (e) => {
    let index = listOfSizes.indexOf(curSize);
    let obj = listOfSKUs[index];
    console.log('obj', obj)
    setCurSKU(obj);
    // make axios post request to Cart API here
    // trigger special effect on the button?
  };

  if (listOfSizes[0] === null) {
    return (
      <div className='CartButtonDisabled' disabled>
          Out of Stock!
      </div>
    )
  } else if (curSize === 'Select Size') {
    return (
      <div className='CartButtonDisabled' disabled>
        Select a Size!
      </div>
    )
  } else if (curQuantity === 0) {
    return (
      <div className='CartButtonDisabled' disabled>
        Select a Quantity!
      </div>
    )
  }else {
    return (
      <div className='CartButton' onClick={handleCartSubmit}>
        Add To Cart!
      </div>
    )
  }
};

export default CartButton;