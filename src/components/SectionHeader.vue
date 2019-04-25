<template>
    <div id="container">
        <img :alt="title" :src="getImgUrl(image)">
        <span id="title">{{ title }}</span>
        <span id="description">{{ description }}</span> 
    </div>
</template>

<script>
    export default {
        props: {
            image: String,
            title: String,
            description: String
        },
        methods : {
            getImgUrl(imagePath) {
                var images = require.context('../assets/sections', false, /\.png$/);
                return images('./' + imagePath + ".png");
            }
        }
    }
</script>

<style scoped>

    #container {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    
    img {
        width: auto;
        height: auto;
    }
    
    #title {
        font-family: 'Patua One', cursive, sans-serif;
        font-size: 2.5rem;
        font-weight: bold;
        color: #312A1E;
        margin-top: 20px;
        margin-bottom: 0;
    }

    #description {
        font-size: 1.3rem;
        font-weight: bold;
        margin-top: 10px;
    }   
    
</style>