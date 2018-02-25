import axios from 'axios'

class Api {
  constructor(baseUrl, authToken, blobBaseUrl) {
    this.baseUrl = baseUrl
    this.authToken = authToken
    this.blobBaseUrl = blobBaseUrl
  }

  getImages() {
    const config = {
      headers: {
        'X-ZUMO-AUTH': this.authToken
      }
    }
    return axios.get(`${this.baseUrl}/api/GetImages`, config)
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

  uploadImage(file, uploadProgressCallback) {
    return this._getUploadSasUri(file.name)
      .then(sasUrl => this._uploadBlob(sasUrl, file, uploadProgressCallback))
      .then(() => this._waitForFile(file.name))
  }

  getUsername() {
    const config = {
      headers: {
        'X-ZUMO-AUTH': this.authToken
      }
    }
    return axios.get(`${this.baseUrl}/.auth/me`, config)
      .then(response => {
          const userDetails = response.data[0]
          const userFirstName = userDetails.user_claims.find(function (i) { return i.typ === 'http://schemas.xmlsoap.org/ws/2005/05/identity/claims/givenname' });
          return userFirstName ? userFirstName.val : null
        });
  }

  _getUploadSasUri(filename) {
    const config = {
      headers: {
        'X-ZUMO-AUTH': this.authToken
      },
      params: {
        filename
      }
    }
    return axios.get(`${this.baseUrl}/api/GetUploadUrl`, config)
      .then(response => response.data.url)
  }

  _uploadBlob(sasUrl, file, uploadProgressCallback) {
    const config = {
      headers: {
        'Content-Type': 'application/octet-stream',
        'x-ms-version': '2017-04-17',
        'x-ms-blob-type': 'BlockBlob',
        'x-ms-blob-content-type': file.type
      },
      onUploadProgress(e) {
        if (e.lengthComputable) {
          uploadProgressCallback(e.loaded / e.total * 100)
        } else {
          uploadProgressCallback(0)
        }
      }
    }
    return axios.put(sasUrl, file, config)
      .then(() => sasUrl)
  }

  _waitForFile(filename) {
    return new Promise(resolve => {
      setTimeout(() => {
        this.getImages()
          .then(images => {
            if (images.some(i => i.id === filename)) {
              resolve(filename)
            } else {
              resolve(this._waitForFile(filename))
            }
          })
      }, 500);
    })
  }
}



export default Api
