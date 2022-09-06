import React, { useState, useEffect, createContext, useContext } from 'react';
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

  // const [ currentProd, setCurrentProd ] = useState(0);
  const [scrollPosition, setScrollPositon] = useState(0);
  const [maxScrollPositon, setMaxScroll] = useState(0);

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

  const maxScroll = () => {
    slider.scrollLeft = slider.scrollLeft - 1;
    var maxScrollLeft = slider.scrollWidth - slider.clientWidth;
    setMaxScroll(maxScrollLeft)
  };

  const slideLeft = () => {
    // var slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft - 250;
    var maxScrollLeft = slider.scrollWidth - slider.clientWidth;
    console.log('slide left amount:', slider.scrollLeft)
    console.log('max slide left:', maxScrollLeft)
    setScrollPositon(slider.scrollLeft)
    setMaxScroll(maxScrollLeft)
    // setCurrentProd(currentProd - 1)
  };

  const slideRight = () => {
    // var slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft + 250;
    var maxScrollLeft = slider.scrollWidth - slider.clientWidth;
    console.log('slide right amount:', slider.scrollLeft)
    console.log('max slide right:', maxScrollLeft)
    setScrollPositon(slider.scrollLeft)
    setMaxScroll(maxScrollLeft)
    // setCurrentProd(currentProd + 1)
  };


if (scrollPosition <= 40) {
  return (
    <div className='products-list'>
      <div className='slide-container'>
      </div>
        <div id='slider' className='related-products-list-container snaps-inline'>
          {relatedProducts.map((relatedProduct, key) => (
            <Card relatedProduct={relatedProduct} key={key} />
          ))}
        </div>
        <div className='slide-container'>
      <MdChevronRight className='slide' onClick={slideRight}/>
      </div>
    </div>
  )
} else if (scrollPosition === maxScrollPositon){
  return (
    <div className='products-list'>
      <div className='slide-container'>
      <MdChevronLeft className='slide' onClick={slideLeft}/>
      </div>
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
        <div className='slide-container'>
        <MdChevronLeft className='slide' onClick={slideLeft}/>
        </div>
          <div id='slider' className='related-products-list-container snaps-inline'>
            {relatedProducts.map((relatedProduct, key) => (
              <Card relatedProduct={relatedProduct} key={key} />
            ))}
          </div>
          <div className='slide-container'>
        <MdChevronRight className='slide' onClick={slideRight}/>
        </div>
      </div>
    )
  }
}

export default RelatedProductsList;