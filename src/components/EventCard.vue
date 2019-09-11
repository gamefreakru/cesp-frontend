<template>
    <router-link class="event-card-container" :style="style" :to=link>
        <div class="event-card-text-container">
            <span class="event-card-title">{{title}}</span>
            <div class="event-card-description">{{description}}</div>
        </div>
        <div class="event-card-position-container">
            <div class="event-card-delimiter"></div>
            <div class="event-card-bottom-flex-container">
                <span class="event-card-link-title">{{linkTitle}}</span>
                <img class="event-card-arrow-image" src="../assets/common/arrow.svg" alt="arrow"/>
            </div>
        </div>
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
        },
        computed: {
            style() {
                return 'background-image: url(' + this.image + ')';
            }
        }
    }
</script>

<style scoped>

    .event-card-container {
        width: 38.6rem;
        height: 45.6rem;
        background-color: white;
        border-radius: 1.2rem;
        background-repeat: no-repeat;
        background-size: 100% 45%; 
        text-decoration: none;
        text-align: left;
        color: black;
        position: relative;
    }
    
    .event-card-text-container {
        display: flex;
        flex-direction: column;
        max-width: 38.6rem;
        padding: 0 4rem;
        position: absolute;
        top: 21rem;
    }
    
    .event-card-title {
        font-family: FedraSerifAPro-Medium, sans-serif;
        font-size: 2.4rem;
        margin-top: 2rem;
        margin-bottom: 1.5rem;
    }
    
    .event-card-description {
        font-family: GothamPro, sans-serif;
        font-size: 1.4rem;
        line-height: 1.71;
    }

    .event-card-position-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        position: absolute;
        bottom: 2.5rem;
        left: 0; right: 0;
        margin-left: auto;
        margin-right: auto;
        padding: 0 4rem;
    }

    .event-card-delimiter {
        height: 0.1rem;
        background-color: rgba(0, 0, 0, 0.1);
        margin-bottom: 1.25rem;
        width: 31rem;
    }

    .event-card-bottom-flex-container {
        display: flex;
        margin-top: 1.25rem;
        align-items: flex-start;
        margin-right: auto;
    }

    .event-card-link-title {
        font-family: GothamPro-Bold, sans-serif;
        font-size: 1.4rem;
        text-transform: uppercase;
        margin-right: 1rem;
    }
    
</style>