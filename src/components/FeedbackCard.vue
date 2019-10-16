<template>
    <div class="feedback-card-container">
        <img class="feedback-card-image" :src="image" :alt="firstName" />
        <div class="feedback-card-info-container">
            <span class="feedback-card-info-name">{{firstName}}</span>
            <span class="feedback-card-info-name" style="color: var(--tomato)">{{secondName}}</span>
            <span class="feedback-card-info-date">{{ date | moment("DD.MM.YYYY") }}</span>
        </div>
        <div class="feedback-card-text">
            {{text}}
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            image: String,
            firstName: String,
            secondName: String,
            date: Date,
            text: String
        }
    }
</script>

<style scoped>

    .feedback-card-container {
        display: flex;
        align-items: center;
        width: 95rem;
        height: 20rem;
        border-radius: 1.2rem;
        background-color: white;
        padding: 4rem 8rem 4rem 4rem;
        box-sizing: border-box;
        text-align: left;
    }
    
    .feedback-card-image {
        max-width: 12rem;
        max-height: 12rem;
        border-radius: 6rem;
    }
    
    .feedback-card-info-container {
        display: flex;
        flex-direction: column;
        margin-left: 3rem;
    }
    
    .feedback-card-info-name { 
        font-family: GothamPro-Medium, sans-serif;
        font-size: 1.8rem;
        margin: 0.25rem 0;
    }
    
    .feedback-card-info-date {
        font-family: GothamPro-Medium, sans-serif;
        font-size: 1.4rem;
        margin-top: 1.5rem;
    }
    
    .feedback-card-text {
        font-family: GothamPro, sans-serif;
        font-size: 1.4rem;
        line-height: 1.71;
        margin-left: 9rem;
    }
    
</style>