<template>
    <div class="schedule-section-container">
        <span class="schedule-section-title">{{title}}</span>
        <span v-if="durationDescription" class="schedule-section-duration">{{durationDescription}}</span>
        <span v-if="priceDesription" class="schedule-section-price-tablet">{{priceDesription}}</span>
        <ScheduleSectionLevel class="schedule-section-levels-wrapper" v-for="(languageLevel, index) in languageLevels"
                              v-bind:class="{ 'schedule-section-levels-wrapper-border': 
                                      index!==languageLevels.length - 1 }"
                              v-bind:key="index"
                              v-bind:title="languageLevel.level"
                              v-bind:language-section-level-items="languageLevel.scheduleItems"
        />
    </div>
</template>

<script>
    
    import ScheduleSectionLevel from "./ScheduleSectionLevel";
    
    export default {
        components: {
          ScheduleSectionLevel  
        },
        props: {
            title: String,
            durationDescription: String,
            priceDesription: String,
            languageLevels: Array
        }
    }
</script>

<style scoped>

    .schedule-section-container {
        min-height: 11.5rem;
        width: 124rem;
        border: 0.1rem solid var(--light-border);
        box-sizing: border-box;
        border-radius: 1.2rem;
        display: flex;
        flex-direction: column;
        padding: 3rem 4rem;
        text-align: left;
    }
    
    .schedule-section-title {
        font-family: GothamPro-Medium, sans-serif;
        font-size: 1.6rem;
    }
    
    .schedule-section-duration {
        font-family: GothamPro, sans-serif;
        font-size: 1.4rem;
        margin-top: 1rem;
    }
    
    .schedule-section-price-tablet {
        display: none;
        font-family: GothamPro-Medium, sans-serif;
        font-size: 1.4rem;
        color: var(--tomato);
        margin-top: 1.5rem;
    }
    
    .schedule-section-levels-wrapper {
        margin-top: 2rem;
    }

    .schedule-section-levels-wrapper-border {
        border-bottom: 0.4rem solid #e5e5e5;
    }

    @media screen and (max-width: 1280px) {
        
        .schedule-section-container {
            min-height: 14.5rem;
            width: calc(100% - 8.8rem);
        }
        
        .schedule-section-price-tablet {
            display: block;
        }
      
    }

    @media screen and (max-width: 760px) {
        
        .schedule-section-container {
            min-height: 13rem;
            width: calc(100% - 4rem);
            padding: 1.6rem;
            border-radius: 0.8rem;
        }
        
        .schedule-section-title {
            font-size: 1.4rem;
        }
        
        .schedule-section-duration {
            font-size: 1.2rem;
        }
    }

</style>