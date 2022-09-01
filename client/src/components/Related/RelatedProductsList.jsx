import React, { useState, useEffect, createContext, useContext } from 'react';
import RelatedItemsAndComp from './RelatedItemsAndComp.jsx';
import styles from '../../styles/Related/related.css';
import Card from './Card.jsx'
import { ProductRelatedContext } from '../../contexts/product-related.context.jsx';
import { ProductContext } from '../../contexts/product-info.context.jsx';
import axios from 'axios';

import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

const RelatedProductsList = () => {
  const { productRelated } = useContext(ProductRelatedContext);
  const [productID, setProductID] = useState(productRelated);

  const [relatedProducts, setRelatedProducts] = useState([]);
  const [relatedProductList, setRelatedProductList] = useState([]);

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

  // const listRelatedProducts = () => {
  //   const products = relatedProducts[0] ? relatedProducts : undefined;
  //   let container = []
  //   if (products) {
  //     for (let i = 0; i < products.length; i++) {
  //       const currentProd = products[i]
  //       const productID = currentProd.product_id;
  //       const results = currentProd.results
  //       for (let i = 0; i < results.length; i++) {
  //         let obj = {};
  //         obj.product_id = productID
  //         obj.productStyles = results[i]
  //         container.push(obj)
  //         console.log(container)
  //       }
  //     }
  //     setRelatedProductList(container)
  //   }
  // }



  const slideLeft = () => {
    var slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft - 250;
  };

  const slideRight = () => {
    var slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft + 250;
  };

  return (
    //related-products-list-container w-full
    <div className='products-list'>
      <MdChevronLeft className='slide' onClick={slideLeft} size={40} />
        <div id='slider' className='related-products-list-container snaps-inline'>
          {relatedProducts.map((relatedProduct, key) => (
            <Card relatedProduct={relatedProduct} key={key} />
          ))}
        </div>
      <MdChevronRight className='slide' onClick={slideRight} size={40} />
    </div>
  )
}

export default RelatedProductsList;