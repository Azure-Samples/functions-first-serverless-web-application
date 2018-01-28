<template>
  <section class="container">
    <main>
      <app-loader v-show="!initialized" />
      <div v-show="initialized">
        <app-navigation :auth="auth" />
        <app-masthead />
        <app-photogrid />
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
      initialized: false
    }
    if (process.browser) {
      data.auth ={
        enabled: window.authEnabled,
        token: window.auth.token,
        loginUrl: window.auth.loginUrl
      }
      data.apiBaseUrl = window.apiBaseUrl
    }
    return data
  },
  components: {
    AppNavigation,
    AppMasthead,
    AppPhotogrid,
    AppLoader
  },
  mounted() {
    setTimeout(function() {
      this.initialized = true
    }.bind(this), 3000)
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
