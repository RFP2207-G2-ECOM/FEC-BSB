import React, { useState, useEffect, createContext, useContext } from 'react';
import RelatedItemsAndComp from './RelatedItemsAndComp.jsx';
import styles from '../../styles/Related/related.css';
import RelatedProductsList from './RelatedProductsList.jsx';
import YourOutfitList from './YourOutfitList.jsx';
import axios from 'axios';
import ComparisonModal from './ComparisonModal.jsx'
import CardStarRating from './CardStarRating.jsx'

const Card = ({relatedProduct, deleteOutfit}) => {
  const [productInfo, setProduct] = useState(relatedProduct);
  const [productStyle, setStyle] = useState([]);

  const [isOpen, setIsOpen] = useState(false)

  const [ratings, setRatings] = useState({})

  //API Call Data
  const productID = productInfo ? productInfo.id : undefined;
  const baseURI = process.env.BASE_URI;
  const config =  {
    headers: {
    'Authorization': process.env.GITHUB_TOKEN
    }
  }

  useEffect(()=>{
    setProduct(relatedProduct);
    getProductStyles();
    getReviews();
  },[relatedProduct])

  const getProductStyles = async () => {
    if (productID) {
      return await axios.get(`${baseURI}products/${productID}/styles`, config)
      .then(result => {
        setStyle(result.data.results)
      })
    }
  }

  const getReviews = async () => {
    if (productID) {
      return await axios.get(`${baseURI}reviews/meta/?product_id=${productID}`, config)
      .then(rating => {
        setRatings(rating.data.ratings)
      })
    }
  }

  if (productInfo && productStyle[0]) {
    return (
      // <div className='card-container'>
      //   <button className='card-button'>Star</button>
      <div className='card-container'>
        <div className='card-media'>
            <img
              className='card-image'
              src={productStyle[0].photos[0].url}
              alt='/'
            />
          {deleteOutfit === undefined &&
          <i className='fa fa-star-o fa-lg card-button' onClick={()=>{setIsOpen(true)}}></i>}
          <ComparisonModal open={isOpen}
                           onClose={() => setIsOpen(false)}
                           productInfo={productInfo}/>
          {deleteOutfit &&
          <i className='fa fa-times-circle fa-lg card-button' onClick={()=>{deleteOutfit(productInfo.id)}}></i>}
        </div>
          <div className='card-content'>
            <div>{productInfo.category}</div>
            <div><b>{productInfo.name}</b></div>
            <div>${productInfo.default_price}</div>
            <CardStarRating ratings={ratings}/>
          </div>
      </div>
    )
  }
}

export default Card;