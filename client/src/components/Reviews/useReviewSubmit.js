import { useEffect, useState } from "react"
import axios from "axios"

const gitHubToken = process.env.GITHUB_TOKEN
const baseURI = process.env.BASE_URI
const productID = Number(process.env.PRODUCT_ID)

export default function useReviewSubmit (onClose, submitPressed, setSubmitPressed, starRating, recommended, characteristics, reviewSummary, reviewBody, photos, nickname, email) {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    setLoading(true)
    setError(false)

    if (submitPressed) {

      const data = {
        product_id: productID,
        rating: starRating,
        summary: reviewSummary,
        body: reviewBody,
        recommend: recommended,
        name: nickname,
        email: email,
        photos: photos,
        characteristics: characteristics
      }

      // insert cloudinary post request here

      axios.post(`${baseURI}reviews/`, data, {
        headers: {
          Authorization: gitHubToken
        }
      }).then(() => {
        console.log('success!')
        setLoading(false)
        setSubmitPressed(false)
        onClose()
      }).catch(err => {
        console.log(err)
        setError(true)
        setLoading(false)
        setSubmitPressed(false)
      })
    }
  }, [submitPressed])
  return { loading, error }
}