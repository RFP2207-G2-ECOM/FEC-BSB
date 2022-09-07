import { useEffect, useState } from "react"
import axios from "axios"

import usePhotoSubmit from "./usePhotoSubmit.js"

const gitHubToken = process.env.GITHUB_TOKEN
const baseURI = process.env.BASE_URI
const productID = Number(process.env.PRODUCT_ID)

export default function useReviewSubmit (onClose, submitPressed, setSubmitPressed, starRating, recommended, characteristics, reviewSummary, reviewBody, files, nickname, email) {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    setLoading(true)
    setError(false)

    const data = {
      product_id: productID,
      rating: starRating,
      summary: reviewSummary,
      body: reviewBody,
      recommend: recommended,
      name: nickname,
      email: email,
      photos: [],
      characteristics: characteristics
    }

    if (submitPressed) {

      files.map(photo => {
        var formData = new FormData();
        formData.append('file', photo);
        formData.append('upload_preset', 'my-uploads');

        axios.post('https://api.cloudinary.com/v1_1/dmxak8uva/image/upload', formData)
          .then(response => {
            data.photos = [...data.photos, response.data.url]

            if (data.photos.length === files.length) {
              axios.post(`${baseURI}reviews/`, data, {
                headers: {
                  Authorization: gitHubToken
                }
              }).then(() => {
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
          })
      })
    }
  }, [submitPressed])
  return { loading, error }
}