<template>
    <div class="schedule-page-container">
        <div class="schedule-page-header-container">
            <img class="schedule-page-left-image" src="../assets/schedule/schedule-left.svg" alt="">
            <img class="schedule-page-right-image" src="../assets/schedule/schedule-right.svg" alt="">
            <img class="schedule-page-left-image-tablet" src="../assets/schedule/schedule-left-tablet.svg" alt="">
            <img class="schedule-page-right-image-tablet" src="../assets/schedule/schedule-right-tablet.svg" alt="">
            <span class="schedule-page-title">
                Расписание и <span style="color: var(--tomato);">цены</span>
                <TextBabel class="schedule-page-text-babel-wrapper" text="Horarios y precios"/>
            </span>
            <div class="schedule-page-table-header">
                <span style="width: 12rem;" class="schedule-page-table-header-column-title">Уровень</span>
                <span style="width: 16rem;" class="schedule-page-table-header-column-title">Преподаватель</span>
                <span style="width: 16rem;" class="schedule-page-table-header-column-title">Время занятий</span>
                <span style="width: 10rem;" class="schedule-page-table-header-column-title">Дата начала</span>
                <span style="width: 20rem;" class="schedule-page-table-header-column-title">Продолжительность</span>
                <span class="schedule-page-table-header-column-title">Цена</span>
            </div>
        </div>
        <div class="schedule-page-sections-container">
            <ScheduleSection class="schedule-section-wrapper" v-for="(scheduleSection, index) in schedule"
                             :key="index"
                             :title="scheduleSection.name"
                             :language-levels="scheduleSection.scheduleSegments"
            />
        </div>
        <SignupFormModal @hideModal="hideModal('signup-form-modal')"/>
        <SignupFormModalTablet @hideModal="hideModal('signup-form-modal-tablet')"/>
        <SignupFormModalPhone @hideModal="hideModal('signup-form-modal-phone')"/>
    </div>
</template>

<script>

    import TextBabel from "../components/TextBabel";
    import ScheduleSection from "../components/ScheduleSection";
    import SignupFormModal from "../components/SignupFormModal";
    import SignupFormModalTablet from "../components/SignupFormModalTablet";
    import SignupFormModalPhone from "../components/SignupFormModalPhone";
    import Service from "../service"

    export default {
        components: {
            TextBabel,
            ScheduleSection,
            SignupFormModal,
            SignupFormModalTablet,
            SignupFormModalPhone
        },
        data() {
            return {
                schedule: {}
            }
        },
        mounted() {
            Service.get("schedule", (status, data) => {
                this.schedule = data;
            })
        },
        methods: {
            hideModal(name) {
                this.$modal.hide(name)
            }
        }
    }
</script>

<style scoped>

    .schedule-page-container {
        background-color: white;
    }

    .schedule-page-header-container {
        height: 43rem;
        background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0.3), rgba(255, 239, 170, 0.3) 55%);
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    
    .schedule-page-left-image {
        position: absolute; 
        bottom:6rem; 
        left: 10rem;
    }
    
    .schedule-page-right-image {
        position: absolute; 
        bottom: 2rem; 
        right: 0;   
    }
    
    .schedule-page-left-image-tablet {
        display: none;
        position: absolute;
        left: 0;
        top: 10rem;
        width: 25%;
    }
    
    .schedule-page-right-image-tablet {
        display: none;
        position: absolute;
        right: 0;
        top: 10rem;
        width: 9%;
    }

    .schedule-page-title {
        font-family: FedraSerifAPro-Medium, sans-serif;
        font-size: 4rem;
        margin-top: 25rem;
        width: 50rem;
        position: relative;
    }

    .schedule-page-text-babel-wrapper {
        position: absolute;
        top: -4rem;
        left: 44rem;
    }

    .schedule-page-table-header {
        width: 124rem;
        height: 5rem;
        display: flex;
        align-items: center;
        background-color: var(--light-text);
        border-top-left-radius: 1.2rem;
        border-top-right-radius: 1.2rem;
        margin-top: auto;
        border-bottom: 0.4rem solid #ccc0a9;
        box-sizing: border-box;
        z-index: 1;
    }

    .schedule-page-table-header-column-title {
        font-family: GothamPro-Bold, sans-serif;
        text-transform: uppercase;
        text-align: left;
        font-size: 1.2rem;
        margin-left: 4rem;
        margin-top: 0.5rem;
    }

    .schedule-page-sections-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 2rem 0 10rem 0;
    }
    
    .schedule-section-wrapper {
        margin: 1rem 0;
    }
    
    .schedule-section-wrapper:hover {
        box-shadow: 0 4px 16px 0 rgba(41, 41, 41, 0.15);
    }

    @media screen and (max-width: 1280px) {

        .schedule-page-header-container {
            height: 25rem;
        }
        
        .schedule-page-left-image {
            display: none;
        }
        
        .schedule-page-right-image {
            display: none;
        }
        
        .schedule-page-left-image-tablet {
            display: block;
        }

        .schedule-page-right-image-tablet {
            display: block;
        }
        
        .schedule-page-title {
            font-size: 3rem;
            margin-top: 12rem;
        }
        
        .schedule-page-text-babel-wrapper {
            top: -3.5rem;
            left: 38rem;
        }
        
        .schedule-page-table-header {
            display: none;
        }
        
        .schedule-page-sections-container {
            margin: 2rem 0 6rem 0;
        }
    }

    @media screen and (max-width: 760px) {
        
        .schedule-page-left-image-tablet {
            display: none;
        }

        .schedule-page-right-image-tablet {
            display: none;
        }
        
        .schedule-page-header-container {
            margin-top: 13.2rem;
            height: 13rem;
        }
        
        .schedule-page-title {
            font-size: 2.2rem;
            width: 15rem;
            margin-top: 5rem;
        }
        
        .schedule-page-text-babel-wrapper {
            left: 11.5rem;
        }
    }

</style>