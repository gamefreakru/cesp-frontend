<template>
    <div id="container">
        <ImageCircle :image="image" :text="name" :width=200 :height=200 />
        <span id="name">{{ name }}</span>
        <span id="position">{{ position }}</span>
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
            position: String,
            description: String
        }
    }
</script>

<style scoped>

    #container {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 270px;
        height: auto;
        margin-bottom: auto;
        font-size: 1.6rem;
    }
    
    #name {
        font-size: 2rem;
        font-weight: bold;
        margin-top: 30px;
        margin-bottom: 5px;
        color: black;
    }
    
    #position {
        color: black;
        font-weight: bold;
        margin-bottom: 10px;
    }
    
    #description {
        text-align: left;
        font-weight: 400;
    }
    
</style>