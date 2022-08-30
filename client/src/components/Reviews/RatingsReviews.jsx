import React, {useState, useEffect, useContext} from "react";
import { ProductReviewsContext } from "../../contexts/product-reviews.context.jsx"

import axios from "axios";

import MoreReviewsButton from "./MoreReviewsButton.jsx";
import ProductBreakdown from "./ProductBreakdown.jsx";
import RatingsBreakdown from "./RatingsBreakdown.jsx";
import ReviewsList from "./ReviewsList.jsx";
import useReviewsSearch from "./useReviewsSearch.js";

import styles from "../../styles/Reviews/reviews.css";

const RatingsReviews = () => {

  // let reviewsToRender = findReviews()
  // console.log(reviewsToRender)

  // const gitHubToken = process.env.GITHUB_TOKEN
  // const baseURI = process.env.BASE_URI;
  // const productID = Number(process.env.PRODUCT_ID);

  // let { reviews } = useContext(ProductReviewsContext)
  let { metadata } = useContext(ProductReviewsContext)
  let ratings = {...metadata.ratings}
  const ratingsCount =
    Object.values(ratings).reduce((a, b) => Number(a) + Number(b), 0);


  const [reviewsToRender, setReviewsToRender] = useState([]);
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
    if(reviews[0] !== undefined) {
      setFilteredReviews(reviews[0])
    }
  }, [reviews])


  // const findReviews = () => {
  //   axios.get(`${baseURI}reviews/`, {
  //     headers: {
  //       Authorization: gitHubToken
  //     },
  //     params: {
  //       page: pageNumber,
  //       count: reviewCount,
  //       sort: reviewSort,
  //       product_id: productID
  //     }
  //   })
  //     .then(results => {
  //       console.log('this is reviews data:', results)
  //       setReviews(reviews => results.data.results)
  //       setFilteredReviews(filteredReviews => results.data.results)
  //     })
  //     .catch(err => console.log(err))
  // }

  // const findReviewMetadata = () => {
  //   axios.get(`${baseURI}reviews/meta`, {
  //     headers: {
  //       Authorization: gitHubToken
  //     },
  //     params: {
  //       product_id: productID
  //     }
  //   })
  //     .then(results => {
  //       setReviewMetadata(reviewsMetadata => results.data)
  //       setRatings(ratingsMetadata => results.data.ratings)
  //     })
  //     .catch(err => console.log(err))
  // }

  // useEffect(() => {
  //   const reviewsResults = findReviews(1, 2, 'relevant')
  //   console.log('these are reviewsResults:', reviewsResults)

  //   // setReviews(findReviews())
  //   // setReviewMetadata(findReviewMetadata())
  // }, [])

  // useEffect(() => {
  //   console.log('these are the reviewsToRender:', findReviews())
  // }, [])

  // useEffect(() => {
  //   if (reviews !== undefined) {
  //     setFilteredReviews(reviews => reviews)
  //   }
  // }, [reviews])

  // useEffect(() => {
  //   findReviews();
  // }, [reviewSort, reviewCount])

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
          ratingsCount={ratingsCount}
          setReviewSort={setReviewSort}
        />
      </div>
      <div className="Buttons-Container">
        <MoreReviewsButton
          setReviewCount={setReviewCount}
          ratingsCount={ratingsCount}
        />
        <button className="add-a-review-button">ADD A REVIEW</button>
      </div>
    </div>
  )
}



export default RatingsReviews