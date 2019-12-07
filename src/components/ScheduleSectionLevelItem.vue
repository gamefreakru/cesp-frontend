<template>
    <div class="schedule-section-level-item-container">
        <div class="schedule-section-level-item-teacher-container">
            <img v-if="teacherPhoto" class="schedule-section-level-item-teacher-photo" 
                 :src="teacherPhoto" :alt="teacherName">
            <img v-else class="schedule-section-level-item-teacher-photo" 
                 src="../assets/teachers/teacher-default-small.svg" alt="">
            <div class="schedule-section-level-item-teacher-info-container">
                <span v-if="teacherName" class="schedule-section-level-item-teacher-name">{{teacherName}}</span>
                <span v-else class="schedule-section-level-item-teacher-name-empty">Преподаватель</span>
                <span v-if="teacherPost" class="schedule-section-level-item-teacher-post">{{teacherPost}}</span>
                <span v-else class="schedule-section-level-item-teacher-post-empty">уточняется</span>
            </div>
        </div>
        <div class="schedule-section-level-item-time-info-container">
            <span class="schedule-section-level-item-time">{{timeString}}</span>
            <span class="schedule-section-level-item-days">{{days}}</span>
        </div>
        <span class="schedule-section-level-item-start-date">{{startDate | moment("DD.MM.YYYY")}}</span>
        <div class="schedule-section-level-item-price-container">
            <div class="schedule-section-level-item-price-info-container">
            <span v-if="priceWithoutDiscount" class="schedule-section-level-item-price-without-discount">
                {{priceWithoutDiscount}}
                <span v-if="discountValue" class="schedule-section-level-item-discount">{{discountString}}</span>
            </span>
                <span class="schedule-section-level-item-price">{{price}}</span>
            </div>
            <router-link to="/contacts" v-if="isAvailable" class="schedule-section-level-item-signup-container">
                <span class="schedule-section-level-item-signup-title">Записаться</span>
                <img class="schedule-section-level-item-signup-arrow-image" src="../assets/common/arrow.svg" alt="arrow"/>
            </router-link>
            <span v-else class="schedule-section-level-item-closed">набор закрыт</span>
        </div>
    </div>
</template>

<script>
    
    export default {
        props: {
            teacherPhoto: String,
            teacherName: String,
            teacherPost: String,
            startTime: String,
            endTime: String,
            days: String,
            startDate: String,
            price: Number,
            priceWithoutDiscount: Number,
            discountValue: Number,
            isAvailable: Boolean
        },
        computed: {
            timeString: function() {
                return this.startTime + ' - ' + this.endTime;
            },
            discountString: function() {
                return 'скидка ' + this.discountValue + '%';
            }
        }
    }
</script>

<style scoped>

    .schedule-section-level-item-container {
        display: flex;
        align-items: center;
        padding: 2.2rem 0;
    }
    
    .schedule-section-level-item-teacher-container {
        display: flex;
        width: 24rem;
    }
    
    .schedule-section-level-item-teacher-photo {
        width: 4rem;
        height: 4rem;
        margin-left: 4rem;
    }
    
    .schedule-section-level-item-teacher-info-container {
        display: flex;
        flex-direction: column;
        margin-left: 2rem;
    }
    
    .schedule-section-level-item-teacher-name {
        font-family: GothamPro-Medium, sans-serif;
        font-size: 1.4rem;
        color: var(--tomato);
        margin: 0.2rem 0;
        text-align: left;
    }
    
    .schedule-section-level-item-teacher-name-empty {
        font-family: GothamPro, sans-serif;
        font-size: 1.4rem;
        margin: 0.2rem 0;
    }
    
    .schedule-section-level-item-teacher-post {
        font-family: GothamPro, sans-serif;
        font-size: 1.2rem;
        text-align: left;
        margin: 0.2rem 0;
    }
    
    .schedule-section-level-item-teacher-post-empty {
        font-family: GothamPro, sans-serif;
        font-size: 1.2rem;
        text-align: left;
        color: #ada391;
        margin: 0.2rem 0;
    }

    .schedule-section-level-item-time-info-container {
        display: flex;
        flex-direction: column;
        width: 20rem;
        margin-left: 4rem;
    }
    
    .schedule-section-level-item-time {
        font-family: GothamPro, sans-serif;
        font-size: 1.4rem;
        text-align: left;
        margin: 0.2rem 0;
    }
    
    .schedule-section-level-item-days {
        font-family: GothamPro, sans-serif;
        font-size: 1.2rem;
        text-align: left;
        margin: 0.2rem 0;
    }
    
    .schedule-section-level-item-start-date {
        font-family: GothamPro, sans-serif;
        font-size: 1.4rem;
        text-align: left;
        width: 20rem;
        box-sizing: border-box;
        margin-left: 4rem;
        margin-top: 0.2rem;
        align-self: flex-start;
    }
    
    .schedule-section-level-item-price-container {
        display: flex;
        width: 26rem;
    }
    
    .schedule-section-level-item-price-info-container {
        display: flex;
        flex-direction: column;
        margin-left: 4rem;
    }
    
    .schedule-section-level-item-price-without-discount {
        font-family: GothamPro, sans-serif;
        font-size: 1.4rem;
        text-decoration: line-through;
        margin: 0.2rem 0;
        position: relative;
    }
    
    .schedule-section-level-item-discount {
        font-family: GothamPro, sans-serif;
        font-size: 1.2rem;
        width: 8.5rem;
        height: 2rem;
        background-color: var(--main-color);
        border-radius: 0.2rem;
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        position: absolute;
        left: -10rem;
        bottom: -0.2rem;
    }
    
    .schedule-section-level-item-price {
        font-family: GothamPro-Medium, sans-serif;
        font-size: 1.4rem;
        text-align: left;
        color: var(--tomato);
        margin: 0.2rem 0;
    }
    
    .schedule-section-level-item-signup-container {
        display: flex;
        align-items: center;
        margin-left: auto;
        text-decoration: none;
        color: black;
    }
    
    .schedule-section-level-item-signup-title {
        font-family: GothamPro-Bold, sans-serif;
        font-size: 1.2rem;
        text-transform: uppercase;
    }
    
    .schedule-section-level-item-signup-arrow-image {
        margin-left: 1rem;
    }
    
    .schedule-section-level-item-closed {
        font-family: GothamPro, sans-serif;
        font-size: 1.4rem;
        align-self: flex-start;
        margin-left: auto;
    }
    
</style>