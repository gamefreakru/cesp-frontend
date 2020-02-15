<template>
    <div class="schedule-section-level-container">
        <span class="schedule-section-level-title">{{title}}</span>
        <span class="schedule-section-level-duration">{{duration}}</span>
        <span class="schedule-section-level-price">{{priceDescription}}</span>
        <div class="schedule-section-level-delimiter-tablet"></div>
        <div class="schedule-section-level-items-container">
            <ScheduleSectionLevelItem v-for="(languageSectionLevelItem, index) in languageSectionLevelItems"
                                      :class="[{ 'schedule-section-level-item-border-wrapper': 
                                      index!==languageSectionLevelItems.length - 1  }, 
                                      'schedule-section-level-item-wrapper-tablet']"
                                      :key="index"
                                      :teacher="languageSectionLevelItem.teacher"
                                      :start-time="languageSectionLevelItem.startTime"
                                      :end-time="languageSectionLevelItem.endTime"
                                      :days="languageSectionLevelItem.days"
                                      :start-date="languageSectionLevelItem.startDate"
                                      :price="languageSectionLevelItem.price"
                                      :price-without-discount="languageSectionLevelItem.priceWithoutDiscount"
                                      :discount-value="languageSectionLevelItem.discount"
                                      :is-available="languageSectionLevelItem.isAvailable"
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
            duration: String,
            minPrice: String,
            maxPrice: String,
            languageSectionLevelItems: Array
        },
        computed: {
            priceDescription: function() {
                if(this.minPrice === this.maxPrice)
                {
                    return this.minPrice + ' руб.'
                }
                return this.minPrice + ' - ' + this.maxPrice + ' руб.';
            }
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
    
    .schedule-section-level-duration {
        font-family: GothamPro, sans-serif;
        font-size: 1.2rem;
        margin-top: 1rem;
        display: none;
    }
    
    .schedule-section-level-price {
        font-family: GothamPro-Medium, sans-serif;
        font-size: 1.4rem;
        color: var(--tomato);
        margin-top: 1rem;
        display: none;
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

        .schedule-section-level-duration {
            display: block;
        }

        .schedule-section-level-price {
            display: block;
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