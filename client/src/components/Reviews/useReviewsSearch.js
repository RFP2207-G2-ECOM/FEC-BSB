import { useEffect, useState, useContext } from "react"
import axios from "axios"

import { ProductContext } from "../../contexts/product-info.context.jsx"

const gitHubToken = process.env.GITHUB_TOKEN
const baseURI = process.env.BASE_URI

export default function useReviewsSearch(pageNumber, reviewCount, reviewSort, starFilters) {

  let { productID } = useContext(ProductContext)

  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [reviews, setReviews] = useState([])
  const [hasMore, setHasMore] = useState(false)

  useEffect(() => {
    setReviews([])
  }, [pageNumber, reviewSort, reviewCount, starFilters])

  useEffect(() => {
    setLoading(true)
    setError(false)
    axios.get(`${baseURI}reviews/`, {
      headers: {
        Authorization: gitHubToken
      },
      params: {
        page: pageNumber,
        count: reviewCount,
        sort: reviewSort,
        product_id: Number(productID)
      }
    }).then(res => {
      setReviews(prevReviews => {
        return [...prevReviews, ...res.data.results]})
      setHasMore(res.data.results.length > 0)
      setLoading(false)
    }).catch(err => {
      console.log(err)
      setError(true)
    })
  }, [pageNumber, reviewCount, reviewSort, starFilters])
  return { loading, error, reviews, hasMore }
}