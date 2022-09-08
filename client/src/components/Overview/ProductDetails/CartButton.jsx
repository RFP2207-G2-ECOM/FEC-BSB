import React, { useContext, useEffect } from 'react';
import axios from 'axios';

import { CurrentSKUContext } from './AddToCart.jsx';

const CartButton = () => {
  const { listOfSKUs, listOfSizes, listOfQuantity, curSKU, curSize, curQuantity, setCurSKU, setAddEmpty, setAddNoQuant } = useContext(CurrentSKUContext);

  // handle situations where there is no sizes, just quantity
  let handleCartSubmit = (e) => {
    if (curSKU !== 'Fake SKU' && curQuantity !== 0) {
      // make axios post request to Cart API here
      var baseURI = process.env.BASE_URI;
      var arrOfOrders = [];
      for (let i = 0; i < curQuantity; i++) {
      arrOfOrders.push(axios.post(`${baseURI}cart`,
      {
        sku_id: curSKU
      },
      {
        headers: {
          'Authorization': process.env.GITHUB_TOKEN
        }
      }))
      }
      Promise.all(arrOfOrders)
      .then((success) => {
        console.log(success);
        // trigger opening Cart Modal to show cart contents?
        alert(`Added to cart ${curQuantity} times`);
      }).catch((err) => {
        console.log(err);
        alert('Post Request Failed');
        // trigger special effect to let user know it failed!
        // pop up window?
      });

    } else if (curSKU !== 'Fake SKU' && curQuantity === 0) {
      setAddNoQuant(true);
    } else if (curSKU === 'Fake SKU') {
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