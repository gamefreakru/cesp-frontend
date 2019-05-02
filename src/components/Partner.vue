<template>
    
    <div id="container">
        
        <a :href="link">
            <img :alt="name" :src="image"/>
            <span id="name">{{ name }}</span>            
        </a>
        
    </div>
    
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
        font-size: 1.2rem;
    }
    
    img {
        width: 230px;
        height: 140px;
    }
    
    a {
        text-decoration: none;
    }
    
    #name {
        color: #0089FF;
        font-size: 1.2rem;
    }
    
    #name:hover {
        color: #83C6FF;
    }
    
</style>