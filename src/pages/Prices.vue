<template>
    <div class="prices-container">
        <SectionHeader class="prices-container-header" image="course"
                       title="Prices"
                       description="Цены на курсы испанского"/>
        <Delimiter/>
        <SubMenu v-bind:items="[
        {
            name: 'Типы курсов',
            active: false,
            link: '/courses'
        },
        {
            name: 'Расписание',
            active: false,
            link: '/schedule'
        },
        {
            name: 'Цены',
            active: true,
            link: '/prices'
        }]"/>
        <Delimiter/>
        <div class="prices-body-container">
            <table class="prices-body-container-table">
                <tr>
                    <th>Курс</th>
                    <th>Продолжительность</th>
                    <th>Кол-во часов</th>
                    <th>Стоимость при оплате полного курса</th>
                    <th>Стоимость при оплате 1/2 курса</th>
                </tr>
                <tr>
                    <td>Утренний, Дневной 1 зан. – 1 200 руб.</td>
                    <td>18 занятий, 9 недель</td>
                    <td>60 часов, 1 зан.- 3,3 ак.ч</td>
                    <td class="prices-body-container-table-discount">19 500 (-11% скидки)</td>
                    <td>11 000 + 11 000 (22 000)</td>
                </tr>
                <tr>
                    <td>Вечерний 1 зан. – 1 300 руб</td>
                    <td>18 занятий, 9 недель</td>
                    <td>60 часов, 1 зан.- 3,3 ак.ч</td>
                    <td class="prices-body-container-table-discount">22 000 (-10% скидки)</td>
                    <td>12 250 + 12 250 (24 500)</td>
                </tr>
                <tr>
                    <td>Выходного дня 11 зан. – 2 150 руб.</td>
                    <td>12 занятий, 12 недель</td>
                    <td>60 часов, 1 зан.- 5 ак.ч</td>
                    <td class="prices-body-container-table-discount">23 500 (-10% скидки)</td>
                    <td>13 000 + 13 000 (26 000)</td>
                </tr>
                <tr>
                    <td>Утренний, Дневной, Вечерний 1 зан.- 750 руб.</td>
                    <td>18 занятий в месяц, курс 2 месяца</td>
                    <td>30 часов 1 зан.- 2 ак.часа</td>
                    <td>-</td>
                    <td>6 000 руб. в месяц</td>
                </tr>
                <tr>
                    <td>Утренний, Дневной, Вечерний 1 зан. - 750 руб.</td>
                    <td>18 занятий в месяц, курс 4 месяца</td>
                    <td>60 часов 1 зан.- 2 ак.часа</td>
                    <td>-</td>
                    <td>6 000 руб. в месяц</td>
                </tr>
                <tr>
                    <td>Выходного дня 1 зан. – 1 600 руб.
                    </td>
                    <td>9 занятий, 9 недель</td>
                    <td>30 часов 1 зан.- 3,3 ак.часа</td>
                    <td>-</td>
                    <td>7 500 + 7 500 (15 000)</td>
                </tr>
                <tr>
                    <td>Интенсив</td>
                    <td>18 занятий, 4,5 недель, 4 раза в неделю</td>
                    <td>60 часов 1 зан.- 3,3 ак.часа</td>
                    <td>19 000 руб. 19 500 руб. 20 000 руб.</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>Индивидуальные</td>
                    <td>по 2 ак.часа</td>
                    <td>-</td>
                    <td>3 000 руб</td>
                    <td>-</td>
                </tr>
            </table>
            <span class="prices-body-container-text">* Продолжительность 1 академического часа - <b>45 минут</b>.</span>
            <span class="prices-body-container-text"><b>15%</b> - скидка для друзей <b>20 %</b> - семейная скидка</span>
            <Button text="Записаться" style="align-self: center"
                    link="/contacts"
                    :buttonWidth=160
                    :buttonHeight=15 />
        </div>
    </div>
</template>

<script>
    import SectionHeader from '../components/SectionHeader.vue'
    import Delimiter from '../components/Delimiter'
    import SubMenu from '../components/SubMenu'
    import Button from '../components/Button'

    export default {
        components: {
            SectionHeader,
            Delimiter,
            SubMenu,
            Button
        }
    }
</script>

<style scoped>

    .prices-container {
        font-size: 1.6rem;
        padding: 0 5.5rem 2rem 5.5rem;
    }

    .prices-container-header {
        margin-top: 15rem;
    }

    .prices-body-container {
        display: flex;
        flex-direction: column;
    }
    
    .prices-body-container-table {
        border-collapse: collapse;
        text-align: left;
        margin: 1rem 0;
    }

    .prices-body-container-table td, th {
        border: 0.1rem solid #465f99;
        padding: 1rem 1.5rem;
    }

    .prices-body-container-table-discount {
        color: #cd1c24;
        font-weight: bold;
    }
    
    .prices-body-container-text {
        text-align: left;
        margin: 1rem 0;
    }

</style>