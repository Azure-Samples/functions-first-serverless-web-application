<template>
  <nav>
    <span class="about">About</span>
    <button class="login" @click="login" v-show="auth.enabled">Log In</button>
    <button class="display-upload" @click="displayUpload" v-show="!uploadEnabled">Upload a file</button>
  </nav>
</template>

<script>
export default {
  props: [ 'auth', 'uploadEnabled' ],
  methods: {
    login() {
      alert(this.auth.loginUrl)
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
</style>
