<template>
  <div>
    <nuxt/>
  </div>
</template>

<script>
</script>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  background: #191919 url(/bk-gradient.jpg) no-repeat center bottom fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  color: white;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

[role='button'],
input[type='submit'],
input[type='reset'],
input[type='button'],
button {
  -webkit-box-sizing: content-box;
  -moz-box-sizing: content-box;
  box-sizing: content-box;
}

/* Reset `button` and button-style `input` default styles */
input[type='submit'],
input[type='reset'],
input[type='button'],
button {
  background: none;
  border: 0;
  color: inherit;
  /* cursor: default; */
  font: inherit;
  line-height: normal;
  overflow: visible;
  padding: 0;
  -webkit-appearance: button; /* for input */
  -webkit-user-select: none; /* for button */
  -moz-user-select: none;
  -ms-user-select: none;
}

input::-moz-focus-inner,
button::-moz-focus-inner {
  border: 0;
  padding: 0;
}

button {
  display: inline-block;
  border-radius: 4px;
  background: #0284a8;
  text-decoration: none;
  padding: 10px 30px;
  cursor: pointer;
}
</style>
