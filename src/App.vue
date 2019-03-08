<template>
  <div id="app">
    <Header phone="8 (495) 920-74-30"/>
    <Main/>
    <Footer/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import HelloWorld from './components/HelloWorld.vue'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Main from './components/Main.vue'

@Component({
  components: {
    HelloWorld,
    Header,
    Footer,
    Main
  }
})
export default class App extends Vue {}
</script>

<style>
#app {
  font-family: 'Open Sans', sans-serif;;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
