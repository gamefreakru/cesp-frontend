<template>
    <router-link class="link-button-container" :to=link>
        <span>{{title}}</span>
        <img class="link-button-arrow-image" src="../assets/common/arrow.svg" alt=""/>
    </router-link>
</template>

<script>
    export default {
        props: {
            title: String,
            link: String
        }
    }
</script>

<style scoped>
    
    .link-button-container {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 5.3rem;
        border: solid 0.2rem rgba(0, 0, 0, 0.15);
        border-radius: 0.8rem;
        padding: 0 3.5rem;
        text-decoration: none;
        font-family: GothamPro-Bold, sans-serif;
        font-size: 1.4rem;
        text-transform: uppercase;
        color: black;
    }
    
    .link-button-arrow-image {
        margin-left: 1rem;
    }
    
</style>