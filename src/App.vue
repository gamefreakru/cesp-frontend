<template>
  <div id="app">
    <Header phone="8 (495) 920-74-30"/>
    <router-view/>
    <Footer/>
  </div>
</template>

<script>

import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
  components: {
    Header,
    Footer
  }
}
</script>

<style>
#app {
  font-family: 'Open Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #f0f0f0;
}

input, textarea, button {
  font-family: 'Open Sans', sans-serif;
}
</style>
