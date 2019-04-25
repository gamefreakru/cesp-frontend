<template>
    <div id="container">
        <img :alt="title" :src="getImgUrl(image)"/>
        <span id="title">{{ title }}</span>
        <p class="description">{{ description }}</p>
        
        <p v-if="duration" class="description">
            <b>Продолжительность:</b>
            <br>
            {{ duration }}
        </p>
        <span v-if="discount" class="description">
            <b>{{ discount }}</b>
        </span>
        <span v-if="priceInfo" class="description">{{ priceInfo }}</span>
        
        <Button v-if="signup" text="записаться" link="#"/>
    </div>
</template>

<script>
    
    import Button from "./Button.vue"
    
    export default {
        props: {
            title: String,
            image: String,
            description: String,
            duration: String,
            discount: String,
            priceInfo: String,
            signup: Boolean
        },
        components: {
            Button
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
     display: flex;
     flex-direction: column;
     width: 370px;
     height: auto;
     margin: 0 0 auto;
 }
    
#container > img {
    width: 370px;
    height: 170px;
}
    
#title {
    font-size: 1.3rem;
    font-weight: bold;
    margin: 10px 0;
}
    
.description {
    line-height: 1.5;
    text-align: left;
    color: #312A1E;
}
    
</style>