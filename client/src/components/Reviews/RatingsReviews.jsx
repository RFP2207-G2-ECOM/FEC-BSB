import React, { useState, useEffect, useContext } from "react";

import { ProductReviewsContext } from "../../contexts/product-reviews.context.jsx"
import { ProductContext } from "../../contexts/product-info.context.jsx"

import ActiveFiltersView from "./ActiveFiltersView.jsx";
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
    setReviewSort('relevant')
    setMoreReviews(false)
    setReviewsToRender(2)
  }, [product])

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
        <ActiveFiltersView
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
          reviewSort={reviewSort}
          reviewsToRender={reviewsToRender}
          setReviewsToRender={setReviewsToRender}
          setReviewSort={setReviewSort}
          setPageNumber={setPageNumber}
          setModalOpen={setModalOpen}
          setMoreReviews={setMoreReviews}
          starFilters={starFilters}
        />
        { moreReviews === false &&
          <div className="Buttons-Container">
            <MoreReviewsButton
              loading={loading}
              moreReviews={moreReviews}
              ratingsCount={ratingsCount}
              reviewsToRender={reviewsToRender}
              setReviewsToRender={setReviewsToRender}
              setMoreReviews={setMoreReviews}
            />
            <AddReviewButton
              setModalOpen={setModalOpen}
              moreReviews={moreReviews}
            />
          </div>
        }
      </div>
      {/* { moreReviews === false &&
        <div className="Buttons-Container">
          <MoreReviewsButton
            loading={loading}
            moreReviews={moreReviews}
            ratingsCount={ratingsCount}
            reviewsToRender={reviewsToRender}
            setReviewsToRender={setReviewsToRender}
            setMoreReviews={setMoreReviews}
          />
          <AddReviewButton
            setModalOpen={setModalOpen}
            moreReviews={moreReviews}
          />
        </div>
      } */}
      <div className="Review-Modal-Container">
        <ReviewModal
          modalOpen={modalOpen}
          setModalOpen={setModalOpen}
          onClose={() => setModalOpen(false)}
          productName={product.name}
        />
      </div>
    </div>
  )
}

export default RatingsReviews