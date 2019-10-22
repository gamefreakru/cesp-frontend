<template>
    <div class="schedule-container">
        <SectionHeader class="schedule-container-header" image="course"
                       title="Schedule"
                       description="Расписание курсов испанского"/>
        <Delimiter/>
        <SubMenu v-bind:items="[
        {
            name: 'Типы курсов',
            active: false,
            link: '/courses'
        },
        {
            name: 'Расписание',
            active: true,
            link: '/schedule'
        },
        {
            name: 'Цены',
            active: false,
            link: '/prices'
        }]"/>
        <Delimiter/>
        <span class="schedule-section-header">Испанский язык — Начальный уровень (A1)</span>
        <table class="schedule-table">
            <tr>
                <td>Испанский язык A1 начальный уровень <b>Утренний курс</b></td>
                <td>Понедельник, Среда 10.00 - 12.45</td>
                <td>Старт 14 октября, набор открыт
                    <router-link to="/contacts">Записаться</router-link>
                </td>
            </tr>
            <tr>
                <td>Испанский язык A1 начальный уровень <b>Дневной курс</b></td>
                <td>Вторник, Четверг 12.00 - 14.45</td>
                <td>Старт 1 октября, набор открыт
                    <router-link to="/contacts">Записаться</router-link>
                </td>
            </tr>
            <tr>
                <td>Испанский язык A1 начальный уровень <b>Вечерний курс</b></td>
                <td>Вторник, Четверг 19.00 - 21.45</td>
                <td>Старт 8 октября, набор открыт
                    <router-link to="/contacts">Записаться</router-link>
                </td>
            </tr>
            <tr>
                <td>Испанский язык A1 начальный уровень <b>Вечерний курс</b></td>
                <td>Вторник, Четверг 19.00 - 21.45</td>
                <td>Старт 12 сентября, набор закрыт</td>
            </tr>
            <tr>
                <td>Испанский язык A1 начальный уровень <b>Курс выходного дня</b></td>
                <td>Суббота 10.30 - 14.30</td>
                <td>Старт 12 октября, набор открыт
                    <router-link to="/contacts">Записаться</router-link>
                </td>
            </tr>
            <tr>
                <td>Испанский язык A1 начальный уровень <b>Курс выходного дня</b></td>
                <td>Суббота 15.30 - 17.45</td>
                <td>Старт 21 октября, набор открыт
                    <router-link to="/contacts">Записаться</router-link>
                </td>
            </tr>
            <tr>
                <td>Испанский язык A1 начальный уровень <b>Курс выходного дня</b></td>
                <td>Воскресенье 14.00 - 18.00</td>
                <td>Старт 22 сентября, набор закрыт</td>
            </tr>
            <tr>
                <td>Испанский язык A1 начальный уровень <b>Курс выходного дня. Дети</b></td>
                <td>Воскресенье 12.00 - 14.00</td>
                <td>Старт 20 октября, набор открыт
                    <router-link to="/contacts">Записаться</router-link>
                </td>
            </tr>
        </table>
        <span class="schedule-section-header">Испанский язык — Начальный уровень (A2.1-A2.2)</span>
        <table class="schedule-table">
            <tr>
                <td>Испанский язык A2.1 начальный уровень <b>Утренний курс</b></td>
                <td>Понедельник, Четверг 09.30 - 12.15</td>
                <td>Старт 21 октября, набор открыт
                    <router-link to="/contacts">Записаться</router-link>
                </td>
            </tr>
            <tr>
                <td>Испанский язык A2.1 начальный уровень <b>Вечерний курс</b></td>
                <td>Понедельник, Среда 19.00 - 20.30</td>
                <td>Старт 9 сентября, набор закрыт</td>
            </tr>
            <tr>
                <td>Испанский язык A2.1 начальный уровень <b>Вечерний курс</b></td>
                <td>Вторник, Четверг 19.00 - 21.45</td>
                <td>Старт 8 октября, набор закрыт</td>
            </tr>
            <tr>
                <td>Испанский язык A2.1 начальный уровень <b>Курс выходного дня</b></td>
                <td>Суббота 13.00 - 17.00</td>
                <td>Старт 21 сентября, набор закрыт</td>
            </tr>
            <tr>
                <td>Испанский язык A2.2 начальный уровень <b>Утренний курс</b></td>
                <td>Вторник, Четверг 10.00 - 12.45</td>
                <td>Старт 22 октября, набор открыт
                    <router-link to="/contacts">Записаться</router-link>
                </td>
            </tr>
            <tr>
                <td>Испанский язык A2.2 начальный уровень <b>Вечерний курс</b></td>
                <td>Понедельник, Среда 19.00 - 21.45</td>
                <td>Старт 23 сентября, набор закрыт</td>
            </tr>
            <tr>
                <td>Испанский язык A2.2 начальный уровень <b>Курс выходного дня</b></td>
                <td>Воскресенье 10.30 - 14.30</td>
                <td>Старт 6 октября, набор закрыт</td>
            </tr>
        </table>
        <span class="schedule-section-header">Испанский язык — Продвинутый уровень (B1.1-B2.3)</span>
        <table class="schedule-table">
            <tr>
                <td>Испанский язык B1.1 продвинутый уровень <b>Дневной курс</b></td>
                <td>Вторник, Четверг 12.00 - 14.45</td>
                <td>Старт 8 октября, набор закрыт</td>
            </tr>
            <tr>
                <td>Испанский язык B1.1 продвинутый уровень <b>Вечерний курс</b></td>
                <td>Понедельник, Среда 19.00 - 21.45</td>
                <td>Старт 4 сентября, набор закрыт</td>
            </tr>
            <tr>
                <td>Испанский язык B1.2 продвинутый уровень <b>Вечерний курс</b></td>
                <td>Понедельник, Среда 19.00 - 21.45</td>
                <td>Старт 11 сентября, набор закрыт</td>
            </tr>
            <tr>
                <td>Испанский язык B1.2 продвинутый уровень <b>Курс выходного дня</b></td>
                <td>Суббота 10.00 - 14.30</td>
                <td>Старт 19 октября, набор открыт
                    <router-link to="/contacts">Записаться</router-link>
                </td>
            </tr>
            <tr>
                <td>Испанский язык B2.1 продвинутый уровень <b>Утренний курс</b></td>
                <td>Понедельник, Среда 09.30 - 12.15</td>
                <td>Старт 16 сентября, набор закрыт</td>
            </tr>
            <tr>
                <td>Испанский язык B2.1 продвинутый уровень <b>Вечерний курс</b></td>
                <td>Вторник, Четверг 19.00 - 21.45</td>
                <td>Старт 10 сентября, набор закрыт</td>
            </tr>
            <tr>
                <td>Испанский язык B2.2 продвинутый уровень <b>Вечерний курс</b></td>
                <td>Среда, Пятница 19.00 - 21.45</td>
                <td>Старт 23 октября, набор открыт
                    <router-link to="/contacts">Записаться</router-link>
                </td>
            </tr>
            <tr>
                <td>Испанский язык B2.3 продвинутый уровень <b>Курс выходного дня</b></td>
                <td>Суббота 10.30 - 14.30</td>
                <td>Старт 21 сентября, набор закрыт</td>
            </tr>
        </table>
        <span class="schedule-section-header">Испанский язык — Продвинутый уровень (С1.1)</span>
        <table class="schedule-table">
            <tr>
                <td>Испанский язык С1.1 продвинутый уровень <b>Курс выходного дня</b></td>
                <td>Суббота 15.00 - 19.00</td>
                <td>Старт 7 сентября, набор закрыт</td>
            </tr>
        </table>
        <span class="schedule-section-text">
            Полный список существующих или ближайших групп можно узнать по телефону <b>8-495-9207430 </b>
        </span>
        <span class="schedule-section-text">
            Если Вы не нашли нужной Вам информации, <router-link to="/contacts">свяжитесь с нами</router-link>
            чтобы первыми узнать о следующем наборе групп.
        </span>
    </div>
</template>

<script>
    import SectionHeader from '../components/SectionHeader.vue'
    import Delimiter from '../components/Delimiter'
    import SubMenu from '../components/SubMenu'

    export default {
        components: {
            SectionHeader,
            Delimiter,
            SubMenu
        }
    }
</script>

<style scoped>

    .schedule-container {
        display: flex;
        flex-direction: column;
        font-size: 1.6rem;
        padding: 0 5.5rem 2rem 5.5rem;
    }
    
    .schedule-container-header {
        margin-top: 15rem;
    }
    
    .schedule-section-header {
        font-size: 2.5rem;
        margin: 2rem 0;
        align-self: start;
    }

    .schedule-table {
        border-collapse: collapse;
        text-align: left;
        margin: 1rem 0;
    }

    .schedule-table td {
        border: 0.1rem solid #465f99;
        padding: 1rem 17rem 1rem 1rem;
    }
    
    .schedule-table a {
        text-decoration: none;
    }
    
    .schedule-section-text { 
        align-self: start;
        margin: 1rem 0;
    }
    
</style>