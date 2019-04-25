<template>
    <div id="courses">

        <SectionHeader image="course"
                       title="Cursos"
                       description="Курсы испанского и каталонского в Москве"/>

        <Delimiter/>

        <SubMenu v-bind:items="[
        {
            name: 'Типы курсов',
            active: true
        },
        {
            name: 'Для начинающих',
            active: false
        },
        {
            name: 'Расписание и цены',
            active: false
        },
        {
            name: 'Запись',
            active: false
        }]"/>

        <Delimiter/>

        <div id="courses-grid">

            <Course image="spanish"
                    title="Испанский язык"
                    description="Классический курс испанского языка в Москве продолжительностью около двух месяцев. 
                    Такой курс легко можно сочетать с работой или учебой. Количество занятий в неделю спланировано так, 
                    чтобы не отнимать у Вас много свободного времени, но и не позволить забыть пройденный материал."
                    duration="60 ак. часов — 2 занятия в неделю по 3,3 академических часа плюс перерыв 15 минут. 
                    Общая продолжительность курса — 9 недель."
                    discount="Скидка 19%"
                    price-info="В стоимость входят учебные материалы."
            />

            <Course image="catalan"
                    title="Каталонский язык"
                    description="Каталонский язык является официальным языком Каталонии, Балеарских островов, Арагона, Валенсии и Андорры.
                У нас Вы можете изучать каталанский, общаясь с носителями языка, узнать новые аспекты много-культурной Испании."
            />

            <Course image="children"
                    title="Испанский для детей"
                    description="Методики преподавания испанского языка для детей отличается от методик для взрослых. 
                Здесь большое внимание уделяется заданиям в игровой форме, используется много визуальных материалов. 
                Мы проводим занятия для детей от 4 до 16 лет."
            />

        </div>
    </div>
</template>

<script>

    import SectionHeader from '.././SectionHeader.vue'
    import Delimiter from '.././Delimiter.vue'
    import SubMenu from '.././SubMenu.vue'
    import Course from '.././Course.vue'

    export default {
        name: "",
        components: {
            SectionHeader,
            Delimiter,
            SubMenu,
            Course
        }
    }
</script>

<style scoped>

    #courses {
        padding: 60px 55px;
    }

    #courses-grid {
        display: inline-grid;
        grid-template-columns: auto auto auto;
        grid-gap: 50px 35px;
    }

</style>