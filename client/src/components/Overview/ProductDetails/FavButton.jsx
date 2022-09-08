import React, { useState, useEffect, useContext } from 'react';
import { LocalStorageContext } from '../../../contexts/local-storage.context.jsx';

import { FaRegStar, FaStar } from 'react-icons/fa';

const FavButton = () => {

  const { outfitList, setOutfitList } = useContext(LocalStorageContext);
  const [ isFav, setIsFav ] = useState(false);

  useEffect(()=>{
    var productID = process.env.PRODUCT_ID;
    let outfits = [...outfitList];
    const index = outfits.indexOf(productID);

    if (index > -1) {
      setIsFav(true);
    } else {
      setIsFav(false);
    };
  }, [outfitList])

  const addOutfit = () => {
    var currentProduct = process.env.PRODUCT_ID;
    if (outfitList.indexOf(currentProduct) === -1){
      setOutfitList([...outfitList, currentProduct]);
    }
  }

  const deleteOutfit = (productID) => {
    if (typeof productID === 'object') {
      productID = process.env.PRODUCT_ID;
    }
    const outfits = [...outfitList];
    const index = outfits.indexOf(productID);
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