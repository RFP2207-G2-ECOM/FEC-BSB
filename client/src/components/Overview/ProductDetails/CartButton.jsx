import React, { useContext, useEffect } from 'react';
import axios from 'axios';

import { CurrentSKUContext } from './AddToCart.jsx';

const CartButton = () => {
  const { listOfSKUs, listOfSizes, listOfQuantity, curSKU, curSize, curQuantity, setCurSKU, setAddEmpty } = useContext(CurrentSKUContext);

  // handle situations where there is no sizes, just quantity
  let handleCartSubmit = (e) => {
    if (curSKU !== 'Fake SKU') {
      // make axios post request to Cart API here
      var baseURI = process.env.BASE_URI;
      for (let i = 0; i < curQuantity; i++) {
      axios.post(`${baseURI}cart`,
      {
        sku_id: curSKU
      },
      {
        headers: {
          'Authorization': process.env.GITHUB_TOKEN
        }
      }).then((success) => {
        console.log(success);
        // console.log('Posted To Cart ' + (i+1) + ' times');
        // trigger special effect to let use know it worked!
        // pop up window?
      }).catch((err) => {
        console.log(err);
        alert('Post Request Failed');
        // trigger special effect to let user know it failed!
        // pop up window?
      });
      }
    } else {
      setAddEmpty(true);
    }
  };

  if (listOfQuantity[listOfSizes.indexOf(curSize)] === 0) {
    return (
      <div className='CartButtonDisabled' disabled>
          Out of Stock!
      </div>
    )
  } else {
    return (
      <div className='CartButton' onClick={handleCartSubmit}>
        Add To Bag!
      </div>
    )
  }
};

export default CartButton;