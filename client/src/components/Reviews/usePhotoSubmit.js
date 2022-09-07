import axios from "axios"

export default function usePhotoSubmit (files) {

  var data = []
  var loadingPhotos = true

  if (files) {

    files.map(photo => {
      var formData = new FormData();
      formData.append('file', photo);
      formData.append('upload_preset', 'my-uploads');

      axios.post('https://api.cloudinary.com/v1_1/dmxak8uva/image/upload', formData)
        .then(response => {
          data = [...data, response.data.url]
          console.log('this is the response.data.url:', response.data.url)
          console.log('these are the urls:', data)
          console.log('these are the files:', files)
          if(data.length === files.length) {
            loadingPhotos = false
          }
        }).catch(err => {
          console.log(err)
          loadingPhotos = false
        })
    })
  }
  return { data, loadingPhotos }
}