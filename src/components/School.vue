<template>
    
    <div id="container">
        
        <ImageCircle :image="image" :text="name" :width=240 :height=240 />
        <a id="name" :href="link">{{ name }}</a>
        <span id="sub-name">{{ subName }}</span>
        <div id="description">{{ description }}</div>
        
    </div>
    
</template>

<script>
    
    import ImageCircle from "./ImageCircle"
    
    export default {
        components: {
            ImageCircle
        },
        props: {
            image: String,
            name: String,
            link: String,
            subName: String,
            description: String
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
        padding: 5px;
    }
    
    #name {
        color: #465F99;
        text-decoration: none;
        font-size: 1.5rem;
        font-weight: bold;
        margin-top: 20px;
    }
    
    #name:hover {
        color: black;
    }
    
    #sub-name {
        font-weight: bold;
    }
    
    #description {
        text-align: left;
        margin: 10px 0;
        line-height: 1.5;
    }
    
</style>