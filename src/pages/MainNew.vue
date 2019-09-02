<template>
<div class="container">
    <div class="top-information">
        <div style="width: 75rem; 
        height: 75rem; 
        background-color: #fff7d4;
        border-radius: 50rem / 60rem;
        position: absolute;
        top: -20rem;
        right: 55rem;"
        ></div>
        <img class="logo-background" src="../assets/main/background.png"
             srcset="../assets/main/background@2x.png 2x" alt="">
        <img class="logo" src="../assets/main/logo.png"
             srcset="../assets/main/logo@2x.png 2x, ../assets/main/logo@3x.png 3x" alt="">
    </div>
</div>    
</template>

<script>
    export default {
        name: ""
    }
</script>

<style scoped>

    .container {
        height: 130rem;
    }    
    
    .top-information {
        
    }
    
    .logo-background {
        float: right;   
        position: absolute;
        right: 0;
    }
    
    .logo {
        position: absolute;
        right: 108rem;
        top: 8rem;
    }
    
</style>