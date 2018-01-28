<template>
  <nav>
    <span class="about">About</span>
    <button class="login" @click="login">Log In</button>
  </nav>
</template>

<script>
export default {
  props: [ 'auth' ],
  methods: {
    login() {
      alert(this.auth.loginUrl)
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

.login {
  float: right;
}
</style>
