<template>
  <div id="app">
    <Header phone="8 (495) 920-74-30"/>
    <Main phone="8 495 9207430"
          additional-phone="8 916 1691837"
          address="Москва, Малый Каретный переулок 11/1"
          email="info@centroespanol.ru"
          v-bind:metro-stations-info="['метро Цветной Бульвар - 6 минут пешком',
           'метро Трубная - 11 минут пешком',
           'метро Чеховская - 12 минут пешком']"/>
    <Footer/>
  </div>
</template>

<script>

import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Main from './components/Main.vue'

export default {
  components: {
    Header,
    Main,
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
