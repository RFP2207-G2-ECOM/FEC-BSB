import { useEffect, useState } from "react"
import axios from "axios"

const gitHubToken = process.env.GITHUB_TOKEN
const baseURI = process.env.BASE_URI
const productID = Number(process.env.PRODUCT_ID)

export default function useReviewSubmit (
  characteristics,
  onClose,
  email,
  files,
  nickname,
  recommended,
  reviewBody,
  reviewSummary,
  setSubmitPressed,
  starRating,
  submitPressed
) {
  const [loadingModal, setLoadingModal] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    setLoadingModal(true)
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

      if (files.length === 0) {
        axios.post(`${baseURI}reviews/`, data, {
          headers: {
            Authorization: gitHubToken
          }
        }).then(res => {
          console.log(res)
          setLoadingModal(false)
          setSubmitPressed(false)
          onClose()
        }).catch(err => {
          console.log(err)
          setError(true)
          setLoadingModal(false)
          setSubmitPressed(false)
        })
        return
      }

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
              }).then(res => {
                console.log(res)
                setLoadingModal(false)
                setSubmitPressed(false)
                onClose()
              }).catch(err => {
                console.log(err)
                setError(true)
                setLoadingModal(false)
                setSubmitPressed(false)
              })
            }
          })
      })
    }
  }, [submitPressed])
  return { loadingModal, error }
}