import React from 'react'

import AddReviewButton from './AddReviewButton.jsx'
import ReviewTile from './ReviewTile.jsx'

const ReviewsList = ({ hasMore, filteredReviews, loading, moreReviews, ratingsCount, reviewsToRender, setReviewsToRender, setModalOpen, setMoreReviews, setReviewSort, starFilters }) => {

  const change = (e) => {
    setReviewSort(e.target.value)
    setReviewsToRender(2)
    setMoreReviews(false)
  }

  return (
    <>
      <div className="reviewList-header">
        <div className="reviewList-sort">
          {ratingsCount} reviews, sorted by
          <select onChange={change}>
            <option value="relevant">relevance</option>
            <option value="newest">newest</option>
            <option value="helpful">helpful</option>
          </select>
        </div>
        { moreReviews === true &&
          <AddReviewButton
            setModalOpen={setModalOpen}
            moreReviews={moreReviews}
          />
        }
      </div>
      <div>
        {(filteredReviews
          .filter(review => {
            if (starFilters.length === 0) {
              return review
            } else {
              return starFilters.indexOf(review.rating) > -1
            }
          })
          .slice(0, reviewsToRender))
          .map((review, index, array) =>
            <ReviewTile
              key={review.review_id}
              id={review.review_id}
              array={array}
              index={index}
              loading={loading}
              hasMore={hasMore}
              moreReviews={moreReviews}
              rating={review.rating}
              username={review.reviewer_name}
              date={review.date}
              summary={review.summary}
              body={review.body}
              photos={review.photos}
              recommend={review.recommend}
              response={review.response}
              helpful={review.helpfulness}
              setReviewsToRender={setReviewsToRender}
            />
        )}
      </div>
    </>
  )
}



export default ReviewsList