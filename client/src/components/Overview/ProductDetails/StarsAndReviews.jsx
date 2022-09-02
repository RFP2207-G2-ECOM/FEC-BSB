import React, { useContext } from 'react';
import { ProductReviewsContext } from '../../../contexts/product-reviews.context.jsx';
import StaticRating from '../../StarRating.jsx';

const StarsAndReviews = () => {
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
        <div className='Stars-And-Reviews'>
            <p className='Style-Detail-Spacer'></p>
          <div className='Stars'>
            <StaticRating key={1} rating={ratings} font={'300px'}/>
          </div>
          <div key={2} className='Style-Detail-Spacer'></div>
          <div key={3} className='Review-Link'>
              <a href='#LinkToReviews' className='ReviewLink'>Read all {totalReviews} reviews</a>
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