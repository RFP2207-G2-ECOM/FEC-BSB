import { useEffect, useState} from "react"
import axios from "axios"

const gitHubToken = process.env.GITHUB_TOKEN
const baseURI = process.env.BASE_URI
const productID = Number(process.env.PRODUCT_ID)

export default function useReviewsSearch(pageNumber, reviewCount, reviewSort) {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [reviews, setReviews] = useState([])
  const [hasMore, setHasMore] = useState(false)

  useEffect(() => {
    setReviews([])
  }, [reviewSort, reviewCount])

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
        product_id: productID
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
  }, [pageNumber, reviewCount, reviewSort])
  return { loading, error, reviews, hasMore }
}