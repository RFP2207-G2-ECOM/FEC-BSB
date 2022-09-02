import React, { useContext, useEffect } from 'react';
import axios from 'axios';

import { CurrentSKUContext } from './AddToCart.jsx';

const CartButton = () => {
  const { listOfSKUs, listOfSizes, curSKU, curSize, curQuantity, setCurSKU } = useContext(CurrentSKUContext);

  // handle situations where there is no sizes, just quantity
  let handleCartSubmit = (e) => {
    let index = listOfSizes.indexOf(curSize);
    let obj = listOfSKUs[index];
    // console.log('obj', obj)
    setCurSKU(obj);
  };

  useEffect(()=>{
    // triggers on curSKU change,
    // only changes on AddToCart & initial load

    if (curSKU !== 'Fake SKU') {
      // make axios post request to Cart API here
      var baseURI = process.env.BASE_URI;
      if (curSKU.length)
      axios.post(`${baseURI}cart`,
      {
        sku_id: curSKU,
        quantity: curQuantity
      },
      {
        headers: {
          'Authorization': process.env.GITHUB_TOKEN
        }
      }
      ).then((success) => {
        console.log(success);
        alert('Posted To Cart');
        // trigger special effect to let use know it worked!
        // pop up window?
      })
      .catch((err) => {
        console.log(err);
        alert('Post Request Failed');
        // trigger special effect to let user know it failed!
        // pop up window?
      });
    }

  },[curSKU])

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