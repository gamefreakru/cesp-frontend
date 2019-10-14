<template>
    <router-link class="course-card-container" :to="link">
        <img class="course-card-image" :src="image" alt=""/>
        <div class="course-card-flex-container">
            <span class="course-card-title">
            <span style="color: var(--tomato);">{{redTitle}}</span>
            {{title}}
            </span>
            <div class="course-card-description">{{description}}</div>
            <span v-if="durationDescription" class="course-card-duration-title">Продолжительность</span>
            <div v-if="durationDescription" class="course-card-duration-description">{{durationDescription}}</div>
            <div class="course-card-position-container">
                <div class="course-card-delimiter"></div>
                <div class="course-card-bottom-flex-container">
                    <!--                <span class="course-card-price">скидка {{discountValue}}%</span>-->
                    <span class="course-card-price">{{priceDescription}}</span>
                    <span class="course-card-lesson-registration">Записаться</span>
                    <img class="course-card-arrow-image" src="../assets/common/arrow.svg" alt="arrow"/>
                </div>
            </div>
        </div>
    </router-link>
</template>

<script>
    export default {
        props: {
            image: String,
            title: String,
            link: String,
            redTitle: String,
            description: String,
            durationDescription: String,
            discountValue: Number,
            priceDescription: String
        }
    }
</script>

<style scoped>

    .course-card-container {
        background-color: white;
        width: 38.6rem;
        height: 39.3rem;
        border: solid 1px rgba(0, 0, 0, 0.1);
        border-radius: 1.2rem;
        text-align: left;
        position: relative;
        text-decoration: none;
        color: black;
    }

    .course-card-image {
        max-height: 6rem;
        position: absolute;
        left: 4rem;
        top: -3rem;
    }
    
    .course-card-flex-container {
        display: flex;
        flex-direction: column;
        padding: 4rem 4rem 2.5rem 4rem;
    }
    
    .course-card-title {
        font-family: FedraSerifAPro-Medium, sans-serif;
        font-size: 2.4rem;
        margin: 0.75rem 0;
    }
    
    .course-card-description {
        font-family: GothamPro, sans-serif;
        font-size: 1.4rem;
        line-height: 1.71;
        margin: 0.75rem 0;
    }
    
    .course-card-duration-title {
        font-family: GothamPro-Bold, sans-serif;
        font-size: 1.2rem;
        text-transform: uppercase;
        margin: 1.5rem 0 0.75rem;
    }
    
    .course-card-duration-description {
        font-family: GothamPro, sans-serif;
        font-size: 1.2rem;
        line-height: 1.5;
        color: #9d927d;
        margin: 0.75rem 0;
    }
    
    .course-card-position-container {
        display: flex;
        flex-direction: column;
        position: absolute;
        bottom: 2.5rem;
    }

    .course-card-delimiter {
        height: 0.1rem;
        background-color: rgba(0, 0, 0, 0.1);
        margin-bottom: 1.25rem;
        width: 30rem;
    }
    
    .course-card-bottom-flex-container {
        display: flex;
        margin-top: 1.25rem;
        align-items: center;
    }
    
    .course-card-price {
        font-family: GothamPro-Medium, sans-serif;
        font-size: 1.6rem;
        color: var(--tomato);
        margin-right: 2rem;
    }
    
    .course-card-lesson-registration {
        font-family: GothamPro-Bold, sans-serif;
        font-size: 1.4rem;
        text-transform: uppercase;
        margin: 0 1rem 0 2.5rem 
    }
    
    .course-card-discount-value {
        position: absolute;
    }
    
</style>