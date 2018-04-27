<template>
  <nav>
    <span class="about" v-show="loggedIn">Welcome {{ auth.username }} [<a href="#" id="logout-link" @click="logout" role="button">Log out</a>]</span>
    <button class="login" @click="login" v-show="auth.enabled && !loggedIn">Log In</button>
    <button class="display-upload" @click="displayUpload" v-show="!uploadEnabled && (!auth.enabled || loggedIn)">Upload a file</button>
  </nav>
</template>

<script>
export default {
  props: [ 'auth', 'uploadEnabled' ],
  computed: {
    loggedIn() {
      return this.auth.enabled && this.auth.token // TODO: duplicate code
    }
  },
  methods: {
    login() {
      if (process.browser) {
        window.location.href = this.auth.loginUrl
      }
    },
    logout() {
      return this.auth.logout()
    },
    displayUpload() {
      this.$emit('display-upload')
    }
  }
}
</script>

<style scoped>
nav {
  padding: 20px 40px;
}

nav span {
  cursor: pointer;
}

.about {
  float: left;
}

.login, .display-upload {
  float: right;
}

#logout-link {
  color: white
}
</style>
