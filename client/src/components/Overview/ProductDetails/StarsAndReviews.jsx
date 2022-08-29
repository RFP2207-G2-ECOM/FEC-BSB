import React, { useContext } from 'react';
import { ProductReviewsContext } from '../../../contexts/product-reviews.context.jsx';
import StaticRating from '../../StarRating.jsx';

const StarsAndReviews = () => {
  let { metadata } = useContext(ProductReviewsContext);
  let ratings = {...metadata.ratings};
  let denominator = 0;
  ratings = Object.values(ratings);
  if (ratings.length === 0) {
    ratings = 0;
    denominator = 0;
  } else {
    let weight = 1;
    let numerator = ratings.reduce((prev, curr) => {
      let total = prev + parseInt(curr) * weight;
      weight++;
      return total;
    }, 0);
    denominator = ratings.reduce((prev, curr) => {
      let total = prev + parseInt(curr);
      weight++;
      return total;
    }, 0);

    if (denominator === 0) {
      denominator = -1;
    }

    ratings = Math.round(numerator/denominator * 10) / 10;
  }

    if (denominator > 0) {
      return (
        <div className='Stars-And-Reviews'>
          <div className='Stars'>
            <StaticRating rating={ratings}/>
          </div>
            <div className='Review-Link'>
            {/* Link to Review Section later*/}
            Read all {denominator} reviews
            </div>
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

export default StarsAndReviews;