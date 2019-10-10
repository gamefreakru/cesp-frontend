<template>
    <router-link id="container" :to="link" append>
        <img :alt="name" :src="image"/>
        <span id="name">{{ name }}</span>            
    </router-link>
</template>

<script>
    export default {
        props: {
            image: String,
            name: String,
            link: String
        }
    }
</script>

<style scoped>

    #container {
        width: 270px;
        height: auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        color: #0089FF;
        font-size: 1.6rem;
        text-align: center;
        text-decoration: none;
    }
    
    img {
        max-width: 23rem;
        max-height: 14rem;
    }
    
    #name {
        color: #0089FF;
        font-size: 1.6rem;
        margin-top: 1rem;
    }
    
    #name:hover {
        color: #83C6FF;
    }
    
</style>