<template>
    <Carousel :autoplay="true"
              :loop="true"
              :perPage="imagesPerPage"
              :speed="750"
              :centerMode=true
              :autoplayTimeout="5000"
              paginationActiveColor="#869791"
              paginationColor="#bbc3c0"
              :paginationSize="12"
              :paginationPadding="6">
        <Slide v-for="(image, index) in images"
               :data="image"
               :key="index">
            <img :alt="image" :src=image :style="styling"/>
        </Slide>
    </Carousel>
</template>

<script>
    // noinspection ES6CheckImport
    import {Carousel, Slide} from 'vue-carousel'

    export default {
        props: {
            images: Array,
            imageWidth: {
                type: Number,
                default: 235
            },
            imageHeight: {
                type: Number,
                default: 250
            },
            imagesPerPage: {
                type: Number,
                default: 5
            }
        },
        components: {
            Carousel,
            Slide
        },
        computed: {
            styling() {
                return {
                    width: this.imageWidth + 'px',
                    height: this.imageHeight + 'px',
                    'border-radius': '20px'
                }
            }
        }
    }
</script>

<style scoped>

</style>