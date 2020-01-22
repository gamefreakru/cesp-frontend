<template>
    <div class="feedback-card-container">
        <div class="feedback-card-content-container">
            <img class="feedback-card-image" :src="image" :alt="firstName" />
            <div class="feedback-card-info-container">
                <div class="feedback-card-info-name">{{firstName}}</div>
                <div class="feedback-card-info-name" style="color: var(--tomato)">{{secondName}}</div>
                <div class="feedback-card-info-date">{{ date | moment("DD.MM.YYYY") }}</div>
            </div>
        </div>
        <div class="feedback-card-text">{{text}}</div>
    </div>
</template>

<script>
    export default {
        props: {
            image: String,
            firstName: String,
            secondName: String,
            date: String,
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
    
    .feedback-card-content-container {
        display: flex;
        align-items: center;
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

    @media screen and (max-width: 1280px) { 
        .feedback-card-container {
            width: 60rem;
            height: 35rem;
            padding: 4rem;
            flex-direction: column;
            align-items: flex-start;
        }
        
        .feedback-card-text {
            margin-left: 0;
            margin-top: 4rem;
        }
        
        .feedback-card-info-container {
            margin-left: 5rem;
        }
    }

    @media screen and (max-width: 760px) {
        .feedback-card-container {
            width: calc(100% - 4rem);
            height: 30rem;
            padding: 1.5rem 2rem;
        }

        .feedback-card-content-container {
            align-items: flex-start;
        }
        
        .feedback-card-image {
            max-width: 5.2rem;
            max-height: 5.2rem;
        }
        
        .feedback-card-info-container {
            margin-left: 2rem;
        }
        
        .feedback-card-info-name {
            font-size: 1.6rem;
        }
        
        .feedback-card-info-date {
            font-size: 1.2rem;
            margin-top: 0.5rem;
        }
        
        .feedback-card-text {
            font-size: 1.2rem;
            line-height: 1.5;
            margin-top: 1.5rem;
        }
    }
    
</style>