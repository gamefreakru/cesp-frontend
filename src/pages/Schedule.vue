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
                <td>Вторник, Четверг 08.00 - 10.00</td>
                <td>Старт 16 сентября, набор открыт
                    <router-link to="/contacts">Записаться</router-link>
                </td>
            </tr>
            <tr>
                <td>Испанский язык A1 начальный уровень <b>Утренний курс</b></td>
                <td>Понедельник, Среда 09.00 - 10.30</td>
                <td>Старт 11 сентября, набор открыт
                    <router-link to="/contacts">Записаться</router-link>
                </td>
            </tr>
            <tr>
                <td>Испанский язык A1 начальный уровень <b>Дневной курс</b></td>
                <td>Вторник, Четверг 12.00 - 14.45</td>
                <td>Старт 1 сентября, набор открыт
                    <router-link to="/contacts">Записаться</router-link>
                </td>
            </tr>
            <tr>
                <td>Испанский язык A1 начальный уровень <b>Вечерний курс</b></td>
                <td>Вторник, Четверг 19.00 - 21.45</td>
                <td>Старт 10 сентября, набор открыт
                    <router-link to="/contacts">Записаться</router-link>
                </td>
            </tr>
            <tr>
                <td>Испанский язык A1 начальный уровень <b>Вечерний курс</b></td>
                <td>Вторник, Четверг 19.00 - 21.45</td>
                <td>Старт 1 августа, набор закрыт</td>
            </tr>
            <tr>
                <td>Испанский язык A1 начальный уровень <b>Вечерний курс</b></td>
                <td>Вторник, Четверг 20.35-22.05</td>
                <td>Старт 12 сентября, набор открыт
                    <router-link to="/contacts">Записаться</router-link>
                </td>
            </tr>
            <tr>
                <td>Испанский язык A1 начальный уровень <b>Курс выходного дня</b></td>
                <td>Суббота 13.00 - 17.00</td>
                <td>Старт 14 сентября, набор открыт
                    <router-link to="/contacts">Записаться</router-link>
                </td>
            </tr>
            <tr>
                <td>Испанский язык A1 начальный уровень <b>Курс выходного дня</b></td>
                <td>Воскресенье 12.00 - 16.00</td>
                <td>Старт 15 сентября, набор открыт
                    <router-link to="/contacts">Записаться »</router-link>
                </td>
            </tr>
        </table>
        <span class="schedule-section-header">Испанский язык — Начальный уровень (A1)</span>
        <table class="schedule-table">
            <tr>
                <td>Испанский язык A1 начальный уровень <b>Утренний курс</b></td>
                <td>Вторник, Четверг 08.00 - 10.00</td>
                <td>Старт 16 сентября, набор открыт
                    <router-link to="/contacts">Записаться</router-link>
                </td>
            </tr>
            <tr>
                <td>Испанский язык A1 начальный уровень <b>Утренний курс</b></td>
                <td>Понедельник, Среда 09.00 - 10.30</td>
                <td>Старт 11 сентября, набор открыт
                    <router-link to="/contacts">Записаться</router-link>
                </td>
            </tr>
            <tr>
                <td>Испанский язык A1 начальный уровень <b>Дневной курс</b></td>
                <td>Вторник, Четверг 12.00 - 14.45</td>
                <td>Старт 1 сентября, набор открыт
                    <router-link to="/contacts">Записаться</router-link>
                </td>
            </tr>
            <tr>
                <td>Испанский язык A1 начальный уровень <b>Вечерний курс</b></td>
                <td>Вторник, Четверг 19.00 - 21.45</td>
                <td>Старт 10 сентября, набор открыт
                    <router-link to="/contacts">Записаться</router-link>
                </td>
            </tr>
            <tr>
                <td>Испанский язык A1 начальный уровень <b>Вечерний курс</b></td>
                <td>Вторник, Четверг 19.00 - 21.45</td>
                <td>Старт 1 августа, набор закрыт</td>
            </tr>
            <tr>
                <td>Испанский язык A1 начальный уровень <b>Вечерний курс</b></td>
                <td>Вторник, Четверг 20.35-22.05</td>
                <td>Старт 12 сентября, набор открыт
                    <router-link to="/contacts">Записаться</router-link>
                </td>
            </tr>
            <tr>
                <td>Испанский язык A1 начальный уровень <b>Курс выходного дня</b></td>
                <td>Суббота 13.00 - 17.00</td>
                <td>Старт 14 сентября, набор открыт
                    <router-link to="/contacts">Записаться</router-link>
                </td>
            </tr>
            <tr>
                <td>Испанский язык A1 начальный уровень <b>Курс выходного дня</b></td>
                <td>Воскресенье 12.00 - 16.00</td>
                <td>Старт 15 сентября, набор открыт
                    <router-link to="/contacts">Записаться »</router-link>
                </td>
            </tr>
        </table>
        <span class="schedule-section-header">Испанский язык — Начальный уровень (A1)</span>
        <table class="schedule-table">
            <tr>
                <td>Испанский язык A1 начальный уровень <b>Утренний курс</b></td>
                <td>Вторник, Четверг 08.00 - 10.00</td>
                <td>Старт 16 сентября, набор открыт
                    <router-link to="/contacts">Записаться</router-link>
                </td>
            </tr>
            <tr>
                <td>Испанский язык A1 начальный уровень <b>Утренний курс</b></td>
                <td>Понедельник, Среда 09.00 - 10.30</td>
                <td>Старт 11 сентября, набор открыт
                    <router-link to="/contacts">Записаться</router-link>
                </td>
            </tr>
            <tr>
                <td>Испанский язык A1 начальный уровень <b>Дневной курс</b></td>
                <td>Вторник, Четверг 12.00 - 14.45</td>
                <td>Старт 1 сентября, набор открыт
                    <router-link to="/contacts">Записаться</router-link>
                </td>
            </tr>
            <tr>
                <td>Испанский язык A1 начальный уровень <b>Вечерний курс</b></td>
                <td>Вторник, Четверг 19.00 - 21.45</td>
                <td>Старт 10 сентября, набор открыт
                    <router-link to="/contacts">Записаться</router-link>
                </td>
            </tr>
            <tr>
                <td>Испанский язык A1 начальный уровень <b>Вечерний курс</b></td>
                <td>Вторник, Четверг 19.00 - 21.45</td>
                <td>Старт 1 августа, набор закрыт</td>
            </tr>
            <tr>
                <td>Испанский язык A1 начальный уровень <b>Вечерний курс</b></td>
                <td>Вторник, Четверг 20.35-22.05</td>
                <td>Старт 12 сентября, набор открыт
                    <router-link to="/contacts">Записаться</router-link>
                </td>
            </tr>
            <tr>
                <td>Испанский язык A1 начальный уровень <b>Курс выходного дня</b></td>
                <td>Суббота 13.00 - 17.00</td>
                <td>Старт 14 сентября, набор открыт
                    <router-link to="/contacts">Записаться</router-link>
                </td>
            </tr>
            <tr>
                <td>Испанский язык A1 начальный уровень <b>Курс выходного дня</b></td>
                <td>Воскресенье 12.00 - 16.00</td>
                <td>Старт 15 сентября, набор открыт
                    <router-link to="/contacts">Записаться »</router-link>
                </td>
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