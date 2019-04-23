<template>
    <Carousel :autoplay="true" 
              :perPage="5" 
              paginationActiveColor="#869791" 
              paginationColor="#bbc3c0" 
              :paginationSize="12" 
              :paginationPadding="6">
        <Slide>Some slide</Slide>
        <Slide>Some slide</Slide>
        <Slide>Some slide</Slide>
        <Slide>Some slide</Slide>
        <Slide>Some slide</Slide>
        <Slide>Some slide</Slide>
        <Slide>Some slide</Slide>
        <Slide>Some slide</Slide>
        <Slide>Some slide</Slide>
        <Slide>Some slide</Slide>
        <Slide>Some slide</Slide>
        <Slide>Some slide</Slide>
        <Slide>Some slide</Slide>
        <Slide>Some slide</Slide>
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
        }
    }
</script>

<style scoped>

</style>