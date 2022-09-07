import React, { useState, useEffect, createContext, useContext, useLayoutEffect } from 'react';
import RelatedItemsAndComp from './RelatedItemsAndComp.jsx';
import styles from '../../styles/Related/related.css';
import Card from './Card.jsx'
import { ProductRelatedContext } from '../../contexts/product-related.context.jsx';
import { ProductContext } from '../../contexts/product-info.context.jsx';
import axios from 'axios';

import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

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
    slider.scrollLeft = slider.scrollLeft - 250 * length;
    var maxScrollLeft = slider.scrollWidth - slider.clientWidth;
    setScrollPositon(slider.scrollLeft)
    setMaxScroll(maxScrollLeft)
  };


if (relatedProducts.length <= 4) {
  return (
    <div className='products-list'>
        <div id='slider' className='related-products-list-container snaps-inline'>
          {relatedProducts.map((relatedProduct, key) => (
            <Card relatedProduct={relatedProduct} key={key} />
          ))}
        </div>
    </div>
  )
} else if (relatedProducts.length > 4 && currentProd < 4) {
  // setToZero(relatedProducts.length - 1)
  return (
    <div className='products-list'>
      <MdChevronLeft className='slide' onClick={()=>setToZero(relatedProducts.length - 1)}/>
        <div id='slider' className='related-products-list-container snaps-inline'>
          {relatedProducts.map((relatedProduct, key) => (
            <Card relatedProduct={relatedProduct} key={key} />
          ))}
        </div>
        <MdChevronRight className='slide' onClick={slideRight}/>
    </div>
  )
  } else if (currentProd === relatedProducts.length - 4) {
    return (
      <div className='products-list'>
        <MdChevronLeft className='slide' onClick={slideLeft} onScroll={console.log('scolling scroll')}/>
          <div id='slider' className='related-products-list-container snaps-inline'>
            {relatedProducts.map((relatedProduct, key) => (
              <Card relatedProduct={relatedProduct} key={key} />
            ))}
          </div>
      </div>
    )
  } else {
    return (
      <div className='products-list'>
        <MdChevronLeft className='slide' onClick={slideLeft} onScroll={console.log('scolling scroll')}/>
          <div id='slider' className='related-products-list-container snaps-inline'>
            {relatedProducts.map((relatedProduct, key) => (
              <Card relatedProduct={relatedProduct} key={key} />
            ))}
          </div>
          <MdChevronRight className='slide' onClick={slideRight} onScroll={console.log('scolling scroll')}/>
      </div>
    )
  }
}

export default RelatedProductsList;