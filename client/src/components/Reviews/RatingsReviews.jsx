import React, { useState, useEffect, useContext, useRef, useCallback } from "react";
import { ProductReviewsContext } from "../../contexts/product-reviews.context.jsx"

import axios from "axios";

import MoreReviewsButton from "./MoreReviewsButton.jsx";
import ProductBreakdown from "./ProductBreakdown.jsx";
import RatingsBreakdown from "./RatingsBreakdown.jsx";
import ReviewsList from "./ReviewsList.jsx";
import useReviewsSearch from "./useReviewsSearch.js";

import styles from "../../styles/Reviews/reviews.css";

const RatingsReviews = () => {

  let { metadata } = useContext(ProductReviewsContext)
  let ratings = {...metadata.ratings}
  const ratingsCount =
    Object.values(ratings).reduce((a, b) => Number(a) + Number(b), 0);

  const [filteredReviews, setFilteredReviews] = useState([]);
  const [reviewSort, setReviewSort] = useState('relevant');
  const [reviewCount, setReviewCount] = useState(2);
  const [pageNumber, setPageNumber] = useState(1);


  const {
    reviews,
    hasMore,
    loading,
    error
  } = useReviewsSearch(pageNumber, reviewCount, reviewSort)

  useEffect(() => {
    if(reviews !== undefined && reviews.length > 0) {
      setFilteredReviews(reviews)
    }
  }, [reviews])

  return (
    <div className="RR-Container">
      <div className="rr-title">RATINGS & REVIEWS</div>
      <div className="Breakdown-Container">
        <RatingsBreakdown />
        <ProductBreakdown />
      </div>
      <div className="ReviewsList-Container">
        <ReviewsList
          hasMore={hasMore}
          filteredReviews={filteredReviews}
          loading={loading}
          ratingsCount={ratingsCount}
          setReviewSort={setReviewSort}
        />
      </div>
      <div className="Buttons-Container">
        <MoreReviewsButton
          loading={loading}
          setReviewCount={setReviewCount}
          ratingsCount={ratingsCount}
        />
        <button className="add-a-review-button">ADD A REVIEW</button>
      </div>
    </div>
  )
}



export default RatingsReviews