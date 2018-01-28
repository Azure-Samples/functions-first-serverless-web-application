<template>
  <section class="container">
    <main>
      <app-loader v-show="!initialized" />
      <div v-show="initialized">
        <app-navigation :auth="auth" />
        <app-masthead />
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
      api: {}
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
    }
  },
  components: {
    AppNavigation,
    AppMasthead,
    AppPhotogrid,
    AppLoader
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
