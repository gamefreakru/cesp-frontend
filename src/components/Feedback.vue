<template>
    <div id="container">
        <img :alt="text" :src="getImgUrl(image)">
        <p id="text">{{ text }}</p>
        <p id="date" class="grey-text">{{ date }}</p>
        <p id="author" class="grey-text">{{ author }}</p>
    </div>
</template>

<script>
    export default {
        props: {
            image: String,
            text: String,
            date: String,
            author: String  
        },
        methods : {
            getImgUrl(imagePath) {
                var images = require.context('../assets/main/feedbacks', false, /\.jpg$/);
                return images('./' + imagePath + ".jpg");
            }
        }
    }
</script>

<style scoped>

#container {
    width: 270px;
    height: auto;
    background-color: #E9E9E9;
    margin: 0 20px auto;
    padding: 30px 10px;
}
    
#container > img {
    width: 140px;
    height: 140px;
    border-radius: 50%;
}

#text {
    line-height: 1.5;
    text-align: left;
    color: #312A1E;
}

#date {
    margin-bottom: 0;
}

#author {
    margin: 0;
}
    
.grey-text {
    line-height: 1.5;
    text-align: left;
    color: #A5A5A2;
}
    
</style>