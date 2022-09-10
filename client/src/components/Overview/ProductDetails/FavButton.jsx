import React, { useState, useEffect, useContext } from 'react';
import { LocalStorageContext } from '../../../contexts/local-storage.context.jsx';
import { ProductContext } from '../../../contexts/product-info.context.jsx';

import { FaRegStar, FaStar } from 'react-icons/fa';

const FavButton = () => {

  const { outfitList, setOutfitList } = useContext(LocalStorageContext);
  const { productID } = useContext(ProductContext);
  const [ isFav, setIsFav ] = useState(false);

  useEffect(()=>{
    let outfits = [...outfitList];
    let index = 0;

    if (typeof productID !== 'string') {
      index = outfits.indexOf(JSON.stringify(productID));
    } else {
      index = outfits.indexOf(productID);
    }

    if (index > -1) {
      setIsFav(true);
    } else {
      setIsFav(false);
    };
  }, [outfitList, productID])

  const addOutfit = () => {
    if (typeof productID !== 'string') {
    var currentProduct = JSON.stringify(productID);
    } else {
      var currentProduct = productID;
    }

    if (outfitList.indexOf(currentProduct) === -1){
      setOutfitList([...outfitList, currentProduct]);
    }
  }

  const deleteOutfit = () => {
    const outfits = [...outfitList];
    let currentProduct = '40334';

    if (typeof productID !== 'string') {
      currentProduct = JSON.stringify(productID);
    } else {
      currentProduct = productID;
    }

    const index = outfits.indexOf(currentProduct);
    if (index > -1) {
      outfits.splice(index, 1)
    }
    setOutfitList(outfits)
  }

  if (isFav) {
    return (
      <div className='FavContainer'>
        <div className='FavButton' onClick={deleteOutfit}>
            <FaStar className='FavIconActive'/>
        </div>
      </div>
    )
  } else {
    return (
      <div className='FavContainer'>
        <div className='FavButton' onClick={addOutfit}>
            <FaRegStar className='FavIconInactive'/>
        </div>
      </div>
    )
  }
};

export default FavButton;