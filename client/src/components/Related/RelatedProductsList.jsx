import React, { useState, useEffect, createContext, useContext, useLayoutEffect } from 'react';
import RelatedItemsAndComp from './RelatedItemsAndComp.jsx';
import styles from '../../styles/Related/related.css';
import Card from './Card.jsx'
import { ProductRelatedContext } from '../../contexts/product-related.context.jsx';
import { ProductContext } from '../../contexts/product-info.context.jsx';
import axios from 'axios';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import { HiOutlinePlusCircle } from 'react-icons/hi';

const RelatedProductsList = () => {
  const slider = document.getElementById('slider');
  //curent product ID being displayed
  const { productID: PID } = useContext(ProductContext);
  const { productRelated } = useContext(ProductRelatedContext);

  const [productID, setProductID] = useState(productRelated);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [currentProd, setCurrentProd] = useState(0);

  useEffect(() => {
    setProductID(productRelated);
    getRelatedProducts();
  }, [productRelated])

  useEffect(() => {
    var slider = document.getElementById('outfit-slider');
    slider.scrollLeft = 0;
    setCurrentProd(0);
  }, [PID])

  const getProductInfo = async (productID) => {
    var baseURI = process.env.BASE_URI;
    return await axios.get(`${baseURI}products/${productID}`, {
      headers: {
        'Authorization': process.env.GITHUB_TOKEN
      }
    })
    .then(productInfo => {
      return productInfo.data;
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
    slider.scrollLeft = slider.scrollLeft - (slider.clientWidth * .25);
    setCurrentProd(currentProd - 1);
  };

  const slideRight = () => {
    slider.scrollLeft = slider.scrollLeft + (slider.clientWidth * .25);
    setCurrentProd(currentProd + 1);
  };

    return (
      <div className='products-list'>
        {currentProd !== 0 && relatedProducts.length > 4 &&
          <div className='slide-container'>
            <BsChevronLeft className='related-left-slide' onClick={slideLeft}/>
          </div>
        }
        <div id='slider' className='related-products-list-container snaps-inline'>
          <div className='related-detail-spacer'></div>
          {relatedProducts.map((relatedProduct, index) => (
            <Card relatedProduct={relatedProduct} key={index}/>
          ))}
        </div>
        {currentProd !== relatedProducts.length - 4 &&
          relatedProducts.length > 4 &&
            <div className='slide-container'>
              <BsChevronRight className='related-right-slide' onClick={slideRight}/>
            </div>
        }
      </div>
    )
}

export default RelatedProductsList;