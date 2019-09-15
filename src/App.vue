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
        src: url(fonts/GothamPro.otf)
    }
    @font-face {
        font-family: GothamPro-Medium;
        src: url(fonts/GothamPro-Medium.otf)
    }
    @font-face {
        font-family: GothamPro-Bold;
        src: url(fonts/GothamPro-Bold.otf)
    }
    @font-face {
        font-family: FedraSerifAPro;
        src: url(fonts/FedraSerifAPro.otf)
    }
    @font-face {
        font-family: FedraSerifAPro-Medium;
        src: url(fonts/FedraSerifAPro-Medium.otf)
    }
    @font-face {
        font-family: FedraSerifAPro-Medium-Italic;
        src: url(fonts/FedraSerifAPro-Medium-Italic.ttf)
    }
    @font-face {
        font-family: FedraSerifAPro-Bold;
        src: url(fonts/FedraSerifAPro-Bold.otf)
    }
    @font-face {
        font-family: FedraSerifAPro-Italic;
        src: url(fonts/FedraSerifAPro-Italic.otf)
    }
    #app {
        font-family: GothamPro, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        font-size: 1.2rem;
        color: black;
        background-color: #f0f0f0;
        max-width: 144rem;
        min-width: 136.6rem;
        float: none;
        margin: 0 auto;
        position: relative;
        border-left: 0.1rem solid black;
        border-right: 0.1rem solid black;
    }

    html {
        font-size: 10px;
    }

    input, textarea, button {
        font-family: 'Open Sans', sans-serif;
    }
</style>