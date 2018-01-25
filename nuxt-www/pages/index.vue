<template>
  <section class="container">
    <main>
      <app-masthead />
      <app-photogrid />
    </main>
  </section>
</template>

<script>
import AppMasthead from '~/components/AppMasthead.vue'
import AppPhotogrid from '~/components/AppPhotogrid.vue'

export default {
  components: {
    AppMasthead,
    AppPhotogrid
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
}
</style>
