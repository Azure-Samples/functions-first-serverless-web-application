<template>
  <section class="container">
    <main>
      <app-loader id="initialization-loader" v-show="loading" :text="loaderText" />
      <div v-show="!loading">
        <app-navigation 
          :auth="auth" 
          :upload-enabled="uploadEnabled"
          @display-upload="uploadEnabled = true"
        />
        <app-masthead />
        <app-upload 
          v-show="uploadEnabled"
          @hide-upload="uploadEnabled = false"
          @file-uploading="onFileUploading"
          @file-upload-completed="onFileUploadCompleted"
          @file-upload-progress-changed="onFileUploadProgress"
          :api="api"
        />
        <app-photogrid :images="images" />
      </div>
    </main>
  </section>
</template>

<script>
import AppNavigation from '~/components/AppNavigation.vue'
import AppMasthead from '~/components/AppMasthead.vue'
import AppPhotogrid from '~/components/AppPhotogrid.vue'
import AppLoader from '~/components/AppLoader.vue'
import AppUpload from '~/components/AppUpload.vue'
import staticImages from '~/app/staticImages'
import Api from '~/app/Api'

export default {
  data() {
    const data = {
      images: [],
      initialized: false,
      auth: {},
      apiBaseUrl: '',
      blobBaseUrl: '',
      api: {},
      uploadEnabled: false,
      fileUploading: false,
      loaderText: 'Loading...'
    }
    if (process.browser) {
      data.auth = {
        enabled: window.authEnabled,
        token: window.auth.token,
        loginUrl: window.auth.loginUrl
      }
      data.apiBaseUrl = window.apiBaseUrl
      data.blobBaseUrl = window.blobBaseUrl
    }
    return data
  },
  computed: {
    backendEnabled() {
      return !!this.apiBaseUrl
    },
    loading() {
      return !this.initialized || this.fileUploading
    }
  },
  methods: {
    onFileUploading() {
      this.loaderText = ''
      this.uploadEnabled = false
      this.fileUploading = true
    },
    onFileUploadCompleted() {
      return this.api.getImages()
        .then(images => {
          this.images = images
          this.fileUploading = false
        })
    },
    onFileUploadProgress(progressText) {
      this.loaderText = progressText
    }
  },
  components: {
    AppNavigation,
    AppMasthead,
    AppPhotogrid,
    AppLoader,
    AppUpload
  },
  mounted() {
    if (this.backendEnabled) {
      this.api = new Api(this.apiBaseUrl, this.auth.token, this.blobBaseUrl)
      this.api.getImages().then(images => {
        this.images = images
        this.initialized = true
      })
    } else {
      this.images = staticImages()
      this.initialized = true
    }
  }
};
</script>

<style>
.container {
  min-height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  text-align: center;
  padding: 0 10vw;
}

main {
  width: 100%;
}
</style>
