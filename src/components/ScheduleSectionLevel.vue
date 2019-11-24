<template>
    <div class="schedule-section-level-container">
        <span class="schedule-section-level-title">{{title}}</span>
        <div class="schedule-section-level-items-container">
            <ScheduleSectionLevelItem v-for="(languageSectionLevelItem, index) in languageSectionLevelItems"
                                      v-bind:class="{ 'schedule-section-level-item-wrapper': 
                                      index!==languageSectionLevelItems.length - 1 }"
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
                                      v-bind:discount-value="languageSectionLevelItem.discountValue"
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
        width: 18rem;
    }
    
    .schedule-section-level-item-wrapper {
        border-bottom: 0.1rem solid rgba(0, 0, 0, 0.1);
    }
    
</style>