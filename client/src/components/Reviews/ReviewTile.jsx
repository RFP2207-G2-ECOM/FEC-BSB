import React, { useRef, useCallback } from "react"

import Helpful from "../Helpful.jsx"
import Report from "../Report.jsx"
import StaticRating from "../StarRating.jsx"
import PosterTag from "../PosterTag.jsx"

import styles from "../../styles/Reviews/reviewTile.css"

const ReviewTile = ({ id, array, index, loading, hasMore, moreReviews, rating, username, date, summary, body, photos, recommend, response, helpful, setReviewsToRender }) => {

  console.log(photos)
  // observer references when last review tile is visible,
  // callback pulls more review data
  const observer = useRef()
  const lastReviewElementRef = useCallback(node => {
    if (loading) return
    if (observer.current) observer.current.disconnect()
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && moreReviews && hasMore) {
        setReviewsToRender(prevNumber => prevNumber + 1)
      }
    })
    if (node) observer.current.observe(node)
  }, [loading, hasMore])

  const isValidHttpUrl = (string) => {
    let url;

    try {
      url = new URL(string);
    } catch (_) {
      return false;
    }
    return url.protocol === "http:" || url.protocol === "https:";
  }


  return (
    <>
      <div className="Review-Tile-Container">
        <div className="review-tile-header">
          <div className="review-tile-rating"><StaticRating key={id} rating={rating}/></div>
          <div className="review-tile-posterTag"><PosterTag username={username} date={date}/></div>
        </div>
        <div className="review-tile-summary">{summary}</div>
        <div className="review-tile-body">{body}</div>
        {photos.length > 0 &&
          <div className="review-tile-photos">
            {
              photos.map(photo => {
                if (isValidHttpUrl(photo.url)) { return (<img className='review-tile-photo' src={photo.url} alt=''/>) }
              })
            }
          </div>
        }
        {recommend === true &&
          <div className="review-tile-recommend">I recommend this product</div>
        }
        {response !== null &&
          <div className="review-tile-response">{response}</div>
        }
        <div className="review-tile-footer">
          <div className="review-tile-helpful">
            <Helpful
              helpful={helpful}
              helpfulType="review"
              id={id}
            />
          </div>
          <div className="review-tile-report">
            <Report
              reportType="review"
              id={id}
            />
          </div>
        </div>
      </div>
      {array.length === index + 1 &&
        <div ref={lastReviewElementRef} className='invisible'></div>
      }
    </>
  )
}



export default ReviewTile