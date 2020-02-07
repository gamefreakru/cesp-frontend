<template>
    <div id="club-container">
        <span id="title">Разговорный клуб</span>
        <div id="header">
            <img alt="Разговорный клуб" src="../assets/club/logo.png" />
            <div id="description">
                <b>Друзья, мы рады сообщить вам, что проведение разговорного клуба возобновляется!</b>
                <br>
                <br>
                <b>Стоимость разового посещения разговорного клуба - 550 рублей, 
                    а если вы являетесь нашим постоянным учеником, то для вас действует специальная цена - 400 рублей </b>
                <br>
                <br>
                Разговорный клуб предназначен для тех, кто уже владеет испанским языком на уровне не ниже среднего,
                но хочет улучшить свои разговорные навыки и пополнить словарный запас.
                <br>
                <br>
                На каждом занятие мы обсуждаем новые темы. Материалами для разговора служат фильмы, документальные видео, статьи из газет.
                <br>
                <br>
                В результате вы обогащаете свой словарный запас, узнаете новые слова и выражения, 
                развиваете понимание устной речи и навыки спонтанного общения на испанском. 
                Разговорный клуб может стать отличным способом отдохнуть от сложного дня и в то же время узнать много нового и полезного.
                <br>
                <br>
                <div id="description-grid">

                    <span class="key">Уровни сложности</span>
                    <span>Желательно знание языка на уровне не ниже среднего</span>
                    <span class="key">Расписание</span>
                    <span>Пятница 19.00 - 21.00</span>
                    <span class="key">Продолижтельность</span>
                    <span>2 часа</span>
                </div>
                <Button text="Записаться" link="/contacts" :button-height=20 :button-width=150 />
            </div> 
        </div>
        <div id="events">
            <ClubEvent v-for="(clubEvent, index) in clubEvents" 
                       :key="index"
                       :date="clubEvent.date"
                       :image="clubEvent.photo"
                       :title="clubEvent.name"
                       :link="clubEvent.sysName"
                       :level="clubEvent.minLanguageLevel"
                       :description="clubEvent.shortInfo"
                       :leader-name="clubEvent.teacher" />
        </div>
    </div>
</template>

<script>
    
    import Button from '../components/Button'
    import ClubEvent from '../components/ClubEvent'
    import Service from '../service'
    
    export default {
        components: {
            Button,
            ClubEvent
        },
        methods: {
            getImgUrl(imagePath) {
                var images = require.context('../assets/club', false, /\.jpg$/);
                return images('./' + imagePath + ".jpg");
            }
        },
        data() {
            return {
                clubEvents: {}
            }
        },
        mounted() {
            Service.get("club", (status, data) => {
                this.clubEvents = data;
            })
        }
    }
</script>

<style scoped>

    img {
        height: 100%;
    }
    
    #club-container {
        padding: 60px 55px;
        margin-top: 20rem;
    }
    
    #title {
        font-size: 3rem;
        font-weight: bold;
        color: black;
    }
    
    #header {
        display: flex;
        margin: 20px 0;
    }
    
    #description {
        color: black;
        text-align: left;
        line-height: 1.5;
        font-size: 1.6rem;
        margin-left: 30px;
    }

    #description-grid {
        display: inline-grid;
        grid-template-columns: auto auto;
        grid-gap: 20px 20px;
    }
    
    .key {
        color: #465F99
    }
    
    #events {
        display: flex;
        flex-direction: column;
    }
    
</style>