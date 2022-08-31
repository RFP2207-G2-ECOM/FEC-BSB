import React, { useState, useEffect, createContext, useContext } from 'react';
import RelatedItemsAndComp from './RelatedItemsAndComp.jsx';
import styles from '../../styles/Related/related.css';
import RelatedProductsList from './RelatedProductsList.jsx';
import YourOutfitList from './YourOutfitList.jsx';
import axios from 'axios';


const Card = ({relatedProduct}) => {

  const [productInfo, setProduct] = useState(relatedProduct);
  const [productStyle, setStyle] = useState([]);

  useEffect(()=>{
    setProduct(relatedProduct);
    getProductStyles();
  },[relatedProduct])

  const getProductStyles = async () => {
    var baseURI = process.env.BASE_URI;
    const productID = productInfo ? productInfo.id : undefined;
    console.log(productID)
    if (productID) {
      return await axios.get(`${baseURI}products/${productID}/styles`, {
        headers: {
          'Authorization': process.env.GITHUB_TOKEN
        }
      })
      .then(result => {
        setStyle(result.data.results)
      })
    }
  }

  return (
    // <div className='card-container'>
    //   <button className='card-button'>Star</button>
    <div className='card-container'>
      <div className='card-media'>
        {productStyle[0] &&
          <img
            className='card-image'
            src={productStyle[0].photos[0].url}
            alt='/'
          />
        }
        <i className='fa fa-star-o fa-lg card-button'></i>
      </div>
        <div className='card-content'>
          {productInfo &&
          <div>{productInfo.category}</div>
          }
          {productInfo &&
          <div><b>{productInfo.name}</b></div>
          }
          {productInfo &&
          <div>{productInfo.default_price}</div>
          }
          <div>Stars</div>
        </div>
    </div>
  )
}

export default Card;