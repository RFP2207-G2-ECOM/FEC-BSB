import React, { useState, useEffect, createContext, useContext } from 'react';
import RelatedItemsAndComp from './RelatedItemsAndComp.jsx';
import styles from '../../styles/Related/related.css';
import Card from './Card.jsx'
import { ProductRelatedContext } from '../../contexts/product-related.context.jsx';
import { ProductContext } from '../../contexts/product-info.context.jsx';
import axios from 'axios';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import { HiOutlinePlusCircle } from 'react-icons/hi';
import useLocalStorage from '../../contexts/useLocalStorage.jsx';

const YourOutfitList = () => {

  const [outfitList, setOutfit] = useLocalStorage('outfits', []);

  // useEffect(()=>{
  //   setProductID(productRelated);
  //   getRelatedProducts();
  // },[productRelated])

  // const getProductInfo = async (productID) => {
  //   var baseURI = process.env.BASE_URI;
  //   return await axios.get(`${baseURI}products/${productID}`, {
  //     headers: {
  //       'Authorization': process.env.GITHUB_TOKEN
  //     }
  //   })
  //   .then(result => {
  //     return result.data;
  //   })
  // }

  // const getRelatedProducts = async () => {
  //   const productInfo = [];
  //   for (let i = 0; i < productRelated.length; i++) {
  //     productInfo.push(getProductInfo(productRelated[i]))
  //   }
  //   await axios.all(productInfo)
  //   .then((result)=>{
  //     setRelatedProducts(result)
  //   })
  // }

  const slideLeft = () => {
    var slider = document.getElementById('outfit-slider');
    slider.scrollLeft = slider.scrollLeft - 200;
  };

  const slideRight = () => {
    var slider = document.getElementById('outfit-slider');
    slider.scrollLeft = slider.scrollLeft + 200;
  };

  return (
    <div className='products-list'>
      <MdChevronLeft className='slide' onClick={slideLeft} size={40} />
        <div id='outfit-slider' className='related-products-list-container'>
          <div className='card-container'>
          <HiOutlinePlusCircle className='card-add-button' size={100} />
            <div className='card-add-outfit '><b>Add to Outfit</b></div>
          </div>
          {/* {relatedProducts.map((relatedProduct, key) => (
            <Card relatedProduct={relatedProduct} key={key} />
          ))} */}
        </div>
      <MdChevronRight className='slide' onClick={slideRight} size={40} />
    </div>
  )
}

export default YourOutfitList;