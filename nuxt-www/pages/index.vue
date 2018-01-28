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

export default {
  data() {
    const data = {
      images: [],
      initialized: false,
      auth: {},
      apiBaseUrl: ''
    }
    if (process.browser) {
      data.auth = {
        enabled: window.authEnabled,
        token: window.auth.token,
        loginUrl: window.auth.loginUrl
      }
      data.apiBaseUrl = window.apiBaseUrl
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
        setTimeout(function() {
          this.initialized = true
        }.bind(this), 3000)
      } else {
        // blanks
        this.images = Array(10).fill().map((_, i) => {
          return {
            id: i + 1,
            imgPath: '',
            thumbnailPath: 'https://lorempixel.com/200/200/cats/?' + i,
            description: {
              captions: [
                { text: '' }
              ]
            }
          }
        })
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
