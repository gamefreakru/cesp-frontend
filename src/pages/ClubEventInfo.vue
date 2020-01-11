<template>
    <div id="club-event">
        <div id="club-event-section">
            <span id="title">Разговорный клуб "{{ clubEventInfo.name }}"</span>
            <br>
            <div id="description">
                <span>
                    <b>{{ clubEventInfo.date | moment("DD.MM.YYYY") }}</b>
                    в Centro VAMOS на нашем еженедельном разговорном клубе мы обсудим тему
                    <b>"{{ clubEventInfo.name }}"</b>
                </span>
                <br>
                <b>Специально для вас мы заранее подготовили вопросы, которые мы обсудим на нашем разговорном клубе:</b>
            </div>
            <br>
            <div v-html="clubEventInfo.info"></div>
            <br>
            <b>Ведущий: <span>{{ clubEventInfo.teacher }}</span></b>
            <span>Ждём вас! Начало: 19.00</span>
            <Button text="Записаться онлайн" link="/contacts" :button-height="20" :button-width=300 style="align-self: center"/>
        </div>
    </div>
</template>

<script>

    import Button from '../components/Button'
    import Service from '../service'

    export default {
        components: {
            Button
        },
        data() {
            return {
                clubEventInfo: {},
            }
        },
        mounted() {
            Service.get("club/" + this.$route.params.name, (status, data) => {
                this.clubEventInfo = data;
            })
        }
    }
</script>

<style scoped>

    #club-event {
        padding: 60px 55px;
        color: black;
    }

    #club-event-section {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        font-size: 1.6rem;
        line-height: 1.5;
        text-align: left;
        margin-top: 20rem;
    }

    #title {
        font-size: 2rem;
        font-weight: bold;
    }

    a {
        font-weight: bold;
        color: #465F99;
        text-decoration: none;
    }

    a:hover {
        color: black;
    }

</style>