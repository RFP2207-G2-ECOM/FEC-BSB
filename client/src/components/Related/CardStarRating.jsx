import React, { useContext } from 'react';
import { ProductReviewsContext } from '../../contexts/product-reviews.context.jsx';
import StaticRating from '../StarRating.jsx';
import Card from './Card.jsx'
import styles from '../../styles/Related/related.css';

const CardStarRating = () => {
  let { metadata } = useContext(ProductReviewsContext);
  let ratings = {...metadata.ratings};
  let totalReviews = 0;
  ratings = Object.values(ratings);
  if (ratings.length === 0) {
    ratings = 0;
    totalReviews = 0;
  } else {
    let totalScore = ratings.reduce((prev, curr, i) => {
      let total = prev + parseInt(curr) * (i + 1);
      return total;
    }, 0);
    totalReviews = ratings.reduce((prev, curr) => {
      let total = prev + parseInt(curr);
      return total;
    }, 0);

    ratings = Math.round(totalScore/totalReviews * 10) / 10;
  }

    if (totalReviews > 0) {
      return (
          <div className='Stars'>
            <StaticRating rating={ratings}/>
          </div>
      )
    } else {
      return (
        <div className='Stars-And-Reviews'>
          <div className='Stars'>
            <StaticRating rating={ratings}/>
          </div>
        </div>
      )
    }
};

export default CardStarRating;