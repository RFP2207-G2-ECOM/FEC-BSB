import React, {useState, useEffect, useContext} from "react";
import axios from "axios";

// import { ProductContext } from '../../contexts/product-info.context.jsx';

import ReviewsList from "./ReviewsList.jsx";
import RatingsBreakdown from "./RatingsBreakdown.jsx";
import ProductBreakdown from "./ProductBreakdown.jsx";

import styles from "../../styles/Reviews/reviews.css";

const RatingsReviews = () => {

  const gitHubToken = process.env.GITHUB_TOKEN
  const baseURI = process.env.BASE_URI;
  const productID = Number(process.env.PRODUCT_ID);

  const [reviews, setReviews] = useState([]);
  const [filteredReviews, setFilteredReviews] = useState([]);
  const [reviewMetadata, setReviewMetadata] = useState({});
  const [ratings, setRatings] = useState({});
  const [reviewSort, setReviewSort] = useState('relevant');
  const [reviewCount, setReviewCount] = useState(2);

  const findReviews = () => {
    axios.get(`${baseURI}reviews/`, {
      headers: {
        Authorization: gitHubToken
      },
      params: {
        page: 1,
        count: reviewCount,
        sort: reviewSort,
        product_id: productID
      }
    })
      .then(results => {
        console.log('this is the review get request:', results.data.results)
        setReviews(reviews => results.data.results)
        setFilteredReviews(filteredReviews => results.data.results)
      })
      .catch(err => console.log(err))
  }

  const findReviewMetadata = () => {
    axios.get(`${baseURI}reviews/meta`, {
      headers: {
        Authorization: gitHubToken
      },
      params: {
        product_id: productID
      }
    })
      .then(results => {
        console.log('this is the review metadata get request:', results.data)
        setReviewMetadata(reviewsMetadata => results.data)
        setRatings(ratingsMetadata => results.data.ratings)
      })
      .catch(err => console.log(err))
  }

  useEffect(() => {
    findReviews();
    findReviewMetadata();
  }, [])

  return (
    <div className="RR-Container">
      <div className="rr-title">RATINGS & REVIEWS</div>
      <div className="Module-Container">
        <div className="Breakdown-Container">
          <RatingsBreakdown />
          <ProductBreakdown />
        </div>
        <ReviewsList
          filteredReviews={filteredReviews}
          ratings={ratings}
        />
      </div>
    </div>
  )
}



export default RatingsReviews