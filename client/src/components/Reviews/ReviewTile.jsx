import React, { useRef, useCallback } from "react"

import Helpful from "../Helpful.jsx"
import Report from "../Report.jsx"
import StaticRating from "../StarRating.jsx"
import PosterTag from "../PosterTag.jsx"

import styles from "../../styles/Reviews/reviewTile.css"

const ReviewTile = ({ id, array, index, loading, hasMore, rating, username, date, summary, body, photos, recommend, response, helpful, setPageNumber }) => {

  // observer references when last review tile is visible,
  // callback pulls more review data
  const observer = useRef()
  const lastReviewElementRef = useCallback(node => {
    if (loading) return
    if (observer.current) observer.current.disconnect()
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && hasMore) {
        setPageNumber(prevPageNumber => prevPageNumber + 1)
      }
    })
    if (node) observer.current.observe(node)
  }, [loading, hasMore])

  // finds word break in summary line and pushes overflow text to next line
  let summaryLine1 = summary
  let summaryLine2
  if (summary.length > 57) {
    let index = 57
    if (summary.indexOf(' ', 57) !== -1) {
      index = summary.lastIndexOf(' ', 57)
    }
    summaryLine1 = summary.substring(0, index) + '...'
    summaryLine2 = '...' + summary.substring(index + 1)
  }

  return (
    <div className="Review-Tile-Container">
      <div className="review-tile-header">
        <div className="review-tile-rating"><StaticRating key={id} rating={rating}/></div>
        <div className="review-tile-posterTag"><PosterTag username={username} date={date}/></div>
      </div>
      <div className="review-tile-summaryLine1">{summaryLine1}</div>
      {summaryLine2 !== undefined &&
        <div className="review-tile-summaryLine2">{summaryLine2}</div>
      }
      <div className="review-tile-body">{body}</div>
      {photos.length > 0 &&
        <div className="review-tile-photos">Photos go here!</div>
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
      {array.length === index + 1 &&
        <div ref={lastReviewElementRef} className='invisible'></div>
      }
    </div>
  )
}



export default ReviewTile