<template>
    <Carousel :autoplay="true"
              :loop="true" 
              :perPage="5" 
              :speed="750"
              :autoplayTimeout="5000"
              paginationActiveColor="#869791" 
              paginationColor="#bbc3c0" 
              :paginationSize="12" 
              :paginationPadding="6">
        <Slide v-for="(image, index) in images" 
               v-bind:data="image" 
               v-bind:key="index">
            <img class="carousel-image" :alt="image" :src="getImgUrl(image)" />
        </Slide>
    </Carousel>
</template>

<script>
    import { Carousel, Slide } from 'vue-carousel'

    export default {
        props: {
            images: Array
        },
        components: {
            Carousel,
            Slide
        },
        methods : {
            getImgUrl(imagePath) {
                var images = require.context('../assets/main/carousel', false, /\.jpg$/);
                return images('./' + imagePath + ".jpg");
            }
        }
    }
</script>

<style scoped>
    
.carousel-image {
    width: 235px;
    height: 250px;
}
    
</style>