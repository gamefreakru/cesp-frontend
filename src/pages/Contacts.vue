<template>
    <div id="contacts">
        <SectionHeader image="contact"
                       title="Contactos"
                       description="Контакты"/>
        <div id="contacts-section">
            <div class="contacts-info">
                <span class="contacts-title">Напишите нам</span>
                <Input class="contacts-input" name="name" placeholder="Ваше имя"/>
                <Input class="contacts-input" name="email" placeholder="Email"/>
                <Input class="contacts-input" name="phone" placeholder="Телефон"/>
                <Input class="contacts-input" name="comments" placeholder="Письмо" :height=250 />
                <Button text="Отправить" link="#" :button-height="25" :button-width="150" style="align-self: center"/>
            </div>
            <div class="contacts-info">
                <span class="contacts-title">Наши контакты</span>
                <a class="contacts-label" :href="'tel:{{ phone }}'">{{ phone }}</a>
                <a class="contacts-label" :href="'tel:{{ additionalPhone }}'">{{ additionalPhone }}</a>
                <a class="contacts-label" :href="'mailto:{{ email }}'">{{ email }}</a>
                <br>
                <span v-for="(metro, index) in metroStationsInfo" v-bind:key="index"
                      v-bind:data="metro">{{ metro }}</span>
                <YandexMaps :height="325" style="margin-top: 20px"/>
            </div>
        </div>
    </div>
</template>

<script>

    import SectionHeader from '../components/SectionHeader'
    import Input from "../components/Input"
    import Button from "../components/Button"
    import YandexMaps from "../components/YandexMaps"

    export default {
        props: {
            phone: String,
            additionalPhone: String,
            email: String,
            address: String,
            metroStationsInfo: Array
        },
        components: {
            Input,
            Button,
            SectionHeader,
            YandexMaps
        }
    }
</script>

<style scoped>

    #contacts {
        padding: 6rem 5.5rem;
        font-size: 1.6rem;
        margin-top: 10rem;
    }

    #contacts-section {
        display: flex;
        margin-top: 2rem;
    }
    
    .contacts-title {
        font-weight: bold;
        align-self: center;
        margin: 2rem 0;
        font-size: 2rem;
    }

    .contacts-info {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin: 0 2rem;
    }
    
    .contacts-label {
        color: #312A1E;
        margin-bottom: 1rem;
    }

    .contacts-input {
        margin-bottom: 1.5rem;
    }
    
    .contacts-input-body {
        margin-bottom: 1.5rem;
    }

    .contacts-input-body::placeholder {
        margin-bottom: 1.5rem;
        vertical-align: top;
    }
    
</style>