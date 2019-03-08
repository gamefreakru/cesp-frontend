<template>
  <div id="app">
    <Header phone="8 (495) 920-74-30"/>
    <HelloWorld msg="Добро пожаловать на сайт испанского"/>
    <Footer/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import HelloWorld from './components/HelloWorld.vue'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

@Component({
  components: {
    HelloWorld,
    Header,
    Footer
  }
})
export default class App extends Vue {}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
