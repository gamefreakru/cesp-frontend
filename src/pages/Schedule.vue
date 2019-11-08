<template>
    <div class="schedule-container">
        <SectionHeader class="schedule-container-header" image="course"
                       title="Horario"
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
                <th>Курс</th>
                <th>Время занятий</th>
                <th>Стоимость</th>
                <th>Начало обучения</th>
            </tr>
            <tr>
                <td>Испанский язык A1 начальный уровень</td>
                <td>Вторник, Четверг 12.00 - 14.45</td>
                <td>19 500 (скидка 10%)</td>
                <td>Старт 01.10.2019, набор открыт
                    <router-link to="/contacts">Записаться</router-link>
                </td>
            </tr>
            <tr>
                <td>Испанский язык A1 начальный уровень</td>
                <td>Понедельник, Среда 10.00 - 13.45</td>
                <td>19 500 (скидка 10%)</td>
                <td>Старт 6.11.2019, набор открыт
                    <router-link to="/contacts">Записаться</router-link>
                </td>
            </tr>
            <tr>
                <td>Испанский язык A1 начальный уровень</td>
                <td>Вторник, Четверг 19.00 - 21.45</td>
                <td>22 000 (скидка 10%)</td>
                <td>Старт 08.10.2019, набор открыт
                    <router-link to="/contacts">Записаться</router-link>
                </td>
            </tr>
            <tr>
                <td>Испанский язык A1 начальный уровень</td>
                <td>Вторник, Четверг 19.00 - 21.45</td>
                <td>22 000 (скидка 10%)</td>
                <td>Старт 12.09.2019, занятия идут, можно присоединиться
                    <router-link to="/contacts">Записаться</router-link>
                </td>
            </tr>
            <tr>
                <td>Испанский язык A1 начальный уровень</td>
                <td>Среда, Пятница 19.00 - 21.45</td>
                <td>22 000 (скидка 10%)</td>
                <td>Старт 06.11.2019, набор открыт
                    <router-link to="/contacts">Записаться</router-link>
                </td>
            </tr>
            <tr>
                <td>Испанский язык A1 начальный уровень</td>
                <td>Суббота 10.00 - 14.30</td>
                <td>23 500 (скидка 10%)</td>
                <td>Старт 09.11.2019, набор открыт
                    <router-link to="/contacts">Записаться</router-link>
                </td>
            </tr>
            <tr>
                <td>Испанский язык A1 начальный уровень</td>
                <td>Суббота 15.30 - 17.45</td>
                <td>23 500 (скидка 10%)</td>
                <td>Старт 21.10.2019, занятия идут, можно присоединиться
                    <router-link to="/contacts">Записаться</router-link>
                </td>
            </tr>
            <tr>
                <td>Испанский язык A1 начальный уровень</td>
                <td>Воскресенье 14.00 - 18.00</td>
                <td>23 500 (скидка 10%)</td>
                <td>Старт 22.09.2019, набор открыт
                    <router-link to="/contacts">Записаться</router-link>
                </td>
            </tr>
            <tr>
                <td>Испанский язык A1 начальный уровень</td>
                <td>Воскресенье 12.00 - 14.00</td>
                <td>23 500 (скидка 10%)</td>
                <td>Старт 20.10.2019, набор открыт
                    <router-link to="/contacts">Записаться</router-link>
                </td>
            </tr>
        </table>
        <span class="schedule-section-header">Испанский язык — Начальный уровень (A2.1-A2.2)</span>
        <table class="schedule-table">
            <tr>
                <th>Курс</th>
                <th>Время занятий</th>
                <th>Стоимость</th>
                <th>Начало обучения</th>
            </tr>
            <tr>
                <td>Испанский язык A2.1 начальный уровень</td>
                <td>Понедельник, Четверг 09.30 - 12.15</td>
                <td>19 500 (скидка 10%)</td>
                <td>Старт 25.11.2019, набор открыт
                    <router-link to="/contacts">Записаться</router-link>
                </td>
            </tr>
            <tr>
                <td>Испанский язык A2.1 начальный уровень</td>
                <td>Вторник, Четверг 19.00 - 21.45</td>
                <td>22 000 (скидка 10%)</td>
                <td>Старт 8.10.2019, набор открыт
                    <router-link to="/contacts">Записаться</router-link>
                </td>
            </tr>
            <tr>
                <td>Испанский язык A2.1 начальный уровень</td>
                <td>Суббота 13.00 - 17.00</td>
                <td>23 500 (скидка 10%)</td>
                <td>Старт 21.09.2019, занятия идут, можно записаться
                    <router-link to="/contacts">Записаться</router-link>
                </td>
            </tr>
            <tr>
                <td>Испанский язык A2.2 начальный уровень</td>
                <td>Вторник, четверг 10.00 - 12.45</td>
                <td>19 500 (скидка 10%)</td>
                <td>Старт 26.11.2019, набор открыт
                    <router-link to="/contacts">Записаться</router-link>
                </td>
            </tr>
            <tr>
                <td>Испанский язык A2.2 начальный уровень</td>
                <td>Понедельник, Среда 19.00 - 21.45</td>
                <td>22 000 (скидка 10%)</td>
                <td>Старт 23.09.2019, занятия идут, можно записаться
                    <router-link to="/contacts">Записаться</router-link>
                </td>
            </tr>
            <tr>
                <td>Испанский язык A2.2 начальный уровень</td>
                <td>Воскресенье 10.30 - 14.30</td>
                <td>23 500 (скидка 10%)</td>
                <td>Старт 06.10.2019, занятия идут, можно присоединиться
                    <router-link to="/contacts">Записаться</router-link>
                </td>
            </tr>
        </table>
        <span class="schedule-section-header">Испанский язык — Продвинутый уровень (B1.1-B2.3)</span>
        <table class="schedule-table">
            <tr>
                <th>Курс</th>
                <th>Время занятий</th>
                <th>Стоимость</th>
                <th>Начало обучения</th>
            </tr>
            <tr>
                <td>Испанский язык B1.1 продвинутый уровень</td>
                <td>Понедельник, среда 08.00 - 09.30</td>
                <td>18 000 (скидка 10%)</td>
                <td>Старт 04.11.2019, занятия идут, можно присоединиться
                    <router-link to="/contacts">Записаться</router-link>
                </td>
            </tr>
            <tr>
                <td>Испанский язык B1.1 продвинутый уровень</td>
                <td>Вторник, четверг 12.00 - 14.45</td>
                <td>19 500 (скидка 10%)</td>
                <td>Старт 08.10.2019, занятия идут, можно присоединиться
                    <router-link to="/contacts">Записаться</router-link>
                </td>
            </tr>
            <tr>
                <td>Испанский язык B1.1 продвинутый уровень</td>
                <td>Понедельник, Среда 19.00 - 21.45</td>
                <td>22 000 (скидка 10%)</td>
                <td>Старт 04.09.2019, занятия идут, можно присоединиться
                    <router-link to="/contacts">Записаться</router-link>
                </td>
            </tr>
            <tr>
                <td>Испанский язык B1.2 продвинутый уровень</td>
                <td>Понедельник, среда 19.00 - 21.45</td>
                <td>22 000 (скидка 10%)</td>
                <td>Старт 11.09.2019 октября, занятия идут, можно присоединиться
                    <router-link to="/contacts">Записаться</router-link>
                </td>
            </tr>
            <tr>
                <td>Испанский язык B1.2 продвинутый уровень</td>
                <td>Суббота 10.30 - 14.30</td>
                <td>23 500 (скидка 10%)</td>
                <td>Старт 32.11.2019, набот открыт
                    <router-link to="/contacts">Записаться</router-link>
                </td>
            </tr>
            <tr>
                <td>Испанский язык B2.1 продвинутый уровень</td>
                <td>Понедельник, Среда 09.30 - 12.15</td>
                <td>19 500 (скидка 10%)</td>
                <td>Старт 16.09.2019, занятия идут, можно присоединиться
                    <router-link to="/contacts">Записаться</router-link>
                </td>
            </tr>
            <tr>
                <td>Испанский язык B2.1 продвинутый уровень</td>
                <td>Понедельник, Среда 19.00 - 21.45</td>
                <td>22 000 (скидка 10%)</td>
                <td>Старт 11.11.2019, набор открыт
                    <router-link to="/contacts">Записаться</router-link>
                </td>
            </tr>
            <tr>
                <td>Испанский язык B2.1 продвинутый уровень</td>
                <td>Вторник, Четверг 19.00 - 21.45</td>
                <td>22 000 (скидка 10%)</td>
                <td>Старт 10.09.2019, занятия идут, можно присоединиться
                    <router-link to="/contacts">Записаться</router-link>
                </td>
            </tr>
            <tr>
                <td>Испанский язык B2.2 продвинутый уровень</td>
                <td>Вторник, Четверг 19.00 - 21.45</td>
                <td>22 000 (скидка 10%)</td>
                <td>Старт 21.11.2019, набор открыт
                    <router-link to="/contacts">Записаться</router-link>
                </td>
            </tr>
            <tr>
                <td>Испанский язык B2.3 продвинутый уровень</td>
                <td>Суббота 10.30 - 14.30</td>
                <td>23 500 (скидка 10%)</td>
                <td>Старт 21.09.2019, занятия идут, можно присоединиться
                    <router-link to="/contacts">Записаться</router-link>
                </td>
            </tr>
        </table>
        <span class="schedule-section-header">Испанский язык — Продвинутый уровень (С1.1)</span>
        <table class="schedule-table">
            <tr>
                <th>Курс</th>
                <th>Время занятий</th>
                <th>Стоимость</th>
                <th>Начало обучения</th>
            </tr>
            <tr>
                <td>Испанский язык С1.1 продвинутый уровень</td>
                <td>Суббота 15.00 - 19.00</td>
                <td>23 500 (скидка 10%)</td>
                <td>Старт 07.09.2019, занятия идут, можно присоединиться
                    <router-link to="/contacts">Записаться</router-link>
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

    .schedule-table td, th {
        border: 0.1rem solid #465f99;
        padding: 1rem 13rem 1rem 1rem;
    }
    
    .schedule-table a {
        text-decoration: none;
    }
    
    .schedule-section-text { 
        align-self: start;
        margin: 1rem 0;
    }
    
</style>