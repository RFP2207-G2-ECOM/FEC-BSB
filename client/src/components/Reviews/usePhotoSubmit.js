import { useEffect, useState } from "react"
import axios from "axios"

export default function usePhotoSubmit (files, photoURLs, setPhotoURLs, setLoadingPhotos) {
  const [picLoading, setPicLoading] = useState(true)
  const [picError, setPicError] = useState(false)
  useEffect(() => {
    if (files) {
      setPicLoading(true)
      setPicError(false)

      files.map(photo => {
        var formData = new FormData();
        formData.append('file', photo);
        formData.append('upload_preset', 'my-uploads');

        axios.post('https://api.cloudinary.com/v1_1/dmxak8uva/image/upload', formData)
          .then(response => {
            setPhotoURLs([...photoURLs, response.data.url])
            setPicLoading(false)
            setLoadingPhotos(false)
          }).catch(err => {
            console.log(err)
            setPicLoading(false)
            setPicError(true)
            setLoadingPhotos(false)
          })
      })
    }
  }, [loadingPhotos])

  return { picLoading, picError }
}