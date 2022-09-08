import React, { useState, useRef, useCallback } from "react"
import { FiCheck } from "react-icons/fi"

import Helpful from "../Helpful.jsx"
import Report from "../Report.jsx"
import StaticRating from "../StarRating.jsx"
import PosterTag from "../PosterTag.jsx"
import ZoomInModal from "../ZoomInModal.jsx"

import styles from "../../styles/Reviews/reviewTile.css"

const ReviewTile = ({ id, array, index, loading, hasMore, moreReviews, rating, username, date, summary, body, photos, recommend, response, helpful, setReviewsToRender }) => {

  const [curPic, setCurPic] = useState(0)
  const [isZoomIn, setIsZoomIn] = useState(false)

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

  // picture url validator
  const isValidHttpUrl = (string) => {
    let url;

    try {
      url = new URL(string);
    } catch (_) {
      return false;
    }
    return url.protocol === "http:" || url.protocol === "https:";
  }

  const handleZoom = (e) => {
    setCurPic(Number(e.target.id))
    setIsZoomIn(true)
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
              photos.map((photo, i) => <img key={i} id={i} className='review-tile-photo hover' src={photo.url} alt='' onClick={(e) => handleZoom(e)}/>)
            }
          </div>
        }
        {recommend === true &&
          <div className="review-tile-recommend">
            <div className='review-tile-recommend-icon'><FiCheck /></div>
            <div>I recommend this product</div>
          </div>
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
      <ZoomInModal
        open={isZoomIn}
        curPic={curPic}
        listOfPics={photos.map(photo => photo.url)}
        setCurPic={setCurPic}
        onClose={() => setIsZoomIn(false)}
      />
    </>
  )
}

export default ReviewTile