<template>
    <div class="schedule-section-level-container">
        <span class="schedule-section-level-title">{{title}}</span>
        <div class="schedule-section-level-delimiter-tablet"></div>
        <div class="schedule-section-level-items-container">
            <ScheduleSectionLevelItem v-for="(languageSectionLevelItem, index) in languageSectionLevelItems"
                                      :class="[{ 'schedule-section-level-item-border-wrapper': 
                                      index!==languageSectionLevelItems.length - 1  }, 
                                      'schedule-section-level-item-wrapper-tablet']"
                                      v-bind:key="index"
                                      v-bind:teacher-photo="languageSectionLevelItem.teacherPhoto"
                                      v-bind:teacher-name="languageSectionLevelItem.teacherName"
                                      v-bind:teacher-post="languageSectionLevelItem.teacherPost"
                                      v-bind:start-time="languageSectionLevelItem.startTime"
                                      v-bind:end-time="languageSectionLevelItem.endTime"
                                      v-bind:days="languageSectionLevelItem.days"
                                      v-bind:start-date="languageSectionLevelItem.startDate"
                                      v-bind:price="languageSectionLevelItem.price"
                                      v-bind:price-without-discount="languageSectionLevelItem.priceWithoutDiscount"
                                      v-bind:discount-value="languageSectionLevelItem.discount"
                                      v-bind:is-available="languageSectionLevelItem.isAvailable"
            />
        </div>
    </div>
</template>

<script>
    
    import ScheduleSectionLevelItem from "./ScheduleSectionLevelItem";
    
    export default {
        components: {
            ScheduleSectionLevelItem
        },
        props: {
            title: String,
            languageSectionLevelItems: Array
        }
    }
</script>

<style scoped>

    .schedule-section-level-container {
        display: flex;
    }
    
    .schedule-section-level-title {
        font-family: GothamPro-Medium, sans-serif;
        font-size: 1.4rem;
        text-align: left;
        width: 18rem;
        margin-top: 2rem;
    }
    
    .schedule-section-level-item-border-wrapper {
        border-bottom: 0.1rem solid rgba(0, 0, 0, 0.1);
    }
    
    .schedule-section-level-delimiter-tablet {
        border-bottom: 0.1rem solid rgba(0, 0, 0, 0.1);
        display: none;
        margin-top: 2rem;
    }

    @media screen and (max-width: 1280px) {
        .schedule-section-level-container {
            flex-direction: column;
        }
        
        .schedule-section-level-title {
            margin-top: 0;
        }
        
        .schedule-section-level-delimiter-tablet {
            display: block;
        }
        
        .schedule-section-level-item-wrapper-tablet {
            margin-left: 4rem;
        }
    }

    @media screen and (max-width: 760px) {
        
        .schedule-section-level-title {
            font-size: 1.2rem;
        }
        
        .schedule-section-level-item-wrapper-tablet {
            margin-left: 1.6rem;
        }
    }
    
</style>