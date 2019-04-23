<template>
    <div id="container">
        <img :alt="title" :src="getImgUrl(image)"/>
        <p id="title">{{ title }}</p>
        <p id="description">{{ description }}</p>
    </div>
</template>

<script>
    export default {
        props: {
            title: String,
            image: String,
            description: String
        },
        methods : {
            getImgUrl(imagePath) {
                var images = require.context('../assets/main/courses', false, /\.jpg$/);
                return images('./' + imagePath + ".jpg");
            }
        }
    }
</script>

<style scoped>

 #container {
     width: 370px;
     height: 400px;
     margin: 0 20px auto;
 }
    
#container > img {
    width: 370px;
    height: 170px;
}
    
#title {
    font-size: 1.3rem;
    font-weight: bold;
}
    
#description {
    line-height: 1.5;
    text-align: left;
    color: #312A1E;
}
    
</style>