<template>
    <router-link class="course-card-container" :to="link" onclick="ym(52043682, 'reachGoal', 'kurs-zapis'); return true;">
        <div class="course-card-icons-container">
            <img v-for="(icon, index) in icons" class="course-card-icon" :key="index" :src="icon" alt=""/>
        </div>
        <div class="course-card-flex-container">
            <div class="course-card-title" v-html="title" />
            <div class="course-card-description">{{description}}</div>
            <span v-if="durationDescription" class="course-card-duration-title">Продолжительность</span>
            <div v-if="durationDescription" class="course-card-duration-description">{{durationDescription}}</div>
            <div class="course-card-position-container">
                <div class="course-card-delimiter">
                    <div v-if="discountValue" class="course-card-discount">скидка {{discountValue}}%</div>
                </div>
                <div class="course-card-bottom-container">
                    <div class="course-card-price">{{priceDescription}}</div>
                    <div class="course-card-registration-container">
                        <div class="course-card-lesson-registration">Записаться</div>
                        <img class="course-card-arrow-image" src="../assets/common/arrow.svg" alt="arrow"/>
                    </div>
                </div>
            </div>
        </div>
    </router-link>
</template>

<script>
    export default {
        props: {
            image: String,
            icons: Array,
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
        min-width: 38.6rem;
        min-height: 39.3rem;
        border: solid 1px rgba(0, 0, 0, 0.1);
        border-radius: 1.2rem;
        text-align: left;
        position: relative;
        text-decoration: none;
        color: black;
    }
    
    .course-card-icons-container {
        position: absolute;
        left: 4rem;
        top: -3rem;
        display: flex;
        align-items: flex-start;
    }
    
    .course-card-icon {
        margin: 0 -1rem;
    }
    
    .course-card-icon:first-child {
        margin-left: 0;
    }
    
    .course-card-icon:last-child {
        margin-right: 0;
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
        position: relative;
    }
    
    .course-card-bottom-container {
        display: flex;
        margin-top: 1.25rem;
        align-items: center;
        width: 30rem;
    }
    
    .course-card-price {
        font-family: GothamPro-Medium, sans-serif;
        font-size: 1.6rem;
        color: var(--tomato);
    }
    
    .course-card-registration-container {
        display: flex;
        margin-left: auto;
    }
    
    .course-card-lesson-registration {
        font-family: GothamPro-Bold, sans-serif;
        font-size: 1.4rem;
        text-transform: uppercase;
        margin-right: 1rem;
    }
    
    .course-card-discount {
        position: absolute;
        top: -1.25rem;
        width: 10rem;
        height: 2.5rem;
        font-family: GothamPro-Bold, sans-serif;
        font-size: 1.2rem;
        text-transform: uppercase;
        background-color: var(--main-color);
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 0.3rem;
    }

    @media screen and (max-width: 1280px) {
        
        .course-card-container {
            min-width: 32rem;
            width: 32rem;
            min-height: 47rem;
            height: 47rem;
        }
        
        .course-card-delimiter {
            width: 24rem;
            margin-bottom: .75rem;
        }

        .course-card-bottom-container {
            flex-direction: column;
            width: 24rem;
            align-items: flex-start;
        }
        
        .course-card-registration-container {
            margin-left: 0;
            margin-top: 1.5rem;
        }
        
        .course-card-price {
            margin-right: 0;
        }
        
    }

    @media screen and (max-width: 760px) {
        
        .course-card-container {
            min-width: 28rem;
            width: 28rem;
            min-height: 33rem;
            height: 33rem;
        }

        .course-card-icons-container {
            left: 2rem;
        }
        
        .course-card-flex-container {
            padding: 4rem 2rem 0;
        }
        
        .course-card-image {
            width: 4.5rem;
            height: 4.5rem;
            top: -2.3rem;
            left: 2rem;
        }
        
        .course-card-title {
            font-size: 1.6rem;
        }
        
        .course-card-description {
            font-size: 1.2rem;
        }
        
        .course-card-duration-title {
            font-size: 1rem;
            margin: 0.5rem 0;
        }
        
        .course-card-duration-description {
            font-size: 1rem;
        }

        .course-card-position-container {
            bottom: 1.5rem;
        }
        
        .course-card-registration-container {
            margin-top: 1rem;
        }
        
        .course-card-price {
            font-size: 1.4rem;
        }
        
        .course-card-lesson-registration {
            font-size: 1.2rem;
        }
    }
    
</style>