<template>
    <div class="course-card-container">
        <div class="course-card-flex-container">
            <span class="course-card-title">
            <span style="color: var(--tomato);">{{redTitle}}</span>
            {{title}}
            </span>
            <hr class="course-card-delimiter" />
            <div class="course-card-bottom-flex-container">
                <span class="course-card-discount-value">{{discountValue}}</span>
                <span class="course-card-discount-lesson-registration">Записаться</span>
                <img class="course-card-discount-arrow-image" src="../assets/common/arrow.svg" alt="arrow"/>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            image: String,
            title: String,
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
    }
    
    .course-card-flex-container {
        display: flex;
        flex-direction: column;
        padding: 4rem 3rem 0 3rem;
    }

    .course-card-delimiter {
        border: 0;
        border-top: solid 0.1rem rgba(255, 255, 255, 0.1);
    }
    
</style>