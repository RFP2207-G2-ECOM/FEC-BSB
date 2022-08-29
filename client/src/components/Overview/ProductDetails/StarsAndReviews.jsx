import React, { useContext } from 'react';
import { ProductReviewsContext } from '../../../contexts/product-reviews.context.jsx';
import StaticRating from '../../StarRating.jsx';

const StarsAndReviews = () => {
  let { metadata } = useContext(ProductReviewsContext);
  let ratings = {...metadata.ratings};
  ratings = Object.values(ratings);
  if (ratings.length === 0) {
    ratings = 0;
  } else {
    let weight = 1;
    let numerator = ratings.reduce((prev, curr) => {
      let total = prev + parseInt(curr) * weight;
      weight++;
      return total;
    }, 0);
    let denominator = ratings.reduce((prev, curr) => {
      let total = prev + parseInt(curr);
      weight++;
      return total;
    }, 0);

    ratings = Math.round(numerator/denominator * 10) / 10;
  }
  return (
    <div className='Stars-And-Reviews'>
      <div className='Stars'>
        <StaticRating rating={ratings}/>
      </div>
      <div className='Review-Link'>Review Link Here</div>
    </div>
  )
};

export default StarsAndReviews;