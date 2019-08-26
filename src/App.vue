<template>
    <div id="app">
        <Header/>
        <router-view/>
        <Footer/>
    </div>
</template>

<script>

    import Header from './components/HeaderNew.vue'
    import Footer from './components/FooterNew.vue'

    export default {
        components: {
            Header,
            Footer
        }
    }
    
</script>

<style>
    @import "main.css";
    @font-face {
        font-family: GothamPro;
        src: url(fonts/GothamPro.woff)
    }
    @font-face {
        font-family: GothamPro-Bold;
        src: url(fonts/GothamPro-Bold.woff)
    }
    #app {
        font-family: GothamPro, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        font-size: 1.2rem;
        color: black;
        background-color: #f0f0f0;
    }
    
    html {
        font-size: 10px;
    }

    input, textarea, button {
        font-family: 'Open Sans', sans-serif;
    }
</style>
