import React, { useContext } from 'react';
import { ProductReviewsContext } from '../../contexts/product-reviews.context.jsx';
import Card from './Card.jsx'
import styles from '../../styles/Related/related.css';
import StaticRating from '../StarRating.jsx';

const CardStarRating = (props) => {
  let ratings = props.ratings;

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
          <div className='related-stars'>
            <StaticRating rating={ratings} font={'16px'}/>
          </div>
      )
    } else {
      return (
        <div className='related-stars-and-reviews'>
          <div className='related-stars'>
            <StaticRating rating={ratings} font={'16px'}/>
          </div>
        </div>
      )
    }
};

export default CardStarRating;