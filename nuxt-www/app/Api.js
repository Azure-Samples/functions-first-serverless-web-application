import axios from 'axios'

class Api {
  constructor(baseUrl, authToken, blobBaseUrl) {
    this.baseUrl = baseUrl
    this.authToken = authToken
    this.blobBaseUrl = blobBaseUrl
  }

  getImages() {
    return axios.get(`${this.baseUrl}/api/GetImages`)
      .then(response => {
        if (response.status === 200) {
          return response.data.map(i => {
            if (this.blobBaseUrl) {
              i.imagePath = this.blobBaseUrl + i.imagePath
              i.thumbnailPath = this.blobBaseUrl + i.thumbnailPath
            }
            return i
          })
        } else {
          throw response.data
        }
      })
  }

  uploadImage(file) {
    console.dir(file)
    return new Promise(resolve => setTimeout(resolve, 4000))
  }
}

export default Api
