import React, { useState, useEffect, createContext, useContext } from 'react';
import RelatedItemsAndComp from './RelatedItemsAndComp.jsx';
import styles from '../../styles/Related/related.css';
import RelatedProductsList from './RelatedProductsList.jsx';
import YourOutfitList from './YourOutfitList.jsx';
import axios from 'axios';
import ComparisonModal from './ComparisonModal.jsx'
import CardStarRating from './CardStarRating.jsx'
import CardPictureDisplay from './CardPictureDisplay.jsx';

const Card = ({relatedProduct, deleteOutfit}) => {
  const [productStyle, setStyle] = useState([]);
  const [isOpen, setIsOpen] = useState(false)
  const [ratings, setRatings] = useState({})
  const [isHover, setIsHover] = useState(false)

  //API Call Data
  const productID = relatedProduct.id
  const baseURI = process.env.BASE_URI;
  const config =  {
    headers: {
    'Authorization': process.env.GITHUB_TOKEN
    }
  }

  useEffect(()=>{
    getProductStyles();
    getReviews();
  },[])

  const getProductStyles = async () => {
    if (productID) {
      return await axios.get(`${baseURI}products/${productID}/styles`, config)
      .then(styles => {
        setStyle(styles.data.results)
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

  if (productStyle[0]) {
    return (
      <div className='card-container' onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(true)}>
        <div className='card-media'>
            <CardPictureDisplay productStyle={productStyle}
                                onOpen={() => setIsOpen(true)}
                                open={isOpen}
                                deleteOutfit={deleteOutfit}
                                relatedProduct={relatedProduct}
                                hover={isHover}/>
          <ComparisonModal open={isOpen}
                           onClose={() => setIsOpen(false)}
                           relatedProduct={relatedProduct}/>
        </div>
          <div className='card-content'>
            <div>{relatedProduct.category}</div>
            <div><b>{relatedProduct.name}</b></div>
            <div>${relatedProduct.default_price}</div>
            <CardStarRating ratings={ratings}/>
          </div>
      </div>
    )
  }
}

export default Card;