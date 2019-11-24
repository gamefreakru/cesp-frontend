<template>
    <div class="schedule-page-container">
        <div class="schedule-page-header-container">
            <img style="position: absolute; bottom:14rem; left: 10rem;" src="../assets/schedule/schedule-left.svg"
                 alt="">
            <img style="position: absolute; bottom:11rem; right: 0;" src="../assets/schedule/schedule-right.svg" alt="">
            <span class="schedule-page-title">
                Расписание и <span style="color: var(--tomato);">цены</span>
                <TextBabel class="schedule-page-text-babel-wrapper" text="Horarios y precios"/>
            </span>
            <div class="schedule-page-table-header">
                <span style="width: 18rem;" class="schedule-page-table-header-column-title">Уровень</span>
                <span style="width: 20rem;" class="schedule-page-table-header-column-title">Преподаватель</span>
                <span style="width: 20rem;" class="schedule-page-table-header-column-title">Время занятий</span>
                <span style="width: 15rem;" class="schedule-page-table-header-column-title">Дата начала</span>
                <span class="schedule-page-table-header-column-title">Цена</span>
            </div>
        </div>
        <div class="schedule-page-sections-container">
            <ScheduleSection class="schedule-section-wrapper" v-for="(scheduleSection, index) in schedule"
                             v-bind:key="index"
                             v-bind:title="scheduleSection.title"
                             v-bind:duration-description="scheduleSection.durationDescription"
                             v-bind:language-levels="scheduleSection.languageLevels"
            />
        </div>
    </div>
</template>

<script>

    import TextBabel from "../components/TextBabel";
    import ScheduleSection from "../components/ScheduleSection";

    export default {
        components: {
            TextBabel,
            ScheduleSection
        },
        data() {
            return {
                schedule: [
                    {
                        title: "Испанский для взрослых, стандарт",
                        durationDescription: "60 ак. часов (9 недель)",
                        languageLevels: [
                            {
                                title: "А1, начальный",
                                languageLevelItems: [
                                    {
                                        teacherPhoto: "https://centroespanol.ru/api/teachers/rafael_small.png",
                                        teacherName: "Анхель",
                                        teacherPost: "преподаватель",
                                        startTime: new Date("7/Nov/2019 09:00:00"),
                                        endTime: new Date("7/Nov/2019 11:45:00"),
                                        days: "понедельник, четверг",
                                        startDate: new Date("21/Nov/2019"),
                                        price: 19000,
                                        priceWithoutDiscount: 23000,
                                        discountValue: 20,
                                        isAvailable: true
                                    },
                                    {
                                        teacherPhoto: "https://centroespanol.ru/api/teachers/rafael_small.png",
                                        teacherName: "Анхель",
                                        teacherPost: "преподаватель",
                                        startTime: new Date("7/Nov/2019 09:00:00"),
                                        endTime: new Date("7/Nov/2019 11:45:00"),
                                        days: "понедельник, четверг",
                                        startDate: new Date("21/Nov/2019"),
                                        price: 19000,
                                        priceWithoutDiscount: 23000,
                                        discountValue: 20,
                                        isAvailable: true
                                    },
                                    {
                                        teacherPhoto: "https://centroespanol.ru/api/teachers/rafael_small.png",
                                        teacherName: "Анхель",
                                        teacherPost: "преподаватель",
                                        startTime: new Date("7/Nov/2019 09:00:00"),
                                        endTime: new Date("7/Nov/2019 11:45:00"),
                                        days: "понедельник, четверг",
                                        startDate: new Date("21/Nov/2019"),
                                        price: 19000,
                                        priceWithoutDiscount: 23000,
                                        discountValue: 20,
                                        isAvailable: true
                                    }
                                ]
                            },
                            {
                                title: "B1, начальный",
                                languageLevelItems: [
                                    {
                                        teacherPhoto: "https://centroespanol.ru/api/teachers/rafael_small.png",
                                        teacherName: "Анхель",
                                        teacherPost: "преподаватель",
                                        startTime: new Date("7/Nov/2019 09:00:00"),
                                        endTime: new Date("7/Nov/2019 11:45:00"),
                                        days: "понедельник, четверг",
                                        startDate: new Date("21/Nov/2019"),
                                        price: 19000,
                                        priceWithoutDiscount: 23000,
                                        discountValue: 20,
                                        isAvailable: true
                                    },
                                    {
                                        teacherPhoto: "https://centroespanol.ru/api/teachers/rafael_small.png",
                                        teacherName: "Анхель",
                                        teacherPost: "преподаватель",
                                        startTime: new Date("7/Nov/2019 09:00:00"),
                                        endTime: new Date("7/Nov/2019 11:45:00"),
                                        days: "понедельник, четверг",
                                        startDate: new Date("21/Nov/2019"),
                                        price: 19000,
                                        priceWithoutDiscount: 23000,
                                        discountValue: 20,
                                        isAvailable: true
                                    },
                                    {
                                        teacherPhoto: "https://centroespanol.ru/api/teachers/rafael_small.png",
                                        teacherName: "Анхель",
                                        teacherPost: "преподаватель",
                                        startTime: new Date("7/Nov/2019 09:00:00"),
                                        endTime: new Date("7/Nov/2019 11:45:00"),
                                        days: "понедельник, четверг",
                                        startDate: new Date("21/Nov/2019"),
                                        price: 19000,
                                        priceWithoutDiscount: 23000,
                                        discountValue: 20,
                                        isAvailable: true
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        title: "Испанский для взрослых, стандарт",
                        durationDescription: "60 ак. часов (9 недель)",
                        languageLevels: [
                            {
                                title: "А1, начальный",
                                languageLevelItems: [
                                    {
                                        teacherPhoto: "https://centroespanol.ru/api/teachers/rafael_small.png",
                                        teacherName: "Анхель",
                                        teacherPost: "преподаватель",
                                        startTime: new Date("7/Nov/2019 09:00:00"),
                                        endTime: new Date("7/Nov/2019 11:45:00"),
                                        days: "понедельник, четверг",
                                        startDate: new Date("21/Nov/2019"),
                                        price: 19000,
                                        priceWithoutDiscount: 23000,
                                        discountValue: 20,
                                        isAvailable: true
                                    },
                                    {
                                        teacherPhoto: "https://centroespanol.ru/api/teachers/rafael_small.png",
                                        teacherName: "Анхель",
                                        teacherPost: "преподаватель",
                                        startTime: new Date("7/Nov/2019 09:00:00"),
                                        endTime: new Date("7/Nov/2019 11:45:00"),
                                        days: "понедельник, четверг",
                                        startDate: new Date("21/Nov/2019"),
                                        price: 19000,
                                        priceWithoutDiscount: 23000,
                                        discountValue: 20,
                                        isAvailable: true
                                    },
                                    {
                                        teacherPhoto: "https://centroespanol.ru/api/teachers/rafael_small.png",
                                        teacherName: "Анхель",
                                        teacherPost: "преподаватель",
                                        startTime: new Date("7/Nov/2019 09:00:00"),
                                        endTime: new Date("7/Nov/2019 11:45:00"),
                                        days: "понедельник, четверг",
                                        startDate: new Date("21/Nov/2019"),
                                        price: 19000,
                                        priceWithoutDiscount: 23000,
                                        discountValue: 20,
                                        isAvailable: false
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        }
    }
</script>

<style scoped>

    .schedule-page-container {
        background-color: white;
    }

    .schedule-page-header-container {
        height: 51.5rem;
        background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0.3), rgba(255, 239, 170, 0.3) 55%);
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
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

</style>