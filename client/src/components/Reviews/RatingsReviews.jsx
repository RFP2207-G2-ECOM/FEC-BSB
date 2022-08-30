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
    Object.values(ratings).reduce((a, b) => Number(a) + Number(b), 0)

  const [filteredReviews, setFilteredReviews] = useState([])
  const [reviewsToRender, setReviewsToRender] = useState(2)
  const [reviewSort, setReviewSort] = useState('relevant')
  const [reviewCount, setReviewCount] = useState(2)
  const [pageNumber, setPageNumber] = useState(1)
  const [moreReviews, setMoreReviews] = useState(false)

  const {
    reviews,
    hasMore,
    loading,
    error
  } = useReviewsSearch(pageNumber, ratingsCount, reviewSort)

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
          filteredReviews={filteredReviews}
          hasMore={hasMore}
          loading={loading}
          moreReviews={moreReviews}
          ratingsCount={ratingsCount}
          reviewsToRender={reviewsToRender}
          setReviewsToRender={setReviewsToRender}
          setReviewSort={setReviewSort}
          setPageNumber={setPageNumber}
          setReviewCount={setReviewCount}
          setMoreReviews={setMoreReviews}
        />
        { moreReviews === true &&
          <div className="Scroll-Buttons-Container">
            <button className="scroll-add-a-review-button">Add+</button>
            <button className="scroll-to-top-button">Top</button>
          </div>
        }
      </div>
      { moreReviews === false &&
        <div className="Buttons-Container">
          <MoreReviewsButton
            loading={loading}
            moreReviews={moreReviews}
            ratingsCount={ratingsCount}
            reviewsToRender={reviewsToRender}
            setReviewsToRender={setReviewsToRender}
            setMoreReviews={setMoreReviews}
            setReviewCount={setReviewCount}
          />
          <button className="add-a-review-button">ADD A REVIEW</button>
        </div>
      }
    </div>
  )
}



export default RatingsReviews