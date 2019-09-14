<template>
    <div class="teacher-card-container">
        <img class="teacher-card-image" :src="image" :alt="title">
        <span class="teacher-card-title">{{title}}</span>
        <span class="teacher-card-country">{{country}}</span>
<!--        <div class="teacher-card-languages-container">-->
<!--            <span v-for="(language, index) in languages" -->
<!--            v-bind:key="index" v-bind:data="language" :style="language.color">-->
<!--                {{language.title}}-->
<!--            </span>-->
<!--        </div>-->
        <div class="teacher-card-description">{{description}}</div>
    </div>
</template>

<script>
    export default {
        props: {
            image: String,
            title: String,
            country: String,
            languages: Array,
            description: String
        }
    }
</script>

<style scoped>

    .teacher-card-container {
        display: flex;
        flex-direction: column;
        width: 28rem;
        height: 50rem;
        align-items: center;
    }
    
    .teacher-card-image {
        width: 18rem;
    }
    
    .teacher-card-title {
        font-family: FedraSerifAPro-Medium, sans-serif;
        font-size: 2.4rem;
        margin-top: 3rem;
    }
    
    .teacher-card-country {
        font-family: GothamPro-Medium, sans-serif;
        font-size: 1.4rem;
        margin-top: 1rem;
    }
    
    .teacher-card-description {
        font-family: GothamPro, sans-serif;
        font-size: 1.4rem;
        line-height: 1.71;
        margin-top: 2.5rem;
    }
    
</style>