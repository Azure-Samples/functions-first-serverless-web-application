<template>
  <section class="container">
    <main>
      <app-masthead />
      <app-upload />
    </main>
  </section>
</template>

<script>
import AppMasthead from '~/components/AppMasthead.vue'
import AppUpload from '~/components/AppUpload.vue'

export default {
  components: {
    AppMasthead,
    AppUpload
  }
}
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
  position: relative;
}
</style>
