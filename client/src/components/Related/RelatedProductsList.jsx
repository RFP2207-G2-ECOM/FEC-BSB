import React, { useState, useEffect, createContext, useContext, useLayoutEffect } from 'react';
import RelatedItemsAndComp from './RelatedItemsAndComp.jsx';
import styles from '../../styles/Related/related.css';
import Card from './Card.jsx'
import { ProductRelatedContext } from '../../contexts/product-related.context.jsx';
import { ProductContext } from '../../contexts/product-info.context.jsx';
import axios from 'axios';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

import { HiOutlinePlusCircle } from 'react-icons/hi';
const RelatedProductsList = () => {
  const slider = document.getElementById('slider');

  const { productRelated } = useContext(ProductRelatedContext);
  const [productID, setProductID] = useState(productRelated);

  const [relatedProducts, setRelatedProducts] = useState([]);

  const [ currentProd, setCurrentProd ] = useState(0);

  const [scrollPosition, setScrollPositon] = useState(0);
  const [maxScrollPositon, setMaxScroll] = useState(window.innerWidth);

  useEffect(()=>{
    setProductID(productRelated);
    getRelatedProducts();
  },[productRelated])

  const getProductInfo = async (productID) => {
    var baseURI = process.env.BASE_URI;
    return await axios.get(`${baseURI}products/${productID}`, {
      headers: {
        'Authorization': process.env.GITHUB_TOKEN
      }
    })
    .then(result => {
      return result.data;
    })
  }

  const getRelatedProducts = async () => {
    const productInfo = [];
    for (let i = 0; i < productRelated.length; i++) {
      productInfo.push(getProductInfo(productRelated[i]))
    }
    await axios.all(productInfo)
    .then((result)=>{
      setRelatedProducts(result)
    })
  }

  const slideLeft = () => {
    // var slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft - (slider.clientWidth * .25);
    var maxScrollLeft = slider.scrollWidth - slider.clientWidth;
    setScrollPositon(slider.scrollLeft)
    setMaxScroll(maxScrollLeft)
    setCurrentProd(currentProd - 1)
  };

  const slideRight = () => {
    slider.scrollLeft = slider.scrollLeft + (slider.clientWidth * .25);
    var maxScrollLeft = slider.scrollWidth - slider.clientWidth;
    setScrollPositon(slider.scrollLeft)
    setMaxScroll(maxScrollLeft)
    setCurrentProd(currentProd + 1)
  };

  const setToZero = (length) => {
    slider.scrollLeft = slider.scrollLeft - (250 * length);
    var maxScrollLeft = slider.scrollWidth - slider.clientWidth;
    setScrollPositon(slider.scrollLeft)
    setMaxScroll(maxScrollLeft)
    console.log('setting to zero')
  };

//onClick={()=>setToZero(relatedProducts.length - 1)}
    return (
      <div className='products-list'>
        {currentProd !== 0 && relatedProducts.length > 4 &&
        <div className='slide-container'>
        <MdChevronLeft className='related-left-slide' onClick={slideLeft}/>
        </div>}
          <div id='slider' className='related-products-list-container snaps-inline'>
          <div className='card-container'></div>
            {relatedProducts.map((relatedProduct, key) => (
              <Card relatedProduct={relatedProduct} key={key} />
            ))}
          </div>
          {currentProd !== relatedProducts.length - 4 && relatedProducts.length > 4 &&
          <div className='slide-container'>
          <MdChevronRight className='related-right-slide' onClick={slideRight}/>
          </div>}
      </div>
    )
}

export default RelatedProductsList;