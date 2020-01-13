<template>
    <div id="app">
        <vue-extend-layout/>
    </div>
</template>

<script>
    
    import VueExtendLayout from 'vue-extend-layout'

    export default {
        components: {
            VueExtendLayout
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
        background-color: white;
        max-width: 144rem;
        min-width: 76.8rem;
        float: none;
        margin: 0 auto;
        position: relative;
        box-shadow: 0 0.5rem 0 0 white, 0 -0.5rem 0 0 white, 0.8rem 0 1rem -0.4rem rgba(0, 0, 0, 0.3), -0.8rem 0 1rem -0.4rem rgba(0, 0, 0, 0.3);
    }

    html {
        font-size: 10px;
    }

    input, textarea, button {
        font-family: 'Open Sans', sans-serif;
    }
</style>