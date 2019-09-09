<template>
    <router-link class="event-card-container" :to=link>
        <img class="event-card-image" :src=image :alt=title />
        <span class="event-card-title">{{title}}</span>
        <div class="event-card-description">{{description}}</div>
    </router-link>
</template>

<script>
    export default {
        props: {
            image: String,
            date: Date,
            title: String,
            description: String,
            linkTitle: String,
            link: String
        }
    }
</script>

<style scoped>

    .event-card-container {
        width: 38.6rem;
        height: 45.6rem;
        background-color: white;
        border-radius: 1.2rem;
    }
    
</style>