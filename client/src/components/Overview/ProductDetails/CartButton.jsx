import React, { useContext } from 'react';
import { CurrentSKUContext } from './AddToCart.jsx';

const CartButton = () => {
  const { listOfSizes, setCurSize } = useContext(CurrentSKUContext);
  console.log(listOfSizes[0]);

  // handle situations where there is no sizes, just quantity
  let handleCartSubmit = (e) => {
    console.log(curQuantity); // Quantity needed for cart POST
    console.log(curSize);
    let index = listOfSizes.indexOf(curSize);
    let copy = listOfSKUs[index];
    console.log(copy)
    setCurSKU(copy);
    console.log(curSKU);
  };

  if (listOfSizes[0] === null) {
    return (
      <button className='CartButtonDisabled' disabled>
          Out of Stock!
      </button>
    )
  } else {
    return (
      <button className='CartButton' onClick={handleCartSubmit}>Add To Cart!</button>
    )
  }
};

export default CartButton;