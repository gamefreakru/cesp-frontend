<template>
    <div id="container">
        <ImageCircle  :text="text" :image="image" v-if="image" />
        <p id="text">{{ text }}</p>
        <p id="date" class="footer-block-grey-text">{{ date | moment("DD.MM.YYYY") }}</p>
        <p id="author" class="footer-block-grey-text">{{ author }}</p>
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
            text: String,
            date: String,
            author: String  
        }
    }
</script>

<style scoped>

#container {
    width: 270px;
    height: auto;
    background-color: #E9E9E9;
    margin-bottom: auto;
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
    
.footer-block-grey-text {
    line-height: 1.5;
    text-align: left;
    color: #A5A5A2;
}
    
</style>