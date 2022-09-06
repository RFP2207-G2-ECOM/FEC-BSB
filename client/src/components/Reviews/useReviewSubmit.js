import { useEffect, useState } from "react"
import axios from "axios"

import usePhotoSubmit from "./usePhotoSubmit.js"

const gitHubToken = process.env.GITHUB_TOKEN
const baseURI = process.env.BASE_URI
const productID = Number(process.env.PRODUCT_ID)

export default function useReviewSubmit (onClose, submitPressed, setSubmitPressed, starRating, recommended, characteristics, reviewSummary, reviewBody, files, nickname, email) {
  const [loading, setLoading] = useState(false)
  const [loadingPhotos, setLoadingPhotos] = useState(false)
  const [error, setError] = useState(false)
  const [photoURLs, setPhotoURLs] = useState([])

  useEffect(() => {
    setLoading(true)
    setLoadingPhotos(true)
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
        photos: photoURLs,
        characteristics: characteristics
      }

      // insert cloudinary post request here
      // const { picLoading, picError } = usePhotoSubmit(files, photoURLs, setPhotoURLs, setLoadingPhotos)

      if (!loadingPhotos) {
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
    }
  }, [submitPressed])
  return { loading, error }
}