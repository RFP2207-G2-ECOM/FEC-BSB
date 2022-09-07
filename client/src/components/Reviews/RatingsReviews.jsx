import React, { useState, useEffect, useContext } from "react";

import { ProductReviewsContext } from "../../contexts/product-reviews.context.jsx"
import { ProductContext } from "../../contexts/product-info.context.jsx"

import AddReviewButton from "./AddReviewButton.jsx";
import MoreReviewsButton from "./MoreReviewsButton.jsx";
import ProductBreakdown from "./ProductBreakdown.jsx";
import RatingsBreakdown from "./RatingsBreakdown.jsx";
import ReviewsList from "./ReviewsList.jsx";
import useReviewsSearch from "./useReviewsSearch.js";
import ReviewModal from "./ReviewModal.jsx";

import styles from "../../styles/Reviews/reviews.css";

const RatingsReviews = () => {

  let { product } = useContext(ProductContext)
  let { metadata } = useContext(ProductReviewsContext)
  let ratings = {...metadata.ratings}
  const ratingsCount = Object.values(ratings).reduce((a, b) => Number(a) + Number(b), 0)

  const [starFilters, setStarFilters] = useState([])
  const [filteredReviews, setFilteredReviews] = useState([])
  const [reviewsToRender, setReviewsToRender] = useState(2)
  const [reviewSort, setReviewSort] = useState('relevant')
  const [reviewCount, setReviewCount] = useState(2)
  const [pageNumber, setPageNumber] = useState(1)
  const [moreReviews, setMoreReviews] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)

  const {
    reviews,
    hasMore,
    loading,
    error
  } = useReviewsSearch(pageNumber, ratingsCount, reviewSort, starFilters)

  useEffect(() => {
    if(reviews !== undefined && reviews.length > 0) {
      setFilteredReviews(reviews)
    }
  }, [reviews])

  return (
    <div className="RR-Container">
      <div id='LinkToReviews'></div>
      <div className="rr-title">RATINGS & REVIEWS</div>
      <div className="Breakdown-Container">
        <RatingsBreakdown
          starFilters={starFilters}
          setStarFilters={setStarFilters}
        />
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
          setModalOpen={setModalOpen}
          setMoreReviews={setMoreReviews}
          starFilters={starFilters}
        />
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
          <AddReviewButton
            setModalOpen={setModalOpen}
            moreReviews={moreReviews}
          />
        </div>
      }
      <div className="Review-Modal-Container">
        <ReviewModal
          open={modalOpen}
          onClose={() => setModalOpen(false)}
          productName={product.name}
        />
      </div>
    </div>
  )
}

export default RatingsReviews